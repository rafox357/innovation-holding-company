"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Server, Database, Cloud, Lock, Zap } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageFeedback } from "@/components/page-feedback"

const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", description: "A JavaScript library for building user interfaces", icon: Code },
      { name: "Next.js", description: "The React Framework for Production", icon: Zap },
      { name: "TypeScript", description: "Typed superset of JavaScript", icon: Code },
      { name: "Tailwind CSS", description: "A utility-first CSS framework", icon: Code },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 JavaScript engine", icon: Server },
      { name: "Express.js", description: "Fast, unopinionated, minimalist web framework for Node.js", icon: Server },
      { name: "GraphQL", description: "A query language for APIs", icon: Database },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "PostgreSQL", description: "Advanced open source relational database", icon: Database },
      { name: "MongoDB", description: "Document-based distributed database", icon: Database },
      { name: "Redis", description: "In-memory data structure store", icon: Database },
    ],
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "Docker", description: "Platform for developing, shipping, and running applications", icon: Cloud },
      { name: "Kubernetes", description: "Container orchestration platform", icon: Cloud },
      { name: "AWS", description: "Comprehensive cloud computing platform", icon: Cloud },
    ],
  },
  {
    category: "Security",
    technologies: [
      { name: "OAuth 2.0", description: "Industry-standard protocol for authorization", icon: Lock },
      { name: "JWT", description: "JSON Web Tokens for secure data transmission", icon: Lock },
      { name: "SSL/TLS", description: "Cryptographic protocols for secure communication", icon: Lock },
    ],
  },
]

export default function TechnologyStack() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Blueprint Platform Technology Stack</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Cutting-edge technologies powering the future of entrepreneurship
        </p>
      </motion.div>

      <Tabs defaultValue={techStack[0].category.toLowerCase()} className="space-y-8">
        <TabsList className="flex flex-wrap justify-center">
          {techStack.map((category) => (
            <TabsTrigger key={category.category} value={category.category.toLowerCase()}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {techStack.map((category) => (
          <TabsContent key={category.category} value={category.category.toLowerCase()}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.technologies.map((tech, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <tech.icon className="mr-2 h-5 w-5" />
                      {tech.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                    <Badge variant="outline">{category.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Why Our Tech Stack Matters</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scalability: Our infrastructure is designed to grow with your business</li>
            <li>Security: Enterprise-grade security measures protect your data and operations</li>
            <li>Performance: Optimized for speed and efficiency across all applications</li>
            <li>Flexibility: Easily adaptable to various business models and industries</li>
            <li>Future-proof: Constantly updated to leverage the latest technological advancements</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Build on a Solid Foundation?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Launch your business with confidence using our state-of-the-art technology stack.
        </p>
        <Button size="lg" asChild>
          <Link href="/blueprint-platform/contact">
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="mt-12">
        <PageFeedback />
      </div>
    </div>
  )
}

