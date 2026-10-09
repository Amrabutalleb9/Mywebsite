import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projectHighlights, getHighlightBySlug, getAdjacentHighlights } from "@/lib/projects"
import HighlightLayout from "@/components/highlight-layout"
import { pageMeta } from "@/lib/seo"

export function generateStaticParams() {
  return projectHighlights.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getHighlightBySlug(slug)
  if (!project) return { robots: { index: false, follow: false } }
  const description = `${project.subtitle}. My role: ${project.role}.`
  return pageMeta({
    title: `${project.title} · ${project.industry.split(/\n| \/ /)[0]} · Amr Abu-Talleb`,
    description,
    path: `/highlights/${slug}`,
    type: "article",
    image: project.featureImage
      ? { url: project.featureImage, alt: project.featureImageAlt || project.title }
      : undefined,
  })
}

export default async function HighlightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getHighlightBySlug(slug)
  if (!project) notFound()
  const { prev, next } = getAdjacentHighlights(slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.subtitle,
    author: { "@type": "Person", name: "Amr Abu-Talleb" },
    about: project.industry,
    url: `https://amrabutalleb.com/highlights/${slug}`,
    image: project.featureImage ? `https://amrabutalleb.com${project.featureImage}` : undefined,
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://amrabutalleb.com" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://amrabutalleb.com/projects" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://amrabutalleb.com/highlights/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <HighlightLayout project={project} prev={prev} next={next} />
    </>
  )
}
