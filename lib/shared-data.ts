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
  { text: "Amr assisted me in a\u00A0very challenging Art/Crime book project I authored. Very\u00A0professional work and his continual ongoing communications and proferred insights were invaluable. I\u00A0highly recommend him.", author: "Steven Hodel", location: "Blaine, United States", role: "Book Design" },
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
  { title: "Creative Direction", desc: "I set the vision. I\u00A0lead the team. I\u00A0make sure every piece of\u00A0work that ships is something I\u2019d put my name\u00A0on." },
  { title: "Brand Identity & Strategy", desc: "Logos, type systems, colour, guidelines, positioning. The\u00A0whole foundation. Built to\u00A0scale, built to\u00A0last." },
  { title: "UI/UX Design", desc: "Interfaces for web and mobile, from wireframes to\u00A0shipped product, tested with real users before they\u00A0scale." },
  { title: "Prototype & Ship", desc: "Creative direction that doesn\u2019t stop at\u00A0Figma. I\u00A0build working prototypes in\u00A0code with AI, from brief to\u00A0a\u00A0live staging build in\u00A0days, not\u00A0sprints." },
  { title: "Art Direction & Typography", desc: "The visual tone across campaigns, editorial, packaging and digital, with type doing the heavy lifting in\u00A0any layout, any\u00A0language." },
  { title: "Campaign Design", desc: "Multi-channel campaigns for digital, social and print, tested in\u00A0small runs before they\u00A0scale." },
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
  {
    title: "Strategy",
    question: "Will they think, or just\u00A0execute?",
    quotes: [
      { quote: "His strategic thinking elevated the entire\u00A0project.", name: "Overpowered", credential: "Agency leadership \u00B7 UK" },
      { quote: "Amr provided lots of\u00A0new UX ideas and put them to\u00A0me in\u00A0a\u00A0detailed\u00A0explanation.", name: "Robert, founder of\u00A0Agfin", credential: "Melbourne, Australia" },
      { quote: "His continual ongoing communications and proffered insights were\u00A0invaluable.", name: "Steven Hodel", credential: "NYT bestselling author \u00B7 US" },
    ],
  },
  {
    title: "Craft",
    question: "Is the work actually\u00A0good?",
    quotes: [
      { quote: "The brand identity he created captured our vision perfectly and translated seamlessly across every\u00A0touchpoint.", name: "Overpowered", credential: "Agency leadership \u00B7 UK" },
      { quote: "Great UI/UX designer, quick delivery and clear\u00A0communication.", name: "Head of\u00A0UX, Freelancer.com", credential: "Sydney, Australia" },
      { quote: "Way beyond anything I\u00A0expected.", name: "Augustina", credential: "Website design \u00B7 Denmark" },
    ],
  },
  {
    title: "Communication",
    question: "Can they work with our team\u00A0remotely?",
    quotes: [
      { quote: "Communication was smooth, he was always available, and paid great attention to\u00A0detail.", name: "Stefano", credential: "Website design \u00B7 Valencia, Spain" },
      { quote: "Communication in\u00A0English is\u00A0excellent. Prompt to\u00A0resolve any\u00A0issues.", name: "Augustina", credential: "Website design \u00B7 Denmark" },
      { quote: "Very professional work and his continual ongoing communications\u2026 were\u00A0invaluable.", name: "Steven Hodel", credential: "NYT bestselling author \u00B7 US" },
    ],
  },
  {
    title: "Ownership",
    question: "Will they deliver without being\u00A0chased?",
    quotes: [
      { quote: "We have been through hell with 4\u00A0previous freelancers\u2026 All\u00A04 were unable to\u00A0complete the work. Enter\u00A0Amr.", name: "Dipa, founder", credential: "Visionary Art School \u00B7 Singapore" },
      { quote: "He quickly understood the project requirements and delivered flawless work on\u00A0time.", name: "Stefano", credential: "Website design \u00B7 Valencia, Spain" },
      { quote: "He went above and beyond the project\u00A0scope.", name: "Robert, founder of\u00A0Agfin", credential: "Melbourne, Australia" },
    ],
  },
]

/* ─── How I lead (shown on the homepage and About page) ─── */

export const leadershipPrinciples: { title: string; desc: string }[] = [
  { title: "Hiring", desc: "Integrity first, then the\u00A0will to\u00A0learn. I\u2019ve hired more than 50\u00A0people that way. Skills can be\u00A0sharpened. Anything else can be\u00A0fixed." },
  { title: "Briefs and reviews", desc: "I\u00A0give the\u00A0brief and\u00A0room to\u00A0explore inside it. In reviews we\u00A0judge the\u00A0work against the\u00A0system and\u00A0the\u00A0user, not against my\u00A0taste." },
  { title: "Growing people", desc: "Designers grow into art directors, and\u00A0art directors into leads. I\u00A0teach the\u00A0thinking behind a\u00A0fix, including when a\u00A0piece needs an\u00A0artist and\u00A0when it\u00A0needs a\u00A0designer." },
  { title: "Delivery", desc: "The team is\u00A0heard and\u00A0protected. The system holds the\u00A0deadline, and\u00A0we\u00A0deliver before the\u00A0date we\u00A0promised." },
]
