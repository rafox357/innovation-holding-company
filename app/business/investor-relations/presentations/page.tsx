"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Play, Calendar, Users, Presentation } from "lucide-react"

const presentations = [
  {
    title: "Q4 2024 Earnings Call",
    type: "Earnings",
    date: "January 25, 2025",
    duration: "60 min",
    speakers: [
      "Michael Johnson - CEO",
      "Sarah Chen - CFO",
      "David Wilson - COO",
    ],
    materials: [
      { name: "Presentation Deck", format: "PDF", size: "3.2 MB" },
      { name: "Webcast Recording", format: "MP4", size: "125 MB" },
      { name: "Transcript", format: "PDF", size: "0.8 MB" },
    ],
  },
  {
    title: "Innovation Summit 2024",
    type: "Conference",
    date: "December 10, 2024",
    duration: "120 min",
    speakers: [
      "Michael Johnson - CEO",
      "Emily Brown - CTO",
      "James Lee - Head of R&D",
    ],
    materials: [
      { name: "Keynote Presentation", format: "PDF", size: "5.5 MB" },
      { name: "Event Recording", format: "MP4", size: "250 MB" },
      { name: "Innovation Report", format: "PDF", size: "2.1 MB" },
    ],
  },
  {
    title: "Investor Day 2024",
    type: "Investor Event",
    date: "September 15, 2024",
    duration: "180 min",
    speakers: [
      "Michael Johnson - CEO",
      "Sarah Chen - CFO",
      "Emily Brown - CTO",
      "David Wilson - COO",
    ],
    materials: [
      { name: "Strategic Overview", format: "PDF", size: "4.8 MB" },
      { name: "Full Event Recording", format: "MP4", size: "350 MB" },
      { name: "Financial Outlook", format: "PDF", size: "2.5 MB" },
    ],
  },
]

export default function PresentationsPage() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4">Presentations</h1>
            <p className="text-xl text-muted-foreground">
              Earnings calls, conferences, and investor events
            </p>
          </div>
          <Button size="lg">
            <Calendar className="mr-2 h-4 w-4" />
            Upcoming Events
          </Button>
        </div>

        {/* Event Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Presentation className="h-6 w-6 text-primary" />
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">25</div>
              <p className="text-muted-foreground">Past 12 Months</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Attendees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5,000+</div>
              <p className="text-muted-foreground">Total Reach</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Play className="h-6 w-6 text-primary" />
              <CardTitle>Recordings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">100+</div>
              <p className="text-muted-foreground">Available</p>
            </CardContent>
          </Card>
        </div>

        {/* Presentations List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Presentations</h2>
          {presentations.map((presentation) => (
            <Card key={presentation.title}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{presentation.title}</h3>
                      <Badge
                        variant={presentation.type === "Earnings" ? "default" : "outline"}
                      >
                        {presentation.type}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">
                        Date: {presentation.date}
                      </p>
                      <p className="text-muted-foreground">
                        Duration: {presentation.duration}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button>
                      <Play className="mr-2 h-4 w-4" />
                      Watch Recording
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Speakers:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {presentation.speakers.map((speaker, index) => (
                        <li key={index} className="text-muted-foreground">
                          {speaker}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Materials:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {presentation.materials.map((material, index) => (
                        <Button key={index} variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          {material.name} ({material.size})
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Q1 2025 Earnings Call</h3>
              <p className="text-muted-foreground">
                April 25, 2025 - Join us for our Q1 2025 financial results
              </p>
              <Button variant="outline">Add to Calendar</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Tech Showcase 2025</h3>
              <p className="text-muted-foreground">
                May 15, 2025 - Annual technology and innovation showcase
              </p>
              <Button variant="outline">Add to Calendar</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
