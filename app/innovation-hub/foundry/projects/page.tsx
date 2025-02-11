import { Metadata } from "next";
import { useState } from "react";
import { ResearchProjectCard } from "@/components/innovation-hub/research-project-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import type { ResearchProject } from "@/types/innovation-hub";

export const metadata: Metadata = {
  title: "Research Projects | The Foundry | Hubverse",
  description: "Explore our ongoing research and development projects",
};

// Mock data - replace with API call
const projects: ResearchProject[] = [
  {
    id: "proj-1",
    title: "AI-Powered Decision Making",
    area: "AI & Machine Learning",
    description: "Research on advanced decision-making algorithms using AI",
    status: "active",
    team: [
      { name: "Dr. Jane Smith", role: "Lead Researcher" },
      { name: "John Doe", role: "AI Engineer" },
    ],
    publications: [
      {
        title: "Novel Approaches to AI Decision Making",
        url: "/publications/ai-decision-making",
        date: "2024-12-01",
      },
    ],
    timeline: {
      start: "2024-01-01",
      milestones: [
        {
          date: "2024-03-01",
          title: "Initial Research Phase",
          description: "Completed literature review and methodology design",
        },
        {
          date: "2024-06-01",
          title: "Algorithm Development",
          description: "Development of core AI algorithms",
        },
      ],
    },
  },
  // Add more projects...
];

const researchAreas = [
  "All Areas",
  "AI & Machine Learning",
  "Blockchain",
  "IoT & Edge Computing",
  "Quantum Computing",
];

export default function ResearchProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedArea, setSelectedArea] = useState("All Areas");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
    const matchesArea = selectedArea === "All Areas" || project.area === selectedArea;
    return matchesSearch && matchesStatus && matchesArea;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Research Projects</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={selectedArea} onValueChange={setSelectedArea}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Research Area" />
          </SelectTrigger>
          <SelectContent>
            {researchAreas.map((area) => (
              <SelectItem key={area} value={area}>
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Tabs
          value={selectedStatus}
          onValueChange={setSelectedStatus}
          className="w-full md:w-auto"
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="planned">Planned</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ResearchProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No research projects found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
