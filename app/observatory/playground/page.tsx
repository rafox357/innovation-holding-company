// This is a Server Component by default
import { Metadata } from "next";
import { PlaygroundContent } from "@/components/observatory/playground-content";

export const metadata: Metadata = {
  title: "Playground | Observatory",
  description: "Development and testing environment",
};

export default function PlaygroundPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PlaygroundContent />
    </div>
  );
}
