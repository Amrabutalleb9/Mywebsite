import type { MetadataRoute } from "next"
import { getHiddenCaseStudySlugs, getHiddenHighlightSlugs } from "@/lib/projects"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  const hiddenWorkPaths = [
    ...getHiddenCaseStudySlugs().map((slug) => `/work/${slug}`),
    ...getHiddenHighlightSlugs().map((slug) => `/highlights/${slug}`),
    "/leadership",
  ]

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      ...(hiddenWorkPaths.length > 0 ? { disallow: hiddenWorkPaths } : {}),
    },
    sitemap: "https://amrabutalleb.com/sitemap.xml",
  }
}
