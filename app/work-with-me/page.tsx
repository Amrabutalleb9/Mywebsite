import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import CalendlyButton from "@/components/calendly-button"
import { CleanTestimonial } from "@/components/ui/clean-testimonial"

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
    price: "$4,000\u2013$8,000/\u00A0month",
    terms: "3-month\u00A0minimum",
  },
  {
    title: "Brand & Product Launch Sprint",
    price: "$8,000\u2013$20,000",
    terms: "4\u20138\u00A0weeks",
  },
  {
    title: "Conversion & UX Audit",
    price: "$1,500\u2013$3,500",
    terms: "5\u20137\u00A0business days",
  },
]

const testimonials = [
  { text: "Amr delivered beyond expectations. The brand identity he created captured our vision perfectly and translated seamlessly across every touchpoint. His strategic thinking elevated the entire\u00A0project.", author: "Overpowered Agency", location: "UK", role: "Brand Identity" },
  { text: "Very professional and created me an\u00A0amazing design.", author: "Elliot", location: "London, UK", role: "Apparel Design" },
  { text: "Fantastic work and great communication. Very happy with the outcome of\u00A0report from a\u00A0layout and a\u00A0branding perspective.", author: "Paul", location: "Melbourne, Australia", role: "Branding" },
  { text: "Amr assisted me in\u00A0a very challenging Art/Crime book project I authored. Very professional work and his continual ongoing communications and proferred insights were invaluable. I highly recommend\u00A0him.", author: "Steven Hodel", location: "Blaine, United States", role: "Book Design" },
  { text: "So professional, on\u00A0time, high level of\u00A0skills and capabilities\u2026 don\u2019t waste your time and assign him your work, I didn\u2019t see anything with his level of\u00A0accountability.", author: "Ahmed", location: "Khobar, KSA", role: "Branding" },
  { text: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in\u00A0a detailed explanation. He went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales\u00A0funnel.", author: "Robert", location: "Melbourne, Australia", role: "Funnel Copywriting & Design" },
  { text: "Dude he is the greatest of\u00A0all time.", author: "Mazen", location: "Qassim, Saudi Arabia", role: "Architecture Portfolio Design" },
  { text: "Amr was able to\u00A0discuss different options with me and working together with adjustments was able to\u00A0create photorealistic expressions on\u00A0my character. Great job. High quality\u00A0stuff!", author: "Alex", location: "Melbourne, Australia", role: "Character Design" },
  { text: "Outstanding collaboration! Amr was extremely professional, fast, and precise. He quickly understood the project requirements and delivered flawless work on time. Communication was smooth, he was always available, and paid great attention to detail. Highly recommended!", author: "Stefano", location: "Valencia, Spain", role: "Website Design" },
  { text: "He is Extraordinary! Way beyond anything I expected. Amr is\u00A0very talented, knowledgeable, professional, and competent. Communication in\u00A0english is\u00A0excellent. Prompt to\u00A0resolve any issues. Goes beyond the expected for customer\u00A0satisfaction.", author: "Augustina", location: "Herning, Denmark", role: "Website Design" },
  { text: "Great UI/UX designer, quick delivery and clear communication. Highly recommend working with\u00A0him!", author: "Stefano", location: "Sydney, Australia", role: "Head of UX, Freelancer.com" },
  { text: "Is there a\u00A0god or\u00A0do angels exist? We have been thru hell with 4\u00A0previous freelancers for 2\u00A0years. All 4 were unable to\u00A0complete the work. Enter Amr. He is\u00A0highly intelligent, genuine and lovely. He has integrity, is extremely skilled, has good aesthetic sense and importantly, a\u00A0great sense of\u00A0humour!", author: "Dipa", location: "Singapore", role: "Website Design" },
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

export default function WorkWithMePage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">

      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl">
        <FadeIn>
          <h1 className="mb-8 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            Senior creative direction for brands and products that need to&nbsp;perform.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mb-4 max-w-[60ch] leading-relaxed text-muted-foreground">
            I take on select creative direction engagements alongside my leadership work, typically with startups launching products, companies entering new markets, or&#160;agencies that need senior creative firepower without a&#160;full-time&#160;hire.
          </p>
          <p className="mb-10 max-w-[60ch] leading-relaxed text-muted-foreground">
            {"If you\u2019re looking for\u00A0someone who leads strategy and teams, not just pushes pixels .. let\u2019s\u00A0talk."}
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
              <strong className="font-semibold text-foreground">13+</strong> years of&nbsp;creative direction across <strong className="font-semibold text-foreground">6</strong> countries. Currently leading a&nbsp;team of&nbsp;<strong className="font-semibold text-foreground">25</strong>. An engineering degree that means I speak business and product as&nbsp;fluently as&nbsp;I speak&nbsp;design.
            </p>
            <p>
              Recent work has delivered a&nbsp;<strong className="font-semibold text-foreground">12%</strong> sales increase with zero ad spend, a&nbsp;<strong className="font-semibold text-foreground">70%</strong> lift in&nbsp;social engagement, and a&nbsp;unified brand system across <strong className="font-semibold text-foreground">3</strong> international markets, built in&nbsp;<strong className="font-semibold text-foreground">2</strong>&nbsp;months.
            </p>
            <p>
              {"I\u2019ve worked across branding, UI/UX, campaign strategy, product design, editorial, and packaging. The common thread is\u00A0always the same: strategy first, then craft, then results you can\u00A0measure."}
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
                Ongoing creative leadership without the overhead of&nbsp;a full-time hire. I plug into&nbsp;your team, run creative reviews, direct campaigns, maintain brand consistency, and join weekly strategy calls. The same way I lead teams of&nbsp;7 to&nbsp;25&nbsp;in-house.
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
                Companies launching products. Brands entering new markets, especially MENA. Teams going through a&nbsp;rebrand who need strategic creative direction, not just a&nbsp;new&nbsp;logo.
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
              {"Most of\u00A0my engagements start with an\u00A0audit or\u00A0a single sprint and grow from there. The Agfin project started as\u00A0a request for minor website fixes. It\u00A0became a full redesign and sales funnel that drove a\u00A012% revenue increase in\u00A0month one. The Split engagement started when I rewrote a\u00A0flawed development quotation. It\u00A0became a complete product redesign with new revenue-generating features. I don\u2019t chase scope creep. But\u00A0when the work proves its value, the relationship tends to\u00A0deepen\u00A0naturally."}
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
          <CleanTestimonial testimonials={testimonials} />
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
            Have a&nbsp;project in&nbsp;mind?
          </h2>
          <p className="mx-auto mb-10 max-w-md leading-relaxed text-muted-foreground">
            {"Whether it\u2019s a\u00A0brand launch, a\u00A0product redesign, or\u00A0ongoing creative leadership, I\u2019d like to\u00A0hear about it. Book a\u00A0call and\u00A0let\u2019s see if\u00A0there\u2019s a\u00A0fit."}
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
