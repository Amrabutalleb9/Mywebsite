import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get in Touch | Creative Direction & Brand Consulting",
  description:
    "Reach out for creative direction, brand strategy, or UX consulting. Book a free discovery call or send a message.",
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
