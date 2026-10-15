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
              <span className="block">Work worth signing.</span>
              <span className="block">Teams built to outgrow me.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 max-w-[60ch] text-xl leading-relaxed text-foreground">
              {tp("I’m Amr Abu-Talleb, and my first medium was the pen. Long before I led teams, I spent years drawing Arabic and Latin letters by hand, learning how the weight of a stroke and the space between two letters change the way a word feels. That is where I discovered that typography behaves like a filmmaker’s camera. It sets the mood, controls the pace and tells the story before anyone reads a word. I still hold every project to a calligrapher’s standard, where nothing is decorative and nothing is accidental. Only the canvas has grown.")}
            </p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            <p>
              {tp("Thirteen years on, I lead brand, campaign and product teams of up to twenty-five people, for clients in Egypt, the Gulf area, the UK, the US, Australia and Singapore. I helped a small design studio discover who it was really for and built the agency around that answer, with a growth plan that let it scale at its own pace. I rebuilt a client’s development proposal line by line, before a single screen existed, and won the project with it. And I designed a 212-page book for Steve Hodel, the former LAPD detective who spent decades investigating his own father. That one stays with me.")}
            </p>
            <p>
              {tp("Much of my work now is building the system the work flows through. I decide which brief goes to which designer, based on their capacity and what they do best, and I learn how many rounds each person needs before their strongest idea appears. I shape how work travels from one desk to the next, and how it reaches the client, staged, shown, approved and refined. Every few days the team puts its work on the wall. Everyone presents, the others say what is working and what isn’t, the art directors guide, and I speak last, so the team’s judgement grows before mine is heard. I step in when the work drifts from the brand or from the people it is meant for.")}
            </p>
            <p>
              {tp("I am still an artist at heart, and I bring that into every brief. Art can exist for its own sake. Design has to work, for the people who meet it and for the business behind it. The best work lives where the two meet, and that is where I lead my teams. I encourage designers to draw their ideas from their own lives and values and push them as far as their imagination will carry them, then shape them until they are clear, true to their audience and doing their job.")}
            </p>
            <p>
              {tp("I work in Arabic and English, as a typographer and calligrapher in both, and I’ve built identities that carry two scripts while speaking with one voice. AI sits in my toolbox beside the brush and the pen tool. It takes on the repetition and the research, never the idea. I bring the thinking, it gives the team more ways to explore it, and we test several directions before finishing the strongest one by hand.")}
            </p>
            <p>
              {tp("What I’m proudest of doesn’t fit in a portfolio. I’ve hired more than fifty people, and some of the designers I hired now lead teams of their own. I hire for integrity first and the will to learn second. Skills can be sharpened. Anything else can be fixed.")}
            </p>
            <p className="font-medium text-foreground">
              {tp("Today I lead a team of twenty-five across design, product, video, support and PR, with five or six projects in motion at once. The next team I build will be in Europe.")}
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
