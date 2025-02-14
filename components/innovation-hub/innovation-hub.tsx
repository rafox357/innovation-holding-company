"use client"

import { motion } from "framer-motion"
import { Rocket, Brain, Lightbulb, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const innovationFeatures = [
  {
    icon: Brain,
    title: "Idea Incubation",
    description: "Transform innovative concepts into viable business solutions",
  },
  {
    icon: Lightbulb,
    title: "Research & Development",
    description: "State-of-the-art facilities and expert guidance for breakthrough discoveries",
  },
  {
    icon: Sparkles,
    title: "Technology Integration",
    description: "Seamless incorporation of cutting-edge technologies",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description: "End-to-end assistance in bringing your innovation to market",
  },
]

function InnovationHub() {
  return (
    <section className="py-16 space-y-12">
      <div className="text-center space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight cosmic-title glow"
        >
          Innovation Hub
        </motion.h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Where groundbreaking ideas meet cutting-edge technology to shape the future of business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {innovationFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-full p-6 cosmic-card rounded-lg hover:border-primary/50 transition-colors">
              <feature.icon className="h-12 w-12 mb-4 cosmic-icon" />
              <h3 className="text-xl font-semibold mb-2 cosmic-text">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/innovation-hub"
            className="inline-flex items-center px-6 py-3 text-lg cosmic-button rounded-lg"
          >
            Explore Innovation Hub <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default InnovationHub
