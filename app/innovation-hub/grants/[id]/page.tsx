"use client";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Calendar,
  DollarSign,
  Clock,
  Building,
  FileText,
  CheckCircle,
  XCircle,
  ExternalLink,
} from "lucide-react";

interface GrantPageProps {
  params: {
    id: string;
  };
}

// Mock data - replace with API call
const grant = {
  id: "grant-1",
  title: "AI Innovation Research Grant",
  description:
    "Supporting groundbreaking research in artificial intelligence and machine learning.",
  amount: 250000,
  currency: "USD",
  status: "open" as const,
  type: "research" as const,
  funder: {
    name: "Tech Innovation Foundation",
    description: "Leading foundation supporting technological advancement",
    website: "https://example.com",
    logo: "/logos/tif.png",
  },
  deadline: "2025-06-30",
  startDate: "2025-07-01",
  endDate: "2026-06-30",
  eligibility: [
    "PhD holders in Computer Science or related fields",
    "Minimum 5 years research experience",
    "Track record of AI publications",
  ],
  requirements: [
    "Detailed research proposal",
    "CV and publications list",
    "Budget breakdown",
    "Timeline and milestones",
  ],
  tags: ["AI", "Machine Learning", "Research"],
  applicationProcess: [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit research proposal and CV",
      deadline: "2025-05-01",
    },
    {
      step: 2,
      title: "Review Process",
      description: "Applications reviewed by expert panel",
      deadline: "2025-06-01",
    },
    {
      step: 3,
      title: "Final Selection",
      description: "Selected candidates notified",
      deadline: "2025-06-30",
    },
  ],
  faqs: [
    {
      question: "Can international researchers apply?",
      answer: "Yes, this grant is open to researchers worldwide.",
    },
    {
      question: "Is partial funding available?",
      answer: "No, this grant is only available as a complete package.",
    },
  ],
};

export async function generateMetadata({
  params,
}: GrantPageProps): Promise<Metadata> {
  // In a real app, fetch grant data here
  return {
    title: `${grant.title} | Grants | Hubverse`,
    description: grant.description,
  };
}

export default function GrantPage({ params }: GrantPageProps) {
  // In a real app, fetch grant data here
  if (params.id !== grant.id) {
    notFound();
  }

  const statusColors = {
    open: "bg-green-100 text-green-800",
    closed: "bg-gray-100 text-gray-800",
    awarded: "bg-blue-100 text-blue-800",
    in_review: "bg-yellow-100 text-yellow-800",
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/innovation-hub/grants"
        className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block"
      >
        ← Back to Grants
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{grant.title}</h1>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
                  statusColors[grant.status]
                }`}
              >
                {grant.status.replace("_", " ")}
              </span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {formatCurrency(grant.amount, grant.currency)}
              </div>
              <div className="text-sm text-muted-foreground">Grant Amount</div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>{grant.description}</p>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Eligibility</h3>
                <ul className="space-y-2">
                  {grant.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {grant.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FileText className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-6">
                  {grant.applicationProcess.map((step) => (
                    <div key={step.step} className="relative pl-10">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-foreground">
                          {step.step}
                        </span>
                      </div>
                      <Card className="p-4">
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {step.description}
                        </p>
                        <div className="text-sm">
                          <Clock className="w-4 h-4 inline mr-1" />
                          Deadline:{" "}
                          {new Date(step.deadline).toLocaleDateString()}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-4">
              {grant.faqs.map((faq, index) => (
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
            <h2 className="text-xl font-semibold mb-4">Important Dates</h2>
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />
                <div>
                  <div className="font-medium">Application Deadline</div>
                  <div className="text-muted-foreground">
                    {new Date(grant.deadline).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <div>
                  <div className="font-medium">Project Duration</div>
                  <div className="text-muted-foreground">
                    {new Date(grant.startDate).toLocaleDateString()} -{" "}
                    {new Date(grant.endDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">About the Funder</h2>
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <Building className="w-4 h-4 mr-2" />
                <span className="font-medium">{grant.funder.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {grant.funder.description}
              </p>
              {grant.funder.website && (
                <Button variant="outline" className="w-full" asChild>
                  <Link
                    href={grant.funder.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </Card>

          <Button className="w-full" size="lg">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
