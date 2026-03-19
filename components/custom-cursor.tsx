"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const labelSpanRef = useRef<HTMLSpanElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const smoothRef = useRef({ x: -100, y: -100 })
  const labelRef = useRef("")
  const visibleRef = useRef(false)
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

  useEffect(() => {
    if (typeof window === "undefined") return

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    document.documentElement.classList.add("cursor-active")

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      smoothRef.current.x = lerp(smoothRef.current.x, posRef.current.x, 0.15)
      smoothRef.current.y = lerp(smoothRef.current.y, posRef.current.y, 0.15)

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${smoothRef.current.x}px, ${smoothRef.current.y}px, 0) translate(-50%, -50%)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY

      if (!visibleRef.current) {
        visibleRef.current = true
        if (wrapperRef.current) wrapperRef.current.style.opacity = "1"
      }

      const target = e.target as HTMLElement
      const newLabel = findCursorLabel(target)
      if (newLabel !== labelRef.current) {
        labelRef.current = newLabel
        const hasLabel = newLabel.length > 0
        if (dotRef.current) {
          dotRef.current.style.width = hasLabel ? "100px" : "20px"
          dotRef.current.style.height = hasLabel ? "100px" : "20px"
        }
        if (labelSpanRef.current) {
          labelSpanRef.current.textContent = newLabel
          labelSpanRef.current.style.opacity = hasLabel ? "1" : "0"
          labelSpanRef.current.style.transform = hasLabel ? "scale(1)" : "scale(0.8)"
        }
      }
    }

    const onLeave = () => {
      visibleRef.current = false
      if (wrapperRef.current) wrapperRef.current.style.opacity = "0"
    }

    const onEnter = () => {
      visibleRef.current = true
      if (wrapperRef.current) wrapperRef.current.style.opacity = "1"
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      document.documentElement.classList.remove("cursor-active")
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [findCursorLabel])

  if (isTouch) return null

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{ opacity: 0, willChange: "transform", transition: "opacity 0.2s" }}
    >
      <div
        ref={dotRef}
        className="flex items-center justify-center rounded-full bg-black"
        style={{
          width: 0,
          height: 0,
          transition: "width 0.25s cubic-bezier(0.23, 1, 0.32, 1), height 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <span
          ref={labelSpanRef}
          className="text-[10px] font-medium tracking-[var(--tracking-label)] text-white uppercase"
          style={{ opacity: 0, transform: "scale(0.8)", transition: "opacity 0.15s, transform 0.15s" }}
        />
      </div>
    </div>
  )
}
