import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Download, ArrowRight, Linkedin } from "lucide-react"
import { capabilities } from "@/lib/shared-data"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"
import { tp } from "@/lib/typeset"

export const metadata: Metadata = pageMeta({
  title: "About Amr Abu-Talleb · Creative Director and design leader",
  description:
    "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. 50+ people hired. Open to Creative Director roles in Europe, remote or on-site.",
  path: "/about",
  type: "profile",
})

const profileLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://amrabutalleb.com/about",
  mainEntity: { "@id": "https://amrabutalleb.com/#person" },
}

export default function AboutPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-32 lg:pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }} />
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-16">

        {/* ── Left column: ALL content ── */}
        <div className="order-2 min-w-0 lg:order-none lg:w-[55%]">

          <FadeIn>
            <h1 className="mb-6 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              {tp("Close to the craft. Closer to the people.")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mb-12 max-w-[60ch] text-xl leading-relaxed text-foreground">{tp("I’m Amr Abu-Talleb. Before I directed teams, I drew Arabic calligraphy and English lettering by hand. It taught me how much the weight of a stroke or the space around a curve can change the character of a whole word, and I still look at brands, campaigns and products that way.")}</p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.16} as="div" className="flex max-w-[62ch] flex-col gap-6 text-[length:var(--text-article)] leading-[var(--leading-longform)] text-muted-foreground">
            <p>{tp("That eye took me from the drawing desk into design, and over thirteen years into creative direction. The work grew from single pieces into whole systems: identities, digital products, campaigns and the business decisions behind them, for clients in Egypt, the Gulf, the UK, the US, Australia and Singapore. At The Line, I led an in-house brand and marketing team of about 11. At Overpowered, I grew the creative team from 6 people to about 25 in 7 months.")}</p>
            <p>{tp("The details never stopped mattering as the projects grew. When I designed As Within, So Without, a 212-page book for Steve Hodel, the retired LAPD homicide detective and New York Times bestselling author, the job was the one I learned at the drawing desk: give decades of evidence and more than 130 images a structure clear enough that the reader never has to fight the page.")}</p>
            <p>{tp("Working in Arabic and English keeps that balance honest. An identity has to feel native in both scripts and still be recognisably itself, so I treat lettering, typography and spacing as part of the idea, not as finishing touches. Art can have a character of its own; design also has to make sense to the people who meet it and to the business behind it.")}</p>
            <p>{tp("The same care now goes into how a team works. In reviews, the designer walks us through the work first. I will tell my opinion last. We talk about what’s working and what needs another look. I step in when a decision is difficult or the work drifts from the brief, but a good team shouldn’t have to wait for me to make a considered call.")}</p>
            <p>{tp("Over the years I’ve hired more than 50 people, and some now lead teams of their own. ")}<strong className="font-medium text-foreground">{tp("That’s what I’m proudest of.")}</strong>{tp(" I’ve never wanted everyone to work the way I do. I’d rather give people the standard, the context and the responsibility to find their own way of doing it well.")}</p>
            <p className="font-medium text-foreground">{tp("That’s the role I’m looking for next: creative leadership in Europe, remote or on-site, where strategy, craft and team development belong together. Close enough to the details to keep the work good, and far enough back to help the team grow.")}</p>
          </FadeIn>

          {/* ── What I Do ── */}
          <FadeIn as="div" className="mt-24">
            <h2 className="mb-12 font-serif text-[length:var(--text-sub)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              What I&nbsp;do
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div key={cap.title} className="capability-card rounded-sm bg-surface p-6 lg:p-8">
                  <h3 className="mb-3 font-medium text-foreground">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>

        {/* ── Right column: sticky photo + CTAs + links ── */}
        <div className="order-1 lg:order-none lg:w-[45%]">
          <FadeIn delay={0.16} as="div" className="flex flex-col items-center gap-6 lg:sticky lg:top-32">
            {/* Portrait */}
            <div className="h-[280px] w-[280px] overflow-hidden rounded-full lg:h-[380px] lg:w-[380px]">
              <Image
                src="/images/amr-portrait-v3.webp"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="h-full w-full object-cover grayscale"
              />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/cv/Amr_AbuTalleb_CV_Creative_Director_2026-10.pdf"
                download
                className="btn btn-primary"
              >
                <Download size={14} />
                Download&nbsp;CV
              </a>
              <Link
                href="/#work"
                className="btn btn-secondary"
              >
                View My&nbsp;Work
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* LinkedIn & Email */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/abutalleb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:hello@amrabutalleb.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </a>
            </div>
          </FadeIn>
        </div>

      </div>
    </main>
  )
}
