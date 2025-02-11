"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectManagementCard } from "@/components/observatory/project-management-card";
import { Search, TrendingUp, AlertTriangle, Clock } from "lucide-react";
import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,
    name: "Quantum Computing Research",
    description: "Advanced quantum computing research initiative",
    status: "In Development",
    progress: 65,
    category: "Technology",
    team: ["Research Team"],
    priority: "High",
  },
  {
    id: 2,
    name: "AI Ethics Framework",
    description: "Developing comprehensive AI ethics guidelines",
    status: "Planning",
    progress: 25,
    category: "Ethics",
    team: ["Ethics Committee"],
    priority: "Medium",
  },
  {
    id: 3,
    name: "Energy Storage Solutions",
    description: "Innovative energy storage technology development",
    status: "Testing",
    progress: 90,
    category: "Sustainability",
    team: ["Engineering Team"],
    priority: "High",
  },
  {
    id: 4,
    name: "Biotech Innovation Study",
    description: "Exploring cutting-edge biotechnology applications",
    status: "In Development",
    progress: 45,
    category: "Healthcare",
    team: ["Biotech Research"],
    priority: "Medium",
  },
];

export function DashboardContent() {
  return (
    <div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Projects
                </CardTitle>
                <Search className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +2 since last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  +1 since last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  High Priority
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  -1 since last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Due This Week
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  +2 since last week
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectManagementCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
