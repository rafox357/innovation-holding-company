"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";

interface QuickAction {
  id: string;
  title: string;
  description: string;
  action: () => void;
}

const researchAreas = [
  "Quantum Computing",
  "AI Ethics",
  "Energy Storage",
  "Biotech",
  "Robotics",
];

export function QuickActions() {
  const [date, setDate] = useState<Date>();
  const [showNewProject, setShowNewProject] = useState(false);
  const [showScheduleMeeting, setShowScheduleMeeting] = useState(false);

  const quickActions: QuickAction[] = [
    {
      id: "new-project",
      title: "New Research Project",
      description: "Start a new research project",
      action: () => setShowNewProject(true),
    },
    {
      id: "schedule-meeting",
      title: "Schedule Meeting",
      description: "Schedule a team or review meeting",
      action: () => setShowScheduleMeeting(true),
    },
  ];

  return (
    <div className="flex gap-2">
      {quickActions.map((action) => (
        <Dialog key={action.id} open={
          action.id === "new-project" ? showNewProject :
          action.id === "schedule-meeting" ? showScheduleMeeting :
          false
        }>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={action.action}
            >
              <Plus className="h-4 w-4" />
              {action.title}
            </Button>
          </DialogTrigger>

          {action.id === "new-project" && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Research Project</DialogTitle>
                <DialogDescription>
                  Create a new research project. Fill in the project details below.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" placeholder="Enter project name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="research-area">Research Area</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select research area" />
                    </SelectTrigger>
                    <SelectContent>
                      {researchAreas.map((area) => (
                        <SelectItem key={area} value={area.toLowerCase()}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="Enter project description"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowNewProject(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setShowNewProject(false)}>
                  Create Project
                </Button>
              </DialogFooter>
            </DialogContent>
          )}

          {action.id === "schedule-meeting" && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule Meeting</DialogTitle>
                <DialogDescription>
                  Schedule a team or review meeting.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="meeting-title">Meeting Title</Label>
                  <Input id="meeting-title" placeholder="Enter meeting title" />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meeting-type">Meeting Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="team">Team Meeting</SelectItem>
                      <SelectItem value="review">Project Review</SelectItem>
                      <SelectItem value="planning">Planning Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowScheduleMeeting(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setShowScheduleMeeting(false)}>
                  Schedule
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      ))}
    </div>
  );
}
