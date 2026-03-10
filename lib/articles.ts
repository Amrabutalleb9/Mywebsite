export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  image?: string
  imageAlt?: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: "your-logo-is-not-your-brand",
    title: "Your logo is not your brand.",
    excerpt: "Most companies get this backwards. Here\u2019s why identity systems matter more than a mark.",
    date: "Jan 2025",
    tag: "BRANDING",
    image: "/images/blog-branding.png",
    imageAlt: "Brand guidelines spread with typography and color swatches, Your logo is not your brand",
    content: [
      "I\u2019m going to tell you something that might sting a little.",
      "Your logo is not your brand. It never was. And that beautiful mark you spent four months agonizing over? It\u2019s doing about 10% of the work you think it\u2019s doing.",
      "I know this because I\u2019ve had this conversation maybe a hundred times. A client reaches out. They\u2019ve got a logo. Sometimes it\u2019s nice. Sometimes it\u2019s genuinely good. And that\u2019s all they\u2019ve got. No color system. No type hierarchy. No graphical elements. No guidelines. Nothing.",
      "Then they say: \u201CLet\u2019s do a campaign.\u201D",
      "And I have to be the one to explain that we\u2019re not ready for a campaign. We\u2019re ready for a conversation about why nobody recognizes their brand across two consecutive Instagram posts.",
      "Here\u2019s what I do. I show them two versions. Rough sketches. Version one: what their campaign looks like without a system. Just a logo floating in the void, surrounded by whatever the designer felt like doing that Tuesday. Version two: what it looks like with a proper brand identity design system. Same logo, but now there\u2019s a type hierarchy, a color language, graphical elements that repeat. Consistency.",
      "They always pick version two. Always.",
      "But here\u2019s the part that surprises them: building that system is where the real money and time goes. Not the logo. The research. The brand positioning. Understanding who the competitors are and where you sit on the ladder. How you\u2019re going to compete on the shelf, on the App Store, on a billboard in JBR. Finding the one emotion your audience is actually looking for and wiring that into every single touchpoint.",
      "That\u2019s the exhausting part. That\u2019s the part that makes or breaks everything. And it\u2019s the part most people skip because they think they\u2019re done after the logo.",
      "I once worked with a food delivery brand. The logo was a spoon inside a bowl. Sounds fine, right? Except the spoon was cut out in a way that made it look like\u2026 well. Let\u2019s just say it resembled something anatomical. And the target market was Turkey, Egypt, and the Middle East. People were going to figure that out fast.",
      "The logo was the least of their problems. But it was the only thing they\u2019d invested in.",
      "We had to start over. Not just the mark, the whole identity. Because a brand system isn\u2019t a logo with a color palette stapled to it. It\u2019s the rules that make your brand recognizable even when the logo isn\u2019t visible.",
      "Think about it. You can spot an Apple ad without seeing the logo. You know a Nike campaign before the swoosh appears. That\u2019s not the logo doing the work. That\u2019s the system.",
      "So if you\u2019re about to invest in your brand, invest in the system. The logo will follow. And for the love of everything, get a second pair of eyes on your spoon.",
    ],
  },
  {
    slug: "directing-a-brand-across-four-markets",
    title: "What directing a brand across eight markets taught me about consistency.",
    excerpt: "Same brand. Eight countries. Zero inconsistency. Here\u2019s how.",
    date: "Nov 2024",
    tag: "STRATEGY",
    image: "/images/blog-markets.png",
    imageAlt: "Abstract blurred figures in black and white, brand consistency across multiple international markets",
    content: [
      "When I joined Overpowered Agency as Creative Director, the brief sounded straightforward. One brand. Multiple markets. UK, Egypt, Dubai, EU, the USA, Australia, Singapore, Canada.",
      "The reality was a mess.",
      "The branding wasn\u2019t done correctly. It was missing graphical elements, missing logo variations, and the logo itself wasn\u2019t even balanced. There was a tone of voice, sort of, but it spoke the same way to everyone. Same language for a startup founder in London and a marketing manager in Cairo. Same messaging for Dubai and Berlin.",
      "That\u2019s not how people work.",
      "The first thing I did was audit everything. The website copy. The social templates. The pitch decks. Then I rewrote the entire website. Several times, actually. We tested. We redesigned. We tested again. As a creative lead, I wasn\u2019t just fixing visuals, I was building the system that should have existed from day one.",
      "But the biggest lesson came from the team.",
      "Here\u2019s what kept happening: designers and copywriters in Egypt would produce work that made perfect sense for Cairo. Clean, effective, well-crafted. And then it would get pushed to the UK or Dubai accounts and it just\u2026 didn\u2019t land.",
      "Not because the work was bad. Because the emotional target was wrong.",
      "I had to sit everyone down and explain something that sounds obvious but apparently isn\u2019t: what works in Egypt doesn\u2019t automatically work in the UK. Every market is a different audience. Every audience has different needs. We\u2019re targeting different emotions in each market. What feels aspirational in Dubai might feel cold in Cairo. What feels bold in London might read as aggressive in the EU.",
      "The solution wasn\u2019t to create four versions of the brand. It was to build one system flexible enough to breathe in each market while staying unmistakably the same brand. The logo never changes. The type system never changes. The color palette never changes. What changes is the content strategy, the imagery selection, and the emotional register.",
      "I documented every rule. Every team member, whether they sat in London or Cairo, worked from the same guidelines. I rebuilt the visual identity, redesigned the social strategy, set creative standards for client work. Quality benchmarks. Art direction guidelines. A shared language the whole team could build from.",
      "The Instagram account hit 20,000 followers under this system. The brand identity now operates across multiple markets with zero inconsistency.",
      "Consistency isn\u2019t about rigidity. It\u2019s about building a system so clear that anyone on your team can execute it without losing the brand\u2019s DNA. Even when they\u2019re 4,000 kilometers away from you.",
    ],
  },
  {
    slug: "typography-is-your-most-underused-design-weapon",
    title: "Typography is your most underused design weapon.",
    excerpt: "If you\u2019re still picking fonts from a dropdown, we need to talk.",
    date: "Sep 2024",
    tag: "DESIGN",
    image: "/images/blog-typography.png",
    imageAlt: "Elegant typographic print reading Life Goes On with editorial layout, typography in brand design and creative direction",
    content: [
      "Typography is the first thing people read and the last thing most designers think about.",
      "And I can tell. I can always tell.",
      "Lines that run 120 characters wide when they should stop at 80. Sentences ending on an \u201Cof\u201D or an \u201Cand\u201D, lines that end without meaning. Widows hanging at the bottom of a paragraph like someone just gave up. And the font pairing. God, the font pairing.",
      "Matching two typefaces is one of the hardest things in design. You need to match the x-height, the contrast, the rhythm, the personality. Pairing two serifs together? Extremely hard. Pairing two sans-serifs? Almost impossible without it looking like a mistake. And yet people do it every day like they\u2019re picking socks.",
      "I treat typography as my primary design tool. Before color. Before layout. Before anything visual, I build the type system. Which face for display? Which for body? How do they talk to each other? What\u2019s the scale? What\u2019s the rhythm?",
      "Let me give you an example.",
      "I designed a book for Steve Hodel, a retired LAPD homicide detective, New York Times bestselling author. The Black Dahlia Avenger series. For that project, I studied Man Ray\u2019s portraits and the typefaces used to describe surrealism in that era. I ended up using Caslon, and the typographic variation, the scale, the weight shifts, the layout rhythm, was built from the same proportions Man Ray used in his compositions.",
      "There was imagery, but it was minimal. The type did the storytelling. It set the pace. It controlled how the reader moved through a true crime investigation. Like a cinematographer controlling a frame, except with letterforms.",
      "Here\u2019s another one. A consultant in Sydney. Simple website. We turned it into a sales funnel, and the main lever wasn\u2019t the colors or the graphics. It was typography. His audience was B2B, these people needed to read. When you make reading easier, when the most important ideas are bigger and the eye flow is natural, everything converts better. His sales went up. Not because we added something flashy. Because we made reading feel effortless.",
      "Do I have a go-to font? No. And I\u2019d be suspicious of any designer who does. Bodoni when you need heritage. Baskerville when you need something different entirely. Caslon for Steve Hodel. Futura when you want an early-80s or 90s energy. Helvetica when it needs to feel corporate, but never Helvetica with a Swiss-style layout. That combination makes your work look like everyone else\u2019s. There needs to be some breakage. Some tension.",
      "If you\u2019re still opening a font picker and scrolling until something catches your eye, you\u2019re leaving your most powerful tool on the table.",
      "Typography isn\u2019t decoration. It\u2019s the design.",
    ],
  },
  {
    slug: "why-every-designer-should-think-like-a-business-owner",
    title: "Why every designer should think like a business owner.",
    excerpt: "The pixel pushers who make it are the ones who understand revenue, positioning, and user behavior.",
    date: "Jul 2024",
    tag: "CAREER",
    image: "/images/blog-business.png",
    imageAlt: "Strategy desk with financial notes, calculator, and Think Different typography overlay, design leadership and business thinking",
    content: [
      "At ADRAW, I was responsible for design and marketing for a software product targeting the US and UK. And that\u2019s where it clicked.",
      "When you\u2019re an employee, you think about the task. When you understand the product cycle, what things cost, where the money goes, what the return looks like, you think about the outcome. Completely different game.",
      "I had to understand where every marketing dollar was going. I had to advise on which campaigns would get the highest return on the lowest investment. I had to think about ROI before I thought about resolution.",
      "That changed everything for me. I stopped designing things that looked good and started designing things that worked. I started learning about strategy. About business. About why a $500 campaign on one channel beats a $5,000 campaign on another.",
      "And once you see it, you can\u2019t unsee it.",
      "Here\u2019s what I do now with every client. When I propose a campaign, I don\u2019t just pitch the creative. I tell them what kind of ROI we\u2019re expecting, why we\u2019re doing this, and how we\u2019re going to test it. Then I suggest something that makes most designers uncomfortable: let\u2019s start with a very low budget. Two ideas. One is safe, one is the bold direction I actually believe in. We test both at small scale.",
      "Then we look at the numbers.",
      "And 100% of the time, not usually, literally every time, the bold one wins. The one where you actually care about the end user and put the business thinking into the creative. That\u2019s what works.",
      "The client doesn\u2019t have to trust my taste. They can trust the data. And because we tested cheaply, they didn\u2019t have to bet the budget on my gut feeling.",
      "Most designers present work in terms of aesthetics. \u201CI chose this color because it feels modern.\u201D That\u2019s fine for art school. In the real world, \u201CI chose this direction because it tested 23% higher in click-through rates with your target demographic\u201D wins every time.",
      "Learn to read a P&L. Understand what conversion means. Know what your client\u2019s KPIs are before you open Figma. That\u2019s how you stop being a pair of hands and start being the person they can\u2019t afford to lose.",
    ],
  },
  {
    slug: "the-case-for-restraint-in-brand-design",
    title: "The case for restraint in brand design.",
    excerpt: "More elements don\u2019t mean more impact. Here\u2019s why subtraction is the most powerful design tool.",
    date: "May 2024",
    tag: "DESIGN",
    image: "/images/blog-restraint.png",
    imageAlt: "Designer sketching logo concepts in a notebook beside a tablet showing color palettes and a cup of coffee",
    content: [
      "Here\u2019s what I tell every junior designer I work with: go crazy first. Add everything. Every effect. Every gradient. Every texture. Get it all out.",
      "Then remove things. One by one. Keep removing until the idea doesn\u2019t work anymore.",
      "Stop there. That\u2019s the design.",
      "Every element that survived? It earned its place. Every element you removed? It was decoration. And decoration is the enemy of design that actually performs.",
      "I learned this the hard way at TapTools. I was working as a product designer, and the team kept wanting to add more features. Not because users asked for them, because competitors had them. They were copying other websites feature by feature, bolting things on without understanding if anyone actually needed them.",
      "I pushed back. I told them we needed to go back to basics. Build our own design system. Base decisions on what real users actually wanted.",
      "They didn\u2019t love that idea.",
      "So I did something slightly insane. I\u2019d already finished their original designs ahead of schedule, so I told them: let me build the alternative on my own time. We\u2019ll A/B test it. No risk to you.",
      "I spent a month working six extra hours after every workday. Redesigned the entire product. Moved everything from XD, which was being discontinued anyway, to Figma. Went through over a hundred one-on-one user interviews I\u2019d conducted. Read every bug report, every Discord complaint, every thread on X. And I built the product around what people actually wanted, not what competitors were doing.",
      "Subtraction won.",
      "Junior designers are usually flashy. Effects, videos, GIFs, animations stacked on top of each other. The eye doesn\u2019t know where to go. It just\u2026 scatters. And scattered attention is the same as no attention.",
      "Good design isn\u2019t about having everything in your pantry on the plate. It\u2019s about the small details. Every decision intentional. Every element earning its place.",
      "The best brands in the world are built on restraint. They don\u2019t compete by being the loudest. They compete by being the clearest.",
      "If your design needs a lot of explanation, it\u2019s not done yet. Keep subtracting. Keep going until what remains is inevitable.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAdjacentArticles(slug: string) {
  const index = articles.findIndex((a) => a.slug === slug)
  const prev = index > 0 ? articles[index - 1] : null
  const next = index < articles.length - 1 ? articles[index + 1] : null
  return { prev, next }
}

export function getReadingTime(article: Article): string {
  const words = article.content.join(" ").split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 230))
  return `${minutes} min read`
}
