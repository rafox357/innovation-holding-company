import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const companyRoadmaps = {
  Anexo: [
    {
      quarter: "Q2 2024",
      milestones: [
        "Launch of 5 new specialized professional development courses",
        "Integration of AI-powered assessment tools",
      ],
    },
    {
      quarter: "Q3 2024",
      milestones: ["Rollout of personalized learning paths", "Begin partnerships with 3 major tech companies"],
    },
    {
      quarter: "Q4 2024",
      milestones: ["Launch of AI-powered language learning module", "Expand platform accessibility features"],
    },
    {
      quarter: "Q1 2025",
      milestones: ["Introduce gamified learning elements", "Explore integration with VR/AR technologies"],
    },
  ],
  Fundex: [
    {
      quarter: "Q2 2024",
      milestones: ["Launch of proprietary marketing automation platform", "Expand into influencer marketing services"],
    },
    {
      quarter: "Q3 2024",
      milestones: [
        "Develop specialized marketing services for Web3 businesses",
        "Integrate real-time data analytics dashboards",
      ],
    },
    {
      quarter: "Q4 2024",
      milestones: ["Offer comprehensive market research services", "Expand into new geographic markets"],
    },
    {
      quarter: "Q1 2025",
      milestones: [
        "Launch dedicated training program for businesses",
        "Explore partnerships with leading advertising platforms",
      ],
    },
  ],
  // Add roadmaps for other companies here
}

export function CompanyRoadmap() {
  const [activeCompany, setActiveCompany] = useState("Anexo")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Roadmaps</CardTitle>
        <CardDescription>Strategic direction and long-term goals for Hubverse companies</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeCompany} onValueChange={setActiveCompany}>
          <TabsList>
            {Object.keys(companyRoadmaps).map((company) => (
              <TabsTrigger key={company} value={company}>
                {company}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(companyRoadmaps).map(([company, roadmap]) => (
            <TabsContent key={company} value={company}>
              <h3 className="text-xl font-semibold mb-4">{company} Roadmap</h3>
              <div className="space-y-6">
                {roadmap.map((quarter, index) => (
                  <div key={quarter.quarter} className="border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-medium mb-2">{quarter.quarter}</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {quarter.milestones.map((milestone, mIndex) => (
                        <li key={mIndex}>{milestone}</li>
                      ))}
                    </ul>
                    <div className="mt-2">
                      <Badge variant="outline">Progress</Badge>
                      <Progress value={Math.max(0, 100 - index * 25)} className="mt-2" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

