"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useReducedMotion } from "motion/react"
import FadeIn from "./fade-in"
import { Lightbox } from "./ui/lightbox"
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
  const reducedMotion = useReducedMotion()

  const renderFigureRow = (row: NonNullable<CaseStudy["storyFigures"]>[number], key: string) => (
    <FadeIn as="div" key={row.images[0].src}>
      <figure className="m-0">
        <div className={`grid grid-cols-1 gap-4 ${row.images.length === 2 ? "md:grid-cols-2" : row.images.length >= 3 ? "md:grid-cols-3" : ""}`}>
          {row.images.map((img, i) => (
            <div
              key={img.src}
              className="project-img-wrap overflow-hidden rounded-2xl bg-primary"
              onClick={() => setLightbox(img.src)}
              role="button"
              tabIndex={0}
              aria-label={`View figure ${key}${row.images.length > 1 ? `, image ${i + 1}` : ""} full size`}
              onKeyDown={(e) => { if (e.key === "Enter") setLightbox(img.src) }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1400}
                height={788}
                sizes={row.images.length > 1 ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
                className="project-img h-auto w-full object-cover"
                style={{ aspectRatio: img.ratio ?? "16 / 9" }}
              />
            </div>
          ))}
        </div>
        {row.caption && (
          <figcaption className="mt-3 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">{row.caption}</figcaption>
        )}
      </figure>
    </FadeIn>
  )

  return (
    <>
    {/* Lightbox overlay */}
    {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}

    <main>
    <article className="pb-[clamp(80px,10vw,140px)] pt-32 lg:pt-40">

      {/* Back link */}
      <div className="wrap">
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
      <div className="wrap">
        <FadeIn>
          <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Case Study</p>
        </FadeIn>
        <FadeIn as="h1" delay={0.05} className="mb-4 max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
          {project.title}
        </FadeIn>
        <FadeIn delay={0.1} className="mb-8 max-w-[50ch]">
          <p className="font-serif text-2xl leading-snug tracking-tight text-muted-foreground">
            {project.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Hero image */}
      <FadeIn delay={0.15} className="wrap-wide">
        {project.featureVideo ? (
          <div className="overflow-hidden rounded-2xl">
            <video
              className="aspect-video w-full object-cover"
              poster={project.featureVideo.poster}
              aria-label={project.featureVideo.alt}
              autoPlay={!reducedMotion}
              controls={!!reducedMotion}
              muted
              loop
              playsInline
              preload="auto"
            >
              {project.featureVideo.webm && <source src={project.featureVideo.webm} type="video/webm" />}
              <source src={project.featureVideo.mp4} type="video/mp4" />
            </video>
          </div>
        ) : project.featureImage ? (
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

      {/* Project facts: one horizontal band under the hero */}
      <FadeIn as="div" className="wrap-wide mt-12 lg:mt-16">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 md:grid-cols-3 lg:flex lg:justify-center lg:gap-x-20">
          {[
            { label: "Client", value: project.client },
            { label: "My role", value: project.role },
            { label: "Timeline", value: project.timeline },
            { label: "Scope", value: project.scope },
            { label: "Industry", value: project.industry },
            { label: "Markets", value: project.markets },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <dt className="text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-label)] text-accent uppercase">{item.label}</dt>
              <dd className="max-w-[30ch] text-sm leading-snug text-muted-foreground whitespace-pre-line">{item.value}</dd>
            </div>
          ))}
        </dl>
      </FadeIn>

      {/* Overview: the intro, on the same grid as the chapters */}
      <section className="wrap mt-20 mb-28 lg:mt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Overview</h2>
          </FadeIn>
          <FadeIn as="div" className="flex max-w-[60ch] flex-col gap-6">
            {project.intro && project.intro.length > 0 ? (
              project.intro.map((para, i) => (
                <p key={i} className={i === 0 ? "text-xl leading-relaxed text-foreground" : "text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground"}>{para}</p>
              ))
            ) : (
              <p className="text-xl leading-relaxed text-foreground">{project.impactStatement}</p>
            )}
            {project.intro && project.intro.length > 0 && !(project.contributions && project.contributions.length > 0) && (
              <div className="mt-4 border-l-2 border-accent pl-5">
                <p className="mb-2 text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-label)] text-accent uppercase">Key impact</p>
                <p className="text-base font-medium leading-relaxed text-foreground">{project.impactStatement}</p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* What I led: the author's own contribution, before the story */}
      {project.contributions && project.contributions.length > 0 && (
        <section className="wrap mb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <FadeIn>
              <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">What I led</h2>
            </FadeIn>
            <FadeIn as="div">
              <ul className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                {project.contributions.map((item) => (
                  <li key={item.label} className="border-t border-border pt-5">
                    <h3 className="mb-2 font-serif text-2xl font-normal leading-snug tracking-tight text-foreground">{item.label}</h3>
                    <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{item.text}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      )}

      {project.chapters && project.chapters.length > 0 ? (
        /* Chapters: each part of the story followed by its own figures */
        <>
        {project.chapters.map((chapter, c) => (
          <section key={chapter.label} className="mb-28">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
                <FadeIn>
                  <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{chapter.label}</h2>
                </FadeIn>
                <div className="flex flex-col gap-6">
                  {chapter.summary && (
                    <FadeIn>
                      <p className="max-w-[60ch] text-lg font-medium leading-snug text-foreground">{chapter.summary}</p>
                    </FadeIn>
                  )}
                  {chapter.lead && (
                    <FadeIn>
                      <p className="max-w-[30ch] font-serif text-[length:var(--text-sub)] leading-[var(--leading-heading)] tracking-tight text-foreground">{chapter.lead}</p>
                    </FadeIn>
                  )}
                  {chapter.paragraphs.map((para, i) => (
                    <FadeIn key={i}>
                      <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">{para}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
            {chapter.figures && chapter.figures.length > 0 && (
              <div className="wrap-wide mt-16 flex flex-col gap-6">
                {chapter.figures.map((row, r) => renderFigureRow(row, `${c + 1}.${r + 1}`))}
              </div>
            )}
          </section>
        ))}
        {project.showcaseVideo && (
          <FadeIn className="wrap-wide mb-28">
            <div className="overflow-hidden rounded-2xl bg-primary">
              <video
                className="aspect-video w-full object-cover"
                poster={project.showcaseVideo.poster}
                aria-label={project.showcaseVideo.alt}
                autoPlay={!reducedMotion}
                controls={!!reducedMotion}
                muted
                loop
                playsInline
                preload="metadata"
              >
                {project.showcaseVideo.webm && <source src={project.showcaseVideo.webm} type="video/webm" />}
                <source src={project.showcaseVideo.mp4} type="video/mp4" />
              </video>
            </div>
          </FadeIn>
        )}
        </>
      ) : (
      <>
      {/* The Challenge */}
      <div className="wrap mb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">The Brief</h2>
          </FadeIn>
          <div className="flex flex-col gap-10">
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">Where They Were</h3>
              <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
                {project.businessContext}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">What Was Broken</h3>
              <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
                {project.clientProblem}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">What We Had to Work With</h3>
              <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
                {project.constraints}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Image break */}
      {project.processImages && project.processImages.length > 0 && (
      <FadeIn className="wrap-wide mb-28">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.processImages && project.processImages.length > 0
            ? project.processImages.slice(0, 2).map((img, i) => (
                <div
                  key={img.src}
                  className="project-img-wrap overflow-hidden rounded-xl"
                  onClick={() => setLightbox(img.src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View process image ${i + 1} full size`}
                  onKeyDown={(e) => { if (e.key === "Enter") setLightbox(img.src) }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={700}
                    height={525}
                    className="project-img aspect-[4/3] w-full object-cover"
                  />
                </div>
              ))
            : null}
        </div>
      </FadeIn>
      )}

      {/* Strategic Approach */}
      <div className="wrap mb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">The Turn</h2>
          </FadeIn>
          <div className="flex flex-col gap-10">
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">What I Saw</h3>
              <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
                {project.insight}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">The Idea</h3>
              <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
                {project.creativeStrategy}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">The Calls I Made</h3>
              <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
                {project.keyDecisions}
              </p>
            </FadeIn>
            <FadeIn>
              <h3 className="mb-3 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">How I Led It</h3>
              <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
                {project.leadershipRole}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Full-width showcase */}
      {project.showcaseVideo && (
      <FadeIn className="wrap-wide mb-28">
        {project.showcaseVideo ? (
          <div className="overflow-hidden rounded-2xl bg-primary">
            <video
              className="aspect-video w-full object-cover"
              poster={project.showcaseVideo.poster}
              aria-label={project.showcaseVideo.alt}
              autoPlay={!reducedMotion}
              controls={!!reducedMotion}
              muted
              loop
              playsInline
              preload="metadata"
            >
              {project.showcaseVideo.webm && <source src={project.showcaseVideo.webm} type="video/webm" />}
              <source src={project.showcaseVideo.mp4} type="video/mp4" />
            </video>
          </div>
        ) : null}
      </FadeIn>
      )}

      {/* Story figures: rows of diagrams and work shown between the strategy and the process */}
      {project.storyFigures && project.storyFigures.length > 0 && (
        <div className="wrap-wide mb-28 flex flex-col gap-14">
          {project.storyFigures.map((row, r) => renderFigureRow(row, String(r + 1)))}
        </div>
      )}

      {/* Process & Evolution */}
      <div className="wrap mb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">The Work</h2>
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
                    <p className="max-w-[60ch] text-sm leading-[var(--leading-longform)] text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      </>
      )}

      {/* Image gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
      <FadeIn className="wrap-wide mb-28">
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
        ) : null}
      </FadeIn>
      )}

      {/* Results & Impact */}
      <div className="wrap mb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{project.resultsTitle ?? "What Changed"}</h2>
          </FadeIn>
          <div className="flex flex-col gap-6">
            <FadeIn>
              <ul className="flex flex-col gap-4">
                {project.results.map((result) => (
                  <li key={result.slice(0, 30)} className="flex gap-3 text-muted-foreground">
                    <span className="mt-[calc(0.875em-3px)] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="leading-[var(--leading-longform)]">{(() => {
                      const i = result.indexOf(": ")
                      return i > 0 && i < 48 ? (<><strong className="font-semibold text-foreground">{result.slice(0, i)}.</strong>{" "}{result.slice(i + 2)}</>) : result
                    })()}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {project.testimonial && (
              <FadeIn className="mt-6">
                <blockquote className="border-l-2 border-accent py-2 pl-6 sm:pl-8">
                  <p className="mb-4 font-serif text-2xl leading-snug tracking-tight text-foreground italic">
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
                  href={project.buyLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  {project.buyLink.label}
                  <ArrowUpRight size={14} />
                </a>
              </FadeIn>
            )}
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div className="wrap mb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <FadeIn>
            <h2 className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Looking Back</h2>
          </FadeIn>
          <FadeIn>
            <p className="max-w-[60ch] leading-[var(--leading-longform)] text-muted-foreground">
              {project.reflection}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Credits */}
      <FadeIn className="wrap mb-24">
        <div className="border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground/50">{project.credits}</p>
        </div>
      </FadeIn>

      {/* Prev / Next, before the CTA */}
      <div className="wrap">
        <div className="flex items-stretch justify-between gap-4 border-b border-border pb-10">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-1 text-left">
              <span className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                <ArrowLeft size={14} /> Previous Case Study
              </span>
              <span className="font-serif text-2xl leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group flex flex-col items-end gap-1 text-right">
              <span className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                Next Case Study <ArrowRight size={14} />
              </span>
              <span className="font-serif text-2xl leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">{next.title}</span>
            </Link>
          ) : <span />}
        </div>
      </div>
      {/* CTA */}
      <div className="mx-auto mt-20 max-w-[1000px] pt-12 text-center">
        <p className="mb-4 text-lg text-muted-foreground">{"Hiring a\u00A0Creative Director?"}</p>
        <a
          href="/contact"
          className="btn btn-primary"
        >
          {"Let\u2019s Talk"}
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          {"Looking for a\u00A0creative partner? "}
          <a href="/working-together" className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">See how I&nbsp;work with&nbsp;teams</a>
        </p>
      </div>

    </article>
    </main>
    </>
  )
}
