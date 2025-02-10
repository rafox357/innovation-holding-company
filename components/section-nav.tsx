"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import type { NavigationItem } from "@/config/navigation"

interface SectionNavProps {
  items: NavigationItem[]
  className?: string
}

export function SectionNav({ items, className }: SectionNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href || "#"}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
