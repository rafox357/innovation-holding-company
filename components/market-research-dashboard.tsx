'use client';

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const marketSizeData = [
  { year: 2020, size: 50 },
  { year: 2021, size: 65 },
  { year: 2022, size: 80 },
  { year: 2023, size: 95 },
  { year: 2024, size: 110 },
  { year: 2025, size: 130 },
]

const competitorData = [
  { name: 'Competitor A', marketShare: 30 },
  { name: 'Competitor B', marketShare: 25 },
  { name: 'Competitor C', marketShare: 20 },
  { name: 'Competitor D', marketShare: 15 },
  { name: 'Others', marketShare: 10 },
]

const growthTrendsData = [
  { category: 'Mobile Users', growth: 45 },
  { category: 'Desktop Users', growth: 30 },
  { category: 'Tablet Users', growth: 15 },
  { category: 'IoT Devices', growth: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function MarketResearchDashboard() {
  const [selectedProject, setSelectedProject] = useState("Big Bang")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Market Research Dashboard</CardTitle>
        <CardDescription>Real-time market trends and competitive landscape analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger>
              <SelectValue placeholder="Select a project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Big Bang">Big Bang</SelectItem>
              <SelectItem value="Cosmic Dark Ages">Cosmic Dark Ages</SelectItem>
              <SelectItem value="Stellar Nurseries">Stellar Nurseries</SelectItem>
              <SelectItem value="Proto-Galaxies">Proto-Galaxies</SelectItem>
              <SelectItem value="Milky Way Proto-Disk">Milky Way Proto-Disk</SelectItem>
              <SelectItem value="Pop III Stars">Pop III Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="market-size">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="market-size">Market Size</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="growth-trends">Growth Trends</TabsTrigger>
          </TabsList>
          <TabsContent value="market-size">
            <Card>
              <CardHeader>
                <CardTitle>Market Size Projection</CardTitle>
                <CardDescription>Estimated market size growth (in billion $)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={marketSizeData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="size" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="competitors">
            <Card>
              <CardHeader>
                <CardTitle>Competitor Analysis</CardTitle>
                <CardDescription>Market share of major competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={competitorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="marketShare"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {competitorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="growth-trends">
            <Card>
              <CardHeader>
                <CardTitle>Growth Trends</CardTitle>
                <CardDescription>User growth by category (%)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={growthTrendsData}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="growth" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
