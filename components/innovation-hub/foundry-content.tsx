"use client";

import { Project, Publication } from "@/lib/data-fetcher";
import { FoundryOverview } from "@/components/innovation-hub/foundry-overview";
import { ProjectList } from "@/components/innovation-hub/project-list";
import { TeamList } from "@/components/innovation-hub/team-list";
import { PublicationList } from "@/components/innovation-hub/publication-list";
import { ResearchMetrics } from "@/components/innovation-hub/research-metrics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, FileText, Users, FlaskConical } from "lucide-react";
import { QuickActions } from "@/components/innovation-hub/quick-actions";

interface FoundryContentProps {
  projects: Project[];  
  publications: Publication[];
}

export function FoundryContent({ projects, publications }: FoundryContentProps) {
  const activeProjects = projects.filter(p => p.status === 'active');
  const completedProjects = projects.filter(p => p.status === 'completed');

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <FlaskConical className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProjects.length}</div>
            <p className="text-xs text-muted-foreground">
              {completedProjects.length} completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Research Team
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.flatMap(p => p.team).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all projects
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Publications
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publications.length}</div>
            <p className="text-xs text-muted-foreground">
              Latest research outputs
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Next Review
            </CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7d</div>
            <p className="text-xs text-muted-foreground">
              Project milestone review
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <FoundryOverview />
        </TabsContent>
        <TabsContent value="projects" className="space-y-4">
          <ProjectList projects={projects} />
        </TabsContent>
        <TabsContent value="team" className="space-y-4">
          <TeamList />
        </TabsContent>
        <TabsContent value="publications" className="space-y-4">
          <PublicationList publications={publications} />
        </TabsContent>
        <TabsContent value="metrics" className="space-y-4">
          <ResearchMetrics />
        </TabsContent>
      </Tabs>

      <QuickActions />
    </div>
  );
}
