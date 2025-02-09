"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-react'

type Task = {
  id: number;
  title: string;
  completed: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Review business plan", completed: false },
    { id: 2, title: "Schedule team meeting", completed: true },
    { id: 3, title: "Prepare investor presentation", completed: false },
  ])
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const addTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTaskTitle, completed: false }])
      setNewTaskTitle("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>Manage your to-do list</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Add a new task"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <Button onClick={addTask}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
          <div className="space-y-2">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                >
                  {task.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

