"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { memo } from "react"

const Hero = memo(() => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 cosmic-title glow">
            Welcome to Hubverse
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Empowering entrepreneurs and driving innovation
          </motion.p>

          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert mx-auto max-w-3xl"
          >
            <p className="text-lg mb-6">
              Hubverse is a pioneering holding company at the intersection of innovation and entrepreneurship. We
              cultivate groundbreaking ideas, nurture emerging businesses, and create synergies across our diverse
              portfolio of subsidiaries.
            </p>
            <p className="text-lg mb-8">
              Through our unique ecosystem, we combine technological advancement with sustainable business practices,
              fostering an environment where visionary entrepreneurs can transform their ideas into impactful
              ventures.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Link
              href="/explore"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'
export default Hero
