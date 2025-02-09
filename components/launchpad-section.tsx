"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Book, Users, Code, FileText, Video } from "lucide-react"

const resources = {
  tools: [
    {
      id: 1,
      name: "AI Development Kit",
      category: "Technology",
      status: "Available",
      description: "Comprehensive toolkit for integrating AI capabilities into your projects.",
      documentation: "https://docs.hubverse.ai",
      features: ["Model Integration", "Training Pipeline", "Inference API"],
      requirements: ["Python 3.8+", "GPU Support", "Docker"],
      version: "2.1.0",
    },
    {
      id: 2,
      name: "Blockchain Framework",
      category: "Technology",
      status: "Beta",
      description: "Framework for building and deploying smart contracts and DApps.",
      documentation: "https://blockchain.hubverse.dev",
      features: ["Smart Contracts", "Web3 Integration", "Testing Suite"],
      requirements: ["Node.js 16+", "Solidity", "Web3.js"],
      version: "0.9.0",
    },
    {
      id: 3,
      name: "Cloud Infrastructure Kit",
      category: "DevOps",
      status: "Available",
      description: "Tools for deploying and managing cloud infrastructure.",
      documentation: "https://cloud.hubverse.dev",
      features: ["Auto-scaling", "Load Balancing", "Monitoring"],
      requirements: ["AWS/GCP/Azure", "Terraform", "Kubernetes"],
      version: "3.0.0",
    },
  ],
  learning: [
    {
      id: 1,
      name: "AI Fundamentals",
      category: "Course",
      duration: "6 weeks",
      level: "Intermediate",
      instructor: "Dr. Sarah Chen",
      topics: ["Machine Learning", "Neural Networks", "Deep Learning"],
      certification: true,
    },
    {
      id: 2,
      name: "Blockchain Development",
      category: "Course",
      duration: "8 weeks",
      level: "Advanced",
      instructor: "Alex Rivera",
      topics: ["Cryptocurrency", "Smart Contracts", "DApp Development"],
      certification: true,
    },
    {
      id: 3,
      name: "Cloud Architecture",
      category: "Course",
      duration: "4 weeks",
      level: "Beginner",
      instructor: "James Wilson",
      topics: ["Cloud Basics", "Infrastructure", "Security"],
      certification: true,
    },
  ],
  mentorship: [
    {
      id: 1,
      name: "AI Innovation Lab",
      category: "Program",
      duration: "3 months",
      mentors: 5,
      spots: 20,
      focus: "AI/ML Projects",
      benefits: ["1:1 Mentoring", "Project Review", "Network Access"],
    },
    {
      id: 2,
      name: "Blockchain Accelerator",
      category: "Program",
      duration: "6 months",
      mentors: 3,
      spots: 10,
      focus: "Web3 Projects",
      benefits: ["Technical Guidance", "Industry Connects", "Funding Access"],
    },
    {
      id: 3,
      name: "Cloud Excellence",
      category: "Program",
      duration: "2 months",
      mentors: 4,
      spots: 15,
      focus: "Cloud Projects",
      benefits: ["Architecture Review", "Best Practices", "Career Guidance"],
    },
  ],
  documentation: [
    {
      id: 1,
      type: "Guide",
      title: "Getting Started with AI Kit",
      format: "PDF",
      pages: 45,
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      type: "API Reference",
      title: "Blockchain Framework API",
      format: "Web",
      pages: null,
      lastUpdated: "2024-01-20",
    },
    {
      id: 3,
      type: "Tutorial",
      title: "Cloud Infrastructure Setup",
      format: "Video",
      duration: "2 hours",
      lastUpdated: "2024-01-10",
    },
  ],
}

export function LaunchpadSection() {
  const [activeTab, setActiveTab] = useState("tools")

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Code className="h-5 w-5 mr-2" />
              Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{resources.tools.length}</p>
            <p className="text-sm text-muted-foreground">Development Tools</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Book className="h-5 w-5 mr-2" />
              Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{resources.learning.length}</p>
            <p className="text-sm text-muted-foreground">Learning Resources</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{resources.mentorship.length}</p>
            <p className="text-sm text-muted-foreground">Mentorship Programs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Docs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{resources.documentation.length}</p>
            <p className="text-sm text-muted-foreground">Documentation</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="tools">Development Tools</TabsTrigger>
          <TabsTrigger value="learning">Learning Resources</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship Programs</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.tools.map((tool) => (
              <Card key={tool.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>{tool.category}</CardDescription>
                    </div>
                    <Badge variant={tool.status === "Available" ? "default" : "secondary"}>{tool.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, index) => (
                          <Badge key={index} variant="outline">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Requirements</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.requirements.map((req, index) => (
                          <Badge key={index} variant="secondary">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">v{tool.version}</Badge>
                      <Button variant="outline" size="sm" className="ml-auto">
                        <ArrowUpRight className="h-4 w-4 mr-2" />
                        Documentation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="learning" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.learning.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>{course.category}</CardDescription>
                    </div>
                    <Badge>{course.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Instructor:</span>
                      <span>{course.instructor}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Topics Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, index) => (
                          <Badge key={index} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">
                      <Video className="h-4 w-4 mr-2" />
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentorship" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.mentorship.map((program) => (
              <Card key={program.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <CardDescription>{program.category}</CardDescription>
                    </div>
                    <Badge variant="outline">{program.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Mentors:</span>
                      <span>{program.mentors} Available</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Spots:</span>
                      <span>{program.spots} Total</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.benefits.map((benefit, index) => (
                          <Badge key={index} variant="secondary">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documentation" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.documentation.map((doc) => (
              <Card key={doc.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                      <CardDescription>{doc.type}</CardDescription>
                    </div>
                    <Badge>{doc.format}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {doc.pages && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Pages:</span>
                        <span>{doc.pages}</span>
                      </div>
                    )}
                    {doc.duration && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>{doc.duration}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Updated:</span>
                      <span>{new Date(doc.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      View Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

