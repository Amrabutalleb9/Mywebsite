import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Download, ArrowRight, Linkedin } from "lucide-react"
import { capabilities } from "@/lib/shared-data"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"
import { tp } from "@/lib/typeset"

export const metadata: Metadata = pageMeta({
  title: "About Amr Abu-Talleb · Creative Director & Design Leader",
  description:
    "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. 50+ people hired. Open to roles in Europe or remote.",
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
              {tp("I’m Amr Abu-Talleb, a creative director with thirteen years of building brands, products and the teams that make them, across eight markets and two scripts. I started as a calligrapher and illustrator, and I still judge work the way I learned to judge a letter, by whether every mark earns its place.")}
            </p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            <p>
              {tp("I’ve led teams of up to 25 for clients in Egypt, the Gulf, the UK, the US, Australia and Singapore. At Overpowered I turned a six-person studio into a 25-person agency in seven months, after first talking its CEO out of opening with forty. I rebuilt a fitness platform’s scope and cost before a single screen existed and won the contract with it. I rebuilt Agfin’s website around a sharper sales story, and sales rose 12% in the first month with no ad spend. And I designed a 212-page book for Steve Hodel, the former LAPD detective who spent decades investigating his own father.")}
            </p>
            <p>
              {tp("Most of my job now is the system the work runs through. Briefs go to the people with the capacity and strengths for them, and every task, owner and deadline sits where the whole team can see it. Every two or three days the team presents its work, the art directors guide and I speak last. I step in when the work drifts from the brand, from what users need or from what makes the client money.")}
            </p>
            <p>
              {tp("I still think like an artist. I just don’t stop there. Art can mean something without a purpose. Design has a purpose, and you can measure whether it works. I push designers to find the idea in their own life and values and take it as far as they like, provided people understand it and it does its job.")}
            </p>
            <p>
              {tp("I work as a typographer and calligrapher in Arabic and English, and I’ve built identities that carry both scripts and still sound like one brand. AI sits in the same toolbox as the brush and the pen tool. It handles the repetitive work and the research, never the idea, and it lets the team test several directions before we finish the best one by hand.")}
            </p>
            <p>
              {tp("What I’m proudest of doesn’t fit in a portfolio. I’ve hired more than fifty people, for integrity first and the will to learn second, and some of the designers I hired now run teams of their own. Skills can be sharpened. Anything else can be fixed.")}
            </p>
            <p className="font-medium text-foreground">
              {tp("Today I lead a 25-person team across design, product, video, support and PR, with five or six projects live at once and the numbers reviewed every quarter. The next team I build will be in Europe.")}
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
            {"Figma, Adobe Creative Suite, Premiere Pro, Cursor and\u00A0Next.js, plus AI tools for\u00A0image, video and\u00A0voice."}
          </FadeIn>

        </div>

        {/* ── Right column: sticky photo + CTAs + links ── */}
        <div className="order-1 lg:order-none lg:w-[45%]">
          <FadeIn delay={0.2} as="div" className="flex flex-col items-center gap-6 lg:sticky lg:top-32">
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
