"use client"

import { useEffect, useRef } from "react"

import { usePrefersReducedMotion } from "../use-prefers-reduced-motion"

type Props = {
  src: string
  poster?: string
}

export function FunnelHeroVideo({ src, poster }: Props) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return
    el.playbackRate = 1
    const p = el.play()
    if (p && typeof p.catch === "function") {
      p.catch(() => {})
    }
  }, [src, reduce])

  if (reduce) {
    return null
  }

  return (
    <video
      ref={ref}
      className="abp3-hero__video"
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
