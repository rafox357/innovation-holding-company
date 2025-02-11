import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Observatory Dashboard | Hubverse",
  description: "Project management and analytics dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
