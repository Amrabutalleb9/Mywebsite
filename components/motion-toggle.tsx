"use client"

import { useSyncExternalStore } from "react"
import { Pause, Play } from "lucide-react"

/* "Pause motion": one switch for every looping animation on the site (marquees, card reels, the hero grid
   and autoplaying videos), as WCAG 2.2.2 asks for content that moves for more than five seconds.
   It sets data-motion="paused" on <html>, remembers the choice, and tells listeners via a
   "motionchange" event. The boot script in app/layout.tsx restores it before first paint. */
export function isMotionPaused() {
  return typeof document !== "undefined" && document.documentElement.dataset.motion === "paused"
}

function subscribe(onChange: () => void) {
  window.addEventListener("motionchange", onChange)
  return () => window.removeEventListener("motionchange", onChange)
}

export default function MotionToggle({ className = "" }: { className?: string }) {
  // Reads the live state from <html>, so it stays right whatever else changes it (and is "playing" on the server).
  const paused = useSyncExternalStore(subscribe, isMotionPaused, () => false)

  function toggle() {
    const next = !paused
    const root = document.documentElement
    if (next) root.dataset.motion = "paused"
    else delete root.dataset.motion
    try {
      localStorage.setItem("motion", next ? "paused" : "on")
    } catch {}
    window.dispatchEvent(new CustomEvent("motionchange", { detail: { paused: next } }))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={paused}
      className={`inline-flex min-h-11 items-center gap-2 transition-colors hover:text-primary-foreground ${className}`}
    >
      {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
      {paused ? "Play motion" : "Pause motion"}
    </button>
  )
}
