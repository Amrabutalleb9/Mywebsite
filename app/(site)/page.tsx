import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { testimonialProof, leadershipPrinciples } from "@/lib/shared-data"
import { publishedCaseStudies } from "@/lib/projects"

import HeroSection from "@/components/homepage/hero-section"
import MarqueeBanner from "@/components/homepage/marquee-banner"
import ClientTicker from "@/components/homepage/client-ticker"
import TestimonialsProof from "@/components/homepage/testimonials-proof"
import ScrollReveal from "@/components/homepage/scroll-reveal"

/* ─── Data ─────────────────────────────────────────── */

const stats = [
  { end: 13, suffix: "", label: "Years in creative\u00A0direction" },
  { end: 25, suffix: "", label: "Largest team\u00A0led" },
  { end: 50, suffix: "+", label: "People\u00A0hired" },
  { end: 8, suffix: "", label: "Markets\u00A0served" },
]

const caseStudyCards = [
  { slug: "overpowered", num: "01", title: "Overpowered", subtitle: "Rebranding a\u00A0multi-market creative agency for three audiences, one\u00A0identity", impact: "Unified identity across 3\u00A0markets \u00B7 A/B-tested micro campaigns \u00B7 Design system still in\u00A0use months\u00A0later", category: "Brand Identity & Rebrand", year: "2025", role: "Creative Director \u00B7 Led team of\u00A025", featureImage: "", featureImageAlt: "" },
  { slug: "split", num: "02", title: "SPLT", subtitle: "Turning a\u00A0marketplace brief into a\u00A0four-sided fitness\u00A0platform", impact: "Won the contract by\u00A0rewriting a\u00A0flawed quotation \u00B7 330+\u00A0screens across 4\u00A0roles \u00B7 Trainer subscriptions as\u00A0a\u00A0new revenue\u00A0line", category: "UX/UI Product Design", year: "2025", role: "Creative Director & UX Lead \u00B7 Team of\u00A03", featureImage: "/images/split-card-v2.webp", featureImageAlt: "SPLT trainer dashboard beside the trainer profile and subscription plans in the app" },
  { slug: "agfin", num: "03", title: "Agfin", subtitle: "Turning a\u00A0static website into a\u00A0sales funnel through strategic\u00A0copywriting", impact: "12%\u00A0sales increase in month one \u00B7 Zero ad spend \u00B7 Copy-first strategy\u00A0validated", category: "Sales Funnel & Copywriting", year: "2024", role: "Creative Director, UX & Copywriter \u00B7 Solo\u00A0project", featureImage: "/images/agfin-feature-v3.webp", featureImageAlt: "Agfin homepage hero: morning cloud clearing over a Wimmera paddock", featureVideo: "/videos/agfin-hero.mp4" },
  { slug: "steve-hodel", num: "04", title: "As Within, So\u00A0Without", subtitle: "Designing a\u00A0212-page illustrated book for a\u00A0decades-long\u00A0investigation", impact: "212\u00A0pages \u00B7 130+\u00A0archival images \u00B7 Published on\u00A0Amazon for a\u00A0NYT bestselling\u00A0author", category: "Editorial & Book Design", year: "2025\u20132026", role: "Book Designer \u00B7 Sole\u00A0designer", featureImage: "/images/steve-hodel-feature.webp", featureImageAlt: "As Within, So Without by Steve Hodel, hardcover book on a wooden desk" },
  { slug: "dipa", num: "04", title: "Dipa Visionary Art School", subtitle: "Rebuilding a\u00A0visionary art school\u2019s digital home after three\u00A0years of\u00A0failed attempts", impact: "70% more website views after\u00A0launch \u00B7 Replaced 4\u00A0failed freelancers \u00B7 Immersive 360\u00B0 studio\u00A0tour", category: "Immersive Web Experience", year: "2022\u20132026", role: "Creative Director & UX/UI \u00B7 Led small\u00A0team", featureImage: "/images/dipa-showcase.webp", featureImageAlt: "Dipa Visionary Art School immersive website design" },
]
  // Cards for hidden case studies (hidden: true in lib/projects.ts) drop out automatically.
  .filter((card) => publishedCaseStudies.some((p) => p.slug === card.slug))
  .map((card, index) => ({ ...card, num: String(index + 1).padStart(2, "0") }))

const highlightCards = [
  { slug: "alfy", num: "05", title: "Alfy", subtitle: "Repositioning a\u00A0luxury marble brand for B2B\u00A0impact", result: "70%\u00A0lift in\u00A0social engagement", year: "2025", category: "Campaign Strategy", role: "Creative Director at\u00A0Overpowered", featureImage: "/images/alfy-feature.webp", featureImageAlt: "El Alfy Saraya luxury marble brand website hero" },
  { slug: "alienor", num: "07", title: "Alienor", subtitle: "Premium skincare brand identity & packaging", result: "Full brand identity\u00A0system", year: "2022", category: "Brand & Packaging", role: "Creative Director & Brand Designer", featureImage: "/images/alienor-feature.webp", featureImageAlt: "Alienor skincare brand identity with elegant serif logotype" },
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

/* ─── Work Section (Case Studies + Highlights) ──── */

function WorkSection() {
  return (
    <section id="work" className="overflow-hidden px-8 pt-32 lg:px-16 lg:pt-40">

      <ScrollReveal>
        <SubHeader label="Work" />
        <h2 className="font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
          Case Studies
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Strategy, process, and results. Each&nbsp;project shows how I&nbsp;think, lead, and drive business&nbsp;outcomes.
        </p>
      </ScrollReveal>

      <div className="mt-24 flex flex-col gap-28 lg:gap-40">
        {caseStudyCards.map((project, i) => {
          const isRight = i % 2 === 0

          return (
            <ScrollReveal key={project.slug} delay={0.05}>
              <Link href={`/work/${project.slug}`} className="work-card group block" data-cursor-label={`Explore ${project.title}`}>
                <div className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${!isRight ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-[30%] lg:flex-shrink-0">
                    <div className="flex gap-4">
                      <span className="font-serif text-[length:var(--text-section)] leading-none font-normal text-accent/20 select-none">{project.num}</span>
                      <div className="flex flex-col">
                        <span className="text-[length:var(--text-micro)] tracking-[var(--tracking-sublabel)] text-muted-foreground uppercase">{project.category}</span>
                        <p className="mt-1 text-xs text-muted-foreground">{project.year}</p>
                        <h3 className="mt-1 text-[length:var(--text-sub)] font-bold leading-[var(--leading-heading)] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                          {project.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                          {project.subtitle}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{project.role}</p>
                        <p className="mt-4 max-w-sm text-xs leading-relaxed text-accent/80">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative min-w-0 lg:flex-1">
                    <div className="work-media relative overflow-hidden rounded-2xl bg-primary">
                      {"featureVideo" in project && project.featureVideo ? (
                        <>
                          <video
                            className="card-img aspect-[16/10] w-full object-cover motion-reduce:hidden"
                            poster={project.featureImage}
                            aria-label={project.featureImageAlt || project.title}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          >
                            <source src={project.featureVideo} type="video/mp4" />
                          </video>
                          <Image
                            src={project.featureImage}
                            alt={project.featureImageAlt || project.title}
                            width={900}
                            height={562}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="card-img hidden aspect-[16/10] w-full object-cover motion-reduce:block"
                          />
                        </>
                      ) : project.featureImage ? (
                        <Image
                          src={project.featureImage}
                          alt={project.featureImageAlt || project.title}
                          width={900}
                          height={562}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="card-img aspect-[16/10] w-full object-cover"
                        />
                      ) : (
                        <div className="card-img flex aspect-[16/10] items-center justify-center">
                          <span className="font-serif text-lg text-primary-foreground/20">{project.title}</span>
                        </div>
                      )}
                      <div className="absolute right-6 bottom-6">
                        <div className="card-arrow flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/40">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )
        })}
      </div>

      {/* ── Project Highlights ── */}
      <div className="mt-28 lg:mt-40">
        <ScrollReveal>
          <p className="mb-10 text-xs font-medium tracking-[var(--tracking-label)] text-muted-foreground uppercase">Project Highlights</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlightCards.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <Link href={`/highlights/${project.slug}`} className="highlight-card group block" data-cursor-label={`View ${project.title}`}>
                <div className="relative overflow-hidden rounded-xl bg-primary">
                  {project.featureImage ? (
                    <Image
                      src={project.featureImage}
                      alt={project.featureImageAlt || project.title}
                      width={600}
                      height={375}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="card-img aspect-[16/10] w-full object-cover"
                    />
                  ) : (
                    <div className="card-img flex aspect-[16/10] items-center justify-center">
                      <span className="font-serif text-sm text-primary-foreground/15">{project.title}</span>
                    </div>
                  )}
                  <div className="highlight-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <div className="card-arrow absolute right-4 bottom-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground/60">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[length:var(--text-micro)] font-medium tracking-[var(--tracking-sublabel)] text-accent uppercase">{project.category}</span>
                    <span className="text-[length:var(--text-micro)] text-muted-foreground/60">&middot;</span>
                    <span className="text-[length:var(--text-micro)] text-muted-foreground">{project.year}</span>
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
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal>
        <div className="mt-12 flex justify-center border-b border-border pb-8">
          <Link href="/projects" className="text-link inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase">
            All&nbsp;Projects
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}

/* ─── How I Lead ─────────────────────────────────── */

function LeadSection() {
  return (
    <section id="leadership" className="px-8 pt-24 lg:px-16 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SubHeader label="Leadership" />
          <h2 className="mb-12 max-w-[22ch] font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
            {"How I\u00A0run a\u00A0creative\u00A0team"}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {leadershipPrinciples.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.05 + i * 0.06}>
              <div className="capability-card h-full rounded-sm bg-surface p-6 lg:p-8">
                <h3 className="mb-3 font-medium text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About ───────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="px-8 pt-24 lg:px-16 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <ScrollReveal className="lg:w-[40%]">
            <div className="portrait-wrap overflow-hidden rounded-full">
              <Image
                src="/images/amr-portrait-v2.webp"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="aspect-square w-full object-cover grayscale"
              />
            </div>
          </ScrollReveal>

          <div className="lg:w-[60%]">
            <ScrollReveal>
              <SubHeader label="About" />
              <h2 className="mb-8 font-serif text-[length:var(--text-section)] font-normal tracking-tight text-foreground">
                {"I\u2019m Amr Abu-Talleb."}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mb-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {"I\u2019m a\u00A0creative director who started out in\u00A0illustration, calligraphy and\u00A0type, with 13\u00A0years of\u00A0leading brand, campaign and\u00A0product teams\u00A0since."}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mb-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {"I\u00A0lead creative teams of\u00A0up\u00A0to\u00A025,\u00A0for\u00A0brands in\u00A0eight markets, and\u00A0I\u00A0measure myself by\u00A0who comes out of\u00A0them. Designers who grow into art directors. Art directors who go on\u00A0to\u00A0lead."}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mb-8 max-w-[60ch] leading-relaxed text-muted-foreground">
                {"And I\u00A0still build. When an\u00A0idea matters, it\u2019s on\u00A0a\u00A0live staging build in\u00A0days, not\u00A0sprints."}
              </p>
              <Link href="/about" className="text-link inline-flex items-center gap-2 text-sm font-medium text-foreground">
                About Amr Abu-Talleb
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  )
}

/* ─── Page ────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeBanner />
      <WorkSection />
      <LeadSection />
      <TestimonialsProof groups={testimonialProof} stats={stats} />
      <ClientTicker />
      <div className="mx-auto max-w-3xl px-8 pt-16 text-center lg:pt-20">
        <p className="mb-5 text-base text-muted-foreground lg:text-lg">{"Hiring a\u00A0Creative Director?"}</p>
        <a
          href="/contact"
          className="cta-btn cta-btn-filled inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase"
        >
          {"Let\u2019s Talk"}
          <ArrowUpRight size={14} className="cta-arrow" />
        </a>
      </div>
      <About />
    </main>
  )
}
