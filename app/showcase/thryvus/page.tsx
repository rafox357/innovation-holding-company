'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ThryvusShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Thryvus & Co.</h1>
        <Badge variant="outline" className="text-lg py-1">
          In Development
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Transforming healthcare through innovation and technology
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Thryvus & Co.</h2>
              <p className="text-muted-foreground">
                Leading the healthcare revolution
              </p>
              <p className="mt-4">
                Thryvus & Co. is dedicated to transforming healthcare delivery through innovative technology and patient-centered solutions. We combine advanced medical research with cutting-edge technology to create more effective, accessible, and personalized healthcare experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Healthcare Innovation</h3>
              <ul className="space-y-2">
                <li>• AI-powered diagnostics</li>
                <li>• Telemedicine platforms</li>
                <li>• Remote patient monitoring</li>
                <li>• Personalized treatment plans</li>
                <li>• Digital health records</li>
                <li>• Preventive care solutions</li>
                <li>• Clinical decision support</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Healthcare solution cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="research">
          <div className="space-y-6">
            {/* Research and clinical trials information would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Medical team profiles would go here */}
          </div>
        </TabsContent>

        <TabsContent value="patients">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Patient resources and testimonials would go here */}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-2xl mx-auto">
            {/* Contact form would go here */}
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="space-y-6">
            {/* Healthcare resources and education materials would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
