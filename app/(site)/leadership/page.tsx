import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"
import { tp } from "@/lib/typeset"

export const metadata: Metadata = pageMeta({
  title: "How I Run a Team · Amr Abu-Talleb, Creative Director",
  description:
    "How Amr Abu-Talleb runs creative teams: briefs, reviews, visible workflows, hiring, standards and the business around the work.",
  path: "/leadership",
})

const sections = [
  {
    title: tp("Before the work starts"),
    summary: tp("Every brief starts with the problem, the audience and the constraints."),
    body: [
      tp("Every brief needs to establish what we’re trying to achieve, who the work is for and what constraints we’re working within. I want the team to understand the problem before it starts producing solutions."),
      tp("I assign work according to people’s strengths and capacity, and plan for how many rounds of exploration and refinement a project needs. Priorities, deadlines and responsibilities should be clear from the start, with enough flexibility to respond when the work reveals something we hadn’t considered."),
      tp("At an agency, that also means being clear about where responsibility sits across disciplines. Art directors need room to lead their teams, and everyone involved needs to know who owns each decision."),
    ],
  },
  {
    title: tp("Reviews are part of the work"),
    summary: tp("Work is reviewed every two or three days, and I speak last."),
    body: [
      tp("The team reviews work every two or three days. That gives us a chance to challenge an idea, correct the direction or find a stronger solution while there’s still time to act on it."),
      tp("Designers present their work and explain their decisions first. The art directors guide the discussion, and I speak last. I want to hear the reasoning before giving my view, and I don’t want people learning to guess what I would choose."),
      tp("I step in when the work drifts from the brief, the brand, what users need or what makes sense for the client’s business. Feedback should explain what isn’t working and why, so the next version is better rather than simply different."),
    ],
  },
  {
    title: tp("Make the work visible"),
    summary: tp("Anyone should be able to see where a project stands and who owns the next step."),
    body: [
      tp("People shouldn’t have to chase colleagues to find out where a project stands or who owns the next step."),
      tp("At Overpowered, I introduced a shared workflow using Google Workspace, Slack and Trello. Conversations were organised by discipline and client, and weekly Trello boards made tasks, owners, deadlines and workloads visible. The whole team met weekly, I checked in with the art directors every two days, and work was reviewed every few days."),
      tp("The tools matter less than the habits around them. Everyone needs access to the right information, and the process should make it easier to collaborate, spot delays and solve problems early."),
    ],
  },
  {
    title: tp("Hiring and growing people"),
    summary: tp("More than fifty people hired. Some now lead teams of their own."),
    body: [
      tp("I’ve hired more than fifty people. I look for integrity, curiosity and a willingness to learn alongside the skills the role needs. Craft matters, but so does how someone approaches a problem, explains a decision and takes feedback."),
      tp("I write the hiring test myself. At Overpowered, candidates worked on a brief for a premium olive-oil brand built around Arabic calligraphy. It showed how they read a market, handled typography, developed a visual direction and presented their thinking."),
      tp("Hiring is only part of the job. At Overpowered, I promoted a designer to Art Director once he was already carrying much of that responsibility, and some of the people I’ve hired over the years now lead teams of their own. I want people to develop their own judgement and take on more over time. A team shouldn’t need its creative director to approve every detail to do good work."),
    ],
  },
  {
    title: tp("The standard"),
    summary: tp("Specific, written feedback the team can apply without me."),
    body: [
      tp("When my team prepares a case study, I review the reasoning behind the work: the positioning, the personas, the research and what testing showed. The final presentation should make the decisions understandable, not just display the finished screens."),
      tp("I also check the details that affect the quality of the result. Typography needs attention, placeholder copy needs replacing, and contrast needs to meet accessibility requirements. My feedback is specific and written down, so designers can work through revisions without another meeting to clarify every point."),
      tp("The aim isn’t to make every piece of work look as though I made it. It’s to set a standard the team understands and can apply on its own."),
    ],
  },
  {
    title: tp("The business around the work"),
    summary: tp("Creative leadership includes the decisions that pay for the work."),
    body: [
      tp("Creative work is shaped by the decisions around it: how a business positions itself, what it promises clients, how projects are scoped and where its resources go."),
      tp("At Overpowered, I developed the agency’s positioning, go-to-market plan and outreach system. I also reworked the scope and cost of a fitness platform before design began, which turned a $4,000 brief into an $8,000 agreement for the first two stages. The CEO made the budget calls; my job was to give him the options, the costs and a clear recommendation."),
      tp("I see that as part of creative leadership. The work needs a clear direction, and the business needs to understand what that direction requires."),
    ],
  },
]

const stats = [
  { n: "25", label: tp("People in my largest team") },
  { n: "50+", label: tp("People hired") },
  { n: "2–3", label: tp("Days between reviews") },
]

const slug = (t: string) => t.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "")

export default function LeadershipPage() {
  return (
    <main className="px-8 pt-32 lg:px-16 lg:pt-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">

        {/* Left: title, contents and stats, sticky on desktop */}
        <div>
          <div className="lg:sticky lg:top-32">
            <FadeIn>
              <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Leadership</p>
              <h1 className="mb-10 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
                {tp("How I run a creative team")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.05} as="nav" aria-label="On this page" className="hidden border-b border-border lg:block">
              {sections.map((sec, i) => (
                <a key={sec.title} href={`#${slug(sec.title)}`} className="flex gap-4 border-t border-border py-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-xs font-semibold tracking-[var(--tracking-sublabel)] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {sec.title}
                </a>
              ))}
            </FadeIn>
          </div>
        </div>

        {/* Right: intro and numbered chapters */}
        <div className="min-w-0">
          <FadeIn delay={0.1} as="div" className="mb-12 flex max-w-[60ch] flex-col gap-6">
            <p className="text-xl leading-relaxed text-foreground">{tp("Most of my job is building the system the work runs through. That means setting priorities, assigning responsibility, reviewing decisions, and giving people a clear understanding of what they’re working towards.")}</p>
            <p className="text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground">{tp("My experience ranges from an eleven-person in-house brand and marketing team at The Line to Overpowered, where the agency grew from six people to twenty-five across five disciplines in seven months. I managed UX/UI directly, while two art directors led the other creative disciplines. I’ve also led teams spanning design, product, video, support and PR, often with five or six projects live at once.")}</p>
            <p className="text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground">{tp("The setup changes from one team to the next, but the aim stays the same: clear responsibilities, good communication, and room for people to do their best work.")}</p>
          </FadeIn>

          <FadeIn as="div" className="mb-4 grid grid-cols-3 border-t border-border">
            {stats.map((st, i) => (
              <div key={st.n} className={`py-6 ${i > 0 ? "border-l border-border pl-6" : ""}`}>
                <p className="font-serif text-[2.5rem] leading-none tracking-tight text-foreground">{st.n}</p>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{st.label}</p>
              </div>
            ))}
          </FadeIn>

          {sections.map((sec, i) => (
            <FadeIn key={sec.title} as="section" id={slug(sec.title)} className="scroll-mt-32 border-t border-border py-14">
              <div className="flex items-baseline gap-6">
                <span aria-hidden="true" className="font-serif text-[3.5rem] leading-none text-accent/30">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-serif text-[length:var(--text-sub)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">{sec.title}</h2>
              </div>
              <p className="mt-5 max-w-[60ch] text-lg font-medium leading-snug text-foreground">{sec.summary}</p>
              <div className="mt-5 flex max-w-[60ch] flex-col gap-5 text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground">
                {sec.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Ending: light band, so it sits apart from the black footer */}
      <section className="-mx-8 mt-24 bg-surface px-8 py-24 lg:-mx-16 lg:mt-32 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-24">
          <FadeIn>
            <p className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">The aim</p>
          </FadeIn>
          <FadeIn as="div">
            <p className="max-w-[22ch] font-serif text-[length:var(--text-section)] leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("A team shouldn’t need its creative director to approve every detail to do good work.")}
            </p>
            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[var(--leading-longform)] text-muted-foreground">
              {tp("I’m interested in creative leadership roles where the quality of the work, the way the team operates and the needs of the business are treated as part of the same job.")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/work/overpowered"
                className="cta-btn cta-btn-filled inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-8 py-3.5 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase"
              >
                The Overpowered case&nbsp;study
                <ArrowUpRight size={14} className="cta-arrow" />
              </Link>
              <Link href="/projects" className="text-link inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground uppercase">
                See all the&nbsp;work
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
