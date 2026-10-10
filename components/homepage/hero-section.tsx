"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { ArrowDown, ArrowUpRight } from "lucide-react"

const InfiniteGrid = dynamic(
  () => import("@/components/ui/infinite-grid").then((m) => ({ default: m.InfiniteGrid })),
)

const heroLines = ["I\u00A0lead the team, build the\u00A0system,", "and make sure it\u00A0ships."]

const stats = [
  { n: "13", label: "years leading creative\u00A0teams" },
  { n: "25", label: "people in my largest\u00A0team" },
  { n: "8", label: "markets on five\u00A0continents" },
]

export default function HeroSection() {

  return (
    <>
      <InfiniteGrid className="flex min-h-[calc(85vh-4rem)] flex-col items-center justify-center bg-background px-8 pb-10 pt-[120px] lg:px-16 lg:pb-12 lg:pt-[140px]">
        <div className="w-full text-center">
          <p
            className="hero-line mb-6 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase lg:mb-8"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Creative Director
          </p>
          <h1 className="mx-auto max-w-[18ch] font-serif text-[length:var(--text-hero)] leading-[1.02] font-normal tracking-[var(--tracking-display)] text-balance text-foreground lg:max-w-none">
            {heroLines.map((line, i) => (
              <span
                key={line}
                className="hero-line block"
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                {line}
              </span>
            ))}
          </h1>
        </div>

        <div
          className="hero-line mt-10 flex flex-col items-center text-center"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <dl className="grid w-full max-w-3xl grid-cols-3 divide-x divide-border">
            {stats.map((st) => (
              <div key={st.n} className="flex flex-col items-center gap-1 px-3 sm:px-6">
                <dt className="sr-only">{st.label}</dt>
                <dd className="font-serif text-[length:var(--text-sub)] leading-none text-foreground [font-variant-numeric:lining-nums]">{st.n}</dd>
                <dd className="max-w-[16ch] text-xs leading-snug text-muted-foreground sm:text-sm">{st.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mx-auto mt-8 max-w-[60ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
            From brief to&nbsp;a&nbsp;live staging build in&nbsp;days, not&nbsp;sprints.
          </p>
          <p className="mx-auto mt-5 max-w-[65ch] text-sm font-medium tracking-wide text-foreground lg:text-base">
            Open to&nbsp;Creative Director roles in&nbsp;Europe, on‑site or&nbsp;remote.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#work"
              className="cta-btn cta-btn-filled inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase"
            >
              See the&nbsp;Work
              <ArrowUpRight size={14} className="cta-arrow" />
            </a>
            <a
              href="/Amr_AbuTalleb_CV_Creative_Director.pdf"
              download
              className="cta-btn cta-btn-outline inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase"
            >
              Download&nbsp;CV
              <ArrowDown size={14} className="cta-arrow" />
            </a>
          </div>
          <p className="mt-14 text-xs tracking-wide text-muted-foreground lg:mt-16 lg:text-sm">
            {"Trusted by\u00A0brands in\u00A0eight markets"}
          </p>
        </div>
      </InfiniteGrid>

    </>
  )
}
