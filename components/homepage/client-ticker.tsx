"use client"

import { useMarquee } from "@/hooks/use-marquee"

const clientNames = [
  "The Line Real Estate", "Overpowered Agency", "Steven Hodel", "Split Fitness",
  "Alfy Marble", "Alienor Skincare", "Agfin", "Taptools", "ADRAW",
  "Freelancer.com", "Like a Nerd", "Edge Holdings", "Gwelly Law Firm", "Ezz Law Firm",
]

export default function ClientTicker() {
  const { trackRef, pause, resume } = useMarquee(50)
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-background py-6"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20 lg:w-28"
        aria-hidden={true}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-r from-transparent to-background sm:w-20 lg:w-28"
        aria-hidden={true}
      />
      <span className="sr-only">{clientNames.join(", ")}</span>
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "3rem", width: "max-content", willChange: "transform" }}
        aria-hidden="true"
      >
        {[...clientNames, ...clientNames, ...clientNames].map((name, i) => (
          <span
            key={`${name}-${i}`}
            style={{ flexShrink: 0, whiteSpace: "nowrap" }}
            className="text-sm tracking-widest text-muted-foreground uppercase"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
