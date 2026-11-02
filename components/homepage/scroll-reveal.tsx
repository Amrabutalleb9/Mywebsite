"use client"

import { useRef, type CSSProperties, type ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"

/* Fades and rises into place once, the first time it is scrolled into view. The movement is a CSS
   transition (.reveal in globals.css): 0.6s on the site's ease-out curve, starting after `delay`.
   Reduced motion shows it at once, before any JavaScript runs. */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px -5% 0px", amount: 0.12 })

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--reveal-y": `${y}px`, "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  )
}
