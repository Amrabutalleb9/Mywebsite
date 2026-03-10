"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import FadeIn from "./fade-in"
import type { ProjectHighlight } from "@/lib/projects"

export default function HighlightLayout({
  project,
  prev,
  next,
}: {
  project: ProjectHighlight
  prev: ProjectHighlight | null
  next: ProjectHighlight | null
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
      <div className="mx-auto max-w-[1000px] px-6">

        {/* Back link */}
        <FadeIn>
          <Link
            href="/#work"
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
        </FadeIn>

        {/* Title , smaller than case studies, different label */}
        <FadeIn>
          <p className="mb-4 text-xs font-medium tracking-[0.15em] text-muted-foreground/50 uppercase">Project Highlight</p>
        </FadeIn>
        <FadeIn as="h1" delay={0.05} className="mb-3 max-w-[20ch] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-foreground">
          {project.title}
        </FadeIn>
        <FadeIn delay={0.1} className="mb-10 max-w-[50ch]">
          <p className="font-serif text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Hero image */}
      <FadeIn delay={0.15} className="mx-auto mb-14 max-w-[1200px] px-6">
        {project.featureImage ? (
          <div
            className="project-img-wrap overflow-hidden rounded-xl"
            onClick={() => setLightbox(project.featureImage!)}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title} image full size`}
            onKeyDown={(e) => { if (e.key === "Enter") setLightbox(project.featureImage!) }}
          >
            <Image
              src={project.featureImage}
              alt={project.featureImageAlt || `${project.title} feature image`}
              width={1200}
              height={514}
              className="project-img w-full object-cover"
              priority
            />
          </div>
        ) : (
          <div className="flex aspect-[21/9] w-full items-center justify-center rounded-xl bg-primary">
            <span className="font-serif text-lg text-primary-foreground/15">{project.title}</span>
          </div>
        )}
      </FadeIn>

      {/* Meta row , compact */}
      <FadeIn className="mx-auto mb-16 max-w-[1000px] px-6">
        <div className="flex flex-wrap gap-x-10 gap-y-4 border-b border-border pb-6">
          {[
            { label: "Client", value: project.client },
            { label: "My Role", value: project.role },
            { label: "Scope", value: project.scope },
            { label: "Industry", value: project.industry },
            { label: "Year", value: project.year },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground/40 uppercase">{item.label}</span>
              <span className="text-sm leading-snug text-muted-foreground whitespace-pre-line">{item.value}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Overview , single column, no sidebar */}
      <div className="mx-auto mb-16 max-w-[1000px] px-6">
        <FadeIn>
          <div className="flex max-w-[65ch] flex-col gap-5">
            {project.description.split("\n\n").map((p) => (
              <p key={p.slice(0, 30)} className="leading-[1.8] text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* 2-column image grid */}
      <FadeIn className="mx-auto mb-16 max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.keyVisuals && project.keyVisuals.length > 0 ? (
            project.keyVisuals.map((visual, i) => (
              <div
                key={i}
                className="project-img-wrap overflow-hidden rounded-xl"
                onClick={() => setLightbox(visual.src)}
                role="button"
                tabIndex={0}
                aria-label={`View image ${i + 1} full size`}
                onKeyDown={(e) => { if (e.key === "Enter") setLightbox(visual.src) }}
              >
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  width={600}
                  height={450}
                  className="project-img aspect-[4/3] w-full object-cover"
                />
              </div>
            ))
          ) : (
            <>
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-primary">
                <span className="text-sm text-primary-foreground/15">Key Visual 1</span>
              </div>
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-primary">
                <span className="text-sm text-primary-foreground/15">Key Visual 2</span>
              </div>
            </>
          )}
        </div>
      </FadeIn>

      {/* Key result + testimonial + buy link */}
      {(project.keyResult || project.testimonial || project.buyLink) && (
        <div className="mx-auto mb-16 max-w-[1000px] px-6">
          <div className="flex flex-col gap-6">
            {project.keyResult && (
              <FadeIn>
                <div className="rounded-lg border border-border bg-surface px-6 py-5">
                  <p className="mb-1 text-[10px] font-semibold tracking-[0.12em] text-muted-foreground/40 uppercase">Result</p>
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    {project.keyResult}
                  </p>
                </div>
              </FadeIn>
            )}
            {project.testimonial && (
              <FadeIn>
                <blockquote className="rounded-lg border border-border bg-card px-6 py-5 sm:px-8">
                  <p className="mb-3 font-serif text-base leading-relaxed text-foreground italic">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{project.testimonial.author}</span>
                    {", "}{project.testimonial.role}
                  </footer>
                </blockquote>
              </FadeIn>
            )}
            {project.buyLink && (
              <FadeIn>
                <a
                  href={project.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-accent bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90"
                >
                  Check the book from here
                  <ArrowRight size={14} />
                </a>
              </FadeIn>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex items-stretch justify-between gap-4 border-t border-border pt-8">
          {prev ? (
            <Link href={`/highlights/${prev.slug}`} className="group flex flex-col gap-1 text-left">
              <span className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                <ArrowLeft size={14} /> Previous
              </span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/highlights/${next.slug}`} className="group flex flex-col items-end gap-1 text-right">
              <span className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                Next <ArrowRight size={14} />
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
