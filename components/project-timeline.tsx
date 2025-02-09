import type { Project } from "@/types/project"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectTimelineProps {
  projects: Project[]
}

export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.timeline || "").getTime()
    const dateB = new Date(b.timeline || "").getTime()
    return dateA - dateB
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute h-full w-0.5 bg-border left-4 top-0"></div>
          {sortedProjects.map((project, index) => (
            <div key={project.id} className="mb-8 flex">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center relative z-10">
                <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{project.status}</Badge>
                  {project.timeline && <span className="text-sm text-muted-foreground">{project.timeline}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

