import type { Project } from "@/types/project"
import { ProjectCard } from "./project-card"

interface ProjectListProps {
  projects: Project[]
  onProjectUpdate?: (project: Project) => void
}

export function ProjectList({ projects, onProjectUpdate }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onUpdate={onProjectUpdate} />
      ))}
    </div>
  )
}

