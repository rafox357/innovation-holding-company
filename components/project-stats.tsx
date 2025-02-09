import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/types/project"

interface ProjectStatsProps {
  projects: Project[]
}

export function ProjectStats({ projects }: ProjectStatsProps) {
  const stats = {
    total: projects.length,
    inDevelopment: projects.filter((p) => p.status === "In Development").length,
    highPriority: projects.filter((p) => p.priority === "High").length,
    averageProgress: Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length),
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.total}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">In Development</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.inDevelopment}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">High Priority</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.highPriority}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageProgress}%</div>
        </CardContent>
      </Card>
    </div>
  )
}

