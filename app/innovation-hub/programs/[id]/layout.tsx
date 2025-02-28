import { Metadata } from "next";

// Mock data - in a real app, this would be fetched dynamically
const program = {
  id: "prog-1",
  title: "AI Research Fellowship",
  description: "A 12-month fellowship program for AI researchers.",
};

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  // In a real app, fetch program data based on params.id
  return {
    title: `${program.title} | Programs | Hubverse`,
    description: program.description,
    openGraph: {
      title: `${program.title} | Programs | Hubverse`,
      description: program.description,
      type: "website",
      siteName: "Hubverse",
    },
    twitter: {
      card: "summary_large_image",
      title: `${program.title} | Programs | Hubverse`,
      description: program.description,
    },
  };
}

export default function ProgramDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
