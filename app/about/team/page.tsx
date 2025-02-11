"use client";

import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const executiveTeam = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Visionary leader with 15+ years of experience in tech and entrepreneurship. Previously founded and sold two successful startups.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Tech innovator with a passion for cutting-edge solutions and scalable architectures. Led engineering teams at major tech companies.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mike Johnson",
    role: "CFO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Financial expert with a track record of driving growth and optimizing operations. Former investment banker with expertise in M&A.",
    linkedin: "https://linkedin.com",
  },
]

const departmentLeads = [
  {
    name: "Sarah Wilson",
    role: "Head of Product",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Product strategist with a keen eye for user experience and market opportunities.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "David Chen",
    role: "Head of Engineering",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Technical architect specializing in distributed systems and cloud infrastructure.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Emily Brown",
    role: "Head of Marketing",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Marketing expert with experience in brand development and growth strategies.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Alex Rodriguez",
    role: "Head of Sales",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Sales leader with a proven track record in enterprise software and solutions.",
    linkedin: "https://linkedin.com",
  },
]

const advisoryBoard = [
  {
    name: "Dr. Robert Lee",
    role: "Technology Advisor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "AI and machine learning expert, professor at leading technical university.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Lisa Chang",
    role: "Strategy Advisor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former CEO of Fortune 500 company, expert in corporate strategy and scaling.",
    linkedin: "https://linkedin.com",
  },
]

function TeamGrid({ members }: { members: typeof executiveTeam }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <Card key={member.name} className="cosmic-card">
          <CardHeader>
            <div className="flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <div>
                <CardTitle className="cosmic-title text-xl">{member.name}</CardTitle>
                <Badge variant="secondary" className="mt-2 cosmic-button">
                  {member.role}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center mb-4">{member.bio}</p>
            <div className="flex justify-center">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                LinkedIn Profile
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the talented individuals who make Hubverse possible. Our diverse team brings together expertise from various fields to drive innovation and success.
        </p>
      </div>

      <Tabs defaultValue="executive" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="executive">Executive Team</TabsTrigger>
          <TabsTrigger value="department">Department Leads</TabsTrigger>
          <TabsTrigger value="advisory">Advisory Board</TabsTrigger>
        </TabsList>

        <TabsContent value="executive">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold cosmic-title text-center">Executive Leadership</h2>
            <TeamGrid members={executiveTeam} />
          </div>
        </TabsContent>

        <TabsContent value="department">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold cosmic-title text-center">Department Leaders</h2>
            <TeamGrid members={departmentLeads} />
          </div>
        </TabsContent>

        <TabsContent value="advisory">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold cosmic-title text-center">Advisory Board</h2>
            <TeamGrid members={advisoryBoard} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
