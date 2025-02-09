import type { Project } from "@/types/project"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Edit2 } from "lucide-react"

interface ProjectCardProps {
  project: Project
  onUpdate?: (project: Project) => void
}

export function ProjectCard({ project, onUpdate }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-4 flex-grow">
        <div className="space-y-2">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
            <Badge variant={project.status === "In Development" ? "default" : "secondary"}>{project.status}</Badge>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{project.category}</Badge>
                <Badge
                  variant={
                    project.priority === "High"
                      ? "destructive"
                      : project.priority === "Medium"
                        ? "default"
                        : "secondary"
                  }
                >
                  {project.priority}
                </Badge>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">Team</p>
                <div className="flex -space-x-2">
                  {project.team.map((member, index) => (
                    <Avatar key={index} className="border-2 border-background w-8 h-8">
                      <AvatarFallback className="text-xs">{member}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {onUpdate && (
            <div className="mt-4 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-accent"
                onClick={() => onUpdate(project)}
                aria-label={`Edit ${project.name}`}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

