import type React from "react"
import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"
import { capabilities } from "@/lib/shared-data"
import { tp } from "@/lib/typeset"
import InkScroll from "@/components/homepage/ink-scroll"
import { InfiniteGrid } from "@/components/ui/infinite-grid"

/* About, above the hero (Oct 2026, staging). The /about page was folded in here.
   Desktop (xl+): the gold line sweeps across the portrait and lands on the story spine.
   The opener SVGs share one 1440×880 coordinate space, and the spine column sits at
   x = 200 of it, so the line meets the spine at every width from 1280px up.
   Below xl the portrait stacks above the text and the spine runs down the left edge. */

const CV = "/Amr_AbuTalleb_CV_Creative_Director.pdf"
const LINKEDIN = "https://www.linkedin.com/in/abutalleb/"
const EMAIL = "hello@amrabutalleb.com"
const PORTRAIT = "/images/amr-portrait-v3.webp"

const story = [
  {
    img: "/images/about-ink-pen-v1.webp",
    alt: "Brush-and-ink drawing of a hand flicking ink from a calligraphy pen",
    w: 760, h: 729, rot: -4, lead: true,
    text: "That eye took me from the drawing desk into design, and over thirteen years into creative direction.",
  },
  {
    img: "/images/about-ink-juggle-v2.webp",
    alt: "Halftone collage of two hands juggling a phone, a poster and a badge",
    w: 729, h: 760, rot: 3,
    text: "The work grew from single pieces into whole systems: identities, digital products, campaigns and the business decisions behind them, for clients in Egypt, the Gulf, the UK, the US, Australia and Singapore. At The Line, I led an in-house brand and marketing team of about eleven. At Overpowered, I built a creative team that grew from six people to about twenty-five in seven months.",
  },
  {
    img: "/images/about-ink-book-v1.webp",
    alt: "Brush-and-ink drawing of a detective’s fedora on an open book with a magnifying glass",
    w: 760, h: 754, rot: -2,
    text: "The details never stopped mattering as the projects grew. When I designed As Within, So Without, a 212-page book for Steve Hodel, the retired LAPD homicide detective and New York Times bestselling author, the job was the one I learned at the drawing desk: give decades of evidence and more than 130 images a structure clear enough that the reader never has to fight the page.",
  },
  {
    img: "/images/about-ink-reed-pen-v1.webp",
    alt: "Brush-and-ink drawing of a hand dipping a reed pen into an ink pot",
    w: 687, h: 760, rot: 4,
    text: "Working in Arabic and English keeps that balance honest. An identity has to feel native in both scripts and still be recognisably itself, so I treat lettering, typography and spacing as part of the idea, not as finishing touches. Art can have a character of its own; design also has to make sense to the people who meet it and to the business behind it.",
  },
  {
    img: "/images/about-ink-team-v1.webp",
    alt: "Brush-and-ink drawing of a team’s hands around printed layouts and a coffee cup",
    w: 760, h: 613, rot: -3,
    text: "The same care now goes into how a team works. I want everyone to understand what we’re trying to achieve and to have room to bring their own perspective. In reviews, the designer walks us through the work before I weigh in, and we talk about what’s working and what needs another look. I step in when a decision is difficult or the work drifts from the brief, but a good team shouldn’t have to wait for me to make a considered call. AI has become part of that process too: it gives us more ways into an idea and takes repetitive work off our desks, while the judgement about which direction is worth pursuing stays with us.",
  },
]

/* tp() loosens bound runs longer than 18 characters so big headings can't overflow.
   In these body paragraphs that loosening let a widow or a short word slip to a line end,
   so the few runs below are bound again by hand, and the paragraphs opt out of the DOM pass. */
const NB = "\u00A0"
const fixRuns = (t: string) =>
  tp(t)
    .replace(/creative[ \u00A0]direction\./, `creative${NB}direction.`)
    .replace(/and[ \u00A0]to[ \u00A0]the[ \u00A0]business/, `and${NB}to${NB}the${NB}business`)
    .replace(/and[ \u00A0]the[ \u00A0]responsibility/, `and${NB}the${NB}responsibility`)

const headingLines = [["Close", "to", "the", "craft."], ["Closer", "to", "the", "people."]]

/* The story spine: one gold rule per grid row, so it runs unbroken down the section.
   With JavaScript, InkScroll hides the rule and grows the fill span as you scroll. */
function Spine() {
  return (
    <div aria-hidden="true" data-ink-cell className="ink-cell relative ml-1 border-l-4 border-accent xl:ml-[54px] xl:border-l-[5px]">
      <span className="ink-fill" />
    </div>
  )
}

function Buttons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={CV} download className="btn btn-primary justify-center">
        Download&nbsp;CV
        <ArrowDown size={14} className="cta-arrow" />
      </a>
      <a href="#work" className="btn btn-secondary justify-center">
        View My&nbsp;Work
        <ArrowRight size={14} className="cta-arrow" />
      </a>
    </div>
  )
}

/* Two sentences, two lines: the break always falls between them, never inside one. */
function Heading({ className }: { className: string }) {
  let n = 0
  return (
    <h1 id="about-heading" className={className}>
      {headingLines.map((line, li) => (
        <span key={li} className="block sm:whitespace-nowrap">
          {line.map((w, wi) => {
            n += 1
            return (
              <span key={wi} className="hero-line inline-block" style={{ "--i": n } as React.CSSProperties}>
                {w === "Closer" ? <em className="text-accent-text italic">Closer</em> : w}
                {wi < line.length - 1 ? "\u00A0" : li === 0 ? " " : null}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

const Label = () => (
  <div className="hero-line flex items-center gap-3" style={{ "--i": 0 } as React.CSSProperties}>
    <div className="h-px w-8 bg-accent" />
    <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent-text uppercase">About</span>
  </div>
)

const lead = tp("I’m Amr Abu-Talleb. Before I directed teams, I drew Arabic calligraphy and English lettering by hand. It taught me how much the weight of a stroke or the space around a curve can change the character of a whole word, and I still look at brands, campaigns and products that way.")

export default function AboutIntro() {
  return (
    <section id="about" className="scroll-mt-20 bg-background" aria-labelledby="about-heading">
      {/* Same moving grid as the hero, so About and the hero read as one surface. */}
      <InfiniteGrid className="bg-background pt-[4.5rem]">
      <InkScroll>
      {/* ── Opener: one heading for every width. From xl the text sits beside the portrait. ── */}
      <div className="relative mx-auto max-w-[1440px] xl:h-[880px] xl:overflow-hidden">
        <svg role="img" aria-label="Amr Abu-Talleb portrait" viewBox="0 0 1440 880" preserveAspectRatio="xMidYMin slice" className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block">
          <defs>
            <clipPath id="about-portrait-d"><circle cx="450" cy="445" r="262" /></clipPath>
          </defs>
          <image href={PORTRAIT} x="166" y="161" width="568" height="568" preserveAspectRatio="xMidYMid slice" clipPath="url(#about-portrait-d)" />
          <circle cx="450" cy="445" r="262" fill="none" stroke="var(--accent)" strokeOpacity="0.6" strokeWidth="1.2" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 1440 880" preserveAspectRatio="xMidYMin slice" className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block">
          <path data-ink-opener className="ink-opener" pathLength={1} d="M -40 140 C 340 60, 760 220, 712 470 C 676 660, 420 735, 290 690 C 205 660, 200 760, 200 880" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
        </svg>

        <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8 xl:hidden">
          <svg role="img" aria-label="Amr Abu-Talleb portrait" viewBox="150 140 640 620" className="mx-auto block h-auto w-full max-w-[520px]">
            <defs>
              <clipPath id="about-portrait-m"><circle cx="450" cy="445" r="262" /></clipPath>
            </defs>
            <image href={PORTRAIT} x="166" y="161" width="568" height="568" preserveAspectRatio="xMidYMid slice" clipPath="url(#about-portrait-m)" />
            <circle cx="450" cy="445" r="262" fill="none" stroke="var(--accent)" strokeOpacity="0.6" strokeWidth="2" />
            <path className="ink-draw" pathLength={1} d="M 160 250 C 380 150, 760 240, 712 470 C 676 660, 420 735, 290 690 C 230 668, 215 700, 212 720" fill="none" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>

        <div className="mx-auto mt-2 max-w-2xl px-5 sm:px-8 xl:absolute xl:top-[150px] xl:left-[calc(50%+40px)] xl:mt-0 xl:w-[min(640px,calc(50%-88px))] xl:max-w-none xl:px-0">
          <Label />
          <Heading className="mt-4 font-serif text-[length:min(var(--text-page),10.4vw)] xl:text-[length:min(var(--text-page),4.6vw)] leading-[var(--leading-tight)] font-normal tracking-tight text-foreground xl:mt-6" />
          <p className="hero-line mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-foreground xl:mt-7 xl:max-w-[34rem] xl:text-[1.1875rem]" style={{ "--i": 8 } as React.CSSProperties}>{lead}</p>
          <div className="hero-line mt-6 xl:mt-8" style={{ "--i": 9 } as React.CSSProperties}><Buttons /></div>
        </div>
      </div>

      {/* ── Story along the spine ── */}
      <div className="mx-auto mt-10 max-w-2xl px-5 sm:px-8 xl:mt-0 xl:max-w-[1152px] xl:px-0">
        <div className="grid grid-cols-[20px_minmax(0,1fr)] xl:grid-cols-[112px_minmax(0,1fr)]">
          <Spine />
          <div className="pb-2 pl-4 xl:pt-6 xl:pl-8">
            <p className="text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase">My story</p>
          </div>

          {story.map((s, i) => {
            const reverse = i % 2 === 1
            return (
              <div key={s.img} className="contents">
                <Spine />
                <div
                  data-ink-step
                  className={`ink-step flex flex-col gap-4 py-6 pl-4 xl:items-center xl:gap-x-[72px] xl:gap-y-8 xl:py-10 xl:pl-8 ${reverse ? "items-end xl:flex-row-reverse" : "items-start xl:flex-row"}`}
                >
                  <Image
                    src={s.img}
                    alt={s.alt}
                    width={s.w}
                    height={s.h}
                    sizes="(min-width: 1280px) 340px, 220px"
                    className="h-[220px] w-[220px] shrink-0 object-contain xl:h-[340px] xl:w-[340px]"
                    style={{ transform: `rotate(${s.rot}deg)` }}
                  />
                  <p
                    data-no-typeset
                    className={
                      s.lead
                        ? "max-w-[54ch] font-serif text-[1.625rem] leading-[1.3] tracking-[-0.015em] text-foreground xl:flex-1 xl:text-[2.125rem]"
                        : "max-w-[54ch] text-base leading-[var(--leading-longform)] text-muted-foreground xl:flex-1 xl:text-[length:var(--text-article)]"
                    }
                  >
                    {fixRuns(s.text)}
                  </p>
                </div>
              </div>
            )
          })}

          {/* Proudest */}
          <Spine />
          <div data-ink-step className="ink-step pt-6 pb-10 pl-4 xl:pt-12 xl:pb-[88px] xl:pl-8">
            <Image
              src="/images/about-ink-crowd-v1.webp"
              alt="Brush-and-ink drawing of a row of people, a few out front with megaphones leading their own groups"
              width={900}
              height={275}
              sizes="(min-width: 1280px) 860px, 100vw"
              className="mb-6 h-auto w-full max-w-[860px] xl:mb-10"
            />
            <div className="flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:items-baseline xl:gap-x-14 xl:gap-y-6">
              <p className="font-serif text-[2.125rem] leading-[1.1] tracking-[-0.025em] text-foreground xl:flex-[1_1_420px] xl:text-5xl">
                {tp("Some of the people I hired now lead teams of their own.")} <em className="text-accent-text">{tp("That’s what I’m proudest of.")}</em>
              </p>
              <p data-no-typeset className="text-base leading-[var(--leading-longform)] text-muted-foreground xl:flex-[1_1_320px]">
                {fixRuns("Over the years I’ve hired more than fifty people. I’ve never wanted everyone to work the way I do. I’d rather give people the standard, the context and the responsibility to find their own way of doing it well.")}
              </p>
            </div>
          </div>

          {/* What I do */}
          <Spine />
          <div className="pb-10 pl-4 xl:pb-[72px] xl:pl-8">
            <div data-ink-step className="ink-step">
              <p className="mb-4 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/50 uppercase xl:mb-6">What I do</p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-4">
              {capabilities.map((cap) => (
                <div key={cap.title} data-ink-step className="ink-step rounded-sm border border-border bg-background p-5 xl:p-[26px]">
                  <h3 className="mb-2 font-serif text-[1.375rem] leading-[1.2] font-normal text-foreground xl:mb-2.5 xl:text-2xl">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <Spine />
          <div data-ink-step className="ink-step flex flex-col gap-4 pb-6 pl-4 xl:flex-row xl:flex-wrap xl:items-end xl:justify-between xl:gap-x-16 xl:gap-y-6 xl:pb-12 xl:pl-8">
            <p className="max-w-[34ch] font-serif text-2xl leading-[1.3] tracking-[-0.02em] text-foreground xl:flex-[999_1_520px] xl:text-[2rem]">
              {tp("That’s the role I’m looking for next: creative leadership in Europe, remote or on-site, where strategy, craft and team development belong together.")}
            </p>
            <div className="flex flex-col gap-3.5 xl:flex-[1_1_260px]">
              <p className="text-[0.9375rem] leading-[1.7] text-muted-foreground">{tp("Close enough to the details to keep the work good, and far enough back to help the team grow.")}</p>
              <div className="flex gap-7 text-sm font-medium">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border-b border-accent text-foreground">LinkedIn</a>
                <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center border-b border-accent text-foreground">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── The spine turns towards the hero and ends in an ink drop ── */}
      <div aria-hidden="true" data-ink-turn className="ink-turn">
        <svg data-ink-turn-svg className="ink-turn-svg" preserveAspectRatio="none">
          <path data-ink-turn-path pathLength={1} d="M 0 0" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
          <g data-ink-drop style={{ opacity: 0, transition: "opacity 0.3s" }}>
            <path d="M 13 0 C 19.6 11, 26 17.6, 26 25.3 A 13 13 0 1 1 0 25.3 C 0 17.6, 6.4 11, 13 0 Z" fill="var(--accent)" />
          </g>
        </svg>
        <span className="ink-turn-a" />
        <span className="ink-turn-b" />
        <svg viewBox="0 0 26 38" className="ink-turn-drop">
          <path d="M 13 0 C 19.6 11, 26 17.6, 26 25.3 A 13 13 0 1 1 0 25.3 C 0 17.6, 6.4 11, 13 0 Z" fill="var(--accent)" />
        </svg>
      </div>
      </InkScroll>
      </InfiniteGrid>
    </section>
  )
}
