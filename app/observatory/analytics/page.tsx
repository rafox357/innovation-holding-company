"use client";

import { ProjectAnalytics } from "@/components/project-analytics";
import { PipelineAnalytics } from "@/components/pipeline-analytics";
import { RoadmapAnalytics } from "@/components/roadmap-analytics";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProjects } from "@/lib/data/projects"; // Assume this is a function to fetch projects
import { Project } from "@/types/project"; // Import the Project type definition

export default function AnalyticsPage() {
  // Fetch projects or use mock data
  const projects: Project[] = [
    {
      id: 1,
      name: "AI Research Initiative",
      description: "Exploring the applications of AI in various industries",
      status: "In Development",
      progress: 65,
      category: "Research",
      team: ["Alice", "Bob"],
      priority: "Medium",
      stage: "Development"
    },
    {
      id: 2, 
      name: "Blockchain Innovation",
      description: "Developing blockchain-based solutions for secure transactions",
      status: "In Development", 
      progress: 45,
      category: "Technology",
      team: ["Charlie", "David"],
      priority: "High",
      stage: "Prototyping"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Analytics</h2>
            <ProjectAnalytics projects={projects} />
          </Card>
        </TabsContent>

        <TabsContent value="pipeline">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Pipeline Analytics</h2>
            <PipelineAnalytics projects={projects} />
          </Card>
        </TabsContent>

        <TabsContent value="roadmap">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Roadmap Analytics</h2>
            <RoadmapAnalytics />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
