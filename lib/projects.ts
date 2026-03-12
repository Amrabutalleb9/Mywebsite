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
    subtitle: "Rebranding a\u00A0Multi-Market Creative Agency for Three Audiences, One Identity",
    impactStatement: "Unified brand identity across 3 markets \u00b7 Eliminated inconsistent visual elements \u00b7 A/B-tested micro campaigns that informed a\u00A0new market-specific design system",
    client: "Overpowered\nCreative & Digital Agency",
    role: "Creative Director\nLed team of 25",
    teamSize: "Art Director + designers across multiple disciplines",
    scope: "Full rebrand: visual identity, pattern system, logo variations, tone of voice, market-specific design guidelines",
    timeline: "2 months\nWithin a 5-month tenure",
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
    title: "Split",
    subtitle: "Redesigning a\u00A0Fitness Platform from Competitive Research to\u00A0Revenue-Driving Features",
    impactStatement: "Landed the client by\u00A0rewriting a\u00A0flawed quotation \u00b7 Redesigned the full app \u00b7 Introduced revenue-generating features informed by\u00A0competitor analysis",
    client: "Split\nFitness & Wellness Platform",
    role: "Creative Director & UX Lead\nLed team of 6",
    teamSize: "2 Seniors + 4 Junior Designers",
    scope: "Full product redesign: UX research, competitor audit, information architecture, UI design, feature strategy",
    timeline: "3 months",
    industry: "Health & Fitness\nMobile App",
    markets: "Multi-market",
    year: "2025",
    businessContext: "The fitness app market is saturated with established players. Split needed to relaunch quickly with a differentiated product that could compete for both users and trainer talent, while generating sustainable revenue through subscriptions.",
    clientProblem: "Split needed a\u00A0complete app redesign and rebuild, but the existing development quotation they\u2019d received was ludicrous. The costs were inflated, the line items didn\u2019t make technical sense, and the scope was poorly defined. The app itself lacked differentiation: trainer profiles looked identical to\u00A0user profiles, there was no clear monetisation path, and the UX didn\u2019t solve real\u00A0problems.",
    constraints: "Speed was critical because the client needed to\u00A0relaunch fast. I\u00A0was working with a\u00A0team of\u00A0six designers, two seniors and four juniors, several of\u00A0whom had limited experience with complex admin systems or user authority hierarchies.",
    insight: "Before touching a\u00A0single wireframe, I\u00A0dove into the competitive landscape. We subscribed to\u00A0every major competitor and their beta versions. We collected screens, mapped features, and read user reviews systematically. The gap was clear: users were frustrated by\u00A0the lack of\u00A0differentiation between trainer and regular user\u00A0experiences.",
    creativeStrategy: "I\u00A0restructured the entire trainer experience. When you land on\u00A0a\u00A0trainer\u2019s profile, you see the About section first, showcasing certifications, specialisations, and introductory videos. A\u00A0subscription button sits prominently for conversion. Only then does the social feed appear in\u00A0a\u00A0separate tab, treating trainers as\u00A0professionals first and content creators\u00A0second.",
    keyDecisions: "I\u00A0added a\u00A0dedicated video content feature for trainers, something no direct competitor offered well. This created a\u00A0new monetisation path: free content to\u00A0evaluate trainers, then paid subscriptions for premium content. The decision was directly informed by\u00A0competitor review\u00A0analysis.",
    leadershipRole: "With my engineering background, I reviewed and rewrote the development quotation, cutting inflated costs and clarifying scope. This landed the client. On the design side, I mentored my team through unfamiliar territory using my own previous designs as teaching material for admin system hierarchies and multi-role user journeys.",
    processPhases: [
      { title: "Business & Quotation Rewrite", description: "Reviewed the original quotation line by\u00A0line. Identified inflated items, rewrote the scope, and presented a\u00A0credible proposal that won the\u00A0contract." },
      { title: "Competitive Deep Dive", description: "Subscribed to\u00A0all major competitors and their betas. Mapped feature sets and systematically reviewed user feedback to\u00A0identify unmet\u00A0needs." },
      { title: "IA & UX Design", description: "Redesigned the full user journey for both trainers and regular users. Introduced the dual-experience profile system and video content\u00A0feature." },
      { title: "Team Mentorship & UI", description: "Walked the design team through admin system design using real examples. The team executed the full UI while I directed visual language and interaction patterns." },
    ],
    results: [
      "Won the contract by\u00A0rewriting a\u00A0flawed quotation and demonstrating both business acumen and technical\u00A0credibility",
      "Trainer-first profile design created clear competitive separation",
      "Subscription model opened monetisation paths that didn\u2019t exist in\u00A0the original\u00A0app",
      "Every major feature decision backed by\u00A0competitor analysis and real user\u00A0data",
      "Upskilled the team in\u00A0complex multi-role product\u00A0design",
    ],
    reflection: "This project proved that winning a\u00A0client and designing their product are two sides of\u00A0the same coin. When you invest time in\u00A0competitor research before designing, every decision becomes defensible. You\u2019re not guessing; you\u2019re building on\u00A0evidence.",
    credits: "Creative Direction & UX Strategy: Amr Abu-Talleb \u00b7 UI Design: Overpowered Design Team \u00b7 Agency: Overpowered",
    featured: true,
  },
  {
    slug: "agfin",
    title: "Agfin",
    subtitle: "Turning a\u00A0Static Website into a\u00A012%\u00A0Revenue Engine Through Strategic Copywriting",
    impactStatement: "12%\u00A0sales increase in\u00A0month one \u00b7 Zero ad spend \u00b7 Complete transformation from static brochure to\u00A0conversion-optimised sales funnel",
    client: "Agfin\nRobert, Financial Consultant, Australia",
    role: "Creative Director, UX Designer & Copywriter\nLed team of 3",
    scope: "Full website redesign, sales funnel architecture, VSL script writing, copywriting, interaction design",
    timeline: "Approximately 3 weeks",
    industry: "Agricultural Finance\nConsulting",
    markets: "Regional Australia",
    year: "2024\u20132025",
    businessContext: "Robert runs Agfin, a\u00A0financial consulting practice serving Australian farmers. His expertise is deeply specialised and genuinely life-changing for farming families. But his digital presence told none of\u00A0that story.",
    clientProblem: "Robert hired me for minor website fixes. What I\u00A0found was a\u00A0fundamentally broken digital presence, essentially a\u00A0basic brochure from the early web era. No narrative, no proof, no pathway to\u00A0conversion. For a\u00A0consultant whose entire business depends on\u00A0trust, the website was actively working against\u00A0him.",
    constraints: "Robert is semi-retired with limited budget and a\u00A0ceiling on\u00A0how many new clients he could actually handle. There was no budget for professional photography. And midway through the project, my initial copywriting approach proved too emotionally aggressive for his audience and required a\u00A0complete\u00A0pivot.",
    insight: "The website didn\u2019t need a\u00A0redesign; it\u00A0needed a\u00A0complete strategic rethink. Robert had incredible stories of\u00A0farming families he\u2019d helped with real outcomes, but none of\u00A0that appeared on\u00A0the website. The most impactful thing I\u00A0could do wasn\u2019t to\u00A0make it prettier; it\u00A0was to\u00A0rewrite the entire site as a\u00A0sales funnel anchored in\u00A0storytelling.",
    creativeStrategy: "I\u00A0interviewed Robert extensively, then wrote a\u00A0complete VSL script and restructured the entire website as a\u00A0conversion-focused funnel. The VSL led with a\u00A0relatable farming family\u2019s struggle, introduced Robert as\u00A0the guide, and showed the transformation. The rest of\u00A0the site reinforced that narrative with proof points and clear calls to\u00A0action.",
    keyDecisions: "Midway through, Robert pushed back on\u00A0my initial script because it\u00A0was too emotionally intense. He was right. I\u00A0rebalanced the tone to\u00A0be warm and trustworthy rather than high-pressure. I\u00A0also replaced all stock photography with real images from his local area, and the authenticity difference was\u00A0immediate.",
    leadershipRole: "I\u00A0led a\u00A0small team of\u00A03 designers. I\u00A0handled strategy, copywriting, VSL scripting, UX architecture, visual design, interaction design including micro-animations, and project\u00A0management.",
    processPhases: [
      { title: "Discovery & Upsell", description: "Initially hired for minor fixes, I\u00A0conducted a\u00A0full audit and presented Robert with a\u00A0proposal for what his website could\u00A0become." },
      { title: "Copy-First Approach", description: "Wrote the full VSL script and website copy before touching any design. Narrative structured as a\u00A0sales funnel: problem, guide, transformation, call to\u00A0action." },
      { title: "The Pivot", description: "Robert flagged the initial copy was too intense. Rewrote key sections. Replaced stock imagery with authentic local\u00A0photographs." },
      { title: "Design & Build", description: "Built the full site with micro-animations. Every design decision supported the sales funnel\u00A0structure." },
    ],
    results: [
      "12%\u00A0increase in\u00A0sales within month one, entirely organic with zero paid advertising",
      "Could not scale further because Robert was approaching retirement, which was a\u00A0good problem to\u00A0have",
      "Complete transformation from static brochure to\u00A0interactive, story-driven sales\u00A0funnel",
      "Copy-first strategy validated: the rewrite drove results more than any design\u00A0element",
    ],
    testimonial: {
      quote: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in\u00A0a\u00A0detailed explanation. He went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales\u00A0funnel.",
      author: "Robert",
      role: "Founder of Agfin, Australia",
    },
    reflection: "The most powerful design tool is often a\u00A0well-written sentence. The 12%\u00A0lift came from rewriting the story, not from animations. Robert\u2019s pushback on\u00A0my initial copy made the final product stronger. Sometimes the best design decision is to\u00A0dial it\u00A0back.",
    credits: "Strategy, Copywriting, UX/UI Design & Build: Amr Abu-Talleb \u00b7 Client: Agfin, Australia",
    featured: true,
  },
  {
    slug: "dipa",
    title: "Dipa Visionary Art School",
    subtitle: "Rebuilding a\u00A0Visionary Art School\u2019s Digital Home After Three Years of\u00A0Failed Attempts",
    impactStatement: "70%\u00A0increase in\u00A0website views \u00b7 Replaced 4 failed freelancers \u00b7 Immersive 360\u00b0 experience \u00b7 Being submitted for\u00A0Awwwards",
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
    creativeStrategy: "The redesigned website opens with an immersive 360\u00b0 view of\u00A0the studio. Scroll horizontally to\u00A0move through the space, and each corner reveals a\u00A0different section. Scroll vertically to\u00A0dive deeper into that content. Utterly unique in\u00A0the art education\u00A0space.",
    keyDecisions: "I\u00A0completely rewrote all website content over the course of\u00A0a\u00A0month. Restructured workshop descriptions to\u00A0be scannable. Designed an interactive biographical timeline that scrolls horizontally through her life, separated by\u00A0time periods and professional\u00A0milestones.",
    leadershipRole: "I\u00A0led a\u00A0small team of\u00A0UX and UI designers. Handled creative concept, full content rewrite, and experience architecture. Managed the client relationship with consistent communication, which was crucial given her history of\u00A0being let down by\u00A0previous developers.",
    processPhases: [
      { title: "Emergency Recovery", description: "Fixed the non-functional website using my programming background. Delivered a\u00A0working site to\u00A0get Dipa\u2019s business back\u00A0online." },
      { title: "Content Rewrite", description: "Rewrote all content. Restructured workshop descriptions. Organised years of\u00A0accumulated text into coherent information\u00A0architecture." },
      { title: "Immersive Redesign", description: "Developed the 360\u00b0 studio-inspired concept. Designed horizontal-to-vertical scroll interaction. Built the interactive biographical\u00A0timeline." },
      { title: "Ongoing Refinement", description: "Continued refining the experience. Currently preparing for\u00A0Awwwards\u00A0submission." },
    ],
    results: [
      "70%\u00A0increase in\u00A0website views after launch",
      "First functional website in\u00A03+ years after 4 previous\u00A0failures",
      "Immersive 360\u00b0 experience unlike any competitor in\u00A0the\u00A0space",
      "Complete content overhaul: walls of\u00A0text transformed into scannable, engaging workshop\u00A0descriptions",
      "Currently being submitted to\u00A0Awwwards",
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
    subtitle: "Repositioning a\u00A0Luxury Marble Brand for B2B Impact",
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
    description: "Alfy is a\u00A0major marble manufacturer with presence across Egypt, the EU, and Dubai. The agency was producing weekly social media assets with no strategic direction. For a\u00A0B2B brand, all the content was styled as\u00A0B2C.\n\nI\u00A0shifted the approach entirely. Alfy\u2019s real buyers are architects who specify materials for projects. I\u00A0reframed the campaign to\u00A0appeal to\u00A0these decision-makers: marble in\u00A0aspirational contexts showing warmth, luxury, and versatility. Stopped AI-generated renders in\u00A0favour of\u00A0graphic design-led compositions with real product\u00A0photography.",
    keyResult: "70%\u00A0increase in\u00A0social engagement. The creative direction continues to\u00A0be used months after my\u00A0departure.",
  },
  {
    slug: "steve-hodel",
    title: "As Within, So Without, Steven Hodel",
    subtitle: "Designing and typesetting a\u00A0212-page illustrated volume for a\u00A0NYT bestselling author",
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
    description: "When New York Times bestselling author Steve Hodel began preparing As Within, So Without, he needed a\u00A0designer who could handle not only complex typography and image-heavy layouts, but also the responsibility of\u00A0presenting decades of\u00A0research with clarity and respect. I\u00A0was commissioned to\u00A0design and typeset the full publication, which ultimately grew into a\u00A0212-page illustrated volume.\n\nThe book sits at\u00A0the intersection of\u00A0forensic investigation, art history, and archival research, so\u00A0the design needed to\u00A0balance clarity, restraint, and visual pacing.\n\nBefore designing, I\u00A0spent time studying both the manuscript and Hodel\u2019s earlier work to\u00A0understand the tone and narrative structure. Typography and layout decisions were guided by\u00A0historical context and readability, with Adobe Caslon selected for its authority and period character. The interior was built in\u00A0Adobe InDesign using structured grids, master pages, anchored figures, and print-ready production workflows, and prepared for\u00A0Amazon KDP publication.\n\nBeyond the technical work, this project was personally meaningful to\u00A0me. Hodel\u2019s decades-long investigation is not just a\u00A0book; it\u00A0is an effort to\u00A0document truth, preserve evidence, and give historical context to\u00A0events that shaped lives and families. Contributing to\u00A0a\u00A0work of\u00A0that nature, where design helps communicate research of\u00A0such depth and human weight, made the project especially important to\u00A0me.\n\nThe final result was a\u00A0fully typeset, print-ready, full-color publication prepared for paperback and hardcover production, delivered after several rounds of\u00A0structural refinement and image restoration\u00A0coordination.",
    buyLink: "https://www.amazon.com/AS-WITHIN-SO-WITHOUT-Surrealism/dp/B0GMQSVHQP",
    testimonial: {
      quote: "Very professional work and his continual ongoing communications and proffered insights were invaluable. I\u00A0highly recommend\u00A0him.",
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
    description: "Dr.\u00a0Noor is a\u00A0physician who developed a\u00A0skincare line combining medical expertise with premium ingredients, including Moroccan-sourced botanicals. She needed a\u00A0brand that communicated science-backed luxury, precise, modern, and high-end.\n\nThe key strategic decision was positioning Alienor alongside premium clinical competitors rather than leaning into the natural ingredient story. After presenting both directions through mood boards, I\u00A0guided the client toward a\u00A0clean, sophisticated identity that signals laboratory precision over heritage craft. The result is a\u00A0brand that competes visually with high-end skincare rather than blending into the organic\u00A0market.",
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
