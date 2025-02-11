import { Metadata } from "next"
import { SectionNav } from "@/components/section-nav"
import { Breadcrumb } from "@/components/breadcrumb"

const innovationNavigation = [
  {
    title: "Programs",
    items: [
      {
        title: "Startup Incubator",
        href: "/innovation-hub/programs/incubator",
      },
      {
        title: "Research Lab",
        href: "/innovation-hub/programs/research-lab",
      },
      {
        title: "Tech Accelerator",
        href: "/innovation-hub/programs/accelerator",
      },
      {
        title: "Innovation Workshops",
        href: "/innovation-hub/programs/workshops",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Innovation Toolkit",
        href: "/innovation-hub/resources/toolkit",
      },
      {
        title: "Best Practices",
        href: "/innovation-hub/resources/best-practices",
      },
      {
        title: "Case Studies",
        href: "/innovation-hub/resources/case-studies",
      },
      {
        title: "Innovation Blog",
        href: "/innovation-hub/resources/blog",
      },
    ],
  },
]

export const metadata: Metadata = {
  title: "Innovation Hub | Hubverse",
  description: "Explore our innovation programs, resources, and initiatives.",
  openGraph: {
    title: "Innovation Hub | Hubverse",
    description: "Explore our innovation programs, resources, and initiatives.",
    type: "website",
    siteName: "Hubverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovation Hub | Hubverse",
    description: "Explore our innovation programs, resources, and initiatives.",
  },
}

export default function InnovationHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
          <SectionNav items={innovationNavigation} />
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Innovation Hub", href: "/innovation-hub" },
              ]}
            />
            <div className="pb-12 pt-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
