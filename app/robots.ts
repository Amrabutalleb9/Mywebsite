import type { MetadataRoute } from "next"
import { getHiddenCaseStudySlugs, getHiddenHighlightSlugs } from "@/lib/projects"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  const hiddenWorkPaths = [
    ...getHiddenCaseStudySlugs().map((slug) => `/work/${slug}`),
    ...getHiddenHighlightSlugs().map((slug) => `/highlights/${slug}`),
    "/leadership",
    "/services",
  ]

  const disallow = hiddenWorkPaths.length > 0 ? { disallow: hiddenWorkPaths } : {}
  // Search engines and AI answer engines are welcome: the site is written to be quoted.
  const aiCrawlers = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"]
  return {
    rules: [
      { userAgent: "*", allow: "/", ...disallow },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/", ...disallow })),
    ],
    sitemap: "https://amrabutalleb.com/sitemap.xml",
  }
}
