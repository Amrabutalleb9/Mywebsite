import { Courier_Prime, JetBrains_Mono, Outfit } from "next/font/google"
import type { Viewport } from "next"
import Script from "next/script"
import "./funnel.css"

export const viewport: Viewport = {
  themeColor: "#0e2c26",
}

/** Penpreneur funnel: Outfit headlines + Courier Prime body (matches scottscheper.com source). */
const fontBody = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "700"],
})

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const fontJet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
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

export default function AiDesignerBlueprintV3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script id="fb-pixel-v3" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: fbPixelInit }} />
      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=802044995822865&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <div
        className={`${fontBody.variable} ${fontDisplay.variable} ${fontJet.variable} ai-designer-funnel-v3 abp-v3 abp3-pen min-h-screen`}
      >
        {children}
      </div>
    </>
  )
}
