"use client"

import dynamic from "next/dynamic"
import { ArrowUpRight } from "lucide-react"
import CalendlyButton from "@/components/calendly-button"

const InfiniteGrid = dynamic(
  () => import("@/components/ui/infinite-grid").then((m) => ({ default: m.InfiniteGrid })),
)

const heroServices = ["Brand Strategy", "Web Design", "Product Design"]

export default function HeroSection() {
  return (
    <>
      <InfiniteGrid className="flex h-[calc(80vh-4rem)] flex-col bg-background px-8 pt-[77px] lg:px-16 lg:pt-[102px]">
        <div className="flex flex-1 items-center justify-center">
          <div className="animate-hero-1 w-full text-center">
            <h1 className="mx-auto font-serif text-[length:var(--text-display)] leading-[var(--leading-display)] font-normal tracking-[var(--tracking-display)] text-foreground">
              Brand strategist.
              <br />
              Creative director.
              <br />
              Obsessed with&nbsp;results.
            </h1>
          </div>
        </div>

        <div className="animate-hero-2 mb-6 mt-10 flex flex-col items-center text-center">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            13&nbsp;years of&nbsp;creative direction, brand strategy, and digital design.
            <br />
            Work delivered across MENA, Europe, the&nbsp;US, and&nbsp;beyond.
            <br />
            Every project built to&nbsp;move numbers, not just turn&nbsp;heads.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base tracking-wide text-accent lg:text-lg">
            Available for creative direction engagements and&nbsp;consulting.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <CalendlyButton />
            <a
              href="#work"
              className="cta-btn inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase hover:bg-foreground hover:text-background"
            >
              See the&nbsp;Work
              <ArrowUpRight size={14} className="cta-arrow" />
            </a>
          </div>
        </div>
      </InfiniteGrid>

      <div className="mt-12 flex w-full items-center justify-between border-t border-border bg-background px-8 py-5 lg:mt-16 lg:px-16">
        <div className="flex flex-wrap gap-8 lg:gap-14">
          {heroServices.map((service) => (
            <span
              key={service}
              className="text-[length:var(--text-micro)] tracking-[var(--tracking-label)] text-muted-foreground uppercase lg:text-[length:var(--text-caption)]"
            >
              {service}
            </span>
          ))}
        </div>
        <span className="hidden text-[length:var(--text-micro)] tracking-wide text-muted-foreground sm:block lg:text-[length:var(--text-caption)]">
          Creative Director
        </span>
      </div>
    </>
  )
}
