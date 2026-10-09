"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useInView, useReducedMotion } from "motion/react"
import ScrollReveal from "./scroll-reveal"
import { type Testimonial } from "@/lib/shared-data"

const CleanTestimonial = dynamic(
  () => import("@/components/ui/clean-testimonial").then((m) => ({ default: m.CleanTestimonial })),
)

const EASE_OUT = [0.16, 1, 0.3, 1] as const

interface Stat {
  end: number
  suffix: string
  label: string
}

function AnimatedCounter({ end, suffix, start, delay = 0, duration = 1800 }: { end: number; suffix: string; start: boolean; delay?: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!start) return
    if (reduced) {
      setCount(end)
      return
    }
    let raf = 0
    const begin = performance.now() + delay
    function tick(now: number) {
      const progress = Math.min(Math.max((now - begin) / duration, 0), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, end, delay, duration, reduced])

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className="rounded-sm bg-surface p-6 lg:p-8"
      initial={reduced ? false : { opacity: 0, scale: 0.96, y: 12 }}
      animate={inView || reduced ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE_OUT }}
    >
      <p className="font-serif text-3xl tracking-tight text-accent lg:text-4xl">
        <AnimatedCounter end={stat.end} suffix={stat.suffix} start={inView} delay={200 + index * 120} />
      </p>
      <p className="mt-2 text-xs text-muted-foreground lg:text-sm">{stat.label}</p>
    </motion.div>
  )
}

export default function TestimonialsWithStats({
  testimonials,
  stats,
}: {
  testimonials: Testimonial[]
  stats: Stat[]
}) {
  return (
    <section className="px-8 pt-24 pb-16 lg:px-16 lg:pt-32 lg:pb-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <ScrollReveal className="lg:w-[55%]">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
              Testimonials
            </span>
          </div>
          <div className="mb-4 flex items-start gap-4">
            <div className="mt-1 h-12 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <h2 className="font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              What Clients&nbsp;Say
            </h2>
          </div>
          <CleanTestimonial testimonials={testimonials} />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 self-center lg:w-[45%]">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
