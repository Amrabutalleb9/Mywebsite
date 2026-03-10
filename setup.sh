#!/bin/bash
# ─── Portfolio Clean Setup ───────────────────────────
# Run this ONCE after extracting the zip to ensure 
# no legacy files from previous versions remain.
#
# Usage:  chmod +x setup.sh && ./setup.sh
# ─────────────────────────────────────────────────────

echo ""
echo "🧹 Cleaning legacy files..."
echo ""

# Remove old component files that cause duplicate navbar
LEGACY_FILES=(
  "components/site-nav.tsx"
  "components/site-footer.tsx"  
  "components/nav.tsx"
  "components/footer.tsx"
  "components/about.tsx"
  "components/hero.tsx"
  "components/marquee.tsx"
  "components/recognition.tsx"
  "components/stats-bento.tsx"
  "components/process.tsx"
  "components/client-ticker.tsx"
  "components/cta-banner.tsx"
  "app/about/layout.tsx"
  "app/projects/layout.tsx"
  "app/articles/layout.tsx"
  "app/work/layout.tsx"
  "app/highlights/layout.tsx"
)

REMOVED=0
for f in "${LEGACY_FILES[@]}"; do
  if [ -f "$f" ]; then
    rm "$f"
    echo "  ✗ Removed: $f"
    REMOVED=$((REMOVED + 1))
  fi
done

if [ $REMOVED -gt 0 ]; then
  echo ""
  echo "  Removed $REMOVED legacy file(s)."
else
  echo "  No legacy files found — project is clean."
fi

# Remove Next.js cache
echo ""
echo "🗑️  Clearing .next cache..."
rm -rf .next
echo "  Done."

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install
echo ""

echo "✅ Setup complete! Run: npm run dev"
echo ""
