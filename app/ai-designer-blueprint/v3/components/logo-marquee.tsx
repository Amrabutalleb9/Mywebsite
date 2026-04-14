"use client"

import { usePrefersReducedMotion } from "../use-prefers-reduced-motion"

type Props = {
  brands: readonly string[]
}

export function LogoMarquee({ brands }: Props) {
  const reduce = usePrefersReducedMotion()
  const doubled = [...brands, ...brands]

  return (
    <div className="abp3-marquee" aria-label="Platforms and tools referenced in the blueprint">
      <div className={`abp3-marquee__track abp3-marquee__track--rl${reduce ? " abp3-marquee__track--static" : ""}`}>
        {doubled.map((b, i) => (
          <span key={`${b}-${i}`} className="abp3-marquee__pill">
            {b}
          </span>
        ))}
      </div>
      <div className={`abp3-marquee__track abp3-marquee__track--lr${reduce ? " abp3-marquee__track--static" : ""}`}>
        {[...doubled].reverse().map((b, i) => (
          <span key={`${b}-rev-${i}`} className="abp3-marquee__pill abp3-marquee__pill--alt">
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
