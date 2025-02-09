"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

const benefitCategories = [
  {
    title: "Operational Efficiency",
    benefits: [
      "Streamlined cross-subsidiary processes",
      "Automated workflow optimization",
      "Real-time resource allocation and management",
      "Reduced operational costs through AI-driven efficiencies",
    ],
  },
  {
    title: "Innovation Acceleration",
    benefits: [
      "Rapid ideation and prototyping capabilities",
      "Cross-pollination of ideas across subsidiaries",
      "AI-powered market trend analysis and product development",
      "Faster time-to-market for new products and services",
    ],
  },
  {
    title: "Enhanced Decision Making",
    benefits: [
      "Data-driven insights from across the entire ecosystem",
      "Predictive analytics for proactive problem-solving",
      "Real-time performance monitoring and adjustment",
      "Improved risk assessment and management",
    ],
  },
  {
    title: "Improved Client Experience",
    benefits: [
      "Seamless access to all Hubverse services through a single portal",
      "Personalized service recommendations based on AI insights",
      "Faster response times and issue resolution",
      "Transparent and secure transactions via blockchain technology",
    ],
  },
  {
    title: "Scalability and Adaptability",
    benefits: [
      "Easy integration of new subsidiaries and services",
      "Flexible architecture that adapts to changing market needs",
      "Seamless updates and feature rollouts across the platform",
      "Future-proof technology stack ready for emerging innovations",
    ],
  },
]

export default function BlueprintBenefits() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Benefits", href: "/unified-ecosystem/benefits" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: Benefits</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the transformative advantages that The Blueprint Platform brings to Hubverse, our clients, and the
          broader business landscape.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {benefitCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {category.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Realizing the Full Potential of The Blueprint Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The benefits of The Blueprint Platform extend far beyond individual improvements in efficiency or
            innovation. By creating a truly interconnected ecosystem, we unlock synergies that were previously
            impossible in traditional business structures.
          </p>
          <p className="mb-4">
            For Hubverse, this means unprecedented agility in responding to market changes, the ability to leverage the
            full power of our diverse subsidiaries, and a continuous cycle of innovation and improvement driven by
            real-time data and AI insights.
          </p>
          <p className="mb-4">
            For our clients, The Blueprint Platform translates into superior products and services, tailored solutions
            that draw from the full range of Hubverse capabilities, and a seamless, integrated experience across all
            their interactions with our ecosystem.
          </p>
          <p>
            Ultimately, The Blueprint Platform positions Hubverse at the forefront of the next generation of business
            innovation, setting new standards for what's possible in operational excellence, client service, and
            adaptive business models.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/unified-ecosystem/case-studies">
                Explore Blueprint Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

