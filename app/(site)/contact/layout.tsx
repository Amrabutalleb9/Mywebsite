import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hiring a Creative Director, or need one for a project? Send a message and I'll reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Amr Abu-Talleb",
    description:
      "Open to Creative Director roles in Europe, on-site or remote.",
    url: "https://amrabutalleb.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact · Amr Abu-Talleb",
    description:
      "Get in touch for creative direction and brand strategy.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
