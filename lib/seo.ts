import type { Metadata } from "next"

export const SITE_URL = "https://amrabutalleb.com"
export const DEFAULT_OG_IMAGE = {
  url: "/images/og-image-v2.png",
  width: 1200,
  height: 630,
  alt: "Amr Abu-Talleb, Creative Director, open to roles in Europe",
}

type PageMetaInput = {
  /** Full <title>, used as-is (no site-name template). Keep under ~60 characters. */
  title: string
  /** Meta description. Keep around 140–160 characters. */
  description: string
  /** Path starting with "/", used for the canonical URL and og:url. */
  path: string
  image?: { url: string; width?: number; height?: number; alt?: string }
  type?: "website" | "article" | "profile"
  keywords?: string[]
}

/**
 * Builds complete page metadata. Next.js replaces (not merges) openGraph and
 * twitter objects from the root layout, so every page has to repeat the image.
 */
export function pageMeta({ title, description, path, image, type = "website", keywords }: PageMetaInput): Metadata {
  const img = image ?? DEFAULT_OG_IMAGE
  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      siteName: "Amr Abu-Talleb",
      title,
      description,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img.url],
    },
  }
}
