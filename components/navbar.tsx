"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { MegaMenu } from "./navigation/mega-menu"
import { navigationTabs } from "@/config/navigation"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col space-y-4 p-4">
      {navigationTabs.map((tab) => (
        <div key={tab.title} className="space-y-3">
          <h4 className="font-medium">{tab.title}</h4>
          <div className="space-y-2">
            {tab.columns.map((column) => (
              <div key={column.title} className="pl-2 space-y-2">
                <h5 className="text-sm text-muted-foreground">{column.title}</h5>
                {column.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-sm ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-6 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">Hubverse</span>
        </Link>

        <div className="flex flex-1 items-center justify-between space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <MegaMenu tabs={navigationTabs} />
          </nav>

          <div className="flex items-center space-x-4">
            <div className="w-full max-w-sm items-center space-x-2 hidden lg:flex">
              <Search className="h-4 w-4 text-muted-foreground absolute ml-2" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8"
              />
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
