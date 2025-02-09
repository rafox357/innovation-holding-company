"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"

const roadmapItems = [
  {
    year: 2024,
    quarters: [
      {
        quarter: "Q2 2024",
        milestone: "Launch Big Bang LMS",
        status: "On Track",
        progress: 75,
        details:
          "Finalize UI/UX, complete beta testing, and prepare marketing campaign for the official launch of our Learning Management System.",
        impact: "Enable scalable online education delivery",
        kpi: "Target: 10,000 active users in first month",
        dependencies: ["AI Integration", "Cloud Infrastructure"],
        risks: ["User adoption", "Technical scalability"],
        objectives: [
          "Complete beta testing with 95% satisfaction rate",
          "Establish partnerships with 5 educational institutions",
          "Achieve 99.9% platform uptime",
        ],
      },
      {
        quarter: "Q3 2024",
        milestone: "Beta Test Cosmic Dark Ages",
        status: "Planning",
        progress: 30,
        details:
          "Begin closed beta testing of our AI-powered personalized learning paths system with select educational institutions.",
        impact: "Revolutionize personalized learning",
        kpi: "Target: 95% student engagement rate",
        dependencies: ["Big Bang LMS", "AI Models"],
        risks: ["AI accuracy", "Data privacy"],
        objectives: [
          "Develop AI learning models",
          "Implement privacy frameworks",
          "Create personalized curriculum system",
        ],
      },
      {
        quarter: "Q4 2024",
        milestone: "Release Proto-Galaxies v1.0",
        status: "On Track",
        progress: 50,
        details: "Launch the first version of our blockchain-based financial services platform.",
        impact: "Democratize access to financial services",
        kpi: "Target: $1M in processed transactions",
        dependencies: ["Blockchain Infrastructure", "Security Audit"],
        risks: ["Regulatory compliance", "Market adoption"],
        objectives: ["Complete security certifications", "Establish banking partnerships", "Launch mobile application"],
      },
    ],
  },
  {
    year: 2025,
    quarters: [
      {
        quarter: "Q1 2025",
        milestone: "Expand Stellar Nurseries Network",
        status: "Planning",
        progress: 15,
        details: "Scale our mentorship platform by partnering with major corporations and universities.",
        impact: "Create global mentorship network",
        kpi: "Target: 1,000 mentor-mentee matches",
        dependencies: ["Platform Scaling", "Partner Network"],
        risks: ["Mentor availability", "Quality control"],
        objectives: ["Develop mentor training program", "Create matching algorithm", "Implement feedback system"],
      },
      {
        quarter: "Q2 2025",
        milestone: "Implement Milky Way Proto-Disk",
        status: "Not Started",
        progress: 0,
        details: "Begin development of our manufacturing optimization platform.",
        impact: "Transform manufacturing efficiency",
        kpi: "Target: 30% cost reduction for clients",
        dependencies: ["IoT Infrastructure", "Data Analytics"],
        risks: ["Integration complexity", "Industry adoption"],
        objectives: [
          "Develop IoT sensor network",
          "Create predictive maintenance system",
          "Implement real-time monitoring",
        ],
      },
    ],
  },
]

export function RoadmapSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((i) => i !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Strategic Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge className="w-full justify-start" variant="outline">
                5 Major Initiatives
              </Badge>
              <Badge className="w-full justify-start" variant="outline">
                2 Year Timeline
              </Badge>
              <Badge className="w-full justify-start" variant="outline">
                3 Core Technologies
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Overall Progress</span>
                  <span className="text-sm">34%</span>
                </div>
                <Progress value={34} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Risk Level</span>
                  <span className="text-sm">Medium</span>
                </div>
                <Progress value={50} className="bg-yellow-200" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Active Projects: 5</p>
              <p className="text-sm text-muted-foreground">Dependencies: 8</p>
              <p className="text-sm text-muted-foreground">Critical Milestones: 3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {roadmapItems.map((yearData) => (
        <div key={yearData.year} className="space-y-4">
          <h3 className="text-2xl font-bold">{yearData.year}</h3>
          {yearData.quarters.map((item) => (
            <Collapsible
              key={item.quarter}
              open={expandedItems.includes(item.quarter)}
              onOpenChange={() => toggleItem(item.quarter)}
            >
              <div className="flex items-center space-x-4 p-2 bg-muted rounded-md">
                <div className="flex-shrink-0 w-24 text-sm font-semibold">{item.quarter}</div>
                <div className="flex-grow">
                  <Progress value={item.progress} className="h-2" />
                </div>
                <div className="flex-shrink-0 w-64">
                  <p className="font-medium">{item.milestone}</p>
                  <Badge
                    variant={
                      item.status === "On Track" ? "default" : item.status === "Planning" ? "secondary" : "outline"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {expandedItems.includes(item.quarter) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Strategic Impact</h4>
                    <p className="text-sm text-muted-foreground">{item.impact}</p>
                    <div className="mt-2">
                      <h5 className="font-medium mb-1">Key Performance Indicator</h5>
                      <Badge variant="outline">{item.kpi}</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dependencies</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.dependencies.map((dep, index) => (
                        <Badge key={index} variant="secondary">
                          <ArrowRight className="h-4 w-4 mr-1" />
                          {dep}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Objectives</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {item.objectives.map((objective, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Factors</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.risks.map((risk, index) => (
                        <Badge key={index} variant="destructive">
                          {risk}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      ))}
    </div>
  )
}

