import type { Metadata } from "next"
import { caseStudies, projectHighlights } from "@/lib/projects"
import { ProjectShowcase } from "@/components/ui/project-showcase"
import type { ShowcaseProject } from "@/components/ui/project-showcase"

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and project highlights spanning brand identity, UI/UX, creative direction, and art direction across eight international markets.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects · Amr Abu-Talleb",
    description: "Case studies and project highlights spanning brand identity, UI/UX, creative direction, and art direction across eight international markets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects · Amr Abu-Talleb",
    description: "Case studies and project highlights spanning brand identity, UI/UX, creative direction, and art direction across eight international markets.",
  },
}

const caseStudyItems: ShowcaseProject[] = caseStudies.map((p) => ({
  title: p.title,
  subtitle: p.subtitle,
  year: p.year,
  href: `/work/${p.slug}`,
  featureImage: p.featureImage,
  featureImageAlt: p.featureImageAlt,
}))

const highlightItems: ShowcaseProject[] = projectHighlights.map((p) => ({
  title: p.title,
  subtitle: p.subtitle,
  year: p.year,
  href: `/highlights/${p.slug}`,
  featureImage: p.featureImage,
  featureImageAlt: p.featureImageAlt,
}))

export default function ProjectsPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <h1 className="mb-4 font-serif text-[length:var(--text-page)] font-normal tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mb-20 max-w-lg text-muted-foreground">
        Case studies and selected project highlights across brand identity, creative direction, UI/UX design, and&nbsp;art&nbsp;direction.
      </p>

      {/* ── Case Studies ── */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-accent" />
        <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Case Studies</span>
      </div>
      <p className="mb-8 max-w-md text-sm text-muted-foreground">
        Deep dives into strategy, process, and&nbsp;results.
      </p>

      <div className="mb-28">
        <ProjectShowcase projects={caseStudyItems} />
      </div>

      {/* ── Project Highlights ── */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-accent" />
        <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Project Highlights</span>
      </div>
      <p className="mb-8 max-w-md text-sm text-muted-foreground">
        Selected projects showing&nbsp;range.
      </p>

      <ProjectShowcase
        projects={highlightItems}
        startIndex={caseStudies.length}
      />
    </main>
  )
}
