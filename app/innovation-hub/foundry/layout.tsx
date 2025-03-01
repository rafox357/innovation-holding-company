// This is a Server Component by default
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Foundry | Innovation Hub",
  description: "Innovation research and development center",
};

<<<<<<< HEAD
export const foundryAnalyticsMetadata: Metadata = {
=======
const foundryAnalyticsMetadata: Metadata = {
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702
  title: "Foundry Analytics | Innovation Hub",
  description: "Comprehensive analytics and insights for our innovation foundry",
  openGraph: {
    title: "Foundry Analytics | Innovation Hub",
    description: "Comprehensive analytics and insights for our innovation foundry",
    type: "website",
    siteName: "Hubverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundry Analytics | Innovation Hub",
    description: "Comprehensive analytics and insights for our innovation foundry",
  },
}

export default function FoundryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
