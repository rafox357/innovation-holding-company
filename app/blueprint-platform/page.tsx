"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PageFeedback } from "@/components/page-feedback"
import { BlueprintOverview } from "@/components/blueprint-overview"
import { BlueprintInteractiveDiagram } from "@/components/blueprint-interactive-diagram"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function BlueprintPlatform() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your fast-track to entrepreneurial success. We build, you scale.
        </p>
      </motion.div>
      <BlueprintOverview />
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="tech-stack">Technology Stack</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>The Blueprint Platform Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <BlueprintInteractiveDiagram />
              <p className="mt-4">
                The Blueprint Platform represents a paradigm shift in how Hubverse operates. It's not just a unified
                ecosystem; it's a comprehensive framework that interconnects all aspects of our business, from ideation
                to execution.
              </p>
              <p className="mt-2">
                By leveraging cutting-edge technologies and innovative methodologies, The Blueprint Platform enables
                unprecedented levels of collaboration, efficiency, and innovation across all our subsidiaries and
                services.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Key Principles of The Blueprint</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Holistic Integration: All business processes and subsidiaries are interconnected</li>
                <li>Data-Driven Synergy: Real-time data sharing and analytics across the entire platform</li>
                <li>Adaptive Innovation: Continuous evolution based on market trends and internal insights</li>
                <li>Seamless Client Experience: One-stop access to all Hubverse services</li>
                <li>Scalable Architecture: Effortless integration of new subsidiaries and technologies</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Platform Adoption</h3>
                <div className="flex items-center space-x-4">
                  <Progress value={75} className="w-full" />
                  <span className="text-sm font-medium">75% Complete</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>Blueprint Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
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
                    description:
                      "Advanced artificial intelligence that provides data-driven insights and recommendations.",
                    features: [
                      "Predictive analytics",
                      "Automated decision-making processes",
                      "Continuous learning and improvement",
                    ],
                  },
                  {
                    name: "Blockchain Ledger",
                    description:
                      "Ensures data integrity, transparency, and secure smart contract execution across the platform.",
                    features: [
                      "Immutable transaction records",
                      "Automated contract enforcement",
                      "Decentralized data storage",
                    ],
                  },
                  {
                    name: "IoT Integration Hub",
                    description:
                      "Connects and manages IoT devices across Hubverse subsidiaries for real-time monitoring and control.",
                    features: [
                      "Device management and data collection",
                      "Real-time analytics and alerts",
                      "Automated response triggers",
                    ],
                  },
                ].map((component, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{component.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{component.description}</p>
                      <h4 className="font-semibold mb-1">Key Features:</h4>
                      <ul className="list-disc pl-5">
                        {component.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactions">
          <Card>
            <CardHeader>
              <CardTitle>Blueprint Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The true strength of The Blueprint Platform lies in the seamless interactions between its components.
                These interactions create a synergistic effect, enabling Hubverse to operate with unprecedented
                efficiency, adaptability, and innovation.
              </p>
              <h3 className="text-xl font-semibold mb-2">Key Interaction Scenarios</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Cross-Subsidiary Project Collaboration",
                    description: "Seamless collaboration between different Hubverse subsidiaries on joint projects.",
                    steps: [
                      "Project initiation through the Innovation Incubator",
                      "Resource allocation via the Core Integration Engine",
                      "Real-time progress tracking with AI Decision Support",
                      "Secure data sharing through the Blockchain Ledger",
                    ],
                  },
                  {
                    title: "Adaptive Supply Chain Management",
                    description: "Optimized supply chain operations across multiple subsidiaries.",
                    steps: [
                      "Real-time inventory data collection via IoT Integration Hub",
                      "Demand forecasting by the AI Decision Support System",
                      "Automated supplier contract executions via Blockchain Ledger",
                      "Cross-subsidiary resource sharing coordination",
                    ],
                  },
                ].map((scenario, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{scenario.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{scenario.description}</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        {scenario.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits">
          <Card>
            <CardHeader>
              <CardTitle>Blueprint Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Increased Efficiency",
                    description:
                      "Streamlined workflows and automated processes reduce operational overhead and accelerate project timelines.",
                    impact: "30% reduction in project completion time",
                  },
                  {
                    title: "Enhanced Collaboration",
                    description:
                      "Seamless data sharing and communication across teams break down silos and foster innovation.",
                    impact: "50% increase in cross-subsidiary collaborations",
                  },
                  {
                    title: "Improved Decision-Making",
                    description:
                      "Data-driven insights and predictive analytics enable more informed and timely decisions.",
                    impact: "25% improvement in strategic decision outcomes",
                  },
                  {
                    title: "Reduced Costs",
                    description:
                      "Optimized resource allocation and reduced operational expenses lead to significant cost savings.",
                    impact: "20% reduction in overall operational costs",
                  },
                  {
                    title: "Increased Innovation",
                    description:
                      "A platform for experimentation and rapid prototyping accelerates the development of new ideas.",
                    impact: "40% increase in new product/service launches",
                  },
                  {
                    title: "Better Client Experience",
                    description:
                      "One-stop access to all Hubverse services provides a seamless and integrated client journey.",
                    impact: "35% improvement in client satisfaction scores",
                  },
                ].map((benefit, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{benefit.description}</p>
                      <Badge variant="secondary">{benefit.impact}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The implementation of The Blueprint Platform is a phased approach, tailored to the specific needs of
                each subsidiary. The process typically involves:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li>Assessment: Evaluating current systems and processes</li>
                <li>Planning: Defining implementation timelines and resource allocation</li>
                <li>Integration: Connecting existing systems to The Blueprint Platform</li>
                <li>Training: Educating employees on the new platform and processes</li>
                <li>Monitoring: Tracking performance and making adjustments as needed</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="case-studies">
          <Card>
            <CardHeader>
              <CardTitle>Case Studies</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Coming soon! We're currently compiling success stories from our early adopters.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We're gathering the most common questions from our users. Check back soon for a comprehensive FAQ.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We're preparing a wealth of resources to help you get the most out of The Blueprint Platform. Stay
                tuned!
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tech-stack">
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore the cutting-edge technologies powering The Blueprint Platform.</p>
              <Button asChild className="mt-4">
                <Link href="/blueprint-platform/technology-stack">
                  View Tech Stack <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Dream Business?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join the ranks of successful entrepreneurs who've turned their ideas into thriving businesses with The
          Blueprint Platform.
        </p>
        <Button size="lg">
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
      <div className="mt-12">
        <PageFeedback />
      </div>
    </div>
  )
}

