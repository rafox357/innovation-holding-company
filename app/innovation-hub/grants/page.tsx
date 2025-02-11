"use client";

import { Metadata } from "next";
import { useState } from "react";
import { GrantCard } from "@/components/innovation-hub/grant-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Grants & Funding | Innovation Hub | Hubverse",
  description: "Explore available grants and funding opportunities.",
};

// Mock data - replace with API call
const grants = [
  {
    id: "grant-1",
    title: "AI Innovation Research Grant",
    description:
      "Supporting groundbreaking research in artificial intelligence and machine learning.",
    amount: 250000,
    currency: "USD",
    status: "open" as const,
    type: "research" as const,
    funder: {
      name: "Tech Innovation Foundation",
      website: "https://example.com",
    },
    deadline: "2025-06-30",
    startDate: "2025-07-01",
    endDate: "2026-06-30",
    eligibility: [
      "PhD holders in Computer Science or related fields",
      "Minimum 5 years research experience",
      "Track record of AI publications",
    ],
    tags: ["AI", "Machine Learning", "Research"],
  },
  // Add more grants...
];

const stats = {
  totalFunding: grants.reduce((sum, grant) => sum + grant.amount, 0),
  activeGrants: grants.filter((g) => g.status === "awarded").length,
  openOpportunities: grants.filter((g) => g.status === "open").length,
};

export default function GrantsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const filteredGrants = grants.filter((grant) => {
    const matchesSearch =
      grant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grant.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      selectedStatus === "all" || grant.status === selectedStatus;
    const matchesType = selectedType === "all" || grant.type === selectedType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Grants & Funding</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Total Funding</div>
          <div className="text-3xl font-bold mt-2">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(stats.totalFunding)}
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">Active Grants</div>
          <div className="text-3xl font-bold mt-2">{stats.activeGrants}</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-muted-foreground">
            Open Opportunities
          </div>
          <div className="text-3xl font-bold mt-2">
            {stats.openOpportunities}
          </div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search grants..."
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
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="awarded">Awarded</SelectItem>
            <SelectItem value="in_review">In Review</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="research">Research</SelectItem>
            <SelectItem value="innovation">Innovation</SelectItem>
            <SelectItem value="collaboration">Collaboration</SelectItem>
            <SelectItem value="equipment">Equipment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGrants.map((grant) => (
          <GrantCard key={grant.id} grant={grant} />
        ))}
      </div>

      {filteredGrants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No grants found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
