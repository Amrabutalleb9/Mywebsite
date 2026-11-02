import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import { DEFAULT_OG_IMAGE } from "@/lib/seo"
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
    default: "Amr Abu-Talleb · Designer and creative director",
    template: "%s \u00B7 Amr Abu-Talleb",
  },
  description:
    "Designer and creative director. 13 years in brand, campaigns and digital products. I design and build the work, and lead the people shipping it with me.",
  metadataBase: new URL("https://amrabutalleb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://amrabutalleb.com",
    siteName: "Amr Abu-Talleb",
    title: "Amr Abu-Talleb · Designer and creative director",
    description:
      "Designer and creative director. 13 years in brand, campaigns and digital products. I design and build the work, and lead the people shipping it with me.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Abu-Talleb · Designer and creative director",
    description:
      "Designer and creative director. 13 years in brand, campaigns and digital products. I design and build the work, and lead the people shipping it with me.",
    images: [{ url: DEFAULT_OG_IMAGE.url, alt: DEFAULT_OG_IMAGE.alt }],
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
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
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
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
