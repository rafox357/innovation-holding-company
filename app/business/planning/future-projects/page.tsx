"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, Rocket, Clock } from "lucide-react"

const projects = [
  {
    name: "Project Aurora",
    description: "Next-generation AI infrastructure for sustainable energy management",
    status: "Planning",
    progress: 15,
    timeline: "Q3 2025",
    category: "Innovation",
    lead: "Dr. Sarah Chen",
  },
  {
    name: "Project Nexus",
    description: "Integrated financial services platform with blockchain technology",
    status: "Development",
    progress: 45,
    timeline: "Q4 2025",
    category: "FinTech",
    lead: "Michael Rodriguez",
  },
  {
    name: "Project Quantum",
    description: "Advanced quantum computing solutions for complex calculations",
    status: "Research",
    progress: 30,
    timeline: "Q2 2026",
    category: "Research",
    lead: "Dr. James Wilson",
  },
  {
    name: "Project Atlas",
    description: "Global supply chain optimization using AI and IoT",
    status: "Planning",
    progress: 20,
    timeline: "Q1 2026",
    category: "Operations",
    lead: "Emma Thompson",
  },
]

export default function FutureProjectsPage() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Future Projects</h1>
          <p className="text-xl text-muted-foreground">
            Innovative initiatives shaping tomorrow&apos;s technology landscape
          </p>
        </div>

        {/* Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle>Innovation Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8</div>
              <p className="text-muted-foreground">Active Projects</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Rocket className="h-6 w-6 text-primary" />
              <CardTitle>Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
              <p className="text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Clock className="h-6 w-6 text-primary" />
              <CardTitle>Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-muted-foreground">Upcoming</p>
            </CardContent>
          </Card>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <Card key={project.name}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge
                      variant={
                        project.status === "Development"
                          ? "default"
                          : project.status === "Research"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Project Lead: {project.lead}</span>
                    <span>Timeline: {project.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
