import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectList } from "./project-list"
import { ProjectKanban } from "./project-kanban"
import type { Project, ProjectSection as ProjectSectionType } from "@/types/project"

interface ProjectSectionProps {
  section: ProjectSectionType
  viewType: "list" | "kanban"
  stages?: string[]
  onProjectUpdate?: (project: Project) => void
}

export function ProjectSection({ section, viewType, stages, onProjectUpdate }: ProjectSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{section.title}</CardTitle>
        <CardDescription>{section.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {viewType === "list" ? (
          <ProjectList projects={section.projects} onProjectUpdate={onProjectUpdate} />
        ) : (
          <ProjectKanban projects={section.projects} stages={stages || []} onDragEnd={onProjectUpdate} />
        )}
      </CardContent>
    </Card>
  )
}

