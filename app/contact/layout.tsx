import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Amr Abu-Talleb for creative direction, brand strategy, and UX consulting. Available for senior roles in Dubai and international engagements.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Amr Abu-Talleb",
    description:
      "Get in touch for creative direction and brand strategy. Available for senior roles in Dubai.",
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
