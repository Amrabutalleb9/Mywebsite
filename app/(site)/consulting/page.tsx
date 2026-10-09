import type { Metadata } from "next"
import FadeIn from "@/components/fade-in"
import CalendlyButton from "@/components/calendly-button"
import { publishedTestimonials } from "@/lib/shared-data"

const featured = publishedTestimonials.filter((t) => ["Dipa", "Robert", "Steven Hodel"].some((n) => t.author.startsWith(n))).slice(0, 3)

export const metadata: Metadata = {
  title: "Consulting",
  description: "Short creative direction engagements alongside my leadership work: fractional direction, launch sprints and UX audits.",
  alternates: { canonical: "/consulting" },
  openGraph: {
    title: "Consulting · Amr Abu-Talleb",
    description: "Fractional creative direction, launch sprints and UX audits.",
    type: "website",
    url: "https://amrabutalleb.com/consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting · Amr Abu-Talleb",
    description: "Fractional creative direction, launch sprints and UX audits.",
  },
}

const offers = [
  {
    title: "Fractional Creative Director",
    price: "\u20AC4,000\u2013\u20AC8,000 /\u00A0month",
    terms: "3-month\u00A0minimum",
  },
  {
    title: "Brand & Product Launch Sprint",
    price: "\u20AC8,000\u2013\u20AC20,000",
    terms: "4\u20138\u00A0weeks",
  },
  {
    title: "Conversion & UX Audit",
    price: "\u20AC1,500\u2013\u20AC3,500",
    terms: "5\u20137\u00A0business days",
  },
]

const processSteps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "A 30-minute conversation to understand your challenge, goals, and timeline. No pitch, no pressure. Just clarity on whether there\u2019s a\u00A0fit.",
  },
  {
    num: "02",
    title: "Proposal",
    description:
      "Within 48\u00A0hours, you receive a\u00A0clear proposal: scope, deliverables, timeline, and investment. No hidden fees, no vague line\u00A0items.",
  },
  {
    num: "03",
    title: "Kickoff",
    description:
      "We start. I work fast, communicate clearly, and deliver on\u00A0every commitment. You\u2019ll know exactly where things stand at\u00A0every\u00A0stage.",
  },
]

export default function ConsultingPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">

      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl">
        <FadeIn>
          <h1 className="mb-8 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            Senior creative direction, for a&nbsp;project or&nbsp;a&nbsp;season.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mb-4 max-w-[60ch] leading-relaxed text-muted-foreground">
            Alongside my leadership work I&nbsp;take on a&nbsp;few short engagements: startups launching a&nbsp;product, companies entering a&nbsp;new market, and agencies that need a&nbsp;senior lead on&nbsp;a&nbsp;key&nbsp;account.
          </p>
          <p className="mb-10 max-w-[60ch] leading-relaxed text-muted-foreground">
            {"Looking for a\u00A0full-time Creative Director instead? "}<a href="/contact" className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">{"Let\u2019s talk about the\u00A0role."}</a>
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <CalendlyButton />
        </FadeIn>
      </section>

      {/* ── What I Bring ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <h2 className="mb-10 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
            What I Bring to the Table
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex max-w-[60ch] flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              <strong className="font-semibold text-foreground">13</strong> years of&nbsp;creative direction across <strong className="font-semibold text-foreground">8</strong> markets, leading teams of&nbsp;up to&nbsp;<strong className="font-semibold text-foreground">25</strong>. An engineering degree, so I&nbsp;speak business and product as&nbsp;fluently as&nbsp;design, and I&nbsp;can take an&nbsp;idea from brief to&nbsp;a&nbsp;live staging build in&nbsp;days.
            </p>
            <p>
              Recent work has delivered a&nbsp;<strong className="font-semibold text-foreground">12%</strong> sales increase with zero ad spend, a&nbsp;<strong className="font-semibold text-foreground">70%</strong> lift in&nbsp;social engagement, and a&nbsp;unified brand system across <strong className="font-semibold text-foreground">3</strong> international markets, built in&nbsp;<strong className="font-semibold text-foreground">2</strong>&nbsp;months.
            </p>
            <p>
              {"I\u2019ve worked across branding, UI/UX, campaign strategy, product design, editorial and packaging. The common thread: set the system first, then let the team move\u00A0fast."}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── How We Can Work Together ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <h2 className="mb-14 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
            How We Can Work Together
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-16">

          {/* Offer 1: Fractional CD */}
          <FadeIn>
            <div className="border-t border-border pt-10">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground lg:text-3xl">
                {offers[0].title}
              </h3>
              <p className="mt-2 mb-6 text-sm tracking-wide text-muted-foreground/60">
                {offers[0].price} &middot; {offers[0].terms}
              </p>
              <p className="mb-4 max-w-[60ch] leading-relaxed text-muted-foreground">
                Ongoing creative leadership without the overhead of&nbsp;a full-time hire. I plug into&nbsp;your team, run creative reviews, direct campaigns, maintain brand consistency, and join weekly strategy calls. The same way I lead teams of&nbsp;up to&nbsp;25&nbsp;in-house.
              </p>
              <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground/70">
                <span className="font-medium text-foreground/60">Best for: </span>
                Startups with a&nbsp;design team but no&nbsp;creative leadership. Agencies that need senior direction on&nbsp;key&nbsp;accounts.
              </p>
            </div>
          </FadeIn>

          {/* Offer 2: Launch Sprint */}
          <FadeIn delay={0.08}>
            <div className="border-t border-border pt-10">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground lg:text-3xl">
                {offers[1].title}
              </h3>
              <p className="mt-2 mb-6 text-sm tracking-wide text-muted-foreground/60">
                {offers[1].price} &middot; {offers[1].terms}
              </p>
              <p className="mb-4 max-w-[60ch] leading-relaxed text-muted-foreground">
                A focused engagement covering everything from brand strategy and visual identity to&nbsp;digital platform design and launch campaign direction. One sprint, full creative ownership, measurable&nbsp;outcomes.
              </p>
              <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground/70">
                <span className="font-medium text-foreground/60">Best for: </span>
                Companies launching products. Brands entering new markets. Teams going through a&nbsp;rebrand who need a&nbsp;system, not a&nbsp;new&nbsp;logo.
              </p>
            </div>
          </FadeIn>

          {/* Offer 3: UX Audit */}
          <FadeIn delay={0.16}>
            <div className="border-t border-border pt-10">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground lg:text-3xl">
                {offers[2].title}
              </h3>
              <p className="mt-2 mb-6 text-sm tracking-wide text-muted-foreground/60">
                {offers[2].price} &middot; {offers[2].terms}
              </p>
              <p className="mb-4 max-w-[60ch] leading-relaxed text-muted-foreground">
                A deep-dive audit of&nbsp;your website, app, or&nbsp;digital product. I review UX architecture, messaging, conversion paths, and visual design, then deliver a&nbsp;prioritised strategy document with specific recommendations you can act on&nbsp;immediately.
              </p>
              <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground/70">
                <span className="font-medium text-foreground/60">Best for: </span>
                {"Any company whose digital presence isn\u2019t converting the way it should. This is also how most of\u00A0my longer engagements begin. The audit shows what\u2019s possible, and the work grows from\u00A0there."}
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── The Natural Path ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <div className="border-l-2 border-border pl-8">
            <p className="max-w-[60ch] leading-relaxed text-muted-foreground">
              {"Most of\u00A0my engagements start with an\u00A0audit or\u00A0a single sprint and grow from there. The Agfin project started as\u00A0a request for minor website fixes. It\u00A0became a full redesign and sales funnel that drove a\u00A012% sales increase in\u00A0month one. The SPLT engagement started when I rewrote a\u00A0flawed development quotation. It\u00A0became a complete product redesign with new revenue-generating features. I don\u2019t chase scope creep. But\u00A0when the work proves its value, the relationship tends to\u00A0deepen\u00A0naturally."}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── What Clients Say ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <h2 className="mb-14 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
            What Clients Say
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className="flex flex-col gap-10">
            {featured.map((t) => (
              <li key={t.author} className="border-t border-border pt-8">
                <blockquote className="font-serif text-2xl leading-snug font-normal tracking-tight text-foreground">
                  {"\u201C"}{t.text}{"\u201D"}
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-foreground">{t.author}</p>
                <p className="mt-1 text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-sublabel)] text-muted-foreground uppercase">{t.role} &middot; {t.location}</p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* ── How It Works ── */}
      <section className="mx-auto mt-16 max-w-3xl">
        <FadeIn>
          <h2 className="mb-14 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
            How It Works
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-12">
          {processSteps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.08}>
              <div className="flex gap-8">
                <span className="shrink-0 font-serif text-3xl font-normal text-muted-foreground/20 lg:text-4xl">
                  {step.num}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="max-w-[50ch] leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="mx-auto mt-32 max-w-3xl border-t border-border pt-16 text-center">
        <FadeIn>
          <h2 className="mb-6 font-serif text-[length:var(--text-section)] font-normal tracking-tight text-foreground">
            {"Need a\u00A0senior creative lead for a\u00A0project?"}
          </h2>
          <p className="mx-auto mb-10 max-w-md leading-relaxed text-muted-foreground">
            {"Tell me what you\u2019re working on. I\u00A0reply within 24\u00A0hours."}
          </p>
          <div className="flex flex-col items-center gap-4">
            <CalendlyButton />
            <p className="text-sm text-muted-foreground">
              Or&nbsp;email me directly:{" "}
              <a href="mailto:hello@amrabutalleb.com" className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">
                hello@amrabutalleb.com
              </a>
            </p>
          </div>
        </FadeIn>
      </section>

    </main>
  )
}
