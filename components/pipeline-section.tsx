"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, AlertTriangle } from "lucide-react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const pipeline = {
  stages: [
    {
      name: "Ideation",
      description: "Initial concept development and validation",
      requirements: [
        { name: "Project Brief", status: "required" },
        { name: "Market Research", status: "required" },
        { name: "Feasibility Study", status: "optional" },
      ],
      deliverables: ["Project proposal document", "Market analysis report", "Initial resource estimates"],
      estimatedDuration: "2-4 weeks",
      keyMetrics: ["Market size validation", "Technical feasibility score", "Resource availability"],
    },
    {
      name: "Prototyping",
      description: "Building and testing initial prototypes",
      requirements: [
        { name: "Technical Specifications", status: "required" },
        { name: "Design Mockups", status: "required" },
        { name: "Resource Allocation", status: "required" },
      ],
      deliverables: ["Working prototype", "Technical documentation", "User feedback report"],
      estimatedDuration: "4-8 weeks",
      keyMetrics: ["Prototype completion rate", "User testing scores", "Technical debt assessment"],
    },
    {
      name: "Development",
      description: "Full-scale development and implementation",
      requirements: [
        { name: "Development Team", status: "required" },
        { name: "Sprint Planning", status: "required" },
        { name: "Quality Assurance", status: "required" },
      ],
      deliverables: ["Production-ready code", "Documentation updates", "Test coverage reports"],
      estimatedDuration: "8-12 weeks",
      keyMetrics: ["Sprint velocity", "Code quality metrics", "Bug resolution rate"],
    },
    {
      name: "Testing",
      description: "Comprehensive testing and refinement",
      requirements: [
        { name: "Test Plans", status: "required" },
        { name: "User Feedback", status: "required" },
        { name: "Performance Metrics", status: "required" },
      ],
      deliverables: ["Test results documentation", "Performance analysis", "User acceptance sign-off"],
      estimatedDuration: "2-4 weeks",
      keyMetrics: ["Test coverage percentage", "Bug severity distribution", "User satisfaction score"],
    },
    {
      name: "Launch",
      description: "Final preparations and public release",
      requirements: [
        { name: "Launch Checklist", status: "required" },
        { name: "Marketing Materials", status: "required" },
        { name: "Support Documentation", status: "required" },
      ],
      deliverables: ["Release documentation", "Marketing collateral", "Support procedures"],
      estimatedDuration: "1-2 weeks",
      keyMetrics: ["Launch readiness score", "Initial user adoption", "System stability metrics"],
    },
  ],
  currentStage: "Development",
  progress: {
    Ideation: 100,
    Prototyping: 100,
    Development: 65,
    Testing: 0,
    Launch: 0,
  },
}

const projects = [
  { id: "1", name: "Project A", stage: "Ideation" },
  { id: "2", name: "Project B", stage: "Prototyping" },
  { id: "3", name: "Project C", stage: "Development" },
  { id: "4", name: "Project D", stage: "Testing" },
  { id: "5", name: "Project E", stage: "Launch" },
]

export function PipelineSection() {
  const [activeStage, setActiveStage] = useState(pipeline.currentStage)
  const [projectList, setProjectList] = useState(projects)

  const getStageStatus = (stageName: string) => {
    const progress = pipeline.progress[stageName]
    if (progress === 100) return "completed"
    if (progress > 0) return "in-progress"
    if (stageName === pipeline.currentStage) return "current"
    return "pending"
  }

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newProjects = Array.from(projectList)
    const [reorderedItem] = newProjects.splice(result.source.index, 1)
    reorderedItem.stage = result.destination.droppableId
    newProjects.splice(result.destination.index, 0, reorderedItem)

    setProjectList(newProjects)
  }

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="flex justify-between mb-8">
          {pipeline.stages.map((stage, index) => {
            const status = getStageStatus(stage.name)
            return (
              <div key={stage.name} className="flex flex-col items-center relative">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    status === "completed"
                      ? "bg-green-100 text-green-600"
                      : status === "in-progress"
                        ? "bg-blue-100 text-blue-600"
                        : status === "current"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {status === "completed" ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : status === "in-progress" ? (
                    <Clock className="h-6 w-6" />
                  ) : (
                    <AlertTriangle className="h-6 w-6" />
                  )}
                </div>
                <Button
                  variant={activeStage === stage.name ? "default" : "outline"}
                  className="w-32 text-sm"
                  onClick={() => setActiveStage(stage.name)}
                >
                  {stage.name}
                </Button>
                {index < pipeline.stages.length - 1 && (
                  <div className="absolute left-[100%] top-6 w-full h-0.5 bg-gray-200">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{
                        width: `${pipeline.progress[stage.name]}%`,
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-5 gap-4">
            {pipeline.stages.map((stage) => (
              <Droppable key={stage.name} droppableId={stage.name}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-4">{stage.name}</h3>
                    {projectList
                      .filter((project) => project.stage === stage.name)
                      .map((project, index) => (
                        <Draggable key={project.id} draggableId={project.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-background p-2 mb-2 rounded-md"
                            >
                              {project.name}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>

        {pipeline.stages.map((stage) => (
          <div key={stage.name} className={activeStage === stage.name ? "block" : "hidden"}>
            <Card>
              <CardHeader>
                <CardTitle>{stage.name}</CardTitle>
                <CardDescription>{stage.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="requirements">
                  <TabsList>
                    <TabsTrigger value="requirements">Requirements</TabsTrigger>
                    <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
                    <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
                  </TabsList>

                  <TabsContent value="requirements" className="mt-4">
                    <div className="space-y-4">
                      {stage.requirements.map((req, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{req.name}</span>
                          <Badge variant={req.status === "required" ? "default" : "secondary"}>{req.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="deliverables" className="mt-4">
                    <ul className="list-disc pl-4 space-y-2">
                      {stage.deliverables.map((deliverable, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="metrics" className="mt-4">
                    <ul className="list-disc pl-4 space-y-2">
                      {stage.keyMetrics.map((metric, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Stage Progress</span>
                    <span className="text-sm text-muted-foreground">{pipeline.progress[stage.name]}%</span>
                  </div>
                  <Progress value={pipeline.progress[stage.name]} className="h-2" />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <Badge variant="outline">
                    <Clock className="h-4 w-4 mr-2" />
                    {stage.estimatedDuration}
                  </Badge>
                  {pipeline.progress[stage.name] === 100 ? (
                    <Badge variant="success">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Completed
                    </Badge>
                  ) : pipeline.progress[stage.name] > 0 ? (
                    <Badge>In Progress</Badge>
                  ) : (
                    <Badge variant="outline">Pending</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

