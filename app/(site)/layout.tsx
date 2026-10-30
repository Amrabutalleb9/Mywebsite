import SiteChrome from "@/components/site-chrome"

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://amrabutalleb.com/#person",
  name: "Amr Abu-Talleb",
  givenName: "Amr",
  familyName: "Abu-Talleb",
  alternateName: ["Amr Abutalleb", "Amr Abu Talleb"],
  jobTitle: "Creative Director",
  knowsLanguage: ["English", "Arabic"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Google UX Design Professional Certificate",
    credentialCategory: "certificate",
    recognizedBy: { "@type": "Organization", name: "Google" },
  },
  mainEntityOfPage: "https://amrabutalleb.com/about",
  url: "https://amrabutalleb.com",
  email: "hello@amrabutalleb.com",
  sameAs: ["https://www.linkedin.com/in/abutalleb/"],
  image: "https://amrabutalleb.com/images/amr-portrait-v3.webp",
  description:
    "Designer and creative director. 13 years in brand, campaigns and digital products. I design and build the work, and lead the people shipping it with me.",
  workLocation: [
    { "@type": "Place", name: "Europe" },
    { "@type": "VirtualLocation", name: "Remote" },
  ],
  knowsAbout: [
    "Creative Direction",
    "Brand Identity",
    "Brand Strategy",
    "UI/UX Design",
    "Art Direction",
    "Campaign Design",
    "Design Leadership",
    "Team Leadership",
    "Hiring and Mentoring Designers",
    "Design Systems",
    "Product Design",
    "Rapid Prototyping",
    "AI-assisted Design Workflows",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Creative Director",
    occupationLocation: { "@type": "Place", name: "Europe" },
  },
}

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://amrabutalleb.com/#website",
  name: "Amr Abu-Talleb",
  url: "https://amrabutalleb.com",
  description: "Portfolio of Amr Abu-Talleb, Creative Director for brand, campaigns and digital products.",
  inLanguage: "en",
  author: { "@id": "https://amrabutalleb.com/#person" },
  publisher: { "@id": "https://amrabutalleb.com/#person" },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <SiteChrome>{children}</SiteChrome>
    </>
  )
}
