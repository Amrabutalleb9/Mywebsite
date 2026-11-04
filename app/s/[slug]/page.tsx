import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

import TypesetDom from "@/components/typeset-dom"
import { getStorefrontPreview, storefrontPreviews, type PreviewImage } from "@/lib/storefront-previews"

/*
 * Storefront email preview: /s/<slug>. One page per sales email, so a visit can be
 * counted against that business (functions/s/[[path]].js logs it). These pages are
 * private links: noindex, disallowed in robots.ts, never in the sitemap. No motion,
 * so there is nothing to switch off for prefers-reduced-motion.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return storefrontPreviews.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const preview = getStorefrontPreview(slug)
  return {
    title: { absolute: preview ? `Redesign concept for ${preview.business}` : "Redesign concept" },
    description: "A redesign concept by Amr Abu-Talleb.",
    alternates: { canonical: null },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
  }
}

const EMAIL = "hello@amrabutalleb.com"

function Shot({ label, image, alt, priority }: { label: string; image: PreviewImage; alt: string; priority?: boolean }) {
  return (
    <figure>
      <figcaption className="mb-4 text-xs font-semibold tracking-[var(--tracking-sublabel)] text-foreground/70 uppercase">
        {label}
      </figcaption>
      <div className="overflow-hidden rounded-2xl border border-border bg-primary">
        <Image
          src={image.src}
          alt={image.alt ?? alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </figure>
  )
}

export default async function StorefrontPreviewPage({ params }: Props) {
  const { slug } = await params
  const preview = getStorefrontPreview(slug)
  if (!preview) notFound()

  const { business } = preview
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(`Redesign concept for ${business}`)}`

  return (
    <>
      <header className="wrap pt-8">
        <Link href="/" className="text-sm font-bold text-foreground">
          Amr Abu-Talleb
        </Link>
      </header>

      <main id="main-content" className="wrap pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-[60ch]">
          {preview.example && (
            <p className="mb-4 text-[length:var(--text-micro)] font-semibold tracking-[var(--tracking-sublabel)] text-accent uppercase">
              Example page for testing
            </p>
          )}
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">Redesign concept</p>
          </div>
          <h1 className="max-w-[20ch] font-serif text-[length:var(--text-page)] font-normal leading-[var(--leading-tight)] tracking-tight text-foreground">
            A new look for {business}
          </h1>
          <p className="mt-6 text-lg leading-[var(--leading-body)] text-muted-foreground">
            {preview.note ??
              "Here is your current website next to a redesign concept I made for it. It is my own concept, so nothing on your live site has changed."}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Shot label="Current site" image={preview.before} alt={`Current website of ${business}`} />
          <Shot label="Redesign concept" image={preview.after} alt={`Redesign concept for the ${business} website`} priority />
        </div>

        <section className="mt-24 max-w-[60ch] border-t border-border pt-12" aria-labelledby="reply-heading">
          <h2
            id="reply-heading"
            className="font-serif text-[length:var(--text-sub)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground"
          >
            Like where this is going?
          </h2>
          <p className="mt-6 leading-[var(--leading-body)] text-muted-foreground">
            Reply to my email, or write to me at{" "}
            <a href={mailto} className="link-inline">
              {EMAIL}
            </a>
            . I&rsquo;ll tell you what it takes to put it live on your site.
          </p>
          <a href={mailto} className="btn btn-primary mt-8">
            Reply to Amr <ArrowUpRight size={14} className="cta-arrow" aria-hidden="true" />
          </a>
          <p className="mt-12 font-serif text-2xl text-foreground">Amr</p>
        </section>
      </main>
      <TypesetDom />
    </>
  )
}
