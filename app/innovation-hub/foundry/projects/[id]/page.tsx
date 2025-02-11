import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, FileText, Users } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

async function getProject(id: string) {
  // Mock data - replace with API call
  return {
    id,
    title: "Quantum Computing Research",
    status: "Active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    team: [
      { name: "Dr. Jane Smith", role: "Principal Investigator" },
      { name: "Dr. John Doe", role: "Senior Researcher" },
    ],
    description: "Advanced research in quantum computing algorithms and applications.",
    objectives: [
      "Develop new quantum algorithms",
      "Improve quantum error correction",
      "Create quantum software tools",
    ],
    publications: [
      {
        title: "Quantum Algorithm Optimization",
        journal: "Nature Quantum",
        date: "2024-02",
      },
    ],
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.id);
  return {
    title: `${project.title} | The Foundry | Hubverse`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/innovation-hub/foundry/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription>Project ID: {project.id}</CardDescription>
              </div>
              <Badge>{project.status}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Calendar className="h-4 w-4" />
                <span>
                  {project.startDate} - {project.endDate}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-4 w-4" />
                <span>{project.team.length} team members</span>
              </div>
              <div className="flex items-center gap-4">
                <FileText className="h-4 w-4" />
                <span>{project.publications.length} publications</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              {project.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {project.team.map((member, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{member.name}</span>
                  <span className="text-muted-foreground">{member.role}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {project.publications.map((pub, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium">{pub.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {pub.journal} • {pub.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
