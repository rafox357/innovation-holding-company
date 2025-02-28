"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Grid } from "lucide-react"
import Link from "next/link"

const quickAccessItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Tasks", href: "/tasks" },
  { name: "Analytics", href: "/analytics" },
  { name: "Settings", href: "/settings" },
]

export function QuickAccessMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cosmic-button">
          <Grid className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Quick access menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="cosmic-card w-48">
        {quickAccessItems.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link href={item.href} className="cosmic-link w-full">
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

