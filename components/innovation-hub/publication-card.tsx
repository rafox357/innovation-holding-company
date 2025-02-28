"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, Users, FileText, ArrowUpRight } from "lucide-react";

interface Author {
  name: string;
  role: string;
  institution?: string;
}

interface Publication {
  id: string;
  title: string;
  abstract: string;
  authors: Author[];
  date: string;
  type: "paper" | "article" | "report" | "thesis";
  topics: string[];
  doi?: string;
  url: string;
  citations?: number;
  projectId?: string;
}

interface PublicationCardProps {
  publication: Publication;
  variant?: "default" | "compact";
}

export function PublicationCard({
  publication,
  variant = "default",
}: PublicationCardProps) {
  const typeColors = {
    paper: "bg-blue-100 text-blue-800",
    article: "bg-green-100 text-green-800",
    report: "bg-purple-100 text-purple-800",
    thesis: "bg-orange-100 text-orange-800",
  };

  if (variant === "compact") {
    return (
      <Card className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold line-clamp-2">{publication.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {publication.authors.map((author) => author.name).join(", ")}
            </p>
          </div>
          <Link
            href={publication.url}
            className="text-primary hover:text-primary/80 ml-4 flex-shrink-0"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
              typeColors[publication.type]
            }`}
          >
            {publication.type}
          </span>
        </div>
        {publication.citations !== undefined && (
          <Badge variant="outline">
            {publication.citations} Citation{publication.citations !== 1 && "s"}
          </Badge>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">
        {publication.abstract}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{new Date(publication.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm">
          <Users className="w-4 h-4 mr-2" />
          <span>{publication.authors.length} Authors</span>
        </div>
        {publication.doi && (
          <div className="flex items-center text-sm">
            <FileText className="w-4 h-4 mr-2" />
            <span className="font-mono text-xs">DOI: {publication.doi}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {publication.topics.map((topic) => (
          <Badge key={topic} variant="secondary">
            {topic}
          </Badge>
        ))}
      </div>

      <div className="flex space-x-3">
        <Button asChild variant="outline">
          <Link href={`/innovation-hub/lab/publications/${publication.id}`}>
            View Details
          </Link>
        </Button>
        <Button asChild>
          <Link href={publication.url} target="_blank" rel="noopener noreferrer">
            Read Publication
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
