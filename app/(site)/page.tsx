import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { publishedTestimonials } from "@/lib/shared-data"
import { publishedCaseStudies, projectHighlights } from "@/lib/projects"
import { tp } from "@/lib/typeset"

import HeroSection from "@/components/homepage/hero-section"
import ServicesMarquee from "@/components/homepage/services-marquee"
import TestimonialsWithStats from "@/components/homepage/testimonials-with-stats"
import ScrollReveal from "@/components/homepage/scroll-reveal"
import { SpltReel, HodelProof } from "@/components/homepage/card-motion"

/* ─── Data ─────────────────────────────────────────── */

const stats = [
  { end: 50, suffix: "+", label: "People\u00A0hired" },
  { end: 6, suffix: "", label: "Projects live at\u00A0once" },
  { end: 8, suffix: "", label: "Markets\u00A0served" },
  { end: 2, suffix: "", label: "Scripts, Arabic and\u00A0Latin" },
]

const caseStudyCards = [
  { slug: "overpowered", num: "01", title: "Overpowered", subtitle: tp("From a broad studio offer to an agency built around the clients it served best"), impact: tp("Team grown from six to about twenty-five in seven months · Positioning set with the CEO"), category: "Agency Leadership & Strategy", year: "2024\u20132025", role: "Creative Director \u00B7 Team of\u00A025", featureImage: "/images/op-hero-loop-poster-v1.webp", featureImageAlt: "The OP logomark as a giant glass sculpture floating above a hill", featureVideo: "/videos/op-hero-loop-v2-c1.mp4" },
  { slug: "split", motion: "splt-reel", num: "02", title: "SPLT", subtitle: tp("Turning an online shop brief into a fitness platform built around its trainers"), impact: tp("One app and three dashboards for four roles · A proposed trainer subscription model"), category: "Product Strategy & UX", year: "2025", role: "Creative Director & UX Lead \u00B7 Led 2\u00A0designers", featureImage: "/images/split-card-v2.webp", featureImageAlt: "SPLT trainer dashboard beside the trainer profile and subscription plans in the app" },
  { slug: "bay-area-trips", num: "02", title: "Bay Area Trips", subtitle: tp("Turning a sprawling travel idea into one product for four audiences"), impact: tp("Web, mobile web and app as one system · Four account types · Live product"), category: "Product Strategy & UX", year: "2023\u20132025", role: tp("Product Strategist & Designer · Team of about 30"), featureImage: "/images/bay-hero-loop-poster-v2.webp", featureImageAlt: "The Bay Area Trips website and two app screens on a cream studio set in late-afternoon light", featureVideo: "/videos/bay-hero-loop-v2-c1.mp4" },
  { slug: "agfin", num: "03", title: "Agfin", subtitle: tp("Rebuilding a farm adviser’s website around the families he helps"), impact: tp("12% more client wins in the first month · No paid advertising"), category: "Website Strategy & Sales Funnel", year: "2024", role: "Creative Director, UX & Copywriter \u00B7 Solo\u00A0project", featureImage: "/images/agfin-feature-v3.webp", featureImageAlt: "Agfin homepage hero: morning cloud clearing over a Wimmera paddock", featureVideo: "/videos/agfin-hero-c1.mp4" },
  { slug: "taptools", num: "04", title: "TapTools", subtitle: tp("Helping users of a live analytics platform find the number they came for"), impact: tp("User-reported issues down 23% within 60 days · Shipped to a live product"), category: "Product Design for Analytics", year: "2022\u20132023", role: "Senior Product Designer", featureImage: "/images/taptools-card-poster-v6.webp", featureImageAlt: "TapTools market, portfolio and wallet profiler screens turning slowly in depth, with the swap card floating in front and the brand eclipse behind", featureVideo: "/videos/taptools-card-v6.mp4" },
  { slug: "zikabi", num: "05", title: "Zikabi", subtitle: tp("Splitting one overloaded app into a parent brand and two products"), impact: tp("One concept became a parent brand and two products · End-user, vendor and driver apps"), category: "Brand Architecture & App Design", year: "2020\u20132021", role: tp("UI/UX Designer, then Product Designer"), featureImage: "", featureImageAlt: "" },
  { slug: "dipa", num: "04", title: "Dipa Visionary Art School", subtitle: tp("Getting an art school’s website working again, then turning it into a walk through the studio"), impact: tp("70% more website views after recovery · Back online after four failed attempts"), category: "Website Recovery & Experience Design", year: "2022\u20132026", role: "Creative Director & UX/UI \u00B7 Led small\u00A0team", featureImage: "/images/dipa-showcase.webp", featureImageAlt: "Dipa Visionary Art School immersive website design" },
  { slug: "steve-hodel", motion: "hodel-proof", num: "04", title: "As Within, So\u00A0Without", subtitle: tp("Designing a 212-page book around a decades-long investigation"), impact: tp("212 pages · 130+ archival images · On sale on Amazon for a NYT bestselling author"), category: "Editorial & Book Design", year: "2025\u20132026", role: "Book Designer \u00B7 Sole\u00A0designer", featureImage: "/images/steve-hodel-feature-v2.webp", featureImageAlt: "Chapter Ten spread of As Within, So Without with Man Ray\u2019s portrait of George Hodel" },
]
  // Cards for hidden case studies (hidden: true in lib/projects.ts) drop out automatically.
  .filter((card) => publishedCaseStudies.some((p) => p.slug === card.slug))
  .map((card, index) => ({ ...card, num: String(index + 1).padStart(2, "0") }))

const highlightCards = [
  { slug: "alfy", num: "05", title: "Alfy", subtitle: tp("Refocusing a marble brand’s campaigns on the architects who specify it"), result: tp("70% lift in social engagement"), year: "2025", category: "B2B Campaign Direction", role: "Creative Director at\u00A0Overpowered", featureImage: "/images/alfy-feature.webp", featureImageAlt: "El Alfy Saraya luxury marble brand website hero" },
  { slug: "nexus", num: "", title: "Nexus", subtitle: tp("Three brand personalities, written before anything was drawn"), result: tp("Identity and Webflow website"), year: "2024", category: "Brand Identity & Website", role: "Brand Strategist & Designer", featureImage: "", featureImageAlt: "" },
  { slug: "alienor", num: "07", title: "Alienor", subtitle: tp("A physician’s skincare line, as soothing as moonlight"), result: "Full brand identity\u00A0system", year: "2022", category: "Brand Identity & Packaging", role: tp("Brand Designer"), featureImage: "/images/alienor-hero-v3.webp", featureImageAlt: "Alienor skincare brand identity with elegant serif logotype" },
  { slug: "hickey", num: "", title: "Hickey", subtitle: tp("An investor deck for a US makeup start-up that went on to raise $2M"), result: tp("Company raised $2M"), year: "", category: "Investor Presentation", role: "Deck Designer", featureImage: "", featureImageAlt: "" },
  { slug: "salel", num: "", title: "Salel", subtitle: tp("A hand-drawn Arabic wordmark for a ghutra brand in Qatar"), result: "", year: "2025", category: "Calligraphy & Identity", role: "Brand Designer", featureImage: "", featureImageAlt: "" },
  { slug: "shavery", num: "", title: "Shavery & Co", subtitle: tp("A luxury barbershop identity that holds up from the street sign to the cup"), result: "", year: "2025", category: "Identity & Signage", role: "Brand Designer", featureImage: "", featureImageAlt: "" },
]
  // Hidden highlights (hidden: true in lib/projects.ts) drop out automatically.
  .filter((card) => projectHighlights.some((p) => p.slug === card.slug))


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
    <section id="work" className="overflow-hidden px-8 pt-32 lg:px-16 lg:pt-48">

      <ScrollReveal>
        <SubHeader label="Work" />
        <h2 className="font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
          Case Studies
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {"Each one starts with the\u00A0brief as\u00A0it\u00A0landed on\u00A0my\u00A0desk and\u00A0ends with what changed for\u00A0the\u00A0business. The middle is\u00A0how the\u00A0team got\u00A0there."}
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
                      <span aria-hidden="true" className="font-serif text-[length:var(--text-section)] leading-none font-normal text-[#a8894f] select-none">{project.num}</span>
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
                      {"motion" in project && project.motion === "splt-reel" ? (
                        <SpltReel label="SPLT screens and dashboards: trainer profile, subscription plans, goals, shop, live workout, and the trainer, admin, vendor and video dashboards" />
                      ) : "motion" in project && project.motion === "hodel-proof" ? (
                        <HodelProof label="Printer's proof of As Within, So Without: the jacket and eleven interior spreads with crop marks and colour bars" />
                      ) : "featureVideo" in project && project.featureVideo ? (
                        <>
                          <video
                            className="card-img aspect-[16/10] w-full object-cover motion-reduce:hidden"
                            poster={project.featureImage}
                            aria-label={project.featureImageAlt || project.title}
                            data-autoplay
                            muted
                            loop
                            playsInline
                            preload="none"
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
                        <div className={`card-arrow flex h-10 w-10 items-center justify-center rounded-full border ${"motion" in project && project.motion === "hodel-proof" ? "border-foreground/25 bg-background/70 text-foreground/60" : "border-primary-foreground/20 text-primary-foreground/40"}`}>
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

      {/* ── Project Highlights (shown only while some are published) ── */}
      {highlightCards.length > 0 && (
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
                    {project.year && (
                      <>
                        <span aria-hidden="true" className="text-[length:var(--text-micro)] text-muted-foreground">&middot;</span>
                        <span className="text-[length:var(--text-micro)] text-muted-foreground">{project.year}</span>
                      </>
                    )}
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
      )}

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

/* ─── About ───────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="px-8 pt-32 lg:px-16 lg:pt-48">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-24">
          <ScrollReveal className="w-full max-w-[420px] lg:w-[38%] lg:shrink-0">
            <div className="portrait-wrap overflow-hidden rounded-full">
              <Image
                src="/images/amr-portrait-v3.webp"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="aspect-square w-full object-cover grayscale"
              />
            </div>
          </ScrollReveal>

          <div className="lg:w-[50%] lg:max-w-[36rem]">
            <ScrollReveal>
              <SubHeader label="About" />
              <h2 className="mb-8 font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
                {"I\u2019m Amr Abu-Talleb."}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mb-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
                {tp("I started with a pen, drawing Arabic and Latin letters by hand until every curve sat right. Thirteen years on, I bring the same attention to bigger things: the brand, campaign and product teams I lead, and the way they work together.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mb-8 text-[1.0625rem] leading-relaxed text-muted-foreground">
                {"Today that\u2019s a\u00A025-person team across design, product, video, support and\u00A0PR, with five or\u00A0six projects live at\u00A0once."}
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
      <ServicesMarquee />
      <WorkSection />
      <About />
      <TestimonialsWithStats testimonials={publishedTestimonials} stats={stats} />
    </main>
  )
}
