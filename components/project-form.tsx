import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Project = {
  id: string
  title: string
  status: "todo" | "inProgress" | "done"
}

type ProjectFormProps = {
  onSubmit: (project: Partial<Project>) => void
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title })
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
          required
        />
      </div>
      <Button type="submit">Add Project</Button>
    </form>
  )
}

