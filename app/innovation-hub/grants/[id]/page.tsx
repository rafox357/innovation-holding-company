"use client";

import { notFound } from "next/navigation";
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
import { fetchGrantById } from "@/lib/data-fetcher";

interface GrantPageProps {
  params: {
    id: string;
  };
}

export default async function GrantDetailClient({ params }: GrantPageProps) {
  const grant = await fetchGrantById(params.id);

  if (!grant) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{grant.title}</h1>
              <div className="flex items-center space-x-2">
                <Badge variant={grant.status === "open" ? "default" : "secondary"}>
                  {grant.status}
                </Badge>
                <Badge variant="outline">{grant.type}</Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {new Intl.NumberFormat('en-US', { 
                  style: 'currency', 
                  currency: grant.currency 
                }).format(grant.amount)}
              </div>
            </div>
          </div>

          <Card className="p-6">
            <p className="text-muted-foreground">{grant.description}</p>
          </Card>

          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="funder">Funder</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Start Date: {grant.startDate || 'TBA'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Deadline: {grant.deadline || 'Open'}</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="eligibility" className="space-y-4">
              <h3 className="text-xl font-semibold">Eligibility Criteria</h3>
              <ul className="list-disc pl-5 space-y-2">
                {grant.eligibility.map((criterion, index) => (
                  <li key={index}>{criterion}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="funder" className="space-y-4">
              <div className="flex items-center space-x-4">
                <Building className="h-8 w-8 text-muted-foreground" />
                <div>
                  <h3 className="text-xl font-semibold">{grant.funder.name}</h3>
                  {grant.funder.website && (
                    <Link 
                      href={grant.funder.website} 
                      target="_blank" 
                      className="text-primary hover:underline flex items-center"
                    >
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Application Status</h3>
              {grant.status === "open" ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500" />
              )}
            </div>
            <Button className="w-full" disabled={grant.status !== "open"}>
              {grant.status === "open" ? "Apply Now" : "Applications Closed"}
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {grant.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
