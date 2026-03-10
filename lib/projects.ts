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
  featureImage?: string
  featureImageAlt?: string
  galleryImages?: { src: string; alt: string }[]
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
    subtitle: "Rebranding a Multi-Market Creative Agency for Three Audiences, One Identity",
    impactStatement: "Unified brand identity across 3 markets \u00b7 Eliminated inconsistent visual elements \u00b7 A/B-tested micro campaigns that informed a new market-specific design system",
    client: "Overpowered\nCreative & Digital Agency",
    role: "Creative Director\nLed team of 25",
    teamSize: "Art Director + designers across multiple disciplines",
    scope: "Full rebrand: visual identity, pattern system, logo variations, tone of voice, market-specific design guidelines",
    timeline: "2 months\nWithin a 5-month tenure",
    industry: "Creative Agency\nMulti-Market",
    markets: "Egypt, Dubai, UK",
    year: "2025",
    businessContext: "Overpowered was a growing creative agency operating simultaneously in multiple markets with fundamentally different audiences. In Dubai, they pitched to established enterprises and blue-chip brands. In the UK and EU, they courted smaller businesses and sought agency collaborations to break into the European market. In Egypt, the client base was built on the founder\u2019s personal network and consisted mostly of younger entrepreneurs running Gen\u00a0Z-focused businesses.",
    clientProblem: "When I joined as Creative Director in early 2025, I audited the existing brand and found critical issues. The brand was riddled with inconsistency: rounded edges clashed with sharp corners across materials, graphical elements were created from scratch for every single design with no reusable library, there was no pattern system, and logo variations didn\u2019t exist for different applications. Worse, the branding featured gun imagery, a natural extension of the \u201cOverpowered\u201d gaming-inspired name, that was completely inappropriate for EU advertising regulations and the corporate clients they wanted in Dubai.",
    constraints: "We needed to rebrand while the agency was actively winning new clients. We couldn\u2019t disappear for six months, so the new brand had to roll out incrementally and be tested at every stage.",
    insight: "The core problem wasn\u2019t aesthetic; it was strategic. Overpowered was trying to be the same thing to radically different audiences. A Dubai enterprise client doesn\u2019t respond to the same visual language as a London boutique studio or a Cairo Gen\u00a0Z entrepreneur scrolling Instagram. We didn\u2019t need multiple brands. We needed one flexible identity system with market-specific expressions.",
    creativeStrategy: "I led the team through a complete visual identity overhaul. We developed a unified design system with a core pattern library, comprehensive logo variations for every application, and a modular set of graphical elements that could flex across markets while maintaining coherence. I pushed to eliminate all gun imagery immediately because it was a liability for paid advertising in the EU and projected the wrong image for corporate Dubai.",
    keyDecisions: "Rather than guess what would resonate, I insisted we test everything through micro campaigns. We ran small A/B-tested ads on Instagram across all markets, systematically adding and removing visual elements to measure impact. This data-driven approach meant every design decision was validated by real audience behaviour rather than assumptions.",
    leadershipRole: "I managed a multidisciplinary team of 25, including the Art Director and designers across branding, VFX, UI/UX, and campaign design. My first task was changing the workflow: instead of each designer creating ad-hoc assets, I established a centralised design system that everyone drew from. I conducted regular creative reviews, provided direction on market positioning, and served as the bridge between the owner\u2019s business goals and the creative team\u2019s output.",
    processPhases: [
      { title: "Audit & Discovery", description: "Reviewed all existing brand materials across markets. Identified inconsistencies, catalogued every visual element in use, and mapped where brand presentation broke down." },
      { title: "System Design", description: "Developed the core identity system: pattern library, graphical elements, logo variations, colour system, and tone of voice guidelines." },
      { title: "Market Testing", description: "Ran micro campaigns across Instagram for UAE, UK, and Egypt markets. A/B tested visual elements systematically. Let data inform which elements worked where." },
      { title: "Rollout", description: "Implemented the new brand across all agency touchpoints while maintaining active client work. Trained the team on the new design system." },
    ],
    results: [
      "Consistent brand system deployed across three markets for the first time in the agency\u2019s history",
      "Design system and asset library that eliminated ad-hoc asset creation and reduced production time",
      "Paid advertising compliance achieved across EU markets by removing problematic imagery",
      "Data-validated visual elements with market-specific guidelines based on real A/B test results",
      "Months after departure, the agency continues to use the brand system and creative approach I\u00a0established",
    ],
    reflection: "This project reinforced a conviction I carry into every engagement: brand consistency isn\u2019t about rigidity; it\u2019s about building a system flexible enough to speak to different audiences without losing its core identity.",
    credits: "Creative Direction: Amr Abu-Talleb \u00b7 Art Direction & Design Team: Overpowered Creative Team, 25 members",
    featured: true,
  },
  {
    slug: "split",
    title: "Split",
    subtitle: "Redesigning a Fitness Platform from Competitive Research to Revenue-Driving Features",
    impactStatement: "Landed the client by rewriting a flawed quotation \u00b7 Redesigned the full app \u00b7 Introduced revenue-generating features informed by competitor analysis",
    client: "Split\nFitness & Wellness Platform",
    role: "Creative Director & UX Lead\nLed team of 6",
    teamSize: "2 Seniors + 4 Junior Designers",
    scope: "Full product redesign: UX research, competitor audit, information architecture, UI design, feature strategy",
    timeline: "3 months",
    industry: "Health & Fitness\nMobile App",
    markets: "Multi-market",
    year: "2025",
    businessContext: "The fitness app market is saturated with established players. Split needed to relaunch quickly with a differentiated product that could compete for both users and trainer talent, while generating sustainable revenue through subscriptions.",
    clientProblem: "Split needed a complete app redesign and rebuild, but the existing development quotation they\u2019d received was ludicrous. The costs were inflated, the line items didn\u2019t make technical sense, and the scope was poorly defined. The app itself lacked differentiation: trainer profiles looked identical to user profiles, there was no clear monetisation path, and the UX didn\u2019t solve real problems.",
    constraints: "Speed was critical because the client needed to relaunch fast. I was working with a team of six designers, two seniors and four juniors, several of whom had limited experience with complex admin systems or user authority hierarchies.",
    insight: "Before touching a single wireframe, I dove into the competitive landscape. We subscribed to every major competitor and their beta versions. We collected screens, mapped features, and read user reviews systematically. The gap was clear: users were frustrated by the lack of differentiation between trainer and regular user experiences.",
    creativeStrategy: "I restructured the entire trainer experience. When you land on a trainer\u2019s profile, you see the About section first, showcasing certifications, specialisations, and introductory videos. A subscription button sits prominently for conversion. Only then does the social feed appear in a separate tab, treating trainers as professionals first and content creators second.",
    keyDecisions: "I added a dedicated video content feature for trainers, something no direct competitor offered well. This created a new monetisation path: free content to evaluate trainers, then paid subscriptions for premium content. The decision was directly informed by competitor review analysis.",
    leadershipRole: "With my engineering background, I reviewed and rewrote the development quotation, cutting inflated costs and clarifying scope. This landed the client. On the design side, I mentored my team through unfamiliar territory using my own previous designs as teaching material for admin system hierarchies and multi-role user journeys.",
    processPhases: [
      { title: "Business & Quotation Rewrite", description: "Reviewed the original quotation line by line. Identified inflated items, rewrote the scope, and presented a credible proposal that won the contract." },
      { title: "Competitive Deep Dive", description: "Subscribed to all major competitors and their betas. Mapped feature sets and systematically reviewed user feedback to identify unmet needs." },
      { title: "IA & UX Design", description: "Redesigned the full user journey for both trainers and regular users. Introduced the dual-experience profile system and video content feature." },
      { title: "Team Mentorship & UI", description: "Walked the design team through admin system design using real examples. The team executed the full UI while I directed visual language and interaction patterns." },
    ],
    results: [
      "Won the contract by rewriting a flawed quotation and demonstrating both business acumen and technical credibility",
      "Trainer-first profile design created clear competitive separation",
      "Subscription model opened monetisation paths that didn\u2019t exist in the original app",
      "Every major feature decision backed by competitor analysis and real user data",
      "Upskilled the team in complex multi-role product design",
    ],
    reflection: "This project proved that winning a client and designing their product are two sides of the same coin. When you invest time in competitor research before designing, every decision becomes defensible. You\u2019re not guessing; you\u2019re building on evidence.",
    credits: "Creative Direction & UX Strategy: Amr Abu-Talleb \u00b7 UI Design: Overpowered Design Team \u00b7 Agency: Overpowered",
    featured: true,
  },
  {
    slug: "agfin",
    title: "Agfin",
    subtitle: "Turning a Static Website into a 12% Revenue Engine Through Strategic Copywriting",
    impactStatement: "12% sales increase in month one \u00b7 Zero ad spend \u00b7 Complete transformation from static brochure to conversion-optimised sales funnel",
    client: "Agfin\nRobert, Financial Consultant, Australia",
    role: "Creative Director, UX Designer & Copywriter\nLed team of 3",
    scope: "Full website redesign, sales funnel architecture, VSL script writing, copywriting, interaction design",
    timeline: "Approximately 3 weeks",
    industry: "Agricultural Finance\nConsulting",
    markets: "Regional Australia",
    year: "2024\u20132025",
    businessContext: "Robert runs Agfin, a financial consulting practice serving Australian farmers. His expertise is deeply specialised and genuinely life-changing for farming families. But his digital presence told none of that story.",
    clientProblem: "Robert hired me for minor website fixes. What I found was a fundamentally broken digital presence, essentially a basic brochure from the early web era. No narrative, no proof, no pathway to conversion. For a consultant whose entire business depends on trust, the website was actively working against him.",
    constraints: "Robert is semi-retired with limited budget and a ceiling on how many new clients he could actually handle. There was no budget for professional photography. And midway through the project, my initial copywriting approach proved too emotionally aggressive for his audience and required a complete pivot.",
    insight: "The website didn\u2019t need a redesign; it needed a complete strategic rethink. Robert had incredible stories of farming families he\u2019d helped with real outcomes, but none of that appeared on the website. The most impactful thing I could do wasn\u2019t to make it prettier; it was to rewrite the entire site as a sales funnel anchored in storytelling.",
    creativeStrategy: "I interviewed Robert extensively, then wrote a complete VSL script and restructured the entire website as a conversion-focused funnel. The VSL led with a relatable farming family\u2019s struggle, introduced Robert as the guide, and showed the transformation. The rest of the site reinforced that narrative with proof points and clear calls to action.",
    keyDecisions: "Midway through, Robert pushed back on my initial script because it was too emotionally intense. He was right. I rebalanced the tone to be warm and trustworthy rather than high-pressure. I also replaced all stock photography with real images from his local area, and the authenticity difference was immediate.",
    leadershipRole: "I led a small team of 3 designers. I handled strategy, copywriting, VSL scripting, UX architecture, visual design, interaction design including micro-animations, and project management.",
    processPhases: [
      { title: "Discovery & Upsell", description: "Initially hired for minor fixes, I conducted a full audit and presented Robert with a proposal for what his website could become." },
      { title: "Copy-First Approach", description: "Wrote the full VSL script and website copy before touching any design. Narrative structured as a sales funnel: problem, guide, transformation, call to action." },
      { title: "The Pivot", description: "Robert flagged the initial copy was too intense. Rewrote key sections. Replaced stock imagery with authentic local photographs." },
      { title: "Design & Build", description: "Built the full site with micro-animations. Every design decision supported the sales funnel structure." },
    ],
    results: [
      "12% increase in sales within month one, entirely organic with zero paid advertising",
      "Could not scale further because Robert was approaching retirement, which was a good problem to have",
      "Complete transformation from static brochure to interactive, story-driven sales funnel",
      "Copy-first strategy validated: the rewrite drove results more than any design element",
    ],
    testimonial: {
      quote: "Amr provided lots of new UX ideas and put them to me in a detailed explanation. He went above and beyond the project scope to deliver a renewed website and sales funnel.",
      author: "Robert",
      role: "Founder of Agfin, Australia",
    },
    reflection: "The most powerful design tool is often a well-written sentence. The 12% lift came from rewriting the story, not from animations. Robert\u2019s pushback on my initial copy made the final product stronger. Sometimes the best design decision is to dial it back.",
    credits: "Strategy, Copywriting, UX/UI Design & Build: Amr Abu-Talleb \u00b7 Client: Agfin, Australia",
    featured: true,
  },
  {
    slug: "dipa",
    title: "Dipa Visionary Art School",
    subtitle: "Rebuilding a Visionary Art School\u2019s Digital Home After Three Years of Failed Attempts",
    impactStatement: "70% increase in website views \u00b7 Replaced 4 failed freelancers \u00b7 Immersive 360\u00b0 experience \u00b7 Being submitted for Awwwards",
    client: "Dipa\nVisionary Art School, Singapore",
    role: "Creative Director, UX/UI Designer & Copywriter",
    teamSize: "Small team of UX & UI designers",
    scope: "Full website recovery, content rewrite, UX/UI redesign with immersive 360\u00b0 experience, interactive biographical timeline",
    timeline: "Phase 1: 3\u20134 months \u00b7 Phase 2: Ongoing",
    industry: "Art Education\nCreative Workshops",
    markets: "Singapore",
    year: "2022\u20132026",
    businessContext: "Dipa runs a visionary art school out of a converted section of her home in Singapore, a space where students enter through a garden and discover different creative disciplines in each corner of the studio.",
    clientProblem: "Four freelance developers had attempted to build or fix Dipa\u2019s website over the course of three years. All four failed. The site was completely non-functional. Even when parts of it worked, the result was a wall of text with no visual hierarchy or coherent user experience.",
    constraints: "Dipa had been burned four times. Trust was low. I needed to deliver a working website first before discussing a redesign. Years of accumulated content had no information architecture.",
    insight: "After fixing the site and studying Dipa\u2019s physical studio, I realised the most powerful design concept was already there. Her studio is a journey: you enter through a garden, and each corner holds a different creative world. The website should mirror that exact experience.",
    creativeStrategy: "The redesigned website opens with an immersive 360\u00b0 view of the studio. Scroll horizontally to move through the space, and each corner reveals a different section. Scroll vertically to dive deeper into that content. Utterly unique in the art education space.",
    keyDecisions: "I completely rewrote all website content over the course of a month. Restructured workshop descriptions to be scannable. Designed an interactive biographical timeline that scrolls horizontally through her life, separated by time periods and professional milestones.",
    leadershipRole: "I led a small team of UX and UI designers. Handled creative concept, full content rewrite, and experience architecture. Managed the client relationship with consistent communication, which was crucial given her history of being let down by previous developers.",
    processPhases: [
      { title: "Emergency Recovery", description: "Fixed the non-functional website using my programming background. Delivered a working site to get Dipa\u2019s business back online." },
      { title: "Content Rewrite", description: "Rewrote all content. Restructured workshop descriptions. Organised years of accumulated text into coherent information architecture." },
      { title: "Immersive Redesign", description: "Developed the 360\u00b0 studio-inspired concept. Designed horizontal-to-vertical scroll interaction. Built the interactive biographical timeline." },
      { title: "Ongoing Refinement", description: "Continued refining the experience. Currently preparing for Awwwards submission." },
    ],
    results: [
      "70% increase in website views after launch",
      "First functional website in 3+ years after 4 previous failures",
      "Immersive 360\u00b0 experience unlike any competitor in the space",
      "Complete content overhaul: walls of text transformed into scannable, engaging workshop descriptions",
      "Currently being submitted to Awwwards",
      "Ongoing relationship spanning 4 years",
    ],
    testimonial: {
      quote: "Is there a god or do angels exist? We have been through hell with 4 previous freelancers for 2 years. Enter Amr. He is highly intelligent, genuine and a lovely person. He has integrity, is extremely skilled, and has a great sense of humour!",
      author: "Dipa",
      role: "Founder, Dipa Visionary Art School",
    },
    reflection: "This is the project I\u2019m most proud of. The decision to fix first and redesign later rebuilt Dipa\u2019s confidence before asking her to dream big again. Sometimes the best creative strategy begins with simply delivering on your word.",
    credits: "Creative Direction, Content Strategy & UX: Amr Abu-Talleb \u00b7 UI Design: UX/UI Design Team \u00b7 Client: Dipa, Singapore",
    featured: true,
    featureImage: "/images/dipa-showcase.png",
    featureImageAlt: "Dipa Visionary Art School website homepage showing immersive studio experience with story section",
    galleryImages: [
      { src: "/images/dipa-feature.png", alt: "Dipa Visionary Art School brand identity and logo design" },
      { src: "/images/dipa-process-1.png", alt: "Site architecture diagram showing the complete information hierarchy and page structure for Dipa's website" },
      { src: "/images/dipa-process-2.png", alt: "Revised site architecture with dark theme showing streamlined navigation and content organisation" },
      { src: "/images/dipa-detail-1.png", alt: "About Dipa page design featuring hand-drawn illustrations, biography section, and whimsical art-school aesthetic" },
      { src: "/images/dipa-detail-2.png", alt: "Mission and Vision page with illustrated elements, wolf imagery, and fantasy-inspired visual storytelling" },
      { src: "/images/dipa-detail-3.png", alt: "How It Works section showing workshop environment with students creating art, and enrollment process" },
    ],
  },
]

/* ─── Project Highlights ─────────────────────────── */

export const projectHighlights: ProjectHighlight[] = [
  {
    slug: "alfy",
    title: "Alfy",
    subtitle: "Repositioning a Luxury Marble Brand for B2B Impact",
    client: "Alfy\nPremium Marble Manufacturer",
    role: "Creative Director at Overpowered",
    scope: "Campaign strategy, art direction, social media redesign, website redesign",
    industry: "Luxury Marble / Architecture",
    year: "2025",
    featureImage: "/images/alfy-feature.png",
    featureImageAlt: "El Alfy Saraya website hero section showcasing natural stone, wood working, and metal fabrication with luxury interior photography",
    keyVisuals: [
      { src: "/images/alfy-key-2.jpg", alt: "El Alfy Saraya Deep Blue marble campaign design with editorial layout showing stone texture details and product description" },
      { src: "/images/alfy-key-1.jpg", alt: "Rocknest by El Alfy luxury furniture campaign with Feel The Luxury headline, featuring chair and lamp product styling" },
    ],
    description: "Alfy is a major marble manufacturer with presence across Egypt, the EU, and Dubai. The agency was producing weekly social media assets with no strategic direction. For a B2B brand, all the content was styled as B2C.\n\nI shifted the approach entirely. Alfy\u2019s real buyers are architects who specify materials for projects. I reframed the campaign to appeal to these decision-makers: marble in aspirational contexts showing warmth, luxury, and versatility. Stopped AI-generated renders in favour of graphic design-led compositions with real product photography.",
    keyResult: "70% increase in social engagement. The creative direction continues to be used months after my departure.",
  },
  {
    slug: "steve-hodel",
    title: "As Within, So Without, Steven Hodel",
    subtitle: "Designing and typesetting a 212-page illustrated volume for a NYT bestselling author",
    client: "Steven Hodel\nNYT Bestselling Author",
    role: "Book Designer\nSole designer: typography, layout, production",
    scope: "Full interior design and typesetting for 212-page illustrated investigative nonfiction with ~130 images",
    industry: "Publishing / Investigative Nonfiction",
    year: "2025\u20132026",
    featureImage: "/images/steve-hodel-feature.png",
    featureImageAlt: "As Within, So Without by Steve Hodel, hardcover book on a wooden desk with warm lighting",
    keyVisuals: [
      { src: "/images/steve-hodel-key-1.png", alt: "Interior spread from As Within, So Without showing exhibit pages with evidentiary photographs and structured grid layout in Adobe InDesign" },
      { src: "/images/steve-hodel-key-2.png", alt: "Open spread of As Within, So Without showing chapter opener with Caslon Pro typography and full-bleed archival photograph" },
    ],
    description: "When New York Times bestselling author Steve Hodel began preparing As Within, So Without, he needed a designer who could handle not only complex typography and image-heavy layouts, but also the responsibility of presenting decades of research with clarity and respect. I was commissioned to design and typeset the full publication, which ultimately grew into a 212-page illustrated volume.\n\nThe book sits at the intersection of forensic investigation, art history, and archival research, so the design needed to balance clarity, restraint, and visual pacing.\n\nBefore designing, I spent time studying both the manuscript and Hodel\u2019s earlier work to understand the tone and narrative structure. Typography and layout decisions were guided by historical context and readability, with Adobe Caslon selected for its authority and period character. The interior was built in Adobe InDesign using structured grids, master pages, anchored figures, and print-ready production workflows, and prepared for Amazon KDP publication.\n\nBeyond the technical work, this project was personally meaningful to me. Hodel\u2019s decades-long investigation is not just a book; it is an effort to document truth, preserve evidence, and give historical context to events that shaped lives and families. Contributing to a work of that nature, where design helps communicate research of such depth and human weight, made the project especially important to me.\n\nThe final result was a fully typeset, print-ready, full-color publication prepared for paperback and hardcover production, delivered after several rounds of structural refinement and image restoration coordination.",
    buyLink: "https://www.amazon.com/AS-WITHIN-SO-WITHOUT-Surrealism/dp/B0GMQSVHQP",
    testimonial: {
      quote: "Very professional work and his continual ongoing communications and proffered insights were invaluable. I highly recommend him.",
      author: "Steven Hodel",
      role: "NYT Bestselling Author",
    },
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
    featureImage: "/images/alienor-feature.png",
    featureImageAlt: "Alienor skincare brand identity featuring elegant serif logotype with tagline As Soothing As Moonlight",
    keyVisuals: [
      { src: "/images/alienor-key-1.png", alt: "Alienor Day Cream packaging design showing minimalist white box and glass jar with purple lid, alongside black zen stones" },
      { src: "/images/alienor-key-2.png", alt: "Alienor Superfood AHA Glow Cleansing Butter product photography with vibrant orange packaging on a pumpkin" },
    ],
    description: "Dr.\u00a0Noor is a physician who developed a skincare line combining medical expertise with premium ingredients, including Moroccan-sourced botanicals. She needed a brand that communicated science-backed luxury, precise, modern, and high-end.\n\nThe key strategic decision was positioning Alienor alongside premium clinical competitors rather than leaning into the natural ingredient story. After presenting both directions through mood boards, I guided the client toward a clean, sophisticated identity that signals laboratory precision over heritage craft. The result is a brand that competes visually with high-end skincare rather than blending into the organic market.",
  },
]

/* ─── Helpers ────────────────────────────────────── */

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug)
}
export function getHighlightBySlug(slug: string): ProjectHighlight | undefined {
  return projectHighlights.find((p) => p.slug === slug)
}
export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? caseStudies[index - 1] : null
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null
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
export const projects = caseStudies
export function getProjectBySlug(slug: string) { return getCaseStudyBySlug(slug) }
export function getAdjacentProjects(slug: string) { return getAdjacentCaseStudies(slug) }
