import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
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

export default function WorkingTogetherPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h1 className="mb-8 max-w-[22ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            {tp("Some projects need someone to own the direction.")}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1} as="div" className="flex max-w-[60ch] flex-col gap-6">
          <p className="text-xl leading-relaxed text-foreground">{tp("I take on selected contract and interim engagements across creative direction, brand and digital product. That can mean joining an existing team to guide a rebrand, helping an agency clarify its positioning and services, or defining a digital product before development begins.")}</p>
          <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground">{tp("My involvement depends on the project. I can lead the direction and reviews, work directly on strategy and design, or help the team through decisions that have stalled progress. Either way, I stay close to the execution, whether that means guiding the work or getting hands-on myself.")}</p>
        </FadeIn>

        <h2 className="mt-24 font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">What I work on</h2>
        <FadeIn as="div" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ways.map((w) => (
            <div key={w.title} className="capability-card rounded-sm bg-surface p-6 lg:p-8">
              <h2 className="mb-3 font-medium text-foreground">{w.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </FadeIn>

        <FadeIn as="div" className="mt-24 flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
          <h2 className="font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">How I work</h2>
          <p>{tp("We start with a conversation about the problem, the context and what needs to change. Before the work begins, I put the scope in writing, so the deliverables, responsibilities, decision-making and constraints are clear.")}</p>
          <p>{tp("I prefer to review work while it’s still developing, rather than wait until a finished design needs to be reconsidered. That gives us room to challenge decisions, explore alternatives and refine the direction before too much time has been invested.")}</p>
          <p>{tp("At handover, I provide the agreed deliverables and documentation, along with the working files the team needs to carry on.")}</p>
        </FadeIn>

        <FadeIn as="div" className="mt-16 flex max-w-[62ch] flex-col gap-3 text-[1.0625rem] leading-[1.75] text-muted-foreground">
          <h2 className="font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">Practical details</h2>
          <p>{tp("Based in Cairo, relocating to Europe. Available within 30 days. Remote work can start straight away, as a contractor or through an employer of record; on-site roles in the UK or EU will need sponsorship.")}</p>
        </FadeIn>

        <FadeIn as="div" className="mt-16 flex flex-col items-start gap-5">
          <p className="text-lg text-foreground">{tp("Tell me about the project, the team or the problem you’re working through.")}</p>
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
