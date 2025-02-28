'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ElementalisShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Elementalis</h1>
        <Badge variant="outline" className="text-lg py-1">
          Active
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Pushing the boundaries of scientific discovery and technological innovation
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Elementalis</h2>
              <p className="text-muted-foreground">
                Leading breakthrough research since 2020
              </p>
              <p className="mt-4">
                Elementalis is a cutting-edge research institution dedicated to pushing the boundaries of scientific discovery and technological innovation. Our multidisciplinary approach combines expertise across various fields to tackle some of the most challenging problems facing humanity today.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Research Focus Areas</h3>
              <ul className="space-y-2">
                <li>• Quantum Computing and Information Systems</li>
                <li>• Advanced Materials and Nanotechnology</li>
                <li>• Biotechnology and Synthetic Biology</li>
                <li>• Artificial Intelligence and Machine Learning</li>
                <li>• Clean Energy and Environmental Science</li>
                <li>• Space Technology and Exploration</li>
                <li>• Advanced Manufacturing Processes</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="research">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Research project cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="publications">
          <div className="space-y-6">
            {/* Publications list would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Research team profiles would go here */}
          </div>
        </TabsContent>

        <TabsContent value="facilities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Research facilities information would go here */}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-2xl mx-auto">
            {/* Contact form would go here */}
          </div>
        </TabsContent>

        <TabsContent value="partnerships">
          <div className="space-y-6">
            {/* Partnership information would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
