import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Calendar } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectLaunchpadProps {
  projects: Project[]
  onProjectUpdate?: (project: Project) => void
}

export function ProjectLaunchpad({ projects, onProjectUpdate }: ProjectLaunchpadProps) {
  const handleLaunch = (project: Project) => {
    if (onProjectUpdate) {
      onProjectUpdate({ ...project, status: "Launched" })
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{project.name}</span>
              <Badge>{project.category}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="text-sm">Launch Date: {project.timeline}</span>
              </div>
              <Badge variant="outline">{project.priority} Priority</Badge>
            </div>
            <Button className="w-full" onClick={() => handleLaunch(project)}>
              <Rocket className="mr-2 h-4 w-4" /> Launch Project
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

