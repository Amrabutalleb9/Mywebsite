"use client"

import { useMarquee } from "@/hooks/use-marquee"

const marqueeItems = [
  "Brand Identity",
  "Creative Direction",
  "UI/UX Design",
  "Art Direction",
  "Typography Systems",
  "Campaign Design",
]

export default function MarqueeBanner() {
  const { trackRef, pause, resume } = useMarquee(80)
  return (
    <div
      className="relative z-10 overflow-hidden bg-primary py-6 lg:py-8"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <span className="sr-only">{marqueeItems.join(", ")}</span>
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "1rem", width: "max-content", willChange: "transform" }}
        aria-hidden="true"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0, whiteSpace: "nowrap" }}
            className="font-serif text-[length:var(--text-page)] font-normal text-primary-foreground"
          >
            {item}
            <span className="text-accent">{"\u00B7"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
