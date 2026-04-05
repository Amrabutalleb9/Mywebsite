"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"

const CHECKOUT = process.env.NEXT_PUBLIC_AI_BLUEPRINT_CHECKOUT_URL ?? ""
const AUTHOR_PORTRAIT_SRC = "/images/amr-portrait.webp"

const ease = [0.16, 1, 0.3, 1] as const

const HERO_ROTATE = [
  "Bids that earn replies",
  "Contests that beat zero reviews",
  "Proposals with a repeatable system",
  "A 7-day calendar that compounds",
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

function FadeIn({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease }}
    >
      {children}
    </motion.div>
  )
}

function HeroRotator() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setI((n) => (n + 1) % HERO_ROTATE.length), 3200)
    return () => window.clearInterval(id)
  }, [reduce])
  const phrase = HERO_ROTATE[reduce ? 0 : i]
  return (
    <div className="hero-rotate" aria-live="polite">
      {reduce ? (
        <span className="hero-rotate-text">{phrase}</span>
      ) : (
        <AnimatePresence mode="wait">
          <motion.span
            key={phrase}
            className="hero-rotate-text"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease }}
          >
            {phrase}
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  )
}

function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1.35,
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (reduce) {
      setN(end)
      return
    }
    if (!isInView) return
    let start: number | null = null
    const ms = duration * 1000
    let raf = 0
    const tick = (t: number) => {
      if (start === null) start = t
      const p = Math.min((t - start) / ms, 1)
      const eased = 1 - (1 - p) ** 3
      setN(Math.round(eased * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, end, duration, reduce])
  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  )
}

function StatFade({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  return (
    <span ref={ref}>
      <motion.span
        style={{ display: "inline-block" }}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={reduce || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.55, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function FunnelClientV2() {
  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const parallaxAurora = useTransform(scrollYProgress, [0, 1], [0, 100])
  const parallaxOrbitA = useTransform(scrollYProgress, [0, 1], [0, 60])
  const parallaxOrbitB = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <>
      <div className="f2-head-fixed">
        <div className="urgency-strip">⚡ LAUNCH PRICE: $5.99 (70% OFF) — THIS PRICE WILL NOT LAST</div>
        <nav className="topbar" aria-label="Primary">
          <span className="topbar-left">AI DESIGNER BLUEPRINT</span>
          <BuyLink className="topbar-cta">GET IT NOW — $5.99</BuyLink>
        </nav>
      </div>
      <div className="f2-head-spacer" aria-hidden />

      <header ref={heroRef} className="hero">
        <motion.div className="hero-aurora" style={{ y: reduce ? 0 : parallaxAurora }} aria-hidden />
        <div className="hero-noise" aria-hidden />
        <motion.div className="hero-orbit hero-orbit--a" style={{ y: reduce ? 0 : parallaxOrbitA }} aria-hidden />
        <motion.div className="hero-orbit hero-orbit--b" style={{ y: reduce ? 0 : parallaxOrbitB }} aria-hidden />

        <div className="hero-shell">
          <div className="hero-col hero-col--main">
            <motion.p
              className="hero-pill"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <span className="hero-pill-dot" aria-hidden />
              47-page PDF · Freelancer.com execution system
            </motion.p>

            <p className="hero-rotate-label">What you&apos;re building toward</p>
            <HeroRotator />

            <motion.h1
              className="hero-title"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
            >
              <span className="hero-title-line">Your skills aren&apos;t the problem.</span>
              <span className="hero-title-accent">Your system is.</span>
            </motion.h1>

            <motion.p
              className="hero-lede"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : 0.1, ease }}
            >
              → The 7-day sprint that turns AI tools into $500/week on Freelancer.com.
            </motion.p>

            <motion.p
              className="hero-sub"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.14, ease }}
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
              transition={{ duration: 0.4, delay: 0.2, ease }}
            >
              → One marketplace (Freelancer.com). Four design services. Named tools at $0/month. A bid-by-bid,
              dollar-by-dollar 7-day sprint — even with zero reviews and zero design experience.
            </motion.p>

            <motion.div
              className="price-block"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.4 }}
            >
              <span className="price-old">$19.99</span>
              <span className="price-new">$5.99</span>
              <span className="price-tag">70% OFF</span>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4, ease }}
            >
              <BuyLink className="cta-primary" id="hero-cta-v2">
                Download the blueprint — $5.99
              </BuyLink>
            </motion.div>

            <motion.div
              className="hero-proof"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.34, duration: 0.4 }}
            >
              <span>Instant PDF</span>
              <span className="hero-proof-dot" aria-hidden />
              <span>30-day money-back</span>
              <span className="hero-proof-dot" aria-hidden />
              <span>Start tonight</span>
            </motion.div>
          </div>

          <div className="hero-col hero-col--visual" aria-hidden>
            <div className="hero-card-stack">
              <div className="hero-float-card hero-float-card--1">
                <span className="hero-float-tag">Day 4–7</span>
                <span className="hero-float-title">Bids → replies → awarded</span>
              </div>
              <div className="hero-float-card hero-float-card--2">
                <span className="hero-float-tag">Stack</span>
                <span className="hero-float-title">$0/mo AI tools named</span>
              </div>
              <div className="hero-float-card hero-float-card--3">
                <span className="hero-float-tag">Target</span>
                <span className="hero-float-title">$500 sprint math</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="stats-wrap">
        <motion.p
          className="stats-kicker"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          Market momentum
        </motion.p>
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-num">
              <CountUp end={84} suffix="%" />
            </span>
            <span className="stat-label">of freelancers using AI (2026)</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">
              <StatFade>25–60%</StatFade>
            </span>
            <span className="stat-label">higher rates with AI tools</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">
              <StatFade>$16.89B</StatFade>
            </span>
            <span className="stat-label">freelance market by 2029</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">
              <CountUp end={0} prefix="$" />
            </span>
            <span className="stat-label">tool cost to start</span>
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="fear-section f2-band-paper">
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
      </FadeIn>

      <section className="agitation f2-band-ink" aria-labelledby="agitation-heading">
        <motion.div
          className="agitation-inner"
          initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
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
        </motion.div>
      </section>

      <FadeIn>
        <section className="f2-block f2-band-cream">
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

          <div className="chapters">
            <div className="chapter-item">
              <div className="chapter-num" />
              <div>
                <h3>The $500 Opportunity</h3>
                <p>
                  Why Freelancer.com for this run, how contests bypass the zero-review wall, and the honest math behind
                  the 7-day target — with real conversion numbers and caveats, not hype.
                </p>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num" />
              <div>
                <h3>Your AI Stack at $0/Month</h3>
                <p>
                  Tools for logos, social media, presentations, and web design — plus the 6-step workflow that makes
                  outputs look client-ready instead of AI-generated.
                </p>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num" />
              <div>
                <h3>Profile and Proof — Fast</h3>
                <p>
                  Positioning, headline formula, exam strategy, and portfolio pieces you generate in one afternoon —
                  credibility without years of polish.
                </p>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num" />
              <div>
                <h3>Four Services to Sell First</h3>
                <p>
                  What to deliver, what to charge in week one, and how to package so scope stays under control. Exact
                  prices: logos $75–$125, social packs $40–$75, decks $75–$150, landing pages $150–$250.
                </p>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num" />
              <div>
                <h3>Proposals That Earn Replies</h3>
                <p>
                  Structure, a paste-ready template, the 30-minute timing window for 2.3x higher response, and short
                  follow-ups that reduce ghosting.
                </p>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num" />
              <div>
                <h3>7-Day Calendar</h3>
                <p>
                  Daily actions, bid counts, contest entries, and a fill-in tracker — so even your busiest days still move
                  the number toward $500.
                </p>
              </div>
            </div>
            <div className="chapter-item">
              <div className="chapter-num" />
              <div>
                <h3>After the First Win</h3>
                <p>
                  How to turn one project into a pipeline — niching, leverage, retainers, and a 90-day lens so effort
                  scales instead of repeating week one forever.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="mid-cta f2-band-ink">
        <motion.div
          className="mid-cta-inner"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2>
            Still scrolling? <span className="mid-accent">That&apos;s the pattern.</span>
          </h2>
          <p>
            Scroll, bookmark, &quot;come back later,&quot; never start. Break the loop. The system is $5.99 and you can
            begin tonight.
          </p>
          <BuyLink className="cta-primary">Get the blueprint — $5.99</BuyLink>
        </motion.div>
      </div>

      <FadeIn>
        <section className="f2-block f2-band-paper">
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
      </FadeIn>

      <FadeIn>
        <section className="f2-block f2-band-cream">
          <span className="section-tag">// Show me the math</span>
          <h2>Here&apos;s Exactly How $500 in 7 Days Works</h2>
          <p>
            Not a vibe. Not a promise. <strong>Arithmetic you can verify before you buy.</strong>
          </p>

          <div className="math-block">
            <div className="math-row">
              <span className="label">Bids sent (14–15/day × 7 days)</span>
              <span className="value">~100</span>
            </div>
            <div className="math-row">
              <span className="label">Response rate (platform average)</span>
              <span className="value">15%</span>
            </div>
            <div className="math-row">
              <span className="label">Client conversations</span>
              <span className="value">~15</span>
            </div>
            <div className="math-row">
              <span className="label">Conversion to awarded project</span>
              <span className="value">~20%</span>
            </div>
            <div className="math-row">
              <span className="label">Projects won from bids alone</span>
              <span className="value">3</span>
            </div>
            <div className="math-row">
              <span className="label">+ Contest wins (2–3 entries/day)</span>
              <span className="value">+1–2</span>
            </div>
            <div className="math-row">
              <span className="label">Average project value</span>
              <span className="value">$100–$175</span>
            </div>
            <div className="math-total">
              <span className="label">WEEK 1 GROSS REVENUE</span>
              <span className="value">$450–$525</span>
            </div>
          </div>

          <p className="math-note">
            Ambitious but achievable. Requires 6–8 focused hours daily. Not guaranteed — but the math is real and the book
            shows every variable.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="f2-block f2-band-paper">
          <span className="section-tag">// Platform choice</span>
          <h2>Why Freelancer.com Eats Upwork and Fiverr for Breakfast</h2>
          <p>
            This isn&apos;t a generic &quot;start freelancing&quot; guide. It&apos;s engineered for{" "}
            <strong>one platform</strong> — the one with mechanics that <strong>specifically favor beginners with zero reviews</strong>.
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
      </FadeIn>

      <FadeIn>
        <section className="f2-block f2-band-cream">
          <span className="section-tag">// Three entry points</span>
          <h2>This Blueprint Was Built for You If…</h2>

          <div className="audience-cards">
            <div className="audience-card">
              <span className="tag">→ You feel the ceiling closing in</span>
              <h3>&quot;I need income — not another certificate.&quot;</h3>
              <p>
                You want a real side path that fits around a job or family. You can follow steps and send bids when the
                calendar says so. This is the system for that.
              </p>
            </div>
            <div className="audience-card">
              <span className="tag">→ You can design but not sell online</span>
              <h3>&quot;Talent without distribution pays nothing.&quot;</h3>
              <p>
                You have taste and skills but zero platform knowledge. This book gives you marketplace mechanics, bid
                timing, pricing frameworks, and proposal templates — everything that turns design ability into money.
              </p>
            </div>
            <div className="audience-card">
              <span className="tag">→ You freelance without AI leverage</span>
              <h3>&quot;Speed and iteration are the new baseline.&quot;</h3>
              <p>
                84% of freelancers already use AI. The ones who don&apos;t are losing contracts — not because they&apos;re
                bad, but because they&apos;re slower. This book shows you how to use AI without shipping generic work.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="f2-block f2-band-paper">
          <div className="author-section">
            <Image
              src={AUTHOR_PORTRAIT_SRC}
              alt="Amr Abu-Talleb"
              width={100}
              height={100}
              className="author-img"
              sizes="100px"
            />
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
      </FadeIn>

      <FadeIn>
        <section className="f2-block f2-band-cream">
          <div className="guarantee-box">
            <span className="shield" aria-hidden>
              🛡️
            </span>
            <h3>30-Day Money-Back Guarantee</h3>
            <p>
              Read it. Try it. If it doesn&apos;t deliver value, email me for a full refund. No questions. No hoops. No
              risk on your end — you keep the PDF either way.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="f2-block f2-band-paper">
          <span className="section-tag">// FAQ</span>
          <h2>Questions Before You Buy</h2>

          <div className="faq-item">
            <div className="faq-q">Do I need design experience?</div>
            <p className="faq-a">
              No. AI generates the designs — you steer direction, curate concepts, refine details, and manage clients.
              Chapter 2 walks you through every tool.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is $500 in 7 days guaranteed?</div>
            <p className="faq-a">
              No — and anyone who guarantees income is lying. It&apos;s an ambitious target requiring 6–8 focused hours
              daily. Chapter 1 shows the full conversion math so you can judge for yourself.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why Freelancer.com instead of Upwork or Fiverr?</div>
            <p className="faq-a">
              Contests. You submit actual work — clients judge your designs, not your review count. Fastest path from zero
              to paid. Free trial = 100 bids at zero cost.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-q">Do I need paid AI tools?</div>
            <p className="faq-a">
              No. The $0/month stack covers all four services: Canva Free, Gamma Free, Ideogram Free, Vectorizer.ai,
              ChatGPT, Framer AI Free.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-q">What format?</div>
            <p className="faq-a">Instant PDF — 47 pages. Any device. Start implementing tonight.</p>
          </div>
          <div className="faq-item">
            <div className="faq-q">Refund?</div>
            <p className="faq-a">30 days. Email me, full refund. Zero risk.</p>
          </div>
        </section>
      </FadeIn>

      <motion.div
        className="final-cta f2-band-finale"
        id="buy"
        initial={reduce ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease }}
      >
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
      </motion.div>

      <footer className="f2-footer f2-band-ink f2-footer-bar">
        <p>© 2026 Amr Abu-Talleb. All rights reserved.</p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> ·{" "}
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
