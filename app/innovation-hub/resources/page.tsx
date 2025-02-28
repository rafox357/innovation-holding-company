"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const breadcrumbItems = [
  { title: "Innovation Hub", href: "/innovation-hub" },
  { title: "Resources", href: "/innovation-hub/resources" },
];

const resources = [
  {
    title: "Innovation Toolkit",
    description: "Essential tools and frameworks for innovation",
    href: "/innovation-hub/resources/toolkit",
    category: "Tools",
  },
  {
    title: "Best Practices",
    description: "Proven methodologies and approaches",
    href: "/innovation-hub/resources/best-practices",
    category: "Guides",
  },
  {
    title: "Case Studies",
    description: "Real-world innovation success stories",
    href: "/innovation-hub/resources/case-studies",
    category: "Learning",
  },
  {
    title: "Innovation Blog",
    description: "Latest insights and thought leadership",
    href: "/innovation-hub/resources/blog",
    category: "Content",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-4xl font-bold mb-8">Innovation Resources</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Access our comprehensive collection of innovation resources, tools, and
          best practices. Whether you're starting your innovation journey or
          looking to enhance your existing processes, we have resources to help
          you succeed.
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
