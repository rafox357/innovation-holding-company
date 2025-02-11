"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "on-hold";
  progress: number;
  lead: {
    name: string;
    avatar: string;
    initials: string;
  };
  team: number;
  startDate: string;
  endDate: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Quantum Computing Research",
    description: "Exploring quantum algorithms for optimization problems",
    status: "active",
    progress: 75,
    lead: {
      name: "Dr. Sarah Chen",
      avatar: "/avatars/sarah-chen.jpg",
      initials: "SC",
    },
    team: 5,
    startDate: "2024-01-15",
    endDate: "2024-12-31",
  },
  {
    id: "2",
    name: "AI Ethics Framework",
    description: "Developing guidelines for ethical AI development",
    status: "active",
    progress: 45,
    lead: {
      name: "Dr. Michael Brown",
      avatar: "/avatars/michael-brown.jpg",
      initials: "MB",
    },
    team: 4,
    startDate: "2024-02-01",
    endDate: "2024-08-31",
  },
  {
    id: "3",
    name: "Sustainable Energy Storage",
    description: "Research on advanced battery technologies",
    status: "on-hold",
    progress: 30,
    lead: {
      name: "Dr. Emily Taylor",
      avatar: "/avatars/emily-taylor.jpg",
      initials: "ET",
    },
    team: 6,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
];

const statusColors = {
  active: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  completed: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  "on-hold": "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
};

export function ProjectList() {
  const columns: ColumnDef<Project>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Project
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="space-y-1">
            <div className="font-medium">{row.getValue("name")}</div>
            <div className="text-sm text-muted-foreground">
              {row.original.description}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as keyof typeof statusColors;
        return (
          <Badge variant="secondary" className={statusColors[status]}>
            {status}
          </Badge>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: ({ row }) => {
        const progress = row.getValue("progress") as number;
        return (
          <div className="space-y-2">
            <Progress value={progress} />
            <div className="text-sm text-muted-foreground">
              {progress}% complete
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "lead",
      header: "Lead",
      cell: ({ row }) => {
        const lead = row.getValue("lead") as Project["lead"];
        return (
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={lead.avatar} />
              <AvatarFallback>{lead.initials}</AvatarFallback>
            </Avatar>
            <div className="text-sm">{lead.name}</div>
          </div>
        );
      },
    },
    {
      accessorKey: "team",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Team Size
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        return <div>{row.getValue("team")} members</div>;
      },
    },
    {
      accessorKey: "startDate",
      header: "Timeline",
      cell: ({ row }) => {
        return (
          <div className="text-sm">
            {new Date(row.getValue("startDate")).toLocaleDateString()} -{" "}
            {new Date(row.original.endDate).toLocaleDateString()}
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(row.original.id)}
              >
                Copy project ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Edit project</DropdownMenuItem>
              <DropdownMenuItem>View team</DropdownMenuItem>
              <DropdownMenuItem>View timeline</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const filterableColumns = [
    {
      id: "status",
      title: "Status",
      options: [
        { label: "Active", value: "active" },
        { label: "Completed", value: "completed" },
        { label: "On Hold", value: "on-hold" },
      ],
    },
  ];

  const searchableColumns = [
    {
      id: "name",
      title: "Project",
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={projects}
      filterableColumns={filterableColumns}
      searchableColumns={searchableColumns}
    />
  );
}
