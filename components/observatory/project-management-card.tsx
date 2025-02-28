"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
  Calendar,
  Users,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

interface ProjectTask {
  id: string;
  title: string;
  status: "todo" | "in_progress" | "completed" | "blocked";
  assignee?: string;
  dueDate?: string;
}

interface ProjectMilestone {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "on_track" | "at_risk" | "delayed" | "completed";
  progress: number;
  startDate: string;
  endDate: string;
  team: string[];
  tasks: ProjectTask[];
  milestones: ProjectMilestone[];
  budget?: {
    allocated: number;
    spent: number;
    currency: string;
  };
}

interface ProjectManagementCardProps {
  project: Project;
  variant?: "default" | "compact";
}

export function ProjectManagementCard({
  project,
  variant = "default",
}: ProjectManagementCardProps) {
  const statusColors = {
    on_track: "bg-green-100 text-green-800",
    at_risk: "bg-yellow-100 text-yellow-800",
    delayed: "bg-red-100 text-red-800",
    completed: "bg-blue-100 text-blue-800",
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "on_track":
        return <CheckCircle2 className="w-4 h-4" />;
      case "at_risk":
        return <AlertTriangle className="w-4 h-4" />;
      case "delayed":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <Target className="w-4 h-4" />;
    }
  };

  if (variant === "compact") {
    return (
      <Card className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold line-clamp-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {project.description}
            </p>
          </div>
          <Badge className={`${statusColors[project.status]} capitalize`}>
            {project.status.replace("_", " ")}
          </Badge>
        </div>
        <Progress value={project.progress} className="h-1.5" />
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-muted-foreground mb-3">{project.description}</p>
        </div>
        <Badge
          className={`${statusColors[project.status]} capitalize flex items-center gap-1`}
        >
          {getStatusIcon(project.status)}
          <span>{project.status.replace("_", " ")}</span>
        </Badge>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <div>
                <div className="text-muted-foreground">Timeline</div>
                <div>
                  {new Date(project.startDate).toLocaleDateString()} -{" "}
                  {new Date(project.endDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2" />
              <div>
                <div className="text-muted-foreground">Team Size</div>
                <div>{project.team.length} members</div>
              </div>
            </div>
          </div>
        </div>

        {project.budget && (
          <div className="flex items-center text-sm">
            <div className="flex-1">
              <div className="text-muted-foreground mb-1">Budget Spent</div>
              <div className="font-medium">
                {formatCurrency(project.budget.spent, project.budget.currency)} /{" "}
                {formatCurrency(
                  project.budget.allocated,
                  project.budget.currency
                )}
              </div>
              <Progress
                value={(project.budget.spent / project.budget.allocated) * 100}
                className="h-1.5 mt-1"
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4">
          <div className="flex -space-x-2">
            {project.team.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background"
              >
                {member.charAt(0)}
              </div>
            ))}
            {project.team.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background">
                <span className="text-xs">+{project.team.length - 3}</span>
              </div>
            )}
          </div>
          <Button asChild>
            <Link href={`/observatory/projects/${project.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
