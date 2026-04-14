"use client"

import { useEffect, useRef } from "react"

import { usePrefersReducedMotion } from "../use-prefers-reduced-motion"

type Props = {
  src: string
  poster?: string
  kicker: string
  headline: string
  headlineAccent: string
  intro: string
  /** Optional `id` for the section heading (a11y). */
  headingId?: string
}

export function PitchVideoSection({
  src,
  poster,
  kicker,
  headline,
  headlineAccent,
  intro,
  headingId,
}: Props) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return
    el.playbackRate = 1.15
    const p = el.play()
    if (p && typeof p.catch === "function") p.catch(() => {})
  }, [src, reduce])

  return (
    <div className="abp3-pitch">
      <p className="abp3-kicker">{kicker}</p>
      <h2 id={headingId} className="abp3-h2 abp3-pitch__title">
        {headline}
        <span className="abp3-pitch__title-accent">{headlineAccent}</span>
      </h2>
      <p className="abp3-pitch__intro">{intro}</p>
      <div className="abp3-pitch__frame">
        {reduce ? (
          <div className="abp3-pitch__poster" role="img" aria-label="Video poster — motion reduced">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {poster ? <img src={poster} alt="" className="abp3-pitch__poster-img" /> : null}
          </div>
        ) : (
          <video ref={ref} className="abp3-pitch__video" controls playsInline muted loop poster={poster} preload="metadata">
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}
