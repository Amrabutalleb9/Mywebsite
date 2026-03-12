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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const hasAnyImage = projects.some((p) => p.featureImage)

  const updateRect = useCallback(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect())
    }
  }, [])

  useEffect(() => {
    updateRect()
    window.addEventListener("scroll", updateRect, { passive: true })
    window.addEventListener("resize", updateRect, { passive: true })
    return () => {
      window.removeEventListener("scroll", updateRect)
      window.removeEventListener("resize", updateRect)
    }
  }, [updateRect])

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    if (projects[index].featureImage) {
      setHoveredIndex(index)
      setIsVisible(true)
      updateRect()
    }
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
      {/* Floating image preview — desktop only */}
      {hasAnyImage && (
        <div
          className="pointer-events-none fixed z-50 hidden overflow-hidden rounded-xl shadow-2xl lg:block"
          style={{
            left: containerRect?.left ?? 0,
            top: containerRect?.top ?? 0,
            transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 110}px, 0)`,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.85,
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
                    filter:
                      hoveredIndex === index ? "none" : "blur(10px)",
                  }}
                />
              ) : null,
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      )}

      {/* Project rows */}
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
