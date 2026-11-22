"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useReducedMotion } from "@/hooks/use-in-view"

export interface ShowcaseProject {
  title: string
  subtitle: string
  year: string
  href: string
  featureImage?: string
  featureImageAlt?: string
  dataCursorLabel?: string
}

export function ProjectShowcase({
  projects,
  startIndex = 0,
}: {
  projects: ShowcaseProject[]
  startIndex?: number
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isImageVisible, setIsImageVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const smoothRef = useRef({ x: 0, y: 0 })
  const isOnScreenRef = useRef(false)
  const reduced = useReducedMotion()
  // Each project's preview image is only mounted after its row is first hovered, so the previews no
  // longer all download when the page opens.
  const [seen, setSeen] = useState<Set<number>>(() => new Set())

  const hasAnyImage = projects.some((p) => p.featureImage)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { isOnScreenRef.current = entry.isIntersecting },
      { rootMargin: "100px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // The preview trails the pointer with a gentle lerp. The loop only runs while a preview is showing and
  // stops once it has caught up; with reduced motion the preview simply sits at the pointer.
  const startLoop = useCallback(() => {
    if (animationRef.current != null) return
    const LERP_FACTOR = reduced ? 1 : 0.15
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      animationRef.current = null
      if (!isOnScreenRef.current || !previewRef.current) return
      smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, LERP_FACTOR)
      smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, LERP_FACTOR)
      previewRef.current.style.transform =
        `translate3d(${smoothRef.current.x + 24}px, ${smoothRef.current.y - 110}px, 0)`
      const settled =
        Math.abs(smoothRef.current.x - mouseRef.current.x) < 0.5 && Math.abs(smoothRef.current.y - mouseRef.current.y) < 0.5
      if (!settled) animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
  }, [reduced])

  useEffect(() => () => {
    if (animationRef.current != null) cancelAnimationFrame(animationRef.current)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseRef.current.x = e.clientX
    mouseRef.current.y = e.clientY
    if (hasAnyImage) startLoop()
  }, [hasAnyImage, startLoop])

  const handleMouseEnter = useCallback((index: number) => {
    if (projects[index].featureImage) {
      setHoveredIndex(index)
      setIsImageVisible(true)
      setSeen((prev) => (prev.has(index) ? prev : new Set(prev).add(index)))
    }
  }, [projects])

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
    setIsImageVisible(false)
  }, [])

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
      {hasAnyImage && (
        <div
          ref={previewRef}
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-50 hidden overflow-hidden rounded-lg shadow-[var(--shadow-lg)] lg:block"
          style={{
            opacity: isImageVisible ? 1 : 0,
            scale: isImageVisible || reduced ? 1 : 0.85,
            transition:
              "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative h-[180px] w-[288px] overflow-hidden rounded-lg bg-primary">
            {projects.map((project, index) =>
              project.featureImage && seen.has(index) ? (
                <Image
                  key={project.href}
                  src={project.featureImage}
                  alt=""
                  width={576}
                  height={360}
                  fetchPriority="low"
                  className="absolute inset-0 h-full w-full object-cover transition-[opacity,scale,filter] duration-500 ease-out motion-reduce:transition-opacity"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index || reduced ? 1 : 1.1,
                    filter: hoveredIndex === index || reduced ? "none" : "blur(10px)",
                  }}
                />
              ) : null,
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>
      )}

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Link
            key={project.href}
            href={project.href}
            className="group flex flex-col gap-3 border-b border-border py-8 transition-colors hover:border-accent/50 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            {...(project.dataCursorLabel && { "data-cursor-label": project.dataCursorLabel })}
          >
            <div className="flex items-start gap-4 sm:items-center">
              <span aria-hidden="true" className="font-serif text-2xl leading-none text-accent-numeral select-none">
                {String(startIndex + i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <span className="max-w-md text-sm text-muted-foreground">
                  {project.subtitle}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:flex-shrink-0">
              <span className="text-sm text-muted-foreground">
                {project.year}
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors group-hover:text-accent">
                Read <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
