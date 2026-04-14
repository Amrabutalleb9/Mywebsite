/**
 * Sales page copy — sales-page-copy-final-v7.md (source of truth)
 * Use **double asterisks** in strings for bold segments (rendered via RichText).
 */

export type V7StoryBlock = {
  title?: string
  paragraphs: readonly string[]
}

export type V7InsideItem = {
  title: string
  body: string
}

export type V7TestimonialPlaceholder = {
  imageAlt: string
  name: string
  role: string
  quote: string
}

export const V7 = {
  meta: {
    title: "The AI Designer Blueprint",
    price: 5.99,
    priceWas: 19.99,
    discountLabel: "70% OFF — LAUNCH PRICE",
  },

  hero: {
    eyebrow: "PDF blueprint · Freelancer.com",
    line1: "Your skills aren't the problem.",
    line2: "Your system is.",
    lede: "The 7-day sprint that turns AI tools into $1,500 on Freelancer.com.",
    proof: ["Instant PDF", "30-day money-back", "Start tonight"] as const,
  },

  offer: {
    cta: "Download the blueprint — $5.99",
    ctaShort: "Get the blueprint — $5.99",
    ctaFinal: "Download the blueprint now",
  },

  reality: {
    label: "Let's talk about what no one wants to say out loud.",
    title: "AI didn't come for the factory workers first. It came for you.",
    paragraphs: [
      "Designers. Copywriters. Developers. Marketers. People who spent years learning a craft, building portfolios, earning their seat — getting replaced by a tool that didn't exist two years ago. Entire teams dissolved in a single quarterly email. \"We've made the difficult decision…\" — you know the sentence. Maybe you've received it. Maybe you're watching it happen to people around you, wondering when your name shows up.",
      "And here's what makes it worse: the same technology that's eliminating jobs is also creating the biggest freelance opportunity in a decade. AI-augmented designers are charging 25–60% more than those who don't use these tools. The freelance platform market is growing at 15.3% annually. 84% of freelancers now use AI in their workflow.",
      "**The money didn't disappear. It moved.** Companies that used to hire full-time designers are now posting $200–$500 projects on freelance platforms and getting the work done in 48 hours. That shift destroyed careers and created a massive opportunity at the exact same time.",
      "But knowing that doesn't help you. Because the internet's version of \"help\" is some guy with a ring light telling you he made $10K last month with ChatGPT — and when you click, it's a 45-minute video that tells you nothing. No tools. No platform. No price to charge. No step one.",
      "You've bookmarked the tools. You've watched the tutorials. You've read the threads. **You still haven't earned a single dollar from any of it.**",
      "You're not lazy. You're not behind. **You just don't have a system.**",
      "You have scattered notes and half-finished ideas and a vague plan to \"figure it out eventually.\" But eventually doesn't pay rent. Eventually doesn't compound. Eventually is how people stay exactly where they are — watching other people build the life they wanted.",
      "I know this because I lived it.",
    ],
  },

  story: {
    label: "Here's my story",
    title: "I'm not proud of all of it.",
    blocks: [
      {
        paragraphs: [
          "My name is Amr. I've been a designer for 13+ years — across the UAE, USA, Europe. Real companies. Real projects. Real craft.",
          "And not long ago, I took the decision to go on my own. Own my time. Work directly with clients instead of leading design firms for someone else's bottom line.",
          "So I tried Upwork first. Spent money on Connects — their paid currency to send proposals. Lost it. Tried Fiverr. Set up gigs. Waited. The gigs sat there like furniture nobody wanted. Weeks passed. Zero income.",
          "Then I tried Freelancer.com. Zero reviews. Zero clients. A profile I'd set up in three minutes.",
          "I knew typography. I knew grid layouts, brand systems, the whole thing. **None of it mattered.** On the platform, I was invisible. Just another name in a pile of 100+ proposals that landed within 60 seconds of the project posting.",
          "I'd spend 45 minutes writing a proposal. Hear nothing. Refresh. Nothing. Bid on something else. Nothing. The loop was humiliating — not because I couldn't design, but because I couldn't get anyone to see that I could.",
          "I started losing my life savings. And I started questioning my life choices.",
          "*Should I go back to a 9-to-5 and put up with agencies for pennies?*",
        ],
      },
      {
        title: "Here's the part I'm embarrassed to admit:",
        paragraphs: [
          "I had the skills the entire time. What I didn't have was a system — a way to get hired when nobody knows who you are, on a platform that rewards speed and volume, not just talent.",
          "And I definitely didn't have AI in my workflow. Not yet.",
        ],
      },
      {
        title: "Then something changed.",
        paragraphs: [
          "I stopped treating freelancing like \"I'll figure it out as I go\" and started treating it like an engineering problem.",
          "I went back to Freelancer.com — but this time, I studied the platform. How bids get ranked. Why some projects get 40 proposals in a minute. What actually makes a client click on your name instead of the next one.",
          "And I discovered that AI tools had gotten good enough to generate multiple design concepts in minutes — not hours. What used to take me days to finish.",
          "One tool could render accurate text inside logos. Another could build a full pitch deck in seconds. A third could generate a complete responsive website from a text description.",
          "But the tools were only half the problem.",
          "**Nobody was teaching how to connect the tools to the money.**",
          "And nobody talked about the AI costs — how just trying different tools can drain your money on subscriptions here and there before you've earned a cent.",
          "Which tools for which service. What to charge when you have no reputation. How to write a bid that doesn't get buried. How to deliver files that don't get you a complaint.",
          "I figured it out through weeks of testing, failing, adjusting. Then I compressed everything into a 7-day system.",
          "**And it worked.**",
          "I tested it week after week. Not \"kind of\" worked. Not \"eventually\" worked.",
          "By the end of week one, I had paying clients. Reviews on my profile. A pipeline of conversations carrying into week two. And a number in my account that proved this wasn't theory.",
        ],
      },
      {
        title: "Here's what life looked like with the system running.",
        paragraphs: [
          "I woke up knowing exactly what to do. Not \"maybe I'll check for projects today.\" A specific number of bids. A specific number of contests. A follow-up routine. A tracker that told me — am I on pace or not?",
          "I stopped guessing what to charge.",
          "I stopped fearing the empty profile.",
          "And with AI generating 15–20 concepts in minutes, my entries were consistently competitive.",
          "The anxiety of \"will I ever make money from this?\" was replaced by a calendar. Tasks. Numbers. Progress you could measure.",
          "**That shift — from hoping to executing — is what this blueprint gives you.**",
          "I wrote everything down. Every tool, every price, every template, every daily target. 47 pages. No motivation. No theory. Just the system, start to finish — so you don't have to spend weeks figuring out what I already figured out, or hundreds of dollars in subscriptions to reach the same answer.",
        ],
      },
    ] satisfies readonly V7StoryBlock[],
  },

  honesty: {
    label: "Straight talk",
    title: "But I need to be honest about what this requires.",
    paragraphs: [
      "This is not passive income. It's not a hack. It's not \"set it up once and walk away.\"",
      "The $1,500 target requires 8–10 hours a day for 7 days. 15–20 personalized bids daily. 3–4 contest entries. Delivering projects within 24–48 hours. It's a sprint.",
      "**Ambitious. Not guaranteed. But the arithmetic is real, the variables are explained in the book, and you can verify every number before you send a single bid.**",
      "If you want something easy, this isn't it.",
      "If you want something that works — and you're willing to put in one hard week — keep reading.",
      "And that $1,500? That's just the tip of the iceberg. It only gets better from there.",
      "**The entire system is in a 47-page PDF. For the launch, it's $5.99.**",
    ],
  },

  inside: {
    label: "Inside the PDF",
    title: "Here's what you'll find inside — but just enough to show you this isn't theory.",
    items: [
      {
        title: "How to build a professional portfolio in one afternoon — with zero clients.",
        body: "Most people get stuck here. \"I don't have work to show.\" The book gives you the exact 4-piece portfolio to create using free AI tools: 3 logo concepts, a 5-post Instagram pack, a pitch deck, and a landing page — all presented in mockups that make $150 work look like $500. *(Chapter 3, Step 4)*",
      },
      {
        title: "Why you should never charge by the hour — and the exact formula that captures 2x more revenue.",
        body: "With AI, a logo takes 1–2 hours instead of 8–12. Hourly billing punishes you for being fast. The book breaks down the package pricing template line by line — the same format you'll paste into every bid. *(Chapter 4, \"The Pricing Philosophy\")*",
      },
      {
        title: "The Now–Wow–How proposal formula — written out on a real project.",
        body: "I didn't just describe how to write a good bid. I opened a real Freelancer.com project listing and wrote the entire proposal live, line by line, explaining why each sentence is there. 3–5 minutes per bid. Outperforms 90% of what other freelancers send. *(Chapter 5, \"The Proposal Formula\")*",
      },
      {
        title: "The exact daily routine that turns 8 hours into $200+ per day.",
        body: "Morning: 7–10 bids on fresh projects plus 1–2 contest entries. Midday: 4–5 more bids, follow up on conversations. Evening: final 5–6 bids, deliver active projects. The book maps out the rhythm hour by hour — including why weekends are your secret weapon. *(Chapter 5, \"Speed Wins\")*",
      },
      {
        title: "A $0/month AI stack that covers all four services.",
        body: "No paid subscriptions needed to start. Canva Free for social media. Gamma Free for presentations. Ideogram Free for logos. Framer AI Free for web design. Vectorizer.ai for converting raster logos to vectors. The book names every tool, explains what it does, and tells you which popular ones to skip. *(Chapter 2, \"Your $0 Starter Stack\")*",
      },
    ] satisfies readonly V7InsideItem[],
    closing: "**I'm not going to lay out every detail here. That's what the book is for.**",
  },

  testimonials: {
    label: "Proof",
    title: "Readers with the book in hand",
    note: "Replace with real photos and testimonials as they come in. Even 2–3 is enough. The book-in-hand photo is the key — it makes the product tangible and the social proof visual, not just text.",
    items: [
      {
        imageAlt: "Person 1 holding The AI Designer Blueprint",
        name: "[Name]",
        role: "[Role/Background]",
        quote: "[Their testimonial quote about the book]",
      },
      {
        imageAlt: "Person 2 holding The AI Designer Blueprint",
        name: "[Name]",
        role: "[Role/Background]",
        quote: "[Their testimonial quote about the book]",
      },
      {
        imageAlt: "Person 3 holding The AI Designer Blueprint",
        name: "[Name]",
        role: "[Role/Background]",
        quote: "[Their testimonial quote about the book]",
      },
    ] satisfies readonly V7TestimonialPlaceholder[],
  },

  after1500: {
    label: "After the sprint",
    title: "What changes after the first $1,500.",
    lead: "The money is real. But the money isn't actually the point.",
    paragraphs: [
      "The point is Day 8. You wake up with reviews on your profile. Clients already in your inbox. A system you know how to repeat. The question isn't \"can I do this?\" anymore — it's \"how far do I want to take it this month?\"",
      "You have a portfolio of paid work — not mockups for fake brands, but actual deliverables that real clients approved and paid for.",
      "You have a pricing floor. You tested it against the market. Next week you raise prices 20% and keep winning — because now you have the reviews to justify it.",
      "You have a niche forming. By Day 7, you'll know which service wins the most, which clients respond fastest, and where your competitive edge sits. Clarity that takes most freelancers months. The sprint gives it to you in a week.",
      "**The $1,500 was the proof of concept. What comes after is the business.**",
      "The book maps out the next 90 days: weeks 2–4 you build reviews to 10+ and raise rates 20–30%. Month 2 you transition to targeted niche bidding and offer retainers at $300–$500/month. Month 3 you add premium service tiers at $500–$800 and target $5,000–$10,000/month. *(Chapter 7, \"The Path Forward\")*",
    ],
  },

  midCta: {
    title: "Still scrolling? That's the pattern.",
    body: "Scroll, bookmark, \"come back later,\" never start. You know the loop. You've done it a hundred times with a hundred other things. This one is $5.99. You can start tonight. The system works. The only variable left is whether you decide to use it.",
  },

  audience: {
    label: "This system is for three people.",
    items: [
      {
        title: "If you feel the ceiling closing in",
        body: "You need income that doesn't require a degree, a following, or anyone's permission. A laptop, free AI tools, and the willingness to send bids when the calendar says so.",
      },
      {
        title: "If you can design but can't sell online",
        body: "Talent without distribution pays nothing. This book is the distribution: platform mechanics, bid timing, pricing, proposal templates. The bridge between your skills and someone's credit card.",
      },
      {
        title: "If you freelance but haven't integrated AI",
        body: "84% of freelancers already use it. The ones who don't are losing contracts — not because they're bad, but because they're slower. This book makes you faster without shipping generic work.",
      },
    ],
  },

  guarantee: {
    label: "Risk reversal",
    title: "My guarantee is simple.",
    paragraphs: [
      "Read the book. Try the system. If it doesn't deliver value — for any reason — email me within 30 days and I'll refund every cent. No questions. No forms. No hoops.",
      "Worst case: you get your $5.99 back and keep the PDF.",
      "Best case: you have $1,500 in your account and a freelance business that didn't exist 7 days ago.",
      "**How's that for fair?**",
    ],
  },

  author: {
    label: "Who wrote this",
    name: "Amr Abu-Talleb",
    role: "Designer. 13+ years in brand strategy, UI/UX, and creative direction across the UAE, UK, USA, and Europe.",
    paragraphs: [
      "I wrote this for the version of me who had the skills but couldn't convert them on a platform. Who needed a paycheck before a pep talk. Who was tired of watching tutorials and wanted someone to just hand him the damn system.",
      "Every strategy tested on real accounts. Real bids. Real projects. Real revenue.",
    ],
  },

  faq: [
    {
      q: "Do I need design experience?",
      a: "No. The AI generates designs. You steer direction and manage the client relationship. The book walks you through every tool.",
    },
    {
      q: "Is $1,500 in 7 days guaranteed?",
      a: "No — and anyone who guarantees income is lying to you. It's ambitious. It requires 8–10 focused hours daily. Chapter 1 shows the full math so you can judge for yourself.",
    },
    {
      q: "Do I need paid tools?",
      a: "No. The $0/month starter stack covers all four services. Chapter 2 names every tool and tells you which ones to skip.",
    },
    {
      q: "What format?",
      a: "Instant PDF. 47 pages. Any device. Start tonight.",
    },
    {
      q: "Refund?",
      a: "30 days. Full refund. Zero risk.",
    },
  ],

  final: {
    label: "Decision",
    title: "Two options.",
    options: [
      {
        tone: "muted" as const,
        text: "Close this tab. Go back to the feed. Keep collecting bookmarks and half-finished ideas and \"I'll start next week\" promises that dissolve by Monday.",
      },
      {
        tone: "accent" as const,
        text: "Or spend $5.99 on the system that someone who was in your exact position built after figuring it out the hard way — so you don't have to.",
      },
    ],
    closing: [
      "Open it tonight. Send your first bids tomorrow. Have paying clients by the end of the week.",
      "**The tools are free. The platform is ready. The plan is inside.**",
      "**The only thing missing is your decision.**",
    ],
    proof: ["Instant PDF", "30-day refund", "47 pages of execution"] as const,
  },

  footer: {
    line: "© 2026 Amr Abu-Talleb. All rights reserved.",
    disclaimer:
      "Results vary. The $1,500 in 7 days target is ambitious and not guaranteed. Income depends on effort, skill, and market conditions.",
  },
} as const
