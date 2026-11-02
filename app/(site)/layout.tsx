import SiteChrome from "@/components/site-chrome"
import { personLd, websiteLd, ldJson } from "@/lib/structured-data"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(personLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={ldJson(websiteLd)} />
      <SiteChrome>{children}</SiteChrome>
    </>
  )
}
