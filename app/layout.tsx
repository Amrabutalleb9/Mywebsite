import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import MainNav from "@/components/main-nav"
import MainFooter from "@/components/main-footer"
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
        url: "/images/amr-portrait.png",
        width: 2000,
        height: 1116,
        alt: "Amr Abu-Talleb | Creative Director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Abu-Talleb | Creative Director \u00B7 Dubai",
    description:
      "Creative Director with 13+ years in brand strategy, UI/UX, and art direction across the UAE, UK, USA, and Europe. Open to senior roles in Dubai.",
    images: ["/images/amr-portrait.png"],
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
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
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
      </body>
    </html>
  )
}
