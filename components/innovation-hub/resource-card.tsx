"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileText, Calendar, ArrowUpRight, Download } from "lucide-react";
import type { Resource } from "@/types/innovation-hub";

interface ResourceCardProps {
  resource: Resource;
  variant?: "default" | "compact";
}

export function ResourceCard({
  resource,
  variant = "default",
}: ResourceCardProps) {
  const categoryColors = {
    Tools: "bg-blue-100 text-blue-800",
    Guides: "bg-green-100 text-green-800",
    Learning: "bg-purple-100 text-purple-800",
    Content: "bg-orange-100 text-orange-800",
  };

  const typeIcons = {
    document: FileText,
    video: Video,
    template: FileText,
    tool: Tool,
  };

  const Icon = typeIcons[resource.type];

  if (variant === "compact") {
    return (
      <Card className="p-4">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-muted rounded-lg">
            <Icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{resource.title}</h3>
            <p className="text-sm text-muted-foreground">
              {new Date(resource.lastUpdated).toLocaleDateString()}
            </p>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href={resource.url}>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
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
              categoryColors[resource.category]
            }`}
          >
            {resource.category}
          </span>
        </div>
        <div className="p-2 bg-muted rounded-lg">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
      <p className="text-muted-foreground mb-4">{resource.description}</p>

      <div className="flex items-center text-sm mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span>
          Last updated: {new Date(resource.lastUpdated).toLocaleDateString()}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex space-x-3">
        <Button asChild variant="outline">
          <Link href={`/innovation-hub/resources/${resource.id}`}>
            View Details
          </Link>
        </Button>
        {resource.type === "document" || resource.type === "template" ? (
          <Button asChild>
            <Link href={resource.url}>
              Download
              <Download className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href={resource.url}>
              Access Resource
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
