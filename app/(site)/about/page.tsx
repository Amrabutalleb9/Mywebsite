import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Download, ArrowRight, Linkedin } from "lucide-react"
import { capabilities } from "@/lib/shared-data"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "About Amr Abu-Talleb · Creative Director & Design Leader",
  description:
    "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. 50+ designers hired. Open to roles in Europe or remote.",
  path: "/about",
  type: "profile",
})

const recognitionItems: { text: string; href?: string }[] = [
  { text: "B.Sc. Mechatronics Engineering, German University in Cairo" },
  { text: "Featured Contractor, Freelancer.com (Top-Rated, Branding, UI/UX)", href: "https://www.freelancer.com/u/Amrabutalleb93" },
]

export default function AboutPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

        {/* ── Left column: ALL content ── */}
        <div className="order-2 min-w-0 lg:order-none lg:w-[55%]">

          <FadeIn>
            <h1 className="mb-6 max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              <span className="text-[length:var(--text-display)]">13</span>&nbsp;years leading teams that&nbsp;ship.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-6 text-xl font-medium leading-relaxed text-muted-foreground">
              {"I\u2019m Amr Abu-Talleb."}
            </p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[60ch] flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              {"I\u2019ve spent 13\u00A0years directing brands and leading creative teams of\u00A0up to\u00A025 across 8\u00A0markets: Egypt, the UAE, the UK, Europe, the US, Canada, Australia and\u00A0Singapore."}
            </p>
            <p>
              {"My work has driven a\u00A012% sales increase in\u00A0one month with zero ad\u00A0spend, a\u00A070% lift in\u00A0social engagement for a\u00A0luxury marble brand, and one brand system rolled out across three international markets in\u00A0two months. I\u2019ve rescued a\u00A0website after four freelancers failed over three years, rewritten a\u00A0mis-priced development proposal before a\u00A0single wireframe was drawn, and designed a\u00A0212-page illustrated book for a\u00A0New York Times bestselling\u00A0author."}
            </p>
            <p>
              {"How I\u00A0lead: I\u2019ve hired more than 50\u00A0people over my career, and I\u00A0hire for two things first, the will to\u00A0keep learning and integrity. Skills can be sharpened; the rest is hard to\u00A0teach. Work is\u00A0reviewed against the system, not my\u00A0taste, and product decisions are tested against what\u00A0is already live, with A/B tests, one-to-one interviews and\u00A0surveys."}
            </p>
            <p>
              {"My mechatronics engineering degree taught me to\u00A0think in\u00A0systems, and it\u00A0means my creative direction doesn\u2019t stop at\u00A0Figma. I\u00A0prototype and ship in\u00A0code with AI as\u00A0my engineering team, so an\u00A0idea goes from brief to\u00A0a\u00A0live staging build in\u00A0days, not sprints. This site is one example: I\u00A0designed and built\u00A0it."}
            </p>
            <p>
              {"I use typography the way a\u00A0filmmaker uses a\u00A0camera: it\u00A0sets the mood, controls the pace, and\u00A0tells the story before a\u00A0single word gets\u00A0read."}
            </p>
            <p className="font-medium text-foreground">
              {"Currently leading a\u00A025-person creative team in\u00A0Cairo. Open to\u00A0Creative Director roles in\u00A0Europe, on\u2011site or\u00A0remote."}
            </p>
          </FadeIn>

          {/* ── What I Do ── */}
          <FadeIn as="div" className="mt-24">
            <h2 className="mb-12 font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              What I&nbsp;Do
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

          {/* Tools */}
          <FadeIn as="p" className="mt-10 text-sm text-muted-foreground">
            {"Figma \u00B7 Adobe Creative Suite \u00B7 Premiere Pro \u00B7 Cursor \u00B7 Next.js \u00B7 Nano Banana \u00B7 Seedance \u00B7 ElevenLabs \u00B7 Google Analytics"}
          </FadeIn>

          {/* ── Recognition & Education ── */}
          <FadeIn as="div" className="mt-24">
            <h2 className="mb-8 font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              Recognition &amp;&nbsp;Education
            </h2>
            <ul className="flex flex-col">
              {recognitionItems.map((item) => (
                <li key={item.text} className="border-b border-border py-5 text-muted-foreground last:border-0">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* ── Right column: sticky photo + CTAs + links ── */}
        <div className="order-1 lg:order-none lg:w-[45%]">
          <FadeIn delay={0.2} as="div" className="flex flex-col items-center gap-6 lg:sticky lg:top-32">
            {/* Portrait */}
            <div className="h-[280px] w-[280px] overflow-hidden rounded-full lg:h-[380px] lg:w-[380px]">
              <Image
                src="/images/amr-portrait.webp"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="h-full w-full object-cover grayscale"
              />
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="/Amr_AbuTalleb_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                <Download size={14} />
                Download&nbsp;CV
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
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
                <Linkedin size={16} />
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
