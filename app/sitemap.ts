import type { MetadataRoute } from "next"
import { publishedCaseStudies, projectHighlights } from "@/lib/projects"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://amrabutalleb.com"
  const siteUpdated = new Date("2026-10-09")

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: siteUpdated, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/consulting`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.3 },
  ]

  const workPages: MetadataRoute.Sitemap = publishedCaseStudies.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const highlightPages: MetadataRoute.Sitemap = projectHighlights.map((p) => ({
    url: `${base}/highlights/${p.slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...workPages, ...highlightPages]
}
