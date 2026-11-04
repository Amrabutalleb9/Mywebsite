import data from "./storefront-previews.json"

/**
 * Storefront email previews: one page per sales email at /s/<slug>, showing that
 * business's current site next to the redesign concept. The data lives in
 * storefront-previews.json so the Pages Function (functions/s/[[path]].js) and the
 * report (functions/api/s-report.js) read the same list of slugs.
 */
export type PreviewImage = { src: string; width: number; height: number; alt?: string }

export type StorefrontPreview = {
  slug: string
  business: string
  /** Test entry, not a real business. The page shows an "Example page" label. */
  example?: boolean
  /** Date the entry was added (YYYY-MM-DD). */
  added?: string
  /** Replaces the default intro line on the page. */
  note?: string
  before: PreviewImage
  after: PreviewImage
}

export const storefrontPreviews: StorefrontPreview[] = data.previews

export function getStorefrontPreview(slug: string): StorefrontPreview | undefined {
  return storefrontPreviews.find((p) => p.slug === slug)
}
