"use client"

import FadeIn from "./fade-in"
import { blogPosts } from "@/lib/constants"

export default function BlogPreview() {
  return (
    <section id="blog" className="mx-auto max-w-[1280px] px-6 py-[clamp(80px,10vw,140px)]">
      <FadeIn as="h2" className="mb-2 text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight text-foreground">
        Insights
      </FadeIn>
      <FadeIn as="p" className="mb-12 text-muted-foreground">
        On branding, creative leadership, and what it takes to build something people remember.
      </FadeIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <FadeIn key={post.title} as="article" delay={i * 0.08} className="group">
            <div className="mb-4 flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg bg-accent/10">
              <span className="text-sm font-medium text-accent/60">Article</span>
            </div>
            <h3 className="mb-2 font-bold text-foreground">{post.title}</h3>
            <p className="mb-3 text-sm text-muted-foreground">{post.excerpt}</p>
            <span className="text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
              Read more
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
