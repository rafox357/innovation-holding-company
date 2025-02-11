"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { LineChart, Line, PieChart, Pie } from "recharts";

const researchAreas = [
  {
    name: "Quantum Computing",
    projects: 5,
    funding: 2.5,
    publications: 15,
    description: "Advancing quantum algorithms and computing architectures",
  },
  {
    name: "AI Ethics",
    projects: 4,
    funding: 1.8,
    publications: 12,
    description: "Developing frameworks for responsible AI development",
  },
  {
    name: "Energy Storage",
    projects: 3,
    funding: 2.0,
    publications: 10,
    description: "Researching next-generation battery technologies",
  },
  {
    name: "Biotech",
    projects: 3,
    funding: 1.5,
    publications: 8,
    description: "Exploring biotechnology innovations",
  },
  {
    name: "Robotics",
    projects: 2,
    funding: 1.2,
    publications: 6,
    description: "Developing advanced robotics systems",
  },
];

const fundingTrends = researchAreas.map((area) => ({
  name: area.name,
  Q1: area.funding * 0.8,
  Q2: area.funding * 0.9,
  Q3: area.funding * 1.0,
  Q4: area.funding * 1.1,
}));

const projectDistribution = researchAreas.map((area) => ({
  name: area.name,
  value: area.projects,
}));

const chartConfig = {
  fundingTrends: {
    Q1: { label: "Q1 2024", color: "#4CAF50" },
    Q2: { label: "Q2 2024", color: "#2196F3" },
    Q3: { label: "Q3 2024", color: "#FFC107" },
    Q4: { label: "Q4 2024", color: "#9C27B0" },
  },
  projectDistribution: {
    value: { label: "Projects", color: "#2196F3" },
  },
};

const collaborations = [
  {
    institution: "MIT",
    projects: 3,
    type: "Academic",
    status: "Active",
  },
  {
    institution: "Stanford University",
    projects: 2,
    type: "Academic",
    status: "Active",
  },
  {
    institution: "IBM Research",
    projects: 2,
    type: "Industry",
    status: "Active",
  },
  {
    institution: "CERN",
    projects: 1,
    type: "Research",
    status: "Planned",
  },
];

export function FoundryOverview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Research Areas</CardTitle>
            <CardDescription>
              Active research domains and their impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {researchAreas.map((area) => (
                <div key={area.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{area.name}</h4>
                    <Badge variant="secondary">
                      {area.projects} projects
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-4">${area.funding}M funding</span>
                    <span>{area.publications} publications</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Distribution</CardTitle>
            <CardDescription>
              Distribution of projects across research areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer config={chartConfig.projectDistribution}>
                <PieChart>
                  <Pie
                    data={projectDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  />
                  <ChartTooltip>
                    <ChartTooltipContent />
                  </ChartTooltip>
                  <ChartLegend>
                    <ChartLegendContent />
                  </ChartLegend>
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Funding Trends</CardTitle>
          <CardDescription>
            Quarterly funding allocation by research area
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer config={chartConfig.fundingTrends}>
              <LineChart data={fundingTrends}>
                <Line type="monotone" dataKey="Q1" />
                <Line type="monotone" dataKey="Q2" />
                <Line type="monotone" dataKey="Q3" />
                <Line type="monotone" dataKey="Q4" />
                <ChartTooltip>
                  <ChartTooltipContent />
                </ChartTooltip>
                <ChartLegend>
                  <ChartLegendContent />
                </ChartLegend>
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Research Collaborations</CardTitle>
          <CardDescription>
            Active and planned research partnerships
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {collaborations.map((collab) => (
              <Card key={collab.institution}>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{collab.institution}</CardTitle>
                      <CardDescription>{collab.type} Partnership</CardDescription>
                    </div>
                    <Badge
                      variant={collab.status === "Active" ? "default" : "secondary"}
                    >
                      {collab.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-sm">
                    {collab.projects} joint projects
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
