import MainNav from "@/components/main-nav"
import MainFooter from "@/components/main-footer"
import LazyCustomCursor from "@/components/lazy-cursor"

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <MainNav />
      <div id="main-content">{children}</div>
      <MainFooter />
      <LazyCustomCursor />
    </>
  )
}
