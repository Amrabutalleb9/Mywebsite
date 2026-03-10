import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projectHighlights, getHighlightBySlug, getAdjacentHighlights } from "@/lib/projects"
import HighlightLayout from "@/components/highlight-layout"

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
  if (!project) return {}
  const description = `${project.subtitle}. ${project.role} | ${project.industry}.`
  const ogImages = project.featureImage
    ? [{ url: `https://amrabutalleb.com${project.featureImage}`, width: 1200, height: 630, alt: project.featureImageAlt || project.title }]
    : undefined
  return {
    title: `${project.title} | Project`,
    description,
    alternates: { canonical: `/highlights/${slug}` },
    openGraph: {
      title: `${project.title} | Project · Amr Abu-Talleb`,
      description,
      type: "article",
      url: `https://amrabutalleb.com/highlights/${slug}`,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Project · Amr Abu-Talleb`,
      description,
      images: ogImages,
    },
  }
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
