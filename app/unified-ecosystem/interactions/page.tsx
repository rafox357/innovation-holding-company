"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

const interactionScenarios = [
  {
    title: "Cross-Subsidiary Project Collaboration",
    description:
      "How The Blueprint Platform facilitates seamless collaboration between different Hubverse subsidiaries on a joint project.",
    steps: [
      "Project initiation through the Innovation Incubator",
      "Resource allocation and task assignment via the Core Integration Engine",
      "Real-time progress tracking and decision support from the AI System",
      "Secure data sharing and contract execution through the Blockchain Ledger",
      "Integration of physical assets and environments via the IoT Hub",
      "Client interaction and feedback through the Client Interface Portal",
    ],
  },
  {
    title: "Adaptive Supply Chain Management",
    description:
      "An example of how The Blueprint Platform optimizes supply chain operations across multiple subsidiaries.",
    steps: [
      "Real-time inventory and demand data collection via the IoT Integration Hub",
      "Predictive analytics and demand forecasting by the AI Decision Support System",
      "Automated supplier contract negotiations and executions via the Blockchain Ledger",
      "Cross-subsidiary resource sharing coordinated by the Core Integration Engine",
      "Real-time supply chain visibility for clients through the Client Interface Portal",
    ],
  },
  {
    title: "Rapid Innovation Cycle",
    description:
      "How The Blueprint Platform accelerates the process of turning ideas into marketable products or services.",
    steps: [
      "Idea generation and initial concept development in the Innovation Incubator",
      "Cross-subsidiary expertise and resource allocation via the Core Integration Engine",
      "AI-driven market analysis and product optimization",
      "Rapid prototyping and testing using IoT-connected devices",
      "Secure IP management and licensing through the Blockchain Ledger",
      "Seamless transition to product launch and client access via the Client Interface Portal",
    ],
  },
]

export default function BlueprintInteractions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Interactions", href: "/unified-ecosystem/interactions" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: Interactions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how the components of The Blueprint Platform interact to create a seamlessly integrated ecosystem,
          driving innovation and efficiency across all Hubverse operations.
        </p>
      </motion.div>

      {interactionScenarios.map((scenario, index) => (
        <Card key={index} className="mb-8">
          <CardHeader>
            <CardTitle>{scenario.title}</CardTitle>
            <CardDescription>{scenario.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">Interaction Flow:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              {scenario.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>The Power of Seamless Interactions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The true strength of The Blueprint Platform lies in the seamless interactions between its components. These
            interactions create a synergistic effect, enabling Hubverse to operate with unprecedented efficiency,
            adaptability, and innovation.
          </p>
          <p className="mb-4">
            By facilitating real-time data flow, automated decision-making, and cross-subsidiary collaboration, The
            Blueprint Platform breaks down traditional organizational silos and creates a truly unified business
            ecosystem.
          </p>
          <p>
            This interconnected approach not only streamlines internal operations but also provides our clients with a
            seamless, integrated experience across all Hubverse services and subsidiaries.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/unified-ecosystem/benefits">
                Explore Blueprint Benefits <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

