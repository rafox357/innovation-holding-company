"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { BlueprintInteractiveDiagram } from "@/components/blueprint-interactive-diagram"

export default function BlueprintPlatformOverview() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Overview", href: "/unified-ecosystem/overview" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: Overview</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how Hubverse's revolutionary Blueprint Platform creates a seamlessly interconnected business
          ecosystem, driving innovation and growth across all our subsidiaries and services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>The Blueprint Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Blueprint Platform represents a paradigm shift in how Hubverse operates. It's not just a unified
              ecosystem; it's a comprehensive framework that interconnects all aspects of our business, from ideation to
              execution.
            </p>
            <p>
              By leveraging cutting-edge technologies and innovative methodologies, The Blueprint Platform enables
              unprecedented levels of collaboration, efficiency, and innovation across all our subsidiaries and
              services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Principles of The Blueprint</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Holistic Integration: All business processes and subsidiaries are interconnected</li>
              <li>Data-Driven Synergy: Real-time data sharing and analytics across the entire platform</li>
              <li>Adaptive Innovation: Continuous evolution based on market trends and internal insights</li>
              <li>Seamless Client Experience: One-stop access to all Hubverse services</li>
              <li>Scalable Architecture: Effortless integration of new subsidiaries and technologies</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <BlueprintInteractiveDiagram />

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>The Blueprint Platform Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Blueprint Platform is built on a state-of-the-art technological foundation that enables:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Microservices architecture for flexible and scalable operations</li>
            <li>AI-driven decision-making and process optimization</li>
            <li>Blockchain-based data integrity and smart contract execution</li>
            <li>IoT integration for real-time monitoring and responsive actions</li>
            <li>Advanced analytics and machine learning for predictive insights</li>
          </ul>
          <p>
            This revolutionary approach positions Hubverse at the forefront of business innovation, enabling us to
            tackle complex challenges and seize opportunities with unprecedented agility and insight.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Blueprint Components</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Explore the core components of The Blueprint Platform and how they work together to create a seamless,
              integrated business ecosystem.
            </p>
            <Button asChild>
              <Link href="/unified-ecosystem/components">
                View Components <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blueprint Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Discover how different parts of The Blueprint Platform interact to drive innovation, efficiency, and
              create unique value propositions.
            </p>
            <Button asChild>
              <Link href="/unified-ecosystem/interactions">
                Explore Interactions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blueprint Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Learn about the transformative advantages The Blueprint Platform brings to Hubverse, our clients, and the
              broader business landscape.
            </p>
            <Button asChild>
              <Link href="/unified-ecosystem/benefits">
                See Benefits <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Experience the Future of Business with The Blueprint Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Blueprint Platform represents a revolutionary approach to business operations and collaboration. We
            invite you to explore how this innovative framework can transform your organization and drive unprecedented
            growth and efficiency.
          </p>
          <Button size="lg">Request a Blueprint Demo</Button>
        </CardContent>
      </Card>
    </div>
  )
}

