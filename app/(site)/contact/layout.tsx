import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Contact · Amr Abu-Talleb",
  description:
    "Hiring someone to design, build and lead the team? Remote, or in Europe. Send a message or reach me on LinkedIn. I reply within 24 hours.",
  path: "/contact",
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
