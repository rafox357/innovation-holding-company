"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, Users, Clock, CheckCircle } from "lucide-react";
import type { Program } from "@/types/innovation-hub";

interface ProgramCardProps {
  program: Program;
  variant?: "default" | "compact";
}

export function ProgramCard({
  program,
  variant = "default",
}: ProgramCardProps) {
  const statusColors = {
    upcoming: "bg-yellow-100 text-yellow-800",
    active: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
  };

  if (variant === "compact") {
    return (
      <Card className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold line-clamp-1">{program.title}</h3>
            <p className="text-sm text-muted-foreground">
              {program.duration}
            </p>
          </div>
          <Badge
            className={`${statusColors[program.status]} capitalize`}
          >
            {program.status}
          </Badge>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <Badge
          className={`${statusColors[program.status]} capitalize`}
        >
          {program.status}
        </Badge>
        {program.capacity && (
          <Badge variant="outline">
            <Users className="w-4 h-4 mr-1" />
            {program.capacity} spots
          </Badge>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
      <p className="text-muted-foreground mb-4">{program.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-2" />
          <span>{program.duration}</span>
        </div>
        {program.startDate && (
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              Starts: {new Date(program.startDate).toLocaleDateString()}
              {program.endDate &&
                ` • Ends: ${new Date(program.endDate).toLocaleDateString()}`}
            </span>
          </div>
        )}
      </div>

      <div className="bg-muted rounded-lg p-4 mb-4">
        <h4 className="font-semibold mb-2">Key Benefits</h4>
        <ul className="space-y-2">
          {program.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {program.requirements && program.requirements.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Requirements</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {program.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex space-x-3">
        <Button asChild variant="outline">
          <Link href={`/innovation-hub/programs/${program.id}`}>
            Learn More
          </Link>
        </Button>
        {program.status === "upcoming" && (
          <Button asChild>
            <Link href={`/innovation-hub/programs/${program.id}/apply`}>
              Apply Now
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
