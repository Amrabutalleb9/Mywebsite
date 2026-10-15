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
  /** Short opening paragraphs shown under the subtitle. */
  intro?: string[]
  /** Scannable list of what the author personally led, shown in place of the impact line. */
  contributions?: { label: string; text: string }[]
  /** Heading for the results list (defaults to "What Changed"). */
  resultsTitle?: string
  /** Optional story told in chapters; each chapter is followed by its own figures. Replaces the brief/turn/work blocks when present. */
  chapters?: { label: string; summary?: string; lead?: string; paragraphs: string[]; figures?: { images: { src: string; alt: string; ratio?: string }[]; caption?: string }[] }[]
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
  /** Extra rows of figures shown after the key visuals; each row 1–3 images with an optional caption. */
  figures?: { images: { src: string; alt: string; ratio?: string }[]; caption?: string }[]
}

/* ─── Full Case Studies ──────────────────────────── */

export const caseStudies: CaseStudy[] = [
  {
    slug: "overpowered",
    title: "Overpowered",
    subtitle: tp("From a studio that served everyone to an agency that knew exactly who it was for"),
    impactStatement: tp("Positioning and growth plan developed with the CEO · Team grown from six to twenty-five · SPLT secured at $8,000 for its first two stages"),
    role: tp("Creative Director\nWorked directly with the CEO"),
    teamSize: tp("About 25 across branding, 2D, 3D, video, copy and UX/UI"),
    scope: tp("Agency strategy, positioning, outreach planning, team structure, creative direction, identity and website direction"),
    intro: [
      tp("Overpowered wanted to become a global creative agency. The challenge was to bring its positioning, services, team and creative direction into line with that ambition."),
      tp("I joined as Creative Director, working directly with the CEO on agency strategy, how the team operated, and how we presented the business to prospective clients."),
    ],
    contributions: [
      { label: "Agency strategy", text: tp("Developed the positioning, service structure and two-stage growth plan with the CEO.") },
      { label: "Creative leadership", text: tp("Directed a multidisciplinary team as the agency grew from six people to twenty-five.") },
      { label: "Commercial contribution", text: tp("Restructured SPLT’s proposal into stages and secured $8,000 for the first two.") },
      { label: "Brand direction", text: tp("Directed the new identity and contributed hands-on to selected elements.") },
      { label: "Team operations", text: tp("Introduced one working system, a review rhythm and a hiring test.") },
      { label: "Digital experience", text: tp("Led five website concepts and briefed the teams on the chosen direction.") },
    ],
    resultsTitle: "Where Things Stood in June 2025",
    results: [
      tp("A clearer position: a focused offer for small and mid-sized businesses, with OP Labs for digital product clients"),
      tp("A defined service structure: branding, web and app, and video as the core offers"),
      tp("A team of twenty-five: grown from six in seven months, with two art directors and a hiring process"),
      tp("A shared working system: Google Workspace, Slack, Trello and regular creative reviews across disciplines"),
      tp("A commercial agreement for SPLT: $8,000 for the first two stages, with the third to be scoped later"),
      tp("A new identity: developed under my creative direction and used by the agency for about a year"),
      tp("A new website direction: five concepts and a chosen route, still in design in June 2025"),
      tp("Alfy: campaigns redirected toward the architects who specify marble, with social engagement up 70%"),
    ],
    reflection: tp("I joined to lead the creative work and spent half my time on the business around it: which clients to chase, what to sell, how the team worked, what a client’s product really needed. I wouldn’t change that. Good work rarely comes from talent alone. It comes when an agency knows who it serves and gives its people room to rise to the standard."),
    credits: tp("Creative Direction & Agency Strategy: Amr Abu-Talleb · Art Direction & Design: the Overpowered team"),
    chapters: [
      {
        label: "The brief",
        paragraphs: [
          tp("The CEO and I had been discussing the agency’s future for two years before I joined. He wanted to build a global agency with a team of more than forty people. We worked through the financial and operational requirements, including the investment needed for the first six to twelve months and how the team could grow as the business developed."),
          tp("When he was ready to move forward, he invited me to join as Creative Director. I worked alongside him to put the plan into practice while the studio kept serving its existing clients."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-01-v5.webp", alt: tp("The audit: six findings beside the old Overpowered homepage and its empty service cards, December 2024") }], caption: tp("The website as I found it, December 2024.") },
        ],
      },
      {
        label: "What I found",
        paragraphs: [
          tp("I started with what a prospective client would see."),
          tp("The website offered six services, from branding to AI data analysis, under a headline about digital dominance. Some service cards were empty, and the portfolio didn’t consistently show the breadth of the offer. The identity relied on gun imagery, which limited where we could advertise and made it a harder sell to the corporate clients the agency wanted in Dubai."),
          tp("Inside the studio, day-to-day coordination happened in WhatsApp groups, so tasks, owners and workloads were hard to see across disciplines. There was no shared asset library, hiring process, outreach plan or review routine."),
          tp("The agency already had a team, clients and work to build on. The next step was to make the positioning, the way the team worked and the way the agency presented itself tell the same story."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-02-v3.webp", alt: tp("Positioning before and after: from digital dominance for anyone to more than ordinary for small and mid-sized businesses, three services, one process") }], caption: tp("Positioning, before and after.") },
        ],
      },
      {
        label: "The turning point",
        lead: tp("The problem wasn’t the logo. Overpowered was trying to be everything to everyone."),
        paragraphs: [
          tp("A new identity would have been the most visible change, but it wouldn’t answer the bigger questions. Who was the agency best placed to serve? Which services should lead the offer? How would we reach those clients?"),
          tp("I worked through those questions with the CEO. Each proposal set out the costs, the people required and the priorities for the next three months, which gave us a shared basis for deciding what to tackle first. The identity and website would take their direction from those decisions."),
        ],
      },
      {
        label: "Positioning",
        paragraphs: [
          tp("We focused on small and mid-sized businesses, where the agency already had strong relationships and relevant work. Word of mouth and the CEO’s network gave us a natural starting point, while our strongest projects showed what the team could do."),
          tp("The long service menu became three core offers: branding, web and app, and video. We moved website projects to Webflow and Framer, giving clients a more practical route to launching and maintaining their sites."),
          tp("Product work needed a different conversation. A CTO evaluating a digital product has different priorities from a marketing lead commissioning a campaign, so we developed OP Labs as a separate offer for product work, with its own positioning and pitch."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-03-v3.webp", alt: tp("Two offers: OP for founders and marketing leads, OP Labs for CTOs and product owners") }], caption: tp("One agency, two offers.") },
        ],
      },
      {
        label: "Winning clients",
        paragraphs: [
          tp("I developed an outreach plan in two stages."),
          tp("The first made better use of the opportunities the agency already had: the CEO’s network, regular publishing across LinkedIn, Instagram and Facebook, collaborative projects on Behance and Dribbble, and daily proposals on Freelancer."),
          tp("The second was designed to build a more measurable pipeline, through research into target clients, small paid campaigns and a CRM to follow leads through to signed contracts. I defined the target audience, the messaging and the approach, then delegated execution to the team."),
          tp("SPLT came through the CEO’s network. The client wanted to build a fitness app for around $4,000, the development estimates on the table priced a one-line code change at about $500, and no one had scoped the product strategy or the design. I stepped into the client meeting, explained what the product needed and split the work into stages. The client agreed to $8,000 for the first two, and I led the product design."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-04-v5.webp", alt: tp("The two-stage go-to-market plan: the CEO’s network, social posts, Behance and Dribbble projects and Freelancer bids first, then paid ads and a CRM-tracked pipeline") }], caption: tp("Two stages, from proof to pipeline.") },
        ],
      },
      {
        label: "The team",
        paragraphs: [
          tp("Over seven months the studio grew from six people to twenty-five, across graphic design, video, 3D, copy and UX/UI. Two art directors led the creative disciplines, while I managed UX/UI directly."),
          tp("I helped formalise the leadership structure, including promoting one of our designers to Art Director, a role he was already doing without the title."),
          tp("I also wrote a hiring exercise around a premium olive-oil brand built on Arabic calligraphy. It gave candidates a concrete brief to interpret and gave us a basis for discussing their thinking, their craft and how they took feedback."),
          tp("I wanted the structure to give people room to develop their judgement and take ownership of their work."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-06-v5.webp", alt: tp("Org chart: CEO, Creative Director, an art director for branding over graphic, an art director for video over video and 3D, and UX/UI and copy reporting directly") }], caption: tp("Team structure. Roles only.") },
        ],
      },
      {
        label: "How we worked",
        paragraphs: [
          tp("A team of twenty-five needs a shared view of the work."),
          tp("I introduced Google Workspace, Slack and Trello as the working structure. Each discipline and client had its own Slack channel, and weekly Trello boards made tasks, owners, deadlines and workloads visible."),
          tp("The team met weekly, I met the art directors every two days, and we shared work for review every few days. Designers presented their decisions, took feedback from peers and leads, and refined the work against the brief."),
          tp("It became easier to see where projects stood, who owned the next step and who had room to take on more."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-07-v2.webp", alt: tp("How we worked: from tasks in WhatsApp groups to Slack, weekly Trello boards and Google Workspace, with a weekly meeting, art director check-ins every two days and team reviews every two to three days") }], caption: tp("From group chats to one working system.") },
        ],
      },
      {
        label: "Identity",
        paragraphs: [
          tp("Once the positioning began to take shape, we could give the agency a more coherent visual expression."),
          tp("I directed the identity work with the branding art director and the team, contributing hands-on to selected elements. We moved away from the gun imagery and developed a connected O and P mark, a family of logo variations, an OP Labs lock-up, a defined palette and type scale, and a graphic pattern drawn from the logo’s geometry."),
          tp("We tested elements of the identity in small Instagram campaigns in the UAE, the UK and Egypt before committing to the direction. The agency went on to use it for about a year."),
        ],
        figures: [
          { images: [{ src: "/images/op-fig-09-v2.webp", alt: tp("Pages from the January 2025 brand guidelines: logomark, logo variations, OP Labs lock-up, colour, type and pattern") }], caption: tp("From the January 2025 brand guidelines.") },
          { images: [{ src: "/images/op-billboard-v1.webp", alt: tp("Billboard: Transforming ideas into impactful designs, over a grainy black-and-white crowd with yellow value tags"), ratio: "1296 / 768" }] },
          { images: [{ src: "/images/op-social-1-v1.webp", alt: tp("Social post: When science and design collaborate"), ratio: "4 / 5" }, { src: "/images/op-social-2-v1.webp", alt: tp("Social post: Pushing boundaries"), ratio: "4 / 5" }, { src: "/images/op-social-3-v1.webp", alt: tp("Social post: Top notch design solutions"), ratio: "4 / 5" }], caption: tp("The identity in use, outdoors and on social media.") },
        ],
      },
      {
        label: "The website",
        paragraphs: [
          tp("The agency’s website needed to communicate its new direction, not simply list its services."),
          tp("I explored five creative directions with the team. Each approached the same challenge differently, from a site that powered up like a game to a command center for a client’s brand."),
          tp("The preferred direction developed into a cinematic experience in four acts. I wrote the briefs for the UI/UX, graphic, motion and 3D teams, then shaped the concept with the art directors, section by section."),
        ],
        figures: [
          { images: [{ src: "/images/op-concept-1-v1.webp", alt: tp("Concept 01, Power Up: Power up your brand, with a charging bar that unlocks branding, web, video, the squad and results"), ratio: "16 / 10" }, { src: "/images/op-concept-4-v1.webp", alt: tp("Concept 04, Forge and Conquer: Forged to conquer, over the logomark glowing on an anvil"), ratio: "16 / 10" }] },
          { images: [{ src: "/images/op-concept-2-v2.webp", alt: tp("Concept 02, Interactive Blueprint: the logomark drawn as a technical construction, with branding, web and video modules called out"), ratio: "16 / 10" }, { src: "/images/op-concept-3-v1.webp", alt: tp("Concept 03, Origami Fold: unfold what your brand can be, with folded paper service cards"), ratio: "16 / 10" }, { src: "/images/op-concept-5-v2.webp", alt: tp("Concept 05, Command Center: your brand, under control, above a glowing globe with London, Brussels, Cairo and Dubai marked"), ratio: "16 / 10" }], caption: tp("The five website concepts.") },
        ],
      },
    ],
    client: tp("Overpowered\nCreative & digital agency, London"),
    timeline: "Dec 2024 – Jun 2025",
    industry: tp("Creative agency\nBranding, digital and video"),
    markets: tp("UK, UAE, Egypt and the EU"),
    year: "2024–2025",
    businessContext: tp("The CEO first came to me about two years before I joined. He wanted a global agency with more than forty people from the first day. I rebuilt the plan around a much smaller start, worked out what the first six to twelve months would cost before the agency broke even, and advised him to grow into the bigger version. When he was ready to start, he brought me in as Creative Director, reporting only to him."),
    clientProblem: tp("My first weeks were an audit. The website promised ten years of design-driven product development above service cards with nothing in them. The copy could have belonged to any agency, and it spoke to everyone at once. The brand leaned on gun imagery everywhere, from the logo to the social posts, which ruled out paid ads in the EU and put off the corporate clients the agency wanted in Dubai. The identity had no system behind it. There was no reusable library, no pattern system and no logo variations, so every designer drew the brand again from scratch. There was no outreach plan, no hiring process and no shared idea of what good work looked like."),
    constraints: tp("The agency had to keep winning and delivering client work while everything around it changed. Budgets and resourcing stayed with the CEO, so every change I proposed came as a plan he could approve, with what it would cost, who would do it and what the next three months would look like."),
    insight: tp("The problem wasn’t the logo. Overpowered was trying to be everything to everyone. It needed a clear buyer, a short list of services it could deliver well, and a way of finding clients that didn’t depend on the CEO’s network alone."),
    creativeStrategy: tp("I repositioned the agency for small and mid-sized businesses. Three service lines replaced the long menu: branding, web and app, and video. Websites were built on Webflow and Framer so clients got them faster and for less, and every project followed the same four steps from discovery to launch. Product and technology buyers got their own offer, OP Labs, so a CTO and a marketing lead no longer read the same pitch. Then I wrote the go-to-market plan in two stages. The first used the network, social channels and a stronger portfolio. The second added client research, paid ads, content and a CRM to track every lead."),
    keyDecisions: tp("I turned outreach into a system the team could run without me. It had a three-day LinkedIn warm-up before the first message, two versions of every opening message to see which one landed, and five follow-ups after it, with separate scripts for OP and OP Labs buyers and research into niche markets abroad. Around it, the agency posted twice a week on LinkedIn, Instagram and Facebook, put out Behance and Dribbble projects made with collaborators and bid on Freelancer every day, with paid ads on Instagram and Facebook as the next stage. I wrote the plan, the copy and the targeting, the team ran it, and I joined the closing calls with the CEO. We held the new website back until the case studies behind it were ready, because a new site with nothing to show would have repeated the old problem."),
    leadershipRole: tp("I organised the team into five disciplines: graphic, video, 3D, copy and UX/UI. Two art directors led the creative teams, one on branding and one on video, 2D and 3D. I ran UX/UI and copy directly, and copy also worked with the CEO on outreach. The team was a mix of full-time, part-time and consultant roles. I wrote the hiring test, a brief for a premium olive-oil brand built on Arabic calligraphy, and reviewed every candidate. I promoted one of the designers to Art Director. Every case study the team produced came back with written notes from me about the reasoning, the personas, the wireframes and the testing behind it, the typography, real copy instead of lorem ipsum, and contrast that passes accessibility checks. Staffing, promotions and reviews were mine. The budget was the CEO’s."),
    processPhases: [
      { title: "Audit", description: tp("Reviewed the website, the identity, the offer and the client list, and wrote up what had to change first.") },
      { title: "Positioning", description: tp("Defined the buyer, the three service lines and the four-step process, and split the offer into OP and OP Labs.") },
      { title: "Go-to-market", description: tp("Wrote the two-stage plan and the outreach system, from the LinkedIn warm-up to the CRM that tracked every lead.") },
      { title: "Team & standards", description: tp("Organised five disciplines, wrote the hiring test, ran the critiques and promoted from within.") },
      { title: "Identity & website direction", description: tp("Directed the new identity, dropped the gun imagery and tested visual elements in small Instagram campaigns in the UAE, the UK and Egypt. Then directed five website concepts with the team.") },
    ],
    featured: true,
    featureImage: "/images/op-hero-v1.webp",
    featureImageAlt: tp("The OP logomark as a giant glass sculpture floating above a hill, a lone figure looking up at it"),
    featureVideo: {
      mp4: "/videos/op-hero-loop-v1.mp4",
      poster: "/images/op-hero-loop-poster-v1.webp",
      alt: tp("The OP logomark as a giant glass sculpture above a hill, cut fast with close-ups of the glass and a man looking up, looping back to where it starts"),
    },
  },
  {
    slug: "split",
    title: "SPLT",
    subtitle: tp("Turning an online shop brief into a fitness platform built around its trainers"),
    impactStatement: tp("338 screens across one app and three dashboards · Trainer subscriptions added as a new revenue line"),
    role: tp("Creative Director & UX Lead at Overpowered\nLed 2 designers and the client relationship"),
    scope: tp("Quotation and scope, competitive research, information architecture, mobile app, three dashboards, design system"),
    intro: [
      tp("SPLT wanted to be more than a workout logger. The ambition was a fitness community where members could track training, follow one another, buy products from several sellers and connect with trainers."),
      tp("That meant designing for four groups at once: members, trainers, vendors and the SPLT team. Each needed a clear reason to use the product, and the platform needed a business model that could support them all."),
    ],
    chapters: [
      {
        label: "The brief",
        paragraphs: [
          tp("The initial brief focused on commerce: products, orders, stock, promo codes and payouts for admins and vendors. It didn’t give trainers a meaningful role or members a compelling reason to pay."),
          tp("The proposed development costs also needed scrutiny. The client was working to a budget of around $4,000, while the estimates included roughly $500 for a one-line code change. Product strategy and design hadn’t been scoped at all."),
          tp("I took the lead in the client meeting and proposed dividing the engagement into three stages. The client agreed to $8,000 for the first two combined, covering strategy, feature definition and UX/UI design, with the third stage’s terms left until development was ready to begin."),
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
          tp("Trainers became a role of their own. Their profiles led with their track record and subscription plans. Free content let members judge a coach before paid videos unlocked the rest, and monthly, quarterly and yearly plans created a new recurring revenue line."),
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
          tp("I set the information architecture and the visual direction, then worked with a senior and a junior designer to build the screens and the shared system. Neither had designed multi-role admin systems before, so I took the team through the user journeys and the logic behind each role before they took on the full UI."),
          tp("Each dashboard had its own navigation, but all three shared one shell, one set of tables and one set of reporting patterns. The mobile app and the dashboards used the same visual language."),
          tp("The work covered 338 screens: about 126 for the mobile app, 82 for admin, 80 for trainers and 50 for vendors."),
        ],
      },
    ],
    results: [
      tp("Restructured the engagement and secured $8,000 for the first two stages"),
      tp("Added a dedicated trainer role with profiles, paid video and three subscription plans"),
      tp("Designed workout, progress, group, achievement and loyalty features for members"),
      tp("Created one shared system for the mobile app and three dashboards"),
      tp("Planned delivery in three phases: commerce, subscriptions and loyalty first; the trainer platform second; integrations and gamification third"),
      tp("Weighed Firebase against AWS for the roadmap and hosting costs"),
      tp("Fixed eight bugs in the existing app before new feature work began"),
    ],
    reflection: tp("The brief asked for a shop. Competitive research showed that the trainer relationship could give the platform another reason to exist and another way to earn. The most valuable work wasn’t the number of screens. It was defining a product in which four different roles had a purpose, then designing a system a small team could deliver. The build continued after my involvement; I scoped and designed the first phases."),
    credits: tp("Creative Direction & UX Strategy: Amr Abu-Talleb · UI Design: Overpowered design team"),
    client: "SPLT\nFitness Social App & Marketplace, Egypt",
    teamSize: "1 Senior + 1 Junior Designer",
    timeline: "Feb \u2013 Jun\u00A02025",
    industry: "Health & Fitness\nMarketplace",
    markets: "Egypt (EGP pricing)",
    year: "2025",
    businessContext: tp("SPLT set out to be a gym community rather than a workout logger, where people track training, follow each other and buy kit from several sellers in one app. To make money it had to work for four groups at once. Members, trainers, vendors and the SPLT team each needed a reason to stay."),
    clientProblem: tp("The brief described a store, with orders, stock, promo codes and payouts for an admin and a vendor. The development quotation SPLT had been given was inflated, its line items didn’t hold up technically and the scope was loose. Nothing in it gave trainers a reason to join or members a reason to pay."),
    constraints: "The client needed to\u00A0relaunch fast. I\u00A0had a\u00A0small team, one senior and one junior designer, neither of\u00A0whom had designed multi-role admin systems before. Every role also had to\u00A0share one visual language, so\u00A0a\u00A0component built for the app couldn\u2019t drift once it\u00A0reached\u00A0a\u00A0dashboard.",
    insight: tp("Before any wireframes, we subscribed to the major fitness apps and their betas and read their reviews side by side. The same complaint kept surfacing. Coaches looked exactly like members and had no way to earn inside the app. That gap became the product."),
    creativeStrategy: "I\u00A0kept the marketplace the client asked for and built a\u00A0training layer on\u00A0top of\u00A0it. Trainers became a\u00A0role of\u00A0their own. In the app, their profile leads with a\u00A0track record and a\u00A0Subscribe button, keeps premium videos locked until you pay, and offers three plans (monthly, quarterly, yearly). Behind it\u00A0sits a\u00A0trainer dashboard to\u00A0manage clients, goals, workout plans, an\u00A0exercise library and video sections. Around that, members got the parts that keep people opening the app every day: a\u00A0workout builder, personal and volume records, groups, goals and achievements, streaks and loyalty\u00A0points.",
    keyDecisions: tp("Trainers come across as professionals first. A trainer’s profile opens on proof and plans, and the social feed sits in its own tab. Free content lets members judge a coach before paid subscriptions unlock the rest, a revenue line the original scope never had. Each role has its own sidebar, but all three dashboards share one shell, one set of tables and one set of reports, so a small team could ship three products from one system."),
    leadershipRole: tp("I took the development quotation apart line by line and rebuilt it with a credible scope and cost, and that won the contract. I then set the information architecture and the visual direction, and trained a team new to admin systems in multi-role journeys before they took on the full UI."),
    processPhases: [
      { title: "Quotation & Scope", description: "Rewrote the development quotation line by\u00A0line: cut the inflated items, defined what each role needs, and turned a\u00A0loose brief into a\u00A0scope SPLT could\u00A0sign." },
      { title: "Competitive Deep Dive", description: "Subscribed to\u00A0the major fitness apps and their betas, mapped their features and read user reviews to\u00A0find what nobody was solving: trainers who look and earn like\u00A0professionals." },
      { title: "Architecture for Four Roles", description: "Mapped member, trainer, vendor and admin journeys before any visual design, then grouped the app into modules: home feed, workouts, track, groups, shop, trainers and\u00A0account." },
      { title: "System, Team & UI", description: "Built a\u00A0dark mobile system and a\u00A0shared dashboard shell around one purple accent, then directed the team through 330+\u00A0screens with weekly\u00A0reviews." },
    ],
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
    slug: "bay-area-trips",
    title: "Bay Area Trips",
    subtitle: tp("Turning a sprawling travel idea into one product for four audiences"),
    impactStatement: tp("Taken from idea to a live product · Web, mobile web and app planned as one system · Reworked with feedback from the first 200 users"),
    client: tp("Bay Area Trips\nTravel and local discovery platform, USA"),
    role: tp("Product Strategist & Designer\nLed a team of about 30 with the client"),
    teamSize: tp("Project team of about 30"),
    scope: tp("Product strategy, information architecture, web and app UX/UI, design system"),
    timeline: "Sep 2023 – Jan 2025",
    industry: tp("Travel & local discovery\nMembership platform"),
    markets: tp("San Francisco Bay Area, USA"),
    year: "2023–2025",
    businessContext: tp("Bay Area Trips set out to be the single guide to the San Francisco Bay Area, for the people exploring it and the businesses and creators who serve them. Restaurants, hotels, events, EV charging, scavenger hunts and a travel club all had to live under one roof, on the web and in an app."),
    clientProblem: tp("The idea had no edges. Every audience and every feature carried equal weight, and nothing defined how the website, the mobile web and the app connected, or which page should lead where."),
    constraints: tp("The deadline and the budget were fixed, and a team of about thirty was building in parallel. The structure had to be clear enough for everyone to work from and lean enough to ship on time."),
    insight: tp("The product only worked as a system. Each audience needed its own account, and all of them had to share one directory, one events calendar and one membership."),
    creativeStrategy: tp("I mapped the product before designing a screen, defining what each account was for, what it could do and how the three platforms handed people to each other. Travellers and families got discovery, trips, hunts and the travel club. Businesses got listings, orders and a dashboard. Creators got Creator Connect, and membership tied it all together."),
    keyDecisions: tp("I decided what got built, how the platforms linked and which page led where. Every feature had to serve one of the four accounts, which is how an idea without edges fitted inside a fixed deadline and budget."),
    leadershipRole: tp("I was the product strategist and designer, and the person who connected the work. The team of about thirty reported to me or to the founder, and the two of us shaped the product together."),
    processPhases: [
      { title: "Map the system", description: tp("Four audiences, three platforms and the paths between them, before any screen.") },
      { title: "Structure", description: tp("Grouped the directory, events, trips, hunts, shopping and membership into one navigation that works on the web and in the app.") },
      { title: "Key flows", description: tp("Directory to listing, the business dashboard, Creator Connect, the kids’ view, membership and the scavenger hunt.") },
      { title: "Design system", description: tp("One set of colours, type and components shared by the website, the mobile web and the app.") },
    ],
    results: [
      tp("Took the idea from concept to a live product across the web, mobile web and an app"),
      tp("Four account types, for travellers, families, businesses and creators, on one shared system"),
      tp("About 60 app sections and the full website designed on one design system"),
      tp("Reworked features and structure using feedback from the first 200 users"),
      tp("The client’s team has kept building on the structure since launch"),
    ],
    reflection: tp("My job was to make a big idea buildable. The product has evolved since launch, as products should. The structure underneath is the part I’d defend in any room."),
    credits: tp("Product Strategy & Design: Amr Abu-Talleb · Client: Jared, Bay Area Trips"),
    featured: true,
    featureImage: "/images/bay-hero-v1.webp",
    featureImageAlt: tp("Bay Area Trips app screens over the bay in the afternoon light, with the sun beginning to set"),
    featureVideo: {
      mp4: "/videos/bay-hero-loop-v1.mp4",
      poster: "/images/bay-hero-loop-poster-v1.webp",
      alt: tp("Bay Area Trips app screens drifting past as the afternoon turns to golden hour and then night: the business dashboard, a hotel listing, the traveller home, the member card, the sea lion hunt, the kids’ view, the travel club and event tickets"),
    },
  },
  {
    slug: "agfin",
    title: "Agfin",
    subtitle: tp("Rebuilding a brochure website as a sales funnel, words first"),
    impactStatement: tp("Sales up 12% in the first month · No paid advertising · A brochure site rebuilt as a story-led sales funnel"),
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
          tp("The site read like a brochure from the early days of the web, with little narrative, limited proof and no clear next step. For a consultant whose business depends on trust, the website was working against him."),
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
          tp("That brought the story closer to the people he worked with. The design could support the message because the message finally sounded like the business."),
        ],
        figures: [
          { images: [{ src: "/images/agfin-process-1-v2.jpg", alt: tp("Noon: the Does This Sound Familiar checklist, each ticked worry fading into heat haze"), ratio: "4 / 3" }, { src: "/images/agfin-process-2-v2.jpg", alt: tp("Golden hour: the case study as one photo print, stamped Loan Declined before the plan turns it around"), ratio: "4 / 3" }] },
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
      tp("Sales rose 12% in the first month, against the same month last year and the months before"),
      tp("The increase came with no paid advertising"),
      tp("A brochure website became a story-led sales funnel"),
      tp("Robert’s experience told through real examples and photographs from his own region"),
      tp("A funnel sized to the business, not built to bring in more leads than Robert could take on"),
    ],
    reflection: tp("Robert’s feedback made the work better. The first script tried too hard to persuade; the final version respected its audience and sounded more like the person behind the business. The result was a clearer website and a measurable rise in sales, without a paid advertising budget."),
    credits: tp("Strategy, Copywriting, UX/UI & Build: Amr Abu-Talleb"),
    client: "Agfin\nRobert, Financial Consultant, Australia",
    industry: "Agricultural Finance\nConsulting",
    markets: "Regional Australia",
    year: "2024\u20132025",
    businessContext: "Robert runs Agfin, advising Australian farming families on\u00A0the\u00A0money side of\u00A0the\u00A0farm. His work changes how those families get through a\u00A0bad season, but his website said none of\u00A0that.",
    clientProblem: tp("He hired me for small fixes. I found a brochure from the early web, with no story, no proof and no clear next step. For a consultant who lives on trust, the site was working against him."),
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
    slug: "taptools",
    title: "TapTools",
    subtitle: tp("Helping users of a live analytics platform find the number they came for"),
    impactStatement: tp("User-reported issues down 23% within 60 days · Core flows redesigned and shipped to a live product · Light and dark themes on one colour library"),
    role: tp("Senior Product Designer\nWith a product and engineering team of about ten"),
    scope: tp("Research, testing, core-flow redesign, production UI, light and dark themes"),
    intro: [
      tp("TapTools gives users token and NFT market data through market overviews, token pages, portfolios, swaps, watchlists and a wallet profiler. The platform was rich in information, but users were getting lost in the core flows."),
      tp("I led user research and testing, redesigned those flows and took the interface from wireframes to production-ready screens."),
    ],
    chapters: [
      {
        label: "Where users got stuck",
        paragraphs: [
          tp("TapTools was already live, with active users. The redesign had to improve the experience without disrupting the way people used the product."),
          tp("Research and testing showed the bottlenecks in the core flows: the points where users struggled to find what they needed or stopped before finishing a task."),
          tp("The problem wasn’t a lack of data. Users needed a clearer hierarchy to find the right information."),
        ],
      },
      {
        label: "Reworking the core flows",
        paragraphs: [
          tp("I redesigned the flows the research had flagged before touching the visual layer. Every screen was judged on one practical question: could a user find what they came for without hunting through the interface?"),
          tp("I then rebuilt the UI around clearer typography, spacing and hierarchy. A shared type system and colour library supported both light and dark themes, giving every part of the platform a more consistent foundation."),
        ],
      },
      {
        label: "From research to production",
        paragraphs: [
          tp("I took the designs from wireframes to production-ready UI, covering market overviews, token pages, portfolios, swaps, lists and the wallet profiler."),
          tp("Working with the product and engineering team, I helped move the redesign into the live product rather than stopping at concepts or polished mockups."),
        ],
      },
    ],
    results: [
      tp("User-reported issues fell 23% within 60 days of launch, measured through support tickets and community reports on Discord and X"),
      tp("Core analytics flows redesigned around a clearer hierarchy"),
      tp("Light and dark themes built on one shared colour library"),
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
    creativeStrategy: tp("I ran user research and testing to find where people dropped off, then redesigned the core flows around them. The interface was rebuilt on clearer typography, spacing and hierarchy, with one type set, one colour library and light and dark themes."),
    keyDecisions: tp("I treated it as a data problem before a design problem. Every screen was judged on a single test, whether a user could find the number they came for without hunting for it."),
    leadershipRole: tp("I owned the design from research to production-ready screens, working with a product and engineering team of about ten to ship it without disrupting live users."),
    processPhases: [
      { title: "Research & testing", description: tp("Watched how users moved through the platform and where they gave up.") },
      { title: "Core flows", description: tp("Redesigned the flows behind the bottlenecks before touching the visual layer.") },
      { title: "Hierarchy", description: tp("Rebuilt typography, spacing and colour so the most important number on each screen reads first.") },
      { title: "Production UI", description: tp("Took the screens from wireframes to production-ready files in light and dark themes.") },
    ],
    featured: true,
  },
  {
    slug: "zikabi",
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
    subtitle: tp("Designing a 212-page illustrated book for a decades-long investigation"),
    client: tp("Steve Hodel\nNYT bestselling author, retired LAPD homicide detective"),
    intro: [
      tp("Steve Hodel is a retired LAPD homicide detective and New York Times bestselling author. After retiring, he spent decades investigating his father, Dr. George Hodel, whom he believes was behind the Black Dahlia murder. As Within, So Without follows that investigation into the surrealist art world his father moved in."),
      tp("I designed and typeset the 212-page illustrated book, working with more than 130 images, historical material and a manuscript that kept changing throughout production."),
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

export const projectHighlights: ProjectHighlight[] = [
  {
    slug: "alfy",
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
    title: "Alienor",
    subtitle: tp("Placing a physician’s skincare line beside clinical brands, not organic ones"),
    role: tp("Brand Designer\nContract"),
    scope: tp("Brand identity, packaging and visual direction"),
    description: tp("Dr Noor, a physician, developed Alienor around medical expertise and premium ingredients, including Moroccan botanicals. The challenge was to communicate science-backed skincare without placing the brand in the crowded visual territory of organic beauty.\n\nI explored two directions, one built around natural ingredients and one around clinical credibility. The clinical direction fitted the product’s medical foundation better and placed the brand closer to premium clinical skincare.\n\nI developed the identity and packaging around that decision, using clean typography and a precise visual system to communicate a considered, science-led product."),
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
    title: "Hickey",
    subtitle: tp("An investor deck for a US makeup start-up’s $2M raise"),
    description: tp("Hickey was raising investment and needed a deck that would communicate the business clearly to potential investors.\n\nI designed every slide and worked on the order in which the story unfolded, so the presentation moved through the information in a way investors could follow."),
    keyResult: tp("The company went on to raise $2 million; the founder credited the deck as part of that effort."),
    client: tp("Hickey\nMakeup start-up, USA"),
    role: tp("Deck Designer\nFreelance"),
    scope: tp("Investor deck design"),
    industry: tp("Beauty and cosmetics"),
    year: "",
  },
  {
    slug: "salel",
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
