import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { caseStudies, getCaseStudyBySlug, getAdjacentCaseStudies } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study-layout"

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudyBySlug(slug)
  if (!project) return {}
  const description = `${project.subtitle}. ${project.impactStatement}`
  const ogImages = project.featureImage
    ? [{ url: `https://amrabutalleb.com${project.featureImage}`, width: 1200, height: 630, alt: project.featureImageAlt || project.title }]
    : undefined
  return {
    title: `${project.title} | Case Study`,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.title} | Case Study · Amr Abu-Talleb`,
      description,
      type: "article",
      url: `https://amrabutalleb.com/work/${slug}`,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study · Amr Abu-Talleb`,
      description,
      images: ogImages,
    },
  }
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
