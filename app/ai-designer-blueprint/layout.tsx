import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import type { Viewport } from "next"
import "./funnel.css"

export const viewport: Viewport = {
  themeColor: "#fafaf9",
}

const funnelDm = DM_Sans({
  subsets: ["latin"],
  variable: "--funnel-dm",
  display: "swap",
})

const funnelSpace = Space_Grotesk({
  subsets: ["latin"],
  variable: "--funnel-space",
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
      className={`${funnelDm.variable} ${funnelSpace.variable} ${funnelMono.variable} ai-designer-funnel min-h-screen`}
    >
      {children}
    </div>
  )
}
