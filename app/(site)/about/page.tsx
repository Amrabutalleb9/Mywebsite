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

export default function AboutPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-16 lg:flex-row lg:gap-20">

        {/* ── Left column: ALL content ── */}
        <div className="order-2 min-w-0 lg:order-none lg:w-[55%]">

          <FadeIn>
            <h1 className="mb-10 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
              <span className="block">{tp("Work worth signing.")}</span>
              <span className="block">{tp("Teams built to outgrow me.")}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 max-w-[60ch] text-xl leading-relaxed text-foreground">{tp("I’m Amr Abu-Talleb. Before I directed teams, I drew Arabic calligraphy and English lettering by hand. It taught me how much the weight of a stroke or the space around a curve can change the character of a whole word. I still look at brands, campaigns and digital products that way.")}</p>
          </FadeIn>

          {/* Full Bio */}
          <FadeIn delay={0.15} as="div" className="flex max-w-[62ch] flex-col gap-6 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            <p>{tp("Over thirteen years, I’ve moved from hands-on design into creative direction, leading multidisciplinary teams of up to twenty-five across brand, digital product, campaigns and creative production. My work spans identity systems, digital experiences, creative strategy and the business decisions behind them, with clients in Egypt, the Gulf area, the UK, the US, Australia and Singapore. Most recently, I helped grow an agency from six people to twenty-five in seven months, and reshaped what it sold and who it sold to.")}</p>
            <p>{tp("One project stays with me: As Within, So Without, a 212-page book I designed and typeset for Steve Hodel, the retired LAPD homicide detective and New York Times bestselling author. It holds decades of investigation and more than 130 images, from crime-scene photographs to paintings. The design had to give that material structure without getting in the way of the evidence.")}</p>
            <p>{tp("I’ve always moved between art and design. Art can have a character of its own; design also has to make sense to the people who meet it and the business behind it. Working in Arabic and English sharpens that balance: an identity has to feel native in both scripts and still be recognisably itself.")}</p>
            <p>{tp("AI gives the team more ways into an idea and takes the repetitive work off our desks. The thinking still starts with the brief, and the judgement about which direction is worth pursuing stays with us.")}</p>
            <p>{tp("When I lead a team, I want everyone to understand what we’re trying to achieve and to have room to bring their own perspective. In reviews, I usually let the designer walk us through the work before I weigh in. We talk about what’s working, what isn’t and what needs another look. I’ll help resolve a difficult decision or bring the work back to the brief when it drifts, but I don’t want every choice to wait for me. A good team can make a considered call on its own, and knows when to ask for a second pair of eyes.")}</p>
            <p>{tp("Some of the people I’ve hired now lead teams of their own. ")}<strong className="font-medium text-foreground">{tp("That’s what I’m proudest of.")}</strong>{tp(" It won’t show up in a portfolio, but it’s the part of the job I’d least want to give up.")}</p>
            <p className="font-medium text-foreground">{tp("I’m interested in creative leadership roles in Europe where strategy, craft and team development belong together. I want to shape the direction of the work, stay close to the details that make it good, and build teams that become more capable over time.")}</p>
          </FadeIn>

          {/* ── What I Do ── */}
          <FadeIn as="div" className="mt-24">
            <h2 className="mb-12 font-serif text-[length:var(--text-sub)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
              What I&nbsp;do
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div key={cap.title} className="capability-card rounded-sm border border-border bg-background p-6 lg:p-8">
                  <h3 className="mb-3 font-medium text-foreground">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Tools */}
          <FadeIn as="p" className="mt-10 text-sm text-muted-foreground">
            {tp("Tools: Figma, Adobe Creative Suite, Webflow, Framer, Cursor, Next.js, and AI-assisted image, video and voice tools.")}
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
                className="btn btn-primary"
              >
                <Download size={14} />
                Download&nbsp;CV
              </a>
              <Link
                href="/#work"
                className="btn btn-secondary"
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
