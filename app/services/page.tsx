import type { Metadata } from "next"
import ServicesPage from "@/components/services-page"
import LazyCustomCursor from "@/components/lazy-cursor"
import TypesetDom from "@/components/typeset-dom"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  ...pageMeta({
    title: "I design the work · Amr Abu-Talleb",
    description:
      "I design brands, campaigns, decks and products for startups and agencies so they read as one company. A written review, a launch sprint, or a few hours a week.",
    path: "/services",
  }),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function Page() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <ServicesPage />
      <LazyCustomCursor />
      <TypesetDom />
    </>
  )
}
