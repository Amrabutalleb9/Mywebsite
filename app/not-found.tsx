import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="mb-4 text-xs font-medium tracking-[0.15em] text-accent uppercase">404</p>
      <h1 className="mb-4 font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mb-10 max-w-[40ch] text-center leading-relaxed text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </main>
  )
}
