"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Breadcrumb } from "@/components/breadcrumb"

// This would typically come from an API
interface Project {
  id: number
  name: string
  description: string
  status: string
  progress: number
}

const projects: Project[] = [
  {
    id: 1,
    name: "Big Bang",
    description: "Revolutionary learning management system",
    status: "In Development",
    progress: 64,
  },
  {
    id: 2,
    name: "Cosmic Dark Ages",
    description: "AI-powered personalized learning paths",
    status: "Planning",
    progress: 34,
  },
  // ... other projects
]

export default function AdminProjects() {
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
  }

  const handleSaveProject = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send an API request to update the project
    console.log("Saving project:", editingProject)
    setEditingProject(null)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Admin", href: "/admin" },
        { label: "Projects", href: "/admin/projects" }
      ]} />

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Admin: Project Management</h1>
        <p className="text-lg text-muted-foreground">
          Manage and update project details
        </p>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>View and edit project details</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>{project.progress}%</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEditProject(project)}>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {editingProject && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Edit Project: {editingProject.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  value={editingProject.name}
                  onChange={(e) => setEditingProject({...editingProject, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={editingProject.status}
                  onValueChange={(value) => setEditingProject({...editingProject, status: value})}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Planning">Planning</SelectItem>
                    <SelectItem value="In Development">In Development</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="progress">Progress</Label>
                <Input
                  id="progress"
                  type="number"
                  min="0"
                  max="100"
                  value={editingProject.progress}
                  onChange={(e) => setEditingProject({...editingProject, progress: parseInt(e.target.value)})}
                />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
