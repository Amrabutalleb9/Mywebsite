"use client"

import { useEffect } from "react"

/* Speed: looping videos are marked data-autoplay and ship with preload="none" and no autoPlay
   attribute, so nothing downloads until a video is near the screen. This plays each one as it comes
   into view and pauses it when it leaves. With reduced motion turned on, nothing plays on its own
   (the case-study videos show their controls instead).
   Below-the-fold videos carry their poster as data-poster: a poster attribute downloads at once,
   whatever preload says, so it is only set once the video is within about a screen of view. */
export default function VideoAutoplay() {
  useEffect(() => {
    const posters = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const v = e.target as HTMLVideoElement
          if (v.dataset.poster) v.poster = v.dataset.poster
          posters.unobserve(v)
        }
      },
      { rootMargin: "800px 0px" },
    )
    const seenPoster = new WeakSet<Element>()
    const scanPosters = () => {
      document.querySelectorAll("video[data-poster]").forEach((v) => {
        if (seenPoster.has(v)) return
        seenPoster.add(v)
        posters.observe(v)
      })
    }
    scanPosters()
    const pmo = new MutationObserver(scanPosters)
    pmo.observe(document.body, { childList: true, subtree: true })
    const stopPosters = () => {
      posters.disconnect()
      pmo.disconnect()
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || typeof IntersectionObserver === "undefined") return stopPosters

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target as HTMLVideoElement
          if (e.isIntersecting) {
            v.muted = true
            v.play().catch(() => {})
          } else if (!v.paused) {
            v.pause()
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    )

    const seen = new WeakSet<Element>()
    const scan = () => {
      document.querySelectorAll("video[data-autoplay]").forEach((v) => {
        if (seen.has(v)) return
        seen.add(v)
        io.observe(v)
      })
    }
    scan()
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
      stopPosters()
    }
  }, [])
  return null
}
