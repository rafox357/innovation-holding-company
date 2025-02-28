"use client";

import { useState } from "react";
import { ProgramCard } from "@/components/innovation-hub/program-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

// Mock data - replace with API call
type ProgramStatus = "active" | "upcoming" | "completed";

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  requirements: string[];
  startDate: string;
  endDate: string;
  capacity: number;
  status: ProgramStatus;
}

const programs: Program[] = [
  {
    id: "prog-1",
    title: "AI Research Fellowship",
    description: "A 12-month fellowship program for AI researchers.",
    duration: "12 months",
    benefits: [
      "Full research funding",
      "Access to computing resources",
      "Mentorship from industry experts",
      "Publication opportunities",
    ],
    requirements: [
      "PhD in Computer Science or related field",
      "Strong research background in AI",
      "Publication track record",
    ],
    startDate: "2025-09-01",
    endDate: "2026-08-31",
    capacity: 10,
    status: "upcoming" as const,
  },
  // Add more programs...
];

const stats = {
  activePrograms: programs.filter((p) => p.status === "active").length,
  totalParticipants: programs.reduce((sum, p) => sum + (p.capacity || 0), 0),
  upcomingPrograms: programs.filter((p) => p.status === "upcoming").length,
};

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || program.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Innovation Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Active Programs</div>
          <div className="text-3xl font-bold mt-2">{stats.activePrograms}</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Total Participants</div>
          <div className="text-3xl font-bold mt-2">{stats.totalParticipants}</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Upcoming Programs</div>
          <div className="text-3xl font-bold mt-2">{stats.upcomingPrograms}</div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search programs..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No programs found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
