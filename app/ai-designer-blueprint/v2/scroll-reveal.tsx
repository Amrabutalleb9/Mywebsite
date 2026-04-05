"use client"

import { useReducedMotion } from "motion/react"
import { motion } from "motion/react"

const ease = [0.16, 1, 0.3, 1] as const

/**
 * One scroll-reveal primitive: IntersectionObserver via Framer `whileInView` with `amount` (no negative margins).
 * Respects `prefers-reduced-motion`.
 */
export function ScrollReveal({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.div>
  )
}
