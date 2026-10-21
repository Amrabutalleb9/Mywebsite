import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"
import { tp } from "@/lib/typeset"

export const metadata: Metadata = pageMeta({
  title: "Working Together · Amr Abu-Talleb, Creative Director",
  description:
    "Contract and interim creative direction across brand, digital product and agency positioning. How a collaboration with Amr Abu-Talleb works.",
  path: "/working-together",
})

const ways = [
  { title: tp("Creative direction and rebranding"), desc: tp("When a brand, campaign or creative project needs a clearer point of view, I set the direction and guide the work through execution: developing concepts, setting the visual standard, directing identity and campaign work, and helping the team carry the idea across digital and physical touchpoints.") },
  { title: tp("Brand and agency positioning"), desc: tp("I help businesses and agencies clarify what they offer, who they serve and what makes their work distinct. The work can run from positioning and service structure into identity, messaging and creative direction, so the promise to the market matches what the team can deliver.") },
  { title: tp("Digital product and UX"), desc: tp("For a new product, I help define its structure, user roles, journeys, priorities and interface direction before development begins. For an existing one, I work with the team to find the friction and decide what needs attention first. I can lead alongside product and engineering, direct a design team, or work hands-on through to production-ready screens.") },
  { title: tp("Interim creative leadership"), desc: tp("Sometimes a team needs experienced leadership for a set period: a transition, a phase of growth, or while responsibilities are reorganised. I work with the existing team to clarify priorities and responsibilities, support art directors and designers, and set up reviews that move the work forward without adding approval layers.") },
]

const steps = [
  { title: tp("Start with the problem"), desc: tp("We start with the situation, what needs to change and what a useful outcome looks like. Before the work begins, I put the scope in writing, so we agree on objectives, responsibilities, decision-making and constraints.") },
  { title: tp("Review the work while it’s developing"), desc: tp("I prefer to discuss work while there’s still room to explore and change direction. That way the important questions are settled early, not in rounds of revisions at the end.") },
  { title: tp("Leave the work ready to continue"), desc: tp("At handover, I provide the agreed deliverables, documentation and working files, with decisions, open issues and next steps written down, so the work doesn’t depend on me to keep moving.") },
]

const parts = [
  { id: "what-i-work-on", title: "What I work on" },
  { id: "how-i-work", title: "How I work" },
]

const PartLabel = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <p className="mb-2 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{`0${n}`}&nbsp;·&nbsp;{children}</p>
)

export default function WorkingTogetherPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">

        {/* Left: title, contents and actions, sticky on desktop */}
        <div>
          <div className="lg:sticky lg:top-32">
            <FadeIn>
              <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Working together</p>
              <h1 className="mb-10 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
                {tp("Some projects need someone to own the direction.")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.05} as="nav" aria-label="On this page" className="hidden border-b border-border lg:block">
              {parts.map((p, i) => (
                <a key={p.id} href={`#${p.id}`} className="flex gap-4 border-t border-border py-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-xs font-semibold tracking-[var(--tracking-sublabel)] text-accent">{`0${i + 1}`}</span>
                  {p.title}
                </a>
              ))}
            </FadeIn>
            <FadeIn delay={0.1} as="div" className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                {"Let\u2019s Talk"}
                <ArrowUpRight size={14} className="cta-arrow" />
              </Link>
              <Link
                href="/projects"
                className="btn btn-secondary"
              >
                See the&nbsp;Work
                <ArrowUpRight size={14} className="cta-arrow" />
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Right: intro and the three parts */}
        <div className="min-w-0">
          <FadeIn delay={0.1} as="div" className="mb-16 flex max-w-[60ch] flex-col gap-6">
            <p className="text-xl leading-relaxed text-foreground">{tp("I take on selected contract and interim engagements across creative direction, brand and digital product. That might mean repositioning a brand, clarifying an agency’s offer, defining a product before development, or helping an existing team get a difficult project moving.")}</p>
            <p className="text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground">{tp("I can lead the direction, work directly on the design, or combine both. My involvement depends on the problem, the scope and the people already working on it.")}</p>
          </FadeIn>

          <section id="what-i-work-on" className="scroll-mt-32">
            <FadeIn><PartLabel n={1}>What I work on</PartLabel></FadeIn>
            {ways.map((w) => (
              <FadeIn key={w.title} as="div" className="grid grid-cols-1 gap-3 border-t border-border py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
                <h2 className="font-serif text-2xl font-normal leading-snug tracking-tight text-foreground">{w.title}</h2>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{w.desc}</p>
              </FadeIn>
            ))}
          </section>

          <section id="how-i-work" className="mt-20 scroll-mt-32">
            <FadeIn><PartLabel n={2}>How I work</PartLabel></FadeIn>
            {steps.map((st, i) => (
              <FadeIn key={st.title} as="div" className="flex gap-7 border-t border-border py-7">
                <span aria-hidden="true" className="font-serif text-5xl leading-none text-accent/30">{`0${i + 1}`}</span>
                <div>
                  <h3 className="mb-2 text-[1.0625rem] font-medium text-foreground">{st.title}</h3>
                  <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted-foreground">{st.desc}</p>
                </div>
              </FadeIn>
            ))}
          </section>

        </div>
      </div>

      {/* Ending: light band, so it sits apart from the black footer */}
      <section className="mx-auto mt-24 max-w-6xl border-t border-border pt-20 lg:mt-32 lg:pt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-24">
          <FadeIn>
            <p className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Get in touch</p>
          </FadeIn>
          <FadeIn as="div">
            <p className="max-w-[24ch] font-serif text-[length:var(--text-section)] leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("Tell me about the project, the team or the problem you’re working through.")}
            </p>
            <p className="mt-8 flex items-center gap-3 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <ArrowDown size={16} className="text-accent" aria-hidden="true" />
              <span>
                {tp("Use the form below, or write to")}{" "}
                <a href="mailto:hello@amrabutalleb.com" className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">hello@amrabutalleb.com</a>.
              </span>
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
