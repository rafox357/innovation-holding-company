"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationItem } from "@/types"

interface MegaMenuProps {
  items: NavigationItem[]
  onMouseLeave: () => void
}

export function MegaMenu({ items, onMouseLeave }: MegaMenuProps) {
  if (!items?.length) return null

  return (
    <div
      className="absolute left-0 top-full w-full bg-background border-b shadow-lg"
      onMouseLeave={onMouseLeave}
    >
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href || "#"}
              className="group block space-y-2 p-4 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
