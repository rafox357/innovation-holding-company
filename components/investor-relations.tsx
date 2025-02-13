"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

const investmentOpportunities = [
  {
    title: "Early Stage Ventures",
    description: "Seed and Series A investments in promising startups",
    icon: "rocket",
    metrics: [
      { label: "Investment Range", value: "$500K - $5M" },
      { label: "Target Return", value: "10x+" },
      { label: "Investment Period", value: "5-7 years" },
    ],
  },
  {
    title: "Growth Capital",
    description: "Expansion capital for established companies",
    icon: "chart",
    metrics: [
      { label: "Investment Range", value: "$5M - $50M" },
      { label: "Target Return", value: "3-5x" },
      { label: "Investment Period", value: "3-5 years" },
    ],
  },
  {
    title: "Strategic Acquisitions",
    description: "Buyout opportunities in key sectors",
    icon: "target",
    metrics: [
      { label: "Investment Range", value: "$50M+" },
      { label: "Target Return", value: "2-3x" },
      { label: "Investment Period", value: "5-10 years" },
    ],
  },
]

export function InvestorRelations() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Investment Opportunities</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Join us in funding the next generation of groundbreaking companies and technologies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid gap-8 md:grid-cols-3"
      >
        {investmentOpportunities.map((opportunity) => (
          <Card key={opportunity.title} className="relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icons.home className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{opportunity.title}</CardTitle>
              <CardDescription>{opportunity.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {opportunity.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="font-medium">{metric.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <Button asChild size="lg">
          <Link href="/auth/signup">Become an Investor</Link>
        </Button>
      </div>
    </section>
  )
}
