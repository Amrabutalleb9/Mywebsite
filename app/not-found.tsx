import Link from "next/link"
import type { Metadata } from "next"
import SiteChrome from "@/components/site-chrome"

export const metadata: Metadata = {
  title: { absolute: "Page not found · Amr Abu-Talleb" },
  robots: { index: false, follow: false },
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <SiteChrome>
    <main className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[length:var(--text-display)] font-serif font-normal leading-[var(--leading-display)] tracking-[var(--tracking-display)]">
        404<span className="sr-only">: page not found</span>
      </h1>
      <p className="mt-4 text-[length:var(--text-body-lg)] text-muted-foreground">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn btn-primary mt-8"
      >
        Back to Home
      </Link>
    </main>
    </SiteChrome>
  )
}
