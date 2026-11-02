import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { caseStudies, getCaseStudyBySlug, getAdjacentCaseStudies } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study-layout"
import { pageMeta } from "@/lib/seo"
import { caseStudyLd, caseStudySummary, ldJson, plain } from "@/lib/structured-data"

export function generateStaticParams() {
  // Include hidden slugs so static export can emit a 404 page instead of failing at runtime.
  return caseStudies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudyBySlug(slug)
  if (!project) return { title: { absolute: "Page not found · Amr Abu-Talleb" }, robots: { index: false, follow: false }, alternates: { canonical: null } }
  const description = caseStudySummary(project)
  return pageMeta({
    title: `${plain(project.title)} case study · Amr Abu-Talleb`,
    description,
    path: `/work/${slug}`,
    type: "article",
    // Share cards use a 1200x630 JPG: LinkedIn, WhatsApp and Facebook don't reliably show WebP.
    image: project.hidden ? undefined : { url: `/images/og/${slug}-v1.jpg`, width: 1200, height: 630, alt: plain(project.featureImageAlt || project.title) },
  })
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getCaseStudyBySlug(slug)
  if (!project) notFound()
  const { prev, next } = getAdjacentCaseStudies(slug)

  const jsonLd = caseStudyLd(project)

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://amrabutalleb.com" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://amrabutalleb.com/projects" },
      { "@type": "ListItem", position: 3, name: plain(project.title), item: `https://amrabutalleb.com/work/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(jsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(breadcrumbLd)} />
      <CaseStudyLayout project={project} prev={prev} next={next} />
    </>
  )
}
