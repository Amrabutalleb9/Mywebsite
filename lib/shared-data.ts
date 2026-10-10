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
  { title: "Creative Direction", desc: "I\u00A0set the\u00A0bar for\u00A0the\u00A0whole team and\u00A0hold it\u00A0in\u00A0every review, from a\u00A0single social post to\u00A0a\u00A0full\u00A0rebrand." },
  { title: "Brand Strategy & Identity", desc: "First I\u00A0work out where the\u00A0brand should sit in\u00A0its market. Then I\u00A0build the\u00A0identity and\u00A0the\u00A0guidelines that let other people use it\u00A0well when I\u2019m not in\u00A0the\u00A0room. Most of\u00A0mine have had to\u00A0work in\u00A0more than one market and\u00A0more than one\u00A0language." },
  { title: "Product & UX Design", desc: "Apps, dashboards and\u00A0websites designed around the\u00A0people who use them, and\u00A0tested with real users before the\u00A0client pays to\u00A0scale\u00A0them." },
  { title: "Prototype & Ship", desc: "I\u00A0build working prototypes in\u00A0code with AI, usually in\u00A0days, so\u00A0the\u00A0client signs off on\u00A0something they can click rather than a\u00A0picture of\u00A0it." },
  { title: "Arabic & Latin Typography", desc: "I\u00A0draw and\u00A0set type in\u00A0both scripts and\u00A0pair them so\u00A0a\u00A0bilingual brand reads as\u00A0one voice. It\u2019s where I\u00A0started, and\u00A0it\u2019s still the\u00A0part I\u00A0do by\u00A0hand." },
  { title: "Campaigns", desc: "Digital, social and\u00A0print campaigns, run as\u00A0small tests first. The budget goes behind whatever the\u00A0numbers\u00A0back." },
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
  { title: "Standards", desc: "I\u00A0set the\u00A0direction and\u00A0the\u00A0bar, then make the\u00A0bar reachable. Work is\u00A0judged against the\u00A0brand and\u00A0the\u00A0people using it,\u00A0not against my\u00A0taste. In reviews I\u00A0speak last, so\u00A0the\u00A0team says what it\u00A0sees before it\u00A0hears what I\u00A0think." },
  { title: "People", desc: "I\u00A0match each brief to\u00A0the\u00A0designer with the\u00A0capacity and\u00A0the\u00A0strengths for\u00A0it,\u00A0and\u00A0I\u00A0learn how many rounds each person needs to\u00A0reach their best idea. That\u2019s how designers on\u00A0my\u00A0teams grow into art\u00A0directors." },
  { title: "The business", desc: "Product, marketing and\u00A0the\u00A0founders are in\u00A0the\u00A0room early, so\u00A0creative decisions get made with the\u00A0business at\u00A0the\u00A0table. Big ideas get tested small first, and\u00A0the\u00A0budget follows what\u00A0works." },
  { title: "Delivery", desc: "I\u00A0weigh ambition against budget, time and\u00A0risk before the\u00A0work starts, agree the\u00A0scope up\u00A0front and\u00A0raise problems early. Every quarter the\u00A0owners and\u00A0the\u00A0board see the\u00A0numbers in\u00A0their terms, not\u00A0mine." },
]
