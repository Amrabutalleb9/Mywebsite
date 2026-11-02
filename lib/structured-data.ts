/**
 * schema.org JSON-LD for search engines and AI answer engines.
 * One Person (referenced everywhere by @id), the WebSite, and a CreativeWork per published case study.
 */
import { publishedCaseStudies, type CaseStudy } from "./projects"
import { SITE_URL, PERSON_ID, LINKEDIN_URL, BEHANCE_URL } from "./seo"

/** Strip typesetting characters (non-breaking spaces, line breaks) so the data reads as plain text. */
export function plain(s: string): string {
  return s.replace(/[  ⁠]/g, " ").replace(/\s*\n\s*/g, ", ").replace(/\s{2,}/g, " ").trim()
}

const firstLine = (s: string) => plain(s.split("\n")[0])

/** "Subtitle. Impact line", without doubling the full stop when the subtitle already ends a sentence. */
export function caseStudySummary(p: Pick<CaseStudy, "subtitle" | "impactStatement">): string {
  const sub = plain(p.subtitle)
  return `${sub}${/[.?!]$/.test(sub) ? "" : "."} ${plain(p.impactStatement)}`
}

export const caseStudyUrl = (slug: string) => `${SITE_URL}/work/${slug}`

export function caseStudyLd(p: CaseStudy) {
  const url = caseStudyUrl(p.slug)
  const years = p.year.match(/\d{4}/g) ?? []
  const image = [`${SITE_URL}/images/og/${p.slug}-v1.jpg`, ...(p.featureImage ? [`${SITE_URL}${p.featureImage}`] : [])]
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#work`,
    name: plain(p.title),
    headline: `${plain(p.title)}: ${plain(p.subtitle)}`,
    description: caseStudySummary(p),
    url,
    mainEntityOfPage: url,
    image,
    creator: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    ...(years[0] ? { dateCreated: years[0] } : {}),
    ...(years.length > 1 ? { temporalCoverage: `${years[0]}/${years[years.length - 1]}` } : {}),
    genre: firstLine(p.industry),
    keywords: plain(p.scope),
    about: plain(p.industry),
    sourceOrganization: { "@type": "Organization", name: firstLine(p.client) },
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  }
}

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Amr Abu-Talleb",
  givenName: "Amr",
  familyName: "Abu-Talleb",
  alternateName: ["Amr Abutalleb", "Amr Abu Talleb"],
  jobTitle: "Designer and creative director",
  knowsLanguage: ["English", "Arabic"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Google UX Design Professional Certificate",
    credentialCategory: "certificate",
    recognizedBy: { "@type": "Organization", name: "Google" },
  },
  mainEntityOfPage: `${SITE_URL}/about`,
  url: SITE_URL,
  email: "hello@amrabutalleb.com",
  sameAs: [LINKEDIN_URL, BEHANCE_URL],
  image: `${SITE_URL}/images/amr-portrait-v3.webp`,
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
    name: "Designer and creative director",
    occupationLocation: { "@type": "Place", name: "Europe" },
  },
  workExample: publishedCaseStudies.map((p) => ({
    "@type": "CreativeWork",
    "@id": `${caseStudyUrl(p.slug)}#work`,
    name: plain(p.title),
    url: caseStudyUrl(p.slug),
  })),
}

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Amr Abu-Talleb",
  url: SITE_URL,
  description: "Portfolio of Amr Abu-Talleb, designer and creative director for brand, campaigns and digital products.",
  inLanguage: "en-GB",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
}

/** /projects: the case studies as an ordered list. */
export const projectsLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/projects`,
  url: `${SITE_URL}/projects`,
  name: "Projects and case studies",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedCaseStudies.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: caseStudyUrl(p.slug),
      name: plain(p.title),
    })),
  },
}

/** Serialise for a <script type="application/ld+json">; escapes "<" so no string can close the tag. */
export const ldJson = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") })
