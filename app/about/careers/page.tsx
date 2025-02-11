"use client";

import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Briefcase, MapPin, Clock, DollarSign, Search } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description: "We're looking for a Senior Software Engineer to help build and scale our core platform.",
    requirements: [
      "7+ years of experience in software development",
      "Strong expertise in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Track record of leading technical projects",
    ],
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Join our product team to help define and execute our product strategy.",
    requirements: [
      "5+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with B2B SaaS products",
      "Excellent communication skills",
    ],
  },
  {
    id: 3,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Drive our marketing initiatives and help grow our brand presence.",
    requirements: [
      "4+ years of B2B marketing experience",
      "Experience with content marketing and SEO",
      "Strong project management skills",
      "Data-driven approach to marketing",
    ],
  },
]

const departments = [
  "All Departments",
  "Engineering",
  "Product",
  "Marketing",
  "Sales",
  "Operations",
]

const locations = [
  "All Locations",
  "San Francisco, CA",
  "New York, NY",
  "Remote",
]

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Join Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Help us shape the future of innovation. We're always looking for talented individuals who share our passion for excellence.
        </p>
      </div>

      <Card className="cosmic-card mb-12">
        <CardHeader>
          <CardTitle className="cosmic-title text-2xl">Why Join Hubverse?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-4">
              <DollarSign className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold mb-2">Competitive Compensation</h3>
              <p className="text-sm text-muted-foreground">
                Excellent salary and equity packages
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Clock className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-sm text-muted-foreground">
                Flexible hours and remote options
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Briefcase className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-sm text-muted-foreground">
                Continuous learning and development
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <MapPin className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold mb-2">Global Impact</h3>
              <p className="text-sm text-muted-foreground">
                Work on projects that matter
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 cosmic-title">Open Positions</h2>
        
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search positions..."
                className="pl-8"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              {departments.map((dept) => (
                <option key={dept} value={dept.toLowerCase()}>
                  {dept}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select>
              {locations.map((loc) => (
                <option key={loc} value={loc.toLowerCase()}>
                  {loc}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <Card key={job.id} className="cosmic-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="cosmic-title text-xl mb-2">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{job.department}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge variant="outline">{job.salary}</Badge>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{job.description}</p>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
