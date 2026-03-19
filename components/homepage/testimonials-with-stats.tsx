"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import ScrollReveal from "./scroll-reveal"
import { type Testimonial } from "@/lib/shared-data"

const CleanTestimonial = dynamic(
  () => import("@/components/ui/clean-testimonial").then((m) => ({ default: m.CleanTestimonial })),
)

interface Stat {
  end: number
  suffix: string
  label: string
}

function AnimatedCounter({ end, suffix, duration = 1800 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.unobserve(el) } },
      { rootMargin: "-20px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    let raf: number
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function TestimonialsWithStats({
  testimonials,
  stats,
}: {
  testimonials: Testimonial[]
  stats: Stat[]
}) {
  return (
    <section className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <ScrollReveal className="lg:w-[55%]">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
              Testimonials
            </span>
          </div>
          <div className="mb-4 flex items-start gap-4">
            <div className="mt-1 h-12 w-1 rounded-full bg-accent" />
            <h2 className="font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              What Clients&nbsp;Say
            </h2>
          </div>
          <CleanTestimonial testimonials={testimonials} />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 self-center lg:w-[45%]">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.06}>
              <div className="rounded-sm bg-surface p-6 lg:p-8">
                <p className="font-serif text-3xl tracking-tight text-accent lg:text-4xl">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs text-muted-foreground lg:text-sm">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
