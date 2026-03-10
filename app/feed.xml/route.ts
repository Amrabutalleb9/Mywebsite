import { articles } from "@/lib/articles"

function parseArticleDate(dateStr: string): string {
  // Convert "Jan 2025" → RFC 822 date string
  const d = new Date(`01 ${dateStr}`)
  return d.toUTCString()
}

export async function GET() {
  const siteUrl = "https://amrabutalleb.com"

  const items = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/articles/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/articles/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${parseArticleDate(article.date)}</pubDate>
      <category>${article.tag}</category>
    </item>`
    )
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Amr Abu-Talleb | Articles</title>
    <link>${siteUrl}/articles</link>
    <description>Thoughts on design, brand strategy, and the craft of creative direction.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(rss.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
