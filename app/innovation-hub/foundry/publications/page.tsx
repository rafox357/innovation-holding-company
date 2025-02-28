"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

import { PublicationCard } from "@/components/innovation-hub/publication-card";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with API call
type PublicationType = "paper" | "article" | "report" | "thesis";

const isValidPublicationType = (type: string): type is PublicationType => 
  ["paper", "article", "report", "thesis"].includes(type);

const publications: {
  id: string;
  title: string;
  abstract: string;
  authors: { name: string; role: string; }[];
  date: string;
  type: PublicationType;
  topics: string[];
  doi: string;
  url: string;
  citations: number;
  projectId: string;
}[] = [
  {
    id: "pub-1",
    title: "Novel Approaches to AI Decision Making",
    abstract: "This paper presents innovative approaches to decision-making in artificial intelligence systems, focusing on explainability and ethical considerations.",
    authors: [
      { name: "Dr. Jane Smith", role: "Lead Researcher" },
      { name: "John Doe", role: "AI Engineer" },
    ],
    date: "2024-12-01",
    type: "paper",
    topics: ["AI", "Decision Making", "Ethics"],
    doi: "10.1234/hubverse.2024.001",
    url: "/publications/ai-decision-making",
    citations: 15,
    projectId: "proj-1",
  },
  {
    id: "pub-2",
    title: "Blockchain in Healthcare: A Comprehensive Review",
    abstract: "An in-depth analysis of blockchain technology applications in healthcare, exploring potential benefits and challenges.",
    authors: [
      { name: "Dr. Emily Chen", role: "Senior Researcher" },
      { name: "Michael Wong", role: "Technology Analyst" },
    ],
    date: "2024-11-15",
    type: "article",
    topics: ["Blockchain", "Healthcare", "Technology"],
    doi: "10.1234/hubverse.2024.002",
    url: "/publications/blockchain-healthcare",
    citations: 8,
    projectId: "proj-2",
  },
  {
    id: "pub-3",
    title: "Ethical Considerations in Machine Learning",
    abstract: "A critical examination of ethical challenges and proposed frameworks for responsible machine learning development.",
    authors: [
      { name: "Prof. Alex Rodriguez", role: "Ethics Director" },
      { name: "Sarah Kim", role: "AI Ethics Researcher" },
    ],
    date: "2024-10-30",
    type: "report",
    topics: ["AI", "Ethics", "Machine Learning"],
    doi: "10.1234/hubverse.2024.003",
    url: "/publications/ml-ethics",
    citations: 12,
    projectId: "proj-3",
  },
];

const topics = [
  "All Topics",
  "AI",
  "Machine Learning",
  "Ethics",
  "Decision Making",
  "Blockchain",
  "IoT",
];

const sortOptions = [
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
  { value: "citations-desc", label: "Most Cited" },
  { value: "citations-asc", label: "Least Cited" },
];

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [sortBy, setSortBy] = useState("date-desc");

  const filteredPublications = publications.filter((publication) => {
    // Ensure type is valid
    if (!isValidPublicationType(publication.type)) {
      console.warn(`Invalid publication type for publication: ${publication.id}`);
      return false;
    }

    // Existing search and type filtering logic
    const matchesSearch = publication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      publication.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      publication.authors.some((author) => 
        author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesType = selectedType === "all" || 
      publication.type.toLowerCase() === selectedType.toLowerCase();

    const matchesTopic =
      selectedTopic === "All Topics" ||
      publication.topics.includes(selectedTopic);

    return matchesSearch && matchesType && matchesTopic;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "citations-desc":
        return (b.citations || 0) - (a.citations || 0);
      case "citations-asc":
        return (a.citations || 0) - (b.citations || 0);
      default:
        return 0;
    }
  });

  const stats = {
    total: publications.length,
    citations: publications.reduce((sum, pub) => sum + (pub.citations || 0), 0),
    authors: new Set(
      publications.flatMap((pub) => pub.authors.map((a) => a.name))
    ).size,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Research Publications</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-sm text-muted-foreground">Publications</div>
        </div>
        <div className="p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold">{stats.citations}</div>
          <div className="text-sm text-muted-foreground">Total Citations</div>
        </div>
        <div className="p-4 bg-card rounded-lg border">
          <div className="text-2xl font-bold">{stats.authors}</div>
          <div className="text-sm text-muted-foreground">Contributing Authors</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search publications..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={selectedTopic} onValueChange={setSelectedTopic}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by Topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((topic) => (
              <SelectItem key={topic} value={topic}>
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Publication Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="paper">Papers</SelectItem>
            <SelectItem value="article">Articles</SelectItem>
            <SelectItem value="report">Reports</SelectItem>
            <SelectItem value="thesis">Theses</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPublications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No publications found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
