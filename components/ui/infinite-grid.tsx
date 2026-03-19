"use client"

import React, { useRef, useId, useState, useEffect, useCallback } from "react"

const GRID_SIZE = 48
const GRID_SPEED = 0.5

interface InfiniteGridProps {
  children: React.ReactNode
  className?: string
}

export function InfiniteGrid({ children, className = "" }: InfiniteGridProps) {
  const id = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const bgPatternRef = useRef<SVGPatternElement>(null)
  const fgPatternRef = useRef<SVGPatternElement>(null)
  const fgLayerRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef({ x: 0, y: 0 })
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const bgPatternId = `grid-bg-${id}`
  const fgPatternId = `grid-fg-${id}`

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let rafId: number
    const animate = () => {
      offsetRef.current.x = (offsetRef.current.x + GRID_SPEED) % GRID_SIZE
      offsetRef.current.y = (offsetRef.current.y + GRID_SPEED) % GRID_SIZE
      const x = offsetRef.current.x
      const y = offsetRef.current.y
      bgPatternRef.current?.setAttribute("x", String(x))
      bgPatternRef.current?.setAttribute("y", String(y))
      fgPatternRef.current?.setAttribute("x", String(x))
      fgPatternRef.current?.setAttribute("y", String(y))
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isVisible])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseRef.current.x = e.clientX - left
    mouseRef.current.y = e.clientY - top
    if (fgLayerRef.current) {
      fgLayerRef.current.style.maskImage = `radial-gradient(350px circle at ${mouseRef.current.x}px ${mouseRef.current.y}px, black, transparent)`
      fgLayerRef.current.style.webkitMaskImage = fgLayerRef.current.style.maskImage
    }
  }, [])

  const pathD = `M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-0 opacity-[0.14]">
        <svg className="h-full w-full">
          <defs>
            <pattern ref={bgPatternRef} id={bgPatternId} width={GRID_SIZE} height={GRID_SIZE} patternUnits="userSpaceOnUse">
              <path d={pathD} fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${bgPatternId})`} />
        </svg>
      </div>

      <div ref={fgLayerRef} className="absolute inset-0 z-0 opacity-50">
        <svg className="h-full w-full">
          <defs>
            <pattern ref={fgPatternRef} id={fgPatternId} width={GRID_SIZE} height={GRID_SIZE} patternUnits="userSpaceOnUse">
              <path d={pathD} fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${fgPatternId})`} />
        </svg>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
