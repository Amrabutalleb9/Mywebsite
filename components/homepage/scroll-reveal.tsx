// Homepage staggered section reveals using CSS classes (.fade-section/.is-visible).
// Uses doubled-selector specificity to beat Tailwind v4 utilities.
// For inner/detail pages, use <FadeIn> instead (inline styles, self-contained).
"use client"

import { useRef, useEffect, type ReactNode } from "react"

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let observer: IntersectionObserver | null = null
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible")
            observer?.unobserve(el)
          }
        },
        { threshold: 0.08, rootMargin: "-30px" },
      )
      observer.observe(el)
    }, 80)
    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-section ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
