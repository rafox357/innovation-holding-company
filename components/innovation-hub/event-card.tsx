"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";

interface EventSpeaker {
  name: string;
  role: string;
  avatar?: string;
}

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "conference" | "workshop" | "webinar" | "hackathon";
  speakers: EventSpeaker[];
  registrationUrl?: string;
}

export function EventCard({
  id,
  title,
  date,
  location,
  description,
  type,
  speakers,
  registrationUrl,
}: EventCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const typeColors = {
    conference: "bg-blue-100 text-blue-800",
    workshop: "bg-green-100 text-green-800",
    webinar: "bg-purple-100 text-purple-800",
    hackathon: "bg-orange-100 text-orange-800",
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
              typeColors[type]
            }`}
          >
            {type}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        {speakers.length > 0 && (
          <div className="flex items-center text-sm">
            <Users className="w-4 h-4 mr-2" />
            <span>
              {speakers.length} Speaker{speakers.length > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>

      <div className="flex space-x-3">
        <Button asChild variant="outline">
          <Link href={`/innovation-hub/events/${id}`}>View Details</Link>
        </Button>
        {registrationUrl && (
          <Button asChild>
            <Link href={registrationUrl}>Register Now</Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
