"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { NavTab } from "@/types/navigation";

interface MegaMenuProps {
  tabs: NavTab[];
}

export function MegaMenu({ tabs }: MegaMenuProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {tabs.map((tab) => (
          <NavigationMenuItem key={tab.title}>
            <NavigationMenuTrigger>{tab.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[800px] lg:w-[900px] lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {tab.columns.map((column) => (
                  <div key={column.title} className="space-y-3">
                    <h4 className="text-sm font-medium leading-none">
                      {column.title}
                    </h4>
                    <div className="space-y-1">
                      {column.items.map((item) => (
                        <NavigationMenuLink
                          key={item.href}
                          asChild
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              pathname === item.href &&
                                "bg-accent text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                            {item.description && (
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
