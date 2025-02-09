'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function FundexShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">FundEx</h1>
        <Badge variant="outline" className="text-lg py-1">
          Active
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Revolutionizing finance through DeFi solutions and AI-driven investments
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About FundEx</h2>
              <p className="text-muted-foreground">
                Pioneering the future of finance since 2021
              </p>
              <p className="mt-4">
                FundEx stands at the forefront of the financial technology revolution, combining decentralized finance (DeFi) with artificial intelligence to create a new paradigm in investment and wealth management. Our platform bridges the gap between traditional finance and the crypto economy, making sophisticated investment strategies accessible to everyone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Why Choose FundEx?</h3>
              <ul className="space-y-2">
                <li>• Advanced DeFi protocols with institutional-grade security</li>
                <li>• AI-powered investment strategies and risk management</li>
                <li>• Seamless integration with traditional financial systems</li>
                <li>• Real-time portfolio optimization and rebalancing</li>
                <li>• Transparent and competitive fee structure</li>
                <li>• 24/7 automated trading and monitoring</li>
                <li>• Comprehensive educational resources and support</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Solution cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="space-y-6">
            {/* Performance metrics would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="technology">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technology stack information would go here */}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-2xl mx-auto">
            {/* Contact form would go here */}
          </div>
        </TabsContent>

        <TabsContent value="ecosystem">
          <div className="space-y-6">
            {/* Ecosystem information would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
