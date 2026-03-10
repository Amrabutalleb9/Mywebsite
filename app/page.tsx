"use client"

import React from "react"

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { articles, getReadingTime } from "@/lib/articles"

/* ─── Data ─────────────────────────────────────────── */

const heroServices = ["Brand Strategy", "Web Design", "Product Design"]

const marqueeItems = [
  "Brand Identity",
  "Creative Direction",
  "UI/UX Design",
  "Art Direction",
  "Typography Systems",
  "Campaign Design",
]

const stats: { end: number; suffix: string; label: string }[] = [
  { end: 57, suffix: "%+", label: "Client Engagement Lift" },
  { end: 13, suffix: "+", label: "Years Leading Creative" },
  { end: 25, suffix: "", label: "Designers Led" },
  { end: 15, suffix: "+", label: "Industries Served" },
]

const testimonials = [
  { text: "Amr delivered beyond expectations. The brand identity he created captured our vision perfectly and translated seamlessly across every touchpoint. His strategic thinking elevated the entire project.", author: "Overpowered Agency", location: "UK", role: "Brand Identity" },
  { text: "Very professional and created me an amazing design.", author: "Elliot", location: "London, UK", role: "Apparel Design" },
  { text: "Fantastic work and great communication. Very happy with the outcome of report from a layout and a branding perspective.", author: "Paul", location: "Melbourne, Australia", role: "Branding" },
  { text: "Amr assisted me in a very challenging Art/Crime book project I authored. Very professional work and his continual ongoing communications and proferred insights were invaluable. I highly recommend him.", author: "Steven Hodel", location: "Blaine, United States", role: "Book Design" },
  { text: "So professional, on time, high level of skills and capabilities\u2026 don\u2019t waste your time and assign him your work, I didn\u2019t see anything with his level of accountability.", author: "Ahmed", location: "Khobar, KSA", role: "Branding" },
  { text: "Amr provided lots of new UX ideas and put them to me in a detailed explanation. He went above and beyond the project scope to deliver a renewed website and sales funnel.", author: "Robert", location: "Melbourne, Australia", role: "Funnel Copywriting & Design" },
  { text: "Dude he is the greatest of all time.", author: "Mazen", location: "Qassim, Saudi Arabia", role: "Architecture Portfolio Design" },
  { text: "Amr was able to discuss different options with me and working together with adjustments was able to create photorealistic expressions on my character. Great job. High quality stuff!", author: "Alex", location: "Melbourne, Australia", role: "Character Design" },
  { text: "Outstanding collaboration! Amr was extremely professional, fast, and precise. He quickly understood the project requirements and delivered flawless work on time. Communication was smooth, he was always available, and paid great attention to detail. Highly recommended!", author: "Stefano", location: "Valencia, Spain", role: "Website Design" },
  { text: "He is Extraordinary! Way beyond anything I expected. Amr is very talented, knowledgeable, professional, and competent. Communication in english is excellent. Prompt to resolve any issues. Goes beyond the expected for customer satisfaction.", author: "Augustina", location: "Herning, Denmark", role: "Website Design" },
  { text: "Great UI/UX designer, quick delivery and clear communication. Highly recommend working with him!", author: "Stefano", location: "Sydney, Australia", role: "Head of UX, Freelancer.com" },
  { text: "Is there a god or do angels exist? We have been thru hell with 4 previous freelancers for 2 years. All 4 were unable to complete the work. Enter Amr. He is highly intelligent, genuine and lovely. He has integrity, is extremely skilled, has good aesthetic sense and importantly, a great sense of humour!", author: "Dipa", location: "Singapore", role: "Website Design" },
]

const capabilities = [
  { title: "Creative Direction", desc: "I set the vision. I lead the team. I make sure every piece of work that ships is something I\u2019d put my name on." },
  { title: "Brand Identity & Strategy", desc: "Logos, type systems, color, guidelines, positioning. The whole foundation. Built to scale, built to last." },
  { title: "UI/UX Design", desc: "Interfaces for web and mobile. From wireframes to production. Screens that perform, not just screens that look nice." },
  { title: "Typography Systems", desc: "Type is my primary design tool. I build typographic hierarchies that do the heavy lifting in any layout, any language." },
  { title: "Art Direction", desc: "Defining the visual tone across campaigns, editorial, packaging, and digital. This is where the storytelling lives." },
  { title: "Campaign Design", desc: "Multi-channel creative for digital, social, and print. Strategy first. Execution second. Results always." },
]

const clientNames = [
  "The Line Real Estate", "Overpowered Agency", "Steven Hodel", "Dipa Art School", "Split Fitness",
  "Alfy Marble", "Alienor Skincare", "Agfin", "Taptools", "ADRAW",
  "Freelancer.com", "Like a Nerd", "Edge Holdings", "Gwelly Law Firm", "Ezz Law Firm",
]

const blogSlugs = [
  "your-logo-is-not-your-brand",
  "directing-a-brand-across-four-markets",
  "typography-is-your-most-underused-design-weapon",
]

const caseStudyCards = [
  { slug: "overpowered", num: "01", title: "Overpowered", subtitle: "Rebranding a multi-market creative agency for three audiences, one identity", impact: "Unified identity across 3 markets \u00B7 A/B-tested micro campaigns \u00B7 Design system still in use months later", category: "Brand Identity & Rebrand", year: "2025", role: "Creative Director \u00B7 Led team of 25", featureImage: "", featureImageAlt: "" },
  { slug: "split", num: "02", title: "Split", subtitle: "Redesigning a fitness platform from competitive research to revenue-driving features", impact: "Won the client by rewriting a flawed quotation \u00B7 New monetisation paths \u00B7 Research-validated features", category: "UX/UI Product Design", year: "2025", role: "Creative Director & UX Lead \u00B7 Team of 6", featureImage: "", featureImageAlt: "" },
  { slug: "agfin", num: "03", title: "Agfin", subtitle: "Turning a static website into a 12% revenue engine through strategic copywriting", impact: "12% sales increase in month one \u00B7 Zero ad spend \u00B7 Copy-first strategy validated", category: "Sales Funnel & Copywriting", year: "2024", role: "Creative Director, UX & Copywriter \u00B7 Team of 3", featureImage: "", featureImageAlt: "" },
  { slug: "dipa", num: "04", title: "Dipa Visionary Art School", subtitle: "Rebuilding a visionary art school\u2019s digital home after three years of failed attempts", impact: "70% increase in website views \u00B7 Replaced 4 failed freelancers \u00B7 Being submitted for Awwwards", category: "Immersive Web Experience", year: "2022\u20132026", role: "Creative Director & UX/UI \u00B7 Led small team", featureImage: "/images/dipa-showcase.png", featureImageAlt: "Dipa Visionary Art School immersive website design" },
]

const highlightCards = [
  { slug: "alfy", num: "05", title: "Alfy", subtitle: "Repositioning a luxury marble brand for B2B impact", result: "70% engagement increase", year: "2025", category: "Campaign Strategy", role: "Creative Director at Overpowered", featureImage: "/images/alfy-feature.png", featureImageAlt: "El Alfy Saraya luxury marble brand website hero" },
  { slug: "steve-hodel", num: "06", title: "As Within, So Without, Steven Hodel", subtitle: "Designing a 212-page illustrated volume for a NYT bestselling author", result: "212 pages \u00B7 130+ images \u00B7 Print-ready", year: "2025", category: "Editorial Design", role: "Book Designer (sole designer)", featureImage: "/images/steve-hodel-feature.png", featureImageAlt: "As Within, So Without by Steve Hodel, hardcover book on desk" },
  { slug: "alienor", num: "07", title: "Alienor", subtitle: "Premium skincare brand identity & packaging", result: "Full brand identity system", year: "2022", category: "Brand & Packaging", role: "Creative Director & Brand Designer", featureImage: "/images/alienor-feature.png", featureImageAlt: "Alienor skincare brand identity with elegant serif logotype" },
]

/* ─── Sub-header component ───────────────────────── */

function SubHeader({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-px w-8 bg-accent" />
      <span className="text-xs font-medium tracking-[0.15em] text-accent uppercase">{label}</span>
    </div>
  )
}

/* ─── Scroll reveal hook ──────────────────────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let observer: IntersectionObserver | null = null
    // Small delay after hydration to ensure layout is settled
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible")
            observer?.unobserve(el)
          }
        },
        { threshold: 0.08, rootMargin: "-30px" }
      )
      observer.observe(el)
    }, 80)
    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])

  return ref
}

function Section({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`fade-section ${className}`} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  )
}

/* ─── Animated counter ─────────────────────────────── */

function AnimatedCounter({ end, suffix, duration = 1800 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.unobserve(el) } },
      { rootMargin: "-20px" }
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
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Hero ────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-7rem)] flex-col overflow-hidden bg-background px-8 pt-[77px] lg:px-16 lg:pt-[102px]">
      <div
        className="pointer-events-none absolute bottom-[20%] left-[5%] h-32 w-32 rounded-full opacity-25 lg:h-48 lg:w-48"
        style={{ background: "radial-gradient(circle, #f5cac3 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[25%] right-[15%] h-28 w-28 opacity-10 lg:h-40 lg:w-40"
        style={{ background: "#e8ddd3", transform: "rotate(45deg)" }}
        aria-hidden="true"
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="animate-hero-1 w-full text-center">
          <h1 className="mx-auto font-serif text-[clamp(2.8rem,7.2vw,8.8rem)] leading-[0.92] font-normal tracking-[-0.03em] text-foreground">
            Brand strategist.
            <br />
            Creative director.
            <br />
            Obsessed with results.
          </h1>
        </div>
      </div>

      <div className="animate-hero-2 mb-6 mt-10 flex flex-col items-center text-center">
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          13 years of creative direction, brand strategy, and digital design.
          <br />
          Work delivered across MENA, Europe, the US, and beyond.
          <br />
          Every project built to move numbers, not just turn heads.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm tracking-wide text-muted-foreground/70 lg:text-base">
          Available for creative direction engagements and consulting.
        </p>
        <a
          href="#work"
          className="cta-btn mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[0.15em] text-foreground uppercase hover:bg-foreground hover:text-background"
        >
          See the Work
          <ArrowUpRight size={14} className="cta-arrow" />
        </a>
      </div>

    </section>
  )
}

/* ─── Hero Services Bar ──────────────────────────── */

function HeroServicesBar() {
  return (
    <div className="flex w-full items-center justify-between border-t border-border bg-background px-8 py-5 lg:px-16">
      <div className="flex flex-wrap gap-8 lg:gap-14">
        {heroServices.map((service) => (
          <span key={service} className="text-[11px] tracking-[0.15em] text-muted-foreground uppercase lg:text-xs">{service}</span>
        ))}
      </div>
      <span className="hidden text-[11px] tracking-wide text-muted-foreground sm:block lg:text-xs">
        Creative Director
      </span>
    </div>
  )
}

/* ─── Smooth Marquee Hook ─────────────────────────── */

function useMarquee(speed: number) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(speed)
  const targetVelocityRef = useRef(speed)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    let lastTime = performance.now()
    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000
      lastTime = now
      // Smoothly interpolate velocity toward target (softer ease for buttery deceleration)
      velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.03
      offsetRef.current -= velocityRef.current * dt
      const track = trackRef.current
      if (track) {
        const half = track.scrollWidth / 2
        if (Math.abs(offsetRef.current) >= half) offsetRef.current += half
        track.style.transform = `translateX(${offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const pause = useCallback(() => { targetVelocityRef.current = 0 }, [])
  const resume = useCallback(() => { targetVelocityRef.current = speed }, [speed])

  return { trackRef, pause, resume }
}

/* ─── Marquee ─────────────────────────────────────── */

function MarqueeBanner() {
  const { trackRef, pause, resume } = useMarquee(80)
  return (
    <div
      className="relative z-10 overflow-hidden bg-primary py-6 lg:py-8"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div ref={trackRef} style={{ display: "flex", gap: "1rem", width: "max-content", willChange: "transform" }}>
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0, whiteSpace: "nowrap" }}
            className="font-serif text-[clamp(2rem,5vw,5rem)] font-normal text-primary-foreground"
          >
            {item}
            <span className="text-accent" aria-hidden="true">{"\u00B7"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Work Section (Case Studies + Highlights) ──── */

function WorkSection() {
  return (
    <section id="work" className="overflow-hidden px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">

      {/* ── Section Header ── */}
      <Section>
        <SubHeader label="Work" />
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-foreground">
          Case Studies
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Strategy, process, and results. Each project shows how I think, lead, and drive business outcomes.
        </p>
      </Section>

      {/* ── Case Studies ── */}
      <div className="mt-24 flex flex-col gap-28 lg:gap-40">
        {caseStudyCards.map((project, i) => {
          const isRight = i % 2 === 0

          return (
            <Section key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${!isRight ? "lg:flex-row-reverse" : ""}`}>

                  {/* Text side */}
                  <div className="lg:w-[30%] lg:flex-shrink-0">
                    {/* Number + content row */}
                    <div className="flex gap-4">
                      <span className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none font-normal text-accent/20 select-none">{project.num}</span>
                      <div className="flex flex-col">
                        <span className="text-[10px] tracking-[0.1em] text-muted-foreground/50 uppercase">{project.category}</span>
                        <p className="mt-1 text-xs text-muted-foreground">{project.year}</p>
                        <h3 className="mt-1 text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                          {project.title}
                        </h3>
                        <p className="mt-2 max-w-md font-serif text-sm leading-relaxed text-muted-foreground italic">
                          {project.subtitle}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground/50">
                          {project.role}
                        </p>
                        <p className="mt-4 max-w-sm text-xs leading-relaxed text-accent/80">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="relative min-w-0 lg:flex-1">
                    <div
                      className="pointer-events-none absolute -top-8 h-48 w-48 rounded-full border border-border/50 lg:h-64 lg:w-64"
                      style={{ [isRight ? "right" : "left"]: "-2rem" }}
                      aria-hidden="true"
                    />
                    <div className="relative overflow-hidden rounded-2xl bg-primary transition-shadow duration-500 group-hover:shadow-2xl">
                      {project.featureImage ? (
                        <Image
                          src={project.featureImage}
                          alt={project.featureImageAlt || project.title}
                          width={900}
                          height={562}
                          className="cs-card-img aspect-[16/10] w-full object-cover"
                        />
                      ) : (
                        <div className="cs-card-img flex aspect-[16/10] items-center justify-center">
                          <span className="font-serif text-lg text-primary-foreground/20">{project.title}</span>
                        </div>
                      )}
                      <div className="absolute right-6 bottom-6">
                        <div className="cs-card-arrow flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/40">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Section>
          )
        })}
      </div>

      {/* ── Project Highlights ── */}
      <div className="mt-28 lg:mt-40">
        <Section>
          <p className="mb-10 text-xs font-medium tracking-[0.15em] text-muted-foreground/50 uppercase">Project Highlights</p>
        </Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlightCards.map((project) => (
            <Section key={project.slug}>
              <Link href={`/highlights/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-xl bg-primary transition-shadow duration-500 group-hover:shadow-xl">
                  {project.featureImage ? (
                    <Image
                      src={project.featureImage}
                      alt={project.featureImageAlt || project.title}
                      width={600}
                      height={375}
                      className="hl-card-img aspect-[16/10] w-full object-cover"
                    />
                  ) : (
                    <div className="hl-card-img flex aspect-[16/10] items-center justify-center">
                      <span className="font-serif text-sm text-primary-foreground/15">{project.title}</span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <div className="hl-card-arrow absolute right-4 bottom-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground/60">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-medium tracking-[0.12em] text-accent uppercase">{project.category}</span>
                    <span className="text-[10px] text-muted-foreground/30">&middot;</span>
                    <span className="text-[10px] text-muted-foreground/50">{project.year}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.subtitle}
                  </p>
                  {project.result && (
                    <p className="mt-2 text-xs text-accent/70">{project.result}</p>
                  )}
                </div>
              </Link>
            </Section>
          ))}
        </div>
      </div>

      <Section>
        <div className="mt-20 flex justify-center border-t border-border pt-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:text-accent">
            All Projects
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>
    </section>
  )
}

/* ─── Testimonials + Stats ───────────────────────── */

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [display, setDisplay] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const transition = useCallback((next: number) => {
    if (next === current || fading) return
    setFading(true)
    setTimeout(() => {
      setDisplay(next)
      setCurrent(next)
      setFading(false)
    }, 350)
  }, [current, fading])

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const next = (current + 1) % testimonials.length
      setFading(true)
      setTimeout(() => {
        setDisplay(next)
        setCurrent(next)
        setFading(false)
      }, 350)
    }, 6000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  const goTo = (i: number) => transition(i)
  const goNext = () => transition((current + 1) % testimonials.length)
  const goPrev = () => transition((current - 1 + testimonials.length) % testimonials.length)
  const t = testimonials[display]

  return (
    <section className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left - Testimonial */}
        <Section className="lg:w-[55%]">
          <SubHeader label="Testimonials" />
          <div className="mb-10 flex items-start gap-4">
            <div className="mt-1 h-12 w-1 rounded-full bg-accent" />
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-tight text-foreground">
              What Clients Say
            </h2>
          </div>

          <div className={`testimonial-content min-h-[220px] ${fading ? "is-fading" : ""}`}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {"\u201C"}{t.text}{"\u201D"}
            </p>
            <div className="mt-8 flex flex-col gap-0.5">
              <p className="font-medium text-foreground">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.role} · {t.location}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                type="button"
                key={`dot-${i}`}
                onClick={() => goTo(i)}
                className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${
                  i === current ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="mt-6 flex items-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
            <span className="ml-2 text-xs tabular-nums text-muted-foreground">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </Section>

        {/* Right - Stats bento */}
        <div className="grid grid-cols-2 gap-4 self-center lg:w-[45%]">
          {stats.map((s, i) => (
            <Section key={s.label} delay={i * 0.06}>
              <div className="rounded-sm bg-surface p-6 lg:p-8">
                <p className="font-serif text-3xl tracking-tight text-accent lg:text-4xl">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs text-muted-foreground lg:text-sm">{s.label}</p>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About ───────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Portrait - left, circular */}
          <Section className="lg:w-[40%]">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/images/amr-portrait.png"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="aspect-square w-full object-cover grayscale"
              />
            </div>
          </Section>

          {/* Right: text + boxes */}
          <div className="lg:w-[60%]">
            <Section>
              <SubHeader label="About" />
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight text-foreground">
                {"I\u2019m Amr Abu-Talleb."}
              </h2>
            </Section>
            <Section delay={0.1}>
              <p className="mb-6 max-w-[60ch] text-lg font-medium leading-relaxed text-foreground">
                {"Creative Director. Brand strategist. The kind of designer who asks \u201cwhat\u2019s the business goal?\u201d"}
              </p>
            </Section>
            <Section delay={0.15}>
              <p className="max-w-[60ch] leading-relaxed text-muted-foreground">
                {"I\u2019ve spent 13 years directing brands, leading teams, and designing digital products across the Middle East, UK, Europe, USA, Australia, Singapore, and Canada, driving results like a 57% lift in client engagement. My work sits at the intersection of strategic thinking and visual craft. I use typography the way a filmmaker uses a camera: it sets the mood, controls the pace, and tells the story before a single word gets read."}
              </p>
            </Section>
            <Section delay={0.2}>
              <p className="mt-6 text-sm text-muted-foreground">
                {"Figma / FigJam \u00B7 Adobe Creative Suite \u00B7 Webflow \u00B7 Framer \u00B7 WordPress \u00B7 Cursor AI \u00B7 V0"}
              </p>
            </Section>

            {/* Capability boxes - 2x3 grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <Section key={cap.title} delay={0.25 + i * 0.06}>
                  <div className="rounded-sm bg-surface p-6">
                    <h3 className="mb-2 text-sm font-medium text-foreground">{cap.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{cap.desc}</p>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </div>

        {/* Read More CTA */}
        <Section>
          <div className="mt-16 flex justify-center border-t border-border pt-8">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:text-accent">
              Read More
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Section>
      </div>
    </section>
  )
}

/* ─── Client Ticker ───────────────────────────────── */

function ClientTicker() {
  const { trackRef, pause, resume } = useMarquee(50)
  return (
    <div
      className="overflow-hidden border-y border-border py-6"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div ref={trackRef} style={{ display: "flex", gap: "3rem", width: "max-content", willChange: "transform" }}>
        {[...clientNames, ...clientNames, ...clientNames].map((name, i) => (
          <span
            key={`${name}-${i}`}
            style={{ flexShrink: 0, whiteSpace: "nowrap" }}
            className="text-sm tracking-widest text-muted-foreground uppercase"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Blog Preview (Insights layout) ─────────────── */

function BlogPreview() {
  const blogPosts = blogSlugs.map(slug => articles.find(a => a.slug === slug)!).filter(Boolean)

  return (
    <section id="blog" className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left column - heading */}
        <Section className="lg:w-[35%]">
          <SubHeader label="Insights" />
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.05] tracking-tight text-foreground">
            Thinking Out Loud
          </h2>
          <p className="mt-4 max-w-[45ch] leading-relaxed text-muted-foreground">
            Thoughts on design, brand strategy, and the craft of creative direction.
          </p>
        </Section>

        {/* Right column - article cards */}
        <div className="flex flex-col gap-6 lg:w-[65%]">
          <Section>
            <Link href={`/articles/${blogPosts[0].slug}`} className="group block">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={blogPosts[0].image || "/images/blog-branding.png"}
                  alt={blogPosts[0].imageAlt || blogPosts[0].title}
                  width={1200}
                  height={630}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{blogPosts[0].date}</span>
                <span className="text-xs text-muted-foreground/40">&middot;</span>
                <span className="text-xs text-muted-foreground">{getReadingTime(blogPosts[0])}</span>
              </div>
              <h3 className="mt-1 text-lg font-medium text-foreground group-hover:text-accent">{blogPosts[0].title}</h3>
              <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-muted-foreground">{blogPosts[0].excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Read Article <ArrowRight size={14} className="article-arrow" />
              </span>
            </Link>
          </Section>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogPosts.slice(1).map((post, i) => (
              <Section key={post.title} delay={i * 0.08}>
                <Link href={`/articles/${post.slug}`} className="group block">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={post.image || "/images/blog-branding.png"}
                      alt={post.imageAlt || post.title}
                      width={600}
                      height={375}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground/40">&middot;</span>
                    <span className="text-xs text-muted-foreground">{getReadingTime(post)}</span>
                  </div>
                  <h3 className="mt-1 font-medium text-foreground group-hover:text-accent">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    Read Article <ArrowRight size={14} className="article-arrow" />
                  </span>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <div className="mt-16 flex justify-center border-t border-border pt-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:text-accent">
            Rest of the Articles
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>
    </section>
  )
}

/* ─── Page ────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroServicesBar />
      <MarqueeBanner />
      <WorkSection />
      <Testimonials />
      <About />
      <ClientTicker />
      <BlogPreview />
    </main>
  )
}
