import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Analytics | The Foundry | Hubverse",
  description: "Explore our analytics and insights",
};

// Mock data - replace with API call
const analytics = {
  overview: {
    activeProjects: 12,
    completedProjects: 28,
    totalPublications: 45,
    totalCitations: 320,
    activeResearchers: 25,
    collaboratingInstitutions: 8,
  },
  publications: {
    byYear: [
      { year: 2025, count: 8, citations: 15 },
      { year: 2024, count: 15, citations: 85 },
      { year: 2023, count: 12, citations: 120 },
      { year: 2022, count: 10, citations: 100 },
    ],
    byType: {
      paper: 25,
      article: 12,
      report: 5,
      thesis: 3,
    },
    byTopic: {
      AI: 15,
      "Machine Learning": 12,
      Blockchain: 8,
      IoT: 6,
      Ethics: 4,
    },
  },
  projects: {
    byStatus: {
      active: 12,
      completed: 28,
      planned: 5,
    },
    byArea: {
      "AI & Machine Learning": 15,
      Blockchain: 10,
      "IoT & Edge Computing": 8,
      "Quantum Computing": 4,
    },
  },
  collaboration: {
    institutions: [
      { name: "MIT", projects: 5, publications: 8 },
      { name: "Stanford", projects: 3, publications: 6 },
      { name: "Berkeley", projects: 4, publications: 5 },
    ],
    researchers: {
      internal: 25,
      external: 35,
      visiting: 8,
    },
  },
};

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Research Analytics</h1>
        <Select defaultValue="2025">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Active Projects</div>
          <div className="text-3xl font-bold mt-2">
            {analytics.overview.activeProjects}
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Total Publications</div>
          <div className="text-3xl font-bold mt-2">
            {analytics.overview.totalPublications}
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Total Citations</div>
          <div className="text-3xl font-bold mt-2">
            {analytics.overview.totalCitations}
          </div>
        </Card>
      </div>

      <Tabs defaultValue="publications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
        </TabsList>

        <TabsContent value="publications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Publications by Year</h3>
              <div className="space-y-4">
                {analytics.publications.byYear.map((year) => (
                  <div key={year.year} className="flex justify-between">
                    <span>{year.year}</span>
                    <span className="font-medium">{year.count} publications</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Publications by Topic</h3>
              <div className="space-y-4">
                {Object.entries(analytics.publications.byTopic).map(
                  ([topic, count]) => (
                    <div key={topic} className="flex justify-between">
                      <span>{topic}</span>
                      <span className="font-medium">{count} publications</span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Projects by Status</h3>
              <div className="space-y-4">
                {Object.entries(analytics.projects.byStatus).map(
                  ([status, count]) => (
                    <div key={status} className="flex justify-between">
                      <span className="capitalize">{status}</span>
                      <span className="font-medium">{count} projects</span>
                    </div>
                  )
                )}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Projects by Area</h3>
              <div className="space-y-4">
                {Object.entries(analytics.projects.byArea).map(
                  ([area, count]) => (
                    <div key={area} className="flex justify-between">
                      <span>{area}</span>
                      <span className="font-medium">{count} projects</span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="collaboration">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Partner Institutions
              </h3>
              <div className="space-y-4">
                {analytics.collaboration.institutions.map((inst) => (
                  <div key={inst.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{inst.name}</span>
                      <span>{inst.projects} projects</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {inst.publications} joint publications
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Research Team</h3>
              <div className="space-y-4">
                {Object.entries(analytics.collaboration.researchers).map(
                  ([type, count]) => (
                    <div key={type} className="flex justify-between">
                      <span className="capitalize">{type} Researchers</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
