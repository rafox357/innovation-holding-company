"use client";

import { Metadata } from "next";
import { ProjectAnalytics } from "@/components/project-analytics";
import { PipelineAnalytics } from "@/components/pipeline-analytics";
import { RoadmapAnalytics } from "@/components/roadmap-analytics";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Analytics | Observatory | Hubverse",
  description: "Comprehensive analytics and insights for your innovation projects.",
};

export default function AnalyticsPage() {
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
            <ProjectAnalytics />
          </Card>
        </TabsContent>

        <TabsContent value="pipeline">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Pipeline Analytics</h2>
            <PipelineAnalytics />
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
