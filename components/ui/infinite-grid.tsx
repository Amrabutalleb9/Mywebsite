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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const fg = fgLayerRef.current
    if (!fg) return
    const { left, top } = e.currentTarget.getBoundingClientRect()
    const mask = `radial-gradient(350px circle at ${e.clientX - left}px ${e.clientY - top}px, black, transparent)`
    fg.style.maskImage = mask
    fg.style.webkitMaskImage = mask
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
