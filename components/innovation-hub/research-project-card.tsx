"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock, Users, FileText } from "lucide-react";
import type { ResearchProject } from "@/types/innovation-hub";

interface ResearchProjectCardProps {
  project: ResearchProject;
}

export function ResearchProjectCard({ project }: ResearchProjectCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    planned: "bg-orange-100 text-orange-800",
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>
        </div>
        <Badge variant="outline">{project.area}</Badge>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        <Link
          href={`/innovation-hub/foundry/projects/${project.id}`}
          className="hover:underline"
        >
          {project.title}
        </Link>
      </h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-2" />
          <span>
            Started: {new Date(project.timeline.start).toLocaleDateString()}
            {project.timeline.end &&
              ` • Ends: ${new Date(project.timeline.end).toLocaleDateString()}`}
          </span>
        </div>
        <div className="flex items-center text-sm">
          <Users className="w-4 h-4 mr-2" />
          <span>{project.team.length} Team Members</span>
        </div>
        {project.publications && project.publications.length > 0 && (
          <div className="flex items-center text-sm">
            <FileText className="w-4 h-4 mr-2" />
            <span>{project.publications.length} Publications</span>
          </div>
        )}
      </div>

      <div className="flex space-x-3">
        <Button asChild variant="outline">
          <Link href={`/innovation-hub/foundry/projects/${project.id}`}>
            View Details
          </Link>
        </Button>
        {project.publications && project.publications.length > 0 && (
          <Button asChild>
            <Link href={`/innovation-hub/foundry/projects/${project.id}#publications`}>
              View Publications
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
