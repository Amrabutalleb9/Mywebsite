"use client"

import { useRef, useEffect, useCallback } from "react"

export function useMarquee(speed: number) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(speed)
  const targetVelocityRef = useRef(speed)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    let lastTime = performance.now()
    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000
      lastTime = now
      velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.03
      offsetRef.current -= velocityRef.current * dt
      const track = trackRef.current
      if (track) {
        const half = track.scrollWidth / 2
        if (Math.abs(offsetRef.current) >= half) offsetRef.current += half
        track.style.transform = `translateX(${offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const pause = useCallback(() => { targetVelocityRef.current = 0 }, [])
  const resume = useCallback(() => { targetVelocityRef.current = speed }, [speed])

  return { trackRef, pause, resume }
}
