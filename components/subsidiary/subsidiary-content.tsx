"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

interface SubsidiaryContentProps {
  features: Array<{
    title: string
    description: string
  }>
  services: Array<string>
  ctaText?: string
  ctaLink?: string
}

export function SubsidiaryContent({
  features,
  services,
  ctaText = "Learn More",
  ctaLink = "#",
}: SubsidiaryContentProps) {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-lg"
              >
                <Check className="h-6 w-6 text-primary" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="mt-8" asChild>
            <a href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
