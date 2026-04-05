"use client"

import { useReducedMotion } from "motion/react"

/** Dark, subtle loop — override with NEXT_PUBLIC_BLUEPRINT_HERO_VIDEO (mp4 URL). */
const DEFAULT_HERO_MP4 =
  "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"

export function HeroVideoBackground() {
  const reduce = useReducedMotion()
  const src = process.env.NEXT_PUBLIC_BLUEPRINT_HERO_VIDEO ?? DEFAULT_HERO_MP4

  if (reduce) {
    return <div className="hero-video-static" aria-hidden />
  }

  return (
    <div className="hero-video-wrap" aria-hidden>
      <video
        className="hero-video-el"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/ai-designer-blueprint/hero-poster.svg"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
