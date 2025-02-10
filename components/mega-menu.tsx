"use client"

import { memo } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationSection } from "@/config/navigation"

interface MegaMenuProps {
  sections: NavigationSection[]
  isOpen: boolean
  onClose: () => void
}

const MegaMenuItem = memo(({ item }: { item: NavigationSection["items"][0] }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-zinc-50 rounded-lg group-hover:bg-zinc-100 dark:bg-zinc-800/50 dark:group-hover:bg-zinc-800" />
    <div className="relative p-6">
      {item.href ? (
        <Link
          href={item.href}
          className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
          onClick={(e) => e.stopPropagation()}
        >
          {item.title}
        </Link>
      ) : (
        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {item.title}
        </div>
      )}
      {item.description && (
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>
      )}
      {item.items && (
        <div className="mt-4 space-y-4">
          {item.items.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href || "#"}
              className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              onClick={(e) => e.stopPropagation()}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
))
MegaMenuItem.displayName = "MegaMenuItem"

export const MegaMenu = memo(({ sections, isOpen, onClose }: MegaMenuProps) => {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-black/40"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 top-16 z-50 mx-auto max-w-7xl overflow-y-auto overscroll-contain rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-900 sm:top-20">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {section.title}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item, itemIndex) => (
                  <MegaMenuItem key={itemIndex} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
})
MegaMenu.displayName = "MegaMenu"
