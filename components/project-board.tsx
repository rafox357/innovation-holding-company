import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const projects = [
  { name: "AI Integration", progress: 75, status: "On Track" },
  { name: "Mobile App Redesign", progress: 40, status: "Delayed" },
  { name: "Cloud Migration", progress: 90, status: "Ahead" },
  { name: "Customer Portal", progress: 60, status: "On Track" },
]

const MotionCard = motion(Card)

export function ProjectBoard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold cosmic-title glow">Project Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <MotionCard
            key={project.name}
            className="cosmic-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="cosmic-title">{project.name}</CardTitle>
                <Badge
                  variant={
                    project.status === "On Track" ? "default" : project.status === "Delayed" ? "destructive" : "success"
                  }
                >
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="w-full" />
              </div>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  )
}

