import { Metadata } from "next"
import { SectionNav } from "@/components/section-nav"
import { newsNavigation } from "@/config/navigation"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "News & Updates | Hubverse",
  description: "Stay up-to-date with the latest news, announcements, insights, and community updates from Hubverse.",
  openGraph: {
    title: "News & Updates | Hubverse",
    description: "Stay up-to-date with the latest news, announcements, insights, and community updates from Hubverse.",
    type: "website",
    siteName: "Hubverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | Hubverse",
    description: "Stay up-to-date with the latest news, announcements, insights, and community updates from Hubverse.",
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
          <SectionNav items={newsNavigation} />
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "News", href: "/news" },
              ]}
            />
            <div className="pb-12 pt-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
