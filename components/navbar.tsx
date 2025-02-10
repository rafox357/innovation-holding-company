"use client"

import { memo, useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { MegaMenu } from "@/components/mega-menu"
import { mainNavigation } from "@/config/navigation"
import { Menu } from "lucide-react"

const NavLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  )
})
NavLink.displayName = "NavLink"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 10
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled)
    }
  }, [isScrolled])

  useEffect(() => {
    const opts = { passive: true }
    window.addEventListener("scroll", handleScroll, opts)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container flex h-14 items-center">
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          onClick={() => setIsMegaMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="mr-4 hidden lg:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Hubverse</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink href="/news">News</NavLink>
            <NavLink href="/business">Business</NavLink>
            <NavLink href="/innovation-hub">Innovation Hub</NavLink>
            <NavLink href="/resources">Resources</NavLink>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <div className="w-full flex-1 lg:w-auto lg:flex-none">
            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-normal lg:hidden"
              onClick={() => setIsMegaMenuOpen(true)}
            >
              Search documentation...
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <nav className="flex items-center space-x-2">
              <ModeToggle />
              <UserNav />
            </nav>
          </div>
        </div>
        <MegaMenu
          sections={mainNavigation}
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </div>
    </header>
  )
}
