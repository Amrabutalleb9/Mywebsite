import React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { caseStudies, projectHighlights } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and project highlights spanning brand identity, UI/UX, creative direction, and art direction across eight international markets.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects · Amr Abu-Talleb",
    description: "Case studies and project highlights spanning brand identity, UI/UX, creative direction, and art direction across eight international markets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects · Amr Abu-Talleb",
    description: "Case studies and project highlights spanning brand identity, UI/UX, creative direction, and art direction across eight international markets.",
  },
}

export default function ProjectsPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <h1 className="mb-4 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mb-20 max-w-lg text-muted-foreground">
        Case studies and selected project highlights across brand identity, creative direction, UI/UX design, and art direction.
      </p>

      {/* ── Case Studies , prominent section ── */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-accent" />
        <span className="text-xs font-medium tracking-[0.15em] text-accent uppercase">Case Studies</span>
      </div>
      <p className="mb-8 max-w-md text-sm text-muted-foreground">
        Deep dives into strategy, process, and results.
      </p>

      <div className="mb-20 flex flex-col">
        {caseStudies.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col gap-3 border-b border-border py-8 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex items-start gap-5 sm:items-center">
              <span className="font-serif text-2xl leading-none text-accent/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <span className="max-w-md text-sm text-muted-foreground">
                  {project.subtitle}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:flex-shrink-0">
              <span className="text-sm text-muted-foreground">{project.year}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors group-hover:text-accent">
                Read <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Project Highlights , secondary section ── */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-muted-foreground/30" />
        <span className="text-xs font-medium tracking-[0.15em] text-muted-foreground/50 uppercase">Project Highlights</span>
      </div>
      <p className="mb-8 max-w-md text-sm text-muted-foreground/60">
        Selected projects showing range.
      </p>

      <div className="flex flex-col">
        {projectHighlights.map((project) => (
          <Link
            key={project.slug}
            href={`/highlights/${project.slug}`}
            className="group flex items-center justify-between border-b border-border py-6 transition-colors hover:border-accent/40"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
              <h2 className="text-base font-medium text-foreground transition-colors group-hover:text-accent">{project.title}</h2>
              <span className="text-sm text-muted-foreground">{project.subtitle}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-muted-foreground sm:block">{project.year}</span>
              <ArrowUpRight size={14} className="text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
