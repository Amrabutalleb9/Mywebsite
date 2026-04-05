import { Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans, Syne } from "next/font/google"
import type { Viewport } from "next"
import Script from "next/script"
import "./funnel.css"

export const viewport: Viewport = {
  themeColor: "#050508",
}

const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  /* Full weight range so h1–h2 at 800 render as Syne, not faux-bold fallback */
  weight: ["400", "500", "600", "700", "800"],
})

const fontJet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  display: "swap",
})

/** Editorial accent for pull quotes & guarantee — pairs with Syne */
const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abp-serif",
  display: "swap",
})

const fbPixelInit = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '802044995822865');
fbq('track', 'PageView');
`

export default function AiDesignerBlueprintV2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: fbPixelInit }} />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=802044995822865&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <div
        className={`${fontBody.variable} ${fontDisplay.variable} ${fontJet.variable} ${fontSerif.variable} ai-designer-funnel-v2 abp-v5 min-h-screen bg-[#050508]`}
      >
        {children}
      </div>
    </>
  )
}
