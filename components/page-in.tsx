import type { CSSProperties, ReactNode } from "react"

type PageInTag = "div" | "h1" | "h2" | "p" | "section"

interface PageInProps {
  children: ReactNode
  className?: string
  /** Seconds, matching FadeIn's delay prop. */
  delay?: number
  as?: PageInTag
  id?: string
}

/**
 * Above-the-fold twin of FadeIn: the same 24px rise and fade, but in CSS, so the page title and
 * hero media paint with the HTML instead of waiting for JavaScript (FadeIn ships opacity:0 until
 * hydration, which held back the largest paint by several seconds on mobile).
 * Reduced motion: no animation (see .page-in in globals.css).
 */
export default function PageIn({ children, className = "", delay = 0, as: Tag = "div", id }: PageInProps) {
  const style = delay ? ({ "--page-in-delay": `${delay}s` } as CSSProperties) : undefined
  return (
    <Tag id={id} className={`page-in ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
