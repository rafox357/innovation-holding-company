import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | The Foundry | Hubverse",
  description: "Research and development publications and papers",
};

<<<<<<< HEAD
export const foundryPublicationsMetadata: Metadata = {
=======
const foundryPublicationsMetadata: Metadata = {
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702
  title: "Foundry Publications | Innovation Hub",
  description: "Research publications and scholarly works from our innovation foundry",
  openGraph: {
    title: "Foundry Publications | Innovation Hub",
    description: "Research publications and scholarly works from our innovation foundry",
    type: "website",
    siteName: "Hubverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundry Publications | Innovation Hub",
    description: "Research publications and scholarly works from our innovation foundry",
  },
}

export default function PublicationsLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return <>{children}</>;
}
