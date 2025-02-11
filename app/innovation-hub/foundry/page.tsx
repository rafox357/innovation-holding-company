// This is a Server Component by default
import { Metadata } from "next";
import { FoundryContent } from "@/components/innovation-hub/foundry-content";

export const metadata: Metadata = {
  title: "The Foundry | Innovation Hub",
  description: "Innovation research and development center",
};

export default function FoundryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FoundryContent />
    </div>
  );
}
