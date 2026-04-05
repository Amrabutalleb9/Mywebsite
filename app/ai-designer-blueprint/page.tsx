import type { Metadata } from "next"
import FunnelClient from "./funnel-client"

const base = "https://amrabutalleb.com"

export const metadata: Metadata = {
  title: "AI Designer Blueprint (2026) — $500 in 7 Days System | Amr Abu-Talleb",
  description:
    "Download the step-by-step PDF: AI design stack, Freelancer.com bids, week-one pricing, and a 7-day calendar — built to land your first $500 client fast. Instant PDF.",
  alternates: { canonical: "/ai-designer-blueprint" },
  openGraph: {
    title: "AI Designer Blueprint — Your First $500 Client in 7 Days",
    description:
      "The execution playbook for Freelancer.com + AI design: tools, proposals, pricing, and a day-by-day plan. PDF instant download.",
    type: "website",
    url: `${base}/ai-designer-blueprint`,
    images: [
      {
        url: `${base}/ai-designer-blueprint/book-mockup.png`,
        width: 1200,
        height: 630,
        alt: "The AI Designer Blueprint book cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Designer Blueprint — $500 in 7 Days System",
    description:
      "Freelancer.com + AI design: the tools, bids, pricing, and 7-day calendar in one PDF.",
    images: [`${base}/ai-designer-blueprint/book-mockup.png`],
  },
  robots: { index: true, follow: true },
}

export default function AiDesignerBlueprintPage() {
  return <FunnelClient />
}
