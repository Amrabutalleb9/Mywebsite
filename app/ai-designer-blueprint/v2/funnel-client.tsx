"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

const CHECKOUT = process.env.NEXT_PUBLIC_AI_BLUEPRINT_CHECKOUT_URL ?? ""
const AUTHOR_PORTRAIT_SRC = "/ai-designer-blueprint/amr-portrait.png"

const ease = [0.16, 1, 0.3, 1] as const

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

export default function FunnelClientV2() {
  const reduce = useReducedMotion()

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

      <header className="hero">
        <motion.div
          className="hero-badge"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <span className="badge-dot" />
          47-page execution system — not another &quot;AI guide&quot;
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease }}
        >
          Stop Watching Others
          <br />
          Cash In on AI.
          <br />
          <span className="highlight">Make Your First $500</span>
          <br />
          in 7 Days Flat.
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.12, ease }}
        >
          The <strong>exact AI tools</strong>, the <strong>exact bid templates</strong>, and the{" "}
          <strong>exact day-by-day plan</strong> that turns a zero-review Freelancer.com profile into{" "}
          <strong>$500 in paid design work</strong> — even if you&apos;ve never opened Photoshop in your life.
        </motion.p>

        <motion.div
          className="price-block"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="price-old">$19.99</span>
          <span className="price-new">$5.99</span>
          <span className="price-tag">70% OFF</span>
        </motion.div>

        <motion.div initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.4, ease }}>
          <BuyLink className="cta-primary" id="hero-cta-v2">
            ⚡ DOWNLOAD THE BLUEPRINT — $5.99
          </BuyLink>
        </motion.div>

        <div className="hero-proof">
          <span>📄 Instant PDF</span>
          <span>·</span>
          <span>🔒 30-day refund</span>
          <span>·</span>
          <span>🚀 Start tonight</span>
        </div>
      </header>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">84%</span>
          <span className="stat-label">of freelancers using AI in 2026</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">25‑60%</span>
          <span className="stat-label">higher rates with AI tools</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">$16.89B</span>
          <span className="stat-label">freelance market by 2029</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">$0</span>
          <span className="stat-label">tool cost to start</span>
        </div>
      </div>

      <section className="agitation">
        <div className="inner">
          <span className="section-tag">// The problem</span>
          <h2>You&apos;ve Seen the AI Hype. You Still Have $0 to Show for It.</h2>
          <p>
            Every week there&apos;s a new thread: <strong>&quot;I made $10K with AI!&quot;</strong> — but when you
            click, it&apos;s a 45-minute video that tells you nothing. You&apos;ve bookmarked the tools. You&apos;ve
            watched the tutorials. You still haven&apos;t earned a single dollar from AI.
          </p>
          <p>Here&apos;s why:</p>

          <ul className="agitation-list">
            <li>
              <span className="agitation-icon">✕</span>
              <span>
                <strong>Generic &quot;AI freelancing&quot; guides</strong> tell you to &quot;use AI to make money&quot;
                but never say which tools, which platform, which services, or what price to charge on day one.
              </span>
            </li>
            <li>
              <span className="agitation-icon">✕</span>
              <span>
                <strong>Upwork and Fiverr are traps for beginners.</strong> Upwork charges you per proposal. Fiverr
                buries you without reviews. You bleed money and time before earning a cent.
              </span>
            </li>
            <li>
              <span className="agitation-icon">✕</span>
              <span>
                <strong>You don&apos;t have a &quot;design portfolio.&quot;</strong> So you convince yourself you
                can&apos;t start yet. Meanwhile, people with zero design skills are using AI to land $100+ projects
                every week.
              </span>
            </li>
            <li>
              <span className="agitation-icon">✕</span>
              <span>
                <strong>You don&apos;t have a system.</strong> You have scattered notes, half-read articles, and a
                vague plan to &quot;figure it out eventually.&quot; Eventually never comes.
              </span>
            </li>
          </ul>

          <p>
            <strong>
              The gap between knowing AI exists and making money from it is execution — a specific, repeatable system
              with named tools, real prices, and a deadline.
            </strong>
          </p>
          <p>That&apos;s what you&apos;re about to download.</p>
        </div>
      </section>

      <section>
        <span className="section-tag">// The system</span>
        <h2>47 Pages That Replace Every &quot;AI Course&quot; You&apos;ve Bookmarked</h2>
        <p>
          This is not a motivational PDF. It&apos;s a <strong>step-by-step operational blueprint</strong> built
          around one platform, four services, and one goal: <strong>your first $500 in 7 days on Freelancer.com</strong>.
        </p>
        <p>
          Every chapter names the specific tool. Every service has an exact Week 1 price. Every day has a target. You
          open it, you follow it, you execute.
        </p>

        <ul className="chapters">
          <li className="chapter-item">
            <div className="chapter-num" />
            <div>
              <h3>The $500 Opportunity</h3>
              <p>
                Why Freelancer.com destroys Upwork and Fiverr for beginners. The contest loophole that bypasses zero
                reviews. The real conversion math — 100 bids, 15 conversations, 3+ projects. No hype, just arithmetic.
              </p>
            </div>
          </li>
          <li className="chapter-item">
            <div className="chapter-num" />
            <div>
              <h3>Your AI Design Toolkit</h3>
              <p>
                The exact tools for logos (Ideogram, Logo Diffusion), social media (Canva AI), presentations (Gamma),
                and web design (Framer AI). Full stack at $0/month. Plus the 6-step workflow that separates $50
                freelancers from $200 ones.
              </p>
            </div>
          </li>
          <li className="chapter-item">
            <div className="chapter-num" />
            <div>
              <h3>Profile Setup That Wins</h3>
              <p>
                The headline formula. The 3-paragraph bio template. The exam strategy that makes you 25% more likely to
                win. How to build a portfolio of 5–8 professional pieces using AI in a single afternoon — before your
                first bid.
              </p>
            </div>
          </li>
          <li className="chapter-item">
            <div className="chapter-num" />
            <div>
              <h3>4 Money-Making Services</h3>
              <p>
                Logos ($75–$125), social media packs ($40–$75), presentations ($75–$150), landing pages ($150–$250). For
                each: what clients expect, the AI workflow, the file formats, and the package pricing template that 2.5x
                your revenue vs. hourly billing.
              </p>
            </div>
          </li>
          <li className="chapter-item">
            <div className="chapter-num" />
            <div>
              <h3>Winning Bids & Proposals</h3>
              <p>
                The Now–Wow–How formula that outperforms 90% of bids. A copy-paste template. The 30-minute timing window
                that gets 2.3x higher response rates. The 5-message communication flow. The exact review request
                script.
              </p>
            </div>
          </li>
          <li className="chapter-item">
            <div className="chapter-num" />
            <div>
              <h3>7-Day Action Plan</h3>
              <p>
                Day 1: setup (zero bids). Day 2: 15 bids + 3 contests. Day 3: momentum. Day 4: first delivery. Day 5:
                stack. Day 6: close. Day 7: evaluate. Every day has bid counts, contest targets, and a revenue tracker.
              </p>
            </div>
          </li>
          <li className="chapter-item">
            <div className="chapter-num" />
            <div>
              <h3>From $500 to $5,000/Month</h3>
              <p>
                The three scaling levers: systems that cut admin time in half, social proof that compounds, and the
                niching strategy that turns you from a commodity into a specialist. 90-day roadmap with monthly targets.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <div className="mid-cta">
        <h2>
          Still reading? <span className="accent">Good.</span>
        </h2>
        <p>Most people click away. The ones who get results are the ones who decide.</p>
        <BuyLink className="cta-primary">⚡ GET THE BLUEPRINT — $5.99</BuyLink>
      </div>

      <section>
        <span className="section-tag">// Show me the math</span>
        <h2>Here&apos;s Exactly How $500 in 7 Days Works</h2>
        <p>
          This isn&apos;t a &quot;just trust me&quot; promise. It&apos;s <strong>arithmetic you can verify</strong> before
          you buy.
        </p>

        <div className="math-block">
          <div className="math-row">
            <span className="m-label">Bids sent (14–15/day × 7 days)</span>
            <span className="m-value">~100</span>
          </div>
          <div className="math-row">
            <span className="m-label">Response rate (platform average)</span>
            <span className="m-value">15%</span>
          </div>
          <div className="math-row">
            <span className="m-label">Client conversations</span>
            <span className="m-value">~15</span>
          </div>
          <div className="math-row">
            <span className="m-label">Conversion to project</span>
            <span className="m-value">~20%</span>
          </div>
          <div className="math-row">
            <span className="m-label">Projects won from bids</span>
            <span className="m-value">3</span>
          </div>
          <div className="math-row">
            <span className="m-label">+ Contest wins (2–3 entries/day)</span>
            <span className="m-value">+1–2</span>
          </div>
          <div className="math-row">
            <span className="m-label">Average project value</span>
            <span className="m-value">$100–$175</span>
          </div>
          <div className="math-total">
            <span className="m-label">GROSS REVENUE</span>
            <span className="m-value">$450–$525</span>
          </div>
        </div>

        <p className="math-note">
          Ambitious but achievable. Requires 6–8 focused hours daily. Not guaranteed — but the math is real.
        </p>
      </section>

      <section>
        <span className="section-tag">// What you get</span>
        <h2>
          Everything to Execute.
          <br />
          Nothing to &quot;Figure Out Later.&quot;
        </h2>

        <div className="deliverables-grid">
          <div className="deliverable">
            <span className="deliverable-icon">⚙</span>
            <h4>Complete AI Toolkit</h4>
            <p>Named tools for every service. $0 starter stack. Upgrade path when revenue hits.</p>
          </div>
          <div className="deliverable">
            <span className="deliverable-icon">★</span>
            <h4>Profile That Converts</h4>
            <p>Headline formula, bio template, exam strategy, and a portfolio you build in one afternoon.</p>
          </div>
          <div className="deliverable">
            <span className="deliverable-icon">✎</span>
            <h4>Proposal Templates</h4>
            <p>The Now–Wow–How bid formula. Copy-paste ready. Timing strategy for 2.3x higher response.</p>
          </div>
          <div className="deliverable">
            <span className="deliverable-icon">☑</span>
            <h4>7-Day Action Plan</h4>
            <p>Daily bid counts, contest targets, and a fill-in tracker so you know if you&apos;re on pace.</p>
          </div>
          <div className="deliverable">
            <span className="deliverable-icon">$</span>
            <h4>Pricing & Packages</h4>
            <p>Exact Week 1 prices. Package templates that eliminate scope creep. Value-based pricing 101.</p>
          </div>
          <div className="deliverable">
            <span className="deliverable-icon">🚀</span>
            <h4>$5K/Month Roadmap</h4>
            <p>Three growth levers, niching strategy, and 90-day targets to keep compounding after week one.</p>
          </div>
        </div>
      </section>

      <section>
        <span className="section-tag">// Platform choice</span>
        <h2>Why Freelancer.com Eats Upwork and Fiverr for Breakfast</h2>
        <p>
          This isn&apos;t a generic &quot;start freelancing&quot; guide. It&apos;s engineered for{" "}
          <strong>one platform</strong> because that platform has mechanics that{" "}
          <strong>specifically favor beginners with zero reviews</strong>.
        </p>

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
              <td className="loser">Gig ranking takes months</td>
            </tr>
            <tr>
              <td>Speed to first $</td>
              <td className="winner">Fastest</td>
              <td className="loser">Moderate</td>
              <td className="loser">Slowest</td>
            </tr>
            <tr>
              <td>Project range</td>
              <td className="winner">$100–$500 sweet spot</td>
              <td>$500+ (harder to win)</td>
              <td className="loser">$5–$150 (race to bottom)</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Contests are the cheat code.</strong> Clients post a design brief, freelancers submit actual work, best
          entry wins the prize. Your reviews don&apos;t matter — your <strong>work</strong> does. That&apos;s why this book
          exists around this platform.
        </p>
      </section>

      <section>
        <span className="section-tag">// Is this for you?</span>
        <h2>This Blueprint Was Built for Three People</h2>

        <div className="audience-cards">
          <div className="audience-card">
            <span className="tag">→ Complete Beginner</span>
            <h3>&quot;I&apos;ve never designed anything in my life.&quot;</h3>
            <p>
              Perfect. The AI does the designing. You bring direction, client communication, and the willingness to send
              15 bids a day. By Day 1, you&apos;ll have a portfolio. By Day 7, paying clients.
            </p>
          </div>
          <div className="audience-card">
            <span className="tag">→ Designer Without Clients</span>
            <h3>&quot;I have skills but zero platform knowledge.&quot;</h3>
            <p>
              You have taste — now get distribution. This book gives you the algorithm mechanics, bid timing, pricing
              frameworks, and contest strategy that turn design ability into recurring income.
            </p>
          </div>
          <div className="audience-card">
            <span className="tag">→ Freelancer Without AI</span>
            <h3>&quot;I&apos;m already freelancing but I&apos;m leaving money on the table.&quot;</h3>
            <p>
              84% of freelancers already use AI. AI-augmented designers charge 25–60% more. The book gives you the
              exact tool stack and workflow to generate 20–30 concepts in minutes and deliver twice as fast.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="author-section">
          <Image src={AUTHOR_PORTRAIT_SRC} alt="Amr Abu-Talleb" width={200} height={200} className="author-img" />
          <div className="author-info">
            <h3>Amr Abu-Talleb</h3>
            <div className="role">AI Design Strategist · Freelancer.com Systems</div>
            <p>
              I wrote this for the version of me who needed a paycheck before a pep talk. No theory. No fluff. Just the
              exact tools, exact prices, exact bids, and exact calendar that turns &quot;I should try freelancing&quot;
              into &quot;$500 in my account.&quot;
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="guarantee-box">
          <span className="shield" aria-hidden>
            🛡️
          </span>
          <h3>30-Day Money-Back Guarantee</h3>
          <p>
            Read it. Try it. If it doesn&apos;t deliver value, email me for a full refund. No questions. No hoops. The
            entire risk is on me — you keep the PDF either way.
          </p>
        </div>
      </section>

      <section>
        <span className="section-tag">// FAQ</span>
        <h2>Questions Before You Buy</h2>

        <div className="faq-item">
          <div className="faq-q">Do I need design experience?</div>
          <p className="faq-a">
            No. The AI generates the designs. You steer direction, pick the best concepts, refine details, and manage
            client communication. Chapter 2 walks you through every tool step by step.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-q">Is $500 in 7 days guaranteed?</div>
          <p className="faq-a">
            No — and anyone who guarantees income is lying to you. It&apos;s an ambitious target that requires 6–8
            focused hours daily and real market execution. Chapter 1 shows the full conversion math so you can judge the
            target for yourself.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-q">Why Freelancer.com instead of Upwork or Fiverr?</div>
          <p className="faq-a">
            Contests. You submit actual work, not just a proposal. Clients judge your designs, not your review count.
            That&apos;s the fastest path from zero to paid — especially for design work. The Plus plan free trial gives
            you 100 bids at zero cost.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-q">Do I need paid AI tools?</div>
          <p className="faq-a">
            No. The book includes a $0/month starter stack: Canva Free, Gamma Free, Ideogram Free, Vectorizer.ai,
            ChatGPT, and Framer AI Free. All four services are covered on free tiers.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-q">What format is the book?</div>
          <p className="faq-a">Instant PDF download — 47 pages. Works on any device. You can start reading and implementing tonight.</p>
        </div>
        <div className="faq-item">
          <div className="faq-q">What if it doesn&apos;t work for me?</div>
          <p className="faq-a">30-day money-back guarantee. Email me, get a full refund. Zero risk on your end.</p>
        </div>
      </section>

      <div className="final-cta" id="buy">
        <span className="section-tag">// Decision time</span>
        <h2>
          Two Options.
          <br />
          One Leads Somewhere.
        </h2>
        <p style={{ maxWidth: "550px", margin: "0 auto 1.5rem", position: "relative", zIndex: 1 }}>
          Close this tab and keep watching other people figure out AI freelancing. Or spend $5.99, download the system,
          and start executing tonight. Your first $500 is 7 days of focused work away.
        </p>

        <div className="cta-stack">
          <div className="price-block">
            <span className="price-old">$19.99</span>
            <span className="price-new">$5.99</span>
            <span className="price-tag">70% OFF</span>
          </div>
          <BuyLink className="cta-primary" id="buy-cta-v2" style={{ fontSize: "1.25rem", padding: "1.2rem 3rem" }}>
            ⚡ DOWNLOAD THE BLUEPRINT NOW
          </BuyLink>
          <div className="hero-proof" style={{ marginTop: "0.5rem" }}>
            <span>📄 Instant PDF</span>
            <span>·</span>
            <span>🔒 30-day refund</span>
            <span>·</span>
            <span>🚀 47 pages of execution</span>
          </div>
        </div>
      </div>

      <footer className="f2-footer">
        <p>© 2026 Amr Abu-Talleb. All rights reserved.</p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <a href="mailto:hello@amrabutalleb.com">Contact</a>
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
