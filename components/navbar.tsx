"use client"

import Link from "next/link"
import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { MegaMenu } from "@/components/mega-menu"
import { navigationConfig } from "@/config/navigation"

export function Navbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav 
          items={navigationConfig.mainNav} 
          onMouseEnter={setActiveMegaMenu}
          activeMegaMenu={activeMegaMenu}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <ModeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
      {activeMegaMenu && (
        <MegaMenu
          items={navigationConfig.megaMenu[activeMegaMenu]}
          onMouseLeave={() => setActiveMegaMenu(null)}
        />
      )}
    </header>
  )
}
