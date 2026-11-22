"use client"

import React, { useRef, useCallback } from "react"

interface InfiniteGridProps {
  children: React.ReactNode
  className?: string
}

/*
 * The drifting hero grid. The lines are a CSS background on a layer one cell larger than the hero,
 * and the drift is a CSS transform animation (.grid-drift in globals.css), so it runs on the
 * compositor and costs the main thread nothing. Under reduced motion the grid stands still.
 * The brighter grid follows the pointer through a radial mask.
 */
export function InfiniteGrid({ children, className = "" }: InfiniteGridProps) {
  const fgLayerRef = useRef<HTMLDivElement>(null)

  // Only two custom properties change per move; the mask itself lives in CSS (.grid-spot). The hero's
  // position is read once per move from a cached rect (refreshed on resize and scroll), not forced
  // from layout each time. Until the first move (and on touch) the bright layer shows in full, as before.
  const rectRef = useRef<DOMRect | null>(null)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const fg = fgLayerRef.current
    if (!fg) return
    if (!rectRef.current) {
      rectRef.current = e.currentTarget.getBoundingClientRect()
      const reset = () => { rectRef.current = null }
      window.addEventListener("scroll", reset, { passive: true, once: true })
      window.addEventListener("resize", reset, { passive: true, once: true })
    }
    const { left, top } = rectRef.current
    fg.style.setProperty("--mx", `${e.clientX - left}px`)
    fg.style.setProperty("--my", `${e.clientY - top}px`)
    fg.dataset.spot = ""
  }, [])

  return (
    <div onMouseMove={handleMouseMove} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.14]" aria-hidden="true">
        <div className="grid-lines grid-drift" />
      </div>
      <div
        ref={fgLayerRef}
        className="absolute inset-0 z-0 overflow-hidden opacity-50"
        aria-hidden="true"
      >
        <div className="grid-lines grid-drift" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
