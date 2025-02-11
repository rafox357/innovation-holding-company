"use client";

import { SectionNav } from "@/components/section-nav";

const observatoryNavItems = [
  {
    title: "Overview",
    href: "/observatory",
  },
  {
    title: "Dashboard",
    href: "/observatory/dashboard",
  },
  {
    title: "Projects",
    href: "/observatory/projects",
  },
  {
    title: "Analytics",
    href: "/observatory/analytics",
  },
  {
    title: "Resources",
    href: "/observatory/resources",
  },
];

export default function ObservatoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-background">
        <SectionNav items={observatoryNavItems} />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
