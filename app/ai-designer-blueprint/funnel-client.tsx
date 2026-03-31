"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

const CHECKOUT = process.env.NEXT_PUBLIC_AI_BLUEPRINT_CHECKOUT_URL ?? ""
const BOOK_SRC = "/ai-designer-blueprint/book-mockup.png"
const AUTHOR_PORTRAIT_SRC = "/ai-designer-blueprint/amr-portrait.png"

function useCountdown() {
  const [hms, setHms] = useState({ h: "02", m: "00", s: "00" })

  useEffect(() => {
    let end = typeof window !== "undefined" ? localStorage.getItem("funnelEnd") : null
    let endNum: number
    if (!end) {
      endNum = Date.now() + 2 * 60 * 60 * 1000
      localStorage.setItem("funnelEnd", String(endNum))
    } else {
      endNum = parseInt(end, 10)
    }

    let raf = 0
    const tick = () => {
      const d = Math.max(0, endNum - Date.now())
      const h = Math.floor(d / 3600000)
      const m = Math.floor((d % 3600000) / 60000)
      const s = Math.floor((d % 60000) / 1000)
      setHms({
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      })
      if (d > 0) raf = requestAnimationFrame(tick)
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [])

  return hms
}

function CtaButton({ id, children }: { id?: string; children: React.ReactNode }) {
  const href = CHECKOUT || "#buy"

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!CHECKOUT) {
      e.preventDefault()
      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Link href={href} id={id} className="cta-btn" onClick={onClick}>
      {children}
    </Link>
  )
}

export default function FunnelClient() {
  const { h, m, s } = useCountdown()

  const toggleFaq = useCallback((el: EventTarget & HTMLDivElement) => {
    el.classList.toggle("open")
  }, [])

  const revealRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const els = revealRefs.current.filter(Boolean) as HTMLDivElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const refReveal = (i: number) => (el: HTMLDivElement | null) => {
    revealRefs.current[i] = el
  }

  return (
    <>
      <div className="topbar" id="topbar">
        <span id="timer-icon">&#9203;</span> Launch price ends in <span id="hrs">{h}</span>:
        <span id="mins">{m}</span>:<span id="secs">{s}</span> — then it&apos;s $19.99
      </div>

      <section className="hero">
        <div className="hero__shell">
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="hero__eyebrow">The Complete Step-by-Step System</p>

              <h1 className="hero__headline">
                <span className="hero__headline-line">
                  Make Your First <span className="hero__accent">$500</span>
                </span>
                <span className="hero__headline-line">
                  on Freelancer.com in <span className="hero__accent">7 Days</span>
                </span>
                <span className="hero__tagline">Using AI Design Tools — No Experience Required</span>
              </h1>

              <div className="hero__price">
                <span className="was">$19.99</span>
                <span className="now">$5.99</span>
                <span className="badge">Launch Price</span>
              </div>

              <div className="hero__actions">
                <CtaButton id="hero-cta">GET THE BLUEPRINT NOW &rarr;</CtaButton>
                <p className="cta-sub hero__cta-sub">Instant PDF download &middot; 30-day money-back guarantee</p>
              </div>
            </div>

            <div className="hero__visual">
              <Image
                src={BOOK_SRC}
                alt="The AI Designer Blueprint — book cover by Amr Abu-Talleb"
                width={917}
                height={1024}
                className="hero__book"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead text-center mb-4">
            The exact AI tools, the exact Freelancer.com strategies, and the exact 7-day action plan that turns
            complete beginners into paid designers. 47 pages of pure execution — zero fluff.
          </p>
        </div>
        <div className="container--wide">
          <div className="stats reveal" ref={refReveal(0)}>
            <div className="stats__item">
              <div className="stats__num">84%</div>
              <div className="stats__label">
                of freelancers use
                <br />
                AI in 2026
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__num">25–60%</div>
              <div className="stats__label">
                higher rates for
                <br />
                AI designers
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__num">$16.89B</div>
              <div className="stats__label">
                freelance market
                <br />
                by 2029
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__num">$0</div>
              <div className="stats__label">
                AI tool cost
                <br />
                to start
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container reveal" ref={refReveal(1)}>
          <p className="eyebrow text-center">The Problem</p>
          <h2 className="text-center">Most &quot;AI Freelancing&quot; Guides Are Useless</h2>
          <div className="section__divider" />
          <p>
            They give you vague motivation. &quot;Use AI to make money!&quot; But they never tell you{" "}
            <strong style={{ color: "var(--ink)" }}>which AI tools</strong>,{" "}
            <strong style={{ color: "var(--ink)" }}>which platform</strong>,{" "}
            <strong style={{ color: "var(--ink)" }}>which services to sell</strong>,{" "}
            <strong style={{ color: "var(--ink)" }}>what to charge</strong>, or{" "}
            <strong style={{ color: "var(--ink)" }}>how to actually get your first client</strong> when you have zero
            reviews.
          </p>
          <p>
            This book is different. It&apos;s a 47-page operational blueprint built around{" "}
            <strong style={{ color: "var(--ink)" }}>one specific platform</strong> (Freelancer.com),{" "}
            <strong style={{ color: "var(--ink)" }}>four specific services</strong>, and{" "}
            <strong style={{ color: "var(--ink)" }}>one specific goal</strong>: your first $500 in 7 days. Every
            chapter has exact tools, exact prices, exact templates, and a day-by-day action plan.
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: "var(--red)" }}>This isn&apos;t a course. It&apos;s a system you start executing today.</strong>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container reveal" ref={refReveal(2)}>
          <p className="eyebrow text-center">What&apos;s Inside</p>
          <h2 className="text-center">7 Chapters. 47 Pages. Zero Filler.</h2>
          <div className="section__divider" />

          <ul className="chapters mt-4">
            <li>
              <strong>The $500 Opportunity</strong>
              <p>
                The market data, the Freelancer.com advantage over Upwork and Fiverr, and the honest math behind $500 in
                7 days — with real conversion numbers.
              </p>
            </li>
            <li>
              <strong>Your AI Design Toolkit</strong>
              <p>
                The exact tools for logos, social media, presentations, and web design. A $0/month starter stack that
                covers all 4 services. Plus the 6-step professional workflow.
              </p>
            </li>
            <li>
              <strong>Setting Up Your Profile to Win</strong>
              <p>
                Profile optimization that beats 95% of freelancers, the exam strategy that makes you 25% more likely to
                win, and how to build a professional portfolio with AI in one afternoon.
              </p>
            </li>
            <li>
              <strong>The 4 Money-Making Design Services</strong>
              <p>
                For each service: what clients expect, what to charge in Week 1, the AI workflow, and the exact file
                formats to deliver. Plus the value-based pricing philosophy that 2.5x your revenue.
              </p>
            </li>
            <li>
              <strong>Winning Bids & Landing Projects</strong>
              <p>
                The Now–Wow–How proposal formula, a copy-paste bid template, the timing strategy that gets 2.3x higher
                success rates, and the 5-message client communication flow.
              </p>
            </li>
            <li>
              <strong>Your 7-Day Action Plan</strong>
              <p>
                Day-by-day breakdown: what to do, how many bids to send, which contests to enter, and daily revenue
                targets. Includes a fill-in tracking table.
              </p>
            </li>
            <li>
              <strong>What Happens After $500</strong>
              <p>
                The three levers for scaling to $5,000/month: systems, social proof, and optimization. Plus the niching
                strategy and 90-day roadmap.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container--wide reveal" ref={refReveal(3)}>
          <p className="eyebrow text-center">What You Walk Away With</p>
          <h2 className="text-center">Everything You Need. Nothing You Don&apos;t.</h2>
          <div className="section__divider" />

          <div className="features">
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--red">&#9881;</div>
              <h4>Complete AI Toolkit</h4>
              <p>
                Every tool for logos, social media, presentations, and web design — with a $0/month starter stack that
                covers all 4 services.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--gold">&#9733;</div>
              <h4>Optimized Profile Setup</h4>
              <p>
                Step-by-step profile optimization that ranks you above 95% of freelancers. Headline formula, bio
                template, and exam strategy included.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--red">&#9998;</div>
              <h4>Proposal Templates</h4>
              <p>
                The Now–Wow–How bid formula with a real copy-paste template proven to win projects — even with zero
                reviews on your profile.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--green">&#9745;</div>
              <h4>7-Day Action Plan</h4>
              <p>
                Day-by-day breakdown with exact bid counts, contest entries, and revenue targets. Plus a tracking table
                to measure your progress.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--gold">&#128176;</div>
              <h4>Pricing & Packaging Guide</h4>
              <p>
                Exact Week 1 prices for all 4 services, the package-vs-hourly framework, and the bid pricing template
                that eliminates scope creep.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--green">&#128640;</div>
              <h4>Scaling Roadmap</h4>
              <p>
                From $500 to $5,000/month: the three growth levers, the niching strategy, and a 90-day roadmap with
                monthly revenue targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal" ref={refReveal(4)}>
          <p className="eyebrow text-center">Is This For You?</p>
          <h2 className="text-center">This Book Works For 3 Types of People</h2>
          <div className="section__divider" />

          <div style={{ marginTop: 32 }}>
            <div style={{ padding: "20px 0", borderBottom: "1px solid var(--border)" }}>
              <h3 style={{ color: "var(--red)", marginBottom: 8, fontSize: "1.1rem" }}>&#10140; Complete Beginners</h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                You&apos;ve never designed anything. That&apos;s fine. The AI tools do the heavy lifting — you bring
                direction and client communication. By Day 1, you&apos;ll have a professional portfolio. By Day 7,
                paying clients.
              </p>
            </div>
            <div style={{ padding: "20px 0", borderBottom: "1px solid var(--border)" }}>
              <h3 style={{ color: "var(--red)", marginBottom: 8, fontSize: "1.1rem" }}>
                &#10140; Designers Who Haven&apos;t Cracked Freelancing
              </h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                You have skills but zero platform knowledge. This book gives you the algorithm mechanics, bid timing
                strategies, and pricing frameworks that turn design talent into client revenue.
              </p>
            </div>
            <div style={{ padding: "20px 0" }}>
              <h3 style={{ color: "var(--red)", marginBottom: 8, fontSize: "1.1rem" }}>
                &#10140; Freelancers Who Haven&apos;t Integrated AI
              </h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                84% of freelancers already use AI. You&apos;re falling behind. This book gives you the exact tool stack
                and workflow to generate 20–30 concepts in minutes, deliver faster, and charge 25–60% more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container reveal" ref={refReveal(5)}>
          <div className="author">
            <div className="author__avatar">
              <Image
                src={AUTHOR_PORTRAIT_SRC}
                alt="Amr Abu-Talleb"
                width={1024}
                height={571}
                className="author__avatar-img"
                sizes="64px"
              />
            </div>
            <div>
              <div className="author__name">Amr Abu-Talleb</div>
              <div className="author__title">AI Design Strategist & Freelancer.com Expert</div>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: 8, marginBottom: 0 }}>
                Built this system from scratch, tested every strategy in the book on real accounts, and packaged it into
                the blueprint you&apos;re about to download.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="buy">
        <div className="container reveal" ref={refReveal(6)}>
          <p className="eyebrow text-center">Get The Blueprint</p>
          <h2 className="text-center">$5.99 — That&apos;s Less Than a Coffee</h2>
          <div className="section__divider" />

          <p className="text-center lead">
            For the price of a latte, you get the complete system: AI toolkit, profile setup, 4 services with pricing,
            proposal templates, and a 7-day action plan.
          </p>

          <div className="guarantee">
            <div className="guarantee__icon">&#128274;</div>
            <h3>30-Day Money-Back Guarantee</h3>
            <p>
              If the book doesn&apos;t deliver, email me and I&apos;ll refund every cent. No questions, no hoops. The
              risk is entirely on me.
            </p>
          </div>

          <div className="text-center mt-4">
            <CtaButton id="buy-cta">GET INSTANT ACCESS — $5.99 &rarr;</CtaButton>
            <p className="cta-sub">Instant PDF download &middot; Works on any device &middot; Lifetime access</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal" ref={refReveal(7)}>
          <p className="eyebrow text-center">Questions?</p>
          <h2 className="text-center mb-4">Frequently Asked</h2>

          <div
            className="faq-item"
            role="button"
            tabIndex={0}
            onClick={(e) => toggleFaq(e.currentTarget)}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(e.currentTarget)}
          >
            <div className="faq-q">Do I need design experience?</div>
            <div className="faq-a">
              No. The AI tools in this book generate professional-quality work from text descriptions. You provide
              direction and client communication — the AI handles the design heavy lifting. Chapter 2 walks you through
              every tool.
            </div>
          </div>
          <div
            className="faq-item"
            role="button"
            tabIndex={0}
            onClick={(e) => toggleFaq(e.currentTarget)}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(e.currentTarget)}
          >
            <div className="faq-q">Is $500 in 7 days realistic?</div>
            <div className="faq-a">
              The book is honest about this: it&apos;s ambitious but achievable, not guaranteed. The math is real — 100
              bids at a 15% response rate yields 3+ projects averaging $100–$175 each. It requires 6–8 hours daily of
              focused work. Chapter 1 shows the full conversion math.
            </div>
          </div>
          <div
            className="faq-item"
            role="button"
            tabIndex={0}
            onClick={(e) => toggleFaq(e.currentTarget)}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(e.currentTarget)}
          >
            <div className="faq-q">Why Freelancer.com and not Upwork or Fiverr?</div>
            <div className="faq-a">
              Contests. Freelancer.com&apos;s contest system lets you submit actual work — clients judge your designs,
              not your reviews. This bypasses the zero-review problem that makes Upwork and Fiverr nearly impossible for
              beginners. Plus, the free trial gives you 100 bids at zero cost.
            </div>
          </div>
          <div
            className="faq-item"
            role="button"
            tabIndex={0}
            onClick={(e) => toggleFaq(e.currentTarget)}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(e.currentTarget)}
          >
            <div className="faq-q">What AI tools do I need to buy?</div>
            <div className="faq-a">
              None. The book includes a $0/month starter stack using only free tiers: Canva Free, Gamma Free, Ideogram
              Free, ChatGPT, Vectorizer.ai, and Framer AI Free. You can upgrade later once revenue starts, but you
              don&apos;t need to spend anything upfront.
            </div>
          </div>
          <div
            className="faq-item"
            role="button"
            tabIndex={0}
            onClick={(e) => toggleFaq(e.currentTarget)}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(e.currentTarget)}
          >
            <div className="faq-q">What format is the book?</div>
            <div className="faq-a">
              Instant PDF download — 47 pages. Works on any device. You can start reading and implementing immediately.
            </div>
          </div>
          <div
            className="faq-item"
            role="button"
            tabIndex={0}
            onClick={(e) => toggleFaq(e.currentTarget)}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(e.currentTarget)}
          >
            <div className="faq-q">What&apos;s your refund policy?</div>
            <div className="faq-a">
              30-day money-back guarantee. If the book doesn&apos;t deliver value, email me and I&apos;ll refund every
              cent. No questions asked.
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h2>Your First $500 Starts Here.</h2>
          <p className="lead mt-2">The tools are free. The platform is ready. The plan is inside.</p>
          <div className="mt-4">
            <CtaButton id="final-cta">GET THE BLUEPRINT — $5.99 &rarr;</CtaButton>
            <p className="cta-sub">Instant download &middot; 30-day guarantee &middot; Lifetime access</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Amr Abu-Talleb. All rights reserved.</p>
          <p style={{ marginTop: 8 }}>
            <Link href="/privacy">Privacy Policy</Link> &middot; <Link href="/terms">Terms of Service</Link> &middot;{" "}
            <a href="mailto:hello@amrabutalleb.com">Contact</a>
          </p>
          <p style={{ marginTop: 12, fontSize: "0.75rem", color: "rgba(15, 23, 42, 0.72)" }}>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed
            by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. Results may vary. The $500 in 7 days
            target is ambitious but not guaranteed — it requires dedicated effort as described in the book.
          </p>
        </div>
      </footer>
    </>
  )
}
