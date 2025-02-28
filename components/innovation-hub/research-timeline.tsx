"use client";

import { Card } from "@/components/ui/card";
import type { ResearchProject } from "@/types/innovation-hub";

interface ResearchTimelineProps {
  project: ResearchProject;
}

export function ResearchTimeline({ project }: ResearchTimelineProps) {
  const milestones = project.timeline.milestones.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8 relative">
        {/* Start date */}
        <div className="relative pl-10">
          <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-3 h-3 bg-background rounded-full" />
          </div>
          <Card className="p-4">
            <div className="text-sm font-medium">Project Start</div>
            <div className="text-sm text-muted-foreground">
              {new Date(project.timeline.start).toLocaleDateString()}
            </div>
          </Card>
        </div>

        {/* Milestones */}
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-10">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full" />
            </div>
            <Card className="p-4">
              <div className="text-sm font-medium">{milestone.title}</div>
              <div className="text-sm text-muted-foreground mb-2">
                {new Date(milestone.date).toLocaleDateString()}
              </div>
              <p className="text-sm">{milestone.description}</p>
            </Card>
          </div>
        ))}

        {/* End date if exists */}
        {project.timeline.end && (
          <div className="relative pl-10">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full" />
            </div>
            <Card className="p-4">
              <div className="text-sm font-medium">Project End</div>
              <div className="text-sm text-muted-foreground">
                {new Date(project.timeline.end).toLocaleDateString()}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
