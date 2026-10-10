import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Working Together · Amr Abu-Talleb, Creative Director",
  description:
    "Rebrands led with your in-house team, interim creative direction, agency partnerships and fast product prototypes. How a collaboration with Amr Abu-Talleb works.",
  path: "/working-together",
})

const ways = [
  { title: "Leading a\u00A0rebrand with your\u00A0team", desc: "Your designers do the\u00A0work. I\u00A0set the\u00A0direction, run the\u00A0reviews and\u00A0make the\u00A0calls, and\u00A0the\u00A0guidelines and\u00A0asset library stay with you when we\u2019re\u00A0done." },
  { title: "Interim creative\u00A0director", desc: "Between hires, or\u00A0while you look for\u00A0the\u00A0right person. I\u00A0keep the\u00A0standard, the\u00A0pipeline and\u00A0the\u00A0client relationships steady, and\u00A0help you hire the\u00A0person who replaces\u00A0me." },
  { title: "Partnering with\u00A0agencies", desc: "For agencies that need a\u00A0creative lead on\u00A0a\u00A0pitch or\u00A0a\u00A0multi-market account, or\u00A0work that has to\u00A0hold up\u00A0in\u00A0Arabic and\u00A0English at\u00A0the\u00A0same\u00A0time." },
  { title: "Testing an\u00A0idea before you build\u00A0it", desc: "When a\u00A0product idea needs proof, I\u00A0take it\u00A0from brief to\u00A0a\u00A0working staging build in\u00A0days, so\u00A0the\u00A0decision gets made on\u00A0something you can\u00A0click." },
]

export default function WorkingTogetherPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h1 className="mb-8 max-w-[22ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            <span className="block">{"Some work needs a\u00A0creative\u00A0director"}</span>
            <span className="block">{"before it\u00A0needs a\u00A0full-time\u00A0one."}</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="max-w-[60ch] text-xl leading-relaxed text-foreground">
            {"Most of\u00A0what I\u00A0do is\u00A0full-time leadership, and\u00A0that\u2019s what I\u2019m looking for\u00A0in\u00A0Europe. But some teams need a\u00A0creative director for\u00A0one big piece of\u00A0work first: a\u00A0rebrand, a\u00A0launch, or\u00A0a\u00A0product that has to\u00A0ship. I\u00A0work inside your team, not beside it,\u00A0and\u00A0I\u00A0leave the\u00A0system behind when I\u00A0go."}
          </p>
        </FadeIn>

        <FadeIn as="div" className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ways.map((w) => (
            <div key={w.title} className="capability-card rounded-sm bg-surface p-6 lg:p-8">
              <h2 className="mb-3 font-medium text-foreground">{w.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </FadeIn>

        <FadeIn as="div" className="mt-24 flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
          <h2 className="font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">How it works</h2>
          <p>{"It starts with a\u00A0call about the\u00A0problem, not the\u00A0deliverables. Then a\u00A0short written scope: what we\u2019ll make, who decides, and\u00A0how we\u2019ll know it\u00A0worked. Reviews run every two or\u00A0three days, so\u00A0you see the\u00A0work while it\u00A0can still change, not only when it\u2019s\u00A0finished."}</p>
          <p>{"The case studies show what that looks like: a\u00A0quotation rewritten before a\u00A0single screen existed, a\u00A0brochure site rebuilt into a\u00A0funnel that lifted sales 12%\u00A0in\u00A0its first month, and\u00A0a\u00A0212-page book delivered through round after round of\u00A0edits."}</p>
        </FadeIn>

        <FadeIn as="div" className="mt-16 flex flex-col items-start gap-5">
          <p className="text-lg text-foreground">{"Tell me what you\u2019re working\u00A0on."}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="cta-btn cta-btn-filled inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase"
            >
              {"Let\u2019s Talk"}
              <ArrowUpRight size={14} className="cta-arrow" />
            </Link>
            <Link
              href="/projects"
              className="cta-btn cta-btn-outline inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase"
            >
              See the&nbsp;Work
              <ArrowUpRight size={14} className="cta-arrow" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
