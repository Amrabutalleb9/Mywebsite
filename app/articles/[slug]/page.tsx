import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { articles, getArticleBySlug, getAdjacentArticles, getReadingTime } from "@/lib/articles"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  const ogImage = article.image
    ? [{ url: `https://amrabutalleb.com${article.image}`, width: 1200, height: 630, alt: article.imageAlt || article.title }]
    : undefined
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: `${article.title} · Amr Abu-Talleb`,
      description: article.excerpt,
      type: "article",
      url: `https://amrabutalleb.com/articles/${slug}`,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} · Amr Abu-Talleb`,
      description: article.excerpt,
      images: ogImage,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const { prev, next } = getAdjacentArticles(slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: "Amr Abu-Talleb" },
    datePublished: article.date,
    url: `https://amrabutalleb.com/articles/${slug}`,
    image: article.image ? `https://amrabutalleb.com${article.image}` : undefined,
    publisher: { "@type": "Person", name: "Amr Abu-Talleb" },
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://amrabutalleb.com" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://amrabutalleb.com/articles" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://amrabutalleb.com/articles/${slug}` },
    ],
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <article className="mx-auto max-w-[65ch]">
        {/* Back link */}
        <Link
          href="/articles"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          All Articles
        </Link>

        {/* Tag + Date + Reading time */}
        <div className="mb-6 flex items-center gap-4">
          <span className="rounded-sm bg-accent px-3 py-1 text-xs font-medium text-accent-foreground uppercase">
            {article.tag}
          </span>
          <span className="text-sm text-muted-foreground">{article.date}</span>
          <span className="text-xs text-muted-foreground/50">&middot;</span>
          <span className="text-sm text-muted-foreground">{getReadingTime(article)}</span>
        </div>

        {/* Title */}
        <h1 className="mb-10 font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
          {article.title}
        </h1>

        {/* Featured image */}
        {article.image && (
          <div className="mb-12 overflow-hidden rounded-lg">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              width={1200}
              height={630}
              className="h-auto w-full"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-6 text-[17px] leading-[var(--leading-longform)] text-muted-foreground">
          {article.content.map((paragraph, i) => (
            <p key={`p-${i}`}>{paragraph}</p>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
          {prev ? (
            <Link
              href={`/articles/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Previous Article
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/articles/${next.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Next Article
              <ArrowRight size={16} />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>
    </main>
    </>
  )
}
