"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const DOT_EASE = 0.5
const RING_EASE = 0.14
const IDLE_THRESHOLD = 0.4

function canUseCustomCursor() {
  if (typeof window === "undefined") return false
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
  return finePointer && !reducedMotion && !isTouch
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotWrapperRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const labelSpanRef = useRef<HTMLSpanElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const dotSmoothRef = useRef({ x: -100, y: -100 })
  const ringSmoothRef = useRef({ x: -100, y: -100 })
  const labelRef = useRef("")
  const visibleRef = useRef(false)
  const animatingRef = useRef(false)
  const rafRef = useRef<number>(0)

  const findCursorLabel = useCallback((el: HTMLElement | null): string => {
    while (el) {
      const val = el.getAttribute("data-cursor-label")
      if (val) return val
      if (el.getAttribute("data-cursor-none") !== null) return ""
      el = el.parentElement
    }
    return ""
  }, [])

  const snapTo = useCallback((x: number, y: number) => {
    posRef.current.x = x
    posRef.current.y = y
    dotSmoothRef.current.x = x
    dotSmoothRef.current.y = y
    ringSmoothRef.current.x = x
    ringSmoothRef.current.y = y
  }, [])

  useEffect(() => {
    const updateEnabled = () => setEnabled(canUseCustomCursor())
    updateEnabled()

    const finePointerMq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reducedMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)")
    finePointerMq.addEventListener("change", updateEnabled)
    reducedMotionMq.addEventListener("change", updateEnabled)

    return () => {
      finePointerMq.removeEventListener("change", updateEnabled)
      reducedMotionMq.removeEventListener("change", updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add("cursor-active")

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const applyTransforms = () => {
      const dot = dotSmoothRef.current
      const ring = ringSmoothRef.current

      if (dotWrapperRef.current) {
        dotWrapperRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
    }

    const animate = () => {
      const target = posRef.current
      const dot = dotSmoothRef.current
      const ring = ringSmoothRef.current

      dot.x = lerp(dot.x, target.x, DOT_EASE)
      dot.y = lerp(dot.y, target.y, DOT_EASE)
      ring.x = lerp(ring.x, target.x, RING_EASE)
      ring.y = lerp(ring.y, target.y, RING_EASE)

      applyTransforms()

      const dotDelta = Math.abs(dot.x - target.x) + Math.abs(dot.y - target.y)
      const ringDelta = Math.abs(ring.x - target.x) + Math.abs(ring.y - target.y)

      if (dotDelta < IDLE_THRESHOLD && ringDelta < IDLE_THRESHOLD) {
        animatingRef.current = false
        return
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      if (animatingRef.current) return
      animatingRef.current = true
      rafRef.current = requestAnimationFrame(animate)
    }

    const showCursor = (x: number, y: number) => {
      snapTo(x, y)
      applyTransforms()
      visibleRef.current = true
      if (dotWrapperRef.current) dotWrapperRef.current.style.opacity = "1"
      if (ringRef.current) ringRef.current.style.opacity = labelRef.current ? "0" : "1"
      if (dotRef.current) {
        dotRef.current.style.width = "12px"
        dotRef.current.style.height = "12px"
      }
      startAnimation()
    }

    const setLabel = (newLabel: string) => {
      if (newLabel === labelRef.current) return
      labelRef.current = newLabel
      const hasLabel = newLabel.length > 0

      if (ringRef.current) {
        ringRef.current.style.opacity = hasLabel ? "0" : visibleRef.current ? "1" : "0"
      }
      if (dotRef.current) {
        if (hasLabel) {
          dotRef.current.style.width = "auto"
          dotRef.current.style.height = "auto"
          dotRef.current.style.padding = "14px 22px"
        } else {
          dotRef.current.style.width = "12px"
          dotRef.current.style.height = "12px"
          dotRef.current.style.padding = "0"
        }
      }
      if (labelSpanRef.current) {
        labelSpanRef.current.textContent = newLabel
        labelSpanRef.current.style.opacity = hasLabel ? "1" : "0"
        labelSpanRef.current.style.transform = hasLabel ? "scale(1)" : "scale(0.8)"
      }
    }

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY

      if (!visibleRef.current) showCursor(e.clientX, e.clientY)
      else startAnimation()

      setLabel(findCursorLabel(e.target as HTMLElement))
    }

    const onLeave = () => {
      visibleRef.current = false
      animatingRef.current = false
      cancelAnimationFrame(rafRef.current)
      if (dotWrapperRef.current) dotWrapperRef.current.style.opacity = "0"
      if (ringRef.current) ringRef.current.style.opacity = "0"
      if (dotRef.current) {
        dotRef.current.style.width = "0"
        dotRef.current.style.height = "0"
      }
    }

    const onEnter = (e: MouseEvent) => {
      showCursor(e.clientX, e.clientY)
      setLabel(findCursorLabel(e.target as HTMLElement))
    }

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      document.documentElement.classList.remove("cursor-active")
      animatingRef.current = false
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [enabled, findCursorLabel, snapTo])

  if (!enabled) return null

  const morphTransition =
    "width 0.2s cubic-bezier(0.23, 1, 0.32, 1), height 0.2s cubic-bezier(0.23, 1, 0.32, 1), padding 0.2s cubic-bezier(0.23, 1, 0.32, 1)"

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden size-9 rounded-full border border-foreground md:block"
        style={{ opacity: 0, willChange: "transform, opacity", transition: "opacity 0.15s ease" }}
      />
      <div
        ref={dotWrapperRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{ opacity: 0, willChange: "transform", transition: "opacity 0.15s ease" }}
      >
        <div
          ref={dotRef}
          className="flex items-center justify-center rounded-full bg-foreground"
          style={{ width: 0, height: 0, padding: 0, transition: morphTransition }}
        >
          <span
            ref={labelSpanRef}
            className="whitespace-nowrap text-center text-[10px] font-medium tracking-[var(--tracking-label)] text-background uppercase"
            style={{ opacity: 0, transform: "scale(0.8)", transition: "opacity 0.12s ease, transform 0.12s ease" }}
          />
        </div>
      </div>
    </>
  )
}
