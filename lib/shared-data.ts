import { tp } from "./typeset"
export interface Testimonial {
  text: string
  author: string
  location: string
  role: string
  hidden?: boolean
}

export const testimonials: Testimonial[] = [
  { text: "Is there a\u00A0god or do angels exist? We\u00A0have been thru hell with 4\u00A0previous freelancers for 2\u00A0years. All\u00A04 were unable to\u00A0complete the work. Enter\u00A0Amr. He\u00A0is highly intelligent, genuine and\u00A0lovely. He has integrity, is extremely skilled, has good aesthetic sense and\u00A0importantly, a\u00A0great sense of\u00A0humour!", author: "Dipa", location: "Singapore", role: "Website Design" },
  { text: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in a\u00A0detailed explanation. He\u00A0went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales funnel.", author: "Robert", location: "Melbourne, Australia", role: "Funnel Copywriting & Design" },
  { text: "Amr delivered beyond expectations. The\u00A0brand identity he created captured our vision perfectly and translated seamlessly across every touchpoint. His strategic thinking elevated the entire\u00A0project.", author: "Overpowered Agency", location: "UK", role: "Brand Identity" },
  { text: "Outstanding collaboration! Amr\u00A0was extremely professional, fast, and\u00A0precise. He\u00A0quickly understood the project requirements and delivered flawless work on\u00A0time. Communication was smooth, he was always available, and\u00A0paid great attention to\u00A0detail. Highly\u00A0recommended!", author: "Stefano", location: "Valencia, Spain", role: "Website Design" },
  { text: "He is Extraordinary! Way\u00A0beyond anything I expected. Amr is very talented, knowledgeable, professional, and\u00A0competent. Communication in\u00A0english is excellent. Prompt to\u00A0resolve any issues. Goes beyond the expected for customer\u00A0satisfaction.", author: "Augustina", location: "Herning, Denmark", role: "Website Design" },
  { text: "Amr assisted me in a\u00A0very challenging Art/Crime book project I authored. Very\u00A0professional work and his continual ongoing communications and proferred insights were invaluable. I\u00A0highly recommend him.", author: "Steve Hodel", location: "Blaine, United States", role: "Book Design" },
  { text: "So professional, on time, high level of\u00A0skills and capabilities\u2026 don\u2019t waste your time and\u00A0assign him your work, I didn\u2019t see anything with his level of\u00A0accountability.", author: "Ahmed", location: "Khobar, KSA", role: "Branding" },
  { text: "Fantastic work and great communication. Very\u00A0happy with the outcome of report from a\u00A0layout and a\u00A0branding perspective.", author: "Paul", location: "Melbourne, Australia", role: "Branding" },
  { text: "Very professional and created me an amazing\u00A0design.", author: "Elliot", location: "London, UK", role: "Apparel Design" },
  { text: "Great UI/UX designer, quick delivery and\u00A0clear communication. Highly\u00A0recommend working with him!", author: "Stefano", location: "Sydney, Australia", role: "Head of UX at Freelancer.com \u00B7 Contract engagement" },
  { text: "Amr was able to\u00A0discuss different options with me and working together with adjustments was able to\u00A0create photorealistic expressions on\u00A0my character. Great\u00A0job. High\u00A0quality stuff!", author: "Alex", location: "Melbourne, Australia", role: "Character Design" },
  { text: "Dude he is the greatest of\u00A0all\u00A0time.", author: "Mazen", location: "Qassim, Saudi Arabia", role: "Architecture Portfolio Design" },
]

export const publishedTestimonials = testimonials.filter((t) => !t.hidden)

export interface Capability {
  title: string
  desc: string
}

export const capabilities: Capability[] = [
  { title: "Creative Direction", desc: tp("Set the creative vision and standard, guiding work from the first idea through execution across brands, campaigns and digital experiences.") },
  { title: "Brand Strategy & Identity", desc: tp("Clarify a brand’s position, define what makes it distinct, and build an identity system that works across channels, markets and languages.") },
  { title: "Digital Product & UX Design", desc: tp("Shape digital products through research, user flows, information architecture, feature priorities and interface direction, connecting user needs with the business behind the product.") },
  { title: "Prototyping & Creative Technology", desc: tp("Turn concepts into working prototypes with code and AI-assisted tools, so ideas can be tested and refined before full development.") },
  { title: "Arabic & English Typography", desc: tp("Bring calligraphy and typographic judgement to identities that need to work naturally in both scripts.") },
  { title: "Campaigns & Art Direction", desc: tp("Develop creative concepts and direct their execution across digital, social and print, testing small before a bigger budget goes behind an idea.") },
]

/* ─── Homepage testimonials, grouped by what an agency checks before hiring ───
   Quotes are the clients' own words (from `testimonials` above), cut short with typos tidied. */
export interface ProofQuote {
  quote: string
  name: string
  credential: string
}

export interface ProofGroup {
  title: string
  question: string
  quotes: ProofQuote[]
}

export const testimonialProof: ProofGroup[] = [
  // One original testimonial per question, wording as first published (Git: lib/shared-data.ts at be3f574, the carousel before e7e0c96).
  {
    title: "Strategy",
    question: "Will they think, or just\u00A0execute?",
    quotes: [
      { quote: "Amr delivered beyond expectations. The\u00A0brand identity he created captured our vision perfectly and translated seamlessly across every touchpoint. His strategic thinking elevated the entire\u00A0project.", name: "Overpowered Agency", credential: "Brand Identity \u00B7 UK" },
    ],
  },
  {
    title: "Craft",
    question: "Is the work actually\u00A0good?",
    quotes: [
      { quote: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in a\u00A0detailed explanation. He\u00A0went above and beyond the project scope to\u00A0deliver a\u00A0renewed website and sales funnel.", name: "Robert", credential: "Funnel Copywriting & Design \u00B7 Melbourne, Australia" },
    ],
  },
  {
    title: "Communication",
    question: "Can they work with our team\u00A0remotely?",
    quotes: [
      { quote: "Amr assisted me in a\u00A0very challenging Art/Crime book project I authored. Very\u00A0professional work and his continual ongoing communications and proferred insights were invaluable. I\u00A0highly recommend him.", name: "Steven Hodel", credential: "Book Design \u00B7 Blaine, United States" },
    ],
  },
  {
    title: "Ownership",
    question: "Will they deliver without being\u00A0chased?",
    quotes: [
      { quote: "So professional, on time, high level of\u00A0skills and capabilities\u2026 don\u2019t waste your time and\u00A0assign him your work, I didn\u2019t see anything with his level of\u00A0accountability.", name: "Ahmed", credential: "Branding \u00B7 Khobar, KSA" },
    ],
  },
]

/* ─── How I lead (shown on the homepage and About page) ─── */

export const leadershipPrinciples: { title: string; desc: string }[] = [
  { title: "Standards", desc: "I\u00A0set the\u00A0direction and\u00A0the\u00A0bar, then make the\u00A0bar reachable. Work is\u00A0judged against the\u00A0brand and\u00A0the\u00A0people using it,\u00A0not against my\u00A0taste. In reviews I\u00A0speak last, so\u00A0the\u00A0team says what it\u00A0sees before it\u00A0hears what I\u00A0think." },
  { title: "People", desc: "I\u00A0match each brief to\u00A0the\u00A0designer with the\u00A0capacity and\u00A0the\u00A0strengths for\u00A0it. I\u2019ve hired more than fifty people, and\u00A0some now lead teams of\u00A0their own. A\u00A0team should be able to\u00A0make a\u00A0considered call without waiting for\u00A0me." },
  { title: "The business", desc: "Product, marketing and\u00A0the\u00A0founders are in\u00A0the\u00A0room early, so\u00A0creative decisions get made with the\u00A0business at\u00A0the\u00A0table. Big ideas get tested small first, and\u00A0the\u00A0budget follows what\u00A0works." },
  { title: "Delivery", desc: "I\u00A0weigh ambition against budget, time and\u00A0risk before the\u00A0work starts, agree the\u00A0scope up\u00A0front and\u00A0raise problems early." },
]
