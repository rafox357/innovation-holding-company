"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Progress } from "@/components/ui/progress"

const implementationPhases = [
  {
    phase: "Phase 1: Foundation",
    timeline: "Months 1-6",
    description: "Laying the groundwork for The Blueprint Platform",
    tasks: [
      "Establish the core development team",
      "Finalize the platform architecture design",
      "Begin development of the Core Integration Engine",
      "Initiate AI Decision Support System development",
      "Set up the basic infrastructure for the Blockchain Ledger",
    ],
    progress: 100,
  },
  {
    phase: "Phase 2: Core Components",
    timeline: "Months 7-12",
    description: "Developing and integrating the main components of the platform",
    tasks: [
      "Complete the Core Integration Engine",
      "Finalize the AI Decision Support System",
      "Implement the Blockchain Ledger",
      "Begin development of the IoT Integration Hub",
      "Start work on the Client Interface Portal",
    ],
    progress: 75,
  },
  {
    phase: "Phase 3: Integration and Testing",
    timeline: "Months 13-18",
    description: "Connecting components and rigorous testing",
    tasks: [
      "Integrate all core components",
      "Develop and implement comprehensive testing protocols",
      "Begin beta testing with select subsidiaries",
      "Refine and optimize based on initial feedback",
      "Complete the IoT Integration Hub and Client Interface Portal",
    ],
    progress: 40,
  },
  {
    phase: "Phase 4: Rollout and Training",
    timeline: "Months 19-24",
    description: "Deploying The Blueprint Platform across Hubverse",
    tasks: [
      "Initiate phased rollout across all subsidiaries",
      "Conduct extensive training programs for all staff",
      "Implement feedback loops for continuous improvement",
      "Begin full-scale operations of the Client Interface Portal",
      "Establish the Innovation Incubator",
    ],
    progress: 10,
  },
  {
    phase: "Phase 5: Optimization and Expansion",
    timeline: "Months 25-36",
    description: "Refining the platform and exploring new possibilities",
    tasks: [
      "Gather and analyze performance data across all subsidiaries",
      "Implement AI-driven optimizations",
      "Explore and integrate emerging technologies",
      "Expand platform capabilities based on business needs",
      "Begin development of next-generation features",
    ],
    progress: 0,
  },
]

export default function BlueprintImplementation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Implementation", href: "/unified-ecosystem/implementation" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: Implementation Roadmap</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our strategic plan for rolling out The Blueprint Platform across Hubverse, transforming our
          operations and client experiences.
        </p>
      </motion.div>

      <div className="space-y-8 mb-12">
        {implementationPhases.map((phase, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{phase.phase}</CardTitle>
              <CardDescription>
                {phase.timeline} - {phase.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Key Tasks:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Progress</span>
                  <span>{phase.progress}% Complete</span>
                </div>
                <Progress value={phase.progress} className="w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ensuring Successful Implementation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The implementation of The Blueprint Platform is a complex and transformative process that requires careful
            planning, execution, and ongoing refinement. Our phased approach allows us to build a solid foundation,
            integrate core components, and gradually expand the platform's capabilities while minimizing disruption to
            ongoing operations.
          </p>
          <p className="mb-4">Key to our success will be:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Continuous communication and collaboration across all subsidiaries</li>
            <li>Rigorous testing and quality assurance at each phase</li>
            <li>Comprehensive training programs to ensure smooth adoption</li>
            <li>Flexibility to adapt the roadmap based on emerging needs and technologies</li>
            <li>Regular assessment and optimization of the platform's performance</li>
          </ul>
          <p>
            By following this strategic roadmap, we aim to fully realize the transformative potential of The Blueprint
            Platform, positioning Hubverse at the forefront of innovation and operational excellence.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/unified-ecosystem/case-studies">
                Explore Blueprint Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

