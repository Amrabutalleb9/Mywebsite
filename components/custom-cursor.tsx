"use client"

import { useEffect, useRef, useState } from "react"

/* A label tooltip that follows the pointer over elements with data-cursor-label (project cards and
   media). Everywhere else, links included, the normal system cursor is used and nothing is drawn. */
const LABELLED = "[data-cursor-label]"
const EASE = 0.35

function canUseCursorLabel() {
  if (typeof window === "undefined") return false
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  return finePointer && !reducedMotion
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const tipRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const update = () => setEnabled(canUseCursorLabel())
    update()
    const a = window.matchMedia("(hover: hover) and (pointer: fine)")
    const b = window.matchMedia("(prefers-reduced-motion: reduce)")
    a.addEventListener("change", update)
    b.addEventListener("change", update)
    return () => {
      a.removeEventListener("change", update)
      b.removeEventListener("change", update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add("cursor-active")

    const target = { x: -200, y: -200 }
    const pos = { x: -200, y: -200 }
    let raf = 0
    let running = false
    let label = ""

    const place = () => {
      if (tipRef.current) tipRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
    }
    const tick = () => {
      pos.x += (target.x - pos.x) * EASE
      pos.y += (target.y - pos.y) * EASE
      place()
      if (Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) < 0.3) {
        running = false
        return
      }
      raf = requestAnimationFrame(tick)
    }
    const run = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(tick)
    }
    const show = (text: string, x: number, y: number) => {
      if (!label) {
        // Appear where the pointer is, not where it was last seen.
        pos.x = target.x = x
        pos.y = target.y = y
        place()
      }
      if (text !== label && textRef.current) textRef.current.textContent = text
      label = text
      if (tipRef.current) {
        tipRef.current.style.opacity = "1"
        tipRef.current.dataset.on = "true"
      }
    }
    const hide = () => {
      label = ""
      if (tipRef.current) {
        tipRef.current.style.opacity = "0"
        tipRef.current.dataset.on = "false"
      }
    }

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      const el = (e.target as Element | null)?.closest?.(LABELLED) as HTMLElement | null
      const text = el?.getAttribute("data-cursor-label") ?? ""
      if (text) {
        show(text, e.clientX, e.clientY)
        run()
      } else if (label) {
        hide()
      }
    }

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", hide)
    window.addEventListener("scroll", hide, { passive: true })
    return () => {
      document.documentElement.classList.remove("cursor-active")
      cancelAnimationFrame(raf)
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", hide)
      window.removeEventListener("scroll", hide)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={tipRef}
      aria-hidden="true"
      className="cursor-tip pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{ opacity: 0, willChange: "transform, opacity", transition: "opacity 0.18s ease" }}
    >
      <span
        ref={textRef}
        className="block whitespace-nowrap rounded-full bg-foreground px-5 py-3 text-[11px] font-medium tracking-[var(--tracking-label)] text-background uppercase shadow-[0_10px_30px_-10px_rgba(13,13,26,0.45)]"
      />
    </div>
  )
}
