/**
 * next/image loader for the static export (see scripts/responsive-images.mjs).
 * /images/<name>.<ext> at a requested width becomes the smallest generated WebP variant that is
 * at least that wide, or the original file when no smaller variant would do.
 */
import sizes from "./image-sizes.json"
import originalWidths from "./image-widths.json"

const variantWidths: number[] = sizes.widths
const known = originalWidths as Record<string, number>

export function imageVariant(src: string, width: number): string {
  const m = src.match(/^\/images\/([^/]+)\.(webp|png|jpe?g)$/i)
  if (!m) return src
  const original = known[`${m[1]}.${m[2]}`]
  if (!original) return src
  const w = variantWidths.find((v) => v >= width && v < original)
  return w ? `/images/r/${m[1]}-${w}.webp` : src
}

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }): string {
  return imageVariant(src, width)
}
