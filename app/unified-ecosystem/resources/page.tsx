"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Play, FileText } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const resources = {
  whitepapers: [
    {
      title: "The Blueprint Platform: A New Paradigm in Business Ecosystems",
      description:
        "An in-depth look at how The Blueprint Platform is revolutionizing business operations and collaboration.",
      fileSize: "2.5 MB",
      fileType: "PDF",
    },
    {
      title: "AI and Blockchain: The Technological Foundations of The Blueprint Platform",
      description: "Explore the cutting-edge technologies powering The Blueprint Platform.",
      fileSize: "3.1 MB",
      fileType: "PDF",
    },
    {
      title: "Implementing The Blueprint Platform: Strategies for Success",
      description: "A comprehensive guide to rolling out The Blueprint Platform in your organization.",
      fileSize: "4.2 MB",
      fileType: "PDF",
    },
  ],
  infographics: [
    {
      title: "The Blueprint Platform at a Glance",
      description: "A visual overview of The Blueprint Platform's key components and benefits.",
      fileSize: "1.8 MB",
      fileType: "PNG",
    },
    {
      title: "The Journey of Data in The Blueprint Platform",
      description: "Follow the path of data as it flows through The Blueprint Platform ecosystem.",
      fileSize: "2.2 MB",
      fileType: "PNG",
    },
    {
      title: "ROI of The Blueprint Platform",
      description: "Visualize the potential return on investment from implementing The Blueprint Platform.",
      fileSize: "1.5 MB",
      fileType: "PNG",
    },
  ],
  videos: [
    {
      title: "Introduction to The Blueprint Platform",
      description: "A quick overview of what The Blueprint Platform is and how it works.",
      duration: "5:32",
    },
    {
      title: "The Blueprint Platform in Action: Case Studies",
      description: "See real-world examples of how The Blueprint Platform is transforming businesses.",
      duration: "12:45",
    },
    {
      title: "Future of Business: The Blueprint Platform and Beyond",
      description: "Explore the future possibilities and upcoming features of The Blueprint Platform.",
      duration: "8:17",
    },
  ],
}

export default function BlueprintResources() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Resources", href: "/unified-ecosystem/resources" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: Resources</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Access a wealth of information about The Blueprint Platform through our curated collection of whitepapers,
          infographics, and video tutorials.
        </p>
      </motion.div>

      <Tabs defaultValue="whitepapers" className="space-y-8">
        <TabsList>
          <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
          <TabsTrigger value="infographics">Infographics</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
        </TabsList>

        <TabsContent value="whitepapers">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.whitepapers.map((whitepaper, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{whitepaper.title}</CardTitle>
                  <CardDescription>{whitepaper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {whitepaper.fileSize} • {whitepaper.fileType}
                  </p>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" /> Download Whitepaper
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="infographics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.infographics.map((infographic, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{infographic.title}</CardTitle>
                  <CardDescription>{infographic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {infographic.fileSize} • {infographic.fileType}
                  </p>
                  <Button>
                    <Download className="mr-2 h-4 w-4" /> Download Infographic
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.videos.map((video, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Duration: {video.duration}</p>
                  <Button>
                    <Play className="mr-2 h-4 w-4" /> Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Need More Information?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            If you're looking for more detailed information or have specific questions about The Blueprint Platform, our
            team of experts is here to help. Schedule a consultation to discuss your unique needs and how The Blueprint
            Platform can transform your business.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </CardContent>
      </Card>
    </div>
  )
}

