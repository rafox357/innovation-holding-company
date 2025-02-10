"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { RadarChart } from "@/components/charts/radar-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { LineChart } from "@/components/charts/line-chart"

export default function LaunchpadPage() {
  return (
    <div className="container py-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Launchpad: Resources and Tools</h1>
        <p className="text-muted-foreground">
          Empowering innovation with powerful resources
        </p>
      </div>

      {/* Resource Categories */}
      <Tabs defaultValue="technology" className="space-y-4">
        <TabsList>
          <TabsTrigger value="technology">Technology Stack</TabsTrigger>
          <TabsTrigger value="funding">Funding & Incubation</TabsTrigger>
          <TabsTrigger value="expertise">Expertise & Mentorship</TabsTrigger>
        </TabsList>

        <TabsContent value="technology" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ResourceCard
              title="AI & Machine Learning Platform"
              provider="Elementalis"
              description="Comprehensive suite of AI and ML tools"
            />
            <ResourceCard
              title="Cloud Infrastructure"
              provider="Elementalis"
              description="Scalable and secure cloud services"
            />
            <ResourceCard
              title="Data Analytics Suite"
              provider="Elementalis"
              description="Powerful tools for data visualization and BI"
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Analytics Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Section Analytics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Resource Utilization */}
          <Card>
            <CardHeader>
              <CardTitle>Launchpad Resource Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <RadarChart
                data={[
                  {
                    category: "Technology",
                    current: 80,
                    previous: 70,
                  },
                  {
                    category: "Funding",
                    current: 65,
                    previous: 55,
                  },
                  {
                    category: "Mentorship",
                    current: 90,
                    previous: 85,
                  },
                  {
                    category: "Networking",
                    current: 75,
                    previous: 60,
                  },
                  {
                    category: "Market Access",
                    current: 70,
                    previous: 65,
                  },
                  {
                    category: "Talent",
                    current: 85,
                    previous: 75,
                  },
                ]}
              />
            </CardContent>
          </Card>

          {/* Success Rate */}
          <Card>
            <CardHeader>
              <CardTitle>Project Success Rate by Stage</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { stage: "Ideation", rate: 75 },
                  { stage: "Development", rate: 60 },
                  { stage: "Testing", rate: 85 },
                  { stage: "Launch", rate: 70 },
                ]}
              />
            </CardContent>
          </Card>

          {/* Resource Growth */}
          <Card>
            <CardHeader>
              <CardTitle>Resource Growth Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={[
                  { month: "Jan", value: 100 },
                  { month: "Feb", value: 110 },
                  { month: "Mar", value: 120 },
                  { month: "Apr", value: 125 },
                  { month: "May", value: 135 },
                  { month: "Jun", value: 140 },
                ]}
              />
            </CardContent>
          </Card>

          {/* Resource Allocation */}
          <Card>
            <CardHeader>
              <CardTitle>Resource Allocation Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { category: "AI/ML", allocated: 120, used: 100 },
                  { category: "Cloud", allocated: 150, used: 140 },
                  { category: "Data", allocated: 130, used: 120 },
                  { category: "DevOps", allocated: 140, used: 130 },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ResourceCard({
  title,
  provider,
  description,
}: {
  title: string
  provider: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{provider}</p>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Button variant="outline" className="w-full mt-4">
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
