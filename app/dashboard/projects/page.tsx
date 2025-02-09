import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { 
  Briefcase, 
  Clock, 
  Target, 
  Users, 
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Clock4
} from "lucide-react"

const projectProgressData = [
  { name: "Jan", value: 12 },
  { name: "Feb", value: 18 },
  { name: "Mar", value: 25 },
  { name: "Apr", value: 32 },
  { name: "May", value: 38 },
  { name: "Jun", value: 45 },
]

const completionRateData = [
  { name: "Q1", value: 85 },
  { name: "Q2", value: 88 },
  { name: "Q3", value: 92 },
  { name: "Q4", value: 95 },
]

const projects = [
  {
    name: "Quantum Computing Initiative",
    progress: 75,
    status: "On Track",
    team: 12,
    deadline: "2025-06-30",
  },
  {
    name: "Space Mining Operations",
    progress: 60,
    status: "At Risk",
    team: 28,
    deadline: "2025-08-15",
  },
  {
    name: "Sustainable Energy Grid",
    progress: 90,
    status: "Completed",
    team: 15,
    deadline: "2025-03-01",
  },
  {
    name: "AI Research Lab",
    progress: 40,
    status: "In Progress",
    team: 20,
    deadline: "2025-12-31",
  },
]

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    case "at risk":
      return <AlertCircle className="h-4 w-4 text-red-500" />
    case "in progress":
    case "on track":
      return <Clock4 className="h-4 w-4 text-blue-500" />
    default:
      return null
  }
}

export default function ProjectsDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Projects", href: "/dashboard/projects" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Project Management</h1>
        <p className="text-muted-foreground">
          Track and manage innovative projects across our portfolio
        </p>
      </div>

      <div className="space-y-8">
        {/* Project Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+8 new projects</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+3% this quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+12 this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6.2</div>
              <div className="text-xs text-muted-foreground">months per project</div>
            </CardContent>
          </Card>
        </div>

        {/* Project Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Project Progress Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart data={projectProgressData} type="line" />
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Completion Rate by Quarter</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart data={completionRateData} type="bar" />
            </CardContent>
          </Card>
        </div>

        {/* Project List */}
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.name} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{project.name}</h3>
                      {getStatusIcon(project.status)}
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Team: {project.team} members</span>
                      <span>Deadline: {project.deadline}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-medium">{project.progress}%</div>
                    <div className="h-2 w-24 rounded-full bg-secondary">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Categories */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Project Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Research & Development", count: 18, growth: "+5" },
                  { name: "Infrastructure", count: 12, growth: "+3" },
                  { name: "Sustainability", count: 8, growth: "+2" },
                  { name: "Innovation", count: 7, growth: "+1" },
                ].map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{category.name}</p>
                      <p className="text-sm text-muted-foreground">{category.count} projects</p>
                    </div>
                    <div className="text-green-500 text-sm">
                      {category.growth} new
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Project Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { status: "On Track", count: 28, percentage: "62%" },
                  { status: "At Risk", count: 8, percentage: "18%" },
                  { status: "Completed", count: 6, percentage: "13%" },
                  { status: "On Hold", count: 3, percentage: "7%" },
                ].map((status) => (
                  <div key={status.status} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{status.status}</p>
                      <p className="text-sm text-muted-foreground">{status.count} projects</p>
                    </div>
                    <div className="text-primary text-sm">
                      {status.percentage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
