"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { ArrowDown, ArrowUpRight } from "lucide-react"

const InfiniteGrid = dynamic(
  () => import("@/components/ui/infinite-grid").then((m) => ({ default: m.InfiniteGrid })),
)

const heroLines = ["Creative Director.", "I\u00A0lead the team, build the\u00A0system,", "and make sure it\u00A0ships."]

export default function HeroSection() {

  return (
    <>
      <InfiniteGrid className="flex min-h-[calc(85vh-4rem)] flex-col items-center justify-center bg-background px-8 pb-20 pt-[120px] lg:px-16 lg:pb-24 lg:pt-[140px]">
        <div className="w-full text-center">
          <h1 className="mx-auto font-serif text-[length:var(--text-display)] leading-[var(--leading-display)] font-normal tracking-[var(--tracking-display)] text-foreground">
            {heroLines.map((line, i) => (
              <span
                key={line}
                className="hero-line block"
                style={{ "--i": i } as React.CSSProperties}
              >
                {line}
              </span>
            ))}
          </h1>
        </div>

        <div
          className="hero-line mt-10 flex flex-col items-center text-center"
          style={{ "--i": 3.3 } as React.CSSProperties}
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base text-muted-foreground sm:gap-x-10 lg:gap-x-14 lg:text-lg">
            <li>13&nbsp;years</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
            <li>Teams of&nbsp;up&nbsp;to&nbsp;25</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
            <li>8&nbsp;markets</li>
          </ul>
          <p className="mx-auto mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
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
        </div>
      </InfiniteGrid>

    </>
  )
}
