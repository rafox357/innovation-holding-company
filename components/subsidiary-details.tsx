"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubsidiaryKPIs } from "@/components/subsidiary-kpis"
import { FinancialDashboard } from "@/components/financial-dashboard"
import { TeamManagement } from "@/components/team-management"
import { ProjectBoard } from "@/components/project-board"

type SubsidiaryDetailsProps = {
  name: string
  description: string
  kpis: Array<{ name: string; value: number; target: number; unit: string }>
}

export function SubsidiaryDetails({ name, description, kpis }: SubsidiaryDetailsProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <SubsidiaryKPIs subsidiaryName={name} kpis={kpis} />
          </TabsContent>

          <TabsContent value="financials">
            <FinancialDashboard />
          </TabsContent>

          <TabsContent value="team">
            <TeamManagement />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectBoard />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

