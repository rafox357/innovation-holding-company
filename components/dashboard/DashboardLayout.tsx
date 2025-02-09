'use client';

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { 
    name: "Investment Overview", 
    href: "/dashboard", 
    icon: BarChart3,
    description: "Key investment metrics and opportunities"
  },
  { 
    name: "Market Analysis", 
    href: "/dashboard/market", 
    icon: TrendingUp,
    description: "Market size and growth potential"
  },
  { 
    name: "Business Model", 
    href: "/dashboard/business", 
    icon: DollarSign,
    description: "Revenue streams and business strategy"
  },
  { 
    name: "Financial Performance", 
    href: "/dashboard/financial", 
    icon: LineChart,
    description: "Detailed financial metrics and analysis"
  }
];

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                    pathname === item.href 
                      ? "bg-accent text-accent-foreground" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <main className="container mx-auto py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
