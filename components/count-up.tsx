"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "motion/react"

/**
 * Counts every number inside `value` up from zero ("50+", "2–3", "25").
 * The final value is in the server HTML, so it reads correctly without JS.
 * It resets once fully off screen and counts again each time it comes back.
 * Reduced motion shows the final value with no animation.
 */
export default function CountUp({ value, duration = 1600, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { amount: 0.6 })
  const onScreen = useInView(ref)
  const reduced = useReducedMotion()
  const [p, setP] = useState(1)
  const armed = useRef(false)

  // Arm on mount, so it also counts the first time it is seen.
  useEffect(() => {
    if (reduced) return
    armed.current = true
    setP(0)
  }, [reduced])

  useEffect(() => {
    if (reduced || onScreen) return
    armed.current = true
    setP(0)
  }, [onScreen, reduced])

  useEffect(() => {
    if (!inView || !armed.current || reduced) return
    armed.current = false
    let raf = 0
    const begin = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - begin) / duration, 1)
      setP(1 - Math.pow(1 - t, 3))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      setP(1)
    }
  }, [inView, duration, reduced])

  const shown = p >= 1 ? value : value.replace(/\d+/g, (d) => String(Math.round(Number(d) * p)))

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`} aria-label={value}>
      <span aria-hidden="true">{shown}</span>
    </span>
  )
}
