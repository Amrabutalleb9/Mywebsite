"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

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

  useEffect(() => {
    if (!hasAnyImage) return

    const LERP_FACTOR = 0.15
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      if (isOnScreenRef.current && previewRef.current) {
        smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, LERP_FACTOR)
        smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, LERP_FACTOR)
        previewRef.current.style.transform =
          `translate3d(${smoothRef.current.x + 24}px, ${smoothRef.current.y - 110}px, 0)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [hasAnyImage])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseRef.current.x = e.clientX
    mouseRef.current.y = e.clientY
  }, [])

  const handleMouseEnter = useCallback((index: number) => {
    if (projects[index].featureImage) {
      setHoveredIndex(index)
      setIsImageVisible(true)
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
          className="pointer-events-none fixed top-0 left-0 z-50 hidden overflow-hidden rounded-xl shadow-2xl lg:block"
          style={{
            opacity: isImageVisible ? 1 : 0,
            scale: isImageVisible ? 1 : 0.85,
            transition:
              "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative h-[180px] w-[288px] overflow-hidden rounded-xl bg-primary">
            {projects.map((project, index) =>
              project.featureImage ? (
                <Image
                  key={project.href}
                  src={project.featureImage}
                  alt={project.featureImageAlt || project.title}
                  width={576}
                  height={360}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 1.1,
                    filter: hoveredIndex === index ? "none" : "blur(10px)",
                  }}
                />
              ) : null,
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      )}

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Link
            key={project.href}
            href={project.href}
            className="group flex flex-col gap-3 border-b border-border py-8 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            {...(project.dataCursorLabel && { "data-cursor-label": project.dataCursorLabel })}
          >
            <div className="flex items-start gap-5 sm:items-center">
              <span className="font-serif text-2xl leading-none text-accent/30 select-none">
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
              <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors group-hover:text-accent">
                Read <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
