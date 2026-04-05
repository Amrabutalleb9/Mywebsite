import type { Metadata } from "next"
import FunnelClientV2 from "./funnel-client"

const base = "https://amrabutalleb.com"

export const metadata: Metadata = {
  title: "AI Designer Blueprint (alt) — Income anxiety to action | PDF",
  description:
    "A 47-page PDF: AI design stack, Freelancer.com bids, week-one pricing, and a 7-day plan — for people who feel the income squeeze and want a real sprint, not hype.",
  alternates: { canonical: "/ai-designer-blueprint/v2" },
  openGraph: {
    title: "AI Designer Blueprint — From income anxiety to a 7-day client sprint",
    description:
      "Turn AI into a side-income system on Freelancer.com. PDF: tools, proposals, pricing, calendar. $5.99.",
    type: "website",
    url: `${base}/ai-designer-blueprint/v2`,
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
    title: "AI Designer Blueprint (comparison) — 7-day $500 sprint PDF",
    description: "Fear-to-plan funnel: Freelancer.com + AI tools + day-by-day execution.",
    images: [`${base}/ai-designer-blueprint/book-mockup.png`],
  },
  robots: { index: true, follow: true },
}

export default function AiDesignerBlueprintV2Page() {
  return <FunnelClientV2 />
}
