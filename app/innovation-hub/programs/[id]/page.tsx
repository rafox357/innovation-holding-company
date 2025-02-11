import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Calendar,
  Users,
  Clock,
  CheckCircle,
  GraduationCap,
  Target,
  Award,
} from "lucide-react";

interface ProgramPageProps {
  params: {
    id: string;
  };
}

// Mock data - replace with API call
const program = {
  id: "prog-1",
  title: "AI Research Fellowship",
  description: "A 12-month fellowship program for AI researchers.",
  duration: "12 months",
  benefits: [
    "Full research funding",
    "Access to computing resources",
    "Mentorship from industry experts",
    "Publication opportunities",
  ],
  requirements: [
    "PhD in Computer Science or related field",
    "Strong research background in AI",
    "Publication track record",
  ],
  startDate: "2025-09-01",
  endDate: "2026-08-31",
  capacity: 10,
  status: "upcoming" as const,
  curriculum: [
    {
      title: "Research Phase 1",
      duration: "3 months",
      description: "Initial research exploration and literature review",
      outcomes: [
        "Research proposal",
        "Literature review",
        "Methodology definition",
      ],
    },
    {
      title: "Development Phase",
      duration: "6 months",
      description: "Core research and development work",
      outcomes: [
        "Implementation of proposed solutions",
        "Experimental validation",
        "Initial results documentation",
      ],
    },
    {
      title: "Publication Phase",
      duration: "3 months",
      description: "Paper writing and submission",
      outcomes: [
        "Research paper draft",
        "Conference/journal submission",
        "Final presentation",
      ],
    },
  ],
  mentors: [
    {
      name: "Dr. Jane Smith",
      role: "Lead AI Researcher",
      expertise: ["Machine Learning", "Neural Networks"],
    },
    {
      name: "Prof. John Doe",
      role: "Senior Research Advisor",
      expertise: ["AI Ethics", "Deep Learning"],
    },
  ],
  faqs: [
    {
      question: "Can I apply from outside the country?",
      answer: "Yes, this fellowship is open to international applicants.",
    },
    {
      question: "Is the fellowship fully funded?",
      answer: "Yes, selected fellows receive full funding for the duration.",
    },
  ],
};

export default function ProgramPage({ params }: ProgramPageProps) {
  // In a real app, fetch program data here
  if (params.id !== program.id) {
    notFound();
  }

  const statusColors = {
    upcoming: "bg-yellow-100 text-yellow-800",
    active: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/innovation-hub/programs"
        className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block"
      >
        ← Back to Programs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{program.title}</h1>
              <Badge className={`${statusColors[program.status]} capitalize`}>
                {program.status}
              </Badge>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>{program.description}</p>
          </div>

          <Tabs defaultValue="curriculum" className="mb-8">
            <TabsList>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="mentors">Mentors</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="space-y-6">
              {program.curriculum.map((phase, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Duration: {phase.duration}
                      </p>
                    </div>
                    <Badge variant="outline">Phase {index + 1}</Badge>
                  </div>
                  <p className="mb-4">{phase.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Learning Outcomes:</h4>
                    <ul className="space-y-2">
                      {phase.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Target className="w-4 h-4 mr-2 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="mentors" className="grid gap-6 md:grid-cols-2">
              {program.mentors.map((mentor) => (
                <Card key={mentor.name} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{mentor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {mentor.role}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((exp) => (
                          <Badge key={exp} variant="secondary">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="faq" className="space-y-4">
              {program.faqs.map((faq, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Program Details</h2>
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-muted-foreground">{program.duration}</div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <div>
                  <div className="font-medium">Program Dates</div>
                  <div className="text-muted-foreground">
                    {new Date(program.startDate).toLocaleDateString()} -{" "}
                    {new Date(program.endDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-2" />
                <div>
                  <div className="font-medium">Capacity</div>
                  <div className="text-muted-foreground">
                    {program.capacity} participants
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Key Benefits</h2>
            <ul className="space-y-2">
              {program.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Award className="w-4 h-4 mr-2 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="space-y-2">
              {program.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5" />
                  <span className="text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          {program.status === "upcoming" && (
            <Button className="w-full" size="lg">
              Apply Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
