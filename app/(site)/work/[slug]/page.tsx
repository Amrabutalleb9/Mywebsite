import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { caseStudies, getCaseStudyBySlug, getAdjacentCaseStudies } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study-layout"
import { pageMeta } from "@/lib/seo"

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
  if (!project) return { robots: { index: false, follow: false } }
  const description = `${project.subtitle}. ${project.impactStatement}`
  return pageMeta({
    title: `${project.title} Case Study · Amr Abu-Talleb`,
    description,
    path: `/work/${slug}`,
    type: "article",
    image: project.featureImage
      ? { url: project.featureImage, alt: project.featureImageAlt || project.title }
      : undefined,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.subtitle,
    author: { "@type": "Person", name: "Amr Abu-Talleb" },
    dateCreated: project.year,
    about: project.industry,
    url: `https://amrabutalleb.com/work/${slug}`,
    image: project.featureImage ? `https://amrabutalleb.com${project.featureImage}` : undefined,
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://amrabutalleb.com" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://amrabutalleb.com/#work" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://amrabutalleb.com/work/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <CaseStudyLayout project={project} prev={prev} next={next} />
    </>
  )
}
