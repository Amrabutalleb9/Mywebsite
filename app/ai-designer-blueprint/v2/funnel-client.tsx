"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { useState } from "react"

const CHECKOUT = process.env.NEXT_PUBLIC_AI_BLUEPRINT_CHECKOUT_URL ?? ""
const BOOK_SRC = "/ai-designer-blueprint/book-mockup.png"
const AUTHOR_PORTRAIT_SRC = "/ai-designer-blueprint/amr-portrait.png"

const ease = [0.16, 1, 0.3, 1] as const

function CtaButton({ id, children }: { id?: string; children: React.ReactNode }) {
  const href = CHECKOUT || "#buy"
  const reduce = useReducedMotion()
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!CHECKOUT) {
      e.preventDefault()
      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <motion.span className="inline-block" whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.97 }} transition={{ duration: 0.2, ease }}>
      <Link href={href} id={id} className="f2-cta" onClick={onClick}>
        {children}
      </Link>
    </motion.span>
  )
}

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.15 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={open ? "f2-faq-item open" : "f2-faq-item"}>
      <button type="button" className="f2-faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
      </button>
      <div className="f2-faq-a">{a}</div>
    </div>
  )
}

export default function FunnelClientV2() {
  const reduce = useReducedMotion()

  return (
    <>
      <div className="compare-bar">
        Comparison page (fear + aspiration angle).{" "}
        <Link href="/ai-designer-blueprint">View original version</Link>
      </div>

      <section className="f2-hero">
        <div className="f2-hero__glow" aria-hidden />
        <div className="f2-hero__shell">
          <div className="f2-hero__grid">
            <div>
              <motion.div initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
                <div className="f2-pill">PDF playbook · Freelancer.com + AI</div>
                <h1>
                  The economy is not getting easier.
                  <br />
                  <span className="f2-hero__accent">Your income can still grow.</span>
                </h1>
                <p className="f2-hero__lead">
                  If you feel the squeeze — rent, bills, headlines about layoffs and AI — you are not lazy. You are
                  paying attention. This blueprint is a 7-day execution plan to aim for your first{" "}
                  <strong style={{ color: "var(--ink)" }}>$500</strong> as an AI-backed designer on Freelancer.com: free
                  tools, real bids, no design degree required.
                </p>
                <motion.div className="f2-price-row" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.4 }}>
                  <span className="was">$19.99</span>
                  <span className="now">$5.99</span>
                  <span className="f2-badge">Launch price</span>
                </motion.div>
                <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.45, ease }}>
                  <CtaButton id="hero-cta-v2">Get the PDF — start tonight</CtaButton>
                  <p className="f2-cta-sub">Instant download · 30-day refund · 47 pages</p>
                </motion.div>
              </motion.div>
            </div>
            <div className="f2-hero__visual">
              <motion.div initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, ease }}>
                <Image src={BOOK_SRC} alt="The AI Designer Blueprint book cover" width={917} height={1024} className="f2-hero__book" priority />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="f2-trust" aria-label="Included">
        <span>Instant PDF</span>
        <span>47 pages</span>
        <span>Money-back 30 days</span>
      </div>

      <section className="f2-section">
        <div className="container">
          <FadeSection>
            <p className="f2-lead text-center">
              Most people do not need another course to bookmark. They need a{" "}
              <strong style={{ color: "var(--ink)" }}>sequence</strong>: which AI tools, which services, what to charge
              first, and how to win work when your profile has zero reviews.
            </p>
          </FadeSection>
        </div>
        <div className="container--wide">
          <FadeSection>
            <div className="f2-stats">
              <div className="f2-stats__cell">
                <div className="f2-stats__num">84%</div>
                <div className="f2-stats__label">freelancers using AI (2026, industry surveys)</div>
              </div>
              <div className="f2-stats__cell">
                <div className="f2-stats__num">25–60%</div>
                <div className="f2-stats__label">higher rates for AI-assisted design (reported ranges)</div>
              </div>
              <div className="f2-stats__cell">
                <div className="f2-stats__num">$16.89B</div>
                <div className="f2-stats__label">freelance platform market by 2029 (forecasts)</div>
              </div>
              <div className="f2-stats__cell">
                <div className="f2-stats__num">$0</div>
                <div className="f2-stats__label">to start — free tool stack in the book</div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="f2-section f2-section--panel">
        <div className="container">
          <FadeSection>
            <p className="f2-eyebrow">The fear is rational</p>
            <h2>One paycheck. Rising costs. AI moving faster than your training plan.</h2>
            <div className="f2-divider" />
            <p>
              You are not broken for feeling behind. Wages have not kept up with how fast tools change. Traditional
              career advice assumes time you might not have. Side-income ideas online are either vague (“use AI”) or
              built for people who already have an audience.
            </p>
            <div className="f2-cards">
              <div className="f2-card">
                <h3>You fear falling behind on bills</h3>
                <p>
                  You want a second stream that fits around a job or caregiving — not a second full-time job in
                  disguise.
                </p>
              </div>
              <div className="f2-card">
                <h3>You fear wasting months on the wrong platform</h3>
                <p>
                  This blueprint commits to one marketplace and one sprint goal so you stop context-switching and start
                  executing.
                </p>
              </div>
              <div className="f2-card">
                <h3>You fear you need a design degree</h3>
                <p>
                  Clients pay for outcomes and clarity. AI accelerates drafts; you steer taste, briefs, and revisions —
                  skills you can build on real projects.
                </p>
              </div>
            </div>
            <div className="f2-dream">
              <p style={{ marginBottom: "0.75em" }}>
                <strong style={{ color: "var(--ink)" }}>The dream is not a lottery ticket.</strong> It is waking up
                knowing you can generate income with skills that compound: faster delivery, better proposals, repeat
                buyers — starting with a concrete target (your first <strong style={{ color: "var(--ink)" }}>$500</strong>{" "}
                sprint) instead of a vague someday.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "var(--accent)" }}>This PDF connects the two:</strong> name the fear, then give
                the plan — day by day, bid by bid.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="f2-section">
        <div className="container">
          <FadeSection>
            <p className="f2-eyebrow">Inside</p>
            <h2>Seven chapters. One sprint. No motivational padding.</h2>
            <div className="f2-divider" />
            <ul className="f2-chapters">
              <li>
                <strong>The $500 opportunity</strong>
                <p>
                  Why Freelancer.com for this run, how contests help when you have no reviews, and the math behind the
                  7-day target (with honest caveats).
                </p>
              </li>
              <li>
                <strong>Your AI stack at $0/month</strong>
                <p>Tools for logos, social, decks, and light web — plus a workflow so outputs look client-ready.</p>
              </li>
              <li>
                <strong>Profile and proof fast</strong>
                <p>Positioning, portfolio pieces you can generate quickly, and credibility without years of polish.</p>
              </li>
              <li>
                <strong>Four services to sell first</strong>
                <p>What to deliver, what to charge in week one, and how to package so scope stays under control.</p>
              </li>
              <li>
                <strong>Proposals that earn replies</strong>
                <p>Structure, a paste-ready template, timing, and short follow-ups that reduce ghosting.</p>
              </li>
              <li>
                <strong>7-day calendar</strong>
                <p>Daily actions, bid counts, and a tracker so busy days still move the number.</p>
              </li>
              <li>
                <strong>After the first win</strong>
                <p>How to turn one project into a pipeline — niching, leverage, and a 90-day lens.</p>
              </li>
            </ul>
          </FadeSection>
        </div>
      </section>

      <section className="f2-section f2-section--panel">
        <div className="container--wide">
          <FadeSection>
            <p className="f2-eyebrow">What you carry away</p>
            <h2>Concrete deliverables — not vibes</h2>
            <div className="f2-divider" />
            <div className="f2-features">
              <div className="f2-feature">
                <div className="f2-feature__icon" aria-hidden>
                  ⚙
                </div>
                <h4>Tool map + workflows</h4>
                <p>Know what to open for each job so you are not improvising under deadline pressure.</p>
              </div>
              <div className="f2-feature">
                <div className="f2-feature__icon" aria-hidden>
                  ★
                </div>
                <h4>Profile that converts</h4>
                <p>Look like a serious hire even when your review count is still at zero.</p>
              </div>
              <div className="f2-feature">
                <div className="f2-feature__icon" aria-hidden>
                  ✎
                </div>
                <h4>Bid and proposal templates</h4>
                <p>Replace blank-page panic with a repeatable structure you can adapt per client.</p>
              </div>
              <div className="f2-feature">
                <div className="f2-feature__icon" aria-hidden>
                  ☑
                </div>
                <h4>7-day tracker</h4>
                <p>See whether you are on pace — or where to fix the leak.</p>
              </div>
              <div className="f2-feature">
                <div className="f2-feature__icon" aria-hidden>
                  $
                </div>
                <h4>Week-one pricing</h4>
                <p>Numbers to start from so you do not race to the bottom out of fear.</p>
              </div>
              <div className="f2-feature">
                <div className="f2-feature__icon" aria-hidden>
                  🚀
                </div>
                <h4>Growth lens</h4>
                <p>What to tighten after money shows up so effort scales instead of repeating week one forever.</p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="f2-section">
        <div className="container">
          <FadeSection>
            <p className="f2-eyebrow">Who this is for</p>
            <h2>Three entry points</h2>
            <div className="f2-divider" />
            <div className="f2-persona">
              <h3>You feel the income ceiling closing in</h3>
              <p>
                You want a real side path — not another certificate. You can follow steps and send bids when the calendar
                says so.
              </p>
            </div>
            <div className="f2-persona">
              <h3>You can design — but not sell online</h3>
              <p>
                Talent without distribution pays nothing. You get marketplace mechanics and proposals in one system.
              </p>
            </div>
            <div className="f2-persona">
              <h3>You freelance — without AI leverage</h3>
              <p>
                Speed and iteration are the new baseline. The book shows how to use AI without shipping generic work.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="f2-section f2-section--panel">
        <div className="container">
          <FadeSection>
            <div className="f2-author">
              <div className="f2-author__img">
                <Image src={AUTHOR_PORTRAIT_SRC} alt="Amr Abu-Talleb" width={1024} height={571} className="h-full w-full object-cover" sizes="72px" />
              </div>
              <div>
                <div className="f2-author__name">Amr Abu-Talleb</div>
                <div className="f2-author__role">AI design strategist · Freelancer.com systems</div>
                <p style={{ fontSize: "0.88rem", marginTop: 10, marginBottom: 0 }}>
                  I wrote this for the version of me who needed cash flow before confidence — tools, prices, bids, and a
                  calendar, not a pep talk.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="f2-section" id="buy">
        <div className="container">
          <FadeSection className="f2-offer">
            <p className="f2-eyebrow">Offer</p>
            <h2>$5.99 — a small bet on a bigger lever</h2>
            <div className="f2-divider" />
            <p className="f2-lead">
              You are not buying motivation. You are buying a mapped system: stack, offers, bids, pricing, and a 7-day
              run — plus a refund window if it is not useful.
            </p>
            <div className="f2-guarantee">
              <div style={{ fontSize: "2rem" }} aria-hidden>
                🔒
              </div>
              <h3>30-day money-back</h3>
              <p>
                Email for a full refund if it is not what you needed. I would rather you invest in something that moves
                you forward.
              </p>
            </div>
            <CtaButton id="buy-cta-v2">Download instant access — $5.99</CtaButton>
            <p className="f2-cta-sub">PDF on any device · Keep forever</p>
          </FadeSection>
        </div>
      </section>

      <section className="f2-section f2-section--panel">
        <div className="container">
          <FadeSection>
            <p className="f2-eyebrow">Questions</p>
            <h2 className="mb-4">FAQ</h2>
            <FaqItem q="Do I need design experience?" a="No. The book names tools and a workflow so you are not guessing. You steer the work; AI speeds drafts." />
            <FaqItem
              q="Is $500 in 7 days guaranteed?"
              a="No. It is an ambitious target. It takes focused hours and real market response. Chapter 1 shows the math so you can judge what is realistic for you."
            />
            <FaqItem q="Why Freelancer.com?" a="Contests and mechanics that let your work show before your review count does — important when you are starting from zero." />
            <FaqItem q="Do I need paid AI tools?" a="No. The stack starts on free tiers. Upgrade when revenue justifies it." />
            <FaqItem q="What format?" a="PDF, 47 pages, instant download." />
            <FaqItem q="Refund?" a="30 days. Email for a full refund if it is not a fit." />
          </FadeSection>
        </div>
      </section>

      <section className="f2-final">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <FadeSection>
            <h2>Turn the fear into a calendar — not a scroll hole.</h2>
            <p className="f2-lead" style={{ maxWidth: "36rem", margin: "0 auto 24px" }}>
              Get the blueprint, run the week, measure what happened. That is the whole game.
            </p>
            <CtaButton id="final-cta-v2">Get the PDF — $5.99</CtaButton>
            <p className="f2-cta-sub">Instant download · 30-day guarantee</p>
            <p className="f2-cta-sub" style={{ marginTop: 16 }}>
              <Link href="/ai-designer-blueprint">Prefer the original page?</Link>
            </p>
          </FadeSection>
        </div>
      </section>

      <footer className="f2-footer">
        <p>&copy; 2026 Amr Abu-Talleb. All rights reserved.</p>
        <p style={{ marginTop: 8 }}>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <a href="mailto:hello@amrabutalleb.com">Contact</a>
        </p>
        <p style={{ marginTop: 12, maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by
          Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. Results vary. The $500 in 7 days target is
          ambitious and not guaranteed. Income depends on effort, skill, and market conditions. Survey and market-size
          figures are widely reported industry estimates, not personal guarantees.
        </p>
      </footer>
    </>
  )
}
