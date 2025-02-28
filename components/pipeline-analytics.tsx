"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sankey,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts"
import type { Project } from "@/types/project"

export function PipelineAnalytics({ projects }: { projects: Project[] }) {
  const stages = ["Ideation", "Prototyping", "Development", "Testing", "Pre-Launch", "Launch"]
  const nodes = stages.map((name, index) => ({ name }))

  const links = stages.slice(0, -1).map((source, index) => {
    const target = stages[index + 1]
    const value = projects.filter((p) => p.stage === source).length
    return { source: index, target: index + 1, value }
  })

  const projectsPerStage = stages.map((stage) => ({
    name: stage,
    count: projects.filter((p) => p.stage === stage).length,
  }))

  const timeInStage = [
    { name: "Ideation", time: 14 },
    { name: "Prototyping", time: 21 },
    { name: "Development", time: 45 },
    { name: "Testing", time: 30 },
    { name: "Pre-Launch", time: 14 },
    { name: "Launch", time: 7 },
  ]

  const projectProgress = [
    { month: "Jan", completed: 2, inProgress: 5 },
    { month: "Feb", completed: 3, inProgress: 6 },
    { month: "Mar", completed: 4, inProgress: 7 },
    { month: "Apr", completed: 5, inProgress: 8 },
    { month: "May", completed: 6, inProgress: 7 },
    { month: "Jun", completed: 7, inProgress: 6 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Pipeline Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <Sankey
              data={{ nodes, links }}
              nodePadding={50}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              link={{ stroke: "#77c878" }}
            >
              <Tooltip />
            </Sankey>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Projects per Stage</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectsPerStage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Average Time in Stage (Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeInStage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="time" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Progress Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#8884d8" />
              <Line type="monotone" dataKey="inProgress" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
