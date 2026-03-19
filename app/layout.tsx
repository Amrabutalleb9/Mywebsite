import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import MainNav from "@/components/main-nav"
import MainFooter from "@/components/main-footer"
import LazyCustomCursor from "@/components/lazy-cursor"
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
    default: "Amr Abu-Talleb | Creative Director \u00B7 Dubai",
    template: "%s \u00B7 Amr Abu-Talleb",
  },
  description:
    "Creative Director with 13+ years in brand strategy, UI/UX, and art direction across the UAE, UK, USA, Australia, Singapore, and Europe.",
  metadataBase: new URL("https://amrabutalleb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amrabutalleb.com",
    siteName: "Amr Abu-Talleb",
    title: "Amr Abu-Talleb | Creative Director \u00B7 Dubai",
    description:
      "Creative Director with 13+ years in brand strategy, UI/UX, and art direction across the UAE, UK, USA, and Europe. Open to senior roles in Dubai.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amr Abu-Talleb | Creative Director · Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Abu-Talleb | Creative Director \u00B7 Dubai",
    description:
      "Creative Director with 13+ years in brand strategy, UI/UX, and art direction across the UAE, UK, USA, and Europe. Open to senior roles in Dubai.",
    images: ["/images/og-image.png"],
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
    "creative director dubai",
    "brand identity designer UAE",
    "UI UX designer MENA",
    "art director Dubai",
    "brand strategist Middle East",
    "creative direction agency",
    "senior designer UAE",
    "head of design Dubai",
    "creative lead UAE",
    "design director Dubai",
    "senior art director UAE",
    "brand direction MENA",
    "creative leadership Dubai",
    "visual identity designer",
    "multidisciplinary creative team",
    "web design dubai",
    "web design UAE",
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
              name: "Amr Abu-Talleb",
              jobTitle: "Creative Director",
              url: "https://amrabutalleb.com",
              email: "hello@amrabutalleb.com",
              sameAs: ["https://www.linkedin.com/in/abutalleb/"],
              image: "https://amrabutalleb.com/images/amr-portrait.png",
              description:
                "Creative Director with 13+ years in brand strategy, UI/UX, and art direction across the UAE, UK, USA, Australia, Singapore, and Europe.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cairo",
                addressCountry: "EG",
              },
              workLocation: [
                {
                  "@type": "Place",
                  name: "Cairo, Egypt",
                },
                {
                  "@type": "Place",
                  name: "Dubai, UAE",
                },
              ],
              knowsAbout: [
                "Creative Direction",
                "Brand Identity",
                "Brand Strategy",
                "UI/UX Design",
                "Art Direction",
                "Typography Systems",
                "Campaign Design",
                "Team Leadership",
                "Design Systems",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "German University in Cairo",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "California Institute of the Arts",
                },
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Creative Director",
                occupationLocation: {
                  "@type": "City",
                  name: "Dubai",
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
              name: "Amr Abu-Talleb",
              url: "https://amrabutalleb.com",
              description:
                "Creative Director with 13+ years in brand strategy, UI/UX, and art direction.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Amr Abu-Talleb \u2014 Creative Direction",
              url: "https://amrabutalleb.com/work-with-me",
              description:
                "Senior creative direction, brand strategy, and UX consulting for brands worldwide.",
              areaServed: [
                "UAE",
                "Middle East",
                "Europe",
                "United States",
                "Australia",
              ],
              serviceType: [
                "Creative Direction",
                "Brand Strategy",
                "Brand Identity",
                "UI/UX Design",
                "Art Direction",
              ],
              provider: {
                "@type": "Person",
                name: "Amr Abu-Talleb",
                url: "https://amrabutalleb.com",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white">
          Skip to content
        </a>
        <MainNav />
        <div id="main-content">
        {children}
        </div>
        <MainFooter />
        <LazyCustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
