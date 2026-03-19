"use client"

import { useMarquee } from "@/hooks/use-marquee"

const clientNames = [
  "The Line Real Estate", "Overpowered Agency", "Steven Hodel", "Dipa Art School", "Split Fitness",
  "Alfy Marble", "Alienor Skincare", "Agfin", "Taptools", "ADRAW",
  "Freelancer.com", "Like a Nerd", "Edge Holdings", "Gwelly Law Firm", "Ezz Law Firm",
]

export default function ClientTicker() {
  const { trackRef, pause, resume } = useMarquee(50)
  return (
    <div
      className="overflow-hidden border-y border-border py-6"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "3rem", width: "max-content", willChange: "transform" }}
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
