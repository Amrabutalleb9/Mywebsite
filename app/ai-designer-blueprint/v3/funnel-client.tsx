"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { V5, type V5StoryBlock } from "../v2/copy/v5"
import { BuyLink } from "../v2/components/buy-link"
import { PriceBlock } from "../v2/components/price-block"
import { ScrollReveal } from "./scroll-reveal"

const BOOK = "/ai-designer-blueprint/book-mockup.svg"
const PORTRAIT = "/images/amr-portrait.webp"

const ease = [0.16, 1, 0.3, 1] as const

function HeroMotion({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className="abp3-hero__motion">{children}</div>
  }
  return (
    <motion.div
      className="abp3-hero__motion"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

function HeroItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function FunnelClientV3() {
  const midTitle = V5.midCta.title
  const midQ = midTitle.indexOf("?")
  const midHead =
    midQ >= 0 ? (
      <>
        {midTitle.slice(0, midQ + 1)}
        <em className="abp3-mid__em">{midTitle.slice(midQ + 1).trim()}</em>
      </>
    ) : (
      midTitle
    )

  return (
    <>
      <header className="abp3-hero">
        <div className="abp3-hero__bg" aria-hidden />
        <div className="abp3-hero__grid" aria-hidden />

        <div className="abp3-hero__inner">
          <HeroMotion>
            <HeroItem className="abp3-hero__copy">
              <p className="abp3-kicker">{V5.hero.eyebrow}</p>
              <h1 className="abp3-hero__title">
                <span className="abp3-hero__title-line">{V5.hero.line1}</span>
                <span className="abp3-hero__title-accent">{V5.hero.line2}</span>
              </h1>
              <p className="abp3-lede">{V5.hero.lede}</p>
              <div className="abp3-hero__cta-row">
                <PriceBlock />
                <BuyLink className="abp3-btn abp3-btn--primary" id="hero-cta-v3">
                  {V5.offer.cta}
                </BuyLink>
              </div>
              <p className="abp3-proof">
                {V5.hero.proof.map((t, i) => (
                  <span key={t}>
                    {i > 0 && <span className="abp3-proof__dot" aria-hidden />}
                    {t}
                  </span>
                ))}
              </p>
            </HeroItem>
            <HeroItem className="abp3-hero__visual">
              <div className="abp3-hero__book">
                <Image
                  src={BOOK}
                  alt="The AI Designer Blueprint — cover"
                  width={420}
                  height={546}
                  className="abp3-hero__book-img"
                  priority
                />
              </div>
            </HeroItem>
          </HeroMotion>
        </div>
      </header>

      <main>
        <ScrollReveal className="abp3-band abp3-band--a">
          <section className="abp3-section abp3-section--tight" aria-labelledby="reality-heading-v3">
            <p className="abp3-kicker">{V5.reality.label}</p>
            <h2 id="reality-heading-v3" className="abp3-h2">
              {V5.reality.title}
            </h2>
            <div className="abp3-prose">
              {V5.reality.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--b">
          <section className="abp3-section" aria-labelledby="story-heading-v3">
            <p className="abp3-kicker">{V5.story.label}</p>
            <h2 id="story-heading-v3" className="abp3-h2 abp3-h2--xl">
              {V5.story.title}
            </h2>
            <div className="abp3-story">
              {V5.story.blocks.map((block: V5StoryBlock, i: number) => (
                <div key={block.title ?? `block-${i}`} className="abp3-story__block">
                  {block.title ? <h3 className="abp3-story__subh">{block.title}</h3> : null}
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--a">
          <section className="abp3-section" aria-labelledby="honesty-heading-v3">
            <p className="abp3-kicker">{V5.honesty.label}</p>
            <h2 id="honesty-heading-v3" className="abp3-h2">
              {V5.honesty.title}
            </h2>
            <div className="abp3-prose">
              {V5.honesty.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="abp3-cta-row">
              <BuyLink className="abp3-btn abp3-btn--primary">{V5.offer.ctaShort}</BuyLink>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--b">
          <section className="abp3-section abp3-section--split" aria-labelledby="inside-heading-v3">
            <div className="abp3-section__main">
              <p className="abp3-kicker">{V5.inside.label}</p>
              <h2 id="inside-heading-v3" className="abp3-h2">
                {V5.inside.title}
              </h2>
              <p className="abp3-lead">{V5.inside.intro}</p>
              <ul className="abp3-bullets">
                {V5.inside.bullets.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
              <BuyLink className="abp3-btn abp3-btn--secondary">{V5.offer.ctaShort}</BuyLink>
            </div>
            <div className="abp3-section__art" aria-hidden>
              <div className="abp3-book-card">
                <Image src={BOOK} alt="" width={360} height={468} className="abp3-book-card__img" loading="lazy" />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--a">
          <section className="abp3-section" aria-labelledby="after-heading-v3">
            <p className="abp3-kicker">{V5.after500.label}</p>
            <h2 id="after-heading-v3" className="abp3-h2">
              {V5.after500.title}
            </h2>
            <p className="abp3-pull">{V5.after500.lead}</p>
            <div className="abp3-prose">
              {V5.after500.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="abp3-mid">
          <ScrollReveal className="abp3-mid__inner">
            <h2 className="abp3-mid__title">{midHead}</h2>
            <p className="abp3-mid__body">{V5.midCta.body}</p>
            <BuyLink className="abp3-btn abp3-btn--primary abp3-btn--wide">{V5.offer.ctaShort}</BuyLink>
          </ScrollReveal>
        </div>

        <ScrollReveal className="abp3-band abp3-band--b">
          <section className="abp3-section" aria-labelledby="who-heading-v3">
            <h2 id="who-heading-v3" className="abp3-h2">
              {V5.audience.label}
            </h2>
            <div className="abp3-trio">
              {V5.audience.items.map((item, i) => (
                <article key={item.title} className="abp3-trio__card">
                  <span className="abp3-trio__idx" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="abp3-trio__title">{item.title}</h3>
                  <p className="abp3-trio__body">{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--accent">
          <section className="abp3-guarantee" aria-labelledby="guarantee-heading-v3">
            <p className="abp3-kicker">{V5.guarantee.label}</p>
            <h2 id="guarantee-heading-v3" className="abp3-h2 abp3-h2--serif">
              {V5.guarantee.title}
            </h2>
            <div className="abp3-prose abp3-prose--narrow">
              {V5.guarantee.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--a">
          <section className="abp3-author" aria-labelledby="author-heading-v3">
            <div className="abp3-author__portrait">
              <Image
                src={PORTRAIT}
                alt={V5.author.name}
                width={120}
                height={120}
                className="abp3-author__img"
                loading="lazy"
              />
            </div>
            <div>
              <p className="abp3-kicker">{V5.author.label}</p>
              <h2 id="author-heading-v3" className="abp3-h2">
                {V5.author.name}
              </h2>
              <p className="abp3-author__role">{V5.author.role}</p>
              <div className="abp3-prose">
                {V5.author.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--b">
          <section className="abp3-section" aria-labelledby="faq-heading-v3">
            <p className="abp3-kicker">FAQ</p>
            <h2 id="faq-heading-v3" className="abp3-h2">
              Questions
            </h2>
            <div className="abp3-faq">
              {V5.faq.map((item) => (
                <details key={item.q} className="abp3-faq__item">
                  <summary className="abp3-faq__q">{item.q}</summary>
                  <p className="abp3-faq__a">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--finale" id="buy">
          <section className="abp3-finale" aria-labelledby="final-heading-v3">
            <p className="abp3-kicker">{V5.final.label}</p>
            <h2 id="final-heading-v3" className="abp3-h2 abp3-h2--massive">
              {V5.final.title}
            </h2>
            <div className="abp3-finale__opts">
              {V5.final.options.map((o) => (
                <p
                  key={o.text.slice(0, 32)}
                  className={o.tone === "accent" ? "abp3-finale__line abp3-finale__line--accent" : "abp3-finale__line"}
                >
                  {o.text}
                </p>
              ))}
            </div>
            <div className="abp3-prose abp3-prose--center">
              {V5.final.closing.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <PriceBlock className="abp-price--large" />
            <BuyLink className="abp3-btn abp3-btn--primary abp3-btn--hero" id="buy-cta-v3">
              {V5.offer.ctaFinal}
            </BuyLink>
            <p className="abp3-proof abp3-finale__proof">
              {V5.final.proof.map((t, i) => (
                <span key={t}>
                  {i > 0 && <span className="abp3-proof__dot" aria-hidden />}
                  {t}
                </span>
              ))}
            </p>
          </section>
        </ScrollReveal>
      </main>

      <footer className="abp3-footer">
        <p className="abp3-footer__main">
          {V5.footer.line}{" "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
          {" · "}
          <a href="mailto:hello@amrabutalleb.com">Contact</a>
        </p>
        <p className="abp3-footer__disc">{V5.footer.disclaimer}</p>
        <p className="abp3-footer__meta">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by
          Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </footer>
    </>
  )
}
