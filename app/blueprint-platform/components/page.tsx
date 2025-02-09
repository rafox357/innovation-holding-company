"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const blueprintComponents = [
  {
    name: "Core Integration Engine",
    description:
      "The heart of The Blueprint Platform, orchestrating data flow and process integration across all subsidiaries.",
    features: [
      "Real-time data synchronization",
      "Intelligent workflow management",
      "Cross-subsidiary process optimization",
    ],
  },
  {
    name: "AI Decision Support System",
    description: "Advanced artificial intelligence that provides data-driven insights and recommendations.",
    features: ["Predictive analytics", "Automated decision-making processes", "Continuous learning and improvement"],
  },
  {
    name: "Blockchain Ledger",
    description: "Ensures data integrity, transparency, and secure smart contract execution across the platform.",
    features: ["Immutable transaction records", "Automated contract enforcement", "Decentralized data storage"],
  },
  {
    name: "IoT Integration Hub",
    description: "Connects and manages IoT devices across Hubverse subsidiaries for real-time monitoring and control.",
    features: [
      "Device management and data collection",
      "Real-time analytics and alerts",
      "Automated response triggers",
    ],
  },
  {
    name: "Client Interface Portal",
    description: "A unified access point for clients to interact with all Hubverse services and subsidiaries.",
    features: [
      "Single sign-on across all services",
      "Personalized dashboard and recommendations",
      "Seamless cross-subsidiary service integration",
    ],
  },
  {
    name: "Innovation Incubator",
    description: "A virtual environment for cross-subsidiary collaboration and rapid prototyping of new ideas.",
    features: [
      "Virtual brainstorming and ideation tools",
      "Rapid prototyping and simulation capabilities",
      "Cross-functional team collaboration spaces",
    ],
  },
]

export default function BlueprintComponents() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: Components</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the core components that power The Blueprint Platform, enabling seamless integration and innovation
          across all Hubverse subsidiaries and services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {blueprintComponents.map((component, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc pl-6 space-y-2">
                {component.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How The Blueprint Components Work Together</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The power of The Blueprint Platform lies in the seamless integration and interaction of its components. Each
            component is designed to complement and enhance the others, creating a synergistic ecosystem that is greater
            than the sum of its parts.
          </p>
          <p className="mb-4">
            For example, the Core Integration Engine facilitates data flow between all other components, while the AI
            Decision Support System analyzes this data to provide insights. The Blockchain Ledger ensures the integrity
            of all transactions and data exchanges, and the IoT Integration Hub provides real-time data from physical
            assets and environments.
          </p>
          <p>
            This interconnected system allows for unprecedented levels of automation, insight, and adaptability across
            all Hubverse operations and services.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/blueprint-platform/interactions">
                Explore Component Interactions <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

