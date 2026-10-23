"use client"

import { useEffect } from "react"

/* Speed: looping videos are marked data-autoplay and ship with preload="none" and no autoPlay
   attribute, so nothing downloads until a video is near the screen. This plays each one as it comes
   into view and pauses it when it leaves. With reduced motion turned on, nothing plays on its own
   (the case-study videos show their controls instead). */
export default function VideoAutoplay() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || typeof IntersectionObserver === "undefined") return

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
    }
  }, [])
  return null
}
