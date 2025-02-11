"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ExternalLink, Download, ArrowUpDown } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  journal: string;
  date: string;
  doi: string;
  pdfUrl?: string;
  tags: string[];
  citations: number;
  type: "paper" | "article" | "report" | "thesis" | string;
}

const publications: Publication[] = [
  {
    id: "1",
    title: "Quantum Algorithm Optimization for Large-Scale Computing Systems",
    authors: ["Sarah Chen", "James Wilson", "Maria Garcia"],
    abstract: "This paper presents novel approaches to optimizing quantum algorithms for practical implementation in large-scale computing systems.",
    journal: "Journal of Quantum Computing",
    date: "2024-01-15",
    doi: "10.1234/jqc.2024.001",
    pdfUrl: "/papers/quantum-optimization.pdf",
    tags: ["Quantum Computing", "Algorithm Optimization", "Large-Scale Systems"],
    citations: 12,
    type: "paper",
  },
  {
    id: "2",
    title: "Ethical Considerations in AI Development: A Framework for Responsible Innovation",
    authors: ["Michael Brown", "Lisa Anderson"],
    abstract: "We propose a comprehensive framework for ensuring ethical considerations are integrated into AI development processes.",
    journal: "AI Ethics Review",
    date: "2024-02-01",
    doi: "10.1234/aie.2024.002",
    tags: ["AI Ethics", "Responsible Innovation", "Framework"],
    citations: 8,
    type: "article",
  },
  {
    id: "3",
    title: "Advanced Battery Technologies for Sustainable Energy Storage",
    authors: ["Emily Taylor", "Robert Johnson", "David Lee"],
    abstract: "An investigation into novel materials and designs for next-generation battery technologies.",
    journal: "Sustainable Energy Research",
    date: "2024-01-01",
    doi: "10.1234/ser.2024.003",
    pdfUrl: "/papers/battery-tech.pdf",
    tags: ["Energy Storage", "Battery Technology", "Sustainability"],
    citations: 15,
    type: "report",
  },
];

const allTags = Array.from(
  new Set(publications.flatMap((pub) => pub.tags))
);

const journals = Array.from(
  new Set(publications.map((pub) => pub.journal))
);

type SortField = "date" | "citations" | "title";

export function PublicationList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedJournal, setSelectedJournal] = useState<string>("");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const filteredAndSortedPublications = publications
    .filter((pub) => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some(author => 
          author.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTags = selectedTags.length === 0 ||
        pub.tags.some((tag) => selectedTags.includes(tag));

      const matchesJournal = !selectedJournal ||
        pub.journal === selectedJournal;

      return matchesSearch && matchesTags && matchesJournal;
    })
    .sort((a, b) => {
      const direction = sortDirection === "asc" ? 1 : -1;
      
      switch (sortField) {
        case "date":
          return direction * (new Date(a.date).getTime() - new Date(b.date).getTime());
        case "citations":
          return direction * (a.citations - b.citations);
        case "title":
          return direction * a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Select
            value={selectedJournal}
            onValueChange={setSelectedJournal}
          >
            <SelectTrigger className="max-w-[200px]">
              <SelectValue placeholder="Select Journal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Journals</SelectItem>
              {journals.map((journal) => (
                <SelectItem key={journal} value={journal}>
                  {journal}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Topics</h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleSort("date")}
            className="flex items-center gap-1"
          >
            Date
            <ArrowUpDown className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleSort("citations")}
            className="flex items-center gap-1"
          >
            Citations
            <ArrowUpDown className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleSort("title")}
            className="flex items-center gap-1"
          >
            Title
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredAndSortedPublications.map((pub) => (
          <Card key={pub.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{pub.title}</CardTitle>
                  <CardDescription>
                    {pub.authors.join(", ")} • {pub.journal} • {new Date(pub.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  {pub.pdfUrl && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={pub.pdfUrl} download>
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{pub.abstract}</p>
                
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    {pub.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pub.citations} citations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
