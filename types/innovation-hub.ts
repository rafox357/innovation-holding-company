export type EventType = "conference" | "workshop" | "webinar" | "hackathon";

export interface EventSpeaker {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: EventType;
  speakers: EventSpeaker[];
  agenda?: AgendaItem[];
  registrationUrl?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  requirements: string[];
  startDate?: string;
  endDate?: string;
  capacity?: number;
  status: "upcoming" | "active" | "completed";
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "Tools" | "Guides" | "Learning" | "Content";
  type: "document" | "video" | "template" | "tool";
  url: string;
  tags: string[];
  lastUpdated: string;
}

export interface Partnership {
  id: string;
  name: string;
  type: "corporate" | "academic" | "startup";
  description: string;
  logo?: string;
  website?: string;
  collaborations: {
    title: string;
    description: string;
    status: "active" | "completed" | "planned";
  }[];
  startDate: string;
  benefits: string[];
}

export interface ResearchProject {
  id: string;
  title: string;
  area: string;
  description: string;
  status: "active" | "completed" | "planned";
  team: {
    name: string;
    role: string;
  }[];
  publications?: {
    title: string;
    url: string;
    date: string;
  }[];
  timeline: {
    start: string;
    end?: string;
    milestones: {
      date: string;
      title: string;
      description: string;
    }[];
  };
}
