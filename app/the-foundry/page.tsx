"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ProjectSection } from "@/components/project-section"
import { ProjectStats } from "@/components/project-stats"
import { ProjectFilters } from "@/components/project-filters"
import type { Project } from "@/types/project"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProjectForm } from "@/components/project-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FoundryOverview } from "@/components/foundry-overview"
import { CompanyRoadmap } from "@/components/company-roadmap"
import { LaunchpadResources } from "@/components/launchpad-resources"
import { OverviewAnalytics } from "@/components/overview-analytics"
import { RoadmapAnalytics } from "@/components/roadmap-analytics"
import { LaunchpadAnalytics } from "@/components/launchpad-analytics"
import { PipelineAnalytics } from "@/components/pipeline-analytics"

// Initial project data (you can expand this with more detailed project information)
const initialProjects: Project[] = [
  {
    id: 1,
    name: "Smart Home Energy Management System",
    description: "AI-powered system for optimizing home energy consumption",
    status: "In Development",
    progress: 75,
    team: ["Sarah Chen", "David Lee", "Maria Rodriguez"],
    category: "Technology",
    priority: "High",
    stage: "Development",
    timeline: "Q4 2024",
    subsidiary: "Elementalis",
  },
  {
    id: 2,
    name: "AI-Powered Personalized Learning Platform",
    description: "Adaptive learning platform using AI to personalize learning paths",
    status: "Planning",
    progress: 25,
    team: ["John Smith", "Jane Doe", "Peter Jones"],
    category: "Education",
    priority: "High",
    stage: "Planning",
    timeline: "Q1 2025",
    subsidiary: "EduVerse",
  },
  {
    id: 3,
    name: "Decentralized Finance (DeFi) Platform",
    description: "Secure and transparent DeFi platform built on blockchain technology",
    status: "In Development",
    progress: 60,
    team: ["Alice Brown", "Bob Johnson", "Charlie Williams"],
    category: "Finance",
    priority: "Medium",
    stage: "Development",
    timeline: "Q2 2025",
    subsidiary: "ChainLink",
  },
  {
    id: 4,
    name: "Sustainable Agriculture Monitoring System",
    description: "IoT-based system for monitoring and optimizing agricultural practices",
    status: "Planning",
    progress: 10,
    team: ["Eva Davis", "Frank Garcia", "Grace Hernandez"],
    category: "Agriculture",
    priority: "Low",
    stage: "Ideation",
    timeline: "Q3 2025",
    subsidiary: "GreenThumb",
  },
  {
    id: 5,
    name: "Next-Generation Cloud Computing Platform",
    description: "Scalable and secure cloud platform for enterprise applications",
    status: "In Development",
    progress: 80,
    team: ["Henry Jackson", "Ivy King", "Jack Lewis"],
    category: "Technology",
    priority: "High",
    stage: "Testing",
    timeline: "Q4 2024",
    subsidiary: "CloudNine",
  },
]

const stages = ["Ideation", "Prototyping", "Development", "Testing", "Pre-Launch", "Launch", "Iteration"]

export default function TheFoundry() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredProjects = projects.filter(
    (project) =>
      (project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === "all" || project.status.toLowerCase() === statusFilter.toLowerCase()) &&
      (categoryFilter === "all" || project.category.toLowerCase() === categoryFilter.toLowerCase()),
  )

  const handleProjectUpdate = (updatedProject: Project) => {
    setProjects(projects.map((p) => (p.id === updatedProject.id ? updatedProject : p)))
  }

  const handleAddProject = (newProject: Partial<Project>) => {
    const projectToAdd = {
      ...newProject,
      id: projects.length + 1,
      progress: newProject.progress || 0,
      team: newProject.team || [],
    } as Project
    setProjects([...projects, projectToAdd])
    setIsAddDialogOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Foundry</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Shaping the Future of Hubverse: Explore the engine of innovation driving our diverse portfolio of companies.
        </p>
      </motion.div>

      <FoundryOverview />

      <ProjectStats projects={projects} />

      <div className="my-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <ProjectFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>Enter the details of the new project to add to The Foundry.</DialogDescription>
            </DialogHeader>
            <ProjectForm onSubmit={handleAddProject} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="launchpad">Launchpad</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <ProjectSection
            section={{
              title: "Project Overview",
              description: "All current projects across Hubverse companies",
              projects: filteredProjects,
            }}
            viewType="list"
            onProjectUpdate={handleProjectUpdate}
          />
        </TabsContent>

        <TabsContent value="roadmap">
          <CompanyRoadmap />
        </TabsContent>

        <TabsContent value="launchpad">
          <LaunchpadResources />
        </TabsContent>

        <TabsContent value="pipeline">
          <ProjectSection
            section={{
              title: "Project Pipeline",
              description: "Track projects through our development process",
              projects: filteredProjects,
            }}
            viewType="kanban"
            stages={stages}
            onProjectUpdate={handleProjectUpdate}
          />
        </TabsContent>
      </Tabs>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Section Analytics</h2>
        {activeTab === "overview" && <OverviewAnalytics projects={projects} />}
        {activeTab === "roadmap" && <RoadmapAnalytics />}
        {activeTab === "launchpad" && <LaunchpadAnalytics />}
        {activeTab === "pipeline" && <PipelineAnalytics projects={projects} />}
      </motion.div>
    </div>
  )
}
