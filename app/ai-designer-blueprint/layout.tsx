/**
 * Blueprint routes share this pass-through layout only.
 * v1 funnel wrapper + CSS live under `(funnel-v1)` so v2/v3 are not styled by `.ai-designer-funnel`.
 */
export default function AiDesignerBlueprintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
