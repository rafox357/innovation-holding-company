"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Mail, LinkedinIcon, Github } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  avatar: string;
  initials: string;
  bio: string;
  email: string;
  linkedin?: string;
  github?: string;
  publications: number;
}

const team: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Research Director",
    specialization: ["Quantum Computing", "Algorithm Design"],
    avatar: "/avatars/sarah-chen.jpg",
    initials: "SC",
    bio: "Leading quantum computing research with over 15 years of experience in the field.",
    email: "sarah.chen@hubverse.com",
    linkedin: "https://linkedin.com/in/sarahchen",
    github: "https://github.com/sarahchen",
    publications: 45,
  },
  {
    id: "2",
    name: "Dr. Michael Brown",
    role: "Senior Researcher",
    specialization: ["AI Ethics", "Machine Learning"],
    avatar: "/avatars/michael-brown.jpg",
    initials: "MB",
    bio: "Focused on developing ethical frameworks for AI development and deployment.",
    email: "michael.brown@hubverse.com",
    linkedin: "https://linkedin.com/in/michaelbrown",
    publications: 32,
  },
  {
    id: "3",
    name: "Dr. Emily Taylor",
    role: "Lead Researcher",
    specialization: ["Energy Storage", "Materials Science"],
    avatar: "/avatars/emily-taylor.jpg",
    initials: "ET",
    bio: "Specializing in advanced battery technologies and sustainable energy solutions.",
    email: "emily.taylor@hubverse.com",
    github: "https://github.com/emilytaylor",
    publications: 28,
  },
];

const allSpecializations = Array.from(
  new Set(team.flatMap((member) => member.specialization))
);

const roles = Array.from(new Set(team.map((member) => member.role)));

export function TeamList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const filteredTeam = team.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpecializations = selectedSpecializations.length === 0 ||
      member.specialization.some((spec) => selectedSpecializations.includes(spec));

    const matchesRoles = selectedRoles.length === 0 ||
      selectedRoles.includes(member.role);

    return matchesSearch && matchesSpecializations && matchesRoles;
  });

  const toggleSpecialization = (specialization: string) => {
    setSelectedSpecializations((prev) =>
      prev.includes(specialization)
        ? prev.filter((s) => s !== specialization)
        : [...prev, specialization]
    );
  };

  const toggleRole = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role)
        : [...prev, role]
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Input
          placeholder="Search team members..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Specializations</h4>
          <div className="flex flex-wrap gap-2">
            {allSpecializations.map((specialization) => (
              <Badge
                key={specialization}
                variant={selectedSpecializations.includes(specialization) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleSpecialization(specialization)}
              >
                {specialization}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Roles</h4>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <Badge
                key={role}
                variant={selectedRoles.includes(role) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleRole(role)}
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTeam.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  {member.specialization.map((spec) => (
                    <Badge
                      key={spec}
                      variant="secondary"
                      className="mr-2"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                
                <div className="text-sm text-muted-foreground">
                  {member.publications} publications
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  {member.linkedin && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.github && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
