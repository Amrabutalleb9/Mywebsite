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
              {"I\u2019m Amr Abu-Talleb, a\u00A0creative director who started out with a\u00A0pen and\u00A0a\u00A0brush. Illustration, calligraphy and\u00A0type taught me early that every mark changes how something is\u00A0read, and\u00A0thirteen years of\u00A0brand, campaign and\u00A0product work across eight markets have only made me surer of\u00A0it."}
            </p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            <p>
              {"Most companies don\u2019t call a\u00A0creative director when things are going well. They call when the\u00A0brand says something different in\u00A0every market, when good designers are producing work nobody can defend, or\u00A0when deadlines keep slipping and\u00A0nobody is\u00A0sure why. That\u2019s the\u00A0work I\u00A0like best. At Overpowered, a\u00A0creative agency selling to\u00A0enterprise clients in\u00A0the\u00A0UAE, partners in\u00A0the\u00A0UK and\u00A0startups in\u00A0Egypt, I\u00A0rebuilt the\u00A0brand into one system that could speak three different ways, and\u00A0rolled it\u00A0out in\u00A0two months with a\u00A0team of\u00A0twenty-five."}
            </p>
            <p>
              {"The part of\u00A0the\u00A0job I\u00A0care about most is\u00A0the\u00A0people. I\u2019ve hired more than fifty of\u00A0them, and\u00A0I\u00A0look for\u00A0integrity first and\u00A0a\u00A0hunger to\u00A0learn second, because skills can be\u00A0sharpened and\u00A0anything else can be\u00A0fixed. I\u00A0give a\u00A0team the\u00A0brief and\u00A0the\u00A0room to\u00A0go further than it\u00A0asks, then we\u00A0review the\u00A0work against the\u00A0brand and\u00A0the\u00A0user rather than against my\u00A0taste. Over the\u00A0years, designers I\u00A0hired have grown into art directors, and\u00A0art directors into people leading teams of\u00A0their own. That matters more to\u00A0me than any single\u00A0project."}
            </p>
            <p>
              {"I\u00A0also speak the\u00A0language of\u00A0the\u00A0people who sign off the\u00A0budget. On SPLT, a\u00A0fitness marketplace, the\u00A0development quotation the\u00A0client had been handed didn\u2019t hold up,\u00A0so\u00A0I\u00A0rewrote it\u00A0line by\u00A0line before a\u00A0single screen was designed, and\u00A0that rewrite won the\u00A0contract. For Agfin, an\u00A0Australian farm finance practice, a\u00A0website rebuilt around clearer copy lifted sales by\u00A012%\u00A0in\u00A0its first month without a\u00A0penny spent on\u00A0ads. I\u00A0agree scope, budget and\u00A0risk up\u00A0front, flag problems while they\u2019re still small, and\u00A0report progress in\u00A0terms a\u00A0CEO can act\u00A0on."}
            </p>
            <p>
              {"Craft is\u00A0still where my\u00A0background shows. When Steve Hodel, a\u00A0former LAPD homicide detective who spent decades investigating his own father, asked me to\u00A0design his book, I\u00A0went back to\u00A0the\u00A0type and\u00A0printed matter of\u00A0the\u00A01940s art world his story moves through. The result is\u00A0212\u00A0pages and\u00A0more than 130\u00A0archival images that read as\u00A0though they belong to\u00A0that world. It\u2019s the\u00A0project I\u2019m proudest\u00A0of."}
            </p>
            <p>
              {"And I\u00A0build. I\u00A0prototype in\u00A0code with AI, so\u00A0an\u00A0idea can go from brief to\u00A0a\u00A0working staging build in\u00A0days, and\u00A0stakeholders react to\u00A0something real instead of\u00A0a\u00A0slide. I\u00A0designed and\u00A0built this site\u00A0myself."}
            </p>
            <p className="font-medium text-foreground">
              {"Today I\u00A0lead a\u00A025-person team across design, product, video and\u00A0support for\u00A0a\u00A0software company in\u00A0the\u00A0UAE, working from Cairo. I\u2019m looking for\u00A0my\u00A0next Creative Director role in\u00A0Europe, on-site or\u00A0remote, somewhere the\u00A0work matters and\u00A0the\u00A0team is\u00A0ready to\u00A0grow."}
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
