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
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Amr Abu-Talleb · Creative Director, brand and digital product",
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
    locale: "en_GB",
    url: "https://amrabutalleb.com",
    siteName: "Amr Abu-Talleb",
    title: "Amr Abu-Talleb · Creative Director, brand and digital product",
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
    title: "Amr Abu-Talleb · Creative Director, brand and digital product",
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
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
