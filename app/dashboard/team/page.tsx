import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { 
  Users, 
  Award, 
  Briefcase, 
  TrendingUp,
  ArrowUpRight,
  Star,
  Brain,
  Rocket
} from "lucide-react"

const teamGrowthData = [
  { name: "Jan", value: 185 },
  { name: "Feb", value: 198 },
  { name: "Mar", value: 215 },
  { name: "Apr", value: 232 },
  { name: "May", value: 248 },
  { name: "Jun", value: 265 },
]

const productivityData = [
  { name: "Q1", value: 92 },
  { name: "Q2", value: 95 },
  { name: "Q3", value: 97 },
  { name: "Q4", value: 98 },
]

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Quantum Research Lead",
    projects: 3,
    skills: ["Quantum Computing", "AI", "Physics"],
    performance: 98,
  },
  {
    name: "Marcus Rodriguez",
    role: "Space Operations Director",
    projects: 4,
    skills: ["Aerospace", "Project Management", "Engineering"],
    performance: 95,
  },
  {
    name: "Dr. Emily Williams",
    role: "AI Development Lead",
    projects: 3,
    skills: ["Machine Learning", "Neural Networks", "Data Science"],
    performance: 97,
  },
  {
    name: "James Chen",
    role: "Sustainability Engineer",
    projects: 2,
    skills: ["Renewable Energy", "Environmental Science", "Systems Design"],
    performance: 94,
  },
]

export default function TeamDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Team", href: "/dashboard/team" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Team Overview</h1>
        <p className="text-muted-foreground">
          Monitor team performance, skills, and resource allocation
        </p>
      </div>

      <div className="space-y-8">
        {/* Team Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Team Size</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">265</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+17 this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Performance</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+1% this quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+3 new assignments</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skill Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15%</div>
              <div className="text-xs text-muted-foreground">quarterly increase</div>
            </CardContent>
          </Card>
        </div>

        {/* Team Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Team Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart
                title="Team Growth"
                data={teamGrowthData}
              />
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Team Productivity</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart
                title="Team Productivity"
                data={productivityData}
              />
            </CardContent>
          </Card>
        </div>

        {/* Top Performers */}
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{member.name}</h3>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <div className="flex gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="font-medium">{member.projects}</span>
                      <span className="text-muted-foreground"> projects</span>
                    </div>
                    <div className="text-sm font-medium text-green-500">{member.performance}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Distribution */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Research & Development", count: 95, icon: <Brain className="h-4 w-4 text-primary" /> },
                  { name: "Space Operations", count: 72, icon: <Rocket className="h-4 w-4 text-primary" /> },
                  { name: "AI & Machine Learning", count: 58, icon: <TrendingUp className="h-4 w-4 text-primary" /> },
                  { name: "Sustainability", count: 40, icon: <Briefcase className="h-4 w-4 text-primary" /> },
                ].map((dept) => (
                  <div key={dept.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {dept.icon}
                      <div>
                        <p className="font-medium">{dept.name}</p>
                        <p className="text-sm text-muted-foreground">{dept.count} members</p>
                      </div>
                    </div>
                    <div className="text-sm text-primary">
                      {Math.round((dept.count / 265) * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Skill Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { skill: "Quantum Computing", level: "Expert", count: 28 },
                  { skill: "AI/ML", level: "Advanced", count: 45 },
                  { skill: "Aerospace", level: "Expert", count: 32 },
                  { skill: "Sustainability", level: "Advanced", count: 25 },
                ].map((item) => (
                  <div key={item.skill} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.skill}</p>
                      <p className="text-sm text-muted-foreground">Level: {item.level}</p>
                    </div>
                    <div className="text-sm">
                      {item.count} specialists
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
