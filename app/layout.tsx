import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const FB_PIXEL_SNIPPET = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '802044995822865');
fbq('track', 'PageView');`

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
    default: "Amr Abu-Talleb · Creative Director, Open to Roles in Europe",
    template: "%s \u00B7 Amr Abu-Talleb",
  },
  description:
    "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. Open to Creative Director roles in Europe, on-site or remote.",
  metadataBase: new URL("https://amrabutalleb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amrabutalleb.com",
    siteName: "Amr Abu-Talleb",
    title: "Amr Abu-Talleb · Creative Director, Open to Roles in Europe",
    description:
      "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. Open to Creative Director roles in Europe, on-site or remote.",
    images: [
      {
        url: "/images/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Amr Abu-Talleb, Creative Director, open to roles in Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Abu-Talleb · Creative Director, Open to Roles in Europe",
    description:
      "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. Open to Creative Director roles in Europe, on-site or remote.",
    images: ["/images/og-image-v2.png"],
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
    "fractional creative director",
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
              name: "Amr Abu-Talleb",
              jobTitle: "Creative Director",
              url: "https://amrabutalleb.com",
              email: "hello@amrabutalleb.com",
              sameAs: ["https://www.linkedin.com/in/abutalleb/"],
              image: "https://amrabutalleb.com/images/amr-portrait.webp",
              description:
                "Creative Director with 13 years leading brand and product teams of up to 25 across 8 markets. Open to Creative Director roles in Europe, on-site or remote.",
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
                  name: "Europe (relocating) or remote",
                },
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
              name: "Amr Abu-Talleb",
              url: "https://amrabutalleb.com",
              description:
                "Creative Director with 13 years leading brand and product teams across 8 markets.",
              inLanguage: "en",
              author: { "@type": "Person", name: "Amr Abu-Talleb" },
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
              url: "https://amrabutalleb.com/consulting",
              description:
                "Fractional creative direction, launch sprints and UX audits for startups and agencies.",
              areaServed: ["Europe", "Middle East", "Worldwide (remote)"],
              serviceType: [
                "Fractional Creative Direction",
                "Creative Direction",
                "UX Audit",
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: FB_PIXEL_SNIPPET }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=802044995822865&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
