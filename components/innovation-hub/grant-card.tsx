"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, DollarSign, Users, Clock } from "lucide-react";

interface GrantFunder {
  name: string;
  logo?: string;
  website?: string;
}

interface Grant {
  id: string;
  title: string;
  description: string;
  amount: number;
  currency: string;
  status: "open" | "closed" | "awarded" | "in_review";
  type: "research" | "innovation" | "collaboration" | "equipment";
  funder: GrantFunder;
  deadline?: string;
  startDate?: string;
  endDate?: string;
  eligibility: readonly string[];
  tags: readonly string[];
}

interface GrantCardProps {
  grant: Grant;
  variant?: "default" | "compact";
}

export function GrantCard({ grant, variant = "default" }: GrantCardProps) {
  const statusColors = {
    open: "bg-green-100 text-green-800",
    closed: "bg-gray-100 text-gray-800",
    awarded: "bg-blue-100 text-blue-800",
    in_review: "bg-yellow-100 text-yellow-800",
  };

  const typeColors = {
    research: "bg-purple-100 text-purple-800",
    innovation: "bg-blue-100 text-blue-800",
    collaboration: "bg-green-100 text-green-800",
    equipment: "bg-orange-100 text-orange-800",
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (variant === "compact") {
    return (
      <Card className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold line-clamp-1">{grant.title}</h3>
            <p className="text-sm text-muted-foreground">
              {formatCurrency(grant.amount, grant.currency)}
            </p>
          </div>
          <Badge
            className={`${statusColors[grant.status]} capitalize`}
          >
            {grant.status.replace("_", " ")}
          </Badge>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="space-x-2">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
              statusColors[grant.status]
            }`}
          >
            {grant.status.replace("_", " ")}
          </span>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
              typeColors[grant.type]
            }`}
          >
            {grant.type}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{grant.title}</h3>
      <p className="text-muted-foreground mb-4">{grant.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>{formatCurrency(grant.amount, grant.currency)}</span>
        </div>
        {grant.deadline && (
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>
              Deadline: {new Date(grant.deadline).toLocaleDateString()}
            </span>
          </div>
        )}
        {(grant.startDate || grant.endDate) && (
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              {grant.startDate &&
                `Start: ${new Date(grant.startDate).toLocaleDateString()}`}
              {grant.startDate && grant.endDate && " • "}
              {grant.endDate &&
                `End: ${new Date(grant.endDate).toLocaleDateString()}`}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {grant.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="bg-muted p-4 rounded-lg mb-4">
        <h4 className="font-semibold mb-2">Eligibility</h4>
        <ul className="list-disc list-inside space-y-1">
          {grant.eligibility.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Funded by:</span>
          <span className="text-sm text-muted-foreground">
            {grant.funder.name}
          </span>
        </div>
        <Button asChild>
          <Link href={`/innovation-hub/grants/${grant.id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </Card>
  );
}
