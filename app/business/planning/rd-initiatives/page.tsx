"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, Target, Zap, Award } from "lucide-react"

const initiatives = [
  {
    name: "Green Energy Solutions",
    description: "Developing sustainable energy technologies for our data centers",
    budget: "$25M",
    timeline: "18 months",
    progress: 40,
    status: "In Progress",
    achievements: [
      "Solar integration prototype",
      "Energy efficiency up 30%",
      "Carbon footprint reduced",
    ],
  },
  {
    name: "AI Infrastructure",
    description: "Next-generation AI processing and optimization framework",
    budget: "$35M",
    timeline: "24 months",
    progress: 60,
    status: "Advanced",
    achievements: [
      "Processing speed improved 2x",
      "New neural architecture",
      "Cloud integration complete",
    ],
  },
  {
    name: "Blockchain Platform",
    description: "Enterprise-grade blockchain solution for secure transactions",
    budget: "$20M",
    timeline: "12 months",
    progress: 75,
    status: "Near Complete",
    achievements: [
      "Transaction speed optimized",
      "Security protocols enhanced",
      "Beta testing successful",
    ],
  },
]

export default function RDInitiativesPage() {
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
          <h1 className="text-4xl font-bold mb-4">R&D Initiatives</h1>
          <p className="text-xl text-muted-foreground">
            Driving innovation through strategic research and development
          </p>
        </div>

        {/* R&D Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle>Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-muted-foreground">Major Initiatives</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle>Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">85%</div>
              <p className="text-muted-foreground">Project Completion</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Zap className="h-6 w-6 text-primary" />
              <CardTitle>Innovation Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">92/100</div>
              <p className="text-muted-foreground">Industry Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Award className="h-6 w-6 text-primary" />
              <CardTitle>Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15</div>
              <p className="text-muted-foreground">Industry Awards</p>
            </CardContent>
          </Card>
        </div>

        {/* R&D Initiatives */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Current Initiatives</h2>
          {initiatives.map((initiative) => (
            <Card key={initiative.name}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{initiative.name}</h3>
                      <Badge
                        variant={
                          initiative.status === "Near Complete"
                            ? "default"
                            : initiative.status === "Advanced"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {initiative.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <Progress value={initiative.progress} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="block text-sm text-muted-foreground">Budget</span>
                      <span className="font-medium">{initiative.budget}</span>
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground">Timeline</span>
                      <span className="font-medium">{initiative.timeline}</span>
                    </div>
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground mb-2">Key Achievements</span>
                    <ul className="list-disc list-inside space-y-1">
                      {initiative.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Focus Areas */}
        <Card>
          <CardHeader>
            <CardTitle>Innovation Focus Areas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                Green technologies and environmental solutions
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Digital Transformation</h3>
              <p className="text-muted-foreground">
                Advanced AI and machine learning applications
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Security & Privacy</h3>
              <p className="text-muted-foreground">
                Next-generation security protocols and privacy solutions
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
