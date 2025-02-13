"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Innovating for a{" "}
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Better Future
                </span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                We invest in groundbreaking technologies and visionary companies that shape tomorrow's innovations.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-8">
                <div className="text-4xl font-bold">$500M+</div>
                <div className="mt-2 text-sm text-muted-foreground">Assets Under Management</div>
              </div>
              <div className="rounded-lg border bg-card p-8">
                <div className="text-4xl font-bold">25+</div>
                <div className="mt-2 text-sm text-muted-foreground">Portfolio Companies</div>
              </div>
              <div className="rounded-lg border bg-card p-8">
                <div className="text-4xl font-bold">12</div>
                <div className="mt-2 text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="rounded-lg border bg-card p-8">
                <div className="text-4xl font-bold">93%</div>
                <div className="mt-2 text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
    </section>
  )
}
