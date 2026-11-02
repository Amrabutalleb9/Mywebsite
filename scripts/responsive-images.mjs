#!/usr/bin/env node
/**
 * Responsive image variants for next/image (static export has no image server).
 *
 * For every raster image directly in public/images, writes WebP copies at the widths in
 * lib/image-sizes.json to public/images/r/<name>-<width>.webp (only widths smaller than the
 * original), and records each original's width in lib/image-widths.json. lib/image-loader.ts
 * reads both to build each <img> srcset, and falls back to the original file at full width.
 *
 * Runs before every build ("prebuild"). Existing variants are kept, so it only does work for new
 * images. A replaced image gets a new filename (see CLAUDE.md), so its variants get new names too.
 * Run with --force to regenerate everything.
 */
import { readdirSync, existsSync, mkdirSync, writeFileSync, readFileSync, statSync } from "fs"
import { join, dirname, parse } from "path"
import { fileURLToPath } from "url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const srcDir = join(root, "public/images")
const outDir = join(srcDir, "r")
const widthsFile = join(root, "lib/image-widths.json")
const { widths } = JSON.parse(readFileSync(join(root, "lib/image-sizes.json"), "utf8"))
const force = process.argv.includes("--force")

let sharp
try {
  sharp = (await import("sharp")).default
} catch {
  console.warn("[responsive-images] sharp is not installed; keeping the committed variants.")
  process.exit(0)
}

mkdirSync(outDir, { recursive: true })
const files = readdirSync(srcDir).filter(
  (f) => /\.(webp|png|jpe?g)$/i.test(f) && statSync(join(srcDir, f)).isFile() && !/^(og-image|favicon)/.test(f),
)

const originalWidths = {}
let written = 0
for (const file of files.sort()) {
  const input = join(srcDir, file)
  const { width } = await sharp(input).metadata()
  originalWidths[file] = width
  for (const w of widths) {
    if (w >= width) continue
    const out = join(outDir, `${parse(file).name}-${w}.webp`)
    if (!force && existsSync(out)) continue
    await sharp(input).resize({ width: w }).webp({ quality: 80, effort: 5 }).toFile(out)
    written++
  }
}

writeFileSync(widthsFile, JSON.stringify(originalWidths, null, 0) + "\n")
console.log(`[responsive-images] ${files.length} images, ${written} new variants`)
