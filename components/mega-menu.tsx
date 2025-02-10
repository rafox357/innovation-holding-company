"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface MegaMenuItem {
  title: string
  href: string
  description?: string
}

interface MegaMenuSection {
  title: string
  items: MegaMenuItem[]
}

interface MegaMenuProps {
  items: MegaMenuSection[]
  onMouseLeave: () => void
}

export function MegaMenu({ items, onMouseLeave }: MegaMenuProps) {
  return (
    <div
      className="absolute left-0 right-0 top-14 z-50 bg-background border-b"
      onMouseLeave={onMouseLeave}
    >
      <div className="container py-6">
        <div className="grid grid-cols-4 gap-6">
          {items.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block text-sm text-muted-foreground",
                        "hover:text-primary transition-colors"
                      )}
                    >
                      {item.title}
                      {item.description && (
                        <span className="block text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
