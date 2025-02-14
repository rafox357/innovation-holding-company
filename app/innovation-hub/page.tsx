import { Metadata } from "next";
import InnovationHub from "@/components/innovation-hub/innovation-hub";

export const metadata: Metadata = {
  title: "Innovation Hub | Hubverse",
  description: "Explore our innovation programs, resources, and partnerships.",
};

export default function InnovationHubPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Innovation Hub</h1>
      <InnovationHub />
    </div>
  );
}
