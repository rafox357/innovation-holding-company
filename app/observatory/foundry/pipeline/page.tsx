"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart } from "@/components/charts/bar-chart"
import { LineChart } from "@/components/charts/line-chart"

export default function PipelinePage() {
  return (
    <div className="container py-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Project Pipeline</h1>
        <p className="text-muted-foreground">
          Track projects through our development process
        </p>
      </div>

      {/* Pipeline Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Ideation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ideation</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectCard
              title="Sustainable Agriculture Monitoring System"
              description="IoT-based system for monitoring and optimizing agricultural practices"
              progress={10}
              priority="Low"
              team={["E", "F", "G"]}
            />
          </CardContent>
        </Card>

        {/* Prototyping */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Prototyping</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Empty for now */}
          </CardContent>
        </Card>

        {/* Development */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Development</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ProjectCard
              title="Smart Home Energy Management System"
              description="AI-powered system for optimizing home energy consumption"
              progress={75}
              priority="High"
              team={["S", "D", "M"]}
            />
            <ProjectCard
              title="Decentralized Finance (DeFi) Platform"
              description="Secure and transparent DeFi platform built on blockchain technology"
              progress={60}
              priority="Medium"
              team={["A", "B", "C"]}
            />
          </CardContent>
        </Card>

        {/* Testing */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Testing</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectCard
              title="Next-Generation Cloud Computing Platform"
              description="Scalable and secure cloud platform for enterprise applications"
              progress={80}
              priority="High"
              team={["H", "I", "J"]}
            />
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Section Analytics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Pipeline Flow */}
          <Card>
            <CardHeader>
              <CardTitle>Project Pipeline Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={[
                  { stage: "Ideation", value: 5 },
                  { stage: "Prototyping", value: 4 },
                  { stage: "Development", value: 8 },
                  { stage: "Testing", value: 6 },
                  { stage: "Launch", value: 7 },
                ]}
              />
            </CardContent>
          </Card>

          {/* Projects per Stage */}
          <Card>
            <CardHeader>
              <CardTitle>Projects per Stage</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { stage: "Ideation", count: 1 },
                  { stage: "Prototyping", count: 0 },
                  { stage: "Testing", count: 2 },
                  { stage: "Pre-Launch", count: 1 },
                  { stage: "Launch", count: 0 },
                ]}
              />
            </CardContent>
          </Card>

          {/* Average Time in Stage */}
          <Card>
            <CardHeader>
              <CardTitle>Average Time in Stage (Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { stage: "Ideation", days: 30 },
                  { stage: "Prototyping", days: 45 },
                  { stage: "Development", days: 60 },
                  { stage: "Testing", days: 30 },
                  { stage: "Launch", days: 15 },
                ]}
              />
            </CardContent>
          </Card>

          {/* Progress Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>Project Progress Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={[
                  { week: 1, progress: 4 },
                  { week: 2, progress: 5 },
                  { week: 3, progress: 6 },
                  { week: 4, progress: 7 },
                  { week: 5, progress: 8 },
                  { week: 6, progress: 7 },
                  { week: 7, progress: 6 },
                  { week: 8, progress: 7 },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  progress,
  priority,
  team,
}: {
  title: string
  description: string
  progress: number
  priority: "High" | "Medium" | "Low"
  team: string[]
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Progress value={progress} className="mt-2" />
          <div className="mt-2 flex items-center justify-between text-sm">
            <span>{progress}%</span>
            <span
              className={`rounded-full px-2 py-1 ${
                priority === "High"
                  ? "bg-red-500/10 text-red-500"
                  : priority === "Medium"
                  ? "bg-yellow-500/10 text-yellow-500"
                  : "bg-green-500/10 text-green-500"
              }`}
            >
              {priority}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-1">
            {team.map((member, i) => (
              <span
                key={i}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
