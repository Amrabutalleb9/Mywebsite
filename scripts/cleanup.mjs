#!/usr/bin/env node
/**
 * Cleanup script — removes legacy component files from earlier portfolio versions.
 * Runs automatically via the "postinstall" hook in package.json.
 */

import { unlinkSync, existsSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

const legacyFiles = [
  "components/testimonial-carousel.tsx",
  "components/site-nav.tsx",
  "components/site-footer.tsx",
  "components/nav.tsx",
  "components/footer.tsx",
  "components/about.tsx",
  "components/hero.tsx",
  "components/marquee.tsx",
  "components/recognition.tsx",
  "components/stats-bento.tsx",
  "components/process.tsx",
  "components/cta-banner.tsx",
]

let removed = 0
for (const file of legacyFiles) {
  const full = join(root, file)
  if (existsSync(full)) {
    try {
      unlinkSync(full)
      console.log(`  Removed legacy file: ${file}`)
      removed++
    } catch (err) {
      console.warn(`  Could not remove ${file}: ${err.message}`)
    }
  }
}

if (removed > 0) {
  console.log(`\n  Cleaned up ${removed} legacy file(s).\n`)
} else {
  console.log("  No legacy files found — project is clean.\n")
}
