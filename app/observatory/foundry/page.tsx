"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, LineChart, PieChart, BarChart2 } from "lucide-react"

export default function FoundryPage() {
  return (
    <div className="container py-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">The Foundry</h1>
        <p className="text-muted-foreground">
          Shaping the Future of Hubverse: Explore the engine of innovation driving our
          diverse portfolio of companies.
        </p>
      </div>

      {/* Overview Section */}
      <Card>
        <CardHeader>
          <CardTitle>The Foundry: Shaping the Future of Hubverse</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Explore the engine of innovation driving Hubverse. Discover upcoming projects,
            technologies, and initiatives across our diverse portfolio of companies.
          </p>
          <p>
            The Foundry is a dynamic hub where ideas are forged into reality. This page
            provides a comprehensive overview of the groundbreaking projects, services,
            and products under development across all Hubverse subsidiaries. Dive deep
            into our strategic roadmap, explore the resources empowering our teams, and
            witness the journey of each project from ideation to launch.
          </p>
          <p>
            Our vision is to create a seamless ecosystem where each company supports and
            amplifies the others, driving innovation and creating unparalleled value. We
            strive for a future defined by sustainability, accessibility, and
            human-centric technological advancement.
          </p>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50%</div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <Card>
        <CardHeader>
          <CardTitle>Section Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Projects by Category */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <PieChart className="h-4 w-4" />
                  <CardTitle className="text-sm font-medium">Projects by Category</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Technology</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <Progress value={40} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Education</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <Progress value={20} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Finance</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <Progress value={20} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Agriculture</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <Progress value={20} />
                </div>
              </CardContent>
            </Card>

            {/* Project Status Distribution */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart2 className="h-4 w-4" />
                  <CardTitle className="text-sm font-medium">Project Status Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Planning</span>
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <Progress value={40} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">In Development</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <Progress value={60} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Testing</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                  <Progress value={0} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Launch</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                  <Progress value={0} />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="launchpad">Launchpad</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Project Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Smart Home Energy Management System"
                description="AI-powered system for optimizing home energy consumption"
                progress={75}
                status="In Development"
                priority="High"
                category="Technology"
              />
              <ProjectCard
                title="AI-Powered Personalized Learning Platform"
                description="Adaptive learning platform using AI to personalize learning paths"
                progress={25}
                status="Planning"
                priority="High"
                category="Education"
              />
              <ProjectCard
                title="Decentralized Finance (DeFi) Platform"
                description="Secure and transparent DeFi platform built on blockchain technology"
                progress={60}
                status="In Development"
                priority="Medium"
                category="Finance"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="launchpad" className="space-y-4">
          {/* Launchpad Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Launchpad: Resources and Tools</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <ResourceCard
                title="AI & Machine Learning Platform"
                description="Comprehensive suite of AI and ML tools"
                provider="Elementalis"
              />
              <ResourceCard
                title="Cloud Infrastructure"
                description="Scalable and secure cloud services"
                provider="Elementalis"
              />
              <ResourceCard
                title="Data Analytics Suite"
                description="Powerful tools for data visualization and BI"
                provider="Elementalis"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  progress,
  status,
  priority,
  category,
}: {
  title: string
  description: string
  progress: number
  status: string
  priority: string
  category: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Progress value={progress} className="mt-2" />
          <div className="mt-2 flex items-center justify-between text-sm">
            <span>{progress}%</span>
            <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-yellow-500">
              {status}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium">{category}</span>
            <span
              className={`rounded-full px-2 py-1 text-sm ${
                priority === "High"
                  ? "bg-red-500/10 text-red-500"
                  : "bg-yellow-500/10 text-yellow-500"
              }`}
            >
              {priority}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ResourceCard({
  title,
  description,
  provider,
}: {
  title: string
  description: string
  provider: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-sm text-muted-foreground">By {provider}</p>
          <Button variant="outline" className="w-full mt-4">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
