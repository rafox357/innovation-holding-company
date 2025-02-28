"use client";

import { Metadata } from "next";
import { useState } from "react";
import { EventCard } from "@/components/innovation-hub/event-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock data - replace with API call
const events = [
  {
    id: "event-1",
    title: "Innovation Summit 2025",
    date: "2025-03-15",
    location: "Virtual",
    description: "Annual innovation conference featuring industry leaders",
    type: "conference" as const,
    speakers: [
      { name: "Jane Doe", role: "AI Research Lead" },
      { name: "John Smith", role: "Innovation Director" },
    ],
    registrationUrl: "/register/event-1",
  },
  {
    id: "event-2",
    title: "AI Workshop Series",
    date: "2025-04-01",
    location: "San Francisco, CA",
    description: "Hands-on workshop on implementing AI solutions",
    type: "workshop" as const,
    speakers: [
      { name: "Alice Johnson", role: "AI Engineer" },
    ],
    registrationUrl: "/register/event-2",
  },
  {
    id: "event-3",
    title: "Future of Tech Webinar",
    date: "2025-04-15",
    location: "Online",
    description: "Expert panel discussion on emerging technologies",
    type: "webinar" as const,
    speakers: [
      { name: "Bob Wilson", role: "Tech Analyst" },
      { name: "Carol Brown", role: "Innovation Strategist" },
    ],
    registrationUrl: "/register/event-3",
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Innovation Events</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs
          value={selectedType}
          onValueChange={setSelectedType}
          className="w-full md:w-auto"
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="conference">Conferences</TabsTrigger>
            <TabsTrigger value="workshop">Workshops</TabsTrigger>
            <TabsTrigger value="webinar">Webinars</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No events found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
