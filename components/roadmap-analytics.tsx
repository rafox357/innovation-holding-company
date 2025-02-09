"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const quarterlyData = [
  { quarter: "Q2 2024", planned: 5, completed: 3, onTrack: 2, delayed: 0 },
  { quarter: "Q3 2024", planned: 7, completed: 4, onTrack: 2, delayed: 1 },
  { quarter: "Q4 2024", planned: 6, completed: 2, onTrack: 3, delayed: 1 },
  { quarter: "Q1 2025", planned: 8, completed: 0, onTrack: 6, delayed: 2 },
]

const milestoneTypes = [
  { name: "Product Launch", count: 3 },
  { name: "Feature Release", count: 7 },
  { name: "Infrastructure Upgrade", count: 4 },
  { name: "Partnership", count: 2 },
  { name: "Market Expansion", count: 5 },
]

const resourceAllocation = [
  { resource: "Development", allocation: 40 },
  { resource: "Design", allocation: 20 },
  { resource: "Marketing", allocation: 15 },
  { resource: "Sales", allocation: 10 },
  { resource: "Customer Support", allocation: 10 },
  { resource: "Administration", allocation: 5 },
]

export function RoadmapAnalytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Quarterly Milestone Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="planned" fill="#8884d8" name="Planned Milestones" />
              <Bar dataKey="completed" fill="#82ca9d" name="Completed Milestones" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Milestone Status Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="onTrack" stroke="#82ca9d" name="On Track" />
              <Line type="monotone" dataKey="delayed" stroke="#ff7300" name="Delayed" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Milestone Types Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={milestoneTypes} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resource Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resourceAllocation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="resource" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="allocation" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
