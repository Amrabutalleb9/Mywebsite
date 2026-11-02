"use client"

import { useId, useRef, useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { submitContactForm } from "@/lib/contact"
import { tp } from "@/lib/typeset"
import { publishedCaseStudies } from "@/lib/projects"

const CALENDLY = "https://calendly.com/amrabutalleb/one-on-one"
const EMAIL = "hello@amrabutalleb.com"

const field =
  "mt-2 w-full border-0 border-b border-input-strong bg-transparent py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] duration-[var(--duration-fast)] focus:border-accent-text focus:shadow-[0_1px_0_var(--accent-text)]"

const questions = [
  {
    name: "look",
    label: "What should I look at?",
    hint: "Links: deck, site, app flow, brand files.",
  },
  {
    name: "now",
    label: "What’s happening in the business that makes this matter now?",
  },
  {
    name: "audience",
    label: "Who is it for, and what should they do or believe after seeing it?",
  },
  {
    name: "tried",
    label: "What have you already tried or changed?",
  },
  {
    name: "worth",
    label: "What would make this review worth it to you?",
  },
] as const

type Answers = Record<(typeof questions)[number]["name"] | "name" | "email", string>

const emptyAnswers: Answers = {
  name: "",
  email: "",
  look: "",
  now: "",
  audience: "",
  tried: "",
  worth: "",
}

const who = [
  "You’re raising or launching in the next few months, and the deck, the site and the app were made by different people at different times. It shows.",
  "You have a designer or a few freelancers, but no one decides what’s right before it goes out.",
  "You run an agency, and a pitch or a big account needs senior design work you don’t have the time to hire.",
]

const reviewTiers = [
  {
    name: "Review + plan",
    price: "$2,500",
    detail: "The Full review, plus a 90-day creative plan and 2 follow-up reviews within 30 days",
  },
  {
    name: "Full review",
    price: "$1,200",
    detail: "Brand, site and deck (or app flow) reviewed together, a prioritised fix list, and one key slide or screen redesigned as an example. 5 business days",
  },
  {
    name: "Snapshot",
    price: "$450",
    detail: "One asset, with a written teardown on annotated frames. 3 business days",
  },
]

const sprintTiers = [
  {
    name: "Launch",
    price: "$4,800",
    detail: "Identity system and guidelines, an investor or sales deck (story and design, up to 15 slides), and a landing page for desktop and mobile in Figma",
  },
  {
    name: "Focus",
    price: "$2,500",
    detail: "One surface done properly: an identity refresh with guidelines, or an investor deck, or a landing page or website design",
  },
]

const seatTiers = [
  {
    name: "Head of Creative",
    price: "$6,000 a month",
    detail: "About 8–10 hours a week. Everything in Creative Lead, plus one sprint-sized piece every month (a deck, a landing page or a campaign key visual), help with hiring (the brief, the test task, the portfolio reviews) and review of the investor decks you send out. One client at a time at this level",
  },
  {
    name: "Creative Lead",
    price: "$3,500 a month",
    detail: "About 6 hours a week. Everything in the Review seat, plus direction for one launch or campaign at a time, a monthly creative plan, design-system decisions and briefs for vendors and freelancers",
  },
  {
    name: "Review seat",
    price: "$2,500 a month",
    detail: "About 4 hours a week. A weekly review of everything going out, written feedback within one business day, and a one-page list of priorities each month",
  },
]

const pieces = [
  {
    title: "Investor and sales decks",
    text: "The story goes first, in the order an investor reads it, then the design. Charts are rebuilt so the number that matters reads first. Start with a Snapshot ($450) or the Sprint’s Focus tier ($2,500).",
  },
  {
    title: "Affirmation and card decks",
    text: "$150 per card, card back included. The first card is designed first so we agree the style before the rest: 8 cards for $1,200, 20 for $2,700, or 40 with a box and guidebook for $5,100. The card art is yours.",
  },
  {
    title: "Books",
    text: "Interiors for print and KDP, from text-heavy novels to image-rich nonfiction, with every image placed next to the passage it belongs to.",
  },
]

// Proof order: Bay Area Trips, Agfin, Overpowered, SPLT, the Hodel book. TapTools is not used as proof (Amr, 2 Nov).
// Every line is taken from the case study in lib/projects.ts. Images are the homepage card images.
const work = [
  {
    slug: "bay-area-trips",
    title: "Bay Area Trips",
    line: "One directory for members, businesses and families, built once for the website, mobile web and app.",
    result: "Taken from idea to a live product with a build team of about 30.",
    image: "/images/bay-hero-loop-poster-v2.webp",
    alt: "The Bay Area Trips website and two app screens on a cream studio set in late-afternoon light",
  },
  {
    slug: "agfin",
    title: "Agfin",
    line: "A farm adviser’s website in regional Australia, rebuilt as a story-led sales funnel.",
    result: "12% more client wins in the first month, with no paid advertising.",
    image: "/images/agfin-feature-v3.webp",
    alt: "Agfin homepage hero: morning cloud clearing over a Wimmera paddock",
  },
  {
    slug: "overpowered",
    title: "Overpowered",
    line: "A London creative and digital agency, refocused with the CEO on the clients it served best.",
    result: "I directed the new identity while its creative team grew from 6 people to about 25.",
    image: "/images/op-hero-loop-poster-v1.webp",
    alt: "The OP logomark as a giant glass sculpture floating above a hill",
  },
  {
    slug: "split",
    title: "SPLT",
    line: "The brief asked for a shop. I proposed a platform built around trainers and their members.",
    result: "One platform for members, trainers, gyms and the team running it.",
    image: "/images/split-card-v2.webp",
    alt: "SPLT trainer dashboard beside the trainer profile and subscription plans in the app",
  },
  {
    slug: "steve-hodel",
    title: "As Within, So Without",
    line: "A 212-page book for Steve Hodel, with more than 130 archival images.",
    result: "On sale on Amazon.",
    image: "/images/steve-hodel-feature-v2.webp",
    alt: "Chapter Ten spread of As Within, So Without, with an archival portrait facing the chapter title",
  },
]
  // Hidden case studies (hidden: true in lib/projects.ts) drop out automatically.
  .filter((item) => publishedCaseStudies.some((p) => p.slug === item.slug))

const calls = [
  "Monday to Friday, 8:00–10:30 and 19:00–22:00 Cairo time. That’s mornings in the Gulf, early mornings and early evenings in Europe, midday on the US East Coast and mornings on the West Coast. Calendly shows it in your own time.",
]

const payment = [
  "Projects are 50% upfront and 50% on delivery.",
  "Reviews are paid upfront.",
  "Seats are paid monthly in advance.",
  "I invoice through Payoneer, or you can pay by Western Union.",
]

const faq = [
  {
    q: "Why not hire a full-time creative director?",
    a: "You might, later. A good one takes months to find. The Seat covers the gap, and on Head of Creative I’ll help you hire: the brief, the test task and the portfolio reviews.",
  },
  {
    q: "We already have a designer.",
    a: "Good. I still design the work. On a seat I also decide what’s right before it ships, and your designer gets a clear direction to work from.",
  },
  {
    q: "Can you do it cheaper?",
    a: "I can do less. Every price here has a smaller tier, and I don’t discount the same scope.",
  },
  {
    q: "Do you do development?",
    a: "Design only. I hand over clean Figma files, and a build is quoted separately.",
  },
  {
    q: "Do you do spec work or free samples?",
    a: "No. The Snapshot at $450 is the smallest way to see how I think about your work.",
  },
]

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div aria-hidden="true" className="h-px w-8 bg-accent" />
      <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">{label}</span>
    </div>
  )
}

const h2Class =
  "font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground"
const h3ServiceClass =
  "max-w-[22ch] font-serif text-2xl font-normal leading-[var(--leading-heading)] tracking-tight text-foreground lg:text-3xl"
const smallNote = "max-w-[60ch] text-sm leading-relaxed text-muted-foreground"

function FitCall({ primary = true }: { primary?: boolean }) {
  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noopener noreferrer"
      className={primary ? "btn btn-primary" : "btn btn-secondary"}
    >
      {tp("Book a 30-minute fit call")}
      <ArrowUpRight size={14} className="cta-arrow" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function ReviewButton({
  primary = true,
  label = "Start a review",
  onClick,
}: {
  primary?: boolean
  label?: string
  onClick: () => void
}) {
  return (
    <button type="button" onClick={onClick} className={primary ? "btn btn-primary" : "btn btn-secondary"}>
      {tp(label)}
      <ArrowUpRight size={14} className="cta-arrow" aria-hidden="true" />
    </button>
  )
}

function TierList({ tiers }: { tiers: { name: string; price: string; detail: string }[] }) {
  return (
    <ul className="mt-12 border-b border-border">
      {tiers.map((tier) => (
        <li key={tier.name} className="grid grid-cols-1 gap-3 border-t border-border py-8 lg:grid-cols-[minmax(14rem,0.7fr)_1.4fr] lg:gap-12">
          <div>
            <h4 className="font-serif text-2xl font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">{tp(tier.name)}</h4>
            <p className="mt-2 text-sm font-medium text-foreground">{tp(tier.price)}</p>
          </div>
          <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground">{tp(tier.detail)}</p>
        </li>
      ))}
    </ul>
  )
}

export default function ServicesPage() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const [form, setForm] = useState<Answers>(emptyAnswers)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")

  function openReview() {
    setStatus("idle")
    setError("")
    dialogRef.current?.showModal()
  }

  function closeReview() {
    dialogRef.current?.close()
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("sending")
    setError("")
    const message = [
      `Sent from https://amrabutalleb.com/services`,
      "",
      ...questions.map((q) => `${q.label}\n${form[q.name]}`),
    ].join("\n\n")
    const result = await submitContactForm({
      name: form.name,
      email: form.email,
      message,
      subject: `Design review from ${form.name}`,
    })
    if (result.success) {
      setStatus("sent")
      setForm(emptyAnswers)
    } else {
      setStatus("error")
      setError(result.error || "Something went wrong. Please email me directly.")
    }
  }

  const startReview = openReview

  return (
    <>
      {/* The site nav's bar and wordmark, without its links: this page is shared by link and stays out of the nav. */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-4 lg:px-16">
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground lg:text-xl">
            Amr Abu-Talleb
          </Link>
          {/* Wrapped because .btn sets its own display, which would override `hidden`. Desktop only, like the nav's links. */}
          <div className="hidden lg:block">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              {tp("Book a fit call")}
              <ArrowUpRight size={14} className="cta-arrow" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" className="pt-32 pb-24 lg:pb-32">
        <section className="wrap">
          <FadeIn>
            <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Services</p>
            <h1 className="max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              {tp("I design the brand, the deck and the product")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
              {tp("I’m Amr Abu-Talleb, a designer and creative director. For 13 years I’ve designed brands, decks, sites and products so they read as one company, and I’ve led teams of up to 25 when the work needed it.")}
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
              <ReviewButton onClick={startReview} />
              <FitCall primary={false} />
            </div>
          </FadeIn>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="who-heading">
          <FadeIn>
            <SectionLabel label="Who it’s for" />
            <h2 id="who-heading" className={`max-w-[20ch] ${h2Class}`}>
              {tp("Usually, one of these is true")}
            </h2>
          </FadeIn>
          <ol className="mt-12 max-w-3xl border-b border-border">
            {who.map((item, i) => (
              <FadeIn key={item} as="li" className="flex gap-6 border-t border-border py-8">
                <span aria-hidden="true" className="font-serif text-2xl leading-none text-accent-numeral select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-[60ch] leading-relaxed text-muted-foreground">{tp(item)}</p>
              </FadeIn>
            ))}
          </ol>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="offers-heading">
          <FadeIn>
            <SectionLabel label="Services" />
            <h2 id="offers-heading" className={`max-w-[20ch] ${h2Class}`}>
              {tp("Three ways to work with me")}
            </h2>
          </FadeIn>

          <article className="mt-12 border-t border-border pt-12">
            <FadeIn>
              <p className="mb-4 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/70 uppercase">Design review</p>
              <h3 className={h3ServiceClass}>
                {tp("Find out what’s holding the work back before you redesign it")}
              </h3>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("I go through your brand, deck, site or app flow, tell you what’s costing you credibility, and say what to fix first. It’s written and async. You send links and answer five questions, and you don’t need a call.")}
              </p>
            </FadeIn>
            <TierList tiers={reviewTiers} />
            <p className={`mt-8 ${smallNote}`}>
              {tp("Intro prices for the first two clients. After that, $3,000, $1,500 and $600.")}
            </p>
            <p className={`mt-2 ${smallNote}`}>
              {tp("If you start a Launch sprint or a Seat within 30 days, the full review fee comes off it.")}
            </p>
            <div className="mt-8">
              <ReviewButton onClick={startReview} />
            </div>
          </article>

          <article className="mt-24 border-t border-border pt-12">
            <FadeIn>
              <p className="mb-4 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/70 uppercase">Launch sprint</p>
              <h3 className={h3ServiceClass}>
                {tp("The brand, the deck and the site from one system, before your date")}
              </h3>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("For a raise, a launch or a new market. One kickoff questionnaire, two review points, one decision-maker, and a fixed date inside 2–3 weeks.")}
              </p>
            </FadeIn>
            <TierList tiers={sprintTiers} />
            <p className={`mt-8 ${smallNote}`}>
              {tp("Intro prices for the first two clients. After that, $10,000, $6,000 and $3,000.")}
            </p>
            <p className={`mt-2 ${smallNote}`}>
              {tp("You see two directions at the first review. If neither works for you, I do a third at no charge. Design only, and development is quoted separately. Two rounds of changes per item, and anything outside scope is quoted at a fixed price.")}
            </p>
            <div className="mt-8">
              <FitCall />
            </div>
          </article>

          <article className="mt-24 border-t border-border pt-12">
            <FadeIn>
              <p className="mb-4 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/70 uppercase">Fractional seat</p>
              <h3 className={h3ServiceClass}>
                {tp("A creative lead for your team, a few hours a week")}
              </h3>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("I review everything going out, set the direction and write the briefs for your team or freelancers. Reviews start in the first week.")}
              </p>
            </FadeIn>
            <TierList tiers={seatTiers} />
            <p className={`mt-8 ${smallNote}`}>
              {tp("Intro prices for the first two clients. After that, $7,500, $4,500 and $3,000 a month.")}
            </p>
            <p className={`mt-2 ${smallNote}`}>
              {tp("Three-month minimum, paid monthly in advance, and hours don’t roll over. After the first month you can stop with no further commitment and keep everything delivered. I take two seats at a time.")}
            </p>
            <div className="mt-8">
              <FitCall />
            </div>
          </article>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="agencies-heading">
          <FadeIn>
            <SectionLabel label="For agencies" />
            <h2 id="agencies-heading" className={`max-w-[20ch] ${h2Class}`}>
              {tp("The work, under your agency’s name")}
            </h2>
            <div className="mt-6 flex max-w-[60ch] flex-col gap-6 leading-relaxed text-muted-foreground">
              <p>
                {tp("For a pitch, a big account, or when your CD is stretched. I design under your agency’s name on a Review seat or a Creative Lead seat, or take on a Launch sprint as a subcontract. Your client sees your agency. I don’t show the work, post about it or put it in a portfolio without your OK.")}
              </p>
              <p>
                {tp("At Overpowered, a London agency, I directed the new identity while its creative team grew from 6 people to about 25. I work in English and Arabic, which helps on Gulf accounts.")}
              </p>
            </div>
            <div className="mt-8">
              <FitCall />
            </div>
          </FadeIn>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="pieces-heading">
          <FadeIn>
            <SectionLabel label="Single pieces" />
            <h2 id="pieces-heading" className={`max-w-[20ch] ${h2Class}`}>
              {tp("Single pieces, done properly")}
            </h2>
          </FadeIn>
          <div className="mt-12 max-w-3xl border-b border-border">
            {pieces.map((piece) => (
              <FadeIn key={piece.title} className="border-t border-border py-8">
                <h3 className="font-serif text-2xl font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">{tp(piece.title)}</h3>
                <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">{tp(piece.text)}</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12">
            <ReviewButton label="Send me what you have" onClick={startReview} />
          </div>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="work-heading">
          <FadeIn>
            <SectionLabel label="Work" />
            <h2 id="work-heading" className={h2Class}>
              {tp("Some of the work")}
            </h2>
          </FadeIn>
          <ul className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12">
            {work.map((item, i) => (
              <FadeIn key={item.slug} as="li" delay={i % 2 ? 0.08 : 0}>
                <Link href={`/work/${item.slug}`} className="work-card group block" data-cursor-label={`Explore ${item.title}`}>
                  <div className="work-media relative overflow-hidden rounded-2xl bg-primary">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={900}
                      height={562}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="card-img aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-[length:var(--text-sub)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                    {tp(item.title)}
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">{tp(item.line)}</p>
                  <p className="mt-4 max-w-[48ch] text-xs leading-relaxed text-accent">{tp(item.result)}</p>
                </Link>
              </FadeIn>
            ))}
          </ul>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="how-heading">
          <FadeIn>
            <SectionLabel label="How it works" />
            <h2 id="how-heading" className={`max-w-[20ch] ${h2Class}`}>
              {tp("Time, calls and payment")}
            </h2>
          </FadeIn>
          <div className="mt-12 flex max-w-3xl flex-col border-b border-border">
            <FadeIn className="border-t border-border py-8">
              <h3 className="text-lg font-medium text-foreground">Calls</h3>
              <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">{tp(calls[0])}</p>
            </FadeIn>
            <FadeIn className="border-t border-border py-8">
              <h3 className="text-lg font-medium text-foreground">{tp("Written feedback")}</h3>
              <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("Written feedback comes back within one business day. Reviews are always written, so nothing waits on a call.")}
              </p>
            </FadeIn>
            <FadeIn className="border-t border-border py-8">
              <h3 className="text-lg font-medium text-foreground">Payment</h3>
              <ul className="mt-4 flex max-w-[60ch] flex-col gap-2">
                {payment.map((line) => (
                  <li key={line} className="leading-relaxed text-muted-foreground">{tp(line)}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="questions-heading">
          <FadeIn>
            <SectionLabel label="Questions" />
            <h2 id="questions-heading" className={`max-w-[20ch] ${h2Class}`}>
              {tp("Before you book")}
            </h2>
          </FadeIn>
          <div className="mt-12 max-w-3xl border-b border-border">
            {faq.map((item) => (
              <FadeIn key={item.q} className="border-t border-border py-8">
                <h3 className="font-serif text-2xl font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">{tp(item.q)}</h3>
                <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">{tp(item.a)}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="wrap mt-32 lg:mt-48" aria-labelledby="close-heading">
          <FadeIn>
            <SectionLabel label="Next step" />
            <h2 id="close-heading" className={`max-w-[20ch] ${h2Class}`}>
              {tp("Tell me what’s coming up")}
            </h2>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
              {tp("If you have a date, book a fit call. If you’d rather start in writing, send me what you have and I’ll tell you which option fits.")}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
              <FitCall />
              <ReviewButton primary={false} onClick={startReview} />
            </div>
          </FadeIn>
        </section>
      </main>

      <footer>
        {/* bg-background keeps the focus ring in --accent-text. The global footer rule switches it to light gold, which is for the ink footer. */}
        <div className="wrap border-t border-border bg-background py-12">
          <p className="text-sm text-muted-foreground">
            <a href={`mailto:${EMAIL}`} className="link-inline">
              {EMAIL}
            </a>
            <span aria-hidden="true">{" · "}</span>
            <span className="sr-only">, </span>
            Cairo, Egypt
          </p>
        </div>
      </footer>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="m-auto w-[min(100%-2rem,40rem)] max-h-[min(100%-2rem,44rem)] overflow-y-auto rounded-2xl border border-border bg-background p-8 text-foreground backdrop:bg-primary/90 sm:p-12"
        onClose={() => setStatus("idle")}
      >
        <div className="mb-8 flex items-start justify-between gap-6">
          <h2 id={titleId} className="font-serif text-2xl font-normal leading-[var(--leading-heading)] tracking-tight text-foreground lg:text-3xl">
            {tp("Start a review")}
          </h2>
          <button type="button" onClick={closeReview} className="-m-3 p-3 text-foreground" aria-label="Close">
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        {status === "sent" ? (
          <div role="status">
            <p className="font-serif text-2xl text-foreground">{tp("Message sent.")}</p>
            <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground">
              {tp("I’ll reply in writing within one business day.")}
            </p>
            <button type="button" onClick={closeReview} className="btn btn-primary mt-8">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
              {tp("Five questions. No call. Or email me at")}{" "}
              <a href={`mailto:${EMAIL}`} className="link-inline">{EMAIL}</a>.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              <label className="block sm:flex-1">
                <span className="text-sm font-medium text-foreground">Your name</span>
                <input name="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
              </label>
              <label className="block sm:flex-1">
                <span className="text-sm font-medium text-foreground">Email</span>
                <input name="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
              </label>
            </div>
            {questions.map((q) => (
              <label key={q.name} className="block">
                <span className="text-sm font-medium text-foreground">{tp(q.label)}</span>
                {"hint" in q && q.hint ? <span className="mt-1 block text-sm text-muted-foreground">{tp(q.hint)}</span> : null}
                <textarea name={q.name} required rows={3} value={form[q.name]} onChange={(e) => setForm({ ...form, [q.name]: e.target.value })} className={`${field} resize-y`} />
              </label>
            ))}
            {status === "error" && (
              <p className="text-sm text-destructive" role="alert">
                {error}{" "}
                <a href={`mailto:${EMAIL}`} className="link-inline">{EMAIL}</a>
              </p>
            )}
            <div>
              <button type="submit" disabled={status === "sending"} className="btn btn-primary">
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        )}
      </dialog>
      <noscript>
        <p className="wrap pb-16 text-sm text-muted-foreground">
          Email the five review questions to <a href={`mailto:${EMAIL}`} className="link-inline">{EMAIL}</a>.
        </p>
      </noscript>
    </>
  )
}
