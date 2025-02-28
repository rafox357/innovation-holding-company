"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items: {
    title: string
    href: string
    description?: string
  }[]
  onMouseEnter: (item: string | null) => void
  activeMegaMenu: string | null
}

export function MainNav({ items, onMouseEnter, activeMegaMenu }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Hubverse</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-primary",
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground",
              activeMegaMenu === item.href && "text-primary"
            )}
            onMouseEnter={() => onMouseEnter(item.href)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
