import { Metadata } from "next"
import { SectionNav } from "@/components/section-nav"
import { Breadcrumb } from "@/components/breadcrumb"

const blueprintNavigation = [
  { title: "Overview", href: "/blueprint-platform/overview" },
  { title: "Benefits", href: "/blueprint-platform/benefits" },
  { title: "Case Studies", href: "/blueprint-platform/case-studies" },
  { title: "Components", href: "/blueprint-platform/components" },
  { title: "FAQ", href: "/blueprint-platform/faq" },
  { title: "Implementation", href: "/blueprint-platform/implementation" },
  { title: "Interactions", href: "/blueprint-platform/interactions" },
  { title: "Process", href: "/blueprint-platform/process" },
  { title: "Resources", href: "/blueprint-platform/resources" },
  { title: "Revenue Model", href: "/blueprint-platform/revenue-model" },
  { title: "Technology Stack", href: "/blueprint-platform/technology-stack" },
]

export const metadata: Metadata = {
  title: "Blueprint Platform | Hubverse",
  description: "A comprehensive platform for innovation and business transformation.",
  openGraph: {
    title: "Blueprint Platform | Hubverse",
    description: "A comprehensive platform for innovation and business transformation.",
    type: "website",
    siteName: "Hubverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueprint Platform | Hubverse",
    description: "A comprehensive platform for innovation and business transformation.",
  },
}

export default function BlueprintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
          <SectionNav items={blueprintNavigation} />
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blueprint Platform", href: "/blueprint-platform" },
              ]}
            />
            <div className="pb-12 pt-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
