"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Database,
  Link,
  Users,
  Cpu,
  Globe,
  Boxes,
  VirtualReality,
  Shield,
  BarChart3,
  Network,
  Sparkles,
  Glasses
} from "lucide-react"

const components = [
  {
    name: "Cross-Subsidiary AI",
    icon: Brain,
    description: "Advanced AI system that identifies synergies and collaboration opportunities across subsidiaries.",
    features: [
      "Pattern recognition in cross-subsidiary data",
      "Automated opportunity identification",
      "Risk assessment and mitigation",
      "Resource optimization"
    ]
  },
  {
    name: "Quantum-Secured Data Sharing",
    icon: Shield,
    description: "State-of-the-art quantum encryption for secure data sharing between subsidiaries.",
    features: [
      "Quantum key distribution",
      "Post-quantum cryptography",
      "Real-time security monitoring",
      "Zero-trust architecture"
    ]
  },
  {
    name: "Virtual Collaboration Space",
    icon: Glasses,
    description: "Immersive VR/AR environments for cross-subsidiary meetings and project collaboration.",
    features: [
      "3D project visualization",
      "Virtual meeting rooms",
      "AR data overlay",
      "Gesture-based interaction"
    ]
  },
  {
    name: "Predictive Analytics Engine",
    icon: BarChart3,
    description: "Advanced analytics for forecasting trends and optimizing business operations.",
    features: [
      "Market trend analysis",
      "Resource allocation optimization",
      "Risk prediction",
      "Performance forecasting"
    ]
  },
  {
    name: "Integration Hub",
    icon: Network,
    description: "Central system connecting all subsidiary platforms and technologies.",
    features: [
      "API management",
      "Data transformation",
      "Event processing",
      "Service orchestration"
    ]
  },
  {
    name: "Innovation Incubator",
    icon: Sparkles,
    description: "Platform for rapid prototyping and testing of cross-subsidiary innovations.",
    features: [
      "Idea management",
      "Resource pooling",
      "Progress tracking",
      "Success metrics"
    ]
  }
]

export function BlueprintInteractiveDiagram() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>The Blueprint Platform: Interactive Ecosystem</CardTitle>
        <CardDescription>
          Explore how our advanced technologies work together to create a seamless innovation ecosystem
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <motion.div
              key={component.name}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedComponent(component.name)}
              onHoverStart={() => setHoveredComponent(component.name)}
              onHoverEnd={() => setHoveredComponent(null)}
              className="cursor-pointer"
            >
              <Card
                className={`h-full transition-colors ${
                  selectedComponent === component.name
                    ? "border-primary"
                    : hoveredComponent === component.name
                    ? "border-accent"
                    : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <component.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{component.description}</p>
                  {selectedComponent === component.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <p className="font-medium text-sm text-primary mb-2">Key Features:</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {component.features.map((feature) => (
                          <li key={feature} className="text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
