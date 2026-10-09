import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Download, ArrowRight, Linkedin } from "lucide-react"
import { leadershipPrinciples, capabilities } from "@/lib/shared-data"
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
              I run creative teams that ship, and grow the people in them.
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
              {"I\u2019m a\u00A0creative director with a\u00A0background in\u00A0drawing, sculpture and\u00A0calligraphy. I\u00A0still judge a\u00A0layout by\u00A0its weight and\u00A0the\u00A0space around\u00A0it."}
            </p>
            <p>
              {"Over 13\u00A0years I\u2019ve led creative teams of\u00A0up\u00A0to\u00A025\u00A0people, for\u00A0brands in\u00A0eight markets. I\u00A0measure myself by\u00A0who comes out of\u00A0those teams. I\u00A0want every designer I\u00A0manage to\u00A0be\u00A0able to\u00A0run a\u00A0team of\u00A0their own one\u00A0day."}
            </p>
            <p>
              {"The project I\u2019m proudest of\u00A0is\u00A0a\u00A0book. Steve Hodel is\u00A0a\u00A0former LAPD homicide detective who spent decades investigating his own father. I\u00A0designed his 212-page book, As Within, So Without, around more than 130\u00A0images, with type and\u00A0layouts drawn from the\u00A0period it\u00A0describes."}
            </p>
            <p>
              {"The results follow the\u00A0craft. Agfin\u2019s sales rose 12%\u00A0in\u00A0the\u00A0first month with zero ad spend, and\u00A0one campaign of\u00A0mine sold $125k on\u00A0its\u00A0own."}
            </p>
            <p>
              {"I\u00A0also build. I\u00A0prototype in\u00A0code with AI, so\u00A0an\u00A0idea can go from brief to\u00A0a\u00A0live staging build in\u00A0days, not sprints. I\u00A0designed and\u00A0built this site\u00A0myself."}
            </p>
            <p className="font-medium text-foreground">
              {"Today I\u00A0run a\u00A025-person team across design, product, video and\u00A0support for\u00A0a\u00A0software company in\u00A0the\u00A0UAE, from Cairo. I\u2019m looking for\u00A0my\u00A0next Creative Director role in\u00A0Europe."}
            </p>
          </FadeIn>

          {/* ── How I Lead ── */}
          <FadeIn as="div" className="mt-24">
            <h2 className="mb-12 font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              How I&nbsp;Lead
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {leadershipPrinciples.map((item) => (
                <div key={item.title} className="capability-card rounded-sm bg-surface p-6 lg:p-8">
                  <h3 className="mb-3 font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
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
              Recognition
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
                src="/images/amr-portrait-v2.webp"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="h-full w-full object-cover grayscale"
              />
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="/Amr_AbuTalleb_CV_Creative_Director.pdf"
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
