"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function BlueprintPlatform() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/blueprint-platform" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how our revolutionary approach interconnects all aspects of Hubverse, creating a seamless and
          powerful business ecosystem.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Understand the big picture</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Get a high-level view of how our unified ecosystem transforms Hubverse into an interconnected powerhouse.
            </p>
            <Button asChild>
              <Link href="/blueprint-platform/overview">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>Explore the building blocks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dive into the individual components that make up our unified ecosystem and how they function.
            </p>
            <Button asChild>
              <Link href="/blueprint-platform/components">
                Explore Components <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactions</CardTitle>
            <CardDescription>See the synergy in action</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Witness how different parts of the Hubverse ecosystem interact to create unparalleled value.
            </p>
            <Button asChild>
              <Link href="/blueprint-platform/interactions">
                View Interactions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
            <CardDescription>Realize the advantages</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Explore the myriad benefits that our unified ecosystem brings to Hubverse and its clients.
            </p>
            <Button asChild>
              <Link href="/blueprint-platform/benefits">
                See Benefits <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
            <CardDescription>Plan for success</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Learn about the roadmap and steps for implementing this revolutionary ecosystem approach.
            </p>
            <Button asChild>
              <Link href="/blueprint-platform/implementation">
                View Roadmap <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Case Studies</CardTitle>
            <CardDescription>See real-world applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore hypothetical and real-world examples of our unified ecosystem in action.</p>
            <Button asChild>
              <Link href="/blueprint-platform/case-studies">
                Read Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ready to Transform Your Business?</CardTitle>
          <CardDescription>Experience the power of Hubverse's Unified Ecosystem</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our revolutionary approach to business ecosystems can help your company achieve unprecedented levels of
            efficiency, innovation, and growth. Let's explore how Hubverse can transform your operations.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </CardContent>
      </Card>
    </div>
  )
}

