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
    hidden: true, // Hidden for now (Oct 2026); set to false to bring it back
    title: "Overpowered",
    subtitle: "Rebranding a\u00A0Multi-Market Creative Agency for Three Audiences, One Identity",
    impactStatement: "Unified brand identity across 3 markets \u00b7 Eliminated inconsistent visual elements \u00b7 A/B-tested micro campaigns that informed a\u00A0new market-specific design system",
    client: "Overpowered\nCreative & Digital Agency",
    role: "Creative Director\nLed team of 25",
    teamSize: "Art Director + designers across multiple disciplines",
    scope: "Full rebrand: visual identity, pattern system, logo variations, tone of voice, market-specific design guidelines",
    timeline: "2 months",
    industry: "Creative Agency\nMulti-Market",
    markets: "Egypt, Dubai, UK",
    year: "2025",
    businessContext: "Overpowered was a\u00A0growing creative agency operating simultaneously in\u00A0multiple markets with fundamentally different audiences. In\u00A0Dubai, they pitched to\u00A0established enterprises and blue-chip brands. In\u00A0the UK and EU, they courted smaller businesses and sought agency collaborations to\u00A0break into the European market. In\u00A0Egypt, the client base was built on\u00A0the founder\u2019s personal network and consisted mostly of\u00A0younger entrepreneurs running Gen\u00a0Z-focused businesses.",
    clientProblem: "When I\u00A0joined as Creative Director in\u00A0early 2025, I\u00A0audited the existing brand and found critical issues. The brand was riddled with inconsistency: rounded edges clashed with sharp corners across materials, graphical elements were created from scratch for every single design with no reusable library, there was no pattern system, and logo variations didn\u2019t exist for different applications. Worse, the branding featured gun imagery, a\u00A0natural extension of\u00A0the \u201cOverpowered\u201d gaming-inspired name, that was completely inappropriate for EU advertising regulations and the corporate clients they wanted in\u00A0Dubai.",
    constraints: "We needed to\u00A0rebrand while the agency was actively winning new clients. We couldn\u2019t disappear for six months, so\u00A0the new brand had to\u00A0roll out incrementally and be\u00A0tested at\u00A0every stage.",
    insight: "The core problem wasn\u2019t aesthetic; it\u00A0was strategic. Overpowered was trying to\u00A0be the same thing to\u00A0radically different audiences. A\u00A0Dubai enterprise client doesn\u2019t respond to\u00A0the same visual language as a\u00A0London boutique studio or a\u00A0Cairo Gen\u00a0Z entrepreneur scrolling Instagram. We didn\u2019t need multiple brands. We needed one flexible identity system with market-specific expressions.",
    creativeStrategy: "I\u00A0led the team through a\u00A0complete visual identity overhaul. We developed a\u00A0unified design system with a\u00A0core pattern library, comprehensive logo variations for every application, and a\u00A0modular set of\u00A0graphical elements that could flex across markets while maintaining coherence. I\u00A0pushed to\u00A0eliminate all gun imagery immediately because it\u00A0was a\u00A0liability for paid advertising in\u00A0the EU and projected the wrong image for corporate Dubai.",
    keyDecisions: "Rather than guess what would resonate, I insisted we test everything through micro campaigns. We ran small A/B-tested ads on Instagram across all markets, systematically adding and removing visual elements to measure impact. This data-driven approach meant every design decision was validated by real audience behaviour rather than assumptions.",
    leadershipRole: "I\u00A0managed a\u00A0multidisciplinary team of\u00A025, including the Art Director and designers across branding, VFX, UI/UX, and campaign design. My first task was changing the workflow: instead of\u00A0each designer creating ad-hoc assets, I\u00A0established a\u00A0centralised design system that everyone drew from. I\u00A0conducted regular creative reviews, provided direction on\u00A0market positioning, and served as\u00A0the bridge between the owner\u2019s business goals and the creative team\u2019s output.",
    processPhases: [
      { title: "Audit & Discovery", description: "Reviewed all existing brand materials across markets. Identified inconsistencies, catalogued every visual element in\u00A0use, and mapped where brand presentation broke\u00A0down." },
      { title: "System Design", description: "Developed the core identity system: pattern library, graphical elements, logo variations, colour system, and tone of\u00A0voice guidelines." },
      { title: "Market Testing", description: "Ran micro campaigns across Instagram for UAE, UK, and Egypt markets. A/B tested visual elements systematically. Let data inform which elements worked\u00A0where." },
      { title: "Rollout", description: "Implemented the new brand across all agency touchpoints while maintaining active client work. Trained the team on\u00A0the new design\u00A0system." },
    ],
    results: [
      "Consistent brand system deployed across three markets for the first time in\u00A0the agency\u2019s\u00A0history",
      "Design system and asset library that eliminated ad-hoc asset creation and reduced production time",
      "Paid advertising compliance achieved across EU markets by\u00A0removing problematic\u00A0imagery",
      "Data-validated visual elements with market-specific guidelines based on\u00A0real A/B test\u00A0results",
      "Months after departure, the agency continues to\u00A0use the brand system and creative approach I\u00A0established",
    ],
    reflection: "This project reinforced a\u00A0conviction I\u00A0carry into every engagement: brand consistency isn\u2019t about rigidity; it\u2019s about building a\u00A0system flexible enough to\u00A0speak to\u00A0different audiences without losing its core\u00A0identity.",
    credits: "Creative Direction: Amr Abu-Talleb \u00b7 Art Direction & Design Team: Overpowered Creative Team, 25 members",
    featured: true,
  },
  {
    slug: "split",
    title: "SPLT",
    subtitle: "Turning a\u00A0Marketplace Brief into a\u00A0Four-Sided Fitness Platform",
    impactStatement: "Won the contract by\u00A0rewriting a\u00A0flawed quotation \u00B7 330+\u00A0screens across one app and three dashboards \u00B7 Trainer subscriptions and paid video added as\u00A0new revenue\u00A0lines",
    client: "SPLT\nFitness Social App & Marketplace, Egypt",
    role: "Creative Director & UX Lead\nLed a\u00A0team of\u00A03",
    teamSize: "1 Senior + 1 Junior Designer",
    scope: "Quotation rewrite, competitor research, information architecture, mobile app, admin, vendor and trainer dashboards, design system",
    timeline: "6+\u00A0months",
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
    ],
    reflection: "The brief asked for a\u00A0shop. Reading competitors\u2019 reviews showed the business was really in\u00A0the trainers. The most valuable work I\u00A0did here wasn\u2019t a\u00A0screen: it\u00A0was rewriting the scope so\u00A0the product had a\u00A0reason to\u00A0exist, and then designing the system that let a\u00A0small team deliver\u00A0it.",
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
    slug: "agfin",
    title: "Agfin",
    subtitle: "Turning a\u00A0Brochure Website into a\u00A0Sales Funnel, Words\u00A0First",
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
    slug: "steve-hodel",
    title: "As Within, So\u00A0Without",
    subtitle: "Designing a\u00A0212-Page Illustrated Book for\u00A0a\u00A0Decades-Long\u00A0Investigation",
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
    testimonial: { quote: "Very professional work and his continual ongoing communications and proffered insights were invaluable. I\u00A0highly recommend\u00A0him.", author: "Steven Hodel", role: "NYT Bestselling Author" },
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
    slug: "dipa",
    hidden: true, // Hidden for now (Oct 2026); set to false to bring it back
    title: "Dipa Visionary Art School",
    subtitle: "Rebuilding a\u00A0Visionary Art School\u2019s Digital Home After Three Years of\u00A0Failed Attempts",
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
    subtitle: "Repositioning a\u00A0Luxury Marble Brand for\u00A0the\u00A0Architects Who Buy\u00A0It",
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
    subtitle: "Premium Skincare Brand Identity & Packaging",
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
