import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd"
import type { Project } from "@/types/project"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ProjectKanbanProps {
  projects: Project[]
  stages: string[]
  onDragEnd: (result: DropResult) => void
}

export function ProjectKanban({ projects, stages, onDragEnd }: ProjectKanbanProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-4">{stage}</h3>
            <Droppable droppableId={stage}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {projects
                    .filter((project) => project.stage === stage)
                    .map((project, index) => (
                      <Draggable key={project.id} draggableId={project.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-background rounded-lg shadow-sm"
                          >
                            <Card>
                              <CardContent className="p-4">
                                <h4 className="font-semibold mb-2">{project.name}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                                <div className="flex items-center space-x-2 mb-2">
                                  <Progress value={project.progress} className="flex-grow" />
                                  <span className="text-sm font-medium">{project.progress}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <Badge
                                    variant={
                                      project.priority === "High"
                                        ? "destructive"
                                        : project.priority === "Medium"
                                        ? "secondary"
                                        : "default"
                                    }
                                  >
                                    {project.priority}
                                  </Badge>
                                  <div className="flex -space-x-2">
                                    {project.team.map((member, idx) => (
                                      <Avatar key={idx} className="border-2 border-background w-8 h-8">
                                        <AvatarFallback>{member[0]}</AvatarFallback>
                                      </Avatar>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  )
}