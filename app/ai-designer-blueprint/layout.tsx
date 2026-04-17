import type { Metadata } from "next"

const base = "https://amrabutalleb.com"

export const metadata: Metadata = {
  title: "The AI Designer Blueprint — $5.99",
  description:
    "A practical playbook to earn your first $1,500 as an AI-savvy designer: tools, profile, services, bids, and a 7-day action plan.",
  alternates: { canonical: "/ai-designer-blueprint" },
  openGraph: {
    title: "The AI Designer Blueprint — $5.99",
    description:
      "A practical playbook to earn your first $1,500 as an AI-savvy designer: tools, profile, services, bids, and a 7-day action plan.",
    url: `${base}/ai-designer-blueprint`,
    images: [
      {
        url: `${base}/ai-designer-blueprint/assets/files/brand-logo-fist-pen.png`,
        width: 512,
        height: 512,
        alt: "The AI Designer Blueprint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Designer Blueprint — $5.99",
    description:
      "A practical playbook to earn your first $1,500 as an AI-savvy designer: tools, profile, services, bids, and a 7-day action plan.",
    images: [`${base}/ai-designer-blueprint/assets/files/brand-logo-fist-pen.png`],
  },
}

export default function AiDesignerBlueprintLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
