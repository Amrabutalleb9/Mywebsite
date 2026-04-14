"use client"

import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { V7, type V7StoryBlock } from "./copy/v7"
import { BuyLink } from "../v2/components/buy-link"
import { PriceBlock } from "../v2/components/price-block"
import { ScrollReveal } from "./scroll-reveal"
import { DEFAULT_HERO_VIDEO, PEN_PARITY } from "./pen-parity-copy"
import { FunnelHeroVideo } from "./components/funnel-hero-video"
import { LimitedInventoryBlock } from "./components/limited-inventory-block"
import { LogoMarquee } from "./components/logo-marquee"
import { OldNewSlider } from "./components/old-new-slider"
import { PitchVideoSection } from "./components/pitch-video-section"

const BOOK = "/ai-designer-blueprint/book-mockup.svg"
const HERO_POSTER = "/ai-designer-blueprint/hero-poster.svg"
const HERO_VIDEO_SRC =
  (typeof process.env.NEXT_PUBLIC_AI_BLUEPRINT_HERO_VIDEO_URL === "string" &&
    process.env.NEXT_PUBLIC_AI_BLUEPRINT_HERO_VIDEO_URL.trim()) ||
  DEFAULT_HERO_VIDEO
const PORTRAIT = "/images/amr-portrait.webp"

const ease = [0.16, 1, 0.3, 1] as const

/** Inline **bold** and *italic* for static funnel copy only. */
function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      parts.push(<Fragment key={`t-${k++}`}>{text.slice(last, m.index)}</Fragment>)
    }
    if (m[1] !== undefined) {
      parts.push(
        <strong key={`s-${k++}`} className="abp3-strong">
          {m[1]}
        </strong>,
      )
    } else if (m[2] !== undefined) {
      parts.push(<em key={`e-${k++}`}>{m[2]}</em>)
    }
    last = re.lastIndex
  }
  if (last < text.length) {
    parts.push(<Fragment key={`t-${k++}`}>{text.slice(last)}</Fragment>)
  }
  return <>{parts}</>
}

function HeroMotion({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className="abp3-hero__motion abp3-hero__body">{children}</div>
  }
  return (
    <motion.div
      className="abp3-hero__motion abp3-hero__body"
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
  const midTitle = V7.midCta.title
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
        <FunnelHeroVideo src={HERO_VIDEO_SRC} poster={HERO_POSTER} />
        <div className="abp3-hero__bg" aria-hidden />
        <div className="abp3-hero__scrim" aria-hidden />
        <div className="abp3-hero__grid" aria-hidden />

        <div className="abp3-hero__inner">
          <div className="abp3-hero__bar">
            <p className="abp3-hero__bar-left">{V7.hero.barLeft}</p>
            <p className="abp3-hero__bar-right">
              Need help?{" "}
              <a href={V7.hero.supportMailto} className="abp3-hero__bar-link">
                <u>{V7.hero.supportLinkLabel}</u>
              </a>
              .
            </p>
          </div>

          <HeroMotion>
            <HeroItem className="abp3-hero__copy">
              <p className="abp3-hero__rally">
                <span className="abp3-hero__rally-line">{V7.hero.rallyLine}</span>{" "}
                <span className="abp3-hero__rally-accent">{V7.hero.rallyAccent}</span>
              </p>
              <p className="abp3-hero__stinger">{V7.hero.stinger}</p>
              <p className="abp3-kicker">{V7.hero.eyebrow}</p>
              <h1 className="abp3-hero__title">
                <span className="abp3-hero__title-line">{V7.hero.line1}</span>
                <span className="abp3-hero__title-accent abp3-hero__title-accent--hl">
                  <span className="abp3-hl-mark">{V7.hero.line2}</span>
                </span>
              </h1>
              <p className="abp3-lede">
                <RichText text={V7.hero.lede} />
              </p>
              <div className="abp3-hero__cta-shell abp3-changing-gradient-light">
                <div className="abp3-hero__cta-shell-inner">
                  <div className="abp3-hero__cta-row">
                    <PriceBlock meta={V7.meta} />
                    <BuyLink className="abp3-btn abp3-btn--primary" id="hero-cta-v3">
                      {V7.offer.cta}
                    </BuyLink>
                  </div>
                </div>
              </div>
              <p className="abp3-proof">
                {V7.hero.proof.map((t, i) => (
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
                  className="abp3-hero__book-img abp3-glow-img"
                  priority
                />
              </div>
            </HeroItem>
          </HeroMotion>
        </div>
      </header>

      <main>
        <ScrollReveal className="abp3-band abp3-band--dark abp3-band--pen-corner-tl">
          <section className="abp3-section abp3-section--tight" aria-labelledby="reality-heading-v3">
            <p className="abp3-kicker">{V7.reality.label}</p>
            <h2 id="reality-heading-v3" className="abp3-h2">
              {V7.reality.title}
            </h2>
            <div className="abp3-prose">
              {V7.reality.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--mint-grad">
          <section className="abp3-section" aria-labelledby="story-heading-v3">
            <p className="abp3-kicker">{V7.story.label}</p>
            <h2 id="story-heading-v3" className="abp3-h2 abp3-h2--xl">
              {V7.story.title}
            </h2>
            <div className="abp3-pen-lime-panel">
              <div className="abp3-letter">
                <div className="abp3-story">
                  {V7.story.blocks.map((block: V7StoryBlock, i: number) => (
                    <div key={block.title ?? `block-${i}`} className="abp3-story__block">
                      {block.title ? <h3 className="abp3-story__subh">{block.title}</h3> : null}
                      {block.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)}>
                          <RichText text={p} />
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--dark">
          <section className="abp3-section" aria-labelledby="honesty-heading-v3">
            <p className="abp3-kicker">{V7.honesty.label}</p>
            <h2 id="honesty-heading-v3" className="abp3-h2">
              {V7.honesty.title}
            </h2>
            <div className="abp3-prose">
              {V7.honesty.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div className="abp3-cta-row">
              <BuyLink className="abp3-btn abp3-btn--primary">{V7.offer.ctaShort}</BuyLink>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--dark abp3-band--pen-video-curve">
          <section className="abp3-section" aria-labelledby="pitch-heading-v3">
            <PitchVideoSection
              headingId="pitch-heading-v3"
              src={HERO_VIDEO_SRC}
              poster={HERO_POSTER}
              kicker={PEN_PARITY.video.kicker}
              headline={PEN_PARITY.video.headline}
              headlineAccent={PEN_PARITY.video.headlineAccent}
              intro={PEN_PARITY.video.intro}
            />
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--lime">
          <section className="abp3-section" aria-labelledby="marquee-heading-v3">
            <p className="abp3-kicker">{PEN_PARITY.marquee.kicker}</p>
            <h2 className="abp3-h2" id="marquee-heading-v3">
              {PEN_PARITY.marquee.title}
            </h2>
            <LogoMarquee brands={PEN_PARITY.marquee.brands} />
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--lime">
          <section className="abp3-section abp3-section--split" aria-labelledby="inside-heading-v3">
            <div className="abp3-section__main">
              <p className="abp3-kicker">{V7.inside.label}</p>
              <h2 id="inside-heading-v3" className="abp3-h2">
                {V7.inside.title}
              </h2>
              <ul className="abp3-inside-list">
                {V7.inside.items.map((item) => (
                  <li key={item.title} className="abp3-inside-item">
                    <h3 className="abp3-inside-item__title">{item.title}</h3>
                    <p className="abp3-inside-item__body">
                      <RichText text={item.body} />
                    </p>
                  </li>
                ))}
              </ul>
              <p className="abp3-inside-closing">
                <RichText text={V7.inside.closing} />
              </p>
              <BuyLink className="abp3-btn abp3-btn--secondary">{V7.offer.ctaShort}</BuyLink>
            </div>
            <div className="abp3-section__art" aria-hidden>
              <div className="abp3-book-card">
                <Image src={BOOK} alt="" width={360} height={468} className="abp3-book-card__img" loading="lazy" />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--cream">
          <section className="abp3-section abp3-section--tight" aria-labelledby="old-new-heading-v3">
            <p className="abp3-kicker">Compare</p>
            <h2 id="old-new-heading-v3" className="abp3-h2">
              Old way vs new way
            </h2>
            <OldNewSlider
              wordmark={PEN_PARITY.slider.wordmark}
              wordmarkAccent={PEN_PARITY.slider.wordmarkAccent}
              oldLabel={PEN_PARITY.slider.oldLabel}
              newLabel={PEN_PARITY.slider.newLabel}
              oldLead={PEN_PARITY.slider.oldLead}
              oldSteps={PEN_PARITY.slider.oldSteps}
              newLead={PEN_PARITY.slider.newLead}
              newSteps={PEN_PARITY.slider.newSteps}
            />
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--dark">
          <section className="abp3-section abp3-section--inventory-pen" aria-labelledby="inventory-heading-v3">
            <LimitedInventoryBlock
              titleId="inventory-heading-v3"
              bookSrc={BOOK}
              bookAlt="The AI Designer Blueprint — cover"
              kicker={PEN_PARITY.inventory.kicker}
              title={PEN_PARITY.inventory.title}
              lines={PEN_PARITY.inventory.lines}
              floatTopAlt={PEN_PARITY.inventory.floatTopAlt}
              floatBottomAlt={PEN_PARITY.inventory.floatBottomAlt}
              cta={<BuyLink className="abp3-btn abp3-btn--primary">{V7.offer.ctaShort}</BuyLink>}
            />
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--dark">
          <section className="abp3-testimonials" aria-labelledby="testimonials-heading-v3">
            <p className="abp3-kicker">{V7.testimonials.label}</p>
            <h2 id="testimonials-heading-v3" className="abp3-h2 abp3-highlight-testimonials">
              {V7.testimonials.title}
            </h2>
            <div className="abp3-testimonials__grid">
              {V7.testimonials.items.map((t) => (
                <figure key={t.name + t.quote.slice(0, 20)} className="abp3-testimonials__card">
                  <div className="abp3-testimonials__ph" role="img" aria-label={t.imageAlt} />
                  <figcaption>
                    <p className="abp3-testimonials__who">
                      <strong>{t.name}</strong>
                      <span className="abp3-testimonials__role"> — {t.role}</span>
                    </p>
                    <blockquote className="abp3-testimonials__quote">“{t.quote}”</blockquote>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="abp3-testimonials__note">{V7.testimonials.note}</p>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--cream">
          <section className="abp3-section" aria-labelledby="after-heading-v3">
            <p className="abp3-kicker">{V7.after1500.label}</p>
            <h2 id="after-heading-v3" className="abp3-h2">
              {V7.after1500.title}
            </h2>
            <p className="abp3-pull">{V7.after1500.lead}</p>
            <div className="abp3-prose">
              {V7.after1500.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="abp3-mid abp3-mid--pen-transition">
          <ScrollReveal className="abp3-mid__inner">
            <div className="abp3-mid__panel">
              <h2 className="abp3-mid__title">{midHead}</h2>
              <p className="abp3-mid__body">{V7.midCta.body}</p>
              <BuyLink className="abp3-btn abp3-btn--primary abp3-btn--wide">{V7.offer.ctaShort}</BuyLink>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="abp3-band abp3-band--lime">
          <section className="abp3-section" aria-labelledby="who-heading-v3">
            <h2 id="who-heading-v3" className="abp3-h2">
              {V7.audience.label}
            </h2>
            <div className="abp3-trio">
              {V7.audience.items.map((item, i) => (
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

        <ScrollReveal className="abp3-band abp3-band--lime abp3-band--pen-pill-waist">
          <section className="abp3-guarantee" aria-labelledby="guarantee-heading-v3">
            <p className="abp3-kicker">{V7.guarantee.label}</p>
            <h2 id="guarantee-heading-v3" className="abp3-h2 abp3-h2--serif">
              {V7.guarantee.title}
            </h2>
            <div className="abp3-prose abp3-prose--narrow">
              {V7.guarantee.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--cream">
          <section className="abp3-author" aria-labelledby="author-heading-v3">
            <div className="abp3-author__portrait">
              <Image
                src={PORTRAIT}
                alt={V7.author.name}
                width={120}
                height={120}
                className="abp3-author__img"
                loading="lazy"
              />
            </div>
            <div>
              <p className="abp3-kicker">{V7.author.label}</p>
              <h2 id="author-heading-v3" className="abp3-h2">
                {V7.author.name}
              </h2>
              <p className="abp3-author__role">{V7.author.role}</p>
              <div className="abp3-prose">
                {V7.author.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp3-band abp3-band--dark abp3-band--pen-faq-shape">
          <section className="abp3-section" aria-labelledby="faq-heading-v3">
            <p className="abp3-kicker">FAQ</p>
            <h2 id="faq-heading-v3" className="abp3-h2">
              Questions
            </h2>
            <div className="abp3-faq">
              {V7.faq.map((item) => (
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
            <p className="abp3-kicker">{V7.final.label}</p>
            <h2 id="final-heading-v3" className="abp3-h2 abp3-h2--massive">
              {V7.final.title}
            </h2>
            <div className="abp3-finale__opts">
              {V7.final.options.map((o) => (
                <p
                  key={o.text.slice(0, 32)}
                  className={o.tone === "accent" ? "abp3-finale__line abp3-finale__line--accent" : "abp3-finale__line"}
                >
                  {o.text}
                </p>
              ))}
            </div>
            <div className="abp3-prose abp3-prose--center">
              {V7.final.closing.map((p) => (
                <p key={p.slice(0, 32)}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div className="abp3-finale__cta-shell abp3-changing-gradient-light">
              <div className="abp3-finale__cta-shell-inner">
                <PriceBlock className="abp-price--large" meta={V7.meta} />
                <BuyLink className="abp3-btn abp3-btn--primary abp3-btn--hero" id="buy-cta-v3">
                  {V7.offer.ctaFinal}
                </BuyLink>
              </div>
            </div>
            <p className="abp3-proof abp3-finale__proof">
              {V7.final.proof.map((t, i) => (
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
          {V7.footer.line}{" "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
          {" · "}
          <a href="mailto:hello@amrabutalleb.com">Contact</a>
        </p>
        <p className="abp3-footer__disc">{V7.footer.disclaimer}</p>
        <p className="abp3-footer__meta">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by
          Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </footer>
    </>
  )
}
