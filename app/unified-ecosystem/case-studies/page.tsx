"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const caseStudies = [
  {
    title: "Rapid Product Development",
    category: "Innovation",
    description: "How The Blueprint Platform accelerated the development of a revolutionary EdTech solution",
    challenge:
      "Anexo, our education subsidiary, identified a market need for an AI-powered adaptive learning platform, but faced challenges in rapid development and integration with existing systems.",
    solution: "Leveraging The Blueprint Platform, Anexo was able to:",
    outcomes: [
      "Reduce development time by 40% through cross-subsidiary collaboration",
      "Seamlessly integrate AI capabilities from our tech subsidiaries",
      "Achieve real-time data synchronization across all platform components",
      "Launch a market-ready product in just 6 months",
    ],
    impact:
      "The resulting product became Anexo's fastest-growing offering, capturing 15% market share within the first year and significantly boosting Hubverse's EdTech presence.",
  },
  {
    title: "Optimized Supply Chain Management",
    category: "Efficiency",
    description: "Transforming Ponce Industries' supply chain with The Blueprint Platform",
    challenge:
      "Ponce Industries struggled with supply chain inefficiencies, leading to increased costs and delivery delays across multiple product lines.",
    solution: "Implementation of The Blueprint Platform enabled:",
    outcomes: [
      "Real-time inventory tracking and demand forecasting",
      "AI-driven supplier selection and contract negotiations",
      "Automated order processing and logistics optimization",
      "Seamless integration with other Hubverse subsidiaries for resource sharing",
    ],
    impact:
      "Ponce Industries saw a 30% reduction in supply chain costs, 50% decrease in delivery times, and a 25% improvement in customer satisfaction scores within the first year of implementation.",
  },
  {
    title: "Cross-Subsidiary Financial Services Innovation",
    category: "Synergy",
    description: "Creating a unified financial ecosystem across Hubverse subsidiaries",
    challenge:
      "Thryvus & Co. aimed to offer comprehensive financial services leveraging data and capabilities from across Hubverse, but faced integration and compliance challenges.",
    solution: "The Blueprint Platform facilitated:",
    outcomes: [
      "Secure data sharing and analysis across all Hubverse financial operations",
      "AI-powered risk assessment and product recommendation engine",
      "Blockchain-based transaction processing for enhanced security and transparency",
      "Unified client portal for accessing all Hubverse financial services",
    ],
    impact:
      "Thryvus & Co. launched an industry-first 'Financial Ecosystem as a Service', resulting in a 200% increase in cross-selling opportunities and a 45% boost in client retention rates.",
  },
  {
    title: "Revolutionizing Customer Experience",
    category: "Client Satisfaction",
    description: "Enhancing client interactions across all Hubverse touchpoints",
    challenge:
      "Hubverse faced difficulties in providing a consistent, high-quality customer experience across its diverse range of subsidiaries and services.",
    solution: "Implementation of The Blueprint Platform's unified client interface allowed for:",
    outcomes: [
      "Single sign-on access to all Hubverse services",
      "AI-driven personalized recommendations and support",
      "Real-time issue resolution through cross-subsidiary collaboration",
      "Seamless data portability and service integration for clients",
    ],
    impact:
      "Customer satisfaction scores increased by 60%, client retention improved by 35%, and cross-subsidiary service adoption grew by 150% within 18 months of implementation.",
  },
]

export default function BlueprintCaseStudies() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Case Studies", href: "/unified-ecosystem/case-studies" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore real-world examples of how The Blueprint Platform is transforming Hubverse operations and delivering
          unprecedented value to our clients.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList>
          <TabsTrigger value="all">All Case Studies</TabsTrigger>
          <TabsTrigger value="innovation">Innovation</TabsTrigger>
          <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
          <TabsTrigger value="synergy">Synergy</TabsTrigger>
          <TabsTrigger value="client-satisfaction">Client Satisfaction</TabsTrigger>
        </TabsList>

        {["all", "innovation", "efficiency", "synergy", "client-satisfaction"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies
                .filter((study) => category === "all" || study.category.toLowerCase() === category)
                .map((study, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{study.title}</CardTitle>
                      <CardDescription>{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-semibold mb-2">Challenge:</h3>
                      <p className="mb-4">{study.challenge}</p>
                      <h3 className="font-semibold mb-2">Solution:</h3>
                      <p className="mb-2">{study.solution}</p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        {study.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex}>{outcome}</li>
                        ))}
                      </ul>
                      <h3 className="font-semibold mb-2">Impact:</h3>
                      <p>{study.impact}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Experience The Blueprint Platform Advantage</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            These case studies demonstrate the transformative power of The Blueprint Platform across various aspects of
            Hubverse operations. From accelerating innovation and optimizing efficiency to enhancing synergies and
            revolutionizing client experiences, The Blueprint Platform is driving unprecedented growth and value
            creation.
          </p>
          <p className="mb-6">
            Discover how The Blueprint Platform can transform your business and unlock new possibilities for growth and
            innovation.
          </p>
          <Button size="lg">Request a Personalized Demo</Button>
        </CardContent>
      </Card>
    </div>
  )
}

