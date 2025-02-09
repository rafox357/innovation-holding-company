'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PonceShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Ponce Industries</h1>
        <Badge variant="outline" className="text-lg py-1">
          Planning
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Revolutionizing manufacturing with smart technology and sustainability
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="innovation">Innovation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Ponce Industries</h2>
              <p className="text-muted-foreground">
                Smart manufacturing for a sustainable future
              </p>
              <p className="mt-4">
                Ponce Industries is leading the transformation of manufacturing through advanced automation, AI-driven processes, and sustainable practices. Our smart factories combine cutting-edge technology with environmental responsibility to create the manufacturing facilities of tomorrow.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Manufacturing Excellence</h3>
              <ul className="space-y-2">
                <li>• Smart factory automation</li>
                <li>• AI-powered quality control</li>
                <li>• Sustainable production methods</li>
                <li>• Digital twin technology</li>
                <li>• Zero-waste initiatives</li>
                <li>• Predictive maintenance</li>
                <li>• Supply chain optimization</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manufacturing solution cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="sustainability">
          <div className="space-y-6">
            {/* Sustainability initiatives and metrics would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member profiles would go here */}
          </div>
        </TabsContent>

        <TabsContent value="facilities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manufacturing facilities showcase would go here */}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-2xl mx-auto">
            {/* Contact form would go here */}
          </div>
        </TabsContent>

        <TabsContent value="innovation">
          <div className="space-y-6">
            {/* Innovation and R&D showcase would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
