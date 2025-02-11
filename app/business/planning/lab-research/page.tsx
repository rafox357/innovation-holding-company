"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Atom, Brain, Microscope } from 'lucide-react';

const researchAreas = [
  {
    name: "Quantum Computing",
    description: "Developing next-generation quantum computing architectures",
    lead: "Dr. Emily Chen",
    team: 15,
    publications: 8,
    patents: 3,
    progress: 65,
    status: "Active",
  },
  {
    name: "Advanced AI",
    description: "Research in deep learning and neural network optimization",
    lead: "Dr. Michael Brown",
    team: 12,
    publications: 12,
    patents: 5,
    progress: 80,
    status: "Active",
  },
  {
    name: "Nanotechnology",
    description: "Innovative materials and nano-scale engineering",
    lead: "Dr. Sarah Wilson",
    team: 10,
    publications: 6,
    patents: 2,
    progress: 45,
    status: "Active",
  },
]

export default function LabResearchPage() {
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
          <h1 className="text-4xl font-bold mb-4">Lab Research</h1>
          <p className="text-xl text-muted-foreground">
            Cutting-edge research initiatives and breakthroughs
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Microscope className="h-6 w-6 text-primary" />
              <CardTitle>Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15</div>
              <p className="text-muted-foreground">Research Initiatives</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Atom className="h-6 w-6 text-primary" />
              <CardTitle>Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">45</div>
              <p className="text-muted-foreground">This Year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle>Research Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">120</div>
              <p className="text-muted-foreground">Scientists</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Chip className="h-6 w-6 text-primary" />
              <CardTitle>Patents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">25</div>
              <p className="text-muted-foreground">Filed</p>
            </CardContent>
          </Card>
        </div>

        {/* Research Areas */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Research Areas</h2>
          {researchAreas.map((area) => (
            <Card key={area.name}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{area.name}</h3>
                      <Badge variant="default">{area.status}</Badge>
                    </div>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Research Progress</span>
                      <span>{area.progress}%</span>
                    </div>
                    <Progress value={area.progress} />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="block text-muted-foreground">Lead Scientist</span>
                      <span className="font-medium">{area.lead}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Team Size</span>
                      <span className="font-medium">{area.team} researchers</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Publications</span>
                      <span className="font-medium">{area.publications}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Patents</span>
                      <span className="font-medium">{area.patents}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Facilities */}
        <Card>
          <CardHeader>
            <CardTitle>Research Facilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Advanced Computing Lab</h3>
              <p className="text-muted-foreground">
                State-of-the-art quantum computing and AI research facility
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Nanotechnology Center</h3>
              <p className="text-muted-foreground">
                Specialized labs for nanomaterial research and development
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Innovation Hub</h3>
              <p className="text-muted-foreground">
                Collaborative space for cross-disciplinary research
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
