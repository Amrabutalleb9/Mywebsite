"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import FadeIn from "./fade-in"
import type { CaseStudy } from "@/lib/projects"

export default function CaseStudyLayout({
  project,
  prev,
  next,
}: {
  project: CaseStudy
  prev: CaseStudy | null
  next: CaseStudy | null
}) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
    {/* Lightbox overlay */}
    {lightbox && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        onClick={() => setLightbox(null)}
      >
        <button
          onClick={() => setLightbox(null)}
          className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <Image
          src={lightbox}
          alt="Enlarged project image"
          width={1400}
          height={900}
          className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}

    <main>
    <article className="pb-[clamp(80px,10vw,140px)] pt-28">

      {/* Back link */}
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeIn>
          <Link
            href="/#work"
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
        </FadeIn>
      </div>

      {/* Hero , label + title + subtitle */}
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeIn>
          <p className="mb-4 text-xs font-medium tracking-[0.15em] text-accent uppercase">Case Study</p>
        </FadeIn>
        <FadeIn as="h1" delay={0.05} className="mb-4 max-w-[20ch] text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
          {project.title}
        </FadeIn>
        <FadeIn delay={0.1} className="mb-8 max-w-[50ch]">
          <p className="font-serif text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Hero image */}
      <FadeIn delay={0.15} className="mx-auto mb-8 max-w-[1400px] px-6">
        {project.featureImage ? (
          <div
            className="project-img-wrap overflow-hidden rounded-2xl"
            onClick={() => setLightbox(project.featureImage!)}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title} image full size`}
            onKeyDown={(e) => { if (e.key === "Enter") setLightbox(project.featureImage!) }}
          >
            <Image
              src={project.featureImage}
              alt={project.featureImageAlt || `${project.title} project showcase`}
              width={1400}
              height={600}
              className="project-img w-full object-cover"
              priority
            />
          </div>
        ) : (
          <div className="flex aspect-[21/9] w-full items-center justify-center rounded-2xl bg-primary">
            <span className="font-serif text-lg text-primary-foreground/15">{project.title}</span>
          </div>
        )}
      </FadeIn>

      {/* Impact Statement , with label */}
      <FadeIn className="mx-auto mb-20 max-w-[1280px] px-6">
        <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">Key Impact</p>
        <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
          {project.impactStatement}
        </p>
      </FadeIn>

      {/* Project Snapshot */}
      <FadeIn className="mx-auto mb-28 max-w-[1280px] px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Client", value: project.client },
            { label: "My Role", value: project.role },
            { label: "Scope", value: project.scope },
            { label: "Timeline", value: project.timeline },
            { label: "Industry", value: project.industry },
            { label: "Markets", value: project.markets },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">{item.label}</span>
              <span className="text-sm leading-snug text-muted-foreground whitespace-pre-line">{item.value}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* The Challenge */}
      <div className="mx-auto mb-28 max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.15em] text-accent uppercase">The Challenge</p>
          </FadeIn>
          <div className="flex flex-col gap-10">
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.1em] text-foreground/50 uppercase">Business Context</h3>
              <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
                {project.businessContext}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.1em] text-foreground/50 uppercase">The Client&rsquo;s Problem</h3>
              <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
                {project.clientProblem}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.1em] text-foreground/50 uppercase">Constraints</h3>
              <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
                {project.constraints}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Image break */}
      <FadeIn className="mx-auto mb-28 max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-primary">
            <span className="text-sm text-primary-foreground/15">Process Detail</span>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-primary">
            <span className="text-sm text-primary-foreground/15">Process Detail</span>
          </div>
        </div>
      </FadeIn>

      {/* Strategic Approach */}
      <div className="mx-auto mb-28 max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.15em] text-accent uppercase">Strategic Approach</p>
          </FadeIn>
          <div className="flex flex-col gap-10">
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.1em] text-foreground/50 uppercase">The Key Insight</h3>
              <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
                {project.insight}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.1em] text-foreground/50 uppercase">Creative Strategy</h3>
              <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
                {project.creativeStrategy}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.1em] text-foreground/50 uppercase">Key Decisions & Why</h3>
              <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
                {project.keyDecisions}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.1em] text-foreground/50 uppercase">Leadership & Stakeholder Management</h3>
              <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
                {project.leadershipRole}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Full-width showcase */}
      <FadeIn className="mx-auto mb-28 max-w-[1400px] px-6">
        <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-primary">
          <span className="font-serif text-lg text-primary-foreground/15">Showcase</span>
        </div>
      </FadeIn>

      {/* Process & Evolution */}
      <div className="mx-auto mb-28 max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.15em] text-accent uppercase">Process & Evolution</p>
          </FadeIn>
          <div className="flex flex-col gap-8">
            {project.processPhases.map((phase, i) => (
              <FadeIn key={phase.title}>
                <div className="flex gap-5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-accent/30 text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{phase.title}</h3>
                    <p className="max-w-[55ch] text-sm leading-[1.7] text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <FadeIn className="mx-auto mb-28 max-w-[1400px] px-6">
        {project.galleryImages && project.galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                className="project-img-wrap overflow-hidden rounded-xl"
                onClick={() => setLightbox(img.src)}
                role="button"
                tabIndex={0}
                aria-label={`View image ${i + 1} full size`}
                onKeyDown={(e) => { if (e.key === "Enter") setLightbox(img.src) }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="project-img aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex aspect-[4/3] items-center justify-center rounded-xl bg-primary">
                <span className="text-sm text-primary-foreground/15">Detail {n}</span>
              </div>
            ))}
          </div>
        )}
      </FadeIn>

      {/* Results & Impact */}
      <div className="mx-auto mb-28 max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.15em] text-accent uppercase">Results & Impact</p>
          </FadeIn>
          <div className="flex flex-col gap-6">
            <FadeIn>
              <ul className="flex flex-col gap-4">
                {project.results.map((result) => (
                  <li key={result.slice(0, 30)} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="leading-[1.7]">{result}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {project.testimonial && (
              <FadeIn className="mt-6">
                <blockquote className="rounded-xl border border-accent/15 bg-accent/5 px-6 py-6 sm:px-8">
                  <p className="mb-4 font-serif text-base leading-relaxed text-foreground italic">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{project.testimonial.author}</span>
                    {", "}{project.testimonial.role}
                  </footer>
                </blockquote>
              </FadeIn>
            )}
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div className="mx-auto mb-28 max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.15em] text-accent uppercase">Reflection</p>
          </FadeIn>
          <FadeIn>
            <p className="max-w-[60ch] leading-[1.75] text-muted-foreground">
              {project.reflection}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Credits */}
      <FadeIn className="mx-auto mb-24 max-w-[1280px] px-6">
        <div className="border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground/50">{project.credits}</p>
        </div>
      </FadeIn>

      {/* Prev / Next , no line */}
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-stretch justify-between gap-4 pt-8">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-1 text-left">
              <span className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                <ArrowLeft size={14} /> Previous Case Study
              </span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group flex flex-col items-end gap-1 text-right">
              <span className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                Next Case Study <ArrowRight size={14} />
              </span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">{next.title}</span>
            </Link>
          ) : <span />}
        </div>
      </div>
    </article>
    </main>
    </>
  )
}
