"use client"

import { useRef, useEffect, useCallback } from "react"

const clientNames = [
  "The Line Real Estate", "Overpowered Agency", "Steven Hodel", "Dipa Art School", "Split Fitness",
  "Alfy Marble", "Alienor Skincare", "Agfin", "Taptools", "ADRAW",
  "Freelancer.com", "Like a Nerd", "Edge Holdings", "Gwelly Law Firm", "Ezz Law Firm",
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

export default function ClientTicker() {
  const { trackRef, pause, resume } = useMarquee(50)
  return (
    <div
      className="overflow-hidden border-y border-border py-6"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "3rem", width: "max-content", willChange: "transform" }}
      >
        {[...clientNames, ...clientNames, ...clientNames].map((name, i) => (
          <span
            key={`${name}-${i}`}
            style={{ flexShrink: 0, whiteSpace: "nowrap" }}
            className="text-sm tracking-widest text-muted-foreground uppercase"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
