<<<<<<< HEAD
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
]

const MotionCard = motion(Card)

export function InvestorRelations() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold cosmic-title glow">Investor Relations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MotionCard
          className="cosmic-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader>
            <CardTitle className="cosmic-title">Financial Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </MotionCard>
        <MotionCard
          className="cosmic-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CardHeader>
            <CardTitle className="cosmic-title">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Revenue: $10.5M</li>
              <li>Net Income: $2.3M</li>
              <li>EPS: $1.15</li>
              <li>Market Cap: $150M</li>
            </ul>
          </CardContent>
        </MotionCard>
      </div>
      <MotionCard
        className="cosmic-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CardHeader>
          <CardTitle className="cosmic-title">Recent News</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Q2 Earnings Call Scheduled</h3>
              <p>Join us on August 15th for our Q2 earnings call. Details to follow.</p>
            </li>
            <li>
              <h3 className="font-semibold">New Strategic Partnership Announced</h3>
              <p>Hubverse partners with TechGiant Inc. to expand our AI capabilities.</p>
            </li>
          </ul>
        </CardContent>
      </MotionCard>
      <div className="flex justify-center">
        <Button className="cosmic-button glow">Download Investor Presentation</Button>
      </div>
    </div>
=======
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
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702
  )
}
