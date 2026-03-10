import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Amr Abu-Talleb for senior creative roles, brand strategy projects, and design leadership opportunities in the UAE.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Amr Abu-Talleb | Creative Director · Dubai",
    description:
      "Available for senior creative roles and select freelance projects. Reach out to discuss brand strategy, creative direction, and design leadership.",
  },
  twitter: {
    card: "summary",
    title: "Contact Amr Abu-Talleb | Creative Director · Dubai",
    description:
      "Available for senior creative roles and select freelance projects. Reach out to discuss brand strategy, creative direction, and design leadership.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
