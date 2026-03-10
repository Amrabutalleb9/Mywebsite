#!/usr/bin/env node
/**
 * Cleanup script — removes legacy component files from earlier portfolio versions.
 * These files are no longer imported but can cause duplicate rendering
 * if they linger on disk from a previous zip extraction.
 *
 * Runs automatically via the "postinstall" hook in package.json.
 */

import { unlinkSync, existsSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

const legacyFiles = [
  // Old nav/footer components
  "components/site-nav.tsx",
  "components/site-footer.tsx",
  "components/nav.tsx",
  "components/footer.tsx",
  // Old section components
  "components/about.tsx",
  "components/hero.tsx",
  "components/marquee.tsx",
  "components/recognition.tsx",
  "components/stats-bento.tsx",
  "components/process.tsx",
  "components/client-ticker.tsx",
  "components/cta-banner.tsx",
  // Possible old route layouts that might import old navs
  "app/about/layout.tsx",
  "app/projects/layout.tsx",
  "app/articles/layout.tsx",
  "app/work/layout.tsx",
  "app/highlights/layout.tsx",
]

let removed = 0
for (const file of legacyFiles) {
  const full = join(root, file)
  if (existsSync(full)) {
    unlinkSync(full)
    console.log(`  🧹 Removed legacy file: ${file}`)
    removed++
  }
}

if (removed > 0) {
  console.log(`\n  ✅ Cleaned up ${removed} legacy file(s). Run "npm run dev" to start fresh.\n`)
} else {
  console.log("  ✅ No legacy files found — project is clean.\n")
}
