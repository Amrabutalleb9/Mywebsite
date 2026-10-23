"use client"

import { useEffect, useRef, type ReactNode } from "react"

/* Drives the About section's gold line from the scroll position.
   The line's tip sits at TIP of the viewport height. As the tip moves down, the opener
   stroke finishes, the spine fills, and each story step fades and rises in step with the tip.
   Scrolling up runs everything backwards. Without JavaScript (no data-ink-ready),
   the line and content render complete. Reduced motion shows everything at once. */

const TIP = 0.62
const LOAD_SHARE = 0.72 // how much of the opener stroke draws on load; the rest follows the scroll
const LOAD_MS = 2200
const REVEAL_OFFSET = 40
const REVEAL_RANGE = 280

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export default function InkScroll({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.dataset.inkReady = "true"

    const opener = el.querySelector<SVGPathElement>("[data-ink-opener]")
    const cells = Array.from(el.querySelectorAll<HTMLElement>("[data-ink-cell]"))
    const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-ink-step]"))
    const turn = el.querySelector<HTMLElement>("[data-ink-turn]")
    const turnSvg = turn?.querySelector<SVGSVGElement>("svg[data-ink-turn-svg]")
    const turnPath = turn?.querySelector<SVGPathElement>("path[data-ink-turn-path]")
    const drop = turn?.querySelector<SVGGElement>("g[data-ink-drop]")

    /* Lay the turn out from the real spine position: an S from the spine down to the centre. */
    const layoutTurn = () => {
      if (!turn || !turnSvg || !turnPath || !drop || cells.length === 0) return
      const tr = turn.getBoundingClientRect()
      const last = cells[cells.length - 1]
      const cr = last.getBoundingClientRect()
      const bw = parseFloat(getComputedStyle(last).borderLeftWidth) || 4
      const sx = cr.left + bw / 2 - tr.left
      const w = tr.width
      const h = tr.height
      const cx = w / 2
      const dropH = w >= 1280 ? 38 : 30
      const end = h - dropH + 4
      turnSvg.setAttribute("viewBox", `0 0 ${w} ${h}`)
      turnSvg.style.height = `${h}px`
      turnPath.setAttribute("d", `M ${sx} 0 C ${sx} ${end * 0.6}, ${cx} ${end * 0.35}, ${cx} ${end}`)
      turnPath.setAttribute("stroke-width", String(bw))
      const s = dropH / 38
      drop.setAttribute("transform", `translate(${cx - 13 * s} ${end - 4}) scale(${s})`)
    }

    const loadStart = performance.now()
    let loadP = reduced ? 1 : 0
    let raf = 0

    const frame = () => {
      raf = 0
      const vh = window.innerHeight
      const tip = vh * TIP

      // Opener stroke: the load animation draws the loop, the scroll finishes the tail.
      if (opener) {
        const box = opener.ownerSVGElement?.getBoundingClientRect()
        let scrollP = 0
        if (box && box.height > 0) {
          const tailTop = box.top + box.height * (690 / 880)
          scrollP = clamp((tip - tailTop) / (box.bottom - tailTop))
        }
        const p = reduced ? 1 : loadP * (LOAD_SHARE + scrollP * (1 - LOAD_SHARE))
        opener.style.strokeDashoffset = String(1 - p)
      }

      for (const c of cells) {
        const r = c.getBoundingClientRect()
        const fill = c.firstElementChild as HTMLElement | null
        if (fill) fill.style.height = `${reduced ? r.height : clamp(tip - r.top, 0, r.height)}px`
      }

      // Each step is scrubbed by the line: 0 until the tip reaches it, 1 once the tip is
      // REVEAL_RANGE past it, and back down again when the tip retreats.
      for (const s of steps) {
        const r = s.getBoundingClientRect()
        const p = reduced ? 1 : clamp((tip - r.top + REVEAL_OFFSET) / REVEAL_RANGE)
        s.style.setProperty("--p", p.toFixed(3))
      }

      if (turn && turnPath && drop) {
        const r = turn.getBoundingClientRect()
        const p = reduced ? 1 : clamp((tip - r.top) / r.height)
        turnPath.style.strokeDashoffset = String(1 - p)
        drop.style.opacity = p > 0.97 ? "1" : "0"
      }
    }

    const request = () => {
      if (!raf) raf = requestAnimationFrame(frame)
    }

    // Load draw for the opener loop.
    let loadRaf = 0
    const tickLoad = (now: number) => {
      loadP = easeOut(clamp((now - loadStart - 200) / LOAD_MS))
      frame()
      if (loadP < 1) loadRaf = requestAnimationFrame(tickLoad)
    }

    layoutTurn()
    frame()
    if (!reduced) loadRaf = requestAnimationFrame(tickLoad)

    const onResize = () => {
      layoutTurn()
      request()
    }
    window.addEventListener("scroll", request, { passive: true })
    window.addEventListener("resize", onResize)
    const ro = new ResizeObserver(onResize)
    ro.observe(el)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(loadRaf)
      window.removeEventListener("scroll", request)
      window.removeEventListener("resize", onResize)
      ro.disconnect()
      delete el.dataset.inkReady
    }
  }, [])

  return (
    <div ref={root} className="ink-scroll">
      {children}
    </div>
  )
}
