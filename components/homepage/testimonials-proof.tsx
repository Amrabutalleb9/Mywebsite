"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "motion/react"
import ScrollReveal from "./scroll-reveal"
import type { ProofGroup } from "@/lib/shared-data"

interface Stat {
  end: number
  suffix: string
  label: string
}

/* Counts up once the stats row is on screen. */
function Counter({ end, suffix, start, delay }: { end: number; suffix: string; start: boolean; delay: number }) {
  const [n, setN] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!start) return
    if (reduced) {
      setN(end)
      return
    }
    let raf = 0
    const begin = performance.now() + delay
    const tick = (now: number) => {
      const p = Math.min(Math.max((now - begin) / 1800, 0), 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, end, delay, reduced])

  return (
    <span className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export default function TestimonialsProof({ groups, stats }: { groups: ProofGroup[]; stats: Stat[] }) {
  const [active, setActive] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.6 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const select = (i: number, focus = false) => {
    const next = (i + groups.length) % groups.length
    setActive(next)
    if (focus) tabRefs.current[next]?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault()
      select(active + 1, true)
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault()
      select(active - 1, true)
    }
  }

  return (
    <section className="px-8 pt-24 pb-16 lg:px-16 lg:pt-32 lg:pb-20" aria-labelledby="testimonials-heading">
      <ScrollReveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Testimonials</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 h-12 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <h2 id="testimonials-heading" className="font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
                What Clients&nbsp;Say
              </h2>
            </div>
          </div>
          <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
            {"The questions you’d ask a reference, answered by the people I’ve worked with."}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-20">
          {/* The four questions */}
          <div
            role="tablist"
            aria-label="What clients say about"
            aria-orientation="vertical"
            className="-mx-8 flex gap-2 overflow-x-auto px-8 [scrollbar-width:none] lg:mx-0 lg:block lg:overflow-visible lg:border-t lg:border-border lg:px-0"
            onKeyDown={onKeyDown}
          >
            {groups.map((g, i) => {
              const on = i === active
              return (
                <button
                  key={g.title}
                  ref={(el) => { tabRefs.current[i] = el }}
                  role="tab"
                  id={`proof-tab-${i}`}
                  aria-selected={on}
                  aria-controls={`proof-panel-${i}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(i)}
                  onMouseEnter={() => select(i)}
                  className={`group flex shrink-0 items-baseline justify-between gap-4 rounded-full border px-4 py-2 text-left transition-colors duration-300 lg:w-full lg:rounded-none lg:border-0 lg:border-b lg:border-border lg:px-0 lg:py-4 ${
                    on ? "border-foreground" : "border-border"
                  }`}
                >
                  <span
                    className={`text-sm font-medium transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] lg:font-serif lg:text-2xl lg:font-normal lg:tracking-tight ${
                      on ? "text-foreground lg:translate-x-1.5" : "text-muted-foreground/70 group-hover:text-foreground"
                    }`}
                  >
                    {g.title}
                  </span>
                  <span className={`hidden text-xs tabular-nums lg:inline ${on ? "text-accent" : "text-muted-foreground/50"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              )
            })}
          </div>

          {/* The answers. All panels share one grid cell, so the height never jumps. */}
          <div className="grid">
            {groups.map((g, i) => {
              const on = i === active
              return (
                <div
                  key={g.title}
                  role="tabpanel"
                  id={`proof-panel-${i}`}
                  aria-labelledby={`proof-tab-${i}`}
                  aria-hidden={!on}
                  inert={!on}
                  className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)] motion-reduce:transition-none ${
                    on ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <ul className="border-t border-border">
                    {g.quotes.map((q) => (
                      <li key={q.quote} className="grid grid-cols-1 gap-3 border-b border-border py-5 md:grid-cols-[minmax(0,1fr)_13rem] md:gap-8">
                        <blockquote className="font-serif text-2xl leading-snug font-normal tracking-tight text-foreground">
                          {"“"}{q.quote}{"”"}
                        </blockquote>
                        <p className="md:pt-1.5">
                          <span className="block text-sm font-semibold text-foreground">{q.name}</span>
                          <span className="mt-1 block text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-sublabel)] text-muted-foreground uppercase">
                            {q.credential}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* The numbers: one quiet row under the proof, counting up when it scrolls into view */}
      <div ref={statsRef} className="mt-16 grid grid-cols-2 border-t border-border lg:mt-20 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`pt-6 pr-6 ${i % 2 === 1 ? "border-l border-border pl-6" : ""} ${i === 2 ? "lg:border-l lg:border-border lg:pl-6" : ""} ${i >= 2 ? "mt-6 lg:mt-0" : ""}`}
          >
            <p className="font-serif text-[length:var(--text-sub)] leading-none tracking-tight text-accent">
              <Counter end={s.end} suffix={s.suffix} start={statsInView} delay={150 + i * 120} />
            </p>
            <p className="mt-3 text-xs text-muted-foreground lg:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
