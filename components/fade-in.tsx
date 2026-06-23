"use client"

import { useMemo, type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

const EASE_OUT = [0.16, 1, 0.3, 1] as const

type FadeInTag = "div" | "h1" | "h2" | "p" | "li" | "article" | "section"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: FadeInTag
  y?: number
}

export default function FadeIn({ children, className = "", delay = 0, as = "div", y = 24 }: FadeInProps) {
  const reduced = useReducedMotion()
  const MotionTag = useMemo(() => motion.create(as), [as])

  if (reduced) {
    const StaticTag = as
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px -4% 0px", amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </MotionTag>
  )
}
