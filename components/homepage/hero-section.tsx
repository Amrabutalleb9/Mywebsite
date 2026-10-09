"use client"

import dynamic from "next/dynamic"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const InfiniteGrid = dynamic(
  () => import("@/components/ui/infinite-grid").then((m) => ({ default: m.InfiniteGrid })),
)

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const heroLines = ["Creative Director.", "I\u00A0lead the team, build the\u00A0system,", "and make sure it\u00A0ships."]

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
          <p className="mx-auto max-w-[60ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
            13&nbsp;years leading brand and product teams of&nbsp;up&nbsp;to&nbsp;25, across 8&nbsp;markets.
            <br />
            Creative direction that doesn&rsquo;t stop at&nbsp;Figma: from brief to&nbsp;a&nbsp;live staging build in&nbsp;days, not&nbsp;sprints.
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
              href="/Amr_AbuTalleb_Resume.pdf"
              download
              className="cta-btn cta-btn-outline inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase"
            >
              Download&nbsp;CV
              <ArrowDown size={14} className="cta-arrow" />
            </a>
          </div>
        </motion.div>
      </InfiniteGrid>

    </>
  )
}
