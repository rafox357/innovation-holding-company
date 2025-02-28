'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CosmoCompassShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Cosmo & Compass Co.</h1>
        <Badge variant="outline" className="text-lg py-1">
          Planning
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Pioneering the next frontier of space exploration and technology
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="missions">Missions</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Cosmo & Compass</h2>
              <p className="text-muted-foreground">
                Advancing humanity's reach into space
              </p>
              <p className="mt-4">
                Cosmo & Compass Co. is at the forefront of space technology and exploration, developing cutting-edge solutions for satellite deployment, space transportation, and orbital services. Our mission is to make space more accessible while pushing the boundaries of human achievement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
              <ul className="space-y-2">
                <li>• Reusable launch vehicles</li>
                <li>• Satellite deployment systems</li>
                <li>• Space debris monitoring</li>
                <li>• Orbital logistics</li>
                <li>• Deep space communication</li>
                <li>• Advanced propulsion systems</li>
                <li>• Space habitat development</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="missions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mission cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="technology">
          <div className="space-y-6">
            {/* Technology showcase would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member profiles would go here */}
          </div>
        </TabsContent>

        <TabsContent value="research">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Research projects would go here */}
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
