import { DM_Sans, JetBrains_Mono, Outfit } from "next/font/google"
import type { Viewport } from "next"
import "./funnel.css"

export const viewport: Viewport = {
  themeColor: "#07080f",
}

const funnelBody = DM_Sans({
  subsets: ["latin"],
  variable: "--funnel-dm",
  display: "swap",
})

const funnelHeading = Outfit({
  subsets: ["latin"],
  variable: "--funnel-outfit",
  display: "swap",
})

const funnelMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--funnel-mono",
  display: "swap",
})

export default function AiDesignerBlueprintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${funnelBody.variable} ${funnelHeading.variable} ${funnelMono.variable} ai-designer-funnel ai-designer-funnel--v2 min-h-screen`}
    >
      {children}
    </div>
  )
}
