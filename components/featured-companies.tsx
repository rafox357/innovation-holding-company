"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const companies = [
  {
    name: "TechVision AI",
    description: "Leading AI solutions for enterprise automation",
    logo: "/companies/techvision.svg",
    category: "Artificial Intelligence",
  },
  {
    name: "GreenEnergy Solutions",
    description: "Sustainable energy technology and infrastructure",
    logo: "/companies/greenenergy.svg",
    category: "Clean Tech",
  },
  {
    name: "HealthTech Innovations",
    description: "Revolutionary healthcare technology solutions",
    logo: "/companies/healthtech.svg",
    category: "Healthcare",
  },
  {
    name: "FinTech Global",
    description: "Next-generation financial technology platforms",
    logo: "/companies/fintech.svg",
    category: "Financial Technology",
  },
]

export function FeaturedCompanies() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio Companies</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          We invest in visionary companies that are reshaping industries and creating new possibilities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {companies.map((company, index) => (
          <Card key={company.name} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/50 p-4">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-full bg-primary/10">
                  {/* Replace with actual company logos */}
                  <div className="flex h-full w-full items-center justify-center text-primary">
                    {company.name[0]}
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {company.category}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl">{company.name}</CardTitle>
              <CardDescription className="mt-2.5">{company.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <Button size="lg">View All Portfolio Companies</Button>
      </div>
    </section>
  )
}
