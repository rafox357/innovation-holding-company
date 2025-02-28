"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play, Calendar, Users, Presentation } from "lucide-react";

const presentations = [
  {
    title: "Q4 2024 Earnings Call",
    type: "Earnings",
    date: "January 25, 2025",
    duration: "60 min",
    speakers: [
      "Michael Johnson - CEO",
      "Sarah Chen - CFO",
      "David Wilson - COO",
    ],
    materials: [
      { name: "Presentation Deck", format: "PDF", size: "3.2 MB" },
      { name: "Financial Statements", format: "PDF", size: "1.8 MB" },
      { name: "Earnings Call Recording", format: "MP3", size: "28.5 MB" },
    ],
  },
  {
    title: "Annual Investor Day 2024",
    type: "Conference",
    date: "December 15, 2024",
    duration: "180 min",
    speakers: [
      "Michael Johnson - CEO",
      "Sarah Chen - CFO",
      "David Wilson - COO",
      "Emily Brown - CTO",
      "James Wilson - Head of R&D",
    ],
    materials: [
      { name: "Corporate Presentation", format: "PDF", size: "5.6 MB" },
      { name: "Strategic Overview", format: "PDF", size: "2.4 MB" },
      { name: "Event Recording", format: "MP4", size: "156.2 MB" },
    ],
  },
];

export function PresentationsContent() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Investor Presentations</h1>
          <p className="text-muted-foreground mt-2">
            Access our latest presentations, earnings calls, and financial materials
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {presentations.map((presentation, index) => (
          <motion.div
            key={presentation.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">{presentation.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{presentation.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {presentation.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Play className="mr-1 h-4 w-4" />
                        {presentation.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Users className="mr-2 h-4 w-4" />
                      <span className="font-medium">Speakers</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-6">
                      {presentation.speakers.map((speaker) => (
                        <li key={speaker}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Presentation className="mr-2 h-4 w-4" />
                      <span className="font-medium">Materials</span>
                    </div>
                    <div className="grid gap-2">
                      {presentation.materials.map((material) => (
                        <div
                          key={material.name}
                          className="flex items-center justify-between p-2 rounded-lg border"
                        >
                          <div className="flex items-center">
                            <span className="text-sm font-medium">
                              {material.name}
                            </span>
                            <Badge variant="outline" className="ml-2">
                              {material.format}
                            </Badge>
                            <span className="text-xs text-muted-foreground ml-2">
                              {material.size}
                            </span>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
