"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

/**
 * IntersectionObserver + .revealed — content is visible if JS disabled (no inline opacity).
 * Reduced motion: no hide state, instant visible.
 */
export function ScrollReveal({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = usePrefersReducedMotion()
  const [revealed, setRevealed] = useState(reduce)

  useLayoutEffect(() => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const vh = typeof window !== "undefined" ? window.innerHeight : 800
    if (r.top < vh * 0.92 && r.bottom > -60) {
      setRevealed(true)
      return
    }
  }, [reduce])

  useEffect(() => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    if (revealed) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduce, revealed])

  return (
    <div
      ref={ref}
      id={id}
      className={["reveal-target", revealed ? "revealed" : "", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  )
}
