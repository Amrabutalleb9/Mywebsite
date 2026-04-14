import type { Metadata } from "next"
import FunnelClientV3 from "./funnel-client"

const base = "https://amrabutalleb.com"

export const metadata: Metadata = {
  title: "The AI Designer Blueprint — $1,500 in 7 Days on Freelancer.com",
  description:
    "Exact AI tools, bid templates, and a 7-day sprint toward $1,500 on Freelancer.com. 47-page PDF. $5.99 launch price.",
  alternates: { canonical: "/ai-designer-blueprint/v3" },
  openGraph: {
    title: "The AI Designer Blueprint — $1,500 in 7 Days on Freelancer.com",
    description:
      "Exact tools, proposals, and day-by-day execution. PDF instant download — $5.99.",
    type: "website",
    url: `${base}/ai-designer-blueprint/v3`,
    images: [
      {
        url: `${base}/ai-designer-blueprint/book-mockup.svg`,
        width: 520,
        height: 680,
        alt: "The AI Designer Blueprint book cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Designer Blueprint — $1,500 in 7 Days on Freelancer.com",
    description: "47-page execution PDF. AI tools + Freelancer.com system. $5.99.",
    images: [`${base}/ai-designer-blueprint/book-mockup.svg`],
  },
  robots: { index: true, follow: true },
}

export default function AiDesignerBlueprintV3Page() {
  return <FunnelClientV3 />
}
