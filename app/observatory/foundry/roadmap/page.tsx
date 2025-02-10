"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function RoadmapPage() {
  return (
    <div className="container py-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Company Roadmaps</h1>
        <p className="text-muted-foreground">
          Strategic direction and long-term goals for Hubverse companies
        </p>
      </div>

      {/* Company Selection */}
      <Tabs defaultValue="anexo" className="space-y-4">
        <TabsList>
          <TabsTrigger value="anexo">Anexo</TabsTrigger>
          <TabsTrigger value="fundex">Fundex</TabsTrigger>
        </TabsList>

        <TabsContent value="anexo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Anexo Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Q2 2024 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Q2 2024</h3>
                </div>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Launch of 5 new specialized professional development courses</li>
                  <li>Integration of AI-powered assessment tools</li>
                </ul>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="bg-yellow-500/20" />
                </div>
              </div>

              {/* Q3 2024 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Q3 2024</h3>
                </div>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Rollout of personalized learning paths</li>
                  <li>Begin partnerships with 3 major tech companies</li>
                </ul>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="bg-yellow-500/20" />
                </div>
              </div>

              {/* Q4 2024 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Q4 2024</h3>
                </div>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Launch of AI-powered language learning module</li>
                  <li>Expand platform accessibility features</li>
                </ul>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="bg-yellow-500/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fundex" className="space-y-4">
          {/* Add Fundex roadmap content here */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
