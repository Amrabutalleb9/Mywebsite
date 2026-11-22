"use client"

import { useRef, type CSSProperties, type ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"

type FadeInTag = "div" | "h1" | "h2" | "p" | "li" | "article" | "section" | "nav"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: FadeInTag
  y?: number
  id?: string
  "aria-label"?: string
}

/* Fades and rises into place once, the first time it is scrolled into view: a 24px rise over 0.6s on
   the site's ease-out curve, as before. It is the same CSS reveal as the homepage's ScrollReveal
   (.reveal in globals.css), so inner pages no longer load the motion library just for this.
   The hidden start state only applies once JavaScript is running (html.js), so content can never stay
   invisible if scripts fail, and reduced motion shows everything at once. */
export default function FadeIn({ children, className = "", delay = 0, as = "div", y = 24, id, "aria-label": ariaLabel }: FadeInProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-6% 0px -4% 0px", amount: 0.1 })

  const Tag = as as "div"
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      aria-label={ariaLabel}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--reveal-y": `${y}px`, "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
