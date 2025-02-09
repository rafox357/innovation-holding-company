"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "@/components/ui/logo"
import { NotificationCenter } from "@/components/notification-center"
import { QuickAccessMenu } from "@/components/quick-access-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserMenu } from "@/components/user-menu"
import { mainRoutes } from "@/config/routes"
import { cn } from "@/lib/utils"

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <Link href="/" className="mr-6">
          <Logo className="h-6 w-auto" />
        </Link>

        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {mainRoutes.map((category) => (
                <NavigationMenuItem key={category.category}>
                  <NavigationMenuTrigger>{category.category}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {category.items.map((item) => (
                        <ListItem
                          key={item.href}
                          title={item.name}
                          href={item.href}
                        >
                          {item.description}
                          {item.children && (
                            <ul className="mt-2 space-y-1">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="text-sm text-muted-foreground hover:text-primary"
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex md:items-center md:space-x-4">
            <QuickAccessMenu />
            <NotificationCenter />
            <ThemeToggle />
            <UserMenu />
          </div>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-14 z-50 h-[calc(100vh-3.5rem)] overflow-y-auto bg-background md:hidden"
          >
            <nav className="container py-4">
              {mainRoutes.map((category) => (
                <div key={category.category} className="mb-4">
                  <h2 className="mb-2 text-lg font-semibold">{category.category}</h2>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-lg px-4 py-2 text-sm",
                            pathname === item.href
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block rounded-lg px-4 py-2 text-sm",
                                    pathname === child.href
                                      ? "text-primary"
                                      : "text-muted-foreground hover:text-primary"
                                  )}
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
