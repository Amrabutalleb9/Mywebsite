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
              {"I\u2019m Amr Abu-Talleb, and\u00A0I\u00A0started with a\u00A0pen: illustration, calligraphy, Arabic and\u00A0Latin letters drawn by\u00A0hand until they looked right. That\u2019s where I\u00A0learned to\u00A0use typography the\u00A0way a\u00A0filmmaker uses a\u00A0camera, to\u00A0set the\u00A0mood, control the\u00A0pace and\u00A0tell the\u00A0story before anyone reads a\u00A0word. The habit of\u00A0looking at\u00A0every mark until it\u00A0earns its place never left. It just got\u00A0bigger."}
            </p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            <p>
              {"Thirteen years later I\u2019ve led brand, campaign and\u00A0product teams of\u00A0up\u00A0to\u00A025\u00A0people, for\u00A0clients in\u00A0Egypt, the\u00A0Gulf, the\u00A0UK, the\u00A0US, Australia and\u00A0Singapore. I\u2019ve rebuilt an\u00A0agency\u2019s identity to\u00A0speak to\u00A0three markets at\u00A0once, and\u00A0shipped it\u00A0in\u00A0two months. I\u2019ve rewritten a\u00A0client\u2019s development quotation line by\u00A0line before a\u00A0single screen existed, and\u00A0won the\u00A0contract with it. And I\u2019ve designed a\u00A0212-page book for\u00A0Steve Hodel, the\u00A0former LAPD detective who spent decades investigating his own father. That one stays with\u00A0me."}
            </p>
            <p>
              {"Most of\u00A0my\u00A0job now is\u00A0building the\u00A0system the\u00A0work runs through. Which designer gets which brief, based on\u00A0their capacity and\u00A0what they do best. How many rounds someone needs before their strongest idea shows up. How work passes from one desk to\u00A0the\u00A0next, and\u00A0how it\u00A0reaches the\u00A0client: staged, shown, approved, fixed. Every two or\u00A0three days the\u00A0team puts its work up. Everyone presents, the\u00A0others say what\u2019s working and\u00A0what isn\u2019t, the\u00A0art directors guide, and\u00A0I\u00A0speak last. I\u00A0step in\u00A0when the\u00A0work drifts from the\u00A0brand, from what users need, or\u00A0from what makes the\u00A0client\u00A0money."}
            </p>
            <p>
              {"I\u00A0still think like an\u00A0artist. I\u00A0just don\u2019t stop there. Art has meaning and\u00A0doesn\u2019t need a\u00A0purpose. Design has a\u00A0purpose, and\u00A0you can measure whether it\u2019s working. So I\u00A0push designers to\u00A0find the\u00A0concept in\u00A0their own life and\u00A0values, and\u00A0to\u00A0go as\u00A0far with it\u00A0as\u00A0they like, as\u00A0long as\u00A0people understand it,\u00A0relate to\u00A0it\u00A0and\u00A0it\u00A0does its\u00A0job."}
            </p>
            <p>
              {"I\u00A0work in\u00A0Arabic and\u00A0English, as\u00A0a\u00A0typographer and\u00A0calligrapher in\u00A0both, and\u00A0I\u2019ve built identities for\u00A0brands that carry two scripts and\u00A0still need to\u00A0sound like one voice. AI sits in\u00A0the\u00A0same toolbox as\u00A0the\u00A0brush and\u00A0the\u00A0pen tool. It takes the\u00A0repetitive work and\u00A0the\u00A0research, never the\u00A0idea. I\u00A0give it\u00A0my\u00A0thinking, it\u00A0gives the\u00A0team more ways to\u00A0execute it,\u00A0and\u00A0we\u00A0test several directions instead of\u00A0one before finishing the\u00A0best by\u00A0hand."}
            </p>
            <p>
              {"What I\u2019m proudest of\u00A0doesn\u2019t fit in\u00A0a\u00A0portfolio. I\u2019ve hired more than fifty people, and\u00A0some of\u00A0the\u00A0designers I\u00A0hired now run teams of\u00A0their own. I\u00A0hire for\u00A0integrity first and\u00A0the\u00A0will to\u00A0learn second. Skills can be\u00A0sharpened. Anything else can be\u00A0fixed."}
            </p>
            <p className="font-medium text-foreground">
              {"Today I\u00A0run a\u00A025-person team across design, product, video, support and\u00A0PR from Cairo, with five or\u00A0six projects live at\u00A0any time, and\u00A0I\u00A0report to\u00A0the\u00A0owners and\u00A0the\u00A0board every quarter. Next, I\u00A0want to\u00A0do it\u00A0in\u00A0Europe."}
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
