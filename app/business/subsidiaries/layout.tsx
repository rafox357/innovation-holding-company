"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { mainRoutes } from "@/config/routes"

const subsidiariesRoute = mainRoutes.find(
  (route) => route.category === "Business"
)?.items.find((item) => item.name === "Subsidiaries")

const subsidiaries = subsidiariesRoute?.children || []

export default function SubsidiariesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:flex w-64 flex-col fixed left-0 top-14 h-[calc(100vh-3.5rem)] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ScrollArea className="flex-1">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Subsidiaries
              </h2>
              <div className="space-y-1">
                {subsidiaries.map((subsidiary) => (
                  <Button
                    key={subsidiary.href}
                    variant={pathname === subsidiary.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      pathname === subsidiary.href && "bg-accent"
                    )}
                    asChild
                  >
                    <Link href={subsidiary.href}>{subsidiary.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
      <main className="flex-1 lg:pl-64">
        <div className="container py-6">{children}</div>
      </main>
    </div>
  )
}
