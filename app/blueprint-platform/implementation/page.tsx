"use client";

import type { Metadata } from "next"
import { BlueprintLayout } from "@/components/blueprint-layout"
import { AccordionList } from "@/components/accordion-list"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

const implementationSteps = [
  {
    title: "Assessment",
    description: "Evaluate your current ecosystem and identify areas for improvement.",
  },
  {
    title: "Planning",
    description: "Develop a comprehensive implementation plan tailored to your needs.",
  },
  {
    title: "Integration",
    description: "Seamlessly integrate Blueprint Platform components into your existing systems.",
  },
  {
    title: "Training",
    description: "Provide thorough training to your team on using the Blueprint Platform.",
  },
  {
    title: "Monitoring",
    description: "Continuously monitor and optimize your implementation for best results.",
  },
]

export default function ImplementationPage() {
  return (
    <BlueprintLayout>
      <h1 className="text-4xl font-bold mb-6">Implementation Guide</h1>
      <p className="text-xl mb-8">
        Follow these steps to successfully implement the Blueprint Platform in your organization.
      </p>

      <AccordionList items={implementationSteps} />

      <h2 className="text-2xl font-semibold mt-12 mb-4">Key Considerations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Scalability</CardTitle>
            <CardDescription>Ensure your implementation can grow with your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Plan for future growth</li>
              <li>Use modular components</li>
              <li>Implement flexible architecture</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Prioritize data protection and user privacy</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Implement robust authentication</li>
              <li>Use encryption for sensitive data</li>
              <li>Regularly update and patch systems</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Need Help with Implementation?</h3>
        <p className="mb-4">
          Our team of experts is ready to assist you in seamlessly integrating the Blueprint Platform into your
          ecosystem.
        </p>
        <Button>
          Contact Our Implementation Team <ArrowRight className="ml-2" />
        </Button>
      </div>

      <div className="flex items-center justify-center p-8 bg-green-50 rounded-lg">
        <CheckCircle className="text-green-500 mr-4" size={48} />
        <div>
          <h3 className="text-2xl font-semibold mb-2">Ready to Get Started?</h3>
          <p>Begin your Blueprint Platform implementation journey today!</p>
        </div>
      </div>
    </BlueprintLayout>
  )
}
