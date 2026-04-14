/** Copy for Penpreneur-style parity blocks (video strip, marquee, slider, inventory). */

export const PEN_PARITY = {
  video: {
    kicker: "Watch first",
    headline: "Here's ",
    headlineAccent: "what it's all about",
    intro:
      "A quick walkthrough of the 7-day sprint: where the leverage is on Freelancer.com, how AI fits into delivery, and what “done” looks like by day seven.",
  },

  marquee: {
    kicker: "Built for real platforms",
    title: "The same tools & marketplaces the blueprint uses",
    brands: [
      "Freelancer.com",
      "Upwork",
      "Fiverr",
      "Canva",
      "Gamma",
      "Ideogram",
      "Framer",
      "Vectorizer.ai",
      "Notion",
      "PayPal",
    ] as const,
  },

  slider: {
    wordmark: "BLUEPRINT",
    wordmarkAccent: "AI",
    oldLabel: "The old way",
    newLabel: "The new way",
    oldLead: {
      title: "Hope as a strategy",
      body: "You watch tutorials, bookmark threads, and “figure it out later” while proposals go unanswered and your profile stays invisible.",
      badge: "What most people do",
    },
    oldSteps: [
      "Spend hours on one bid with no repeatable template.",
      "Underprice because you don’t trust your empty reviews.",
      "Jump between tools with no stack and no delivery rhythm.",
      "Refresh the feed hoping motivation shows up.",
      "Quit the sprint before the math has time to work.",
    ],
    newLead: {
      title: "A system you can repeat",
      body: "Fixed stack, fixed prices, fixed daily bids, and AI to compress design iteration so you can ship fast enough to win on speed + clarity.",
      badge: "What this PDF installs",
    },
    newSteps: [
      "Profile + portfolio built to rank before you chase every job.",
      "Now–Wow–How bids in minutes, not hours.",
      "Package pricing so speed doesn’t punish your income.",
      "Day-by-day targets so you always know if you’re on pace.",
      "Week-one proof in the bank — then you raise rates with receipts.",
    ],
  },

  inventory: {
    kicker: "Launch window",
    title: "Limited launch inventory",
    lines: [
      "This is a **digital PDF** — there’s no warehouse — but the **$5.99 launch** is intentionally capped: when the launch window closes, the price steps up to match the full value of the system.",
      "If you’re reading this, the launch offer is still live. When it’s gone, it’s gone.",
    ] as const,
    floatTopAlt: "Still available",
    floatBottomAlt: "Price increases after launch",
  },
} as const

/** Default hero loop (CC0). Override with `NEXT_PUBLIC_AI_BLUEPRINT_HERO_VIDEO_URL`. */
export const DEFAULT_HERO_VIDEO =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
