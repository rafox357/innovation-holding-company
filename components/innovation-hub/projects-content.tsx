"use client";

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

const projects: ResearchProject[] = [
  {
    id: "quantum-computing",
    title: "Quantum Computing Architecture",
    description: "Developing next-generation quantum computing architectures for improved coherence times and scalability.",
    area: "Quantum Computing",
    status: "Active",
    progress: 65,
    team: ["Dr. Sarah Chen", "Dr. Michael Roberts", "Dr. James Wilson"],
    publications: 3,
    startDate: "2024-01",
    endDate: "2024-12",
  },
  {
    id: "ai-ethics",
    title: "AI Ethics Framework",
    description: "Creating comprehensive guidelines for ethical AI development and deployment.",
    area: "AI Ethics",
    status: "Active",
    progress: 45,
    team: ["Dr. Emily Brown", "Dr. David Kim", "Dr. Lisa Anderson"],
    publications: 2,
    startDate: "2024-02",
    endDate: "2024-11",
  },
  {
    id: "energy-storage",
    title: "Advanced Battery Technology",
    description: "Researching novel materials for next-generation energy storage solutions.",
    area: "Energy Storage",
    status: "Active",
    progress: 30,
    team: ["Dr. John Smith", "Dr. Maria Garcia", "Dr. Tom Johnson"],
    publications: 1,
    startDate: "2024-03",
    endDate: "2025-02",
  },
];

export function ProjectsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = selectedArea === "all" || project.area === selectedArea;
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
    return matchesSearch && matchesArea && matchesStatus;
  });

  const areas = Array.from(new Set(projects.map((p) => p.area)));
  const statuses = Array.from(new Set(projects.map((p) => p.status)));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Research Projects</h1>
        <p className="text-muted-foreground">
          Explore our ongoing research initiatives and breakthroughs
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedArea} onValueChange={setSelectedArea}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Areas</SelectItem>
            {areas.map((area) => (
              <SelectItem key={area} value={area}>
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="grid" className="space-y-4">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="grid" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ResearchProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list" className="space-y-4">
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <ResearchProjectCard key={project.id} project={project} variant="list" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
