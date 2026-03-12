import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { articles, getReadingTime } from "@/lib/articles"

import HeroSection from "@/components/homepage/hero-section"
import MarqueeBanner from "@/components/homepage/marquee-banner"
import ClientTicker from "@/components/homepage/client-ticker"
import TestimonialsWithStats from "@/components/homepage/testimonials-with-stats"
import ScrollReveal from "@/components/homepage/scroll-reveal"

/* ─── Data ─────────────────────────────────────────── */

const stats = [
  { end: 57, suffix: "%+", label: "Client Engagement\u00A0Lift" },
  { end: 13, suffix: "+", label: "Years Leading\u00A0Creative" },
  { end: 25, suffix: "", label: "Designers\u00A0Led" },
  { end: 15, suffix: "+", label: "Industries\u00A0Served" },
]

const testimonials = [
  { text: "Is there a\u00A0god or do angels exist? We\u00A0have been thru hell with 4\u00A0previous freelancers for 2\u00A0years. All\u00A04 were unable to\u00A0complete the work. Enter\u00A0Amr. He\u00A0is highly intelligent, genuine and\u00A0lovely. He has integrity, is extremely skilled, has good aesthetic sense and\u00A0importantly, a\u00A0great sense of\u00A0humour!", author: "Dipa", location: "Singapore", role: "Website Design" },
  { text: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in a\u00A0detailed explanation. He\u00A0went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales funnel.", author: "Robert", location: "Melbourne, Australia", role: "Funnel Copywriting & Design" },
  { text: "Amr delivered beyond expectations. The\u00A0brand identity he created captured our vision perfectly and translated seamlessly across every touchpoint. His strategic thinking elevated the entire\u00A0project.", author: "Overpowered Agency", location: "UK", role: "Brand Identity" },
  { text: "Outstanding collaboration! Amr\u00A0was extremely professional, fast, and\u00A0precise. He\u00A0quickly understood the project requirements and delivered flawless work on\u00A0time. Communication was smooth, he was always available, and\u00A0paid great attention to\u00A0detail. Highly\u00A0recommended!", author: "Stefano", location: "Valencia, Spain", role: "Website Design" },
  { text: "He is Extraordinary! Way\u00A0beyond anything I expected. Amr is very talented, knowledgeable, professional, and\u00A0competent. Communication in\u00A0english is excellent. Prompt to\u00A0resolve any issues. Goes beyond the expected for customer\u00A0satisfaction.", author: "Augustina", location: "Herning, Denmark", role: "Website Design" },
  { text: "Amr assisted me in a\u00A0very challenging Art/Crime book project I authored. Very\u00A0professional work and his continual ongoing communications and proferred insights were invaluable. I\u00A0highly recommend him.", author: "Steven Hodel", location: "Blaine, United States", role: "Book Design" },
  { text: "So professional, on time, high level of\u00A0skills and capabilities\u2026 don\u2019t waste your time and\u00A0assign him your work, I didn\u2019t see anything with his level of\u00A0accountability.", author: "Ahmed", location: "Khobar, KSA", role: "Branding" },
  { text: "Fantastic work and great communication. Very\u00A0happy with the outcome of report from a\u00A0layout and a\u00A0branding perspective.", author: "Paul", location: "Melbourne, Australia", role: "Branding" },
  { text: "Very professional and created me an amazing\u00A0design.", author: "Elliot", location: "London, UK", role: "Apparel Design" },
  { text: "Great UI/UX designer, quick delivery and\u00A0clear communication. Highly\u00A0recommend working with him!", author: "Stefano", location: "Sydney, Australia", role: "Head of UX, Freelancer.com" },
  { text: "Amr was able to\u00A0discuss different options with me and working together with adjustments was able to\u00A0create photorealistic expressions on\u00A0my character. Great\u00A0job. High\u00A0quality stuff!", author: "Alex", location: "Melbourne, Australia", role: "Character Design" },
  { text: "Dude he is the greatest of\u00A0all\u00A0time.", author: "Mazen", location: "Qassim, Saudi Arabia", role: "Architecture Portfolio Design" },
]

const capabilities = [
  { title: "Creative Direction", desc: "I set the vision. I\u00A0lead the team. I\u00A0make sure every piece of\u00A0work that ships is something I\u2019d put my name\u00A0on." },
  { title: "Brand Identity & Strategy", desc: "Logos, type systems, color, guidelines, positioning. The\u00A0whole foundation. Built to\u00A0scale, built to\u00A0last." },
  { title: "UI/UX Design", desc: "Interfaces for web and mobile. From\u00A0wireframes to\u00A0production. Screens that perform, not just screens that look\u00A0nice." },
  { title: "Typography Systems", desc: "Type is my primary design tool. I\u00A0build typographic hierarchies that do the heavy lifting in\u00A0any layout, any\u00A0language." },
  { title: "Art Direction", desc: "Defining the visual tone across campaigns, editorial, packaging, and digital. This\u00A0is where the storytelling\u00A0lives." },
  { title: "Campaign Design", desc: "Multi-channel creative for digital, social, and print. Strategy\u00A0first. Execution\u00A0second. Results\u00A0always." },
]

const caseStudyCards = [
  { slug: "overpowered", num: "01", title: "Overpowered", subtitle: "Rebranding a\u00A0multi-market creative agency for three audiences, one\u00A0identity", impact: "Unified identity across 3\u00A0markets \u00B7 A/B-tested micro campaigns \u00B7 Design system still in\u00A0use months\u00A0later", category: "Brand Identity & Rebrand", year: "2025", role: "Creative Director \u00B7 Led team of\u00A025", featureImage: "", featureImageAlt: "" },
  { slug: "split", num: "02", title: "Split", subtitle: "Redesigning a\u00A0fitness platform from competitive research to\u00A0revenue-driving features", impact: "Won the client by rewriting a\u00A0flawed quotation \u00B7 New monetisation paths \u00B7 Research-validated\u00A0features", category: "UX/UI Product Design", year: "2025", role: "Creative Director & UX Lead \u00B7 Team of\u00A03", featureImage: "", featureImageAlt: "" },
  { slug: "agfin", num: "03", title: "Agfin", subtitle: "Turning a\u00A0static website into a\u00A012% revenue engine through strategic copywriting", impact: "12%\u00A0sales increase in month one \u00B7 Zero ad spend \u00B7 Copy-first strategy\u00A0validated", category: "Sales Funnel & Copywriting", year: "2024", role: "Creative Director, UX & Copywriter \u00B7 Solo\u00A0project", featureImage: "", featureImageAlt: "" },
  { slug: "dipa", num: "04", title: "Dipa Visionary Art School", subtitle: "Rebuilding a\u00A0visionary art school\u2019s digital home after three\u00A0years of\u00A0failed attempts", impact: "70%\u00A0increase in website views \u00B7 Replaced 4\u00A0failed freelancers \u00B7 Being submitted for\u00A0Awwwards", category: "Immersive Web Experience", year: "2022\u20132026", role: "Creative Director & UX/UI \u00B7 Led small\u00A0team", featureImage: "/images/dipa-showcase.png", featureImageAlt: "Dipa Visionary Art School immersive website design" },
]

const highlightCards = [
  { slug: "alfy", num: "05", title: "Alfy", subtitle: "Repositioning a\u00A0luxury marble brand for B2B\u00A0impact", result: "70%\u00A0engagement increase", year: "2025", category: "Campaign Strategy", role: "Creative Director at\u00A0Overpowered", featureImage: "/images/alfy-feature.png", featureImageAlt: "El Alfy Saraya luxury marble brand website hero" },
  { slug: "steve-hodel", num: "06", title: "As Within, So Without, Steven Hodel", subtitle: "Designing a\u00A0212-page illustrated volume for a\u00A0NYT bestselling author", result: "212\u00A0pages \u00B7 130+\u00A0images \u00B7 Print-ready", year: "2025", category: "Editorial Design", role: "Book Designer (sole designer)", featureImage: "/images/steve-hodel-feature.png", featureImageAlt: "As Within, So Without by Steve Hodel, hardcover book on desk" },
  { slug: "alienor", num: "07", title: "Alienor", subtitle: "Premium skincare brand identity & packaging", result: "Full brand identity\u00A0system", year: "2022", category: "Brand & Packaging", role: "Creative Director & Brand Designer", featureImage: "/images/alienor-feature.png", featureImageAlt: "Alienor skincare brand identity with elegant serif logotype" },
]

const blogSlugs = [
  "your-logo-is-not-your-brand",
  "directing-a-brand-across-four-markets",
  "typography-is-your-most-underused-design-weapon",
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
    <section id="work" className="overflow-hidden px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">

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
            <ScrollReveal key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block" data-cursor-label={`Explore ${project.title}`}>
                <div className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${!isRight ? "lg:flex-row-reverse" : ""}`}>

                  <div className="lg:w-[30%] lg:flex-shrink-0">
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
            </ScrollReveal>
          )
        })}
      </div>

      {/* ── Project Highlights ── */}
      <div className="mt-28 lg:mt-40">
        <ScrollReveal>
          <p className="mb-10 text-xs font-medium tracking-[var(--tracking-label)] text-muted-foreground/50 uppercase">Project Highlights</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlightCards.map((project) => (
            <ScrollReveal key={project.slug}>
              <Link href={`/highlights/${project.slug}`} className="group block" data-cursor-label={`View ${project.title}`}>
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
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal>
        <div className="mt-20 flex justify-center border-t border-border pt-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:text-accent">
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
    <section id="about" className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <ScrollReveal className="lg:w-[40%]">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/images/amr-portrait.png"
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
                {"I\u2019ve spent 13\u00A0years directing brands, leading teams of\u00A0up to\u00A025, and designing digital products across the Middle East, UK, Europe, USA, Australia, Singapore, and\u00A0Canada."}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="max-w-[60ch] leading-relaxed text-muted-foreground">
                {"My work has driven a\u00A012% sales increase with zero ad\u00A0spend, a\u00A070% lift in\u00A0social engagement, and a\u00A0unified brand system across three international markets\u00A0\u2014 built in\u00A0two months. I\u2019ve rescued a\u00A0website after four freelancers failed over three years, restructured a\u00A0mis-priced development proposal into a\u00A0two-phase engagement before a\u00A0single wireframe was drawn, and designed a\u00A0212-page illustrated volume for a\u00A0New York Times bestselling\u00A0author."}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-sm text-muted-foreground">
                {"Figma / FigJam \u00B7 Adobe Creative Suite \u00B7 Webflow \u00B7 Framer \u00B7 WordPress \u00B7 Cursor AI \u00B7 V0"}
              </p>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <ScrollReveal key={cap.title} delay={0.25 + i * 0.06}>
                  <div className="rounded-sm bg-surface p-6">
                    <h3 className="mb-2 text-sm font-medium text-foreground">{cap.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{cap.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-16 flex justify-center border-t border-border pt-8">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:text-accent">
              Read&nbsp;More
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── Blog Preview (Insights layout) ─────────────── */

function BlogPreview() {
  const blogPosts = blogSlugs.map(slug => articles.find(a => a.slug === slug)!).filter(Boolean)

  return (
    <section id="blog" className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <ScrollReveal className="lg:w-[35%]">
          <SubHeader label="Insights" />
          <h2 className="font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            Thinking Out&nbsp;Loud
          </h2>
          <p className="mt-4 max-w-[45ch] leading-relaxed text-muted-foreground">
            Thoughts on&nbsp;design, brand strategy, and the craft of&nbsp;creative&nbsp;direction.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 lg:w-[65%]">
          <ScrollReveal>
            <Link href={`/articles/${blogPosts[0].slug}`} className="group block" data-cursor-label="Read Article">
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
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogPosts.slice(1).map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.08}>
                <Link href={`/articles/${post.slug}`} className="group block" data-cursor-label="Read Article">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <ScrollReveal>
        <div className="mt-16 flex justify-center border-t border-border pt-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:text-accent">
            All&nbsp;Articles
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </ScrollReveal>
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
      <TestimonialsWithStats testimonials={testimonials} stats={stats} />
      <About />
      <ClientTicker />
      <BlogPreview />
    </main>
  )
}
