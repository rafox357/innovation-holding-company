"use client"

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"

// This would typically come from an API or database
const projects = [
  {
    id: 1,
    name: "Revolutionary Learning Platform",
    description: "AI-powered educational platform revolutionizing entrepreneurial skill development",
    subsidiary: "Anexo",
    status: "In Development",
    progress: 64,
    impact: "15,000+ active users, 92% completion rate",
    technologies: ["AI/ML", "React", "Node.js", "AWS"],
    metrics: {
      userGrowth: "+127% YoY",
      revenue: "$2.1M ARR",
      satisfaction: "4.8/5"
    },
    timeline: "Q2 2024",
    team: "Core Development Team",
    category: "Education",
    problemStatement: "Traditional entrepreneurship education lacks personalization and practical application",
    solution: "AI-driven adaptive learning platform with real-world case studies and mentorship",
    marketOpportunity: "Global entrepreneurship education market size of $25B with 15% YoY growth",
    competitiveAdvantage: [
      "AI-powered personalized learning paths",
      "Real-world case studies and practical applications",
      "Integration with industry experts and mentors",
      "Comprehensive analytics and progress tracking"
    ],
    financials: {
      developmentCost: "$1.5M",
      monthlyBurnRate: "$95K",
      projectedRevenue: "$5.2M (Year 1)",
      breakEvenPoint: "16 months"
    },
    risks: [
      {
        category: "Technical",
        description: "Scalability of AI personalization",
        mitigation: "Microservices architecture and cloud-native infrastructure"
      },
      {
        category: "Market",
        description: "Competitive EdTech landscape",
        mitigation: "Focus on unique entrepreneurship niche and strategic partnerships"
      },
      {
        category: "Operational",
        description: "Content quality and updates",
        mitigation: "Established content review process and expert network"
      }
    ],
    website: "https://revolutionary-learning.anexo.com"
  }
  // Add other projects here
]

export default function ProjectDetail() {
  const params = useParams()
  const project = projects.find(p => p.id === Number(params.id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Pipeline Launchpad", href: "/pipeline-launchpad" },
        { label: project.name, href: `/pipeline-launchpad/${project.id}` }
      ]} />

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 cosmic-title glow">{project.name}</h1>
            <p className="text-xl text-muted-foreground">{project.subsidiary}</p>
          </div>
          <Badge variant={project.status === "In Development" ? "default" : "secondary"} className="text-lg">
            {project.status}
          </Badge>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="business">Business Case</TabsTrigger>
          <TabsTrigger value="risks">Risks & Mitigation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
                <CardDescription>Key project information and metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Impact</h3>
                  <p className="text-muted-foreground">{project.impact}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Timeline</h3>
                  <p className="text-muted-foreground">{project.timeline}</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Website</h3>
                  <Button variant="link" className="p-0" asChild>
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      {project.website === "Coming Soon" ? "Website Coming Soon" : "Visit Website"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
                <CardDescription>Current performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <Card key={key}>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold">{value}</div>
                        <p className="text-sm text-muted-foreground">{key}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
              <CardDescription>Technology stack and implementation details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Solution Architecture</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-muted-foreground">{project.team}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Market Analysis</CardTitle>
                <CardDescription>Market opportunity and competitive advantage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Problem Statement</h3>
                  <p className="text-muted-foreground">{project.problemStatement}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-muted-foreground">{project.marketOpportunity}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Competitive Advantages</h3>
                  <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                    {project.competitiveAdvantage.map((advantage, index) => (
                      <li key={index}>{advantage}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Key financial metrics and projections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {Object.entries(project.financials).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risks">
          <Card>
            <CardHeader>
              <CardTitle>Risks & Mitigation Strategies</CardTitle>
              <CardDescription>Key risks and planned mitigation approaches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {project.risks.map((risk, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{risk.category} Risk</CardTitle>
                      <CardDescription>{risk.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">Mitigation Strategy:</h4>
                        <p className="text-muted-foreground">{risk.mitigation}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

