import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Download, ArrowRight, Linkedin } from "lucide-react"
import { capabilities } from "@/lib/shared-data"

export const metadata: Metadata = {
  title: "About Amr Abu-Talleb | Creative Director & Brand Strategist",
  description: "13+ years directing brands, leading teams of 25, and designing digital products across 8 markets. See the full story.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Amr Abu-Talleb | Creative Director",
    description: "13+ years directing brands and leading creative teams across 8 international markets. German University in Cairo and CalArts educated.",
    type: "profile",
    url: "https://amrabutalleb.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Amr Abu-Talleb | Creative Director",
    description: "13+ years directing brands and leading creative teams across 8 international markets.",
  },
}

const recognitionItems: { text: string; href?: string }[] = [
  { text: "Featured Contractor, Freelancer.com (Top-Rated, Branding, UI/UX)", href: "https://www.freelancer.com" },
  { text: "UX Design Professional Certificate, Google", href: "https://grow.google/certificates/ux-design/" },
  { text: "UI/UX Design Specialisation, California Institute of the Arts", href: "https://www.calarts.edu" },
  { text: "Graphic Design Specialisation, California Institute of the Arts", href: "https://www.calarts.edu" },
  { text: "Design: Creation of Artifacts, The Wharton School", href: "https://www.wharton.upenn.edu" },
  { text: "Research Design, University of North Texas", href: "https://www.unt.edu" },
  { text: "Introduction to Personal Branding, University of Virginia", href: "https://www.virginia.edu" },
  { text: "B.Sc. Mechatronics Engineering, German University in Cairo" },
]

export default function AboutPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

        {/* ── Left column: ALL content ── */}
        <div className="order-2 min-w-0 lg:order-none lg:w-[55%]">

          <h1 className="mb-4 max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal tracking-tight text-foreground">
            13&nbsp;years turning strategy into&nbsp;results.
          </h1>
          <p className="mb-10 text-xl font-medium leading-relaxed text-muted-foreground">
            {"I\u2019m Amr Abu-Talleb."}
          </p>

          {/* Full Bio */}
          <div className="flex max-w-[60ch] flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              {"I\u2019ve spent 13\u00A0years directing brands, leading teams of\u00A0up to\u00A025, and designing digital products across the Middle East, UK, Europe, USA, Australia, Singapore, and\u00A0Canada."}
            </p>
            <p>
              {"My work has driven a\u00A012% sales increase with zero ad\u00A0spend, a\u00A070% lift in\u00A0social engagement, and a\u00A0unified brand system across three international markets\u00A0\u2014 built in\u00A0two months. I\u2019ve rescued a\u00A0website after four freelancers failed over three years, restructured a\u00A0mis-priced development proposal into a\u00A0two-phase engagement before a\u00A0single wireframe was drawn, and designed a\u00A0212-page illustrated volume for a\u00A0New York Times bestselling\u00A0author."}
            </p>
            <p>
              {"I use typography the way a\u00A0filmmaker uses a\u00A0camera: it\u00A0sets the mood, controls the pace, and\u00A0tells the story before a\u00A0single word gets\u00A0read."}
            </p>
            <p>
              {"My engineering background from the German University in\u00A0Cairo taught me to\u00A0think in\u00A0systems. My CalArts training taught me to\u00A0think in\u00A0stories. I\u00A0bring both to\u00A0every\u00A0project."}
            </p>
            <p>
              {"Currently Creative Director at\u00A0The Line Real Estate in\u00A0Cairo, leading a\u00A0team of\u00A025. Open to\u00A0senior creative leadership roles and select consulting engagements with brands and agencies\u00A0worldwide."}
            </p>
          </div>

          {/* ── What I Do ── */}
          <div className="mt-24">
            <h2 className="mb-12 font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              What I&nbsp;Do
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div key={cap.title} className="rounded-sm bg-surface p-6 lg:p-8">
                  <h3 className="mb-3 font-medium text-foreground">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <p className="mt-10 text-sm text-muted-foreground">
            {"Figma \u00B7 FigJam \u00B7 Adobe Creative Suite \u00B7 Webflow \u00B7 Framer \u00B7 Cursor\u00A0AI \u00B7 V0 \u00B7 Miro \u00B7 Whimsical \u00B7 Google Analytics"}
          </p>

          {/* ── Recognition & Education ── */}
          <div className="mt-24">
            <h2 className="mb-8 font-serif text-[length:var(--text-sub)] font-normal tracking-tight text-foreground">
              Recognition &amp;&nbsp;Education
            </h2>
            <ul className="flex flex-col">
              {recognitionItems.map((item) => (
                <li key={item.text} className="border-b border-border py-5 text-muted-foreground last:border-0">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right column: sticky photo + CTAs + links ── */}
        <div className="order-1 lg:order-none lg:w-[45%]">
          <div className="flex flex-col items-center gap-6 lg:sticky lg:top-32">
            {/* Portrait */}
            <div className="h-[280px] w-[280px] overflow-hidden rounded-full lg:h-[380px] lg:w-[380px]">
              <Image
                src="/images/amr-portrait.webp"
                alt="Amr Abu-Talleb portrait"
                width={600}
                height={600}
                className="h-full w-full object-cover grayscale"
              />
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="/Amr_AbuTalleb_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-xs font-medium tracking-[var(--tracking-label)] text-background uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                <Download size={14} />
                Download&nbsp;Resume
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
          </div>
        </div>

      </div>
    </main>
  )
}
