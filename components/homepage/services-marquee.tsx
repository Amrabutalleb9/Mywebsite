"use client"

import { useMarquee } from "@/hooks/use-marquee"

const services = [
  "Creative Direction", "Art Direction", "Brand Strategy & Identity", "Arabic & Latin Typography",
  "Integrated Campaigns", "Product & UX Design", "Prototyping", "Team Leadership",
]

/* White counterpart to the black client band: what I do, between About and Leadership. */
export default function ServicesMarquee() {
  const { trackRef, pause, resume } = useMarquee(55)
  return (
    <div
      className="relative mt-24 overflow-hidden border-y border-border bg-background py-6 lg:mt-32 lg:py-8"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20 lg:w-28" aria-hidden={true} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-r from-transparent to-background sm:w-20 lg:w-28" aria-hidden={true} />
      <span className="sr-only">{services.join(", ")}</span>
      <div ref={trackRef} style={{ display: "flex", gap: "1.25rem", width: "max-content", willChange: "transform" }} aria-hidden="true">
        {[...services, ...services, ...services].map((name, i) => (
          <span
            key={`${name}-${i}`}
            style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0, whiteSpace: "nowrap" }}
            className="font-serif text-[length:var(--text-section)] font-normal text-foreground"
          >
            {name}
            <span className="text-accent">{"\u00B7"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
