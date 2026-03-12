"use client"

import React from "react"

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { CleanTestimonial } from "@/components/ui/clean-testimonial"
import { InfiniteGrid } from "@/components/ui/infinite-grid"
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
  { end: 57, suffix: "%+", label: "Client Engagement\u00A0Lift" },
  { end: 13, suffix: "+", label: "Years Leading\u00A0Creative" },
  { end: 25, suffix: "", label: "Designers\u00A0Led" },
  { end: 15, suffix: "+", label: "Industries\u00A0Served" },
]

const testimonials = [
  { text: "Amr delivered beyond expectations. The\u00A0brand identity he created captured our vision perfectly and translated seamlessly across every touchpoint. His strategic thinking elevated the entire\u00A0project.", author: "Overpowered Agency", location: "UK", role: "Brand Identity" },
  { text: "Very professional and created me an amazing\u00A0design.", author: "Elliot", location: "London, UK", role: "Apparel Design" },
  { text: "Fantastic work and great communication. Very\u00A0happy with the outcome of report from a\u00A0layout and a\u00A0branding perspective.", author: "Paul", location: "Melbourne, Australia", role: "Branding" },
  { text: "Amr assisted me in a\u00A0very challenging Art/Crime book project I authored. Very\u00A0professional work and his continual ongoing communications and proferred insights were invaluable. I\u00A0highly recommend him.", author: "Steven Hodel", location: "Blaine, United States", role: "Book Design" },
  { text: "So professional, on time, high level of\u00A0skills and capabilities\u2026 don\u2019t waste your time and\u00A0assign him your work, I didn\u2019t see anything with his level of\u00A0accountability.", author: "Ahmed", location: "Khobar, KSA", role: "Branding" },
  { text: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in a\u00A0detailed explanation. He\u00A0went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales funnel.", author: "Robert", location: "Melbourne, Australia", role: "Funnel Copywriting & Design" },
  { text: "Dude he is the greatest of\u00A0all\u00A0time.", author: "Mazen", location: "Qassim, Saudi Arabia", role: "Architecture Portfolio Design" },
  { text: "Amr was able to\u00A0discuss different options with me and working together with adjustments was able to\u00A0create photorealistic expressions on\u00A0my character. Great\u00A0job. High\u00A0quality stuff!", author: "Alex", location: "Melbourne, Australia", role: "Character Design" },
  { text: "Outstanding collaboration! Amr\u00A0was extremely professional, fast, and\u00A0precise. He\u00A0quickly understood the project requirements and delivered flawless work on\u00A0time. Communication was smooth, he was always available, and\u00A0paid great attention to\u00A0detail. Highly\u00A0recommended!", author: "Stefano", location: "Valencia, Spain", role: "Website Design" },
  { text: "He is Extraordinary! Way\u00A0beyond anything I expected. Amr is very talented, knowledgeable, professional, and\u00A0competent. Communication in\u00A0english is excellent. Prompt to\u00A0resolve any issues. Goes beyond the expected for customer\u00A0satisfaction.", author: "Augustina", location: "Herning, Denmark", role: "Website Design" },
  { text: "Great UI/UX designer, quick delivery and\u00A0clear communication. Highly\u00A0recommend working with him!", author: "Stefano", location: "Sydney, Australia", role: "Head of UX, Freelancer.com" },
  { text: "Is there a\u00A0god or do angels exist? We\u00A0have been thru hell with 4\u00A0previous freelancers for 2\u00A0years. All\u00A04 were unable to\u00A0complete the work. Enter\u00A0Amr. He\u00A0is highly intelligent, genuine and\u00A0lovely. He has integrity, is extremely skilled, has good aesthetic sense and\u00A0importantly, a\u00A0great sense of\u00A0humour!", author: "Dipa", location: "Singapore", role: "Website Design" },
]

const capabilities = [
  { title: "Creative Direction", desc: "I set the vision. I\u00A0lead the team. I\u00A0make sure every piece of\u00A0work that ships is something I\u2019d put my name\u00A0on." },
  { title: "Brand Identity & Strategy", desc: "Logos, type systems, color, guidelines, positioning. The\u00A0whole foundation. Built to\u00A0scale, built to\u00A0last." },
  { title: "UI/UX Design", desc: "Interfaces for web and mobile. From\u00A0wireframes to\u00A0production. Screens that perform, not just screens that look\u00A0nice." },
  { title: "Typography Systems", desc: "Type is my primary design tool. I\u00A0build typographic hierarchies that do the heavy lifting in\u00A0any layout, any\u00A0language." },
  { title: "Art Direction", desc: "Defining the visual tone across campaigns, editorial, packaging, and digital. This\u00A0is where the storytelling\u00A0lives." },
  { title: "Campaign Design", desc: "Multi-channel creative for digital, social, and print. Strategy\u00A0first. Execution\u00A0second. Results\u00A0always." },
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
  { slug: "overpowered", num: "01", title: "Overpowered", subtitle: "Rebranding a\u00A0multi-market creative agency for three audiences, one\u00A0identity", impact: "Unified identity across 3\u00A0markets \u00B7 A/B-tested micro campaigns \u00B7 Design system still in\u00A0use months\u00A0later", category: "Brand Identity & Rebrand", year: "2025", role: "Creative Director \u00B7 Led team of\u00A025", featureImage: "", featureImageAlt: "" },
  { slug: "split", num: "02", title: "Split", subtitle: "Redesigning a\u00A0fitness platform from competitive research to\u00A0revenue-driving features", impact: "Won the client by rewriting a\u00A0flawed quotation \u00B7 New monetisation paths \u00B7 Research-validated\u00A0features", category: "UX/UI Product Design", year: "2025", role: "Creative Director & UX Lead \u00B7 Team of\u00A06", featureImage: "", featureImageAlt: "" },
  { slug: "agfin", num: "03", title: "Agfin", subtitle: "Turning a\u00A0static website into a\u00A012% revenue engine through strategic copywriting", impact: "12%\u00A0sales increase in month one \u00B7 Zero ad spend \u00B7 Copy-first strategy\u00A0validated", category: "Sales Funnel & Copywriting", year: "2024", role: "Creative Director, UX & Copywriter \u00B7 Team of\u00A03", featureImage: "", featureImageAlt: "" },
  { slug: "dipa", num: "04", title: "Dipa Visionary Art School", subtitle: "Rebuilding a\u00A0visionary art school\u2019s digital home after three\u00A0years of\u00A0failed attempts", impact: "70%\u00A0increase in website views \u00B7 Replaced 4\u00A0failed freelancers \u00B7 Being submitted for\u00A0Awwwards", category: "Immersive Web Experience", year: "2022\u20132026", role: "Creative Director & UX/UI \u00B7 Led small\u00A0team", featureImage: "/images/dipa-showcase.png", featureImageAlt: "Dipa Visionary Art School immersive website design" },
]

const highlightCards = [
  { slug: "alfy", num: "05", title: "Alfy", subtitle: "Repositioning a\u00A0luxury marble brand for B2B\u00A0impact", result: "70%\u00A0engagement increase", year: "2025", category: "Campaign Strategy", role: "Creative Director at\u00A0Overpowered", featureImage: "/images/alfy-feature.png", featureImageAlt: "El Alfy Saraya luxury marble brand website hero" },
  { slug: "steve-hodel", num: "06", title: "As Within, So Without, Steven Hodel", subtitle: "Designing a\u00A0212-page illustrated volume for a\u00A0NYT bestselling author", result: "212\u00A0pages \u00B7 130+\u00A0images \u00B7 Print-ready", year: "2025", category: "Editorial Design", role: "Book Designer (sole designer)", featureImage: "/images/steve-hodel-feature.png", featureImageAlt: "As Within, So Without by Steve Hodel, hardcover book on desk" },
  { slug: "alienor", num: "07", title: "Alienor", subtitle: "Premium skincare brand identity & packaging", result: "Full brand identity\u00A0system", year: "2022", category: "Brand & Packaging", role: "Creative Director & Brand Designer", featureImage: "/images/alienor-feature.png", featureImageAlt: "Alienor skincare brand identity with elegant serif logotype" },
]

/* ─── Sub-header component ───────────────────────── */

function SubHeader({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-px w-8 bg-accent" />
      <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{label}</span>
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
    <InfiniteGrid className="flex h-[calc(100vh-7rem)] flex-col bg-background px-8 pt-[77px] lg:px-16 lg:pt-[102px]">
      <div className="flex flex-1 items-center justify-center">
        <div className="animate-hero-1 w-full text-center">
          <h1 className="mx-auto font-serif text-[length:var(--text-display)] leading-[var(--leading-display)] font-normal tracking-[var(--tracking-display)] text-foreground">
            Brand strategist.
            <br />
            Creative director.
            <br />
            Obsessed with&nbsp;results.
          </h1>
        </div>
      </div>

      <div className="animate-hero-2 mb-6 mt-10 flex flex-col items-center text-center">
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          13&nbsp;years of&nbsp;creative direction, brand strategy, and digital design.
          <br />
          Work delivered across MENA, Europe, the&nbsp;US, and&nbsp;beyond.
          <br />
          Every project built to&nbsp;move numbers, not just turn&nbsp;heads.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm tracking-wide text-muted-foreground/70 lg:text-base">
          Available for creative direction engagements and&nbsp;consulting.
        </p>
        <a
          href="#work"
          className="cta-btn mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase hover:bg-foreground hover:text-background"
        >
          See the&nbsp;Work
          <ArrowUpRight size={14} className="cta-arrow" />
        </a>
      </div>
    </InfiniteGrid>
  )
}

/* ─── Hero Services Bar ──────────────────────────── */

function HeroServicesBar() {
  return (
    <div className="flex w-full items-center justify-between border-t border-border bg-background px-8 py-5 lg:px-16">
      <div className="flex flex-wrap gap-8 lg:gap-14">
        {heroServices.map((service) => (
          <span key={service} className="text-[length:var(--text-micro)] tracking-[var(--tracking-label)] text-muted-foreground uppercase lg:text-[length:var(--text-caption)]">{service}</span>
        ))}
      </div>
      <span className="hidden text-[length:var(--text-micro)] tracking-wide text-muted-foreground sm:block lg:text-[length:var(--text-caption)]">
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
            className="font-serif text-[length:var(--text-page)] font-normal text-primary-foreground"
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
        <h2 className="font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
          Case Studies
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Strategy, process, and results. Each&nbsp;project shows how I&nbsp;think, lead, and drive business&nbsp;outcomes.
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
                      <span className="font-serif text-[length:var(--text-section)] leading-none font-normal text-accent/20 select-none">{project.num}</span>
                      <div className="flex flex-col">
                        <span className="text-[length:var(--text-micro)] tracking-[var(--tracking-sublabel)] text-muted-foreground/50 uppercase">{project.category}</span>
                        <p className="mt-1 text-xs text-muted-foreground">{project.year}</p>
                        <h3 className="mt-1 text-[length:var(--text-sub)] font-bold leading-[var(--leading-heading)] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
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
          <p className="mb-10 text-xs font-medium tracking-[var(--tracking-label)] text-muted-foreground/50 uppercase">Project Highlights</p>
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
                    <span className="text-[length:var(--text-micro)] font-medium tracking-[var(--tracking-sublabel)] text-accent uppercase">{project.category}</span>
                    <span className="text-[length:var(--text-micro)] text-muted-foreground/30">&middot;</span>
                    <span className="text-[length:var(--text-micro)] text-muted-foreground/50">{project.year}</span>
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
            All&nbsp;Projects
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>
    </section>
  )
}

/* ─── Testimonials + Stats ───────────────────────── */

function Testimonials() {
  return (
    <section className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left - Testimonial */}
        <Section className="lg:w-[55%]">
          <SubHeader label="Testimonials" />
          <div className="mb-4 flex items-start gap-4">
            <div className="mt-1 h-12 w-1 rounded-full bg-accent" />
            <h2 className="font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              What Clients&nbsp;Say
            </h2>
          </div>
          <CleanTestimonial testimonials={testimonials} />
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
              <h2 className="mb-8 font-serif text-[length:var(--text-section)] font-normal tracking-tight text-foreground">
                {"I\u2019m Amr Abu-Talleb."}
              </h2>
            </Section>
            <Section delay={0.1}>
              <p className="mb-6 max-w-[60ch] text-lg font-medium leading-relaxed text-foreground">
                {"Creative Director. Brand strategist. The\u00A0kind of\u00A0designer who asks \u201cwhat\u2019s the business goal?\u201d"}
              </p>
            </Section>
            <Section delay={0.15}>
              <p className="max-w-[60ch] leading-relaxed text-muted-foreground">
                {"I\u2019ve spent 13\u00A0years directing brands, leading teams, and designing digital products across the Middle East, UK, Europe, USA, Australia, Singapore, and Canada, driving results like a\u00A057% lift in\u00A0client engagement. My work sits at\u00A0the intersection of\u00A0strategic thinking and visual craft. I\u00A0use typography the way a\u00A0filmmaker uses a\u00A0camera: it sets the mood, controls the pace, and tells the story before a\u00A0single word gets\u00A0read."}
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
              Read&nbsp;More
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
          <h2 className="font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            Thinking Out&nbsp;Loud
          </h2>
          <p className="mt-4 max-w-[45ch] leading-relaxed text-muted-foreground">
            Thoughts on&nbsp;design, brand strategy, and the craft of&nbsp;creative&nbsp;direction.
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
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">{blogPosts[0].excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Read&nbsp;Article <ArrowRight size={14} className="article-arrow" />
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
                    Read&nbsp;Article <ArrowRight size={14} className="article-arrow" />
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
            Rest of&nbsp;the&nbsp;Articles
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
