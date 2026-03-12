import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"
import { caseStudies, projectHighlights } from "@/lib/projects"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://amrabutalleb.com"

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work-with-me`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/articles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]

  const workPages: MetadataRoute.Sitemap = caseStudies.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const highlightPages: MetadataRoute.Sitemap = projectHighlights.map((p) => ({
    url: `${base}/highlights/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...workPages, ...highlightPages, ...articlePages]
}
