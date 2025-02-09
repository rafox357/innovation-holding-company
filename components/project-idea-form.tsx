"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface ProjectIdea {
  title: string
  description: string
  category: string
  estimatedBudget: string
  timeframe: string
}

export function ProjectIdeaForm() {
  const [formData, setFormData] = useState<ProjectIdea>({
    title: "",
    description: "",
    category: "",
    estimatedBudget: "",
    timeframe: "",
  })

  const handleInputChange = (field: keyof ProjectIdea, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the data to a server
    console.log("Submitting project idea:", formData)
    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      estimatedBudget: "",
      timeframe: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter your project title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Describe your project idea"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="estimatedBudget">Estimated Budget</Label>
        <Input
          id="estimatedBudget"
          value={formData.estimatedBudget}
          onChange={(e) => handleInputChange("estimatedBudget", e.target.value)}
          placeholder="Enter estimated budget"
          type="number"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeframe">Estimated Timeframe</Label>
        <Input
          id="timeframe"
          value={formData.timeframe}
          onChange={(e) => handleInputChange("timeframe", e.target.value)}
          placeholder="e.g., 6 months, 1 year"
        />
      </div>

      <Button type="submit" className="w-full">
        Submit Project Idea
      </Button>
    </form>
  )
}

