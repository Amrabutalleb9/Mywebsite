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

export default function AboutPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

        {/* ── Left column: ALL content ── */}
        <div className="order-2 min-w-0 lg:order-none lg:w-[55%]">

          <FadeIn>
            <h1 className="mb-6 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              <span className="block">Work I’d put my name on.</span>
              <span className="block">Teams built to outgrow me.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 max-w-[60ch] text-xl leading-relaxed text-foreground">
              {"I\u2019m Amr Abu-Talleb, a\u00A0creative director with 13\u00A0years of\u00A0leading brand, campaign and\u00A0product teams across eight markets. Companies bring me in\u00A0when their creative output needs to\u00A0grow up: a\u00A0clearer brand, a\u00A0stronger team, and\u00A0work that ships on\u00A0time and\u00A0can show what it\u00A0earned."}
            </p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[60ch] flex-col gap-8 leading-relaxed text-muted-foreground">
            <div>
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-foreground">Proof, not promises</h2>
              <p>{"Agfin\u2019s sales rose 12%\u00A0in\u00A0the\u00A0first month after we\u00A0rebuilt its website, with zero ad spend. A B2B marble brand saw social engagement rise 70%\u00A0once we\u00A0stopped talking to\u00A0homeowners and\u00A0started talking to\u00A0architects. One campaign of\u00A0mine sold $125k on\u00A0its\u00A0own."}</p>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-foreground">Craft with a point of view</h2>
              <p>{"My background is\u00A0drawing, sculpture and\u00A0calligraphy, so\u00A0I\u00A0care about type, proportion and\u00A0the\u00A0space around things. When former LAPD homicide detective Steve Hodel needed a\u00A0212-page book about his father and\u00A0the\u00A0surrealists, I\u00A0built it\u00A0on\u00A0Caslon and\u00A0the\u00A0print culture of\u00A0the\u00A01940s, so\u00A0it\u00A0reads like it\u00A0belongs to\u00A0the\u00A0world it\u00A0describes."}</p>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-foreground">Ideas you can click</h2>
              <p>{"I\u00A0prototype in\u00A0code with AI. A concept reaches a\u00A0working staging build in\u00A0days, stakeholders react to\u00A0something real, and\u00A0engineering gets a\u00A0reference instead of\u00A0a\u00A0guess. I\u00A0designed and\u00A0built this site\u00A0myself."}</p>
            </div>
            <p className="font-medium text-foreground">
              {"Today I\u00A0lead a\u00A025-person team across design, product, video and\u00A0support for\u00A0a\u00A0software company in\u00A0the\u00A0UAE, from Cairo. Next, I\u2019m looking for\u00A0a\u00A0Creative Director role in\u00A0Europe, on-site or\u00A0remote, with a\u00A0team that wants to\u00A0get better and\u00A0a\u00A0business that wants\u00A0proof."}
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
