import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Amr Abu-Talleb · Creative Director, Brand and Digital Product",
    template: "%s \u00B7 Amr Abu-Talleb",
  },
  description:
    "Amr Abu-Talleb is a Creative Director who leads brand, campaign and digital product teams. 13 years, teams of up to 25 across 8 markets, 50+ people hired.",
  metadataBase: new URL("https://amrabutalleb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amrabutalleb.com",
    siteName: "Amr Abu-Talleb",
    title: "Amr Abu-Talleb · Creative Director, Brand and Digital Product",
    description:
      "Amr Abu-Talleb is a Creative Director who leads brand, campaign and digital product teams. 13 years, teams of up to 25 across 8 markets, 50+ people hired.",
    images: [
      {
        url: "/images/og-image-v4.png",
        width: 1200,
        height: 630,
        alt: "Amr Abu-Talleb, Creative Director. Brand, campaigns and digital products: 13 years, largest team of 25, 8 markets, 50+ people hired",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Abu-Talleb · Creative Director, Brand and Digital Product",
    description:
      "Amr Abu-Talleb is a Creative Director who leads brand, campaign and digital product teams. 13 years, teams of up to 25 across 8 markets, 50+ people hired.",
    images: ["/images/og-image-v4.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "creative director",
    "creative director Europe",
    "creative director remote",
    "head of design",
    "design director",
    "brand creative director",
    "creative director for startups",
    "creative director for agencies",
    "brand identity",
    "design systems",
    "product design leadership",
    "creative team leadership",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0D0D1A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "Amr Abu-Talleb is a Creative Director who leads brand, campaign and digital product teams. 13 years, teams of up to 25 across 8 markets, 50+ people hired.",
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
                occupationLocation: {
                  "@type": "Place",
                  name: "Europe",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://amrabutalleb.com/#website",
              name: "Amr Abu-Talleb",
              url: "https://amrabutalleb.com",
              description:
                "Portfolio of Amr Abu-Talleb, Creative Director for brand, campaigns and digital products.",
              inLanguage: "en",
              author: { "@id": "https://amrabutalleb.com/#person" },
              publisher: { "@id": "https://amrabutalleb.com/#person" },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
