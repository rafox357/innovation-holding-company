import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Microscope, Lightbulb, FlaskRoundIcon as Flask, Atom } from "lucide-react"
import Link from "next/link"

interface ResearchProject {
  name: string
  description: string
  status: string
  category: string
  leadResearcher: string
  startDate: string
}

const researchProjects: ResearchProject[] = [
  {
    name: "Quantum AI Integration",
    description: "Exploring the intersection of quantum computing and artificial intelligence",
    status: "Ongoing",
    category: "Quantum Computing",
    leadResearcher: "Dr. Sophia Chen",
    startDate: "2024-01-15",
  },
  {
    name: "Sustainable Nanotech Materials",
    description: "Developing eco-friendly nanomaterials for various industries",
    status: "Early Stage",
    category: "Nanotechnology",
    leadResearcher: "Dr. Marcus Williams",
    startDate: "2024-03-01",
  },
  {
    name: "Neuro-Digital Interfaces",
    description: "Advancing brain-computer interfaces for enhanced human-machine interaction",
    status: "Ongoing",
    category: "Neurotechnology",
    leadResearcher: "Dr. Elena Rodriguez",
    startDate: "2023-11-10",
  },
  {
    name: "Fusion Energy Catalysts",
    description: "Investigating novel catalysts to improve fusion energy efficiency",
    status: "Planning",
    category: "Energy",
    leadResearcher: "Dr. Ahmed Hassan",
    startDate: "2024-07-01",
  },
]

export default function LabResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 cosmic-text">Lab Research</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="cosmic-card p-1 mb-4">
          <TabsTrigger value="all" className="cosmic-button">
            All Projects
          </TabsTrigger>
          <TabsTrigger value="quantum-computing" className="cosmic-button">
            Quantum Computing
          </TabsTrigger>
          <TabsTrigger value="nanotechnology" className="cosmic-button">
            Nanotechnology
          </TabsTrigger>
          <TabsTrigger value="neurotechnology" className="cosmic-button">
            Neurotechnology
          </TabsTrigger>
          <TabsTrigger value="energy" className="cosmic-button">
            Energy
          </TabsTrigger>
        </TabsList>

        {["all", "quantum-computing", "nanotechnology", "neurotechnology", "energy"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchProjects
                .filter((project) => tab === "all" || project.category.toLowerCase().replace(" ", "-") === tab)
                .map((project) => (
                  <ResearchProjectCard key={project.name} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="cosmic-text text-2xl">Research Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Our lab research initiatives are at the forefront of scientific discovery, pushing the boundaries of
            knowledge in quantum computing, nanotechnology, neurotechnology, and sustainable energy solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon={<Microscope className="h-6 w-6 text-blue-500" />}
              title="Active Projects"
              value={researchProjects.length}
            />
            <StatCard
              icon={<Lightbulb className="h-6 w-6 text-yellow-500" />}
              title="Research Areas"
              value={new Set(researchProjects.map((p) => p.category)).size}
            />
            <StatCard
              icon={<Flask className="h-6 w-6 text-green-500" />}
              title="Lead Researchers"
              value={researchProjects.length}
            />
            <StatCard
              icon={<Atom className="h-6 w-6 text-purple-500" />}
              title="Innovation Potential"
              value="Groundbreaking"
            />
          </div>
          <div className="text-center">
            <Link href="/contact" passHref>
              <Button className="cosmic-button">
                Collaborate with Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ResearchProjectCard({ project }: { project: ResearchProject }) {
  return (
    <Card className="cosmic-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="cosmic-text text-xl">{project.name}</CardTitle>
          <Badge
            variant="outline"
            className={`cosmic-border ${
              project.status === "Ongoing"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : project.status === "Early Stage"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            }`}
          >
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
            <p className="font-semibold cosmic-text">Lead Researcher</p>
            <p>{project.leadResearcher}</p>
          </div>
          <div>
            <p className="font-semibold cosmic-text">Start Date</p>
            <p>{new Date(project.startDate).toLocaleDateString()}</p>
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
