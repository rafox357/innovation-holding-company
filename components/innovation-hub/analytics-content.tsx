"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Mock data - replace with API call
const analytics = {
  overview: {
    totalProjects: 18,
    activeProjects: 12,
    totalPublications: 45,
    citations: 320,
    funding: 12500000,
    researchers: 45,
  },
  projectsByArea: [
    { name: "Quantum Computing", value: 5 },
    { name: "AI Ethics", value: 4 },
    { name: "Energy Storage", value: 3 },
    { name: "Biotech", value: 3 },
    { name: "Robotics", value: 2 },
  ],
  publicationTrends: [
    { month: "Jan", publications: 4, citations: 25 },
    { month: "Feb", publications: 3, citations: 30 },
    { month: "Mar", publications: 5, citations: 40 },
    { month: "Apr", publications: 6, citations: 35 },
    { month: "May", publications: 4, citations: 45 },
    { month: "Jun", publications: 7, citations: 50 },
  ],
  fundingAllocation: [
    { area: "Research Staff", amount: 5000000 },
    { area: "Equipment", amount: 3500000 },
    { area: "Materials", amount: 2000000 },
    { area: "Travel", amount: 1000000 },
    { area: "Software", amount: 1000000 },
  ],
};

export function AnalyticsContent() {
  const [timeframe, setTimeframe] = useState("6m");

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Research Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Insights and metrics from our research activities
          </p>
        </div>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Last Month</SelectItem>
            <SelectItem value="3m">Last 3 Months</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="1y">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.overview.totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              {analytics.overview.activeProjects} active
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.overview.totalPublications}</div>
            <p className="text-xs text-muted-foreground">
              {analytics.overview.citations} citations
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Research Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(analytics.overview.funding / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">
              {analytics.overview.researchers} researchers
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Projects by Research Area</CardTitle>
                <CardDescription>Distribution of active research projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <PieChart width={400} height={300}>
                    <Pie
                      data={analytics.projectsByArea}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Publication Trends</CardTitle>
                <CardDescription>Monthly publications and citations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <LineChart width={400} height={300} data={analytics.publicationTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="publications" stroke="#8884d8" />
                    <Line type="monotone" dataKey="citations" stroke="#82ca9d" />
                  </LineChart>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="publications">
          <Card>
            <CardHeader>
              <CardTitle>Publication Impact</CardTitle>
              <CardDescription>Citations and impact factors over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <LineChart width={800} height={400} data={analytics.publicationTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="publications" stroke="#8884d8" />
                  <Line type="monotone" dataKey="citations" stroke="#82ca9d" />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="funding">
          <Card>
            <CardHeader>
              <CardTitle>Funding Allocation</CardTitle>
              <CardDescription>Distribution of research funding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <BarChart width={800} height={400} data={analytics.fundingAllocation}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
