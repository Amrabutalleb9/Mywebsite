"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react"
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import { type Testimonial } from "@/lib/shared-data"

/* Index beside the quote (Oct 2026): the heading and every name on the left as the navigation, the
   quote and its controls on the right, so the whole section reads in one screen. Numbers below. */

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
    // Out of view: reset, so the count runs again every time the strip comes back into view.
    if (!start) {
      setCount(0)
      return
    }
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
      <span className="sr-only">{end}{suffix}</span>
      <span aria-hidden="true">{count}{suffix}</span>
    </span>
  )
}

function StatsStrip({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.5 })
  return (
    <div ref={ref} className="mt-24 grid grid-cols-2 border-t border-border lg:mt-32 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`pt-8 pr-6 ${i % 2 === 1 ? "border-l border-border pl-6" : ""} ${i === 2 ? "lg:border-l lg:border-border" : ""} ${i > 0 ? "lg:pl-8" : ""} ${i >= 2 ? "mt-8 lg:mt-0" : ""}`}
        >
          <p className="font-serif text-[length:var(--text-section)] leading-none tracking-tight text-accent">
            <AnimatedCounter end={s.end} suffix={s.suffix} start={inView} delay={150 + i * 120} />
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

export default function TestimonialsWithStats({
  testimonials,
  stats,
}: {
  testimonials: Testimonial[]
  stats: Stat[]
}) {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const count = testimonials.length

  const go = useCallback((i: number) => setActive(((i % count) + count) % count), [count])

  // Autoplay, paced for reading: about 4 words a second, never under 8 s. It pauses on hover or
  // keyboard focus, while the section is off screen, when the visitor presses pause, and never runs
  // for people who turn motion off.
  const regionRef = useRef<HTMLDivElement>(null)
  const regionInView = useInView(regionRef, { amount: 0.4 })
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [paused, setPaused] = useState(false)
  const playing = !reduced && !paused && !hovered && !focused && regionInView && count > 1
  const words = count ? testimonials[active].text.split(/\s+/).length : 0
  const dwell = Math.max(8000, words * 250 + 3000)

  useEffect(() => {
    if (!playing) return
    const t = window.setTimeout(() => go(active + 1), dwell)
    return () => window.clearTimeout(t)
  }, [playing, active, dwell, go])

  if (count === 0) return null
  const current = testimonials[active]

  return (
    <section className="px-8 pt-32 pb-16 lg:px-16 lg:pt-48 lg:pb-24" aria-labelledby="testimonials-heading">
      <div
        ref={regionRef}
        className="grid gap-12 lg:grid-cols-[4fr_7fr] lg:gap-24"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false)
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); go(active + 1) }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(active - 1) }
        }}
      >
        {/* Left: heading, then every name as the navigation, so people choose without scrolling. */}
        <div className="min-w-0">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Testimonials</span>
            </div>
            <h2 id="testimonials-heading" className="font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {"What clients and partners say"}
            </h2>
          </ScrollReveal>

          <div className="-mx-8 mt-10 overflow-x-auto px-8 lg:mx-0 lg:mt-14 lg:overflow-visible lg:px-0">
            <ol className="flex min-w-max gap-2 lg:block lg:min-w-0 lg:border-b lg:border-border">
              {testimonials.map((t, i) => {
                const on = i === active
                return (
                  <li key={i} className="relative lg:border-t lg:border-border">
                    {/* The gold bar marks the open quote. While playing it fills as a timer. */}
                    {on && playing ? (
                      <motion.span
                        key={`fill-${active}`}
                        aria-hidden="true"
                        className="absolute top-0 left-0 hidden w-[2px] bg-accent lg:block"
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: dwell / 1000, ease: "linear" }}
                      />
                    ) : (
                      <span aria-hidden="true" className={`absolute top-0 left-0 hidden w-[2px] bg-accent lg:block ${on ? "h-full" : "h-0"}`} />
                    )}
                    <button
                      type="button"
                      onClick={() => go(i)}
                      aria-current={on ? "true" : undefined}
                      className={`flex w-full items-baseline gap-4 rounded-full border px-4 py-2 text-left text-sm whitespace-nowrap transition-colors duration-300 lg:rounded-none lg:border-0 lg:py-3.5 lg:pr-0 lg:pl-5 lg:text-[0.9375rem] ${on ? "border-foreground text-foreground lg:font-medium" : "border-border text-muted-foreground hover:text-foreground"}`}
                    >
                      <span className={`hidden w-5 shrink-0 text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-sublabel)] lg:inline ${on ? "text-accent" : "text-muted-foreground/50"}`}>{String(i + 1).padStart(2, "0")}</span>
                      {t.author}
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        {/* Right: the quote */}
        <div className="min-w-0 lg:pt-2">
          <span aria-hidden="true" className="block h-10 font-serif text-[7rem] leading-[0.75] text-accent lg:h-14 lg:text-[8rem]">
            {"\u201C"}
          </span>

          {/* Every quote is laid out invisibly in the same cell, so the block is as tall as the longest
              one and the page never jumps when the quote changes. */}
          <div className="mt-6 grid">
            {testimonials.map((t, i) => (
              <p key={i} aria-hidden="true" className="invisible col-start-1 row-start-1 font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] italic leading-[1.22] tracking-tight">
                {t.text}
              </p>
            ))}
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={active}
                className="col-start-1 row-start-1 font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] italic leading-[1.22] tracking-tight text-foreground"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                aria-live={playing ? "off" : "polite"}
              >
                {current.text}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-end justify-between gap-6 border-t border-border pt-6 lg:mt-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                <p className="text-base font-medium text-foreground">{current.author}</p>
                <p className="mt-1.5 text-xs tracking-widest text-muted-foreground uppercase">
                  {current.role}
                  {current.location && ` · ${current.location}`}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex shrink-0 items-center gap-3">
              <span className="mr-2 hidden text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-sublabel)] text-muted-foreground tabular-nums sm:inline">
                {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              {!reduced && count > 1 && (
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? "Play testimonials" : "Pause testimonials"}
                  className="flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {paused ? <Play size={16} /> : <Pause size={16} />}
                </button>
              )}
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground text-foreground transition-colors duration-300 hover:bg-foreground/5"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground bg-foreground text-background transition-colors duration-300 hover:border-accent hover:bg-[color-mix(in_srgb,var(--primary)_84%,#ffffff)]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <StatsStrip stats={stats} />
    </section>
  )
}
