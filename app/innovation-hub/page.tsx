import { Metadata } from "next";
<<<<<<< HEAD
import { InnovationHub } from "@/components/innovation-hub/innovation-hub";
=======
import InnovationHub from "@/components/innovation-hub/innovation-hub";
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702

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
