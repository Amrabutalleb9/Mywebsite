/**
 * Static funnel bundle from `public/ai-designer-blueprint/` (exported from ai-designer-blueprint-local).
 * Full-viewport iframe keeps `/ai-designer-blueprint` working with `output: 'export'` (no server rewrites).
 */
export default function AiDesignerBlueprintPage() {
  return (
    <main className="fixed inset-0 z-[200] bg-[#0D1117]">
      <iframe
        title="The AI Designer Blueprint"
        src="/ai-designer-blueprint/index.html"
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
    </main>
  )
}
