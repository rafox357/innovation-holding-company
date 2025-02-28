'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ExoNetShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">ExoNet</h1>
        <Badge variant="outline" className="text-lg py-1">
          Planning
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Building the backbone of tomorrow's digital infrastructure
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About ExoNet</h2>
              <p className="text-muted-foreground">
                Next-generation infrastructure provider
              </p>
              <p className="mt-4">
                ExoNet is pioneering the future of digital infrastructure, delivering enterprise-grade networking, cloud computing, and security solutions. Our cutting-edge technology stack and global presence enable businesses to build, scale, and secure their digital operations with unparalleled reliability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Core Capabilities</h3>
              <ul className="space-y-2">
                <li>• Global network infrastructure</li>
                <li>• Edge computing solutions</li>
                <li>• Advanced cybersecurity</li>
                <li>• Cloud-native architecture</li>
                <li>• Zero-trust security framework</li>
                <li>• Real-time monitoring</li>
                <li>• Automated scaling</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Solution cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="infrastructure">
          <div className="space-y-6">
            {/* Infrastructure details would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member profiles would go here */}
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Security features and certifications would go here */}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-2xl mx-auto">
            {/* Contact form would go here */}
          </div>
        </TabsContent>

        <TabsContent value="compliance">
          <div className="space-y-6">
            {/* Compliance certifications and standards would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
