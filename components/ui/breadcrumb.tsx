"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { navigationTabs } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items: customItems, className }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // If custom items are provided, use them
  if (customItems) {
    return (
      <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}>
        <Link href="/" className="hover:text-foreground">
          <Home className="h-4 w-4" />
        </Link>
        {customItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <Link
              href={item.href}
              className={cn(
                "ml-2 hover:text-foreground",
                index === customItems.length - 1 && "text-foreground font-medium"
              )}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
    );
  }

  // Otherwise, generate breadcrumb from navigation structure
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbItems: BreadcrumbItem[] = [];

  // Find matching items in navigation structure
  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    
    // Search through navigation structure
    for (const tab of navigationTabs) {
      for (const column of tab.columns) {
        const item = column.items.find(item => item.href === currentPath);
        if (item) {
          breadcrumbItems.push({
            title: item.title,
            href: item.href,
          });
          break;
        }
      }
    }
  });

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}>
      <Link href="/" className="hover:text-foreground">
        <Home className="h-4 w-4" />
      </Link>
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <ChevronRight className="h-4 w-4" />
          <Link
            href={item.href}
            className={cn(
              "ml-2 hover:text-foreground",
              index === breadcrumbItems.length - 1 && "text-foreground font-medium"
            )}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  );
}
