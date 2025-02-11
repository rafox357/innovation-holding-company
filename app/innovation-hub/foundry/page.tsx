// This is a Server Component by default
import { Metadata } from "next";
import { fetchProjects, fetchPublications } from "@/lib/data-fetcher";
import { FoundryContent } from "@/components/innovation-hub/foundry-content";

export const metadata: Metadata = {
  title: "The Foundry | Innovation Hub",
  description: "Innovation research and development center",
};

export default async function FoundryPage() {
  const projects = await fetchProjects();
  const publications = await fetchPublications();

  return (
    <div className="container mx-auto px-4 py-8">
      <FoundryContent 
        projects={projects} 
        publications={publications} 
      />
    </div>
  );
}
