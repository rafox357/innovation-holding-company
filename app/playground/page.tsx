"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { BusinessPlanGenerator } from "@/components/business-plan-generator"
import { MarketResearchDashboard } from "@/components/market-research-dashboard"

export default function Playground() {
  const [activeTab, setActiveTab] = useState("business-plan")

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Playground", href: "/playground" }
      ]} />

      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Playground</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experiment with various tools and resources to support your projects
        </p>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>Innovation Tools</CardTitle>
          <CardDescription>Explore and utilize these tools to enhance your project development process</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList>
              <TabsTrigger value="business-plan">Business Plan Generator</TabsTrigger>
              <TabsTrigger value="market-research">Market Research Dashboard</TabsTrigger>
            </TabsList>

            <TabsContent value="business-plan">
              <BusinessPlanGenerator />
            </TabsContent>

            <TabsContent value="market-research">
              <MarketResearchDashboard />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

