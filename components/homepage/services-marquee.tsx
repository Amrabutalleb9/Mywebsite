"use client"

import { useMarquee } from "@/hooks/use-marquee"

const services = [
  "Brand identity", "Product & UX design", "Prototyping & build", "Campaigns & funnels",
  "Art direction", "Arabic & Latin typography", "AI-assisted workflows", "Team leadership",
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
      <span className="sr-only">{services.join(", ")}</span>
      {/* The fade sits on a wrapper around the text, so the band itself stays solid to the edges. */}
      <div className="marquee-fade" aria-hidden="true">
        <div ref={trackRef} className="flex w-max gap-6">
          {[...services, ...services, ...services].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-6 whitespace-nowrap font-serif text-[length:var(--text-section)] font-normal text-primary-foreground"
            >
              {name}
              <span className="text-accent">{"\u00B7"}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
