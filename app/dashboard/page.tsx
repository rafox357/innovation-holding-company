'use client';

import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArrowUpRight, ArrowDownRight, BarChart3, PieChart, LineChart, Activity } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { ErrorBoundary } from "@/components/error-boundary"

// Loading components
const ChartSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-[20px] w-[100px]" />
    <Skeleton className="h-[200px] w-full" />
  </div>
);

const MetricSkeleton = () => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-4" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-7 w-[120px] mb-2" />
      <Skeleton className="h-4 w-[100px]" />
    </CardContent>
  </Card>
);

// Dashboard sections
const OverviewSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Overview metrics */}
      <Card className="cosmic-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$1.45M</div>
          <p className="text-xs text-muted-foreground">+48.2% from last quarter</p>
        </CardContent>
      </Card>

      <Card className="cosmic-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Market Growth</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">28.5%</div>
          <p className="text-xs text-muted-foreground">+5.3% from last year</p>
        </CardContent>
      </Card>

      <Card className="cosmic-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">+4 new this month</p>
        </CardContent>
      </Card>

      <Card className="cosmic-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Growth</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">156</div>
          <p className="text-xs text-muted-foreground">+12 new members</p>
        </CardContent>
      </Card>
    </div>
  );
};

const FinancialSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Financial charts */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle>Revenue Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Revenue Growth"
            data={[
              { name: "Q1 2024", value: 250000 },
              { name: "Q2 2024", value: 420000 },
              { name: "Q3 2024", value: 680000 },
              { name: "Q4 2024", value: 980000 },
              { name: "Q1 2025", value: 1450000 },
            ]}
          />
        </CardContent>
      </Card>

      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle>Market Expansion</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Market Expansion"
            data={[
              { name: "2023", value: 5.2 },
              { name: "2024", value: 7.8 },
              { name: "2025", value: 12.4 },
              { name: "2026", value: 18.9 },
              { name: "2027", value: 28.5 },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

const MarketSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Market charts */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle>Market Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Market Growth"
            data={[
              { name: "2023", value: 5.2 },
              { name: "2024", value: 7.8 },
              { name: "2025", value: 12.4 },
              { name: "2026", value: 18.9 },
              { name: "2027", value: 28.5 },
            ]}
          />
        </CardContent>
      </Card>

      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle>Market Share</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Market Share"
            data={[
              { name: "2023", value: 12 },
              { name: "2024", value: 18 },
              { name: "2025", value: 25 },
              { name: "2026", value: 32 },
              { name: "2027", value: 40 },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Projects charts */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Project Status"
            data={[
              { name: "Planning", value: 8 },
              { name: "In Progress", value: 12 },
              { name: "Review", value: 4 },
              { name: "Completed", value: 6 },
            ]}
          />
        </CardContent>
      </Card>

      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle>Project Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Project Timeline"
            data={[
              { name: "Q1", value: 5 },
              { name: "Q2", value: 8 },
              { name: "Q3", value: 12 },
              { name: "Q4", value: 15 },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }]} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Real-time insights and analytics for Hubverse's performance and growth
        </p>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="market">Market</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <OverviewSection />
            </TabsContent>
            <TabsContent value="financial" className="space-y-4">
              <FinancialSection />
            </TabsContent>
            <TabsContent value="market" className="space-y-4">
              <MarketSection />
            </TabsContent>
            <TabsContent value="projects" className="space-y-4">
              <ProjectsSection />
            </TabsContent>
          </Tabs>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
