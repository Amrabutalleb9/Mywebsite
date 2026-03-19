// Self-contained fade-in using inline styles. Used on inner/detail pages.
// For homepage staggered section reveals, use <ScrollReveal> instead
// (CSS class-based with doubled-selector specificity for Tailwind v4).
"use client"

import { useRef, useEffect, useState, useCallback, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "h1" | "h2" | "p" | "li" | "article" | "section"
}

export default function FadeIn({ children, className = "", delay = 0, as: Tag = "div" }: FadeInProps) {
  const elRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: "-50px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const refCallback = useCallback((node: HTMLElement | null) => {
    elRef.current = node
  }, [])

  return (
    <Tag
      ref={refCallback as React.RefCallback<HTMLElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
      }}
    >
      {children}
    </Tag>
  )
}
