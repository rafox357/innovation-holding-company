'use client';

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ArrowLeft } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { memo } from "react"
import { Suspense } from "react"

interface KPI {
  name: string
  current: number
  target: number
  unit?: string
}

interface TeamMember {
  name: string
  role: string
  company: string
  avatar?: string
}

interface Project {
  title: string
  status: "todo" | "inProgress" | "done"
}

interface SubsidiaryData {
  name: string
  description: string
  kpis: KPI[]
  team: TeamMember[]
  projects: Project[]
  revenueData: { month: string; value: number }[]
}

const subsidiaryData: Record<string, SubsidiaryData> = {
  anexo: {
    name: "Anexo",
    description: "Online education platform",
    kpis: [
      { name: "Active Users", current: 15000, target: 20000, unit: "" },
      { name: "Course Completion Rate", current: 75, target: 85, unit: "%" },
      { name: "Revenue", current: 500000, target: 750000, unit: "$" },
    ],
    team: [
      { name: "Alice Johnson", role: "CEO", company: "Hubverse", avatar: "" },
      { name: "Bob Smith", role: "CTO", company: "Elementalis", avatar: "" },
      { name: "Carol Williams", role: "CMO", company: "Fundex", avatar: "" },
      { name: "David Brown", role: "COO", company: "Anexo", avatar: "" },
      { name: "Eva Davis", role: "CFO", company: "Thryvus & Co.", avatar: "" },
    ],
    projects: [
      { title: "Develop new marketing strategy", status: "todo" },
      { title: "Expand Fundex client base", status: "todo" },
      { title: "Launch Anexo online course platform", status: "inProgress" },
      { title: "Implement AI chatbot for customer support", status: "inProgress" },
      { title: "Open new Cosmo & Compass co-working space", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 1500000 },
      { month: "Feb", value: 2000000 },
      { month: "Mar", value: 2500000 },
      { month: "Apr", value: 3000000 },
      { month: "May", value: 3500000 },
      { month: "Jun", value: 4000000 },
    ],
  },
  fundex: {
    name: "Fundex",
    description: "Digital marketing agency",
    kpis: [
      { name: "Clients", current: 100, target: 150, unit: "" },
      { name: "Website Traffic", current: 100000, target: 150000, unit: "" },
      { name: "Revenue", current: 250000, target: 400000, unit: "$" },
    ],
    team: [
      { name: "Carol Williams", role: "CMO", company: "Fundex", avatar: "" },
      { name: "Frank Lee", role: "Head of SEO", company: "Fundex", avatar: "" },
      { name: "Grace Chen", role: "Content Director", company: "Fundex", avatar: "" },
    ],
    projects: [
      { title: "Launch new SEO campaign", status: "inProgress" },
      { title: "Develop social media strategy", status: "todo" },
      { title: "Implement marketing automation", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 200000 },
      { month: "Feb", value: 220000 },
      { month: "Mar", value: 240000 },
      { month: "Apr", value: 260000 },
      { month: "May", value: 280000 },
      { month: "Jun", value: 300000 },
    ],
  },
  elementalis: {
    name: "Elementalis",
    description: "Technology solutions provider",
    kpis: [
      { name: "Projects Completed", current: 50, target: 75, unit: "" },
      { name: "Client Satisfaction", current: 90, target: 95, unit: "%" },
      { name: "Revenue", current: 750000, target: 1000000, unit: "$" },
    ],
    team: [
      { name: "Bob Smith", role: "CTO", company: "Elementalis", avatar: "" },
      { name: "Hank Wilson", role: "Lead Developer", company: "Elementalis", avatar: "" },
      { name: "Irene Nguyen", role: "UX Designer", company: "Elementalis", avatar: "" },
    ],
    projects: [
      { title: "Develop AI-powered analytics tool", status: "inProgress" },
      { title: "Launch cloud migration service", status: "todo" },
      { title: "Complete cybersecurity audit", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 600000 },
      { month: "Feb", value: 650000 },
      { month: "Mar", value: 700000 },
      { month: "Apr", value: 750000 },
      { month: "May", value: 800000 },
      { month: "Jun", value: 850000 },
    ],
  },
  "estore-district": {
    name: "Estore District",
    description: "E-commerce marketplace",
    kpis: [
      { name: "Active Sellers", current: 5000, target: 7500, unit: "" },
      { name: "Monthly Transactions", current: 50000, target: 75000, unit: "" },
      { name: "Revenue", current: 1000000, target: 1500000, unit: "$" },
    ],
    team: [
      { name: "Jack Robinson", role: "CEO", company: "Estore District", avatar: "" },
      { name: "Karen Taylor", role: "Head of Seller Relations", company: "Estore District", avatar: "" },
      { name: "Liam O'Connor", role: "CTO", company: "Estore District", avatar: "" },
    ],
    projects: [
      { title: "Implement new payment gateway", status: "inProgress" },
      { title: "Launch mobile app", status: "todo" },
      { title: "Optimize search algorithm", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 800000 },
      { month: "Feb", value: 900000 },
      { month: "Mar", value: 1000000 },
      { month: "Apr", value: 1100000 },
      { month: "May", value: 1200000 },
      { month: "Jun", value: 1300000 },
    ],
  },
  "cosmo-and-compass": {
    name: "Cosmo & Compass Co.",
    description: "Real estate and co-working spaces",
    kpis: [
      { name: "Occupancy Rate", current: 85, target: 95, unit: "%" },
      { name: "Customer Satisfaction", current: 4.2, target: 4.5, unit: "/5" },
      { name: "Revenue", current: 2000000, target: 2500000, unit: "$" },
    ],
    team: [
      { name: "Mia Johnson", role: "CEO", company: "Cosmo & Compass Co.", avatar: "" },
      { name: "Nathan Brown", role: "Head of Property Management", company: "Cosmo & Compass Co.", avatar: "" },
      { name: "Olivia Garcia", role: "Community Manager", company: "Cosmo & Compass Co.", avatar: "" },
    ],
    projects: [
      { title: "Open new location in downtown area", status: "inProgress" },
      { title: "Implement smart building technology", status: "todo" },
      { title: "Launch virtual office services", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 1800000 },
      { month: "Feb", value: 1900000 },
      { month: "Mar", value: 2000000 },
      { month: "Apr", value: 2100000 },
      { month: "May", value: 2200000 },
      { month: "Jun", value: 2300000 },
    ],
  },
  exonet: {
    name: "ExoNet",
    description: "Business consulting firm",
    kpis: [
      { name: "Clients", current: 75, target: 100, unit: "" },
      { name: "Project Success Rate", current: 92, target: 95, unit: "%" },
      { name: "Revenue", current: 1500000, target: 2000000, unit: "$" },
    ],
    team: [
      { name: "Patricia Lee", role: "Managing Partner", company: "ExoNet", avatar: "" },
      { name: "Quentin Foster", role: "Senior Consultant", company: "ExoNet", avatar: "" },
      { name: "Rachel Kim", role: "Head of Research", company: "ExoNet", avatar: "" },
    ],
    projects: [
      { title: "Develop AI-driven business analytics tool", status: "inProgress" },
      { title: "Launch sustainability consulting service", status: "todo" },
      { title: "Complete digital transformation for major client", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 1300000 },
      { month: "Feb", value: 1400000 },
      { month: "Mar", value: 1500000 },
      { month: "Apr", value: 1600000 },
      { month: "May", value: 1700000 },
      { month: "Jun", value: 1800000 },
    ],
  },
  thryvus: {
    name: "Thryvus & Co.",
    description: "Financial services company",
    kpis: [
      { name: "Assets Under Management", current: 500000000, target: 750000000, unit: "$" },
      { name: "Client Retention Rate", current: 95, target: 98, unit: "%" },
      { name: "Revenue", current: 5000000, target: 7500000, unit: "$" },
    ],
    team: [
      { name: "Eva Davis", role: "CFO", company: "Thryvus & Co.", avatar: "" },
      { name: "Samuel White", role: "Head of Investment Strategy", company: "Thryvus & Co.", avatar: "" },
      { name: "Tara Patel", role: "Risk Management Director", company: "Thryvus & Co.", avatar: "" },
    ],
    projects: [
      { title: "Launch robo-advisory platform", status: "inProgress" },
      { title: "Expand into emerging markets", status: "todo" },
      { title: "Implement blockchain-based transaction system", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 4500000 },
      { month: "Feb", value: 4700000 },
      { month: "Mar", value: 4900000 },
      { month: "Apr", value: 5100000 },
      { month: "May", value: 5300000 },
      { month: "Jun", value: 5500000 },
    ],
  },
  ponce: {
    name: "Ponce Industries",
    description: "Manufacturing and logistics company",
    kpis: [
      { name: "Production Efficiency", current: 85, target: 90, unit: "%" },
      { name: "On-Time Delivery Rate", current: 92, target: 98, unit: "%" },
      { name: "Revenue", current: 10000000, target: 12000000, unit: "$" },
    ],
    team: [
      { name: "Ulysses Ponce", role: "CEO", company: "Ponce Industries", avatar: "" },
      { name: "Victoria Chang", role: "Head of Operations", company: "Ponce Industries", avatar: "" },
      { name: "Walter Simmons", role: "Supply Chain Director", company: "Ponce Industries", avatar: "" },
    ],
    projects: [
      { title: "Implement IoT in manufacturing process", status: "inProgress" },
      { title: "Expand green logistics initiative", status: "todo" },
      { title: "Complete factory automation upgrade", status: "done" },
    ],
    revenueData: [
      { month: "Jan", value: 9000000 },
      { month: "Feb", value: 9500000 },
      { month: "Mar", value: 10000000 },
      { month: "Apr", value: 10500000 },
      { month: "May", value: 11000000 },
      { month: "Jun", value: 11500000 },
    ],
  },
}

const MemoizedKPI = memo(function KPI({ kpi }: { kpi: KPI }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>{kpi.name}</span>
        <span>
          {kpi.current}
          {kpi.unit} / {kpi.target}
          {kpi.unit}
        </span>
      </div>
      <Progress value={(kpi.current / kpi.target) * 100} className="cosmic-progress h-2" />
    </div>
  )
})

const MemoizedTeamMember = memo(function TeamMember({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
      <div className="flex items-center space-x-4">
        <Avatar>
          {member.avatar ? (
            <Image
              src={member.avatar || "/placeholder.svg"}
              alt={member.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <div className="font-medium">{member.name}</div>
          <div className="text-sm text-muted-foreground">{member.role}</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-muted-foreground">{member.company}</span>
        <Button variant="ghost" size="icon" className="cosmic-button">
          ×
        </Button>
      </div>
    </div>
  )
})

export default function SubsidiaryPage({ params }: { params: { slug: string } }) {
  const [subsidiary, setSubsidiary] = useState<SubsidiaryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSubsidiary(subsidiaryData[params.slug])
      setLoading(false)
    }, 1000)
  }, [params.slug])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (!subsidiary) {
    return <div className="text-center text-foreground">Subsidiary not found</div>
  }

  return (
    <div className="container mx-auto p-6 text-foreground bg-background min-h-screen">
      <div className="mb-8">
        <Link href="/subsidiaries" className="flex items-center text-primary hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subsidiaries
        </Link>
        <h1 className="text-4xl font-bold mb-2 cosmic-title glow">{subsidiary.name}</h1>
        <p className="text-muted-foreground">{subsidiary.description}</p>
      </div>

      <div className="flex space-x-4 mb-6">
        {["overview", "financials", "team", "projects"].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className="cosmic-button"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        {activeTab === "overview" && (
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-primary">{subsidiary.name} KPIs</CardTitle>
              <CardDescription>Key performance indicators for {subsidiary.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {subsidiary.kpis.map((kpi) => (
                <MemoizedKPI key={kpi.name} kpi={kpi} />
              ))}
            </CardContent>
          </Card>
        )}

        {activeTab === "financials" && (
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-primary">Financial Dashboard</CardTitle>
                <CardDescription>Key financial metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={subsidiary.revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="#888888" />
                      <YAxis stroke="#888888" />
                      <Tooltip
                        contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid #444" }}
                        labelStyle={{ color: "#fff" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ fill: "#8884d8", r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </Suspense>
        )}

        {activeTab === "team" && (
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-primary">Team Management</CardTitle>
                <CardDescription>Manage team members across all subsidiaries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button className="cosmic-button">
                    <span className="mr-2">+</span>
                    Add Member
                  </Button>
                </div>
                <div className="space-y-4">
                  {subsidiary.team.map((member) => (
                    <MemoizedTeamMember key={member.name} member={member} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Suspense>
        )}

        {activeTab === "projects" && (
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-primary">Project Board</CardTitle>
                <CardDescription>Manage and track your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button className="cosmic-button">
                    <span className="mr-2">+</span>
                    Add Project
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["todo", "inProgress", "done"].map((status) => (
                    <div key={status}>
                      <h3 className="font-medium mb-4 text-primary capitalize">
                        {status.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <div className="space-y-4">
                        {subsidiary.projects
                          .filter((p) => p.status === status)
                          .map((project, index) => (
                            <div key={index} className="p-4 bg-secondary rounded-lg flex justify-between items-center">
                              <span>{project.title}</span>
                              <Button variant="ghost" size="icon" className="cosmic-button">
                                ×
                              </Button>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Suspense>
        )}
      </Suspense>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-6 w-1/2" />
      <div className="flex space-x-4">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
      <Skeleton className="h-[400px] w-full" />
    </div>
  )
}
