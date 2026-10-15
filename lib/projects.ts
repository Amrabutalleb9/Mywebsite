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
  storyFigures?: { images: { src: string; alt: string; ratio?: string }[]; caption?: string }[]
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
}

/* ─── Full Case Studies ──────────────────────────── */

export const caseStudies: CaseStudy[] = [
  {
    slug: "overpowered",
    title: "Overpowered",
    subtitle: tp("Turning a design studio into an agency that knew who it was for"),
    impactStatement: tp("Repositioned for small and mid-sized businesses · Built a 25-person team across five disciplines · Won SPLT by rewriting its quotation"),
    client: tp("Overpowered\nCreative & digital agency, London"),
    role: tp("Creative Director\nReported to the owner · Team of 25"),
    teamSize: tp("Art directors plus graphic, video, 3D, copy and UX/UI teams"),
    scope: tp("Agency strategy, positioning, go-to-market, hiring and team structure, creative standards, identity and website direction"),
    timeline: "Dec 2024 – Jun 2025",
    industry: tp("Creative agency\nBranding, digital and video"),
    markets: tp("UK, UAE, Egypt and the EU"),
    year: "2024–2025",
    businessContext: tp("The owner first came to me about two years before I joined. He wanted a global agency with more than forty people from the first day. I rebuilt the plan around a much smaller start, worked out what the first six to twelve months would cost before the agency broke even, and advised him to grow into the bigger version. When he was ready to start, he brought me in as Creative Director, reporting only to him."),
    clientProblem: tp("My first weeks were an audit. The website promised ten years of design-driven product development above service cards with nothing in them. The copy could have belonged to any agency, and it spoke to everyone at once. The brand leaned on gun imagery everywhere, from the logo to the social posts, which ruled out paid ads in the EU and put off the corporate clients the agency wanted in Dubai. The identity had no system behind it. There was no reusable library, no pattern system and no logo variations, so every designer drew the brand again from scratch. There was no outreach plan, no hiring process and no shared idea of what good work looked like."),
    constraints: tp("The agency had to keep winning and delivering client work while everything around it changed. Budgets and resourcing stayed with the owner, so every change I proposed came as a plan he could approve, with what it would cost, who would do it and what the next three months would look like."),
    insight: tp("The problem wasn’t the logo. Overpowered was trying to be everything to everyone. It needed a clear buyer, a short list of services it could deliver well, and a way of finding clients that didn’t depend on the owner’s network alone."),
    creativeStrategy: tp("I repositioned the agency for small and mid-sized businesses. Three service lines replaced the long menu: branding, web and app, and video. Websites were built on Webflow and Framer so clients got them faster and for less, and every project followed the same four steps from discovery to launch. Product and technology buyers got their own offer, OP Labs, so a CTO and a marketing lead no longer read the same pitch. Then I wrote the go-to-market plan in two stages. The first used the network, social channels and a stronger portfolio. The second added client research, paid ads, content and a CRM to track every lead."),
    keyDecisions: tp("I turned outreach into a system the team could run without me. It had a three-day LinkedIn warm-up before the first message, two versions of every opening message to see which one landed, and five follow-ups after it, with separate scripts for OP and OP Labs buyers and research into niche markets abroad. I wrote the plan, the copy and the targeting, the team ran it, and I joined the closing calls with the owner. We held the new website back until the case studies behind it were ready, because a new site with nothing to show would have repeated the old problem."),
    leadershipRole: tp("I organised the team into five disciplines: graphic, video, 3D, copy and UX/UI. Art directors led the creative teams and I ran UX/UI directly. I wrote the hiring test, a brief for a premium olive-oil brand built on Arabic calligraphy, and reviewed every candidate. I promoted one of the designers to Art Director. Every case study the team produced came back with written notes from me about the reasoning, the personas, the wireframes and the testing behind it, the typography, real copy instead of lorem ipsum, and contrast that passes accessibility checks. Staffing, promotions and reviews were mine. The budget was the owner’s."),
    processPhases: [
      { title: "Audit", description: tp("Reviewed the website, the identity, the offer and the client list, and wrote up what had to change first.") },
      { title: "Positioning", description: tp("Defined the buyer, the three service lines and the four-step process, and split the offer into OP and OP Labs.") },
      { title: "Go-to-market", description: tp("Wrote the two-stage plan and the outreach system, from the LinkedIn warm-up to the CRM that tracked every lead.") },
      { title: "Team & standards", description: tp("Organised five disciplines, wrote the hiring test, ran the critiques and promoted from within.") },
      { title: "Identity & website direction", description: tp("Directed the new identity, dropped the gun imagery and tested visual elements in small Instagram campaigns in the UAE, the UK and Egypt. Then directed five website concepts with the team.") },
    ],
    results: [
      tp("A clear position for small and mid-sized businesses, with a separate offer for product and technology buyers"),
      tp("A written go-to-market plan and an outreach system the team could run on its own"),
      tp("A 25-person team across five disciplines, with a hiring test, regular critiques and a designer promoted to Art Director"),
      tp("A new identity without the gun imagery, used across the agency for about a year"),
      tp("Won SPLT by rewriting its development quotation, then led the product design"),
      tp("Turned a mis-priced $8k proposal into a two-phase $10k engagement, and won both phases"),
      tp("Rebuilt Alfy’s campaigns for the architects who buy marble, with a 70% lift in social engagement"),
    ],
    reflection: tp("I was hired as a creative director and spent half my time on the business around the creative work. That’s the part I’d want any agency owner to see. The work only gets good once the agency knows who it’s for, how it finds them and what standard it holds itself to."),
    credits: tp("Creative Direction & Agency Strategy: Amr Abu-Talleb · Art Direction & Design: the Overpowered team"),
    featured: true,
    featureImage: "/images/op-hero-v1.webp",
    featureImageAlt: tp("The OP logomark as a giant glass sculpture floating above a hill, a lone figure looking up at it"),
    featureVideo: {
      mp4: "/videos/op-hero-loop-v1.mp4",
      poster: "/images/op-hero-loop-poster-v1.webp",
      alt: tp("The OP logomark as a giant glass sculpture above a hill, cut fast with close-ups of the glass and a man looking up, looping back to where it starts"),
    },
    storyFigures: [
      { images: [{ src: "/images/op-fig-01-v3.webp", alt: tp("The old Overpowered site, December 2024: a keycap hero claiming ten years of product development, then empty service cards") }], caption: tp("The site as I found it, December 2024 (Wayback Machine). A strong hero, then a promise with nothing behind it.") },
      { images: [{ src: "/images/op-fig-02-v3.webp", alt: tp("Positioning before and after: from digital dominance for anyone to more than ordinary for small and mid-sized businesses, three services, one process") }], caption: tp("From a menu of everything to one buyer, three services and one process.") },
      { images: [{ src: "/images/op-fig-03-v3.webp", alt: tp("Two offers: OP for founders and marketing leads, OP Labs for CTOs and product owners") }], caption: tp("Two offers, two buyers, two pitches.") },
      { images: [{ src: "/images/op-fig-04-v3.webp", alt: tp("The two-stage go-to-market plan, from the owner’s network to a measurable pipeline") }], caption: tp("The two-stage plan, from the owner’s network to a pipeline the agency could measure.") },
      { images: [{ src: "/images/op-fig-05-v3.webp", alt: tp("The outreach sequence: three-day warm-up, A/B first message, five follow-ups, closing call") }], caption: tp("The outreach sequence the team ran for every lead.") },
      { images: [{ src: "/images/op-fig-06-v3.webp", alt: tp("Org chart: owner, Creative Director, art directors over graphic, video, 3D and copy, and UX/UI run directly") }], caption: tp("25 people in five disciplines. Roles only.") },
      { images: [{ src: "/images/op-fig-09-v2.webp", alt: tp("Pages from the January 2025 brand guidelines: logomark, logo variations, OP Labs lock-up, colour, type and pattern") }], caption: tp("Pages from the January 2025 brand guidelines.") },
      { images: [{ src: "/images/op-billboard-v1.webp", alt: tp("Billboard: Transforming ideas into impactful designs, over a grainy black-and-white crowd with yellow value tags"), ratio: "1296 / 768" }] },
      { images: [{ src: "/images/op-merch-v1.webp", alt: tp("Merch: a grey hoodie with the Overpowered signature and a black tote with the circular badge"), ratio: "1296 / 768" }, { src: "/images/op-sign-v1.webp", alt: tp("Hanging sign: your brand deserves more than ordinary, it deserves Overpowered"), ratio: "1296 / 768" }] },
      { images: [{ src: "/images/op-social-1-v1.webp", alt: tp("Social post: When science and design collaborate"), ratio: "4 / 5" }, { src: "/images/op-social-2-v1.webp", alt: tp("Social post: Pushing boundaries"), ratio: "4 / 5" }, { src: "/images/op-social-3-v1.webp", alt: tp("Social post: Top notch design solutions"), ratio: "4 / 5" }] },
      { images: [{ src: "/images/op-colours-v1.webp", alt: tp("The Overpowered signature on white, black, yellow, sand, orange and blue"), ratio: "1386 / 868" }], caption: tp("The identity in use: outdoor, merch, signage, social, and the signature on every brand colour.") },
      { images: [{ src: "/images/op-fig-10-v2.webp", alt: tp("Five website concepts and the four-act cinematic story developed further") }], caption: tp("Five website concepts, and the one we developed.") },
    ],
  },
  {
    slug: "bay-area-trips",
    title: "Bay Area Trips",
    subtitle: tp("Turning a sprawling idea into one product for travellers, families, businesses and creators"),
    impactStatement: tp("Web, mobile web and app planned as one system · Four account types · Taken from idea to a live product"),
    client: tp("Bay Area Trips\nTravel and local discovery platform, USA"),
    role: tp("Product Strategist & Designer\nLed a team of about 30 with the client"),
    teamSize: tp("Project team of about 30"),
    scope: tp("Product strategy, information architecture, web and app UX/UI, design system"),
    timeline: "Sep 2023 – Jan 2025",
    industry: tp("Travel & local discovery\nMembership platform"),
    markets: tp("San Francisco Bay Area, USA"),
    year: "2023–2025",
    businessContext: tp("Jared wanted one place for everyone exploring the Bay Area, and for the businesses and creators who serve them. Restaurants, hotels, health, education, real estate, shopping, events, EV charging, scavenger hunts and a travel club all had to live under one roof, on the web and in an app."),
    clientProblem: tp("The idea had no edges. It had many audiences and many features, all of them equally important, and no plan for how the website, the mobile web and the app connected or which page should lead where."),
    constraints: tp("The deadline and the budget were fixed, and a project team of about thirty was building at the same time. The structure had to be clear enough for everyone to work from, and small enough to ship on time."),
    insight: tp("The product only made sense as a system. Each audience needed its own account, and all of them had to share one directory, one events calendar and one membership."),
    creativeStrategy: tp("I mapped the product before designing it: who each account was for, what it could do, and how the website, the mobile web and the app handed people to each other. Travellers and families got discovery, trips, hunts and the travel club. Businesses got listings, orders and a dashboard. Creators got Creator Connect. Membership tied them together."),
    keyDecisions: tp("I decided what got built, how the platforms linked and which page led where, so the idea could ship as a real product inside the deadline and the budget."),
    leadershipRole: tp("I was the person who linked everything together. Everyone on the project team of about thirty reported either to me or to Jared, and the two of us built the product together, with me as the product strategist and designer."),
    processPhases: [
      { title: "Map the system", description: tp("Four audiences, three platforms and the paths between them, before any screen.") },
      { title: "Structure", description: tp("Grouped the directory, events, trips, hunts, shopping and membership into one navigation that works on the web and in the app.") },
      { title: "Key flows", description: tp("Directory to listing, the business dashboard, Creator Connect, the kids’ view, membership and the scavenger hunt.") },
      { title: "Design system", description: tp("One set of colours, type and components shared by the website, the mobile web and the app.") },
    ],
    results: [
      tp("Took a sprawling idea to a live product across the web, mobile web and an app"),
      tp("Four account types: travellers, kids and families, businesses and creators"),
      tp("About 60 app sections and the full website designed in one system"),
      tp("Launched a first version, then reworked features and structure using feedback from the first 200 users"),
      tp("The client’s team has kept developing the product since launch"),
    ],
    reflection: tp("My job was to make a big idea buildable. The product has changed since launch, which is what products do. The structure underneath is what I’d point to."),
    credits: tp("Product Strategy & Design: Amr Abu-Talleb · Client: Jared, Bay Area Trips"),
    featured: true,
  },
  {
    slug: "split",
    title: "SPLT",
    subtitle: "Turning a\u00A0marketplace brief into a\u00A0four-sided fitness\u00A0platform",
    impactStatement: "Won the contract by\u00A0rewriting a\u00A0flawed quotation \u00B7 330+\u00A0screens across one app and three dashboards \u00B7 Trainer subscriptions and paid video added as\u00A0new revenue\u00A0lines",
    client: "SPLT\nFitness Social App & Marketplace, Egypt",
    role: "Creative Director & UX Lead\nLed 2\u00A0designers and the\u00A0client relationship",
    teamSize: "1 Senior + 1 Junior Designer",
    scope: "Quotation rewrite, competitor research, information architecture, mobile app, admin, vendor and trainer dashboards, design system",
    timeline: "Feb \u2013 Jun\u00A02025",
    industry: "Health & Fitness\nMarketplace",
    markets: "Egypt (EGP pricing)",
    year: "2025",
    businessContext: "SPLT set out to\u00A0be\u00A0more than a\u00A0workout logger. The plan was a\u00A0gym community where people track training, follow each other and buy kit from multiple sellers in\u00A0one app. To make money it\u00A0had to\u00A0work for four groups at\u00A0once: members, trainers, vendors and the SPLT team running\u00A0it.",
    clientProblem: "The brief that reached us described a\u00A0store. It listed what an\u00A0admin and a\u00A0vendor would need to\u00A0sell products: orders, brands, stock, promo codes, payouts and reports. The development quotation SPLT had been given was inflated, its line items didn\u2019t hold up\u00A0technically, and the scope was loose. And nothing in\u00A0it\u00A0gave trainers a\u00A0reason to\u00A0join, or\u00A0members a\u00A0reason\u00A0to\u00A0pay.",
    constraints: "The client needed to\u00A0relaunch fast. I\u00A0had a\u00A0small team, one senior and one junior designer, neither of\u00A0whom had designed multi-role admin systems before. Every role also had to\u00A0share one visual language, so\u00A0a\u00A0component built for the app couldn\u2019t drift once it\u00A0reached\u00A0a\u00A0dashboard.",
    insight: "Before any wireframes we\u00A0subscribed to\u00A0the major fitness apps and their betas, collected their screens and read their reviews side by\u00A0side. The same complaint kept coming up: trainers looked exactly like everyone else. Nobody could tell a\u00A0coach from a\u00A0member, and coaches had no\u00A0way to\u00A0earn inside the app. That gap became the\u00A0product.",
    creativeStrategy: "I\u00A0kept the marketplace the client asked for and built a\u00A0training layer on\u00A0top of\u00A0it. Trainers became a\u00A0role of\u00A0their own. In the app, their profile leads with a\u00A0track record and a\u00A0Subscribe button, keeps premium videos locked until you pay, and offers three plans (monthly, quarterly, yearly). Behind it\u00A0sits a\u00A0trainer dashboard to\u00A0manage clients, goals, workout plans, an\u00A0exercise library and video sections. Around that, members got the parts that keep people opening the app every day: a\u00A0workout builder, personal and volume records, groups, goals and achievements, streaks and loyalty\u00A0points.",
    keyDecisions: "Professional first, social second: a\u00A0trainer\u2019s profile opens on\u00A0proof and plans, and the social feed sits in\u00A0its own tab. Free content lets members judge a\u00A0coach, then paid subscriptions unlock the rest, a\u00A0revenue line the original scope never had. Each role gets its own sidebar, but all three dashboards share one shell, one set of\u00A0tables and one set of\u00A0report layouts, so\u00A0the team could build three products with one\u00A0system.",
    leadershipRole: "I\u00A0took the development quotation apart line by\u00A0line and rewrote it\u00A0with a\u00A0credible scope and cost. That rewrite won the contract. On the design side I\u00A0set the information architecture and visual direction, and taught the team admin hierarchies and multi-role journeys using my own earlier systems as\u00A0material, before they took on\u00A0the full\u00A0UI.",
    processPhases: [
      { title: "Quotation & Scope", description: "Rewrote the development quotation line by\u00A0line: cut the inflated items, defined what each role needs, and turned a\u00A0loose brief into a\u00A0scope SPLT could\u00A0sign." },
      { title: "Competitive Deep Dive", description: "Subscribed to\u00A0the major fitness apps and their betas, mapped their features and read user reviews to\u00A0find what nobody was solving: trainers who look and earn like\u00A0professionals." },
      { title: "Architecture for Four Roles", description: "Mapped member, trainer, vendor and admin journeys before any visual design, then grouped the app into modules: home feed, workouts, track, groups, shop, trainers and\u00A0account." },
      { title: "System, Team & UI", description: "Built a\u00A0dark mobile system and a\u00A0shared dashboard shell around one purple accent, then directed the team through 330+\u00A0screens with weekly\u00A0reviews." },
    ],
    results: [
      "Won the contract by\u00A0rewriting a\u00A0flawed quotation with a\u00A0credible scope and\u00A0cost",
      "Designed 330+\u00A0screens: about 126 in\u00A0the mobile app, 82 in\u00A0the admin dashboard, 80 in\u00A0the trainer dashboard and 50 in\u00A0the vendor\u00A0dashboard",
      "Added a\u00A0full trainer role (profile, paid video and three subscription plans) that the original brief didn\u2019t\u00A0include",
      "Added retention features beyond the store: workout builder, personal records, groups, goals, achievements and loyalty\u00A0points",
      "One design system shared by\u00A0the app and all three\u00A0dashboards",
      "Took a\u00A0junior team from no\u00A0admin-system experience to\u00A0shipping multi-role product\u00A0design",
      tp("Planned the build in three phases: commerce, subscriptions and loyalty first, the trainer platform second, integrations and gamification third"),
      tp("Weighed Firebase against AWS in the scope, so hosting costs matched the roadmap"),
      tp("Fixed 8 bugs in the existing app before the new features started"),
    ],
    reflection: "The brief asked for a\u00A0shop. Reading competitors\u2019 reviews showed the business was really in\u00A0the trainers. The most valuable work I\u00A0did here wasn\u2019t a\u00A0screen: it\u00A0was rewriting the scope so\u00A0the product had a\u00A0reason to\u00A0exist, and then designing the system that let a\u00A0small team deliver\u00A0it. I\u00A0scoped and designed the first phases, and the build carried on after I\u00A0left the\u00A0agency.",
    credits: "Creative Direction & UX Strategy: Amr Abu-Talleb \u00B7 UI Design: Overpowered Design Team \u00B7 Agency: Overpowered",
    featured: true,
    featureImage: "/images/split-feature-v2.webp",
    featureImageAlt: "Five SPLT app screens tilted on the brand slash: shop, trainer profile, subscription plans, a live workout and achievements",
    processImages: [
      { src: "/images/split-process-1-v2.webp", alt: "The brief: SPLT admin shop overview with sales, revenue, escrow, latest orders, top sellers and categories" },
      { src: "/images/split-process-2-v2.webp", alt: "The addition: trainer video management in the dashboard, beside the trainer profile members subscribe from" },
    ],
    showcaseVideo: {
      mp4: "/videos/split-showcase-v2.mp4",
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
    slug: "taptools",
    title: "TapTools",
    subtitle: tp("Redesigning a data-heavy analytics dashboard so users see what matters first"),
    impactStatement: tp("23% fewer user-reported issues within 60 days · The redesign helped the company secure its next funding round"),
    client: tp("TapTools\nToken and NFT analytics platform, USA"),
    role: tp("Senior Product Designer\nFrom research to production UI"),
    scope: tp("User research and testing, core-flow redesign, UI from wireframes to production screens, light and dark themes"),
    timeline: "Dec 2022 – Jun 2023",
    industry: tp("Fintech analytics\nWeb dashboard"),
    markets: tp("Global, remote from the USA"),
    year: "2022–2023",
    businessContext: tp("TapTools is an analytics platform for tokens and NFTs. Market overviews, token pages, portfolios, swaps, watchlists and a wallet profiler all sit in dense, live tables and charts."),
    clientProblem: tp("The platform carried a lot of data and users were getting lost in it. Research pointed to bottlenecks in the core flows, the places where people stopped before doing what they came to do."),
    constraints: tp("It was a live product with active users, so the redesign had to ship without breaking the way people already worked."),
    insight: tp("In a data product, hierarchy is the feature. Users didn’t need more data on screen. They needed to see the right number first."),
    creativeStrategy: tp("I ran user research and testing to find where people dropped off, then redesigned the core flows around them. The interface was rebuilt on clearer typography, spacing and hierarchy, with one type set, one colour library and light and dark themes."),
    keyDecisions: tp("I led with the data problem, not the subject matter. Every screen was judged on one question: can a user find the number they came for without hunting for it?"),
    leadershipRole: tp("I owned the design from research to production-ready screens, working with a product and engineering team of about ten to ship it."),
    processPhases: [
      { title: "Research & testing", description: tp("Watched how users moved through the platform and where they gave up.") },
      { title: "Core flows", description: tp("Redesigned the flows behind the bottlenecks before touching the visual layer.") },
      { title: "Hierarchy", description: tp("Rebuilt typography, spacing and colour so the most important number on each screen reads first.") },
      { title: "Production UI", description: tp("Took the screens from wireframes to production-ready files in light and dark themes.") },
    ],
    results: [
      tp("23% fewer user-reported issues within 60 days of launch"),
      tp("The redesigned dashboard helped the company secure its next funding round"),
      tp("Market overview, token pages, portfolio, swaps, lists and the wallet profiler redesigned in one system"),
      tp("Light and dark themes built from one colour library"),
    ],
    reflection: tp("Dashboards fail quietly. Nobody complains about hierarchy, they just stop using the product. The 23% came from fixing what people actually tripped over."),
    credits: tp("UX Research & Product Design: Amr Abu-Talleb · Client: TapTools"),
    featured: true,
  },
  {
    slug: "zikabi",
    title: "Zikabi",
    subtitle: tp("Splitting one overloaded app into a parent brand and two products"),
    impactStatement: tp("One app became three brands under one parent · A full identity manual for the family · End-user, vendor and driver apps designed"),
    client: tp("Zikabi\nMarketplace start-up"),
    role: tp("UI/UX Designer, then Product Designer\nFreelance"),
    scope: tp("Brand architecture, identity system, product design for the end-user, vendor and driver apps"),
    timeline: "Oct 2020 – 2021",
    industry: tp("Marketplace\nHome food and local services"),
    markets: tp("Turkey and Egypt"),
    year: "2020–2021",
    businessContext: tp("The client was about to launch Homeats, one app holding everything they planned to offer. Home cooks would sell meals to their neighbourhood, local people would offer services and crafts, and drivers would deliver both."),
    clientProblem: tp("One app was trying to be three businesses. Each audience would have found most of it irrelevant, and none of the three could be launched, tested or grown on its own."),
    constraints: tp("The product was already heading to launch as a single app, so the change had to be argued for before it could be designed."),
    insight: tp("These were three businesses with different customers. They needed a family, not one app. A parent brand would hold the trust, and each product would do one job."),
    creativeStrategy: tp("I advised the client to split the product. Zikabi became the parent company, with Homeats for home cooks serving their community and Quickserv for local services and crafts. Everything stays “by Zikabi”, so the trust one product earns carries to the next."),
    keyDecisions: tp("User interviews changed the business model before any screen was final. Home cooks and customers didn\u2019t want subscriptions, so Homeats moved to a commission on each order. I built the brand architecture into the identity. The parent logo, colours, clear space and pictogram lead, with sub-brand lock-ups and a family of app icons for vendors, drivers and cooks. Then I designed the end-user, vendor and driver apps."),
    leadershipRole: tp("I started as the UI/UX designer and became the product designer, advising the client on what to launch and how. I left before the launch."),
    processPhases: [
      { title: "Product review", description: tp("Looked at what the single app was trying to do and who each part was for.") },
      { title: "Brand architecture", description: tp("Proposed Zikabi as the parent, with Homeats and Quickserv as products under it.") },
      { title: "Identity manual", description: tp("Version 1.0 in October 2020, covering the parent mark, colours, type, misuse, sub-brands and app icons.") },
      { title: "App design", description: tp("End-user, vendor and driver apps, designed in early 2021.") },
    ],
    results: [
      tp("A parent brand and two products, each able to launch and be tested on its own"),
      tp("User interviews moved Homeats from subscriptions to a commission on each order"),
      tp("A 15-page corporate identity manual for the whole family"),
      tp("End-user, vendor and driver app designs"),
    ],
    reflection: tp("The most useful thing I designed here was a decision. Splitting the product made every screen after it simpler."),
    credits: tp("Brand Architecture, Identity & Product Design: Amr Abu-Talleb · Client: Zikabi"),
    featured: true,
  },
  {
    slug: "steve-hodel",
    title: "As Within, So\u00A0Without",
    subtitle: "Designing a\u00A0212-page illustrated book for\u00A0a\u00A0decades-long\u00A0investigation",
    impactStatement: "212\u00A0pages · 130+\u00A0archival images placed and\u00A0captioned · Print-ready for\u00A0paperback and\u00A0hardcover on\u00A0Amazon",
    client: "Steve Hodel\nNYT bestselling author, former LAPD homicide detective",
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
    results: [
      "A 212-page full-colour interior, typeset and\u00A0print-ready",
      "130+\u00A0images placed, captioned and\u00A0coordinated through\u00A0restoration",
      "Prepared for\u00A0paperback and\u00A0hardcover, now on\u00A0sale on\u00A0Amazon",
      "A long-term working relationship with a\u00A0New York Times bestselling\u00A0author",
    ],
    testimonial: { quote: "Very professional work and his continual ongoing communications and proffered insights were invaluable. I\u00A0highly recommend\u00A0him.", author: "Steve Hodel", role: "NYT Bestselling Author" },
    reflection: "It's the\u00A0project I'm proudest of. A man spent most of\u00A0his life trying to\u00A0put a\u00A0hard truth on\u00A0the\u00A0record. My job was to\u00A0make that record clear and\u00A0credible, and\u00A0to\u00A0let the\u00A0design language of\u00A0the\u00A0period carry\u00A0it.",
    credits: "Book Design & Typesetting: Amr Abu-Talleb \u00b7 Author: Steve Hodel",
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
  {
    slug: "agfin",
    title: "Agfin",
    subtitle: "Turning a\u00A0brochure website into a\u00A0sales funnel, words\u00A0first",
    impactStatement: "12%\u00A0sales increase in\u00A0month\u00A0one \u00b7 Zero ad\u00A0spend \u00b7 A brochure site rebuilt as\u00A0a\u00A0story that\u00A0sells",
    client: "Agfin\nRobert, Financial Consultant, Australia",
    role: "Creative Director, UX Designer & Copywriter\nSolo project",
    scope: "Full website redesign, sales funnel architecture, VSL script writing, copywriting, interaction design",
    timeline: "Approximately 3 weeks",
    industry: "Agricultural Finance\nConsulting",
    markets: "Regional Australia",
    year: "2024\u20132025",
    businessContext: "Robert runs Agfin, advising Australian farming families on\u00A0the\u00A0money side of\u00A0the\u00A0farm. His work changes how those families get through a\u00A0bad season, but his website said none of\u00A0that.",
    clientProblem: "He hired me for\u00A0small fixes. What I\u00A0found was a\u00A0brochure from the\u00A0early web: no\u00A0story, no\u00A0proof and\u00A0no\u00A0clear next step. For a\u00A0consultant who lives on\u00A0trust, the\u00A0site was working against\u00A0him.",
    constraints: "Robert is\u00A0semi-retired, with a\u00A0modest budget and\u00A0a\u00A0limit on\u00A0how many new clients he can take. There was no\u00A0budget for\u00A0a\u00A0photo shoot. And halfway through, my\u00A0first draft of\u00A0the\u00A0copy proved too intense for\u00A0his audience and\u00A0had to\u00A0be\u00A0rewritten.",
    insight: "The site didn\u2019t need to\u00A0look better. It needed to\u00A0say something. Robert had real stories of\u00A0families he\u2019d helped, with real outcomes, and\u00A0none of\u00A0them were on\u00A0the\u00A0page. So the\u00A0job was to\u00A0rewrite the\u00A0whole site as\u00A0a\u00A0sales funnel built on\u00A0those\u00A0stories.",
    creativeStrategy: "I\u00A0interviewed Robert at\u00A0length, wrote a\u00A0VSL script and\u00A0rebuilt the\u00A0site as\u00A0a\u00A0funnel. The video opens on\u00A0a\u00A0farming family\u2019s struggle, brings Robert in\u00A0as\u00A0the\u00A0guide and\u00A0shows what changed for\u00A0them. The rest of\u00A0the\u00A0site backs that story with proof and\u00A0one clear next\u00A0step.",
    keyDecisions: "Halfway through, Robert told me my\u00A0first script was too emotional. He was right. I\u00A0rewrote it\u00A0to\u00A0sound warm and\u00A0trustworthy instead of\u00A0pushy. I\u00A0also replaced every stock photo with real images from his own region, and\u00A0the\u00A0site felt honest straight\u00A0away.",
    leadershipRole: "A solo project. I\u00A0handled the\u00A0strategy, the\u00A0copy, the\u00A0VSL script, the\u00A0UX, the\u00A0visual and\u00A0interaction design, and\u00A0ran the\u00A0project end to\u00A0end.",
    processPhases: [
      { title: "Audit & Proposal", description: "Hired for\u00A0small fixes, I\u00A0audited the\u00A0whole site and\u00A0showed Robert what it\u00A0could\u00A0become." },
      { title: "Copy First", description: "Wrote the\u00A0VSL script and\u00A0every line of\u00A0the\u00A0site before any design, built as\u00A0a\u00A0funnel: the\u00A0problem, the\u00A0guide, the\u00A0change, the\u00A0next\u00A0step." },
      { title: "The Pivot", description: "Robert flagged the\u00A0first draft as\u00A0too intense. I\u00A0rewrote the\u00A0key sections and\u00A0swapped stock images for\u00A0local\u00A0photographs." },
      { title: "Design & Build", description: "Built the\u00A0site with small animations that serve the\u00A0story and\u00A0never compete with\u00A0it." },
    ],
    results: [
      "12%\u00A0more sales in\u00A0the\u00A0first month, all organic, with no\u00A0paid\u00A0ads",
      "Growth capped on\u00A0purpose: Robert is\u00A0close to\u00A0retirement and\u00A0can only take so\u00A0many\u00A0clients",
      "A brochure site turned into a\u00A0story-led sales\u00A0funnel",
      "The words did more for\u00A0sales than any design\u00A0element",
    ],
    testimonial: {
      quote: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in\u00A0a\u00A0detailed explanation. He went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales\u00A0funnel.",
      author: "Robert",
      role: "Founder of Agfin, Australia",
    },
    reflection: "The most useful design tool is\u00A0often a\u00A0well-written sentence. The 12%\u00A0came from rewriting the\u00A0story, not from the\u00A0animations. Robert\u2019s pushback made the\u00A0final version better. Sometimes the\u00A0right call is\u00A0to\u00A0dial it\u00A0back.",
    credits: "Strategy, Copywriting, UX/UI Design & Build: Amr Abu-Talleb (solo) \u00b7 Client: Agfin, Australia",
    featured: true,
    featureImage: "/images/agfin-feature-v3.webp",
    featureImageAlt: "Agfin homepage hero: the farm profit road map headline settling in as the morning clouds clear over a Wimmera paddock",
    featureVideo: {
      mp4: "/videos/agfin-hero.mp4",
      poster: "/images/agfin-feature-v3.webp",
      alt: "The Agfin hero animation: a fly-through of morning cloud that clears to reveal the headline over a Wimmera paddock",
    },
    processImages: [
      { src: "/images/agfin-process-1-v2.jpg", alt: "Noon: the Does This Sound Familiar checklist, each ticked worry fading into heat haze" },
      { src: "/images/agfin-process-2-v2.jpg", alt: "Golden hour: the case study as one photo print, stamped Loan Declined before the plan turns it around" },
    ],
    showcaseVideo: {
      mp4: "/videos/agfin-showcase.mp4",
      poster: "/images/agfin-showcase-poster-v2.jpg",
      alt: "Scroll-through of the Agfin homepage, told as one day on the farm from dawn to the next morning",
    },
    galleryImages: [
      { src: "/images/agfin-detail-1-v2.jpg", alt: "About page introducing Agfin and founder Robert Barnes" },
      { src: "/images/agfin-detail-2-v2.jpg", alt: "Services page with the farm financial fitness assessment and service list" },
      { src: "/images/agfin-detail-3-v2.jpg", alt: "Contact page with the Get In Touch headline set behind the Grampians ranges" },
    ],
  },
  {
    slug: "dipa",
    title: "Dipa Visionary Art School",
    subtitle: "Rebuilding a\u00A0visionary art school\u2019s digital home after three\u00A0years of\u00A0failed attempts",
    impactStatement: "70%\u00A0more website views after\u00A0launch \u00b7 Replaced 4 failed freelancers \u00b7 Immersive 360\u00b0 studio\u00A0tour",
    client: "Dipa\nVisionary Art School, Singapore",
    role: "Creative Director, UX/UI Designer & Copywriter",
    teamSize: "Small team of UX & UI designers",
    scope: "Full website recovery, content rewrite, UX/UI redesign with immersive 360\u00b0 experience, interactive biographical timeline",
    timeline: "Phase 1: 3\u20134 months \u00b7 Phase 2: Ongoing",
    industry: "Art Education\nCreative Workshops",
    markets: "Singapore",
    year: "2022\u20132026",
    businessContext: "Dipa runs a\u00A0visionary art school out of\u00A0a\u00A0converted section of\u00A0her home in\u00A0Singapore, a\u00A0space where students enter through a\u00A0garden and discover different creative disciplines in\u00A0each corner of\u00A0the studio.",
    clientProblem: "Four freelance developers had attempted to\u00A0build or fix Dipa\u2019s website over the course of\u00A0three years. All four failed. The site was completely non-functional. Even when parts of\u00A0it worked, the result was a\u00A0wall of\u00A0text with no visual hierarchy or coherent user\u00A0experience.",
    constraints: "Dipa had been burned four times. Trust was low. I\u00A0needed to\u00A0deliver a\u00A0working website first before discussing a\u00A0redesign. Years of\u00A0accumulated content had no information\u00A0architecture.",
    insight: "After fixing the site and studying Dipa\u2019s physical studio, I\u00A0realised the most powerful design concept was already there. Her studio is a\u00A0journey: you enter through a\u00A0garden, and each corner holds a\u00A0different creative world. The website should mirror that exact\u00A0experience.",
    creativeStrategy: "The redesigned website opens with an immersive 360\u00b0 view of\u00A0the studio. Scroll horizontally to\u00A0move through the space, and each corner reveals a\u00A0different section. Scroll vertically to\u00A0dive deeper into that content. No other art school site we found tours the studio like\u00A0this.",
    keyDecisions: "I\u00A0completely rewrote all website content over the course of\u00A0a\u00A0month. Restructured workshop descriptions to\u00A0be scannable. Designed an interactive biographical timeline that scrolls horizontally through her life, separated by\u00A0time periods and professional\u00A0milestones.",
    leadershipRole: "I\u00A0led a\u00A0small team of\u00A0UX and UI designers. Handled creative concept, full content rewrite, and experience architecture. Managed the client relationship with consistent communication, which was crucial given her history of\u00A0being let down by\u00A0previous developers.",
    processPhases: [
      { title: "Emergency Recovery", description: "Fixed the non-functional website using my programming background. Delivered a\u00A0working site to\u00A0get Dipa\u2019s business back\u00A0online." },
      { title: "Content Rewrite", description: "Rewrote all content. Restructured workshop descriptions. Organised years of\u00A0accumulated text into coherent information\u00A0architecture." },
      { title: "Immersive Redesign", description: "Developed the 360\u00b0 studio-inspired concept. Designed horizontal-to-vertical scroll interaction. Built the interactive biographical\u00A0timeline." },
      { title: "Ongoing Refinement", description: "Continued refining the experience with Dipa as\u00A0her workshops and content\u00A0grow." },
    ],
    results: [
      "70%\u00A0increase in\u00A0website views after launch",
      "First functional website in\u00A03+ years after 4 previous\u00A0failures",
      "An immersive 360\u00b0 studio tour, built around how students actually move through the\u00A0space",
      "Complete content overhaul: walls of\u00A0text transformed into scannable, engaging workshop\u00A0descriptions",
      "Ongoing relationship spanning 4\u00A0years",
    ],
    testimonial: {
      quote: "Is there a\u00A0god or do angels exist? We have been through hell with 4 previous freelancers for 2 years. Enter Amr. He is highly intelligent, genuine and a\u00A0lovely person. He has integrity, is extremely skilled, and has a\u00A0great sense of\u00A0humour!",
      author: "Dipa",
      role: "Founder, Dipa Visionary Art School",
    },
    reflection: "This is the project I\u2019m most proud of. The decision to\u00A0fix first and redesign later rebuilt Dipa\u2019s confidence before asking her to\u00A0dream big again. Sometimes the best creative strategy begins with simply delivering on\u00A0your\u00A0word.",
    credits: "Creative Direction, Content Strategy & UX: Amr Abu-Talleb \u00b7 UI Design: UX/UI Design Team \u00b7 Client: Dipa, Singapore",
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
]

/* ─── Project Highlights ─────────────────────────── */

export const projectHighlights: ProjectHighlight[] = [
  {
    slug: "alfy",
    title: "Alfy",
    subtitle: "Repositioning a\u00A0luxury marble brand for\u00A0the\u00A0architects who buy\u00A0it",
    client: "Alfy\nPremium Marble Manufacturer",
    role: "Creative Director at Overpowered",
    scope: "Campaign strategy, art direction, social media redesign, website redesign",
    industry: "Luxury Marble / Architecture",
    year: "2025",
    featureImage: "/images/alfy-feature.webp",
    featureImageAlt: "El Alfy Saraya website hero section showcasing natural stone, wood working, and metal fabrication with luxury interior photography",
    keyVisuals: [
      { src: "/images/alfy-key-2.webp", alt: "El Alfy Saraya Deep Blue marble campaign design with editorial layout showing stone texture details and product description" },
      { src: "/images/alfy-key-1.webp", alt: "Rocknest by El Alfy luxury furniture campaign with Feel The Luxury headline, featuring chair and lamp product styling" },
    ],
    description: "Alfy is\u00A0a\u00A0major marble manufacturer selling across Egypt, the\u00A0EU and\u00A0Dubai. The agency was producing social posts every week with no\u00A0strategy behind them, and\u00A0all of\u00A0it\u00A0spoke to\u00A0consumers, although the\u00A0brand sells to\u00A0businesses.\n\nI\u00A0changed the\u00A0approach. Alfy\u2019s real buyers are architects who specify materials, so\u00A0the\u00A0campaign was rebuilt for\u00A0them: marble in\u00A0real interiors, showing warmth, luxury and\u00A0range. We dropped the\u00A0AI-generated renders for\u00A0layouts built on\u00A0real product\u00A0photography.",
    keyResult: "70%\u00A0increase in\u00A0social engagement. The agency was still using the\u00A0creative direction months after I\u00A0left.",
  },

  {
    slug: "alienor",
    title: "Alienor",
    subtitle: "Premium skincare brand identity & packaging",
    client: "Dr.\u00a0Noor\nAlienor Skincare",
    role: "Creative Director & Brand Designer",
    scope: "Full brand identity, packaging design, visual direction",
    industry: "Luxury Skincare / Beauty",
    year: "2022",
    featureImage: "/images/alienor-feature.webp",
    featureImageAlt: "Alienor skincare brand identity featuring elegant serif logotype with tagline As Soothing As Moonlight",
    keyVisuals: [
      { src: "/images/alienor-key-1.webp", alt: "Alienor Day Cream packaging design showing minimalist white box and glass jar with purple lid, alongside black zen stones" },
      { src: "/images/alienor-key-2.webp", alt: "Alienor Superfood AHA Glow Cleansing Butter product photography with vibrant orange packaging on a pumpkin" },
    ],
    description: "Dr.\u00a0Noor is a\u00A0physician who developed a\u00A0skincare line combining medical expertise with premium ingredients, including Moroccan-sourced botanicals. She needed a\u00A0brand that communicated science-backed luxury, precise, modern, and high-end.\n\nThe key strategic decision was positioning Alienor alongside premium clinical competitors rather than leaning into the natural ingredient story. After presenting both directions through mood boards, I\u00A0guided the client toward a\u00A0clean, sophisticated identity that signals laboratory precision over heritage craft. The result is a\u00A0brand that competes visually with high-end skincare rather than blending into the organic\u00A0market.",
  },
  {
    slug: "salel",
    title: "Salel",
    subtitle: tp("A hand-drawn Arabic calligraphy wordmark and the system around it"),
    client: tp("Salel\nGhutra brand, Qatar"),
    role: tp("Brand Designer & Calligrapher\nFreelance"),
    scope: tp("Calligraphic logo, colour system, stationery and seal"),
    industry: tp("Menswear\nTraditional Gulf dress"),
    year: "2025",
    description: tp("Salel sells ghutra, the traditional men\u2019s headdress, in Qatar. A brand in that market has to feel rooted in the region\u2019s own visual language, so the identity starts with a wordmark I drew by hand in Arabic calligraphy.\n\nAround it sits a colour system, a seal and a full stationery set, so the mark holds up as well on a letterhead as it does at full size."),
  },
  {
    slug: "nexus",
    title: "Nexus",
    subtitle: tp("Three brand personalities, written before anything was drawn"),
    client: tp("Nexus\nRecruitment company, Middle East and Africa"),
    role: tp("Brand Strategist & Designer\nFreelance"),
    scope: tp("Brand strategy, identity, Webflow website design and build"),
    industry: tp("Recruitment"),
    year: "2024",
    description: tp("Before drawing anything for Nexus I wrote three brand personalities. Each had its own voice, mission, strengths and weaknesses, and its own moodboard, so the choice was about who the company wanted to be before it was about a logo. Three visual routes followed from there.\n\nThe identity then carried into a website I designed and built in Webflow."),
  },
  {
    slug: "hickey",
    title: "Hickey",
    subtitle: tp("An investor deck for a US makeup start-up"),
    client: tp("Hickey\nMakeup start-up, USA"),
    role: tp("Deck Designer\nFreelance"),
    scope: tp("Investor deck design"),
    industry: tp("Beauty and cosmetics"),
    year: "",
    description: tp("Hickey was raising money and needed a deck that investors would read to the end. I designed the investor deck that carried the pitch, from the story order to every slide."),
    keyResult: tp("The deck helped the company secure a $2M investment."),
  },
  {
    slug: "shavery",
    title: "Shavery & Co",
    subtitle: tp("A luxury identity for a barbershop in Saudi Arabia, from the badge to the sign outside"),
    client: tp("Shavery & Co\nLuxury barbershop, Saudi Arabia"),
    role: tp("Brand Designer\nFreelance"),
    scope: tp("Identity, badge, signage"),
    industry: tp("Grooming"),
    year: "2025",
    description: tp("The owner wanted a barbershop that felt like luxury from the street. The identity is built around a badge that works on the sign outside, on a cup and on a business card alike, so every touchpoint carries the same finish."),
  },
]

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
