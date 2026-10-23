"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { ArrowDown, ArrowUpRight } from "lucide-react"

const InfiniteGrid = dynamic(
  () => import("@/components/ui/infinite-grid").then((m) => ({ default: m.InfiniteGrid })),
)
import CountUp from "@/components/count-up"

const heroLines = ["I\u00A0lead the team, build the\u00A0system,", "and make sure it\u00A0ships."]

const stats = [
  { n: "13", label: "years in design and creative\u00A0work" },
  { n: "25", label: "people in my largest\u00A0team" },
  { n: "8", label: "markets on five\u00A0continents" },
]

export default function HeroSection() {

  return (
    <>
      <InfiniteGrid className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center bg-background px-8 pb-[clamp(1.25rem,3svh,3rem)] pt-[clamp(6rem,14svh,8.75rem)] lg:px-16">
        <div className="w-full text-center">
          <h2 className="mx-auto max-w-[18ch] font-serif text-[length:var(--text-hero)] leading-[1.02] font-normal tracking-[var(--tracking-display)] text-balance text-foreground lg:max-w-none">
            {/* About now opens the page with the h1, so the hero headline is an h2. */}
            <span
              className="hero-line mb-[clamp(1rem,3svh,2rem)] block font-sans text-xs leading-normal font-medium tracking-[var(--tracking-label)] text-accent uppercase"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              {"Amr Abu-Talleb \u00B7 Creative Director"}
              <span className="sr-only">{": "}</span>
            </span>
            {heroLines.map((line, i) => (
              <span
                key={line}
                className="hero-line block"
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                {line}
                {i < heroLines.length - 1 ? " " : null}
              </span>
            ))}
          </h2>
        </div>

        <div
          className="hero-line mt-[clamp(1.25rem,4svh,2.5rem)] flex flex-col items-center text-center"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <dl className="grid w-full max-w-3xl grid-cols-3 divide-x divide-border">
            {stats.map((st) => (
              <div key={st.n} className="flex flex-col items-center gap-1 px-3 sm:px-6">
                <dt className="sr-only">{st.label}</dt>
                <dd className="font-serif text-[length:var(--text-sub)] leading-none text-foreground [font-variant-numeric:lining-nums]"><CountUp value={st.n} /></dd>
                <dd className="max-w-[16ch] text-xs leading-snug text-muted-foreground sm:text-sm">{st.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mx-auto mt-[clamp(1rem,3svh,2rem)] max-w-[60ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
            From brand positioning to&nbsp;digital products, I&nbsp;set the&nbsp;direction and stay close to&nbsp;the&nbsp;work.
          </p>
          <div className="mt-[clamp(1.25rem,3svh,2rem)] flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#work"
              className="btn btn-primary"
            >
              See the&nbsp;Work
              <ArrowUpRight size={14} className="cta-arrow" />
            </a>
            <a
              href="/Amr_AbuTalleb_CV_Creative_Director.pdf"
              download
              className="btn btn-secondary"
            >
              Download&nbsp;CV
              <ArrowDown size={14} className="cta-arrow" />
            </a>
          </div>
          <p className="mt-[clamp(1.25rem,5svh,4rem)] text-xs tracking-wide text-muted-foreground lg:text-sm">
            {"What I\u00A0bring to\u00A0a\u00A0team"}
          </p>
        </div>
      </InfiniteGrid>

    </>
  )
}
