'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function EstoreDistrictShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Estore District</h1>
        <Badge variant="outline" className="text-lg py-1">
          In Development
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Empowering merchants with next-generation e-commerce solutions
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="merchants">Merchants</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Estore District</h2>
              <p className="text-muted-foreground">
                Building the future of online retail
              </p>
              <p className="mt-4">
                Estore District is revolutionizing e-commerce by providing merchants with a comprehensive platform that combines advanced AI-driven analytics, seamless marketplace integration, and powerful automation tools. Our platform enables businesses of all sizes to compete effectively in the digital marketplace.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Platform Highlights</h3>
              <ul className="space-y-2">
                <li>• AI-powered inventory and pricing optimization</li>
                <li>• Multi-channel selling capabilities</li>
                <li>• Advanced analytics and reporting</li>
                <li>• Automated marketing campaigns</li>
                <li>• Integrated shipping and logistics</li>
                <li>• Real-time market insights</li>
                <li>• 24/7 merchant support</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="merchants">
          <div className="space-y-6">
            {/* Merchant success stories would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member profiles would go here */}
          </div>
        </TabsContent>

        <TabsContent value="pricing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pricing plans would go here */}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-2xl mx-auto">
            {/* Contact form would go here */}
          </div>
        </TabsContent>

        <TabsContent value="integrations">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Integration partners would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
