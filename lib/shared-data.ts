export interface Testimonial {
  text: string
  author: string
  location: string
  role: string
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
  { text: "Great UI/UX designer, quick delivery and\u00A0clear communication. Highly\u00A0recommend working with him!", author: "Stefano", location: "Sydney, Australia", role: "Head of UX, Freelancer.com" },
  { text: "Amr was able to\u00A0discuss different options with me and working together with adjustments was able to\u00A0create photorealistic expressions on\u00A0my character. Great\u00A0job. High\u00A0quality stuff!", author: "Alex", location: "Melbourne, Australia", role: "Character Design" },
  { text: "Dude he is the greatest of\u00A0all\u00A0time.", author: "Mazen", location: "Qassim, Saudi Arabia", role: "Architecture Portfolio Design" },
]

export interface Capability {
  title: string
  desc: string
}

export const capabilities: Capability[] = [
  { title: "Creative Direction", desc: "I set the vision. I\u00A0lead the team. I\u00A0make sure every piece of\u00A0work that ships is something I\u2019d put my name\u00A0on." },
  { title: "Brand Identity & Strategy", desc: "Logos, type systems, color, guidelines, positioning. The\u00A0whole foundation. Built to\u00A0scale, built to\u00A0last." },
  { title: "UI/UX Design", desc: "Interfaces for web and mobile. From\u00A0wireframes to\u00A0production. Screens that perform, not just screens that look\u00A0nice." },
  { title: "Typography Systems", desc: "Type is my primary design tool. I\u00A0build typographic hierarchies that do the heavy lifting in\u00A0any layout, any\u00A0language." },
  { title: "Art Direction", desc: "Defining the visual tone across campaigns, editorial, packaging, and digital. This\u00A0is where the storytelling\u00A0lives." },
  { title: "Campaign Design", desc: "Multi-channel creative for digital, social, and print. Strategy\u00A0first. Execution\u00A0second. Results\u00A0always." },
]
