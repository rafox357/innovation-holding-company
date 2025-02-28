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
import { Publication } from "@/lib/data-fetcher";

interface PublicationListProps {
  publications: Publication[];
}

export function PublicationList({ publications }: PublicationListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedJournal, setSelectedJournal] = useState<string>("");
  const [sortField, setSortField] = useState<"date" | "citations" | "title">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const allTags = Array.from(
    new Set(publications.flatMap((pub) => pub.tags))
  );

  const journals: string[] = Array.from(
    new Set(publications.map((pub) => pub.journal).filter((journal): journal is string => journal !== undefined))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleSort = (field: "date" | "citations" | "title") => {
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
        (pub.abstract || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
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
