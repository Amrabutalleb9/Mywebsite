"use client"

import { useEffect, useState, type RefObject } from "react"

/**
 * Small stand-ins for motion's useInView and useReducedMotion, so the homepage does not load the
 * motion library. Same options and the same behaviour: `amount` is the share of the element that
 * must be visible, `margin` grows or shrinks the viewport, `once` stops watching after the first hit.
 */
export function useInView(
  ref: RefObject<Element | null>,
  { amount = 0, margin, once = false }: { amount?: number; margin?: string; once?: boolean } = {},
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting && once) io.disconnect()
      },
      { rootMargin: margin, threshold: amount },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref, amount, margin, once])

  return inView
}

const REDUCED = "(prefers-reduced-motion: reduce)"

export function useReducedMotion() {
  // Read on the first client render, as motion's hook does, so effects see the right value at once.
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && !!window.matchMedia?.(REDUCED).matches)

  useEffect(() => {
    const mq = window.matchMedia?.(REDUCED)
    if (!mq) return
    const on = () => setReduced(mq.matches)
    on()
    mq.addEventListener("change", on)
    return () => mq.removeEventListener("change", on)
  }, [])

  return reduced
}
