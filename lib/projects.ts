import { tp } from "./typeset"

/* ─── Types ──────────────────────────────────────── */

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  impactStatement: string
  client: string
  role: string
  teamSize?: string
  scope: string
  timeline: string
  industry: string
  markets: string
  year: string
  businessContext: string
  clientProblem: string
  constraints: string
  insight: string
  creativeStrategy: string
  keyDecisions: string
  leadershipRole: string
  processPhases: { title: string; description: string }[]
  results: string[]
  testimonial?: { quote: string; author: string; role: string }
  reflection: string
  credits: string
  featured: boolean
  /** When true, excluded from listings, sitemap, search indexing, and direct URLs return 404. */
  hidden?: boolean
  featureImage?: string
  featureImageAlt?: string
  galleryImages?: { src: string; alt: string }[]
  /** Two images for the "Process Detail" row under The Challenge (4:3). */
  processImages?: { src: string; alt: string }[]
  /** Full-width 16:9 showcase. A muted looping video, with a poster for first paint. */
  showcaseVideo?: { mp4: string; webm?: string; poster: string; alt: string }
  featureVideo?: { mp4: string; webm?: string; poster: string; alt: string }
  /** Rows of figures shown between the strategy and the process; each row 1–3 images with an optional caption. */
  storyFigures?: { images: { src: string; alt: string; ratio?: string; video?: string }[]; caption?: string }[]
  /** Short opening paragraphs shown under the subtitle. */
  intro?: string[]
  /** Scannable list of what the author personally led, shown in place of the impact line. */
  contributions?: { label: string; text: string }[]
  /** Heading for the results list (defaults to "What Changed"). */
  resultsTitle?: string
  /** Optional story told in chapters; each chapter is followed by its own figures. Replaces the brief/turn/work blocks when present. */
  chapters?: { label: string; summary?: string; lead?: string; paragraphs: string[]; figures?: { images: { src: string; alt: string; ratio?: string; /** Optional looping mp4; src becomes its poster. */ video?: string }[]; caption?: string }[] }[]
  /** Optional external link, e.g. where to buy a published book. */
  buyLink?: { href: string; label: string }
}

export interface ProjectHighlight {
  slug: string
  title: string
  subtitle: string
  client: string
  role: string
  scope: string
  industry: string
  year: string
  description: string
  keyResult?: string
  buyLink?: string
  testimonial?: { quote: string; author: string; role: string }
  featureImage?: string
  featureImageAlt?: string
  keyVisuals?: { src: string; alt: string }[]
  /** When true, excluded from listings, sitemap and robots, and the page returns 404. */
  hidden?: boolean
  /** Extra rows of figures shown after the key visuals; each row 1–3 images with an optional caption. */
  figures?: { images: { src: string; alt: string; ratio?: string }[]; caption?: string }[]
}

/* ─── Full Case Studies ──────────────────────────── */

export const caseStudies: CaseStudy[] = [
  {
    slug: "overpowered",
    title: "Overpowered",
    subtitle: tp("From a broad studio offer to an agency built around the clients it served best"),
    impactStatement: tp("Team grown from six to about twenty-five in seven months · Positioning set with the CEO · New identity used for about a year"),
    role: tp("Creative Director\nWorked directly with the CEO"),
    teamSize: tp("About 25 across branding, 2D, 3D, video, copy and UX/UI"),
    scope: tp("Team structure and creative standards, positioning, service structure, brand identity, creative direction and website direction"),
    intro: [
      tp("Overpowered wanted to grow into a global creative and digital agency. Getting there meant growing the team and sharpening the offer and the identity to match."),
      tp("I joined as Creative Director, working directly with the CEO. My job was to build a team that could do the work, give it a clear standard, and give the agency a direction its work could live up to."),
    ],
    contributions: [
      { label: "Team", text: tp("Built the creative team from six people to about twenty-five, with two art directors and a hiring test.") },
      { label: "Standards", text: tp("Set clear reporting lines, a review rhythm and one shared way of working.") },
      { label: "Positioning", text: tp("Focused the offer with the CEO on three services for small and mid-sized businesses, plus OP Labs for product work.") },
      { label: "Identity", text: tp("Directed the new identity with the team and contributed hands-on to selected elements.") },
      { label: "Website", text: tp("Led the immersive website direction and briefed the 3D, motion and UX/UI teams.") },
    ],
    resultsTitle: "Where Things Stood in June 2025",
    results: [
      tp("A team of about twenty-five, grown from six in seven months, led by two art directors"),
      tp("Clear ownership: designers reported to their art directors, with daily reviews and a weekly review across disciplines"),
      tp("One shared way of working, so ownership, deadlines and capacity were visible to everyone"),
      tp("A focused offer: branding, web and app, and video for small and mid-sized businesses, with OP Labs for product clients"),
      tp("A new identity built with the branding team, used by the agency for about a year"),
      tp("An immersive website direction, briefed to the 3D, motion and UX/UI teams"),
    ],
    reflection: tp("Good work rarely comes from talent alone. It comes when a team shares a clear direction, a way of working and a standard to hold itself to. Most of my time at Overpowered went into building those, so the team could do its best work without waiting for me."),
    credits: tp("Creative Direction: Amr Abu-Talleb · Art Direction & Design: the Overpowered team"),
    chapters: [
      {
        label: "The brief",
        paragraphs: [
          tp("The CEO and I had talked about the agency’s future for two years before I joined, including how it could grow in stages rather than all at once."),
          tp("When he was ready, he invited me to join as Creative Director. The studio had to keep serving its clients while the team, the offer and the identity changed around it."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-01-v6.webp", alt: tp("The audit: six findings beside the old Overpowered homepage and its empty service cards, December 2024") }], caption: tp("The website in December 2024.") },
        ],
      },
      {
        label: "Where we started",
        paragraphs: [
          tp("I started with what a prospective client would see. The website offered six services, from branding to AI data analysis, under a headline about digital dominance. The identity used gun and gaming imagery, which limited where the agency could advertise and suited the established businesses it wanted to reach less well."),
          tp("Inside the studio, designers could receive tasks from several people, and most coordination happened in WhatsApp groups. It wasn’t always easy to see who owned a task, when it was due or who had room for more."),
          tp("The agency already had talented people, clients and good work. It needed a clearer offer and a better way for the team to work."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-02-v4.webp", alt: tp("Positioning before and after: Empowering brands for digital dominance, struck through, above Your brand deserves more than ordinary, with who, what and how compared below") }], caption: tp("Positioning, before and after.") },
        ],
      },
      {
        label: "The team",
        lead: tp("A new logo would have been the most visible change. The bigger change was the team."),
        paragraphs: [
          tp("Over seven months the studio grew from six people to about twenty-five, across graphic design, video, 3D, copy and UX/UI. Two art directors led the creative disciplines and reported to me; I managed UX/UI directly."),
          tp("One designer was already doing an art director’s job without the title. I formalised his promotion and worked with him on how to review and direct other people’s work."),
          tp("I wrote a hiring exercise around a premium olive-oil brand built on Arabic calligraphy. It gave candidates a real brief to interpret and gave us something concrete to discuss: their thinking, their craft and how they took feedback."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-06-v6.webp", alt: tp("Team: 25 people across five disciplines. Under the CEO and the Creative Director, an art director for branding, an art director for video, 2D and 3D, and UX/UI run directly, with copy shared with the CEO") }], caption: tp("Team structure. Roles only.") },
        ],
      },
      {
        label: "How we worked",
        paragraphs: [
          tp("Designers reported to their art directors, and the art directors reported to me. Every task had one owner and a deadline the whole team could see."),
          tp("Designers reviewed work with their art directors every day or two, and I reviewed it with the art directors each week. In reviews, designers explained their decisions before anyone else weighed in. When notes weren’t enough, I sat with the designer, opened the file and worked through the options together."),
          tp("I wanted the team to understand why a solution worked, not change things because I had asked."),
        ],
      },
      {
        label: "A clearer offer",
        paragraphs: [
          tp("With the CEO, I focused the agency on small and mid-sized businesses, where it already had relationships and relevant work. Six service areas became three: branding, web and app, and video. Website projects moved to Webflow and Framer, so clients could launch and maintain their sites more easily."),
          tp("Product work needed its own conversation. A CTO buying a digital product has different priorities from a marketing lead commissioning a campaign, so we set up OP Labs as a separate offer. When SPLT came to us, I reshaped its brief into a staged product engagement and led the product design."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-03-v4.webp", alt: tp("Two offers: OP, over a black-and-white portrait, for founders and marketing leads, and OP Labs, over a server rack lit by one amber line, for CTOs and product owners") }], caption: tp("One agency, two offers.") },
        ],
      },
      {
        label: "Identity",
        paragraphs: [
          tp("Once the positioning took shape, the agency needed an identity that matched it."),
          tp("I directed the identity with the branding art director and the team, contributing hands-on to selected elements. We moved away from the gun imagery and built the system around a connected O and P mark, with logo variations, an OP Labs lock-up, a defined palette and type scale, and a pattern drawn from the mark."),
          tp("We tested elements in small Instagram campaigns in the UAE, the UK and Egypt before committing. The agency went on to use the identity for about a year."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-09-v3.webp", alt: tp("The identity system: the primary and OP Labs lock-ups on yellow, six logo variations on colours from the palette, the mark, the typefaces and the palette") }], caption: tp("From the January 2025 brand guidelines.") },
          { images: [{ src: "/images/op-billboard-v1.webp", alt: tp("Billboard: Transforming ideas into impactful designs, over a grainy black-and-white crowd with yellow value tags"), ratio: "1296 / 768" }] },
          { images: [{ src: "/images/op-social-1-v2.webp", alt: tp("Social post: When science and design collaborate"), ratio: "4 / 5" }, { src: "/images/op-social-2-v2.webp", alt: tp("Social post: Pushing boundaries"), ratio: "4 / 5" }, { src: "/images/op-social-3-v2.webp", alt: tp("Social post: Top notch design solutions"), ratio: "4 / 5" }], caption: tp("The identity in use, outdoors and on social media.") },
        ],
      },
      {
        label: "The website",
        paragraphs: [
          tp("The website had to make people feel the new direction before they read a word of it. Instead of a showcase of services, we built it around a character."),
          tp("In our story, Solvix was made by an order of craftspeople in a near future where brands had grown loud and interchangeable, to strip a brand back to what is true about it and connect it with the people it serves. It is a guardian of stone and crystal with a glowing core: calm, precise and powerful without being loud. That was the agency we wanted clients to meet."),
          tp("As visitors scroll, Solvix changes form with the story. It follows the cursor as they arrive, gathers into a ball of energy beside the problems clients face, turns to show each service, and finally opens its core to reveal the people inside: the team behind the work."),
          tp("I wrote the briefs for the 3D, motion and UX/UI teams and developed the direction with the art directors, section by section."),
        ],
        figures: [
          { images: [{ src: "/images/op-solvix-hero-v3.webp", video: "/videos/op-solvix-hero-v3-c1.mp4", alt: tp("Website concept, opening: Solvix, a stone figure with an amber core, kneeling in a forge hall beside the headline Your brand deserves more than ordinary") }], caption: tp("The opening. Solvix follows the visitor’s cursor.") },
          { images: [{ src: "/images/op-solvix-video-v3.webp", alt: tp("Website concept: a close-up of Solvix’s hand holding glowing film frames, beside the Video Production service") }, { src: "/images/op-solvix-core-v4.webp", alt: tp("Website concept: a close-up of Solvix’s head with glowing eyes and amber crystals, beside the headline We’re Overpowered, and so is our work") }], caption: tp("A service close-up, then who the agency is.") },
        ],
      },
    ],
    client: tp("Overpowered\nCreative & digital agency, London"),
    timeline: "Dec 2024 – Jun 2025",
    industry: tp("Creative agency\nBranding, digital and video"),
    markets: tp("UK, UAE, Egypt and the EU"),
    year: "2024–2025",
    businessContext: tp("Overpowered wanted to grow into a global creative and digital agency. I joined as Creative Director, working directly with the CEO, while the studio kept serving its clients."),
    clientProblem: tp("The website offered six services under a headline about digital dominance, the identity relied on gun imagery, and day-to-day work ran through WhatsApp groups, so ownership and workloads were hard to see."),
    constraints: tp("The agency had to keep delivering client work while the team, the offer and the identity changed around it. Budgets stayed with the CEO, so each change came as a plan with its people and priorities."),
    insight: tp("A new logo would have been the most visible change. The bigger change was the team: a clear structure, a steady review rhythm and a shared standard for the work."),
    creativeStrategy: tp("I built the team around two art directors, a review rhythm and one working system, then focused the offer with the CEO on three services for small and mid-sized businesses, with OP Labs for product work."),
    keyDecisions: tp("Designers explained their decisions before anyone else weighed in, and the identity and website took their direction from the positioning rather than leading it."),
    leadershipRole: tp("I led the creative team of about twenty-five through two art directors and managed UX/UI directly. Staffing, promotions and reviews were mine; budgets were the CEO’s."),
    processPhases: [
      { title: "Starting point", description: tp("Looked at the agency as a client would: the website, the identity, the offer and how work moved through the studio.") },
      { title: "Team & standards", description: tp("Set reporting lines through two art directors, wrote the hiring test, promoted from within and ran the reviews.") },
      { title: "Positioning", description: tp("Focused the offer with the CEO on three services for small and mid-sized businesses, plus OP Labs.") },
      { title: "Identity & website", description: tp("Directed the new identity and the immersive website direction with the team.") },
    ],
    featured: true,
    featureImage: "/images/op-hero-v1.webp",
    featureImageAlt: tp("The OP logomark as a giant glass sculpture floating above a hill, a lone figure looking up at it"),
    featureVideo: {
      mp4: "/videos/op-hero-loop-v2-c1.mp4",
      poster: "/images/op-hero-loop-poster-v1.webp",
      alt: tp("The OP logomark as a giant glass sculpture above a hill, cut fast with close-ups of the glass and a man looking up, looping back to where it starts"),
    },
  },
  {
    slug: "split",
    title: "SPLT",
    subtitle: tp("Turning an online shop brief into a fitness platform built around its trainers"),
    impactStatement: tp("One app and three dashboards for four roles · A trainer subscription model proposed as a new revenue line"),
    role: tp("Creative Director & UX Lead at Overpowered\nLed 2 designers and the client relationship"),
    scope: tp("Product scope, competitive research, information architecture, mobile app, three dashboards, design system"),
    intro: [
      tp("SPLT wanted to be more than a workout logger. The ambition was a fitness community where members could track training, follow one another, buy products from several sellers and connect with trainers."),
      tp("That meant designing for four groups at once: members, trainers, vendors and the SPLT team. Each needed a clear reason to use the product, and the platform needed a business model that could support them all."),
    ],
    chapters: [
      {
        label: "The brief",
        paragraphs: [
          tp("The initial brief focused on commerce: products, orders, stock, promo codes and payouts for admins and vendors. It was built around selling; trainers and members didn’t yet have a role of their own."),
          tp("The development estimate the client had been given didn’t hold up line by line, and product strategy and design hadn’t been scoped at all."),
          tp("I proposed splitting the work into stages: strategy, feature definition and UX/UI design first, development once the product was defined. The client agreed, and I led the product direction with two designers."),
        ],
      },
      {
        label: "Competitive research",
        paragraphs: [
          tp("Before drawing wireframes, we subscribed to the major fitness apps and their betas and reviewed their features alongside user feedback."),
          tp("One gap kept appearing: trainers were treated like ordinary members, with little chance to establish their professional credibility or earn through the platform."),
          tp("That changed the direction of the product. Rather than treat the marketplace as a shop with a social feed attached, I developed a training layer around the relationship between coaches and members."),
        ],
      },
      {
        label: "Designing for four roles",
        paragraphs: [
          tp("Members got the workout and community features: a workout builder, personal and volume records, groups, goals, achievements, streaks and loyalty points."),
          tp("Trainers became a role of their own. Their profiles led with their track record and subscription plans. Free content let members judge a coach before paid videos unlocked the rest, and monthly, quarterly and yearly plans were proposed as a new recurring revenue line."),
          tp("A dedicated trainer dashboard handled clients, goals, workout plans, an exercise library and video content, while vendor and admin dashboards ran the operational side of the marketplace."),
          tp("The challenge was to give each role the right experience without building four disconnected products."),
        ],
        figures: [
          { images: [{ src: "/images/split-process-1-v2.webp", alt: tp("The brief: SPLT admin shop overview with sales, revenue, escrow, latest orders, top sellers and categories"), ratio: "4 / 3" }, { src: "/images/split-process-2-v2.webp", alt: tp("The addition: trainer video management in the dashboard, beside the trainer profile members subscribe from"), ratio: "4 / 3" }], caption: tp("What the brief asked for, and the trainer layer we added.") },
        ],
      },
      {
        label: "The design system",
        paragraphs: [
          tp("I set the information architecture and the visual direction, then worked with a senior and a junior designer to build the screens and the shared system. Multi-role admin systems were new territory for the team, so we mapped the user journeys and the logic behind each role together before building the full UI."),
          tp("Each dashboard had its own navigation, but all three shared one shell, one set of tables and one set of reporting patterns. The mobile app and the dashboards used the same visual language."),
        ],
      },
    ],
    results: [
      tp("Reshaped a commerce-only brief into a staged product engagement"),
      tp("Added a dedicated trainer role with profiles, paid video and three proposed subscription plans"),
      tp("Designed workout, progress, group, achievement and loyalty features for members"),
      tp("Created one shared system for the mobile app and three dashboards"),
      tp("Planned delivery in three phases: commerce, subscriptions and loyalty first; the trainer platform second; integrations and gamification third"),
      tp("Fixed eight bugs in the existing app before new feature work began"),
    ],
    reflection: tp("The brief asked for a shop. Competitive research showed that the trainer relationship could give the platform another reason to exist and another way to earn. The most valuable work was defining a product in which four different roles had a purpose, then designing a system a small team could deliver. The build continued after my involvement; I scoped and designed the first phases."),
    credits: tp("Creative Direction & UX Strategy: Amr Abu-Talleb · UI Design: Overpowered design team"),
    client: "SPLT\nFitness Social App & Marketplace, Egypt",
    teamSize: "1 Senior + 1 Junior Designer",
    timeline: "Feb \u2013 Jun\u00A02025",
    industry: "Health & Fitness\nMarketplace",
    markets: "Egypt (EGP pricing)",
    year: "2025",
    businessContext: tp("SPLT set out to be a gym community rather than a workout logger, where people track training, follow each other and buy kit from several sellers in one app. To make money it had to work for four groups at once. Members, trainers, vendors and the SPLT team each needed a reason to stay."),
    clientProblem: tp("The brief described a store, with orders, stock, promo codes and payouts for an admin and a vendor. The development quotation SPLT had received was hard to match to the work it described, and the scope was still open. The brief didn’t yet give trainers a reason to join or members a reason to pay."),
    constraints: "The client needed to\u00A0relaunch fast. I\u00A0had a\u00A0small team, one senior and one junior designer, both taking on their first multi-role admin\u00A0system. Every role also had to\u00A0share one visual language, so\u00A0a\u00A0component built for the app couldn\u2019t drift once it\u00A0reached\u00A0a\u00A0dashboard.",
    insight: tp("Before any wireframes, we subscribed to the major fitness apps and their betas and read their reviews side by side. The same complaint kept surfacing. Coaches looked exactly like members and had no way to earn inside the app. That gap became the product."),
    creativeStrategy: "I\u00A0kept the marketplace the client asked for and built a\u00A0training layer on\u00A0top of\u00A0it. Trainers became a\u00A0role of\u00A0their own. In the app, their profile leads with a\u00A0track record and a\u00A0Subscribe button, keeps premium videos locked until you pay, and offers three plans (monthly, quarterly, yearly). Behind it\u00A0sits a\u00A0trainer dashboard to\u00A0manage clients, goals, workout plans, an\u00A0exercise library and video sections. Around that, members got the parts that keep people opening the app every day: a\u00A0workout builder, personal and volume records, groups, goals and achievements, streaks and loyalty\u00A0points.",
    keyDecisions: tp("Trainers come across as professionals first. A trainer’s profile opens on proof and plans, and the social feed sits in its own tab. Free content lets members judge a coach before paid subscriptions unlock the rest, a revenue line the original scope never had. Each role has its own sidebar, but all three dashboards share one shell, one set of tables and one set of reports, so a small team could ship three products from one system."),
    leadershipRole: tp("I reviewed the development quotation line by line and rebuilt it as a staged scope the client could agree to. I then set the information architecture and the visual direction, and worked through the multi-role journeys with the team before they took on the full UI."),
    processPhases: [
      { title: "Scope", description: "Reviewed the development estimate line by\u00A0line, defined what each role needs, and turned the\u00A0brief into a\u00A0staged\u00A0scope." },
      { title: "Competitive Deep Dive", description: "Subscribed to\u00A0the major fitness apps and their betas, mapped their features and read user reviews to\u00A0find what nobody was solving: trainers who look and earn like\u00A0professionals." },
      { title: "Architecture for Four Roles", description: "Mapped member, trainer, vendor and admin journeys before any visual design, then grouped the app into modules: home feed, workouts, track, groups, shop, trainers and\u00A0account." },
      { title: "System, Team & UI", description: "Built a\u00A0dark mobile system and a\u00A0shared dashboard shell around one purple accent, then directed the team through the app and dashboards with weekly\u00A0reviews." },
    ],
    featured: true,
    featureImage: "/images/split-feature-v2.webp",
    featureImageAlt: "Five SPLT app screens tilted on the brand slash: shop, trainer profile, subscription plans, a live workout and achievements",
    processImages: [
      { src: "/images/split-process-1-v2.webp", alt: "The brief: SPLT admin shop overview with sales, revenue, escrow, latest orders, top sellers and categories" },
      { src: "/images/split-process-2-v2.webp", alt: "The addition: trainer video management in the dashboard, beside the trainer profile members subscribe from" },
    ],
    showcaseVideo: {
      mp4: "/videos/split-showcase-v2-c1.mp4",
      poster: "/images/split-showcase-poster-v2.webp",
      alt: "Three SPLT screens in motion: workout discovery scrolling, a trainer profile, and goals and achievements with level badges",
    },
    galleryImages: [
      { src: "/images/split-gallery-1-v2.webp", alt: "Personal records and the goals and achievements screen with level badges" },
      { src: "/images/split-gallery-2-v2.webp", alt: "A live workout with sets, reps and rest timer, and the groups screen with monthly stats" },
      { src: "/images/split-gallery-3-v2.webp", alt: "Workout discovery with programs, muscle groups and new coaches, and the SPLT shop" },
      { src: "/images/split-gallery-4-v2.webp", alt: "Vendor wallet: the transactions and withdrawals table" },
      { src: "/images/split-gallery-5-v2.webp", alt: "Trainer dashboard with clients, achievements, goals, live activity and weekly active clients" },
      { src: "/images/split-gallery-6-v2.webp", alt: "Achievements up close, with Spark, Iron, Surge and Titan level badges, beside the subscription plans" },
    ],
  },
  {
    slug: "bay-area-trips",
    title: "Bay Area Trips",
    subtitle: tp("Turning a sprawling local-travel idea into one product that members, businesses and families share"),
    impactStatement: tp("Three account types on one shared directory · Website, mobile web and app built on one structure · Taken from idea to a live product"),
    client: tp("Bay Area Trips\nTravel and local discovery platform, USA"),
    role: tp("Product Strategist & Designer\nLed the product with the founder"),
    teamSize: tp("Build team of about 30"),
    scope: tp("Product strategy, information architecture, account model, web and app UX/UI"),
    timeline: "Sep 2023 – Jan 2025",
    industry: tp("Travel & local discovery\nMembership platform"),
    markets: tp("San Francisco Bay Area, USA"),
    year: "2023–2025",
    businessContext: tp("Bay Area Trips set out to be the one guide to the San Francisco Bay Area, for the people exploring it and the businesses and creators who serve them."),
    clientProblem: tp("The brief was a long list of ideas with equal weight and nothing that said how they connected."),
    constraints: tp("A fixed deadline and budget, with a build team of about thirty working in parallel."),
    insight: tp("Most of the ideas were the same thing: a place someone can find, read about and act on."),
    creativeStrategy: tp("One directory, one calendar and one membership, shared by three account types."),
    keyDecisions: tp("Three accounts, each earned; both sides of every feature designed together; membership deciding who can do what."),
    leadershipRole: tp("I led the product with the founder and connected the work of the build team."),
    processPhases: [],
    intro: [
      tp("Bay Area Trips wanted to be the one guide to the San Francisco Bay Area: where to stay, eat and go out, what’s on tonight, scavenger hunts across the city, and a travel club for members. Businesses would list themselves, sell tickets and hire local creators. Parents would bring their kids along."),
      tp("The founder had the ideas. My job was to turn them into a product a team could build on a fixed budget: decide what the product was and who it was for, what each person could do, and how the website and the app fitted together."),
    ],
    contributions: [
      { label: "The structure", text: tp("One directory, one events calendar and one membership, shared by everyone, instead of a separate product for each idea.") },
      { label: "The account model", text: tp("Three account types, for members, businesses and kids, each with its own menu and limits, and a clear path from one to another.") },
      { label: "Both sides of the market", text: tp("Everything a member uses, a business creates: listings, events and tickets, hunts, products and paid gigs.") },
      { label: "One structure, every platform", text: tp("The website, the mobile web and the app follow the same map, so nobody has to learn the product twice.") },
    ],
    chapters: [
      {
        label: "The brief",
        lead: tp("Thirty ideas, all at the same volume."),
        paragraphs: [
          tp("The brief arrived as a list: hotels, restaurants, nightlife, wineries, writers’ lounges and remote-work spaces; events, trips and scavenger hunts; a shop, a travel club, a concierge and EV charging; creator partnerships and kids’ accounts. Each one mattered to someone, and nothing said how they related."),
          tp("Built as listed, it would have been a dozen small apps under one logo, each with its own rules, and more than the deadline and the budget allowed."),
        ],
        figures: [
          { images: [{ src: "/images/bay-cs-brief-v1.webp", alt: tp("Thirty features from the brief scattered as equal tags, from hotels and wineries to kids’ accounts and EV charging") }], caption: tp("The brief, as features. Nothing in it said which idea led, or how one connected to another.") },
        ],
      },
      {
        label: "The structure",
        lead: tp("One directory, one calendar, one membership."),
        paragraphs: [
          tp("Before designing any screen, I mapped who the product served and what they would do in it. Most of the ideas turned out to be the same thing: a place someone can find, read about and act on. So stays, food, nightlife, wineries, wellness and remote work became categories of one directory, built on one listing template."),
          tp("Events, trips and hunts sit beside the directory, because they happen at those places. Membership sits underneath everything, because it decides what each person can do. The website, the mobile web and the app follow the same structure, so a member or a business never has to learn the product twice."),
        ],
        figures: [
          { images: [{ src: "/images/bay-cs-architecture-v1.webp", alt: tp("Diagram: members, kids, businesses and creators use the app and the website, which share one product of directory, events, trips, hunts, shop and reviews; membership and business packages decide access") }], caption: tp("Three accounts, one shared product. Membership and business packages decide what each account can do.") },
          { images: [{ src: "/images/bay-cs-template-v1.webp", alt: tp("Diagram: one listing template whose middle block changes for ten kinds of place, from stays and food to wellness and attractions") }], caption: tp("One listing for ten kinds of place. Only the middle block changes.") },
          { images: [{ src: "/images/bay-fig-platforms-v1.webp", alt: tp("The website home beside the mobile website and the traveller home in the app") }], caption: tp("The same structure on the website, the mobile website and the app.") },
          {
            images: [
              { src: "/images/bay-cs-web-directory-v1.webp", alt: tp("The website directory of stays, with a card showing tonight’s sunset"), ratio: "16 / 10" },
              { src: "/images/bay-cs-web-listing-v1.webp", alt: tp("A hotel listing on the website with Call and Website buttons and a prompt to claim the business"), ratio: "16 / 10" },
            ],
            caption: tp("From the directory to a listing. “Claim this business” is where a visitor can become a business."),
          },
        ],
      },
      {
        label: "The accounts",
        lead: tp("Three accounts, each with its own job."),
        paragraphs: [
          tp("Members explore and book. Businesses run their place. Kids get their own view, set up by a parent. Each account has its own menu, so nobody sees tools that aren’t theirs."),
          tp("Becoming a business is a step, not a setting. A member applies, the team checks the business, and only then do the business tools switch on. That keeps fake listings away from members and holds every business on the platform to the same standard."),
        ],
        figures: [
          { images: [{ src: "/images/bay-cs-menus-v1.webp", alt: tp("Three app menus side by side: the member menu, the business menu with its tools, and the kid menu with four large tiles") }], caption: tp("Three menus, three jobs.") },
          { images: [{ src: "/images/bay-cs-become-business-v1.webp", alt: tp("Three app screens: applying as a business, the application under review, and the business approved") }], caption: tp("A member becomes a business in three steps, and is checked before any tools switch on.") },
        ],
      },
      {
        label: "Both sides of the market",
        lead: tp("Everything a member uses, a business makes."),
        paragraphs: [
          tp("A café creates an event and sets the ticket types; a member picks a ticket. A business builds a scavenger hunt, with missions, a prize and teams, and families play it across the city. Businesses post paid gigs, and local creators take them."),
          tp("Designing both sides together kept them consistent: every field a business fills in becomes something a member sees or uses."),
        ],
        figures: [
          { images: [{ src: "/images/bay-cs-hunt-sides-v1.webp", alt: tp("A business building a sea lion hunt with three missions and a prize, then the same hunt on the map and the finished hunt") }], caption: tp("The same hunt from both sides: built by a café, played by a family.") },
          { images: [{ src: "/images/bay-cs-ticket-sides-v1.webp", alt: tp("A business setting member and general ticket types for an acoustic night, then a member choosing tickets for it") }], caption: tp("Ticket types set by the business, chosen by the member.") },
          { images: [{ src: "/images/bay-fig-creators-v1.webp", alt: tp("Three Creator Connect screens: joining as a creator, finding a creator, and a paid gig with offers") }], caption: tp("Creator Connect: businesses post paid gigs and choose local creators.") },
        ],
      },
      {
        label: "Families",
        lead: tp("Kids explore. Parents stay in charge."),
        paragraphs: [
          tp("Kids get a simpler, brighter view with hunts, kids’ events and trips. They can’t pay in the app; they ask a parent instead. Parents see where a hunt has taken their child and what they’ve joined, and can book for them."),
          tp("Family accounts come with the Gold membership, so the family side pays for itself."),
        ],
        figures: [
          { images: [{ src: "/images/bay-cs-family-v1.webp", alt: tp("The kid’s hunt progress and an event with an Ask Sam to buy it button, beside the parent’s view with the child’s live hunt route and plans") }], caption: tp("The kid asks; the parent sees and books.") },
        ],
      },
      {
        label: "Membership",
        lead: tp("What you pay for decides what you can do."),
        paragraphs: [
          tp("There are two memberships. Businesses choose a package on the website, from a free listing to Pro and Elite with their own app, IT support, team travel and trip credits. Members choose Silver or Gold in the app."),
          tp("The tiers aren’t just discounts. Gold adds accounts for kids, more hunts to create and bigger teams, so membership is also how the product decides who can do what."),
        ],
        figures: [
          { images: [{ src: "/images/bay-cs-membership-v1.webp", alt: tp("Table of what each tier unlocks: Silver and Gold for members, Free, Pro and Elite for businesses") }], caption: tp("Two memberships, one rule.") },
          { images: [{ src: "/images/bay-cs-membership-screens-v1.webp", alt: tp("The business packages page on the website beside the Gold membership screen in the app") }], caption: tp("Packages for businesses on the website, tiers for members in the app.") },
        ],
      },
    ],
    results: [
      tp("Took the idea from concept to a live product on the web, mobile web and an app"),
      tp("Three account types, for members, businesses and kids, on one shared directory, with Creator Connect for businesses and creators"),
      tp("One listing template serving ten kinds of place"),
      tp("More than 240 app screens across 19 areas, and the website at desktop and mobile"),
      tp("Refined after launch with feedback from the first 200 users"),
    ],
    reflection: tp("My job was to make a big idea buildable. The product has changed since launch, as products should. The structure underneath is the part I’d defend in any room: one directory, three accounts and one membership deciding who can do what."),
    credits: tp("Product Strategy & Design: Amr Abu-Talleb · Client: Jared, Bay Area Trips · Screens redrawn in a new visual style for this case study, using the original flows"),
    featured: true,
    featureImage: "/images/bay-hero-v2.webp",
    featureImageAlt: tp("The Bay Area Trips website and two app screens on a cream studio set in late-afternoon light"),
    featureVideo: {
      mp4: "/videos/bay-hero-loop-v2-c1.mp4",
      poster: "/images/bay-hero-loop-poster-v2.webp",
      alt: tp("The Bay Area Trips website and app on a studio set in late-afternoon light, the screens moving through the homepage, the directory, a listing, membership, the traveller home, the scavenger hunt, the kids’ view and the business dashboard"),
    },
  },
  {
    slug: "agfin",
    title: "Agfin",
    subtitle: tp("Rebuilding a farm adviser’s website around the families he helps"),
    impactStatement: tp("12% more client wins in the first month · No paid advertising · A brochure site rebuilt as a story-led sales funnel"),
    role: tp("Website strategy, UX, copywriting and build\nSolo project"),
    scope: tp("Website architecture, video sales letter, copywriting, UX/UI, interaction design and build"),
    timeline: tp("About three weeks"),
    intro: [
      tp("Robert runs Agfin, advising Australian farming families on the financial side of their businesses. His work can change how a family gets through a difficult season, but his website didn’t communicate that."),
      tp("He first came to me for a few website fixes. After reviewing the site, I recommended a full redesign built around the stories of the families he had helped, with a clearer path from first visit to enquiry."),
    ],
    chapters: [
      {
        label: "The problem",
        paragraphs: [
          tp("The site described Robert’s services but not the stories behind them: there was little proof of his work and no clear next step. For a consultant whose business depends on trust, that was a missed opportunity."),
          tp("There were practical constraints too. Robert was semi-retired, had a modest budget and could only take on a limited number of new clients. There was no budget for a photo shoot."),
        ],
      },
      {
        label: "The story behind the business",
        paragraphs: [
          tp("The strongest material came from Robert’s own experience: the farming families he had advised, the situations they faced and what changed after working with him."),
          tp("I interviewed him at length and used those conversations to shape the site’s narrative and write a video sales letter. The video opens with a family’s problem, introduces Robert as the person who can help and shows what changed. The rest of the site supports that story with evidence and a clear next step."),
          tp("I wrote the copy before designing the interface. The story needed to work on its own."),
        ],
      },
      {
        label: "Changing direction",
        paragraphs: [
          tp("My first VSL script was too intense for Robert’s audience. He told me plainly that it felt like too much of a push."),
          tp("He was right. I rewrote it to sound warmer and more trustworthy, then replaced the stock imagery with real photographs from Robert’s own region."),
          tp("That brought the story closer to the people he worked with. The design could support the message because the message now sounded like the business."),
        ],
        figures: [
          { images: [{ src: "/images/agfin-process-1-w1.webp", alt: tp("Noon: the Does This Sound Familiar checklist, each ticked worry fading into heat haze"), ratio: "4 / 3" }, { src: "/images/agfin-result-w1.webp", alt: tp("Sunset: the case study’s result, a farmer at the gate of a canola field on a photo print stamped Approved in one week"), ratio: "4 / 3" }] },
        ],
      },
      {
        label: "Design and build",
        paragraphs: [
          tp("I rebuilt the site around the funnel: the problem, Robert’s role, evidence of his work and the next step. Small animations support the narrative without competing with it."),
          tp("I handled the strategy, interviews, copywriting, VSL script, information architecture, UX/UI, interaction design and build."),
        ],
      },
    ],
    results: [
      tp("Robert reported 12% more client wins in the first month after launch, compared with the same month the year before"),
      tp("The increase came with no paid advertising"),
      tp("A brochure website became a story-led sales funnel"),
      tp("Robert’s experience told through real examples and photographs from his own region"),
      tp("A funnel sized to the business, not built to bring in more leads than Robert could take on"),
    ],
    reflection: tp("Robert’s feedback made the work better. The first script tried too hard to persuade; the final version respected its audience and sounded more like the person behind the business. The result was a clearer website and more client wins, without a paid advertising budget."),
    credits: tp("Strategy, Copywriting, UX/UI & Build: Amr Abu-Talleb"),
    client: "Agfin\nRobert, Financial Consultant, Australia",
    industry: "Agricultural Finance\nConsulting",
    markets: "Regional Australia",
    year: "2024\u20132025",
    businessContext: "Robert runs Agfin, advising Australian farming families on\u00A0the\u00A0money side of\u00A0the\u00A0farm. His work changes how those families get through a\u00A0bad season, but his website said none of\u00A0that.",
    clientProblem: tp("He hired me for small fixes. The site listed his services but didn’t yet tell his story, show proof or offer a clear next step. For a consultant who lives on trust, that was a missed opportunity."),
    constraints: "Robert is\u00A0semi-retired, with a\u00A0modest budget and\u00A0a\u00A0limit on\u00A0how many new clients he can take. There was no\u00A0budget for\u00A0a\u00A0photo shoot. And halfway through, my\u00A0first draft of\u00A0the\u00A0copy proved too intense for\u00A0his audience and\u00A0had to\u00A0be\u00A0rewritten.",
    insight: tp("The site didn’t need to look better. It needed to say something. Robert had real stories of families he’d helped, with real outcomes, and none of them were on the page. The job was to rebuild the whole site as a sales funnel built on those stories."),
    creativeStrategy: "I\u00A0interviewed Robert at\u00A0length, wrote a\u00A0VSL script and\u00A0rebuilt the\u00A0site as\u00A0a\u00A0funnel. The video opens on\u00A0a\u00A0farming family\u2019s struggle, brings Robert in\u00A0as\u00A0the\u00A0guide and\u00A0shows what changed for\u00A0them. The rest of\u00A0the\u00A0site backs that story with proof and\u00A0one clear next\u00A0step.",
    keyDecisions: "Halfway through, Robert told me my\u00A0first script was too emotional. He was right. I\u00A0rewrote it\u00A0to\u00A0sound warm and\u00A0trustworthy instead of\u00A0pushy. I\u00A0also replaced every stock photo with real images from his own region, and\u00A0the\u00A0site felt honest straight\u00A0away.",
    leadershipRole: tp("A solo engagement. I owned the strategy, the copy, the VSL script, the UX and the visual and interaction design, and ran the project end to end."),
    processPhases: [
      { title: "Audit & Proposal", description: "Hired for\u00A0small fixes, I\u00A0audited the\u00A0whole site and\u00A0showed Robert what it\u00A0could\u00A0become." },
      { title: "Copy First", description: "Wrote the\u00A0VSL script and\u00A0every line of\u00A0the\u00A0site before any design, built as\u00A0a\u00A0funnel: the\u00A0problem, the\u00A0guide, the\u00A0change, the\u00A0next\u00A0step." },
      { title: "The Pivot", description: "Robert flagged the\u00A0first draft as\u00A0too intense. I\u00A0rewrote the\u00A0key sections and\u00A0swapped stock images for\u00A0local\u00A0photographs." },
      { title: "Design & Build", description: "Built the\u00A0site with small animations that serve the\u00A0story and\u00A0never compete with\u00A0it." },
    ],
    testimonial: {
      quote: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in\u00A0a\u00A0detailed explanation. He went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales\u00A0funnel.",
      author: "Robert",
      role: "Founder of Agfin, Australia",
    },
    featured: true,
    featureImage: "/images/agfin-feature-v3.webp",
    featureImageAlt: "Agfin homepage hero: the farm profit road map headline settling in as the morning clouds clear over a Wimmera paddock",
    featureVideo: {
      mp4: "/videos/agfin-hero-c1.mp4",
      poster: "/images/agfin-feature-v3.webp",
      alt: "The Agfin hero animation: a fly-through of morning cloud that clears to reveal the headline over a Wimmera paddock",
    },
    processImages: [
      { src: "/images/agfin-process-1-w1.webp", alt: "Noon: the Does This Sound Familiar checklist, each ticked worry fading into heat haze" },
      { src: "/images/agfin-result-w1.webp", alt: "Sunset: the case study’s result, a farmer at the gate of a canola field on a photo print stamped Approved in one week" },
    ],
    showcaseVideo: {
      mp4: "/videos/agfin-showcase-c1.mp4",
      poster: "/images/agfin-showcase-poster-w1.webp",
      alt: "Scroll-through of the Agfin homepage, told as one day on the farm from dawn to the next morning",
    },
    galleryImages: [
      { src: "/images/agfin-roadmap-w1.webp", alt: "The Farm Profit Roadmap: step three, the plan to get there, with the roadmap’s value adding up as you scroll" },
      { src: "/images/agfin-detail-2-w1.webp", alt: "Services page with the farm financial fitness assessment and service list" },
      { src: "/images/agfin-detail-3-w1.webp", alt: "Contact page with the Get In Touch headline set behind the Grampians ranges" },
    ],
  },
  {
    slug: "taptools",
    title: "TapTools",
    subtitle: tp("Helping users of a live analytics platform find the number they came for"),
    impactStatement: tp("User-reported issues down 23% within 60 days · Core flows redesigned and shipped to a live product"),
    role: tp("Senior Product Designer\nWith a product and engineering team of about ten"),
    scope: tp("Research, testing, core-flow redesign, production UI"),
    intro: [
      tp("TapTools gave Cardano traders token and NFT market data through market overviews, token pages, portfolios, swaps, watchlists and a wallet profiler. The data was rich. People were getting lost in it."),
      tp("I led user research and testing, redesigned the core flows and took the interface from early layouts to production-ready screens with a product and engineering team of about ten."),
    ],
    chapters: [
      {
        label: "The problem",
        lead: tp("Everything at the same volume"),
        paragraphs: [
          tp("TapTools was live and busy. A token page held a chart, pool data, a watchlist, top movers and every recent trade, all at the same weight. Research and testing showed people stalling in the core flows, scanning for the number they came for and leaving before they finished."),
          tp("The redesign had to land on a product people used every day. It had to fix the order of things without moving where people expected to find them."),
          tp("I treated it as a hierarchy problem. Users didn’t need more data. They needed to see the right number first."),
        ],
        figures: [
          { images: [{ src: "/images/tt-fig-token-v3-poster.webp", alt: tp("The redesigned token page: price and chart first, pool info and watchlist in a side column, and a wallet-size tag on every trade"), ratio: "1312 / 760", video: "/videos/tt-fig-token-v3-c1.mp4" }] },
        ],
      },
      {
        label: "The structure",
        lead: tp("One hub, and one structure for every wallet"),
        paragraphs: [
          tp("I mapped every feature against how people moved between them. The market overview became the hub, and every other area sits one click from it."),
          tp("The biggest call was to give your own wallets and anyone else’s the same structure. The portfolio and the wallet profiler share one set of tabs, so learning one teaches the other, and engineering builds one set of components."),
          tp("Swap closes the loop. When a swap finishes, it sends you back to your portfolio, where the result shows."),
        ],
        figures: [
          { images: [{ src: "/images/tt-fig-arch-v6-poster.webp", alt: tp("Product structure: search and sidebar lead to the market overview hub, then the token page, wallet preview, wallet profiler, portfolio and swap"), ratio: "1312 / 760", video: "/videos/tt-fig-arch-v6-c1.mp4" }] },
        ],
      },
      {
        label: "From a number to a wallet",
        lead: tp("Every trade has a wallet behind it"),
        paragraphs: [
          tp("Cardano traders want to know who is buying, and following that trail shouldn’t mean leaving the page."),
          tp("I tagged every trade with the size of the wallet behind it, from shrimp to whale, and made the tag open a preview beside the chart. The token stays in view while you check the trader. The full profile is one more click."),
          tp("The profiler reads a wallet like a person. It shows what the wallet holds, when it trades and who funded it."),
        ],
        figures: [
          { images: [{ src: "/images/tt-fig-journey-v3-poster.webp", alt: tp("Five screens one click apart: market overview, token page, wallet preview, wallet profiler and associated wallets"), ratio: "1312 / 470", video: "/videos/tt-fig-journey-v3-c1.mp4" }] },
          { images: [{ src: "/images/tt-fig-profiler-v3-poster.webp", alt: tp("The wallet profiler: balance, holdings, activity over time, day-of-week and hour-of-day habits, with associated wallets"), ratio: "1312 / 760", video: "/videos/tt-fig-profiler-v3-c1.mp4" }] },
        ],
      },
      {
        label: "The portfolio",
        lead: tp("Answer ‘how am I doing?’ first"),
        paragraphs: [
          tp("Early versions gave the list of wallets as much room as the money. Over three passes the list became a switcher in the header, and the value and the chart took the width."),
          tp("Above the chart sit the answers a holder wants first: all-time profit, the best and worst performer, and staking income. The tables come after."),
          tp("Tracking a wallet shouldn’t need a wallet connection. You can add any address, stake address or ADA Handle, check that it resolves and give it a name."),
        ],
        figures: [
          { images: [{ src: "/images/tt-fig-portfolio-v3-poster.webp", alt: tp("Three passes at the portfolio beside the final screen with all-time profit, best and worst performer and whale tier"), ratio: "1312 / 720", video: "/videos/tt-fig-portfolio-v3-c1.mp4" }] },
          { images: [{ src: "/images/tt-fig-addwallet-v3.webp", alt: tp("Adding a wallet by pasting an address or ADA Handle, resolved before it is added"), ratio: "1312 / 640" }] },
        ],
      },
      {
        label: "The swap",
        lead: tp("Swap without surprises"),
        paragraphs: [
          tp("TapSwap routes trades across Cardano exchanges for two kinds of trader. Simple mode is one card. Nerd mode adds the chart, the route, slippage, price impact and fees."),
          tp("Anyone can mint a token with any name, so unlisted tokens stop you once. Going back is the main button, and the policy ID is there to check. Regular traders can switch the warning off for a token they know."),
          tp("Every state has a screen, from picking a token to a failed swap that says why it failed and how to fix it."),
        ],
        figures: [
          { images: [{ src: "/images/tt-fig-swap-v3-poster.webp", alt: tp("Every swap state, from picking a token to a failed swap with its reason, beside Simple and Nerd modes"), ratio: "1312 / 800", video: "/videos/tt-fig-swap-v3-c1.mp4" }] },
        ],
      },
      {
        label: "Shipping it",
        lead: tp("One dark system for dense data"),
        paragraphs: [
          tp("I designed one dark system for dense data. One typeface with tabular numbers, one accent for actions, and green and red kept for price change."),
          tp("I worked with a product and engineering team of about ten to move the redesign into the live product. The new homepage and chart interface went live on 21 January 2023, followed by the portfolio and the wallet profiler."),
        ],
        figures: [
          { images: [{ src: "/images/tt-fig-system-v3.webp", alt: tp("The colour system: neutral ramp, cyan accent, gain, loss and caution with their tints, beside the type"), ratio: "1312 / 700" }] },
          { images: [{ src: "/images/tt-fig-ship-v3-poster.webp", alt: tp("The early homepage layout with three promotional modules, then the shipped homepage with a market summary, movers and one table"), ratio: "1312 / 720", video: "/videos/tt-fig-ship-v3-c1.mp4" }] },
          { images: [{ src: "/images/tt-fig-release-v3.webp", alt: tp("Launch graphics from January 2023: the new homepage and the portfolio running on taptools.io"), ratio: "1312 / 520" }] },
        ],
      },
    ],
    results: [
      tp("User-reported issues fell by 23% within 60 days of launch, measured through support tickets and reports from the community on Discord and X"),
      tp("New homepage and chart interface live from 21 January 2023"),
      tp("Core analytics flows redesigned around a clearer hierarchy"),
      tp("Part of the wider product work that preceded the company’s next funding round"),
    ],
    reflection: tp("In an analytics product, more information doesn’t help if people can’t find the number they need. The work began with understanding where users were getting stuck, then carried that understanding through the interface and into production."),
    credits: tp("UX Research & Product Design: Amr Abu-Talleb"),
    client: tp("TapTools\nToken and NFT analytics platform, USA"),
    timeline: "Dec 2022 – Jun 2023",
    industry: tp("Fintech analytics\nWeb dashboard"),
    markets: tp("Global, remote from the USA"),
    year: "2022–2023",
    businessContext: tp("TapTools is an analytics platform for tokens and NFTs. Market overviews, token pages, portfolios, swaps, watchlists and a wallet profiler all sit in dense, live tables and charts."),
    clientProblem: tp("The platform carried a lot of data and users were getting lost in it. Research pointed to bottlenecks in the core flows, the places where people stopped before doing what they came to do."),
    constraints: tp("It was a live product with active users, so the redesign had to ship without breaking the way people already worked."),
    insight: tp("In a data product, hierarchy is the feature. Users didn’t need more data on screen. They needed to see the right number first."),
    creativeStrategy: tp("I ran user research and testing to find where people dropped off, then redesigned the core flows around them. The interface was rebuilt on clearer typography, spacing and hierarchy, with one type set across every screen."),
    keyDecisions: tp("I treated it as a data problem before a design problem. Every screen was judged on a single test, whether a user could find the number they came for without hunting for it."),
    leadershipRole: tp("I owned the design from research to production-ready screens, working with a product and engineering team of about ten to ship it without disrupting live users."),
    processPhases: [
      { title: "Research & testing", description: tp("Watched how users moved through the platform and where they gave up.") },
      { title: "Core flows", description: tp("Redesigned the flows behind the bottlenecks before touching the visual layer.") },
      { title: "Hierarchy", description: tp("Rebuilt typography, spacing and colour so the most important number on each screen reads first.") },
      { title: "Production UI", description: tp("Took the screens from early layouts to production-ready files.") },
    ],
    featureImage: "/images/taptools-hero-loop-poster-v4.webp",
    featureImageAlt: tp("The TapTools market overview with a swap card and wallet profiler beside it, on a dark grid lit in cyan and green"),
    featureVideo: {
      mp4: "/videos/taptools-hero-loop-v4.mp4",
      poster: "/images/taptools-hero-loop-poster-v4.webp",
      alt: tp("TapTools on a dark grid lit in cyan and green, moving from the market overview to a token page, the wallet preview, the wallet profiler and a finished swap"),
    },
    featured: true,
  },
  {
    slug: "zikabi",
    hidden: true,
    title: "Zikabi",
    subtitle: tp("Splitting one overloaded app into a parent brand and two products"),
    impactStatement: tp("One concept separated into a parent brand and two products · Business model changed by user interviews · End-user, vendor and driver apps designed"),
    scope: tp("Parent brand and sub-brands, identity manual, end-user, vendor and driver apps"),
    intro: [
      tp("The client was preparing to launch Homeats, an app meant to bring together home cooks selling meals, local people offering services and crafts, and drivers delivering orders."),
      tp("The concept tried to fit three businesses into one app. I recommended separating the services under a parent brand, with each product designed around its own audience and purpose."),
    ],
    chapters: [
      {
        label: "Rethinking the structure",
        paragraphs: [
          tp("Home cooks, customers, service providers and drivers don’t need the same experience. Putting them all in one app would have made navigation harder and left the business fewer options to grow each service on its own."),
          tp("I advised the client to establish Zikabi as the parent brand, with Homeats for home-cooked meals and Quickserv for local services and crafts. The “by Zikabi” relationship connected the products without forcing them into one experience."),
        ],
      },
      {
        label: "Research and business model",
        paragraphs: [
          tp("I interviewed home cooks and customers before the product direction was final. Both groups showed little interest in subscriptions for Homeats, so we moved to a commission on each order instead."),
          tp("That decision shaped the business model before the app designs were finished, and gave the client a clearer basis for how transactions would work between cooks and customers."),
        ],
      },
      {
        label: "The identity and apps",
        paragraphs: [
          tp("I developed the brand architecture into an identity system: parent and sub-brand lock-ups, typography, colours, usage rules and distinct app icons that kept their relationship to Zikabi."),
          tp("I also designed the end-user, vendor and driver apps around the tasks each group needed to complete. The products feel related without pushing different audiences through the same workflows."),
        ],
      },
    ],
    results: [
      tp("The original concept separated into a parent brand and two products"),
      tp("User interviews moved Homeats from subscriptions to a commission on each order"),
      tp("A 15-page identity manual for the parent brand and sub-brand system"),
      tp("End-user, vendor and driver apps designed as distinct experiences"),
    ],
    reflection: tp("The most consequential decision was made before the interface work. Separating the products gave each business a clearer purpose and made the brand and app design that followed more coherent."),
    credits: tp("Product Definition, Brand Architecture, Identity & App Design: Amr Abu-Talleb"),
    client: tp("Zikabi\nMarketplace start-up"),
    role: tp("UI/UX Designer, then Product Designer\nFreelance"),
    timeline: "Oct 2020 – 2021",
    industry: tp("Marketplace\nHome food and local services"),
    markets: tp("Turkey and Egypt"),
    year: "2020–2021",
    businessContext: tp("The client was about to launch Homeats, one app holding everything they planned to offer. Home cooks would sell meals to their neighbourhood, local people would offer services and crafts, and drivers would deliver both."),
    clientProblem: tp("One app was trying to be three businesses. Each audience would have found most of it irrelevant, and none of the three could be launched, tested or grown on its own."),
    constraints: tp("The product was already heading to launch as a single app, so the change had to be argued for before it could be designed."),
    insight: tp("These were three businesses with different customers. They needed a family, not one app. A parent brand would hold the trust, and each product would do one job."),
    creativeStrategy: tp("I advised the client to split the product. Zikabi became the parent company, with Homeats for home cooks serving their community and Quickserv for local services and crafts. Everything stays “by Zikabi”, so the trust one product earns carries to the next."),
    keyDecisions: tp("User interviews changed the business model before any screen was final. Home cooks and customers didn’t want subscriptions, so Homeats moved to a commission on each order. I then built the brand architecture into the identity, with the parent mark leading and sub-brand lock-ups and a family of app icons for cooks, vendors and drivers beneath it, and designed the end-user, vendor and driver apps."),
    leadershipRole: tp("I joined as the UI/UX designer and became the product designer, advising the client on what to launch and in what form."),
    processPhases: [
      { title: "Product review", description: tp("Looked at what the single app was trying to do and who each part was for.") },
      { title: "Brand architecture", description: tp("Proposed Zikabi as the parent, with Homeats and Quickserv as products under it.") },
      { title: "Identity manual", description: tp("Version 1.0 in October 2020, covering the parent mark, colours, type, misuse, sub-brands and app icons.") },
      { title: "App design", description: tp("End-user, vendor and driver apps, designed in early 2021.") },
    ],
    featured: true,
  },
  {
    slug: "dipa",
    hidden: true,
    title: "Dipa Visionary Art School",
    subtitle: tp("Getting an art school’s website working again, then turning it into a walk through the studio"),
    impactStatement: tp("70% more website views after the recovered site went live · Back online after four failed attempts · Immersive 360° concept in development"),
    role: tp("Creative direction, content strategy and UX\nUI design with a small team"),
    scope: tp("Website recovery, content rewrite, immersive 360° concept and interactive biography"),
    timeline: tp("Phase 1: about 3–4 months · Phase 2: ongoing"),
    intro: [
      tp("Dipa runs a visionary art school in Singapore from a converted part of her home. Students enter through a garden, then move through rooms dedicated to different creative disciplines. The school is a distinctive place to visit, and its original website wasn’t showing it."),
      tp("After four unsuccessful attempts by freelancers over two years, I came in to get the existing site working and make years of accumulated content easier to use."),
    ],
    chapters: [
      {
        label: "Getting the site working",
        paragraphs: [
          tp("The original site was unreliable and hard to navigate. Even when parts of it loaded, long blocks of text made it difficult for a prospective student to understand the workshops and find the right information."),
          tp("The first step was recovery, not a redesign. I used my programming background to fix the existing site and bring it back online, then rewrote the content and organised the workshop descriptions so they were easier to scan."),
          tp("After the recovered website went live, views rose 70%."),
        ],
      },
      {
        label: "Building from the school itself",
        paragraphs: [
          tp("Once the site was working, we could explore a more ambitious experience."),
          tp("The strongest idea came from the school itself. Students move through a garden into different creative spaces, each with its own discipline and atmosphere. I wanted the website to give visitors a sense of that journey before they arrived."),
          tp("The new concept opens with a 360° view of the studio. Scrolling sideways moves visitors through the space, with each area opening into a section; scrolling down takes them deeper into its content. We also developed an interactive timeline of Dipa’s life and work."),
        ],
      },
      {
        label: "Content and experience",
        paragraphs: [
          tp("I led the concept, the content and the experience architecture, working with a small UX/UI team. I rewrote the site content over a month, made the workshop descriptions easier to browse, and structured the immersive experience around the physical layout of the school."),
          tp("Communication was part of the job. After several failed attempts by others, delivering a working site mattered before asking Dipa to invest in a bigger redesign."),
        ],
      },
    ],
    results: [
      tp("The existing website recovered and brought back online"),
      tp("Website views up 70% after the recovered site went live"),
      tp("Years of content rewritten and given a clearer structure"),
      tp("An immersive 360° studio experience and interactive biography in development as the next phase"),
      tp("The collaboration continued into a second phase of work"),
    ],
    testimonial: { quote: tp("He is highly intelligent, genuine and a lovely person. He has integrity, is extremely skilled, and has a great sense of humour!"), author: "Dipa", role: "Founder, Dipa Visionary Art School" },
    reflection: tp("Fixing the existing site gave Dipa something she could rely on again. It also built the trust and the foundation for a more ambitious experience around the school itself."),
    credits: tp("Creative Direction, Content Strategy & UX: Amr Abu-Talleb · UI Design: UX/UI design team"),
    client: "Dipa\nVisionary Art School, Singapore",
    teamSize: "Small team of UX & UI designers",
    industry: "Art Education\nCreative Workshops",
    markets: "Singapore",
    year: "2022\u20132026",
    businessContext: tp("Dipa runs a visionary art school from a converted part of her home in Singapore. Students enter through a garden, and each corner of the studio holds a different creative discipline."),
    clientProblem: tp("Over three years, four freelance developers had tried to build or fix her website, and all four failed. The site didn’t work at all, and even when parts of it loaded, it was a wall of text with no hierarchy and no clear path for a prospective student."),
    constraints: tp("After four failures, trust was low. I had to deliver a working site before anyone could talk about a redesign, and years of accumulated content had no structure."),
    insight: tp("The strongest concept was already in the building. Her studio is a journey, from the garden into a different creative world in each corner, so the website should take students on the same walk."),
    creativeStrategy: tp("The redesign opens with a 360° view of the studio. Scrolling sideways moves you through the space, with each corner opening a section, and scrolling down takes you deeper into it. None of the art school sites we reviewed offered a tour like it."),
    keyDecisions: tp("I fixed first and redesigned second, which rebuilt Dipa’s confidence before asking her to invest in something bigger. I rewrote all the content over a month, made the workshop descriptions scannable and designed a timeline of her life and work that scrolls sideways through each period."),
    leadershipRole: tp("I led a small team of UX and UI designers and owned the concept, the content and the experience architecture. With a client who had been let down four times, steady communication mattered as much as the design."),
    processPhases: [
      { title: "Recovery", description: tp("Fixed the broken site using my programming background and got the school back online.") },
      { title: "Content", description: tp("Rewrote every page and gave years of content a clear structure.") },
      { title: "Immersive redesign", description: tp("Built the 360° studio concept, the sideways-then-deeper scroll and the biographical timeline.") },
      { title: "Ongoing", description: tp("Refining the site with Dipa as her workshops grow.") },
    ],
    featured: true,
    featureImage: "/images/dipa-showcase.webp",
    featureImageAlt: "Dipa Visionary Art School website homepage showing immersive studio experience with story section",
    galleryImages: [
      { src: "/images/dipa-feature.webp", alt: "Dipa Visionary Art School brand identity and logo design" },
      { src: "/images/dipa-process-1.webp", alt: "Site architecture diagram showing the complete information hierarchy and page structure for Dipa's website" },
      { src: "/images/dipa-process-2.webp", alt: "Revised site architecture with dark theme showing streamlined navigation and content organisation" },
      { src: "/images/dipa-detail-1.webp", alt: "About Dipa page design featuring hand-drawn illustrations, biography section, and whimsical art-school aesthetic" },
      { src: "/images/dipa-detail-2.webp", alt: "Mission and Vision page with illustrated elements, wolf imagery, and fantasy-inspired visual storytelling" },
      { src: "/images/dipa-detail-3.webp", alt: "How It Works section showing workshop environment with students creating art, and enrollment process" },
    ],
  },
  {
    slug: "steve-hodel",
    title: "As Within, So\u00A0Without",
    subtitle: tp("Designing a 212-page book around a decades-long investigation"),
    client: tp("Steve Hodel\nNYT bestselling author, retired LAPD homicide detective"),
    intro: [
      tp("Steve Hodel is a retired LAPD homicide detective and New York Times bestselling author. After retiring, he spent decades investigating his father, Dr. George Hodel, whom he believes was behind the Black Dahlia murder. As Within, So Without follows that investigation into the surrealist art world his father moved in."),
      tp("I designed and typeset the 212-page book, placing more than 130 photographs, documents and artworks from a manuscript that kept changing throughout production."),
    ],
    chapters: [
      {
        label: "The challenge",
        paragraphs: [
          tp("The manuscript brought together decades of records, letters, photographs and artworks. It had to read as a serious book rather than a case file, and each image needed to sit close to the passage that explained its significance."),
          tp("Many of the source images were old scans of uneven quality. The book also had to meet Amazon’s print specifications for paperback and hardcover, while several rounds of text edits kept changing the layout."),
        ],
      },
      {
        label: "Research and visual direction",
        paragraphs: [
          tp("I read the manuscript and Steve’s earlier books, then studied printed material from the art world of the 1930s and 1940s: catalogues, magazines, typefaces and the way pages were built around images."),
          tp("I chose Adobe Caslon for its period character and its readability across a long book. A consistent grid and generous margins gave the material room without making each page feel like a separate exhibit."),
        ],
        figures: [
          { images: [{ src: "/images/steve-hodel-key-2.webp", alt: tp("Chapter opener set in Adobe Caslon beside a full-bleed archival photograph"), ratio: "4 / 3" }, { src: "/images/steve-hodel-key-1-v2.webp", alt: tp("Exhibit spread: George Hodel’s 1920s school essays, yearbook pages and portrait, each figure numbered and captioned in the margin"), ratio: "4 / 3" }] },
        ],
      },
      {
        label: "Images and production",
        paragraphs: [
          tp("The images were part of the evidence, not decoration. I placed each one alongside the passage it supported, with consistent framing and captions, so readers could follow the argument without searching through the book."),
          tp("I coordinated the restoration of weaker scans and carried the layout through several rounds of structural edits. As the sole designer, I handled the typography, layout, image placement, captions and print-ready files, keeping Steve involved throughout and explaining decisions in terms of the reader’s experience."),
        ],
      },
    ],
    results: [
      tp("A 212-page full-colour interior, typeset and prepared for print"),
      tp("More than 130 images placed and captioned in context"),
      tp("Restoration coordinated for lower-quality source images"),
      tp("A consistent layout system that absorbed structural edits"),
      tp("Print-ready files for paperback and hardcover, with the book on sale on Amazon"),
    ],
    reflection: tp("It’s one of the projects I’m proudest of. The material represented decades of investigation, and the design had to make that record easier to follow without pretending the evidence was simpler than it was. My job was to give the book a structure that respected the research and its historical context, while keeping the finished volume clear and readable."),
    credits: tp("Book Design & Typesetting: Amr Abu-Talleb"),
    impactStatement: "212\u00A0pages · 130+\u00A0archival images placed and\u00A0captioned · Print-ready for\u00A0paperback and\u00A0hardcover on\u00A0Amazon",
    role: "Book Designer\nSole designer: typography, layout, production",
    scope: "Interior design, typesetting, image placement and\u00A0captions, restoration coordination, print\u00A0production",
    timeline: "December 2025 \u2013 February\u00A02026",
    industry: "Publishing\nInvestigative nonfiction",
    markets: "United States\u00A0(Amazon)",
    year: "2025–2026",
    businessContext: "Steve Hodel is\u00A0a\u00A0former LAPD homicide detective. After he retired, he spent decades investigating his own father, Dr. George Hodel, whom he believes was behind the\u00A0Black Dahlia murder. As Within, So Without follows that investigation into the\u00A0surrealist art world his father moved\u00A0in.",
    clientProblem: "The manuscript carried decades of\u00A0research: records, letters, photographs and\u00A0artworks, more than 130\u00A0images in\u00A0all. It had to\u00A0read as\u00A0a\u00A0serious book, not a\u00A0case file, and\u00A0every image had to\u00A0sit next to\u00A0the\u00A0passage that explains\u00A0it.",
    constraints: "Many images were old scans of\u00A0uneven quality. The book had to\u00A0meet Amazon's print specifications for\u00A0paperback and\u00A0hardcover in\u00A0full colour, and\u00A0the\u00A0text kept changing across several rounds of\u00A0edits.",
    insight: "This is\u00A0a\u00A0book about art as\u00A0much as\u00A0about a\u00A0crime. A modern true-crime look would have undercut its own argument. It had to\u00A0look like it\u00A0came from the\u00A0period it\u00A0describes.",
    creativeStrategy: "I\u00A0read the\u00A0manuscript and\u00A0Steve's earlier books first. Then I\u00A0studied how the\u00A0art world of\u00A0the\u00A01930s and\u00A040s talked about itself in\u00A0print: the\u00A0catalogues, the\u00A0magazines, the\u00A0typefaces and\u00A0the\u00A0way pages were built around images. Adobe Caslon carries the\u00A0text. It has the\u00A0weight of\u00A0that period and\u00A0stays easy to\u00A0read over 212\u00A0pages.",
    keyDecisions: "Images are treated as\u00A0exhibits. Each one is\u00A0anchored to\u00A0its paragraph, captioned the\u00A0same way and\u00A0given the\u00A0same frame, so\u00A0a\u00A0reader can check a\u00A0claim against the\u00A0picture without flipping pages. The type stays quiet: one serif family, a\u00A0strict grid and\u00A0generous margins, so\u00A0the\u00A0material does the\u00A0talking.",
    leadershipRole: "I\u00A0was the\u00A0only designer, so\u00A0the\u00A0leadership here was with the\u00A0author. I\u00A0kept Steve involved at\u00A0every stage, explained each decision in\u00A0terms of\u00A0how a\u00A0reader follows the\u00A0evidence, and\u00A0coordinated image restoration and\u00A0structural changes across rounds without breaking the\u00A0layout.",
    processPhases: [
      { title: "Reading & Research", description: "Read the\u00A0manuscript and\u00A0Steve's earlier books, then studied the\u00A0printed matter of\u00A0the\u00A0period the\u00A0story moves\u00A0through." },
      { title: "Type & Grid", description: "Chose Adobe Caslon for\u00A0its period character and\u00A0readability, and\u00A0built a\u00A0strict grid with master pages for\u00A0chapters, exhibits and\u00A0notes." },
      { title: "Exhibits & Images", description: "Placed more than 130\u00A0images as\u00A0anchored figures with consistent captions, and\u00A0coordinated restoration of\u00A0the\u00A0weakest\u00A0scans." },
      { title: "Production", description: "Prepared print-ready files for\u00A0paperback and\u00A0hardcover in\u00A0full colour, through several rounds of\u00A0structural\u00A0edits." },
    ],
    testimonial: { quote: "Very professional work and his continual ongoing communications and proffered insights were invaluable. I\u00A0highly recommend\u00A0him.", author: "Steve Hodel", role: "NYT Bestselling Author" },
    featured: true,
    featureImage: "/images/steve-hodel-feature.webp",
    featureImageAlt: "As Within, So Without by Steve Hodel, hardcover book on a wooden desk with warm lighting",
    processImages: [
      { src: "/images/steve-hodel-key-1-v2.webp", alt: "Exhibit spread: George Hodel\u2019s 1920s school essays, yearbook pages and portrait, each figure numbered and captioned in the margin" },
      { src: "/images/steve-hodel-key-2.webp", alt: "Chapter opener set in Adobe Caslon beside a full-bleed archival photograph" },
    ],
    galleryImages: [
      { src: "/images/steve-hodel-spread-title.webp", alt: "Title spread: As Within, So Without set in Caslon capitals opposite Steve Hodel\u2019s surrealist collage" },
      { src: "/images/steve-hodel-spread-ch2.webp", alt: "Chapter Two opener: a 1922 school portrait on a black plate facing the chapter title Surrealism: The Key to His Crimes" },
      { src: "/images/steve-hodel-spread-exhibits.webp", alt: "Architecture exhibits: black-and-white photographs of the Hodel house and studio in Los Angeles, each with a figure number and caption" },
      { src: "/images/steve-hodel-spread-colour.webp", alt: "Full-colour spread: Fred Sexton\u2019s 1955 painting Monalita beside the text that examines it" },
      { src: "/images/steve-hodel-spread-ch10.webp", alt: "Chapter Ten opener: Man Ray\u2019s 1946 portrait of George Hodel on a black plate facing the chapter As Within So Without" },
      { src: "/images/steve-hodel-spread-appendix.webp", alt: "Appendix spread: Hodel family photographs from the 1940s arranged as numbered figures" },
    ],
    buyLink: { href: "https://www.amazon.com/AS-WITHIN-SO-WITHOUT-Surrealism/dp/B0GMQSVHQP", label: "See the book on Amazon" },
  },
]

/* ─── Project Highlights ─────────────────────────── */

const allProjectHighlights: ProjectHighlight[] = [
  {
    slug: "alfy",
    hidden: true,
    title: "Alfy",
    subtitle: tp("Refocusing a marble brand’s campaigns on the architects who specify it"),
    role: tp("Creative Director, Overpowered"),
    scope: tp("Campaign strategy, art direction, social creative direction and website redesign exploration"),
    description: tp("Alfy is a major marble manufacturer selling across Egypt, the EU and Dubai. The agency was publishing social posts every week, but the content was aimed at consumers, although Alfy sells mainly to businesses.\n\nAs Creative Director at Overpowered, I redirected the campaign toward the architects and designers who specify marble for their projects. We moved away from generic AI-generated renders and used real product photography to show the stone in finished interiors, with more emphasis on its range, finish and application. A website redesign was also explored as part of the wider work."),
    keyResult: tp("Social engagement rose 70%."),
    client: "Alfy\nPremium Marble Manufacturer",
    industry: "Luxury Marble / Architecture",
    year: "2025",
    featureImage: "/images/alfy-feature.webp",
    featureImageAlt: "El Alfy Saraya website hero section showcasing natural stone, wood working, and metal fabrication with luxury interior photography",
    keyVisuals: [
      { src: "/images/alfy-key-2.webp", alt: "El Alfy Saraya Deep Blue marble campaign design with editorial layout showing stone texture details and product description" },
      { src: "/images/alfy-key-1.webp", alt: "Rocknest by El Alfy luxury furniture campaign with Feel The Luxury headline, featuring chair and lamp product styling" },
    ],
  },
  {
    slug: "nexus",
    hidden: true,
    title: "Nexus",
    subtitle: tp("Three brand personalities, written before anything was drawn"),
    role: tp("Brand Designer & Webflow Developer\nFreelance"),
    scope: tp("Brand direction, visual identity, website design and build"),
    description: tp("Nexus is a recruitment company serving the Middle East and Africa. The work began with exploring how the company could present itself before settling on a visual identity.\n\nI helped shape three brand directions, each a different personality with its own voice, mission, strengths, weaknesses and moodboard. Three visual routes followed, giving the client distinct options before choosing the direction for the brand.\n\nI then developed the selected identity and designed and built the website in Webflow, carrying the chosen direction through to the digital experience."),
    client: tp("Nexus\nRecruitment company, Middle East and Africa"),
    industry: tp("Recruitment"),
    year: "2024",
  },
  {
    slug: "alienor",
    hidden: true,
    title: "Alienor",
    subtitle: tp("A physician’s skincare line, as soothing as moonlight"),
    role: tp("Brand Designer\nContract"),
    scope: tp("Brand identity, packaging and visual direction"),
    description: tp("Dr Noor, a physician, created Alienor around effective ingredients and a calm daily ritual. The brand needed to feel premium and trustworthy without looking cold or clinical.\n\nI built the identity around its line, “As soothing as moonlight”: a classic serif wordmark whose O echoes the moon, a plum and rose palette, and a soft ribbon pattern that carries across the jars, cartons and brand touchpoints."),
    client: "Dr.\u00a0Noor\nAlienor Skincare",
    industry: "Luxury Skincare / Beauty",
    year: "2022",
    featureImage: "/images/alienor-hero-v3.webp",
    featureImageAlt: "Alienor day cream jar and carton on a travertine plinth under cool moonlight, a ring of light behind echoing the O of the logotype",
    keyVisuals: [
      { src: "/images/alienor-daycream-v3.webp", alt: "Alienor Day Cream jar and carton beside a stack of black basalt stones in soft daylight" },
      { src: "/images/alienor-pumpkin-v3.webp", alt: "Alienor Superfood AHA Glow Cleansing Butter resting on a small pumpkin in warm autumn light" },
    ],
    figures: [
      { images: [{ src: "/images/alienor-brand-v5.webp", alt: tp("Alienor brand system: the vector logotype on plum, a palette of plum, berry, rose, pink, light grey and white, Century Schoolbook and Montserrat, the ribbon pattern and a rose-gold O favicon"), ratio: "16 / 9" }], caption: tp("The brand system: plum and rose, a classic serif and a light sans.") },
    ],
  },
  {
    slug: "hickey",
    hidden: true,
    title: "Hickey",
    subtitle: tp("An investor deck for a US makeup start-up that went on to raise $2M"),
    description: tp("Hickey was raising investment and needed a deck that would communicate the business clearly to potential investors.\n\nI designed every slide and worked on the order in which the story unfolded, so the presentation moved through the information in a way investors could follow."),
    keyResult: tp("The deck was one part of a raise that reached $2 million."),
    client: tp("Hickey\nMakeup start-up, USA"),
    role: tp("Deck Designer\nFreelance"),
    scope: tp("Investor deck design"),
    industry: tp("Beauty and cosmetics"),
    year: "",
  },
  {
    slug: "salel",
    hidden: true,
    title: "Salel",
    subtitle: tp("A hand-drawn Arabic wordmark for a ghutra brand in Qatar"),
    description: tp("Salel sells ghutra, the traditional men’s headdress, in Qatar. The identity needed to feel connected to the region’s own visual language.\n\nI drew the Arabic wordmark by hand, then developed the supporting identity around it: a colour system, a seal and a stationery set. The calligraphy gives the brand its own character, while the supporting elements make the identity usable across everyday applications."),
    client: tp("Salel\nGhutra brand, Qatar"),
    role: tp("Brand Designer & Calligrapher\nFreelance"),
    scope: tp("Calligraphic logo, colour system, stationery and seal"),
    industry: tp("Menswear\nTraditional Gulf dress"),
    year: "2025",
  },
  {
    slug: "shavery",
    hidden: true,
    title: "Shavery & Co",
    subtitle: tp("A luxury barbershop identity that holds up from the street sign to the cup"),
    description: tp("The identity for Shavery & Co needed to communicate a premium experience across both the storefront and the smaller details customers meet inside.\n\nI built the system around a badge that works on the exterior sign, a cup, a business card and other brand applications, keeping the same character and quality across different materials and scales."),
    client: tp("Shavery & Co\nLuxury barbershop, Saudi Arabia"),
    role: tp("Brand Designer\nFreelance"),
    scope: tp("Identity, badge, signage"),
    industry: tp("Grooming"),
    year: "2025",
  },
]

/** Published highlights only; hidden ones drop out everywhere. */
export const projectHighlights = allProjectHighlights.filter((h) => !h.hidden)

export function getHiddenHighlightSlugs(): string[] {
  return allProjectHighlights.filter((h) => h.hidden).map((h) => h.slug)
}

/* ─── Helpers ────────────────────────────────────── */

export function isCaseStudyPublished(study: CaseStudy): boolean {
  return !study.hidden
}

export const publishedCaseStudies = caseStudies.filter(isCaseStudyPublished)

export function getHiddenCaseStudySlugs(): string[] {
  return caseStudies.filter((p) => p.hidden).map((p) => p.slug)
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const project = caseStudies.find((p) => p.slug === slug)
  if (!project || project.hidden) return undefined
  return project
}
export function getHighlightBySlug(slug: string): ProjectHighlight | undefined {
  return projectHighlights.find((p) => p.slug === slug)
}
export function getAdjacentCaseStudies(slug: string) {
  const index = publishedCaseStudies.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? publishedCaseStudies[index - 1] : null
  const next = index < publishedCaseStudies.length - 1 ? publishedCaseStudies[index + 1] : null
  return { prev, next }
}
export function getAdjacentHighlights(slug: string) {
  const index = projectHighlights.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? projectHighlights[index - 1] : null
  const next = index < projectHighlights.length - 1 ? projectHighlights[index + 1] : null
  return { prev, next }
}
// Backward compat
export type Project = CaseStudy
export const projects = publishedCaseStudies
export function getProjectBySlug(slug: string) { return getCaseStudyBySlug(slug) }
export function getAdjacentProjects(slug: string) { return getAdjacentCaseStudies(slug) }
