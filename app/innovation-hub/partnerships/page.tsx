"use client";

import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Partnerships | Innovation Hub | Hubverse",
  description: "Explore partnership opportunities with Hubverse.",
};

const breadcrumbItems = [
  { title: "Innovation Hub", href: "/innovation-hub" },
  { title: "Partnerships", href: "/innovation-hub/partnerships" },
];

const partnerships = [
  {
    title: "Corporate Partners",
    description: "Strategic partnerships with industry leaders",
    href: "/innovation-hub/partnerships/corporate",
    benefits: [
      "Access to innovation resources",
      "Joint research opportunities",
      "Technology exchange programs",
    ],
  },
  {
    title: "Academic Partners",
    description: "Collaborations with leading research institutions",
    href: "/innovation-hub/partnerships/academic",
    benefits: [
      "Research collaborations",
      "Student internships",
      "Knowledge sharing",
    ],
  },
  {
    title: "Startup Network",
    description: "Connect with innovative startups",
    href: "/innovation-hub/partnerships/startup-network",
    benefits: [
      "Mentorship programs",
      "Investment opportunities",
      "Resource sharing",
    ],
  },
];

export default function PartnershipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-4xl font-bold mb-8">Partnerships</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Join our growing network of partners and collaborate on groundbreaking
          innovations. We believe in the power of partnerships to accelerate
          innovation and create lasting impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partnerships.map((partnership) => (
          <Card key={partnership.href} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{partnership.title}</h3>
            <p className="text-muted-foreground mb-4">{partnership.description}</p>
            <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
              {partnership.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <Button asChild>
              <Link href={partnership.href}>Learn More</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
