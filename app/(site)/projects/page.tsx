import type { Metadata } from "next"
import { publishedCaseStudies, projectHighlights } from "@/lib/projects"
import { ProjectShowcase } from "@/components/ui/project-showcase"
import type { ShowcaseProject } from "@/components/ui/project-showcase"
import FadeIn from "@/components/fade-in"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Creative Director portfolio · Amr Abu-Talleb",
  description:
    "Case studies in brand identity, product design and campaigns: the strategy, the team I led and the results. Creative Director open to roles in Europe, remote or on-site.",
  path: "/projects",
})

const caseStudyItems: ShowcaseProject[] = publishedCaseStudies.map((p) => ({
  title: p.title,
  subtitle: p.subtitle,
  year: p.year,
  href: `/work/${p.slug}`,
  featureImage: p.featureImage,
  featureImageAlt: p.featureImageAlt,
  dataCursorLabel: `Explore ${p.title}`,
}))

const highlightItems: ShowcaseProject[] = projectHighlights.map((p) => ({
  title: p.title,
  subtitle: p.subtitle,
  year: p.year,
  href: `/highlights/${p.slug}`,
  featureImage: p.featureImage,
  featureImageAlt: p.featureImageAlt,
  dataCursorLabel: `View ${p.title}`,
}))

export default function ProjectsPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-6xl">
      <FadeIn>
        <h1 className="mb-4 font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mb-24 max-w-lg text-muted-foreground">
          {"Case studies first, then shorter projects across brand, product, campaigns and\u00A0print."}
        </p>
      </FadeIn>

      {/* ── Case studies ── */}
      <FadeIn delay={0.08}>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Case studies</span>
        </div>
        <p className="mb-8 max-w-md text-sm text-muted-foreground">
          {"The full story: the\u00A0brief, the\u00A0calls I\u00A0made and\u00A0what\u00A0changed."}
        </p>
      </FadeIn>

      <div className="mb-32">
        <ProjectShowcase projects={caseStudyItems} />
      </div>

      {/* ── Project highlights (shown only while some are published) ── */}
      {highlightItems.length > 0 && (<>
      <FadeIn>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <span className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Project highlights</span>
        </div>
        <p className="mb-8 max-w-md text-sm text-muted-foreground">
          {"Shorter projects, from marble campaigns to\u00A0skincare\u00A0packaging."}
        </p>
      </FadeIn>

      <ProjectShowcase
        projects={highlightItems}
        startIndex={publishedCaseStudies.length}
      />
      </>)}
      </div>
    </main>
  )
}
