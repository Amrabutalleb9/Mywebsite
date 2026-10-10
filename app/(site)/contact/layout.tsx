import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Hire a Creative Director · Amr Abu-Talleb",
  description:
    "Hiring a Creative Director in Europe or remote, or want to collaborate? Send a message and I'll reply within 24 hours.",
  path: "/contact",
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
