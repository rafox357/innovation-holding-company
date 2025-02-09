"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts"

const resourceUtilization = [
  { subject: "Technology", current: 120, previous: 110, fullMark: 150 },
  { subject: "Funding", current: 98, previous: 130, fullMark: 150 },
  { subject: "Mentorship", current: 86, previous: 130, fullMark: 150 },
  { subject: "Networking", current: 99, previous: 100, fullMark: 150 },
  { subject: "Market Access", current: 85, previous: 90, fullMark: 150 },
  { subject: "Talent", current: 65, previous: 85, fullMark: 150 },
]

const projectSuccess = [
  { stage: "Ideation", successRate: 75 },
  { stage: "Prototyping", successRate: 60 },
  { stage: "Development", successRate: 80 },
  { stage: "Testing", successRate: 90 },
  { stage: "Launch", successRate: 70 },
]

const resourceGrowth = [
  { month: "Jan", technology: 100, funding: 80, mentorship: 70 },
  { month: "Feb", technology: 110, funding: 85, mentorship: 75 },
  { month: "Mar", technology: 115, funding: 90, mentorship: 80 },
  { month: "Apr", technology: 120, funding: 95, mentorship: 85 },
  { month: "May", technology: 125, funding: 100, mentorship: 90 },
  { month: "Jun", technology: 130, funding: 105, mentorship: 95 },
]

export function LaunchpadAnalytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Launchpad Resource Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={resourceUtilization}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Current Quarter" dataKey="current" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Previous Quarter" dataKey="previous" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Success Rate by Stage</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectSuccess}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="successRate" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resource Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={resourceGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="technology" stroke="#8884d8" />
              <Line type="monotone" dataKey="funding" stroke="#82ca9d" />
              <Line type="monotone" dataKey="mentorship" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resource Allocation Efficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resourceUtilization}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" fill="#8884d8" name="Current Utilization" />
              <Bar dataKey="fullMark" fill="#82ca9d" name="Maximum Capacity" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
