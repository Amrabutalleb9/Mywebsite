import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { articles, getReadingTime } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Articles",
  description: "Thinking out loud about brand strategy, creative direction, typography, and design leadership.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles · Amr Abu-Talleb",
    description: "Thinking out loud about brand strategy, creative direction, typography, and design leadership.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles · Amr Abu-Talleb",
    description: "Thinking out loud about brand strategy, creative direction, typography, and design leadership.",
  },
}

export default function ArticlesPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <h1 className="mb-4 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight text-foreground">
        Articles
      </h1>
      <p className="mb-20 max-w-lg text-muted-foreground">
        Thinking out loud about brand strategy, creative direction, typography, and&nbsp;the business of&nbsp;design.
      </p>

      <div className="flex flex-col">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group"
          >
            <article className="border-b border-border py-10 transition-colors hover:border-accent/40">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                <div className="lg:w-[65%]">
                  <div className="mb-3">
                    <span className="rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent uppercase">
                      {article.tag}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-normal tracking-tight text-foreground transition-colors group-hover:text-accent lg:text-3xl">
                    {article.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{article.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 lg:w-[35%] lg:justify-end">
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                  <span className="text-xs text-muted-foreground/50">&middot;</span>
                  <span className="text-sm text-muted-foreground">{getReadingTime(article)}</span>
                  <ArrowUpRight size={16} className="text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
