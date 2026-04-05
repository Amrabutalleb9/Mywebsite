"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

import { HeroVideoBackground } from "./hero-video-bg"
import { LogoMarquee } from "./logo-marquee"
import { ScrollReveal } from "./scroll-reveal"

const CHECKOUT = process.env.NEXT_PUBLIC_AI_BLUEPRINT_CHECKOUT_URL ?? ""
const AUTHOR_PORTRAIT_SRC = "/images/amr-portrait.webp"
const BOOK_COVER_SRC = "/ai-designer-blueprint/book-mockup.svg"

const TESTIMONIALS = [
  {
    quote:
      "Finally someone names the tools, the platform, and the prices — not another generic 'use AI' post. I had my first contest entry live the same week.",
    name: "Jordan M.",
    role: "Product designer · side income",
  },
  {
    quote:
      "The 7-day calendar alone is worth it. I stopped doom-scrolling job boards and started measuring bids and replies like a real business.",
    name: "Priya S.",
    role: "Caregiver · evenings only",
  },
  {
    quote:
      "Upwork burned me on connects. This blueprint commits to one marketplace and shows how contests bypass the zero-review trap — that clicked for me.",
    name: "Alex R.",
    role: "Self-taught · switching careers",
  },
  {
    quote:
      "Clear, blunt, no guru fluff. The proposal template cut my write time in half and I got two replies in three days.",
    name: "Chris L.",
    role: "Marketing freelancer",
  },
] as const

const ease = [0.16, 1, 0.3, 1] as const

const CHAPTERS = [
  {
    title: "The $500 Opportunity",
    body:
      "Why Freelancer.com for this run, how contests bypass the zero-review wall, and the honest math behind the 7-day target — with real conversion numbers and caveats, not hype.",
  },
  {
    title: "Your AI Stack at $0/Month",
    body:
      "Tools for logos, social media, presentations, and web design — plus the 6-step workflow that makes outputs look client-ready instead of AI-generated.",
  },
  {
    title: "Profile and Proof — Fast",
    body:
      "Positioning, headline formula, exam strategy, and portfolio pieces you generate in one afternoon — credibility without years of polish.",
  },
  {
    title: "Four Services to Sell First",
    body:
      "What to deliver, what to charge in week one, and how to package so scope stays under control. Exact prices: logos $75–$125, social packs $40–$75, decks $75–$150, landing pages $150–$250.",
  },
  {
    title: "Proposals That Earn Replies",
    body:
      "Structure, a paste-ready template, the 30-minute timing window for 2.3x higher response, and short follow-ups that reduce ghosting.",
  },
  {
    title: "7-Day Calendar",
    body:
      "Daily actions, bid counts, contest entries, and a fill-in tracker — so even your busiest days still move the number toward $500.",
  },
  {
    title: "After the First Win",
    body:
      "How to turn one project into a pipeline — niching, leverage, retainers, and a 90-day lens so effort scales instead of repeating week one forever.",
  },
] as const

function buyHref() {
  return CHECKOUT || "#buy"
}

function BuyLink({
  className,
  children,
  id,
  style,
}: {
  className?: string
  children: React.ReactNode
  id?: string
  style?: React.CSSProperties
}) {
  const href = buyHref()
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!CHECKOUT && href === "#buy") {
      e.preventDefault()
      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <Link href={href} id={id} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  )
}

function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1.5,
  start,
  delayMs = 0,
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  start: boolean
  delayMs?: number
}) {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? end : 0)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    if (reduce) {
      setArmed(true)
      setN(end)
      return
    }
    if (!start) return
    const id = window.setTimeout(() => setArmed(true), delayMs)
    return () => window.clearTimeout(id)
  }, [start, delayMs, reduce, end])

  useEffect(() => {
    if (reduce) return
    if (!armed) return
    let t0: number | null = null
    const ms = duration * 1000
    let raf = 0
    const tick = (t: number) => {
      if (t0 === null) t0 = t
      const p = Math.min((t - t0) / ms, 1)
      const eased = 1 - (1 - p) ** 3
      setN(Math.round(eased * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [armed, end, duration, reduce])

  return (
    <span>
      {prefix}
      {n}
      {suffix}
    </span>
  )
}

function StatReveal({
  show,
  index,
  children,
}: {
  show: boolean
  index: number
  children: React.ReactNode
}) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={reduce || show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.55, delay: show ? 0.08 * index : 0, ease }}
    >
      {children}
    </motion.span>
  )
}

export default function FunnelClientV2() {
  const reduce = useReducedMotion()
  const statsBarRef = useRef<HTMLDivElement>(null)
  const statsActive = useInView(statsBarRef, { once: true, amount: 0.35 })
  const chaptersRef = useRef<HTMLDivElement>(null)
  const chaptersInView = useInView(chaptersRef, { once: true, amount: 0.2 })

  useEffect(() => {
    document.body.classList.add("js-loaded")
    return () => document.body.classList.remove("js-loaded")
  }, [])

  return (
    <>
      <header className="hero hero--video">
        <HeroVideoBackground />
        <div className="hero-overlay" aria-hidden />
        <div className="hero-noise hero-noise--light" aria-hidden />

        <div className="hero-shell hero-shell--split">
          <div className="hero-col hero-col--main">
            <motion.p
              className="hero-eyebrow"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0, ease }}
            >
              New · PDF blueprint
            </motion.p>
            <motion.h1
              className="hero-title"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease }}
            >
              <span className="hero-title-line">Your skills aren&apos;t the problem.</span>
              <span className="hero-title-accent">Your system is.</span>
            </motion.h1>

            <motion.p
              className="hero-lede"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
            >
              The 7-day sprint that turns AI tools into $500/week on Freelancer.com.
            </motion.p>

            <motion.p
              className="hero-sub"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.28, ease }}
            >
              Rent is climbing. AI is replacing jobs. And every &quot;make money online&quot; guru tells you to{" "}
              <strong>&quot;just use AI&quot;</strong> without naming a single tool, a single platform, or a single price to
              charge. This 47-page blueprint gives you <strong>all three</strong> — plus a day-by-day calendar so you can
              start executing tonight, not &quot;someday.&quot;
            </motion.p>

            <motion.p
              className="hero-kicker"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.38, ease }}
            >
              One marketplace (Freelancer.com). Four design services. Named tools at $0/month. A bid-by-bid,
              dollar-by-dollar 7-day sprint — even with zero reviews and zero design experience.
            </motion.p>
          </div>

          <motion.div
            className="hero-col hero-col--visual"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
          >
            <div className="hero-book-glow">
              <Image
                src={BOOK_COVER_SRC}
                alt="The AI Designer Blueprint — book cover"
                width={400}
                height={520}
                className="hero-book-img"
                priority
              />
            </div>
          </motion.div>
        </div>
      </header>

      <main className="f2-light">
        <div className="stats-wrap">
          <p className="stats-kicker">Market momentum</p>
          <div className="stats-bar" ref={statsBarRef}>
            <div className="stat-item">
              <span className="stat-num">
                <CountUp end={84} suffix="%" start={statsActive} delayMs={0} />
              </span>
              <span className="stat-label">of freelancers using AI (2026)</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">
                <StatReveal show={statsActive} index={1}>
                  25–60%
                </StatReveal>
              </span>
              <span className="stat-label">higher rates with AI tools</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">
                <StatReveal show={statsActive} index={2}>
                  $16.89B
                </StatReveal>
              </span>
              <span className="stat-label">freelance market by 2029</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">
                <CountUp end={0} prefix="$" start={statsActive} delayMs={360} />
              </span>
              <span className="stat-label">tool cost to start</span>
            </div>
          </div>
        </div>

        <ScrollReveal className="post-stats-offer f2-section">
          <div className="post-stats-offer-inner">
            <div className="price-block">
              <span className="price-old">$19.99</span>
              <span className="price-new">$5.99</span>
              <span className="price-tag">70% OFF</span>
            </div>
            <div className="hero-cta-wrap">
              <BuyLink className="cta-primary" id="hero-cta-v2">
                Download the blueprint — $5.99
              </BuyLink>
            </div>
            <div className="hero-proof">
              <span>Instant PDF</span>
              <span className="hero-proof-dot" aria-hidden />
              <span>30-day money-back</span>
              <span className="hero-proof-dot" aria-hidden />
              <span>Start tonight</span>
            </div>
          </div>
        </ScrollReveal>

        <LogoMarquee headline="Readers building real income with this system — including people who’ve worked at places like" />

        <ScrollReveal>
          <section className="f2-section f2-block book-showcase">
            <div className="book-showcase-grid">
              <div className="book-showcase-copy">
                <span className="section-tag">// About the blueprint</span>
                <h2>47 pages. One marketplace. Zero motivational fluff.</h2>
                <p>
                  While everyone chases the next AI tool, this guide does the opposite: it locks you to{" "}
                  <strong>one platform</strong>, <strong>four services</strong>, and a <strong>7-day deadline</strong> so you
                  execute instead of bookmark. Instant PDF — start tonight.
                </p>
                <ul className="book-showcase-bullets">
                  <li>Named $0/month AI stack for logos, social, decks, and web</li>
                  <li>Bid templates, contest strategy, and week-one pricing</li>
                  <li>Fill-in tracker so you always know if you&apos;re on pace for $500</li>
                </ul>
              </div>
              <div className="book-showcase-visual">
                <div className="book-showcase-frame">
                  <Image
                    src={BOOK_COVER_SRC}
                    alt=""
                    width={420}
                    height={550}
                    className="book-showcase-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="f2-section f2-block testimonials-section" aria-labelledby="testimonials-heading">
            <span className="section-tag">// Social proof</span>
            <h2 id="testimonials-heading">What readers are saying</h2>
            <p className="testimonials-intro">
              Don&apos;t take my word for it — here&apos;s what early readers said about the system.
            </p>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="testimonial-card">
                  <p className="testimonial-stars" aria-hidden>
                    ★★★★★
                  </p>
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <cite className="testimonial-name">{t.name}</cite>
                    <span className="testimonial-role">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <div className="fear-section f2-section">
            <span className="section-tag">// The reality</span>
            <h2>
              One paycheck. Rising costs.
              <br />
              AI moving faster than your plan.
            </h2>
            <p>
              You&apos;re not broken for feeling behind. Wages haven&apos;t kept up with how fast tools change. Traditional
              career advice assumes time you might not have. And side-income ideas online are either vague (&quot;use
              AI!&quot;) or built for people who already have an audience.
            </p>

            <div className="fear-grid">
              <div className="fear-card">
                <h4>You&apos;re watching your ceiling close in</h4>
                <p>
                  You want a second income stream that fits around a job or caregiving — not a second full-time job in
                  disguise. Not another certificate to collect dust. Something that pays this month.
                </p>
              </div>
              <div className="fear-card">
                <h4>You&apos;ve burned months on the wrong platform</h4>
                <p>
                  Upwork charges you to apply. Fiverr buries you without reviews. You keep context-switching between
                  &quot;opportunities&quot; and executing on none of them. This blueprint commits to one marketplace and
                  one sprint goal so you stop browsing and start earning.
                </p>
              </div>
              <div className="fear-card">
                <h4>You think you need a design degree</h4>
                <p>
                  You don&apos;t. Clients pay for outcomes and clarity — a professional brand identity, delivered fast. AI
                  accelerates the drafts. You steer taste, briefs, and revisions. Those are skills you build on real
                  projects, not in a classroom.
                </p>
              </div>
            </div>

            <div className="dream-block">
              <p>
                <strong>This isn&apos;t a lottery ticket.</strong> It&apos;s waking up knowing you can generate income with
                skills that compound: faster delivery, stronger proposals, repeat clients — starting with a concrete
                target (<span className="accent-text">your first $500 sprint</span>) instead of a vague someday.
              </p>
              <p>
                <span className="accent-text">This PDF connects the fear to the plan:</span> name what&apos;s holding you
                back, then hand you the calendar — day by day, bid by bid, dollar by dollar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <section className="agitation f2-section f2-section--agitation" aria-labelledby="agitation-heading">
          <ScrollReveal className="agitation-inner">
            <span className="section-tag">// Why you&apos;re stuck</span>
            <h2 id="agitation-heading">
              You&apos;ve Seen the AI Hype.
              <br />
              You Still Have $0 to Show for It.
            </h2>
            <p>
              You&apos;ve bookmarked the tools. Watched the tutorials. Read the threads.{" "}
              <strong>You still haven&apos;t earned a single dollar from AI.</strong> Here&apos;s why:
            </p>

            <ul className="agitation-list">
              <li>
                <span className="agitation-icon" aria-hidden>
                  ✕
                </span>
                <span>
                  <strong>Generic guides say &quot;use AI to make money&quot;</strong> but never tell you which tools,
                  which platform, which services to sell, or what to charge on day one. You&apos;re left improvising under
                  deadline pressure with no map.
                </span>
              </li>
              <li>
                <span className="agitation-icon" aria-hidden>
                  ✕
                </span>
                <span>
                  <strong>Upwork and Fiverr are traps for beginners.</strong> Upwork charges you per proposal — 100 bids
                  could cost $15–$240 before earning a cent. Fiverr buries you without reviews. Both assume you already
                  have credibility you don&apos;t have yet.
                </span>
              </li>
              <li>
                <span className="agitation-icon" aria-hidden>
                  ✕
                </span>
                <span>
                  <strong>You don&apos;t have a portfolio</strong> so you convinced yourself you can&apos;t start.
                  Meanwhile, people with zero design skills are building portfolios in a single afternoon with AI and
                  landing $100+ projects every week.
                </span>
              </li>
              <li>
                <span className="agitation-icon" aria-hidden>
                  ✕
                </span>
                <span>
                  <strong>You don&apos;t have a system.</strong> You have scattered notes, half-finished tutorials, and a
                  plan to &quot;figure it out eventually.&quot; Eventually is how people stay broke.
                </span>
              </li>
            </ul>

            <p>
              <strong>
                The gap between knowing AI exists and making money from it is one thing: a specific, repeatable system with
                named tools, real prices, and a 7-day deadline.
              </strong>
            </p>
            <p>That&apos;s what you&apos;re about to download.</p>
          </ScrollReveal>
        </section>

        <ScrollReveal>
          <section className="f2-section f2-block chapters-section">
            <div className="chapters-layout">
              <div className="chapters-intro">
                <span className="section-tag">// Inside the blueprint</span>
                <h2>
                  Seven Chapters. One Sprint.
                  <br />
                  No Motivational Padding.
                </h2>
                <p>
                  This is not a course to bookmark. It&apos;s a <strong>47-page execution system</strong> built around one
                  platform, four services, and one deadline. You open it, you follow it, you earn.
                </p>
              </div>
              <div className="chapters-list" ref={chaptersRef}>
                {CHAPTERS.map((ch, i) => (
                  <motion.div
                    key={ch.title}
                    className="chapter-item"
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={chaptersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                    transition={{ duration: 0.5, delay: reduce ? 0 : 0.09 * i, ease }}
                  >
                    <div className="chapter-num" />
                    <div>
                      <h3>{ch.title}</h3>
                      <p>{ch.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="mid-cta f2-section f2-section--cta-mid">
          <ScrollReveal className="mid-cta-inner">
            <h2>
              Still scrolling? <span className="mid-accent">That&apos;s the pattern.</span>
            </h2>
            <p>
              Scroll, bookmark, &quot;come back later,&quot; never start. Break the loop. The system is $5.99 and you can
              begin tonight.
            </p>
            <BuyLink className="cta-primary">Get the blueprint — $5.99</BuyLink>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <section className="f2-section f2-block f2-section--deliverables">
            <span className="section-tag">// What you carry away</span>
            <h2>Concrete Deliverables — Not Vibes</h2>

            <div className="deliverables-grid">
              <div className="deliverable">
                <span className="deliverable-icon">⚙</span>
                <h4>Tool Map + Workflows</h4>
                <p>
                  Know exactly what to open for each job so you&apos;re never improvising under deadline pressure. $0
                  starter stack covers all four services.
                </p>
              </div>
              <div className="deliverable">
                <span className="deliverable-icon">★</span>
                <h4>Profile That Converts</h4>
                <p>
                  Look like a serious hire even when your review count is still at zero. Headline formula, bio template,
                  exam badges that boost your ranking 25%.
                </p>
              </div>
              <div className="deliverable">
                <span className="deliverable-icon">✎</span>
                <h4>Bid + Proposal Templates</h4>
                <p>
                  Replace blank-page panic with a repeatable structure you adapt per client. Now–Wow–How formula,
                  copy-paste ready.
                </p>
              </div>
              <div className="deliverable">
                <span className="deliverable-icon">☑</span>
                <h4>7-Day Tracker</h4>
                <p>
                  See whether you&apos;re on pace — or exactly where to fix the leak. Daily bid counts, revenue targets,
                  fill-in table.
                </p>
              </div>
              <div className="deliverable">
                <span className="deliverable-icon">$</span>
                <h4>Week-One Pricing</h4>
                <p>
                  Numbers to start from so you don&apos;t race to the bottom out of fear. Package pricing that captures
                  2.5x more than hourly billing.
                </p>
              </div>
              <div className="deliverable">
                <span className="deliverable-icon">🚀</span>
                <h4>Growth Lens</h4>
                <p>
                  What to tighten after money shows up so effort scales — niching, retainers, and 90-day targets instead of
                  grinding week one on repeat.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="f2-section f2-block f2-block--math">
            <div className="math-layout">
              <div className="math-col math-col--copy">
                <span className="section-tag">// Show me the math</span>
                <h2>Here&apos;s Exactly How $500 in 7 Days Works</h2>
                <p className="math-intro">
                  Not a vibe. Not a promise. <strong>Arithmetic you can verify before you buy.</strong>
                </p>
                <p className="math-note math-note--below">
                  Ambitious but achievable. Requires 6–8 focused hours daily. Not guaranteed — but the math is real and the
                  book shows every variable.
                </p>
              </div>
              <div className="math-col math-col--table">
                <div className="math-panel">
                  <table className="math-table">
                    <tbody>
                      <tr>
                        <th scope="row">Bids sent (14–15/day × 7 days)</th>
                        <td>~100</td>
                      </tr>
                      <tr>
                        <th scope="row">Response rate (platform average)</th>
                        <td>15%</td>
                      </tr>
                      <tr>
                        <th scope="row">Client conversations</th>
                        <td>~15</td>
                      </tr>
                      <tr>
                        <th scope="row">Conversion to awarded project</th>
                        <td>~20%</td>
                      </tr>
                      <tr>
                        <th scope="row">Projects won from bids alone</th>
                        <td>3</td>
                      </tr>
                      <tr>
                        <th scope="row">+ Contest wins (2–3 entries/day)</th>
                        <td>+1–2</td>
                      </tr>
                      <tr>
                        <th scope="row">Average project value</th>
                        <td>$100–$175</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="math-total-row">
                        <th scope="row">Week 1 gross revenue</th>
                        <td>$450–$525</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="f2-section f2-block">
            <span className="section-tag">// Platform choice</span>
            <h2>Why Freelancer.com Eats Upwork and Fiverr for Breakfast</h2>
            <p>
              This isn&apos;t a generic &quot;start freelancing&quot; guide. It&apos;s engineered for{" "}
              <strong>one platform</strong> — the one with mechanics that{" "}
              <strong>specifically favor beginners with zero reviews</strong>.
            </p>

            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th />
                    <th>Freelancer.com</th>
                    <th>Upwork</th>
                    <th>Fiverr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fees</td>
                    <td className="winner">10% flat</td>
                    <td className="loser">10% sliding</td>
                    <td className="loser">20% flat</td>
                  </tr>
                  <tr>
                    <td>Cost to bid</td>
                    <td className="winner">Free trial = 100 bids</td>
                    <td className="loser">$0.15–$2.40 each</td>
                    <td className="loser">Wait for buyers</td>
                  </tr>
                  <tr>
                    <td>Zero-review fix</td>
                    <td className="winner">Contests (work speaks)</td>
                    <td className="loser">Almost impossible</td>
                    <td className="loser">Months of waiting</td>
                  </tr>
                  <tr>
                    <td>Speed to first $</td>
                    <td className="winner">Fastest</td>
                    <td className="loser">Moderate</td>
                    <td className="loser">Slowest</td>
                  </tr>
                  <tr>
                    <td>Sweet spot</td>
                    <td className="winner">$100–$500/project</td>
                    <td>$500+ (harder to win)</td>
                    <td className="loser">$5–$150 (race to bottom)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Contests are the cheat code.</strong> Clients post a design brief. Freelancers submit actual work.
              Best entry wins the money. Your reviews don&apos;t matter — your <strong>work</strong> does. That&apos;s why
              this entire book is built around this platform and no other.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="f2-section f2-block audience-section">
            <span className="section-tag">// Three entry points</span>
            <h2>This Blueprint Was Built for You If…</h2>

            <div className="audience-grid">
              <article className="audience-tile">
                <span className="audience-tile-num">01</span>
                <span className="tag">You feel the ceiling closing in</span>
                <h3>&quot;I need income — not another certificate.&quot;</h3>
                <p>
                  You want a real side path that fits around a job or family. You can follow steps and send bids when the
                  calendar says so. This is the system for that.
                </p>
              </article>
              <article className="audience-tile">
                <span className="audience-tile-num">02</span>
                <span className="tag">You can design but not sell online</span>
                <h3>&quot;Talent without distribution pays nothing.&quot;</h3>
                <p>
                  You have taste and skills but zero platform knowledge. This book gives you marketplace mechanics, bid
                  timing, pricing frameworks, and proposal templates — everything that turns design ability into money.
                </p>
              </article>
              <article className="audience-tile">
                <span className="audience-tile-num">03</span>
                <span className="tag">You freelance without AI leverage</span>
                <h3>&quot;Speed and iteration are the new baseline.&quot;</h3>
                <p>
                  84% of freelancers already use AI. The ones who don&apos;t are losing contracts — not because they&apos;re
                  bad, but because they&apos;re slower. This book shows you how to use AI without shipping generic work.
                </p>
              </article>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="f2-section f2-block">
            <div className="author-section">
              <div className="author-avatar">
                <Image
                  src={AUTHOR_PORTRAIT_SRC}
                  alt="Amr Abu-Talleb"
                  width={100}
                  height={100}
                  className="author-img"
                  sizes="100px"
                  loading="lazy"
                />
              </div>
              <div className="author-info">
                <h3>Amr Abu-Talleb</h3>
                <div className="role">AI Design Strategist · Freelancer.com Systems</div>
                <p>
                  I wrote this for the version of me who needed cash flow before confidence — tools, prices, bids, and a
                  calendar, not a pep talk. Every strategy tested on real accounts.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="f2-section f2-block">
            <div className="guarantee-card">
              <div className="guarantee-card-inner">
                <p className="guarantee-label">Risk reversal</p>
                <h3 className="guarantee-title">30-day money-back guarantee</h3>
                <p className="guarantee-copy">
                  Read it. Try it. If it doesn&apos;t deliver value, email me for a full refund. No questions. No hoops. No
                  risk on your end — you keep the PDF either way.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="f2-section f2-block faq-section" aria-labelledby="faq-heading">
            <span className="section-tag">// FAQ</span>
            <h2 id="faq-heading">Questions Before You Buy</h2>

            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-q">Do I need design experience?</summary>
                <p className="faq-a">
                  No. AI generates the designs — you steer direction, curate concepts, refine details, and manage clients.
                  Chapter 2 walks you through every tool.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Is $500 in 7 days guaranteed?</summary>
                <p className="faq-a">
                  No — and anyone who guarantees income is lying. It&apos;s an ambitious target requiring 6–8 focused
                  hours daily. Chapter 1 shows the full conversion math so you can judge for yourself.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Why Freelancer.com instead of Upwork or Fiverr?</summary>
                <p className="faq-a">
                  Contests. You submit actual work — clients judge your designs, not your review count. Fastest path from
                  zero to paid. Free trial = 100 bids at zero cost.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Do I need paid AI tools?</summary>
                <p className="faq-a">
                  No. The $0/month stack covers all four services: Canva Free, Gamma Free, Ideogram Free, Vectorizer.ai,
                  ChatGPT, Framer AI Free.
                </p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">What format?</summary>
                <p className="faq-a">Instant PDF — 47 pages. Any device. Start implementing tonight.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Refund?</summary>
                <p className="faq-a">30 days. Email me, full refund. Zero risk.</p>
              </details>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="final-cta f2-section f2-section--final-cta" id="buy">
          <span className="section-tag">// Decision time</span>
          <h2>
            Two options.
            <br />
            <span className="cta-head-muted">One keeps you scrolling.</span>
            <br />
            <span className="cta-head-accent">One puts money in your account.</span>
          </h2>
          <p className="final-lead">
            Close this tab and keep watching other people figure out AI freelancing. Or spend $5.99, download the system,
            and start executing tonight. Your first $500 is 7 days of focused work away.
          </p>

          <div className="cta-stack">
            <div className="price-block">
              <span className="price-old">$19.99</span>
              <span className="price-new">$5.99</span>
              <span className="price-tag">70% OFF</span>
            </div>
            <BuyLink className="cta-primary cta-primary-large" id="buy-cta-v2">
              Download the blueprint now
            </BuyLink>
            <div className="hero-proof">
              <span>📄 Instant PDF</span>
              <span>·</span>
              <span>🔒 30-day refund</span>
              <span>·</span>
              <span>🚀 47 pages of execution</span>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <footer className="f2-light f2-footer">
        <p className="f2-footer-line">
          © 2026 Amr Abu-Talleb · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> ·{" "}
          <a href="mailto:hello@amrabutalleb.com">Contact</a>
        </p>
        <p className="disclaimer">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by
          Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. Results vary. The $500 in 7 days target is
          ambitious and not guaranteed. Income depends on effort, skill, and market conditions. Survey and market-size
          figures are widely reported industry estimates, not personal guarantees.
        </p>
      </footer>
    </>
  )
}
