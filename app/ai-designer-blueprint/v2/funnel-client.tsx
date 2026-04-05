"use client"

import Image from "next/image"
import Link from "next/link"

import { V5, type V5StoryBlock } from "./copy/v5"
import { BuyLink } from "./components/buy-link"
import { PriceBlock } from "./components/price-block"
import { ScrollReveal } from "./scroll-reveal"

const BOOK = "/ai-designer-blueprint/book-mockup.svg"
const PORTRAIT = "/images/amr-portrait.webp"

export default function FunnelClientV2() {
  return (
    <>
      <header className="abp-hero">
        <div className="abp-hero__mesh" aria-hidden />
        <div className="abp-hero__grain" aria-hidden />
        <div className="abp-hero__vignette" aria-hidden />

        <div className="abp-hero__inner">
          <div className="abp-hero__copy">
            <p className="abp-hero__eyebrow abp-anim" data-abp-delay="1">
              {V5.hero.eyebrow}
            </p>
            <h1 className="abp-hero__title abp-anim" data-abp-delay="2">
              <span className="abp-hero__title-line">{V5.hero.line1}</span>
              <span className="abp-hero__title-accent">{V5.hero.line2}</span>
            </h1>
            <p className="abp-hero__lede abp-anim" data-abp-delay="3">
              {V5.hero.lede}
            </p>
            <div className="abp-hero__cta-row abp-anim" data-abp-delay="4">
              <PriceBlock />
              <BuyLink className="abp-btn abp-btn--primary" id="hero-cta-v2">
                {V5.offer.cta}
              </BuyLink>
            </div>
            <p className="abp-hero__proof abp-anim" data-abp-delay="5">
              {V5.hero.proof.map((t, i) => (
                <span key={t}>
                  {i > 0 && <span className="abp-hero__proof-dot" aria-hidden />}
                  {t}
                </span>
              ))}
            </p>
          </div>

          <div className="abp-hero__visual abp-anim" data-abp-delay="4">
            <div className="abp-hero__book-frame">
              <Image
                src={BOOK}
                alt="The AI Designer Blueprint — cover"
                width={420}
                height={546}
                className="abp-hero__book-img"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <ScrollReveal className="abp-band">
          <section className="abp-section abp-section--tight" aria-labelledby="reality-heading">
            <p className="abp-kicker">{V5.reality.label}</p>
            <h2 id="reality-heading" className="abp-h2">
              {V5.reality.title}
            </h2>
            <div className="abp-prose">
              {V5.reality.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band">
          <section className="abp-section" aria-labelledby="story-heading">
            <p className="abp-kicker">{V5.story.label}</p>
            <h2 id="story-heading" className="abp-h2 abp-h2--xl">
              {V5.story.title}
            </h2>
            <div className="abp-story">
              {V5.story.blocks.map((block: V5StoryBlock, i: number) => (
                <div key={block.title ?? `block-${i}`} className="abp-story__block">
                  {block.title ? <h3 className="abp-story__subh">{block.title}</h3> : null}
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band">
          <section className="abp-section" aria-labelledby="honesty-heading">
            <p className="abp-kicker">{V5.honesty.label}</p>
            <h2 id="honesty-heading" className="abp-h2">
              {V5.honesty.title}
            </h2>
            <div className="abp-prose">
              {V5.honesty.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="abp-cta-row">
              <BuyLink className="abp-btn abp-btn--primary">{V5.offer.ctaShort}</BuyLink>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band">
          <section className="abp-section abp-section--split" aria-labelledby="inside-heading">
            <div>
              <p className="abp-kicker">{V5.inside.label}</p>
              <h2 id="inside-heading" className="abp-h2">
                {V5.inside.title}
              </h2>
              <p className="abp-lead">{V5.inside.intro}</p>
              <ul className="abp-bullets">
                {V5.inside.bullets.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
              <BuyLink className="abp-btn abp-btn--ghost">{V5.offer.ctaShort}</BuyLink>
            </div>
            <div className="abp-section__art" aria-hidden>
              <div className="abp-book-card">
                <Image src={BOOK} alt="" width={360} height={468} className="abp-book-card__img" loading="lazy" />
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band">
          <section className="abp-section" aria-labelledby="after-heading">
            <p className="abp-kicker">{V5.after500.label}</p>
            <h2 id="after-heading" className="abp-h2">
              {V5.after500.title}
            </h2>
            <p className="abp-pull">{V5.after500.lead}</p>
            <div className="abp-prose">
              {V5.after500.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="abp-mid">
          <ScrollReveal className="abp-mid__inner">
            <h2 className="abp-mid__title">
              Still scrolling? <em>That&apos;s the pattern.</em>
            </h2>
            <p className="abp-mid__body">{V5.midCta.body}</p>
            <BuyLink className="abp-btn abp-btn--primary abp-btn--wide">{V5.offer.ctaShort}</BuyLink>
          </ScrollReveal>
        </div>

        <ScrollReveal className="abp-band">
          <section className="abp-section" aria-labelledby="who-heading">
            <h2 id="who-heading" className="abp-h2">
              {V5.audience.label}
            </h2>
            <div className="abp-trio">
              {V5.audience.items.map((item, i) => (
                <article key={item.title} className="abp-trio__card">
                  <span className="abp-trio__idx">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="abp-trio__title">{item.title}</h3>
                  <p className="abp-trio__body">{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band">
          <section className="abp-guarantee" aria-labelledby="guarantee-heading">
            <p className="abp-kicker">{V5.guarantee.label}</p>
            <h2 id="guarantee-heading" className="abp-h2 abp-h2--serif">
              {V5.guarantee.title}
            </h2>
            <div className="abp-prose abp-prose--narrow">
              {V5.guarantee.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band">
          <section className="abp-author" aria-labelledby="author-heading">
            <div className="abp-author__portrait">
              <Image
                src={PORTRAIT}
                alt={V5.author.name}
                width={112}
                height={112}
                className="abp-author__img"
                loading="lazy"
              />
            </div>
            <div>
              <p className="abp-kicker">{V5.author.label}</p>
              <h2 id="author-heading" className="abp-h2">
                {V5.author.name}
              </h2>
              <p className="abp-author__role">{V5.author.role}</p>
              <div className="abp-prose">
                {V5.author.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band">
          <section className="abp-section" aria-labelledby="faq-heading">
            <p className="abp-kicker">FAQ</p>
            <h2 id="faq-heading" className="abp-h2">
              Questions
            </h2>
            <div className="abp-faq">
              {V5.faq.map((item) => (
                <details key={item.q} className="abp-faq__item">
                  <summary className="abp-faq__q">{item.q}</summary>
                  <p className="abp-faq__a">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="abp-band abp-band--finale" id="buy">
          <section className="abp-finale" aria-labelledby="final-heading">
            <p className="abp-kicker">{V5.final.label}</p>
            <h2 id="final-heading" className="abp-h2 abp-h2--massive">
              {V5.final.title}
            </h2>
            <div className="abp-finale__opts">
              {V5.final.options.map((o) => (
                <p
                  key={o.text.slice(0, 32)}
                  className={o.tone === "accent" ? "abp-finale__line abp-finale__line--accent" : "abp-finale__line"}
                >
                  {o.text}
                </p>
              ))}
            </div>
            <div className="abp-prose abp-prose--center">
              {V5.final.closing.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <PriceBlock className="abp-price--large" />
            <BuyLink className="abp-btn abp-btn--primary abp-btn--hero" id="buy-cta-v2">
              {V5.offer.ctaFinal}
            </BuyLink>
            <p className="abp-hero__proof abp-finale__proof">
              {V5.final.proof.map((t, i) => (
                <span key={t}>
                  {i > 0 && <span className="abp-hero__proof-dot" />}
                  {t}
                </span>
              ))}
            </p>
          </section>
        </ScrollReveal>
      </main>

      <footer className="abp-footer">
        <p className="abp-footer__main">
          {V5.footer.line}{" "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
          {" · "}
          <a href="mailto:hello@amrabutalleb.com">Contact</a>
        </p>
        <p className="abp-footer__disc">{V5.footer.disclaimer}</p>
        <p className="abp-footer__meta">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by
          Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </footer>
    </>
  )
}
