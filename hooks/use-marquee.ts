"use client"

import { useRef, useEffect, useCallback } from "react"

/**
 * A marquee track that scrolls left at `speed` px a second and loops at half its width.
 * The scroll is a Web Animations transform, so it runs on the compositor and costs the main thread
 * nothing between frames. Hovering eases it to a stop and back (the same 0.03-per-frame easing as
 * before); only that easing uses requestAnimationFrame, and only while it runs.
 * It pauses while off screen, and does not move at all under prefers-reduced-motion.
 */
export function useMarquee(speed: number) {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<Animation | null>(null)
  const rateRef = useRef(1)
  const targetRef = useRef(1)
  const rafRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track || typeof track.animate !== "function") return
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return

    let anim: Animation | null = null
    let visible = false
    let width = 0

    // (Re)build the loop for the current width, keeping the position (fonts can change the width).
    const build = () => {
      const half = track.scrollWidth / 2
      if (!half || half === width) return
      const progress = anim && anim.currentTime != null && width ? (Number(anim.currentTime) * speed) / 1000 / width : 0
      width = half
      anim?.cancel()
      anim = track.animate(
        [{ transform: "translateX(0)" }, { transform: `translateX(${-half}px)` }],
        { duration: (half / speed) * 1000, iterations: Infinity },
      )
      anim.currentTime = ((progress % 1) * half * 1000) / speed
      anim.playbackRate = rateRef.current
      if (!visible) anim.pause()
      animRef.current = anim
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (!anim) return
        if (visible) anim.play()
        else anim.pause()
      },
      { rootMargin: "100px" },
    )
    const ro = new ResizeObserver(build)
    build()
    ro.observe(track)
    if (track.parentElement) io.observe(track.parentElement)

    return () => {
      cancelAnimationFrame(rafRef.current)
      io.disconnect()
      ro.disconnect()
      anim?.cancel()
      animRef.current = null
    }
  }, [speed])

  const ease = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    const step = () => {
      const anim = animRef.current
      rateRef.current += (targetRef.current - rateRef.current) * 0.03
      if (Math.abs(targetRef.current - rateRef.current) < 0.002) rateRef.current = targetRef.current
      if (anim) anim.playbackRate = rateRef.current
      if (rateRef.current !== targetRef.current) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  const pause = useCallback(() => { targetRef.current = 0; ease() }, [ease])
  const resume = useCallback(() => { targetRef.current = 1; ease() }, [ease])

  return { trackRef, pause, resume }
}
