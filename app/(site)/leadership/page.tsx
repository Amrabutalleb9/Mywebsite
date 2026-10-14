import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"
import { tp } from "@/lib/typeset"

export const metadata: Metadata = pageMeta({
  title: "How I Run a Team · Amr Abu-Talleb, Creative Director",
  description:
    "How Amr Abu-Talleb builds and runs creative teams: team shapes, hiring, critiques, promotions and the business side of creative work.",
  path: "/leadership",
})

const teams = [
  { label: "Agency", size: "25", desc: tp("Overpowered, a creative and digital agency in London. Five disciplines, art directors leading the creative teams, UX/UI with me directly.") },
  { label: "Real estate", size: "11", desc: tp("The Line, an in-house brand and marketing team of eleven. Before that, brand and marketing design for Edge Holdings and Akadia Development.") },
  { label: "Today", size: "25", desc: tp("Design, product, video, support and PR, with five or six projects live at once.") },
]

const sections = [
  {
    title: tp("How the work moves"),
    body: [
      tp("Every brief goes to the designer with the capacity and the strengths for it. I learn how many rounds each person needs before their best idea shows up, and plan for it. Work passes from desk to desk and reaches the client the same way every time. It’s staged, shown, approved and fixed."),
      tp("Every two or three days the team puts its work up. Everyone presents, the others say what’s working and what isn’t, the art directors guide, and I speak last. I step in when the work drifts from the brand, from what users need, or from what makes the client money."),
    ],
  },
  {
    title: tp("Hiring"),
    body: [
      tp("I’ve hired more than fifty people. I hire for integrity first and the will to learn second. Skills can be sharpened. Anything else can be fixed."),
      tp("At Overpowered I wrote the hiring test myself. Candidates got a brief for a premium olive-oil brand built on Arabic calligraphy, which shows in one task whether someone can think about a market, handle type and present an idea."),
    ],
  },
  {
    title: tp("The standard"),
    body: [
      tp("Every case study my team writes comes back with written notes. I ask for the reasoning behind the work, the positioning, the personas, the wireframes and what testing showed. I check the typography, I send back anything with lorem ipsum in it, and I ask for contrast that passes accessibility checks. The notes are specific so the next version is better without another meeting."),
    ],
  },
  {
    title: tp("Growing people"),
    body: [
      tp("The best sign a team is working is that it produces its next leaders. At Overpowered I promoted one of the designers to Art Director. Some of the designers I hired over the years now run teams of their own, and some still come to me for advice when they don’t report to me any more."),
    ],
  },
  {
    title: tp("The business around the work"),
    body: [
      tp("Creative work only gets good when the business around it is clear. I’ve rewritten a client’s development quotation line by line and won the contract with it, turned a mis-priced proposal into a two-phase engagement that won both phases, and written an agency’s go-to-market plan and outreach system. Budgets stay with the owner. My job is to bring them a plan they can approve."),
    ],
  },
]

export default function LeadershipPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Leadership</p>
          <h1 className="mb-8 max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            {tp("How I run a creative team")}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="max-w-[60ch] text-xl leading-relaxed text-foreground">
            {tp("Most of my job is building the system the work runs through. Here is what that looks like, with the documents behind it.")}
          </p>
        </FadeIn>

        <FadeIn as="div" className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {teams.map((t) => (
            <div key={t.label} className="capability-card rounded-sm bg-surface p-6 lg:p-8">
              <p className="text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-sublabel)] text-accent uppercase">{t.label}</p>
              <p className="mt-3 font-serif text-[length:var(--text-sub)] leading-none tracking-tight text-foreground">{t.size}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </FadeIn>

        <div className="mt-24 flex flex-col gap-16">
          {sections.map((sec) => (
            <FadeIn key={sec.title} as="div" className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
              <h2 className="font-serif text-[length:var(--text-sub)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">{sec.title}</h2>
              <div className="flex max-w-[60ch] flex-col gap-6 text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground">
                {sec.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn as="div" className="mt-24 flex flex-col items-start gap-5">
          <p className="text-lg text-foreground">{tp("See it in a real agency.")}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work/overpowered"
              className="cta-btn cta-btn-filled inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase"
            >
              The Overpowered case&nbsp;study
              <ArrowUpRight size={14} className="cta-arrow" />
            </Link>
            <Link
              href="/contact"
              className="cta-btn cta-btn-outline inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase"
            >
              {"Let’s Talk"}
              <ArrowUpRight size={14} className="cta-arrow" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
