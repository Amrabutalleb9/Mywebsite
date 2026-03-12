"use client"

import { useRef, useEffect, useCallback } from "react"

const marqueeItems = [
  "Brand Identity",
  "Creative Direction",
  "UI/UX Design",
  "Art Direction",
  "Typography Systems",
  "Campaign Design",
]

function useMarquee(speed: number) {
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

export default function MarqueeBanner() {
  const { trackRef, pause, resume } = useMarquee(80)
  return (
    <div
      className="relative z-10 overflow-hidden bg-primary py-6 lg:py-8"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "1rem", width: "max-content", willChange: "transform" }}
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0, whiteSpace: "nowrap" }}
            className="font-serif text-[length:var(--text-page)] font-normal text-primary-foreground"
          >
            {item}
            <span className="text-accent" aria-hidden="true">{"\u00B7"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
