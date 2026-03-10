import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import CalendlyButton from "@/components/calendly-button"
import TestimonialCarousel from "@/components/testimonial-carousel"

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Senior creative direction for brands and products that need to perform. Fractional CD, brand sprints, and UX audits.",
  alternates: { canonical: "/work-with-me" },
  openGraph: {
    title: "Work With Me · Amr Abu-Talleb",
    description: "Senior creative direction for brands and products that need to perform. Fractional CD, brand sprints, and UX audits.",
    type: "website",
    url: "https://amrabutalleb.com/work-with-me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work With Me · Amr Abu-Talleb",
    description: "Senior creative direction for brands and products that need to perform. Fractional CD, brand sprints, and UX audits.",
  },
}

const offers = [
  {
    title: "Fractional Creative Director",
    price: "$4,000\u2013$8,000/month",
    terms: "3-month minimum",
  },
  {
    title: "Brand & Product Launch Sprint",
    price: "$8,000\u2013$20,000",
    terms: "4\u20138 weeks",
  },
  {
    title: "Conversion & UX Audit",
    price: "$1,500\u2013$3,500",
    terms: "5\u20137 business days",
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
      "Within 48 hours, you receive a clear proposal: scope, deliverables, timeline, and investment. No hidden fees, no vague line\u00A0items.",
  },
  {
    num: "03",
    title: "Kickoff",
    description:
      "We start. I work fast, communicate clearly, and deliver on every commitment. You\u2019ll know exactly where things stand at every\u00A0stage.",
  },
]

export default function WorkWithMePage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">

      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl">
        <FadeIn>
          <h1 className="mb-8 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-tight text-foreground">
            Senior creative direction for brands and products that need to perform.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mb-4 max-w-[60ch] leading-relaxed text-muted-foreground">
            I take on select creative direction engagements alongside my leadership work, typically with startups launching products, companies entering new markets, or agencies that need senior creative firepower without a full-time hire.
          </p>
          <p className="mb-10 max-w-[60ch] leading-relaxed text-muted-foreground">
            {"If you\u2019re looking for someone who leads strategy and teams, not just pushes pixels .. let\u2019s\u00A0talk."}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <CalendlyButton />
        </FadeIn>
      </section>

      {/* ── What I Bring ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <h2 className="mb-10 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
            What I Bring to the Table
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex max-w-[60ch] flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              <strong className="font-semibold text-foreground">13+</strong> years of creative direction across <strong className="font-semibold text-foreground">6</strong> countries. Currently leading a team of&nbsp;<strong className="font-semibold text-foreground">25</strong>. An engineering degree that means I speak business and product as fluently as I speak&nbsp;design.
            </p>
            <p>
              Recent work has delivered a <strong className="font-semibold text-foreground">12%</strong> sales increase with zero ad spend, a <strong className="font-semibold text-foreground">70%</strong> lift in social engagement, and a unified brand system across <strong className="font-semibold text-foreground">3</strong> international markets, built in <strong className="font-semibold text-foreground">2</strong>&nbsp;months.
            </p>
            <p>
              {"I\u2019ve worked across branding, UI/UX, campaign strategy, product design, editorial, and packaging. The common thread is always the same: strategy first, then craft, then results you can\u00A0measure."}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── How We Can Work Together ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <h2 className="mb-14 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
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
                Ongoing creative leadership without the overhead of a full-time hire. I plug into your team, run creative reviews, direct campaigns, maintain brand consistency, and join weekly strategy calls. The same way I lead teams of 7 to 25&nbsp;in-house.
              </p>
              <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground/70">
                <span className="font-medium text-foreground/60">Best for: </span>
                Startups with a design team but no creative leadership. Agencies that need senior direction on key&nbsp;accounts.
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
                A focused engagement covering everything from brand strategy and visual identity to digital platform design and launch campaign direction. One sprint, full creative ownership, measurable&nbsp;outcomes.
              </p>
              <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground/70">
                <span className="font-medium text-foreground/60">Best for: </span>
                Companies launching products. Brands entering new markets, especially MENA. Teams going through a rebrand who need strategic creative direction, not just a new&nbsp;logo.
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
                A deep-dive audit of your website, app, or digital product. I review UX architecture, messaging, conversion paths, and visual design, then deliver a prioritised strategy document with specific recommendations you can act on&nbsp;immediately.
              </p>
              <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground/70">
                <span className="font-medium text-foreground/60">Best for: </span>
                {"Any company whose digital presence isn\u2019t converting the way it should. This is also how most of my longer engagements begin. The audit shows what\u2019s possible, and the work grows from\u00A0there."}
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
              {"Most of my engagements start with an audit or a single sprint and grow from there. The Agfin project started as a request for minor website fixes. It became a full redesign and sales funnel that drove a 12% revenue increase in month one. The Split engagement started when I rewrote a flawed development quotation. It became a complete product redesign with new revenue-generating features. I don\u2019t chase scope creep. But when the work proves its value, the relationship tends to deepen\u00A0naturally."}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── What Clients Say ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <h2 className="mb-14 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
            What Clients Say
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <TestimonialCarousel />
        </FadeIn>
      </section>

      {/* ── How It Works ── */}
      <section className="mx-auto mt-32 max-w-3xl">
        <FadeIn>
          <h2 className="mb-14 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
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
          <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight text-foreground">
            Have a project in mind?
          </h2>
          <p className="mx-auto mb-10 max-w-md leading-relaxed text-muted-foreground">
            {"Whether it\u2019s a brand launch, a product redesign, or ongoing creative leadership, I\u2019d like to hear about it. Book a call and let\u2019s see if there\u2019s a\u00A0fit."}
          </p>
          <div className="flex flex-col items-center gap-4">
            <CalendlyButton />
            <p className="text-sm text-muted-foreground">
              Or email me directly:{" "}
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
