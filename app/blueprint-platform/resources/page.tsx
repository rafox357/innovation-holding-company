"use client";

import type { Metadata } from "next"
import { BlueprintLayout } from "@/components/blueprint-layout"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Video, Book, Presentation } from "lucide-react"

const resources = [
  {
    title: "Getting Started Guide",
    description: "A comprehensive guide to help you begin your journey with the Blueprint Platform.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides covering various aspects of the Blueprint Platform.",
    icon: Video,
    link: "#",
  },
  {
    title: "API Documentation",
    description: "Detailed documentation for developers looking to integrate with the Blueprint Platform.",
    icon: Book,
    link: "#",
  },
  {
    title: "Case Studies",
    description: "Real-world examples of how organizations have successfully implemented the Blueprint Platform.",
    icon: Presentation,
    link: "/blueprint-platform/case-studies",
  },
  {
    title: "Best Practices Guide",
    description: "Learn how to maximize the benefits of the Blueprint Platform with our best practices.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Community Forum",
    description: "Connect with other Blueprint Platform users, share insights, and get help from the community.",
    icon: FileText,
    link: "#",
  },
]

export default function ResourcesPage() {
  return (
    <BlueprintLayout>
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      <p className="text-xl mb-8">
        Explore our comprehensive collection of resources to help you make the most of the Blueprint Platform. From
        getting started guides to in-depth technical documentation, we've got you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <resource.icon className="mr-2 h-6 w-6" />
                {resource.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{resource.description}</CardDescription>
              <Button asChild>
                <a href={resource.link}>
                  Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Need Additional Support?</h2>
        <p className="mb-4">
          Our support team is always ready to assist you with any questions or challenges you may face while using the
          Blueprint Platform.
        </p>
        <Button asChild>
          <a href="/contact">
            Contact Support <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </BlueprintLayout>
  )
}
