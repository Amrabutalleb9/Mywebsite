"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { useState } from "react"

const CHECKOUT = process.env.NEXT_PUBLIC_AI_BLUEPRINT_CHECKOUT_URL ?? ""
const BOOK_SRC = "/ai-designer-blueprint/book-mockup.png"
const AUTHOR_PORTRAIT_SRC = "/ai-designer-blueprint/amr-portrait.png"

const ease = [0.16, 1, 0.3, 1] as const

function CtaButton({
  id,
  children,
  className = "",
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  const href = CHECKOUT || "#buy"
  const reduce = useReducedMotion()

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!CHECKOUT) {
      e.preventDefault()
      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.span
      className="inline-block"
      whileHover={reduce ? undefined : { scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease }}
    >
      <Link href={href} id={id} className={`cta-btn ${className}`.trim()} onClick={onClick}>
        {children}
      </Link>
    </motion.span>
  )
}

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.2 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={open ? "faq-item open" : "faq-item"}>
      <button type="button" className="faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
      </button>
      <div className="faq-a">{a}</div>
    </div>
  )
}

export default function FunnelClient() {
  const reduce = useReducedMotion()

  return (
    <>
      <div className="compare-bar">
        Original funnel version.{" "}
        <Link href="/ai-designer-blueprint/v2">View alternate version (fear + aspiration angle)</Link>
      </div>
      <section className="hero">
        <div className="hero__shell">
          <div className="hero__grid">
            <div className="hero__copy">
              <motion.p
                className="hero__eyebrow"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease }}
              >
                Digital playbook · PDF · Freelancer.com + AI
              </motion.p>

              <motion.h1
                className="hero__headline"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease }}
              >
                <span className="hero__headline-line">
                  Land your first <span className="hero__accent">$500</span> client
                </span>
                <span className="hero__headline-line">
                  in <span className="hero__accent">7 days</span> — with AI design
                </span>
                <span className="hero__tagline">
                  A step-by-step system for people with zero design credentials: the exact tools, the exact bids, and a
                  day-by-day plan on Freelancer.com. Not motivation — execution.
                </span>
              </motion.h1>

              <motion.div
                className="hero__price"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.2, ease }}
              >
                <span className="was">$19.99</span>
                <span className="now">$5.99</span>
                <span className="badge">Launch price</span>
              </motion.div>

              <motion.div
                className="hero__actions"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease }}
              >
                <CtaButton id="hero-cta">Download the blueprint — instant access</CtaButton>
                <p className="cta-sub hero__cta-sub">
                  PDF · Start in minutes · 30-day money-back guarantee
                </p>
              </motion.div>
            </div>

            <div className="hero__visual">
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease }}
                style={{ willChange: "transform" }}
              >
                <Image
                  src={BOOK_SRC}
                  alt="The AI Designer Blueprint — book cover by Amr Abu-Talleb"
                  width={917}
                  height={1024}
                  className="hero__book"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip" aria-label="What you get">
        <span>Instant PDF</span>
        <span>47 pages · no fluff</span>
        <span>30-day refund</span>
      </div>

      <section className="section">
        <div className="container">
          <FadeSection>
            <p className="lead text-center mb-4">
              If you can follow a checklist, you can run this. The blueprint maps{" "}
              <strong style={{ color: "var(--ink)" }}>which AI tools to use</strong>,{" "}
              <strong style={{ color: "var(--ink)" }}>what to sell first</strong>,{" "}
              <strong style={{ color: "var(--ink)" }}>what to charge in week one</strong>, and{" "}
              <strong style={{ color: "var(--ink)" }}>how to win work without reviews</strong> — on one platform,
              Freelancer.com, where contests let your work speak before your profile does.
            </p>
          </FadeSection>
        </div>
        <div className="container--wide">
          <FadeSection>
            <div className="stats">
              <div className="stats__item">
                <div className="stats__num">84%</div>
                <div className="stats__label">
                  of freelancers already
                  <br />
                  use AI (2026)
                </div>
              </div>
              <div className="stats__item">
                <div className="stats__num">25–60%</div>
                <div className="stats__label">
                  higher rates reported
                  <br />
                  for AI-assisted design
                </div>
              </div>
              <div className="stats__item">
                <div className="stats__num">$16.89B</div>
                <div className="stats__label">
                  freelance market size
                  <br />
                  trajectory to 2029
                </div>
              </div>
              <div className="stats__item">
                <div className="stats__num">$0</div>
                <div className="stats__label">
                  tool spend required
                  <br />
                  to start (free stack)
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <FadeSection>
            <p className="eyebrow text-center">The gap</p>
            <h2 className="text-center">Generic “make money with AI” content won’t pay your rent</h2>
            <div className="section__divider" />
            <p>
              Most guides stop at hype. They never specify <strong style={{ color: "var(--ink)" }}>which tools</strong>
              , <strong style={{ color: "var(--ink)" }}>which marketplace</strong>,{" "}
              <strong style={{ color: "var(--ink)" }}>which offers</strong>,{" "}
              <strong style={{ color: "var(--ink)" }}>what to charge</strong>, or how to get traction when your profile
              has <strong style={{ color: "var(--ink)" }}>zero reviews</strong>.
            </p>
            <div className="pain-grid">
              <div className="pain-card">
                <h3>You’ve watched tutorials — still no client</h3>
                <p>Information without a sequence is entertainment. You need a day-by-day path tied to one platform.</p>
              </div>
              <div className="pain-card">
                <h3>Upwork & Fiverr punish beginners</h3>
                <p>
                  This system uses Freelancer.com mechanics (including contests) so buyers see your work before your
                  reputation score.
                </p>
              </div>
              <div className="pain-card">
                <h3>“Learn design first” is slow</h3>
                <p>
                  AI handles execution; you handle briefs, taste, and communication — the parts clients actually pay
                  for.
                </p>
              </div>
            </div>
            <div className="mechanism">
              <p style={{ marginBottom: "0.75em" }}>
                <strong style={{ color: "var(--ink)" }}>The fix:</strong> one goal ($500 in 7 days), one platform
                (Freelancer.com), four services, and a printed plan — tools, prices, proposals, and daily outputs.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "var(--red)" }}>This is not a course to binge. It’s a system you run.</strong>
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeSection>
            <p className="eyebrow text-center">Inside the PDF</p>
            <h2 className="text-center">Seven chapters. One outcome. No filler.</h2>
            <div className="section__divider" />

            <ul className="chapters mt-4">
              <li>
                <strong>The $500 opportunity</strong>
                <p>
                  Market context, why Freelancer.com for this sprint, and the honest math behind hitting $500 in a week
                  (including conversion assumptions).
                </p>
              </li>
              <li>
                <strong>Your AI design stack ($0 to start)</strong>
                <p>
                  Tools for logos, social, decks, and simple web — plus a six-step workflow so deliverables look
                  professional, not “AI slop.”
                </p>
              </li>
              <li>
                <strong>Profile that wins before you’re famous</strong>
                <p>
                  Positioning, portfolio pieces you can generate fast, exam strategy, and how to look credible on day
                  one.
                </p>
              </li>
              <li>
                <strong>The four services to sell first</strong>
                <p>
                  What buyers expect, week-one pricing, file formats, and workflows — so you’re not guessing what
                  “finished” means.
                </p>
              </li>
              <li>
                <strong>Proposals that get replies</strong>
                <p>
                  The Now–Wow–How bid structure, a template you can paste, timing notes, and a short client message flow
                  that reduces ghosting.
                </p>
              </li>
              <li>
                <strong>Your 7-day execution calendar</strong>
                <p>
                  Daily targets: bids, contests, follow-ups — with a simple tracker so you know if you’re on pace.
                </p>
              </li>
              <li>
                <strong>After the first $500</strong>
                <p>
                  How to compound: proof, packages, niching, and a 90-day lens — without abandoning what already worked.
                </p>
              </li>
            </ul>
          </FadeSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container--wide">
          <FadeSection>
            <p className="eyebrow text-center">Deliverables</p>
            <h2 className="text-center">What you’re buying is clarity — in a PDF</h2>
            <div className="section__divider" />

            <div className="features">
              <div className="feature-card">
                <div className="feature-card__icon feature-card__icon--red" aria-hidden>
                  ⚙
                </div>
                <h4>Tool stack + workflows</h4>
                <p>
                  Exact tools for each service type and a repeatable process so quality stays consistent when you’re
                  moving fast.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-card__icon feature-card__icon--gold" aria-hidden>
                  ★
                </div>
                <h4>Profile & portfolio fast-path</h4>
                <p>
                  How to look established quickly — without a year of dribbble posts or a design degree.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-card__icon feature-card__icon--red" aria-hidden>
                  ✎
                </div>
                <h4>Bid & proposal templates</h4>
                <p>
                  Copy-paste structure for proposals that answer what clients actually worry about — scope, speed, and
                  proof of understanding.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-card__icon feature-card__icon--green" aria-hidden>
                  ☑
                </div>
                <h4>7-day calendar + tracker</h4>
                <p>
                  Daily actions and numbers to hit so “busy” doesn’t replace “effective.”
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-card__icon feature-card__icon--gold" aria-hidden>
                  $
                </div>
                <h4>Pricing anchors for week one</h4>
                <p>
                  Starting prices and packaging logic so you don’t undercharge from panic or overprice from ego.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-card__icon feature-card__icon--green" aria-hidden>
                  🚀
                </div>
                <h4>Scale lens (post-$500)</h4>
                <p>
                  What to tighten next: leverage, proof, and focus — without rebuilding from scratch every month.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeSection>
            <p className="eyebrow text-center">Fit</p>
            <h2 className="text-center">Built for three situations</h2>
            <div className="section__divider" />

            <div style={{ marginTop: 8 }}>
              <div className="persona-block">
                <h3>Starting from zero</h3>
                <p>
                  No portfolio yet — you’ll use AI outputs + tight direction to produce client-ready work and learn on
                  paid projects instead of waiting to feel “ready.”
                </p>
              </div>
              <div className="persona-block">
                <h3>Skilled — but stuck on marketplaces</h3>
                <p>
                  You can design, but bids go nowhere. You get platform mechanics, pricing, and follow-up in one linear
                  system.
                </p>
              </div>
              <div className="persona-block">
                <h3>Freelancing without AI leverage</h3>
                <p>
                  Speed and iteration matter. The book shows how to use AI to increase output without lowering perceived
                  quality.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <FadeSection>
            <div className="author">
              <div className="author__avatar">
                <Image
                  src={AUTHOR_PORTRAIT_SRC}
                  alt="Amr Abu-Talleb"
                  width={1024}
                  height={571}
                  className="author__avatar-img"
                  sizes="72px"
                />
              </div>
              <div>
                <div className="author__name">Amr Abu-Talleb</div>
                <div className="author__title">AI design strategist · Freelancer.com systems</div>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginTop: 10, marginBottom: 0 }}>
                  This blueprint packages what I’d run if I had to restart from zero: tools, bids, pricing, and a calendar
                  — not inspiration.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="section section--dark" id="buy">
        <div className="container">
          <FadeSection>
            <p className="eyebrow text-center">Offer</p>
            <h2 className="text-center">$5.99 — less than one hour of minimum wage</h2>
            <div className="section__divider" />

            <p className="text-center lead">
              You’re not paying for motivation. You’re paying for a mapped system: tools, offers, bids, pricing, and a
              7-day runbook — plus a refund window if it’s not useful.
            </p>

            <div className="guarantee">
              <div className="guarantee__icon" aria-hidden>
                🔒
              </div>
              <h3>30-day money-back</h3>
              <p>
                Email for a full refund if it’s not what you needed. No interrogation — I’d rather you invest in something
                that moves you forward.
              </p>
            </div>

            <div className="text-center mt-4">
              <CtaButton id="buy-cta">Get instant access — $5.99</CtaButton>
              <p className="cta-sub">PDF · Any device · Keep it forever</p>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeSection>
            <p className="eyebrow text-center">FAQ</p>
            <h2 className="text-center mb-4">Straight answers</h2>

            <FaqItem
              q="Do I need design experience?"
              a="No. The AI stack does heavy lifting; you steer taste, briefs, and client communication. Chapter 2 walks tools and workflow so you are not guessing."
            />
            <FaqItem
              q="Is $500 in 7 days guaranteed?"
              a="No — and any honest book should say that. It is an ambitious target with real math and a heavy workload (often 6–8 focused hours per day). Chapter 1 breaks down assumptions so you can judge for yourself."
            />
            <FaqItem
              q="Why Freelancer.com over Upwork or Fiverr?"
              a="Contests and mechanics that let work speak for itself before reviews dominate. That matters when you are starting at zero."
            />
            <FaqItem
              q="Do I have to buy AI tools?"
              a="No upfront spend required — the book includes a free-tier stack. You can upgrade later once cashflow exists."
            />
            <FaqItem
              q="What format is it?"
              a="PDF download, 47 pages. Works on phone, tablet, or desktop."
            />
            <FaqItem
              q="Refund policy?"
              a="30 days. Email and you get your money back if it is not a fit."
            />
          </FadeSection>
        </div>
      </section>

      <section className="final-cta">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <FadeSection>
            <h2>Your first paid client conversation starts with a plan — not a promise.</h2>
            <p className="lead mt-2">
              Get the blueprint, run the week, and measure what happened. That’s the whole game.
            </p>
            <div className="mt-4">
              <CtaButton id="final-cta">Download now — $5.99</CtaButton>
              <p className="cta-sub">Instant download · 30-day guarantee · Lifetime access to the PDF</p>
            </div>
          </FadeSection>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Amr Abu-Talleb. All rights reserved.</p>
          <p style={{ marginTop: 8 }}>
            <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms of Service</Link> ·{" "}
            <a href="mailto:hello@amrabutalleb.com">Contact</a>
          </p>
          <p style={{ marginTop: 12, fontSize: "0.75rem", color: "rgba(61, 67, 84, 0.85)" }}>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by
            Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. Results vary. The $500 in 7 days target is
            ambitious and not guaranteed — it requires sustained effort as described in the book.
          </p>
        </div>
      </footer>
    </>
  )
}
