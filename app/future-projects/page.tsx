import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Rocket, Lightbulb, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

interface Project {
  name: string
  description: string
  status: string
  category: string
  estimatedLaunch: string
  teamSize: number
}

const futureProjects: Project[] = [
  {
    name: "Project Nexus",
    description: "An AI-powered ecosystem for seamless business integration",
    status: "Research",
    category: "Technology",
    estimatedLaunch: "Q4 2025",
    teamSize: 15,
  },
  {
    name: "GreenScape",
    description: "Sustainable urban development solutions",
    status: "Planning",
    category: "Sustainability",
    estimatedLaunch: "Q2 2026",
    teamSize: 8,
  },
  {
    name: "QuantumLeap",
    description: "Quantum computing applications for finance",
    status: "Early Development",
    category: "Finance",
    estimatedLaunch: "Q1 2027",
    teamSize: 12,
  },
  {
    name: "BioGenesis",
    description: "Revolutionary biotechnology for personalized medicine",
    status: "Research",
    category: "Healthcare",
    estimatedLaunch: "Q3 2026",
    teamSize: 20,
  },
]

export default function FutureProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 cosmic-text">Future Projects</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="cosmic-card p-1 mb-4">
          <TabsTrigger value="all" className="cosmic-button">
            All Projects
          </TabsTrigger>
          <TabsTrigger value="technology" className="cosmic-button">
            Technology
          </TabsTrigger>
          <TabsTrigger value="sustainability" className="cosmic-button">
            Sustainability
          </TabsTrigger>
          <TabsTrigger value="finance" className="cosmic-button">
            Finance
          </TabsTrigger>
          <TabsTrigger value="healthcare" className="cosmic-button">
            Healthcare
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </TabsContent>

        {["technology", "sustainability", "finance", "healthcare"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureProjects
                .filter((project) => project.category.toLowerCase() === category)
                .map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="cosmic-text text-2xl">Innovation Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Our future projects represent the cutting edge of innovation across various industries. From AI and quantum
            computing to sustainable development and biotechnology, we're committed to pushing the boundaries of what's
            possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon={<Rocket className="h-6 w-6 text-blue-500" />}
              title="Projects"
              value={futureProjects.length}
            />
            <StatCard
              icon={<Lightbulb className="h-6 w-6 text-yellow-500" />}
              title="Industries"
              value={new Set(futureProjects.map((p) => p.category)).size}
            />
            <StatCard
              icon={<Users className="h-6 w-6 text-green-500" />}
              title="Team Members"
              value={futureProjects.reduce((sum, p) => sum + p.teamSize, 0)}
            />
            <StatCard icon={<TrendingUp className="h-6 w-6 text-purple-500" />} title="Potential Impact" value="High" />
          </div>
          <div className="text-center">
            <Link href="/contact" passHref>
              <Button className="cosmic-button">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="cosmic-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="cosmic-text text-xl">{project.name}</CardTitle>
          <Badge variant="outline" className="cosmic-border">
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold cosmic-text">Category</p>
            <p>{project.category}</p>
          </div>
          <div>
            <p className="font-semibold cosmic-text">Estimated Launch</p>
            <p>{project.estimatedLaunch}</p>
          </div>
          <div>
            <p className="font-semibold cosmic-text">Team Size</p>
            <p>{project.teamSize} members</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: string | number
}

function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <Card className="cosmic-card">
      <CardContent className="flex items-center p-4">
        <div className="mr-4">{icon}</div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold cosmic-text">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
