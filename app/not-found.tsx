import Link from "next/link"
import SiteChrome from "@/components/site-chrome"

export default function NotFound() {
  return (
    <SiteChrome>
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[length:var(--text-display)] font-serif font-bold leading-[var(--leading-display)] tracking-[var(--tracking-display)]">
        404
      </p>
      <p className="mt-4 text-[length:var(--text-body-lg)] text-muted-foreground">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[length:var(--text-body-sm)] font-medium text-background transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </main>
    </SiteChrome>
  )
}
