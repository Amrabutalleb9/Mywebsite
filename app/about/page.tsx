import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Download, ArrowRight, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "Creative Director with 13 years leading brands, teams, and digital products across the Middle East, UK, Europe, USA, Australia, and Singapore.",
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

const capabilities = [
  { title: "Creative Direction", desc: "I set the vision. I lead the team. I make sure every piece of work that ships is something I\u2019d put my name\u00A0on." },
  { title: "Brand Identity & Strategy", desc: "Logos, type systems, color, guidelines, positioning. The whole foundation. Built to scale, built to\u00A0last." },
  { title: "UI/UX Design", desc: "Interfaces for web and mobile. From wireframes to production. Screens that perform, not just screens that look\u00A0nice." },
  { title: "Art Direction", desc: "Defining the visual tone across campaigns, editorial, packaging, and digital. This is where the storytelling\u00A0lives." },
  { title: "Typography Systems", desc: "Type is my primary design tool. I build typographic hierarchies that do the heavy lifting in any layout, any\u00A0language." },
  { title: "Campaign Design", desc: "Multi-channel creative for digital, social, and print. Strategy first. Execution second. Results\u00A0always." },
]

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
        <div className="min-w-0 lg:w-[55%]">

          <h1 className="mb-10 max-w-[20ch] font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight text-foreground">
            {"I\u2019m Amr Abu-Talleb."}
          </h1>

          {/* Opening statement - "what's the business goal?" on its own line */}
          <p className="mb-3 max-w-[60ch] text-xl font-medium leading-relaxed text-foreground">
            Creative Director. Brand strategist.
          </p>
          <p className="mb-8 max-w-[60ch] text-xl font-medium leading-relaxed text-foreground">
            {"The kind of designer who asks \u201cwhat\u2019s the business goal?\u201d"}
          </p>

          {/* Full Bio */}
          <div className="flex max-w-[60ch] flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              {"I\u2019ve spent 13\u00A0years directing brands, leading teams, and designing digital products across the Middle East, UK, Europe, USA, Australia, Singapore, and\u00A0Canada."}
            </p>
            <p>
              {"My work has driven a\u00A057% lift in client engagement, a\u00A070% increase in social reach, and grew a\u00A0creative agency\u2019s Instagram from zero to 20,000 followers across three\u00A0markets."}
            </p>
            <p>
              {"My work sits at the intersection of strategic thinking and visual\u00A0craft."}
            </p>
            <p>
              {"I use typography the way a\u00A0filmmaker uses a\u00A0camera: it sets the mood, controls the pace, and tells the story before a\u00A0single word gets\u00A0read."}
            </p>
            <p>
              {"I started at ADRAW in\u00A02013. Spent four years leading design and marketing for a\u00A0software product targeting the US and UK. That\u2019s where I learned to stop thinking like a\u00A0designer and start thinking like a\u00A0business owner. Every pixel had to earn revenue. Every campaign had to move a\u00A0number."}
            </p>
            <p>
              {"After ADRAW, I took on art direction at Like a\u00A0Nerd. I owned the visual\u00A0identity."}
            </p>
            <p>
              {"I ran the ad campaigns. One of those campaigns generated 125k+ USD in direct\u00A0sales."}
            </p>
            <p>
              {"Then came Overpowered Agency. I joined as Creative Director across three markets: Egypt, UK and the UAE. I built the brand from scratch. Directed the visual identity, the social strategy, and the client deliverables. Grew the agency\u2019s Instagram from zero to\u00A020,000 followers. Along the way I restructured a\u00A0mis-priced client proposal into a\u00A0two-round engagement, increasing its value and landing both phases before a\u00A0single wireframe was\u00A0drawn."}
            </p>
            <p>
              {"In parallel, I worked as a\u00A0Senior Product Designer at Taptools in the US, leading UX research and redesigning the platform\u2019s core user flows, reducing user-reported issues by\u00A023% within 60\u00A0days of launch. I also contributed to the design system of Freelancer.com as a\u00A0contractor, delivering production-ready UI components across one of the world\u2019s largest freelance\u00A0platforms."}
            </p>
            <p>
              {"I\u2019ve also designed a\u00A0book for Steve Hodel, a\u00A0New York Times bestselling\u00A0author."}
            </p>
            <p>
              {"Built brand systems for luxury skincare, law firms, tech startups, and international corporations. Rescued a\u00A0Singapore art school\u2019s website after four freelancers failed over three years. Built a\u00A0sales funnel for an Australian financial consultant that drove a\u00A012% increase in revenue within the first month, with zero ad\u00A0spend."}
            </p>
            <p>
              {"My engineering background from the German University in Cairo taught me to think in systems. My CalArts training taught me to think in stories. I bring both to every\u00A0project."}
            </p>
            <p>
              {"Currently Creative Director at The Line Real Estate in Cairo, leading a\u00A0team of\u00A011 and directing the full rebrand of a\u00A0high-value property brand. Actively looking for Senior Creative Director opportunities with international agencies or in-house teams in the UAE and\u00A0beyond."}
            </p>
          </div>

          {/* ── What I Do ── */}
          <div className="mt-24">
            <h2 className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-tight text-foreground">
              What I Do
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
            {"Figma \u00B7 FigJam \u00B7 Adobe Creative Suite \u00B7 Webflow \u00B7 Squarespace \u00B7 WordPress \u00B7 Framer \u00B7 Wix \u00B7 Cursor AI \u00B7 V0 \u00B7 Miro \u00B7 Whimsical \u00B7 Google Analytics"}
          </p>

          {/* ── Recognition & Education ── */}
          <div className="mt-24">
            <h2 className="mb-8 font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-tight text-foreground">
              Recognition & Education
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
        <div className="lg:w-[45%]">
          <div className="flex flex-col items-center gap-6 lg:sticky lg:top-32">
            {/* Portrait */}
            <div className="h-[280px] w-[280px] overflow-hidden rounded-full lg:h-[380px] lg:w-[380px]">
              <Image
                src="/images/amr-portrait.png"
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
                className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-xs font-medium tracking-[0.12em] text-background uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                <Download size={14} />
                Check My Resume
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                View My Work
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
