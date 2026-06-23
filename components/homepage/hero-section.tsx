"use client"

import dynamic from "next/dynamic"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import CalendlyButton from "@/components/calendly-button"

const InfiniteGrid = dynamic(
  () => import("@/components/ui/infinite-grid").then((m) => ({ default: m.InfiniteGrid })),
)

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const heroLines = ["Brand strategist.", "Creative director.", "Obsessed with results."]
const heroServices = ["Brand Strategy", "Digital Experience Design", "Product Design"]

const lineVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay: 0.12 + i * 0.1, ease: EASE_OUT },
  }),
}

export default function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <>
      <InfiniteGrid className="flex min-h-[calc(85vh-4rem)] flex-col items-center justify-center bg-background px-8 pb-20 pt-[120px] lg:px-16 lg:pb-24 lg:pt-[140px]">
        <div className="w-full text-center">
          <h1 className="mx-auto font-serif text-[length:var(--text-display)] leading-[var(--leading-display)] font-normal tracking-[var(--tracking-display)] text-foreground">
            {heroLines.map((line, i) =>
              reduced ? (
                <span key={line} className="block">
                  {line}
                </span>
              ) : (
                <motion.span
                  key={line}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="block"
                >
                  {line}
                </motion.span>
              ),
            )}
          </h1>
        </div>

        <motion.div
          className="mt-10 flex flex-col items-center text-center"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE_OUT }}
        >
          <p className="mx-auto max-w-[65ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
            13&nbsp;years of&nbsp;creative direction, brand strategy, and digital design.
            <br />
            Work delivered across MENA, Europe, the&nbsp;US, and&nbsp;beyond.
            <br />
            Every project built to&nbsp;move numbers, not just turn&nbsp;heads.
          </p>
          <p className="mx-auto mt-4 max-w-[65ch] text-base tracking-wide text-accent lg:text-lg">
            Currently taking on select creative direction engagements.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Trusted by brands across 8&nbsp;markets &middot; Teams of&nbsp;up&nbsp;to&nbsp;25
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <CalendlyButton />
            <a
              href="#work"
              className="cta-btn cta-btn-outline inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase"
            >
              See the&nbsp;Work
              <ArrowUpRight size={14} className="cta-arrow" />
            </a>
          </div>
        </motion.div>
      </InfiniteGrid>

      <motion.div
        className="hidden w-full items-center justify-between border-t border-border bg-background px-8 py-5 sm:flex lg:px-16"
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7, ease: EASE_OUT }}
      >
        <div className="flex flex-wrap gap-8 lg:gap-14">
          {heroServices.map((service, i) => (
            <motion.span
              key={service}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.75 + i * 0.06, ease: EASE_OUT }}
              className="text-[length:var(--text-micro)] tracking-[var(--tracking-label)] text-muted-foreground uppercase lg:text-[length:var(--text-caption)]"
            >
              {service}
            </motion.span>
          ))}
        </div>
        <span className="hidden text-[length:var(--text-micro)] tracking-wide text-muted-foreground sm:block lg:text-[length:var(--text-caption)]">
          Creative Director
        </span>
      </motion.div>
    </>
  )
}
