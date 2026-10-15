import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Download, ArrowRight, Linkedin } from "lucide-react"
import { capabilities } from "@/lib/shared-data"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"
import { tp } from "@/lib/typeset"

export const metadata: Metadata = pageMeta({
  title: "About Amr Abu-Talleb · Creative Director & Design Leader",
  description:
    "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. 50+ people hired. Open to roles in Europe or remote.",
  path: "/about",
  type: "profile",
})

const aboutSections = [
  {
    title: tp("How I lead"),
    body: [
      tp("Much of my work happens before a finished design reaches the client: deciding who should take on a brief, considering the team’s workload, and helping people get to a stronger idea."),
      tp("When we review work, I prefer to speak last. Designers present their decisions, colleagues challenge what isn’t working, and the art directors guide the discussion. I want the team to have a chance to work through the problem before my opinion enters the room."),
      tp("I step in when the work drifts from the brief, the brand, or the people it is meant for. Otherwise, I want designers to develop their own judgment, not get good at guessing what I would choose."),
      tp("That matters to me more than having every decision pass through my desk."),
    ],
  },
  {
    title: tp("Art and design"),
    body: [
      tp("I’m an artist at heart, but I work in design."),
      tp("Art can exist for its own sake. Design has to answer to the people who encounter it and the business behind it. The most interesting projects leave room for both: an idea with its own character that still does the job it was made to do."),
      tp("I encourage designers to draw from their own experiences, interests and values. We explore those ideas, challenge them, and work out what belongs in the final piece. I don’t want everything to end up looking the same just because it passed through the same team."),
      tp("The brief sets the direction. It shouldn’t erase the person doing the work."),
    ],
  },
  {
    title: tp("Arabic and Latin"),
    body: [
      tp("I work in Arabic and English as a typographer and calligrapher. I’ve built identities that carry both scripts while feeling like one brand."),
      tp("Arabic and Latin have different rhythms, proportions and visual behaviours. Designing for both takes more than translating a word or choosing two matching fonts. Each script needs to feel natural on its own, while the identity still holds together across languages."),
      tp("It’s the part of my practice that takes me closest to where I started, and it’s still work I enjoy doing by hand."),
    ],
  },
  {
    title: tp("The tools change. The judgment doesn’t."),
    body: [
      tp("AI sits in my toolbox alongside the brush and the pen tool. I use it for research, repetitive tasks and exploring directions quickly. It gives me more options to consider and reduces the time spent on work that doesn’t need my full attention."),
      tp("It doesn’t decide which idea is worth pursuing. I still have to judge the direction, make the design decisions and take responsibility for the result."),
      tp("I also prototype in code, often taking an idea from a brief to a working staging build in days. For me, a prototype is useful because people can interact with it, find what doesn’t work, and have a more concrete conversation about what comes next."),
    ],
  },
  {
    title: tp("What I’m proudest of"),
    body: [
      tp("I’ve been involved in hiring more than fifty people. Some of the designers I’ve helped bring into teams now lead teams of their own."),
      tp("I look for integrity, curiosity and a willingness to learn. Skills can be sharpened through practice and good feedback. I can help someone become a better designer; I can’t supply the curiosity or integrity for them."),
      tp("Today, I lead a team of around twenty-five across design, product build, video and customer support, with several projects moving at once."),
      tp("I’m interested in creative leadership roles in Europe where I can stay close to the work, help a team do its best work, and take part in the decisions that shape the business around it."),
    ],
  },
]

export default function AboutPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

        {/* ── Left column: ALL content ── */}
        <div className="order-2 min-w-0 lg:order-none lg:w-[55%]">

          <FadeIn>
            <h1 className="mb-6 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              {tp("A letter has nowhere to hide.")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mb-10 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
              {tp("Amr Abu-Talleb · Creative Director across brand, campaigns and digital products")}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} as="div" className="mb-12 flex max-w-[60ch] flex-col gap-5 text-xl leading-relaxed text-foreground">
            <p>{tp("I learned that drawing Arabic calligraphy and Latin letterforms by hand. Change the weight of a stroke, tighten the space around it, or shift the balance between two forms, and the whole word takes on a different character. With letters, even a small decision is visible.")}</p>
            <p>{tp("I still look at design that way.")}</p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            <p>{tp("Over thirteen years, my work has moved from typography and identity into campaigns, digital products and creative leadership. The scale is different, but I still pay attention to the details that make an idea hold together.")}</p>
            <p>{tp("I’ve led teams of up to twenty-five across brand, campaign and product work, with clients in Egypt, the Gulf, the UK, the US, Australia and Singapore. Some projects have been about finding a clearer position for a business. Others have involved shaping a product’s user experience or building an identity that works across languages.")}</p>
            <p>{tp("I also designed a 212-page illustrated book for Steve Hodel, the New York Times bestselling author and former LAPD detective whose work followed his decades-long investigation into his father. That project stays with me.")}</p>
          </FadeIn>

          {aboutSections.map((sec) => (
            <FadeIn key={sec.title} as="section" className="mt-16 max-w-[62ch]">
              <h2 className="mb-6 font-serif text-[length:var(--text-sub)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">{sec.title}</h2>
              <div className="flex flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
                {sec.body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
              </div>
            </FadeIn>
          ))}

          {/* ── What I Do ── */}
          <FadeIn as="div" className="mt-24">
            <h2 className="mb-12 font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              What I&nbsp;Do
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div key={cap.title} className="capability-card rounded-sm bg-surface p-6 lg:p-8">
                  <h3 className="mb-3 font-medium text-foreground">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Tools */}
          <FadeIn as="p" className="mt-10 text-sm text-muted-foreground">
            {tp("Tools: Figma, Adobe Creative Suite, Premiere Pro, Cursor, Next.js, and AI tools for image, video and voice.")}
          </FadeIn>

        </div>

        {/* ── Right column: sticky photo + CTAs + links ── */}
        <div className="order-1 lg:order-none lg:w-[45%]">
          <FadeIn delay={0.2} as="div" className="flex flex-col items-center gap-6 lg:sticky lg:top-32">
            {/* Portrait */}
            <div className="h-[280px] w-[280px] overflow-hidden rounded-full lg:h-[380px] lg:w-[380px]">
              <Image
                src="/images/amr-portrait-v3.webp"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="h-full w-full object-cover grayscale"
              />
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="/Amr_AbuTalleb_CV_Creative_Director.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                <Download size={14} />
                Download&nbsp;CV
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-xs font-medium tracking-[var(--tracking-label)] text-foreground uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                View My&nbsp;Work
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* LinkedIn & Email */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/abutalleb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:hello@amrabutalleb.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </a>
            </div>
          </FadeIn>
        </div>

      </div>
    </main>
  )
}
