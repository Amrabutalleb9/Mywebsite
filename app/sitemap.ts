import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"
import { caseStudies, projectHighlights } from "@/lib/projects"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://amrabutalleb.com"
  const siteUpdated = new Date("2026-03-19")

  const articleDateMap: Record<string, string> = {
    "Jan 2025": "2025-01-15",
    "Feb 2025": "2025-02-15",
    "Mar 2025": "2025-03-15",
    "May 2024": "2024-05-15",
    "Jul 2024": "2024-07-15",
    "Sep 2024": "2024-09-15",
    "Oct 2024": "2024-10-15",
    "Nov 2024": "2024-11-15",
    "Dec 2024": "2024-12-15",
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: siteUpdated, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work-with-me`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/articles`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
  ]

  const workPages: MetadataRoute.Sitemap = caseStudies.map((p) => ({
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

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: new Date(articleDateMap[a.date] || "2026-03-19"),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...workPages, ...highlightPages, ...articlePages]
}
