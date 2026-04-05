import { DM_Sans, Syne } from "next/font/google"
import type { Viewport } from "next"
import "./funnel.css"

export const viewport: Viewport = {
  themeColor: "#0a0612",
}

const funnelBody = DM_Sans({
  subsets: ["latin"],
  variable: "--f2-body",
  display: "swap",
})

const funnelDisplay = Syne({
  subsets: ["latin"],
  variable: "--f2-display",
  display: "swap",
})

export default function AiDesignerBlueprintV2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${funnelBody.variable} ${funnelDisplay.variable} ai-designer-funnel-v2 min-h-screen`}>
      {children}
    </div>
  )
}
