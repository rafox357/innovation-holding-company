import { useState, useEffect } from "react";
import type { Event, EventType } from "@/types/innovation-hub";

interface UseInnovationEventsProps {
  initialEvents?: Event[];
  type?: EventType;
  searchQuery?: string;
}

interface UseInnovationEventsReturn {
  events: Event[];
  isLoading: boolean;
  error: Error | null;
  filterByType: (type: EventType | "all") => void;
  searchEvents: (query: string) => void;
  sortEvents: (by: "date" | "title") => void;
  refreshEvents: () => Promise<void>;
}

export function useInnovationEvents({
  initialEvents = [],
  type,
  searchQuery = "",
}: UseInnovationEventsProps): UseInnovationEventsReturn {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(initialEvents);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [activeType, setActiveType] = useState<EventType | "all">(type || "all");
  const [activeSearch, setActiveSearch] = useState(searchQuery);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/innovation-hub/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data.events);
      applyFilters(data.events, activeType, activeSearch);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
    } finally {
      setIsLoading(false);
    }
  };

  const applyFilters = (
    eventList: Event[],
    eventType: EventType | "all",
    query: string
  ) => {
    let filtered = [...eventList];

    // Apply type filter
    if (eventType !== "all") {
      filtered = filtered.filter((event) => event.type === eventType);
    }

    // Apply search filter
    if (query) {
      const searchLower = query.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower)
      );
    }

    setFilteredEvents(filtered);
  };

  const filterByType = (newType: EventType | "all") => {
    setActiveType(newType);
    applyFilters(events, newType, activeSearch);
  };

  const searchEvents = (query: string) => {
    setActiveSearch(query);
    applyFilters(events, activeType, query);
  };

  const sortEvents = (by: "date" | "title") => {
    const sorted = [...filteredEvents].sort((a, b) => {
      if (by === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });
    setFilteredEvents(sorted);
  };

  const refreshEvents = async () => {
    await fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events: filteredEvents,
    isLoading,
    error,
    filterByType,
    searchEvents,
    sortEvents,
    refreshEvents,
  };
}
