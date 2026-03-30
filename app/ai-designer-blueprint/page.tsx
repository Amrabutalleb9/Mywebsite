import type { Metadata } from "next"
import FunnelClient from "./funnel-client"

const base = "https://amrabutalleb.com"

export const metadata: Metadata = {
  title: "The AI Designer Blueprint — $500 in 7 Days",
  description:
    "The step-by-step system to make your first $500 on Freelancer.com in 7 days using AI design tools. No design experience required.",
  alternates: { canonical: "/ai-designer-blueprint" },
  openGraph: {
    title: "The AI Designer Blueprint — $500 in 7 Days",
    description:
      "Make your first $500 on Freelancer.com in 7 days using AI design tools. The complete system by Amr Abu-Talleb.",
    type: "website",
    url: `${base}/ai-designer-blueprint`,
    images: [
      {
        url: `${base}/ai-designer-blueprint/book-mockup.png`,
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Designer Blueprint — $500 in 7 Days",
    description:
      "Make your first $500 on Freelancer.com in 7 days using AI design tools. The complete system by Amr Abu-Talleb.",
    images: [`${base}/ai-designer-blueprint/book-mockup.png`],
  },
  robots: { index: true, follow: true },
}

export default function AiDesignerBlueprintPage() {
  return <FunnelClient />
}
