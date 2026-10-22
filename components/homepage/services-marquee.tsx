"use client"

import { useMarquee } from "@/hooks/use-marquee"

const services = [
  "Creative Direction", "Art Direction", "Brand Strategy & Identity", "Arabic & Latin Typography",
  "Integrated Campaigns", "Product & UX Design", "Prototyping", "Team Leadership",
]

/* What I do, as a dark band straight after the hero (same treatment as the old client band). */
export default function ServicesMarquee() {
  const { trackRef, pause, resume } = useMarquee(70)
  return (
    <div
      className="relative z-10 overflow-hidden bg-primary py-6 lg:py-8"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-primary to-transparent sm:w-20 lg:w-28" aria-hidden={true} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-r from-transparent to-primary sm:w-20 lg:w-28" aria-hidden={true} />
      <span className="sr-only">{services.join(", ")}</span>
      <div ref={trackRef} style={{ display: "flex", gap: "1.25rem", width: "max-content", willChange: "transform" }} aria-hidden="true">
        {[...services, ...services, ...services].map((name, i) => (
          <span
            key={`${name}-${i}`}
            style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0, whiteSpace: "nowrap" }}
            className="font-serif text-[length:var(--text-section)] font-normal text-primary-foreground"
          >
            {name}
            <span className="text-accent">{"\u00B7"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
