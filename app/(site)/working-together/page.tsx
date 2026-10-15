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
  { title: tp("Creative direction and rebranding"), desc: tp("Setting the direction for a project, developing concepts with the team, and guiding the work through design reviews and delivery. This covers brand repositioning, identity systems, campaigns and art direction.") },
  { title: tp("Brand strategy and identity"), desc: tp("Working through audience, positioning, brand personality and visual direction before moving into identity design. I can lead the process or work alongside an existing strategy and design team.") },
  { title: tp("Digital product and UX/UI"), desc: tp("Defining product structure, mapping user roles and journeys, prioritising features and designing interfaces. I can work with a team before development starts, or join an existing product to improve its experience and direction.") },
  { title: tp("Agency positioning and operations"), desc: tp("Helping agencies clarify what they offer, who they serve and how they deliver. This can cover service structure, team responsibilities, project workflows, review processes and outreach planning.") },
  { title: tp("Arabic and English typography"), desc: tp("Developing identities and creative work across both scripts, with attention to lettering, typography, visual consistency and the character of the brand across markets.") },
  { title: tp("Prototyping and creative technology"), desc: tp("Using code and AI-assisted tools to explore ideas, test interactions and build prototypes before committing to full development.") },
]

const steps = [
  { title: tp("Conversation and scope"), desc: tp("We start with a conversation about the problem, the context and what needs to change. Before the work begins, I put the scope in writing, so the deliverables, responsibilities, decision-making and constraints are clear.") },
  { title: tp("Review while it’s developing"), desc: tp("I prefer to review work while it’s still taking shape, rather than wait until a finished design needs to be reconsidered. That gives us room to challenge decisions, explore alternatives and refine the direction before too much time has been invested.") },
  { title: tp("Handover"), desc: tp("At handover, I provide the agreed deliverables and documentation, along with the working files the team needs to carry on.") },
]

const facts = [
  { label: "Based in", value: tp("Cairo, relocating to Europe") },
  { label: "Available", value: tp("Within 30 days") },
  { label: "Remote", value: tp("As a contractor or through an employer of record") },
  { label: "On-site, UK or EU", value: tp("Needs sponsorship") },
]

const parts = [
  { id: "what-i-work-on", title: "What I work on" },
  { id: "how-i-work", title: "How I work" },
  { id: "practical-details", title: "Practical details" },
]

const PartLabel = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <p className="mb-2 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{`0${n}`}&nbsp;·&nbsp;{children}</p>
)

export default function WorkingTogetherPage() {
  return (
    <main className="px-8 pt-32 lg:px-16 lg:pt-40">
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
            <p className="text-xl leading-relaxed text-foreground">{tp("I take on selected contract and interim engagements across creative direction, brand and digital product. That can mean joining an existing team to guide a rebrand, helping an agency clarify its positioning and services, or defining a digital product before development begins.")}</p>
            <p className="text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground">{tp("My involvement depends on the project. I can lead the direction and reviews, work directly on strategy and design, or help the team through decisions that have stalled progress. Either way, I stay close to the execution, whether that means guiding the work or getting hands-on myself.")}</p>
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

          <section id="practical-details" className="mt-20 scroll-mt-32 border-b border-border">
            <FadeIn><PartLabel n={3}>Practical details</PartLabel></FadeIn>
            {facts.map((f) => (
              <FadeIn key={f.label} as="div" className="grid grid-cols-1 gap-1 border-t border-border py-5 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
                <span className="text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-sublabel)] text-accent uppercase">{f.label}</span>
                <span className="text-[0.9375rem] text-foreground">{f.value}</span>
              </FadeIn>
            ))}
          </section>
        </div>
      </div>

      {/* Ending: light band, so it sits apart from the black footer */}
      <section className="-mx-8 mt-24 bg-surface px-8 py-24 lg:-mx-16 lg:mt-32 lg:px-16 lg:py-32">
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
