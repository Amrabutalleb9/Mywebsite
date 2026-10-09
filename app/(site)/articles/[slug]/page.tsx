import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { articles, getArticleBySlug, getAdjacentArticles, getReadingTime, formatMonth, wasUpdated } from "@/lib/articles"
import FadeIn from "@/components/fade-in"

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
    title: { absolute: article.seoTitle },
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: "Amr Abu-Talleb", url: "https://amrabutalleb.com/about" }],
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: `${article.seoTitle} · Amr Abu-Talleb`,
      description: article.description,
      type: "article",
      url: `https://amrabutalleb.com/articles/${slug}`,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: ["Amr Abu-Talleb"],
      tags: article.keywords,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.seoTitle} · Amr Abu-Talleb`,
      description: article.description,
      images: ogImage,
    },
  }
}

/** Turns [text](/path) into links; everything else stays plain text. */
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!m) return part
    return (
      <Link key={i} href={m[2]} className="text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent">
        {m[1]}
      </Link>
    )
  })
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
    headline: article.seoTitle,
    description: article.description,
    keywords: article.keywords.join(", "),
    articleSection: article.tag,
    wordCount: article.content.join(" ").split(/\s+/).length,
    mainEntityOfPage: `https://amrabutalleb.com/articles/${slug}`,
    author: { "@type": "Person", name: "Amr Abu-Talleb", jobTitle: "Creative Director", url: "https://amrabutalleb.com/about" },
    datePublished: article.published,
    dateModified: article.updated,
    url: `https://amrabutalleb.com/articles/${slug}`,
    image: article.image ? `https://amrabutalleb.com${article.image}` : undefined,
    publisher: {
      "@type": "Organization",
      name: "Amr Abu-Talleb",
      logo: {
        "@type": "ImageObject",
        url: "https://amrabutalleb.com/images/amr-portrait.webp",
      },
    },
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
        <FadeIn>
          <Link
            href="/articles"
            className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            All Articles
          </Link>
        </FadeIn>

        {/* Tag + Date + Reading time */}
        <FadeIn>
          <div className="mb-6 flex items-center gap-4">
            <span className="rounded-sm bg-accent px-3 py-1 text-xs font-medium text-accent-foreground uppercase">
              {article.tag}
            </span>
            <span className="text-sm text-muted-foreground">
              {wasUpdated(article) ? <>Updated <time dateTime={article.updated}>{formatMonth(article.updated)}</time></> : <time dateTime={article.published}>{article.date}</time>}
            </span>
            <span className="text-xs text-muted-foreground/50">&middot;</span>
            <span className="text-sm text-muted-foreground">{getReadingTime(article)}</span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.05}>
          <h1 className="mb-10 font-serif text-[length:var(--text-section)] font-normal leading-[var(--leading-heading)] tracking-tight text-foreground">
            {article.title}
          </h1>
        </FadeIn>

        {/* Featured image */}
        {article.image && (
          <FadeIn delay={0.1} as="div" className="mb-12 overflow-hidden rounded-lg">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              width={1200}
              height={630}
              className="h-auto w-full"
              priority
            />
          </FadeIn>
        )}

        {/* Content */}
        <FadeIn delay={0.15} as="div" className="flex flex-col gap-6 text-[17px] leading-[var(--leading-longform)] text-muted-foreground">
          {article.content.map((paragraph, i) =>
            paragraph.startsWith("## ") ? (
              <h2
                key={`h-${i}`}
                className="mt-8 font-serif text-2xl font-normal leading-[var(--leading-heading)] tracking-tight text-foreground lg:text-3xl"
              >
                {paragraph.slice(3)}
              </h2>
            ) : (
              <p key={`p-${i}`}>{renderInline(paragraph)}</p>
            ),
          )}
        </FadeIn>

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
