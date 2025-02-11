import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | Observatory | Hubverse",
  description: "Comprehensive analytics and insights for your innovation projects.",
};

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
