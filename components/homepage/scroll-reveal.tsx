"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px -5% 0px", amount: 0.12 })
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}
