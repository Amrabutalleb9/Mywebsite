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
  { label: "Agency", size: "25", desc: tp("Overpowered, London. Grown from six people to 25 in seven months, across five disciplines, with two art directors and UX/UI and copy reporting to me.") },
  { label: "Real estate", size: "11", desc: tp("The Line, an in-house brand and marketing team of eleven. Before that, brand and marketing design for Edge Holdings and Akadia Development.") },
  { label: "Today", size: "25", desc: tp("Design, product, video, support and PR, with five or six projects live at once.") },
]

const sections = [
  {
    title: tp("How the work moves"),
    body: [
      tp("Every brief goes to the person with the capacity and the strengths for it, and I plan for how many rounds each person needs to reach their best idea. Tasks, owners and deadlines live on one board, conversations live in channels by discipline and client, and every file lives in one shared workspace. Nobody should have to ask who owns what."),
      tp("A fixed rhythm does the rest. The team meets weekly, I check in with the art directors every two days, and every two or three days the team reviews its work. Everyone presents, the art directors guide and I speak last. I step in when the work drifts from the brand, from what users need or from what makes the client money."),
    ],
  },
  {
    title: tp("Hiring"),
    body: [
      tp("I’ve hired more than fifty people, for integrity first and the will to learn second. Skills can be sharpened. Anything else can be fixed."),
      tp("I write the hiring test myself. At Overpowered it was a premium olive-oil brand built on Arabic calligraphy, one brief that shows whether someone can read a market, handle type and present an idea."),
    ],
  },
  {
    title: tp("The standard"),
    body: [
      tp("Every case study my team writes comes back with written notes on the reasoning, the positioning, the personas and what testing showed. I check the typography, return anything with placeholder copy and ask for contrast that passes accessibility checks. The notes are specific enough that the next version improves without another meeting."),
    ],
  },
  {
    title: tp("Growing people"),
    body: [
      tp("A team is working when it produces its next leaders. At Overpowered I promoted one of our designers to Art Director, and designers I hired years ago now run teams of their own."),
    ],
  },
  {
    title: tp("The business around the work"),
    body: [
      tp("Creative work gets good when the business around it is clear. I rebuilt a fitness platform’s scope and cost before any design existed and won the contract with it, and I wrote an agency’s positioning, go-to-market plan and outreach system. Budgets stay with the CEO, so every recommendation reaches them as an investment case they can approve."),
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
            {tp("Most of my job is building the system the work runs through. This is how I set teams up, hire, review and grow people, and keep the work tied to the business.")}
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
