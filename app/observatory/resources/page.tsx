"use client";

import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Observatory | Hubverse",
  description: "Access project management resources and tools.",
};

const resources = [
  {
    title: "Project Templates",
    description: "Standardized templates for project documentation",
    href: "/observatory/resources/templates",
    category: "Documentation",
  },
  {
    title: "Analytics Tools",
    description: "Tools for data analysis and visualization",
    href: "/observatory/resources/analytics-tools",
    category: "Tools",
  },
  {
    title: "Best Practices",
    description: "Project management best practices and guidelines",
    href: "/observatory/resources/best-practices",
    category: "Guides",
  },
  {
    title: "Training Materials",
    description: "Educational resources for project teams",
    href: "/observatory/resources/training",
    category: "Learning",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Observatory Resources</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Access our comprehensive collection of project management resources,
          tools, and templates. These resources are designed to help your team
          work more effectively and deliver successful projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <Card key={resource.href} className="p-6">
            <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm mb-4">
              {resource.category}
            </div>
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-muted-foreground mb-4">{resource.description}</p>
            <Button asChild>
              <Link href={resource.href}>Access Resource</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
