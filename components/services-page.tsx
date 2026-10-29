"use client"

import { useId, useRef, useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { submitContactForm } from "@/lib/contact"
import { tp } from "@/lib/typeset"

const CALENDLY = "https://calendly.com/amrabutalleb/one-on-one"
const EMAIL = "hello@amrabutalleb.com"

const field =
  "mt-2 w-full border-0 border-b border-input-strong bg-transparent py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] duration-300 focus:border-accent-text focus:shadow-[0_1px_0_var(--accent-text)]"

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
  "You run an agency, and a pitch or a big account needs a senior creative director you don’t have the time to hire.",
]

const reviewTiers = [
  {
    name: "Review + plan",
    price: "$2,500",
    detail: "The Full review, plus a 90-day creative plan and two follow-up reviews within 30 days",
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
    name: "Launch + product",
    price: "$8,000",
    detail: "Everything in Launch, plus UI direction for up to about 12 key app or dashboard screens and 30 days of reviews after launch",
  },
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

const work = [
  {
    title: "Overpowered",
    line: "A London agency. With the CEO we narrowed six service areas to three, and I directed the new identity.",
    result: "The team grew from 6 to about 25 in 7 months.",
    href: "/work/overpowered",
    image: "/images/op-hero-loop-poster-v1.webp",
    alt: "The OP logomark as a giant glass sculpture floating above a hill",
  },
  {
    title: "The Line Real Estate",
    line: "A rebrand for high-value buyers with an in-house team of about 11.",
    result: "Client engagement rose 57%.",
  },
  {
    title: "Agfin",
    line: "A website and sales funnel for farming families in regional Australia.",
    result: "+12% client wins in the first month (2024), with no paid advertising.",
    href: "/work/agfin",
    image: "/images/agfin-feature-v3.webp",
    alt: "Agfin homepage hero: morning cloud clearing over a Wimmera paddock",
  },
  {
    title: "Bay Area Trips",
    line: "A US travel platform built with a team of about 30.",
    result: "Most of the ideas were the same idea, so they became one directory across web, mobile web and app.",
    href: "/work/bay-area-trips",
    image: "/images/bay-hero-loop-poster-v2.webp",
    alt: "The Bay Area Trips website and two app screens on a cream studio set in late-afternoon light",
  },
  {
    title: "As Within, So Without",
    line: "A 212-page book for Steve Hodel, with more than 130 archival images.",
    result: "On sale on Amazon.",
    href: "/work/steve-hodel",
    image: "/images/steve-hodel-feature-v2.webp",
    alt: "Chapter Ten spread of As Within, So Without, with an archival portrait facing the chapter title",
  },
]

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
    a: "Good. The Seat isn’t another designer. It’s the person who decides what’s right before it ships and gives your designer a clear direction to work from.",
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
        <li key={tier.name} className="grid grid-cols-1 gap-3 border-t border-border py-8 sm:grid-cols-[minmax(14rem,0.7fr)_1.4fr] sm:gap-12">
          <div>
            <h4 className="font-serif text-2xl font-normal leading-snug tracking-tight text-foreground">{tp(tier.name)}</h4>
            <p className="mt-2 text-sm tracking-wide text-muted-foreground">{tp(tier.price)}</p>
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
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="flex items-center px-8 py-4 lg:px-16">
          <p className="text-lg font-bold tracking-tight text-foreground lg:text-xl">Amr Abu-Talleb</p>
        </div>
      </header>

      <main id="main-content" className="pt-32 pb-8 lg:pt-32">
        <section className="wrap">
          <FadeIn>
            <h1 className="max-w-[16ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              {tp("Senior creative direction, without the full-time hire")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              {tp("I’m Amr Abu-Talleb, a Fractional Creative Director in Cairo. I’ve spent 13 years in brand, campaigns and digital product, leading teams of up to 25 across 8 markets. I work with startups and agencies who need the brand, the deck, the site and the product to look like one company.")}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <ReviewButton onClick={startReview} />
              <FitCall primary={false} />
            </div>
          </FadeIn>
        </section>

        <section className="wrap mt-32" aria-labelledby="who-heading">
          <FadeIn>
            <h2 id="who-heading" className="max-w-[16ch] font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("Usually, one of these is true")}
            </h2>
          </FadeIn>
          <ol className="mt-12 max-w-3xl">
            {who.map((item, i) => (
              <FadeIn key={item} as="li" className="flex gap-6 border-t border-border py-8 sm:gap-8">
                <span aria-hidden="true" className="font-serif text-3xl leading-none text-accent/30 lg:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-[60ch] leading-relaxed text-muted-foreground">{tp(item)}</p>
              </FadeIn>
            ))}
          </ol>
        </section>

        <section className="wrap mt-32" aria-labelledby="offers-heading">
          <FadeIn>
            <h2 id="offers-heading" className="max-w-[16ch] font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("Three ways to work with me")}
            </h2>
          </FadeIn>

          <article className="mt-16 border-t border-border pt-12">
            <FadeIn>
              <p className="mb-3 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Design review</p>
              <h3 className="max-w-[22ch] font-serif text-2xl font-normal leading-snug tracking-tight text-foreground lg:text-3xl">
                {tp("Find out what’s holding the work back before you redesign it")}
              </h3>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("I go through your brand, deck, site or app flow, tell you what’s costing you credibility, and say what to fix first. It’s written and async. You send links and answer five questions, and you don’t need a call.")}
              </p>
            </FadeIn>
            <TierList tiers={reviewTiers} />
            <p className="mt-8 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              {tp("Intro prices for the first two clients; planned $3,000 / $1,500 / $600.")}
            </p>
            <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              {tp("If you start a Launch sprint or a Seat within 30 days, the full review fee comes off it.")}
            </p>
            <div className="mt-12">
              <ReviewButton onClick={startReview} />
            </div>
          </article>

          <article className="mt-24 border-t border-border pt-12">
            <FadeIn>
              <p className="mb-3 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Launch sprint</p>
              <h3 className="max-w-[22ch] font-serif text-2xl font-normal leading-snug tracking-tight text-foreground lg:text-3xl">
                {tp("The brand, the deck and the site from one system, before your date")}
              </h3>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("For a raise, a launch or a new market. One kickoff questionnaire, two review points, one decision-maker, and a fixed date inside 2–3 weeks.")}
              </p>
            </FadeIn>
            <TierList tiers={sprintTiers} />
            <p className="mt-8 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              {tp("Intro prices for the first two clients; planned $10,000 / $6,000 / $3,000.")}
            </p>
            <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              {tp("You see two directions at the first review. If neither works for you, I do a third at no charge. Design only; development is quoted separately. Two rounds of changes per item, and anything outside scope is quoted at a fixed price.")}
            </p>
            <div className="mt-12">
              <FitCall />
            </div>
          </article>

          <article className="mt-24 border-t border-border pt-12">
            <FadeIn>
              <p className="mb-3 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Fractional CD seat</p>
              <h3 className="max-w-[20ch] font-serif text-2xl font-normal leading-snug tracking-tight text-foreground lg:text-3xl">
                {tp("A creative lead for your team, a few hours a week")}
              </h3>
              <p className="mt-6 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("I review everything going out, set the direction and write the briefs for your team or freelancers. Reviews start in the first week.")}
              </p>
            </FadeIn>
            <TierList tiers={seatTiers} />
            <p className="mt-8 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              {tp("Intro prices for the first two clients; planned $7,500 / $4,500 / $3,000.")}
            </p>
            <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              {tp("Three-month minimum, paid monthly in advance, and hours don’t roll over. After the first month you can stop with no further commitment and keep everything delivered. I take two seats at a time.")}
            </p>
            <div className="mt-12">
              <FitCall />
            </div>
          </article>
        </section>

        <section className="wrap mt-32" aria-labelledby="agencies-heading">
          <FadeIn>
            <h2 id="agencies-heading" className="max-w-[18ch] font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("A senior creative director behind your agency’s name")}
            </h2>
            <div className="mt-8 flex max-w-[60ch] flex-col gap-6 leading-relaxed text-muted-foreground">
              <p>
                {tp("For pitches, a big account, or when your CD is stretched. I work under your agency’s name on a Review seat or a Creative Lead Seat, or take on a Launch sprint as a subcontract. Your client sees your agency. I don’t show the work, post about it or put it in a portfolio without your OK.")}
              </p>
              <p>
                {tp("Most recently I was Creative Director at Overpowered, a London agency, where the team grew from 6 to about 25 people in 7 months and I led the identity. I work in English and Arabic, which helps on Gulf accounts.")}
              </p>
            </div>
            <div className="mt-12">
              <FitCall />
            </div>
          </FadeIn>
        </section>

        <section className="wrap mt-32" aria-labelledby="pieces-heading">
          <FadeIn>
            <h2 id="pieces-heading" className="max-w-[16ch] font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("Single pieces, done properly")}
            </h2>
          </FadeIn>
          <div className="mt-12 max-w-3xl">
            {pieces.map((piece) => (
              <FadeIn key={piece.title} className="border-t border-border py-8">
                <h3 className="font-serif text-2xl font-normal leading-snug tracking-tight text-foreground">{tp(piece.title)}</h3>
                <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground">{tp(piece.text)}</p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12">
            <ReviewButton label="Send me what you have" onClick={startReview} />
          </div>
        </section>

        <section className="wrap mt-32" aria-labelledby="work-heading">
          <FadeIn>
            <h2 id="work-heading" className="font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("Some of the work")}
            </h2>
          </FadeIn>
          <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {work.map((item) => {
              const body = (
                <>
                  {item.image ? (
                    <div className="overflow-hidden rounded-2xl bg-primary">
                      <Image
                        src={item.image}
                        alt={item.alt ?? ""}
                        width={900}
                        height={562}
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center rounded-2xl bg-surface px-8">
                      <p aria-hidden="true" className="font-serif text-2xl tracking-tight text-foreground/30">{item.title}</p>
                    </div>
                  )}
                  <h3 className="mt-4 font-serif text-2xl font-normal leading-snug tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">{tp(item.line)}</p>
                  <p className="mt-2 max-w-[48ch] text-sm font-medium leading-relaxed text-foreground">{tp(item.result)}</p>
                </>
              )
              return (
                <li key={item.title}>
                  {item.href ? (
                    <Link href={item.href} className="group block" data-cursor-label={`Explore ${item.title}`}>
                      <div className="[&_h3]:transition-colors group-hover:[&_h3]:text-accent">{body}</div>
                    </Link>
                  ) : (
                    <article>{body}</article>
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        <section className="wrap mt-32" aria-labelledby="how-heading">
          <FadeIn>
            <h2 id="how-heading" className="max-w-[16ch] font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("Time, calls and payment")}
            </h2>
          </FadeIn>
          <div className="mt-12 flex max-w-3xl flex-col">
            <FadeIn className="border-t border-border py-8">
              <h3 className="text-lg font-medium text-foreground">Calls</h3>
              <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground">{tp(calls[0])}</p>
            </FadeIn>
            <FadeIn className="border-t border-border py-8">
              <h3 className="text-lg font-medium text-foreground">Written feedback</h3>
              <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground">
                {tp("Written feedback comes back within one business day. Reviews are always written, so nothing waits on a call.")}
              </p>
            </FadeIn>
            <FadeIn className="border-t border-border py-8">
              <h3 className="text-lg font-medium text-foreground">Payment</h3>
              <ul className="mt-3 flex max-w-[60ch] flex-col gap-2">
                {payment.map((line) => (
                  <li key={line} className="leading-relaxed text-muted-foreground">{tp(line)}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="wrap mt-32" aria-labelledby="questions-heading">
          <FadeIn>
            <h2 id="questions-heading" className="sr-only">Questions</h2>
          </FadeIn>
          <div className="max-w-3xl">
            {faq.map((item) => (
              <FadeIn key={item.q} className="border-t border-border py-8">
                <h3 className="font-serif text-2xl font-normal leading-snug tracking-tight text-foreground">{tp(item.q)}</h3>
                <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground">{tp(item.a)}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="wrap mt-32 border-t border-border pt-16" aria-labelledby="close-heading">
          <FadeIn>
            <h2 id="close-heading" className="max-w-[14ch] font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              {tp("Tell me what’s coming up")}
            </h2>
            <p className="mt-6 max-w-[50ch] leading-relaxed text-muted-foreground">
              {tp("If you have a date, book a fit call. If you’d rather start in writing, send me what you have and I’ll tell you which option fits.")}
            </p>
            <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <FitCall />
              <ReviewButton primary={false} onClick={startReview} />
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="wrap border-t border-border py-12">
        <p className="text-sm text-muted-foreground">
          <a href={`mailto:${EMAIL}`} className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">
            {EMAIL}
          </a>
          <span aria-hidden="true">{" · "}</span>
          <span className="sr-only">, </span>
          Cairo, Egypt
        </p>
      </footer>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[min(100%-2rem,40rem)] max-h-[min(100%-2rem,44rem)] overflow-y-auto rounded-2xl border border-border bg-background p-8 text-foreground backdrop:bg-primary/50 sm:p-12"
        onClose={() => setStatus("idle")}
      >
        <div className="mb-8 flex items-start justify-between gap-6">
          <h2 id={titleId} className="font-serif text-2xl font-normal tracking-tight text-foreground lg:text-3xl">
            {tp("Start a review")}
          </h2>
          <button type="button" onClick={closeReview} className="text-foreground" aria-label="Close">
            <X size={24} />
          </button>
        </div>
        {status === "sent" ? (
          <div aria-live="polite">
            <p className="font-serif text-2xl text-foreground">Message sent.</p>
            <p className="mt-3 max-w-[46ch] leading-relaxed text-muted-foreground">
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
              <a href={`mailto:${EMAIL}`} className="text-foreground underline underline-offset-4 hover:text-accent">{EMAIL}</a>.
            </p>
            <label className="block">
              <span className="text-sm text-muted-foreground">Your name</span>
              <input name="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
            </label>
            <label className="block">
              <span className="text-sm text-muted-foreground">Email</span>
              <input name="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
            </label>
            {questions.map((q) => (
              <label key={q.name} className="block">
                <span className="text-sm text-foreground">{q.label}</span>
                {"hint" in q && q.hint ? <span className="mt-1 block text-sm text-muted-foreground">{q.hint}</span> : null}
                <textarea name={q.name} required rows={3} value={form[q.name]} onChange={(e) => setForm({ ...form, [q.name]: e.target.value })} className={`${field} resize-y`} />
              </label>
            ))}
            {status === "error" && (
              <p className="text-sm text-destructive" aria-live="polite">
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
          Email the five review questions to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </noscript>
    </>
  )
}
