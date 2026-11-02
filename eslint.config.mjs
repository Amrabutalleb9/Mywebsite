import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

// eslint-config-next 16 ships flat configs, so they are spread in directly
// (the old FlatCompat bridge failed on them with a circular-structure error).
// .cursor/ holds editor tooling (skills and their scripts), not site code.
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".cursor/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"]),
])
