"use client"

import Image from "next/image"

type Brand =
  | { label: string; slug: string }
  | { label: string; textOnly: true }

/**
 * Corporate strip aligned with the Penpreneur reference
 * ([scottscheper.com/penpreneur](https://www.scottscheper.com/penpreneur)): Time Warner, Citibank, SAP, HP,
 * American Airlines, Northwestern Mutual, BP, Kaiser, IBM, Walmart, AT&T. Icons via Simple Icons where available.
 */
const BRANDS: Brand[] = [
  { label: "Time Warner", slug: "warnerbros" },
  { label: "Citibank", slug: "citibank" },
  { label: "SAP", slug: "sap" },
  { label: "HP", slug: "hp" },
  { label: "American Airlines", slug: "americanairlines" },
  { label: "Northwestern Mutual", textOnly: true },
  { label: "BP", slug: "bp" },
  { label: "Kaiser Permanente", textOnly: true },
  { label: "IBM", slug: "ibm" },
  { label: "Walmart", slug: "walmart" },
  { label: "AT&T", slug: "atandt" },
]

function LogoCell({ label, slug }: { label: string; slug: string }) {
  const src = `https://cdn.simpleicons.org/${slug}/6b7280`
  return (
    <div className="logo-marquee-item" title={label}>
      <Image src={src} alt="" width={96} height={32} className="logo-marquee-img" unoptimized />
      <span className="logo-marquee-sr">{label}</span>
    </div>
  )
}

function LogoText({ label }: { label: string }) {
  return (
    <div className="logo-marquee-item logo-marquee-item--text" title={label}>
      <span className="logo-marquee-word">{label}</span>
    </div>
  )
}

export function LogoMarquee({ headline }: { headline: string }) {
  const row = (
    <>
      {BRANDS.map((b) =>
        "textOnly" in b && b.textOnly ? (
          <LogoText key={b.label} label={b.label} />
        ) : (
          <LogoCell key={(b as { label: string; slug: string }).slug} {...(b as { label: string; slug: string })} />
        ),
      )}
    </>
  )

  return (
    <section className="logo-marquee-section f2-section" aria-labelledby="logo-marquee-heading">
      <h2 id="logo-marquee-heading" className="logo-marquee-head">
        {headline}
      </h2>
      <div className="logo-marquee-outer">
        <div className="logo-marquee-track">
          {row}
          {row}
        </div>
      </div>
    </section>
  )
}
