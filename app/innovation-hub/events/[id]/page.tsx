"use client";

import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data - replace with API call
const event = {
  id: "event-1",
  title: "Innovation Summit 2025",
  date: "2025-03-15",
  location: "Virtual",
  description: "Annual innovation conference featuring industry leaders",
  type: "conference" as const,
  speakers: [
    {
      name: "Jane Doe",
      role: "AI Research Lead",
      bio: "Leading AI researcher with 15+ years of experience",
      avatar: "/avatars/jane-doe.jpg",
    },
    {
      name: "John Smith",
      role: "Innovation Director",
      bio: "Innovation strategist and former startup founder",
      avatar: "/avatars/john-smith.jpg",
    },
  ],
  agenda: [
    {
      time: "09:00 AM",
      title: "Opening Keynote",
      speaker: "Jane Doe",
      description: "The Future of Innovation",
    },
    {
      time: "10:30 AM",
      title: "Panel Discussion",
      speaker: "Multiple Speakers",
      description: "Emerging Trends in Technology",
    },
    {
      time: "02:00 PM",
      title: "Workshop",
      speaker: "John Smith",
      description: "Innovation Strategy Workshop",
    },
  ],
  registrationUrl: "/register/event-1",
};

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailClient({ params }: EventPageProps) {
  // In a real app, fetch event data here
  if (params.id !== event.id) {
    notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/innovation-hub/events"
        className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block"
      >
        ← Back to Events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>{event.description}</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Event Agenda</h2>
          <div className="space-y-4 mb-8">
            {event.agenda.map((item) => (
              <Card key={item.time} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.speaker}
                    </p>
                    <p className="text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="text-sm font-medium">{item.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Registration</h2>
            <Button className="w-full" asChild>
              <Link href={event.registrationUrl}>
                Register Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Speakers</h2>
            <div className="space-y-4">
              {event.speakers.map((speaker) => (
                <div key={speaker.name} className="flex items-start space-x-4">
                  {speaker.avatar && (
                    <Image
                      src={speaker.avatar}
                      alt={speaker.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {speaker.role}
                    </p>
                    {speaker.bio && (
                      <p className="text-sm mt-1">{speaker.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
