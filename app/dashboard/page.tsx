'use client';

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/auth.config"
import DashboardClient from "./dashboard-client"

import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArrowUpRight, ArrowDownRight, BarChart3, PieChart, LineChart, Activity } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { ErrorBoundary } from "@/components/error-boundary"
import { api } from "@/lib/api-client"
import { useQuery } from "@tanstack/react-query"

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
  const { data: overview, isLoading } = useQuery({
    queryKey: ['dashboard', 'overview'],
    queryFn: () => api.dashboard.getOverview(),
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4).fill(0).map((_, i) => (
          <MetricSkeleton key={i} />
        ))}
      </div>
    );
  }

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
  const { data: financial, isLoading } = useQuery({
    queryKey: ['dashboard', 'financial'],
    queryFn: () => api.dashboard.getFinancial(),
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
    );
  }

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
  const { data: market, isLoading } = useQuery({
    queryKey: ['dashboard', 'market'],
    queryFn: () => api.dashboard.getMarket(),
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
    );
  }

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

const ProjectsSection = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['dashboard', 'projects'],
    queryFn: () => api.dashboard.getProjects(),
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Projects charts */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle>Project Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Project Growth"
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
          <CardTitle>Project Completion</CardTitle>
        </CardHeader>
        <CardContent>
          <KPIChart
            title="Project Completion"
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

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/auth/signin")
  }

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
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="cosmic-card inline-flex h-9 items-center justify-center rounded-lg p-1">
            <TabsTrigger value="overview" className="cosmic-tab">
              <Activity className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="financial" className="cosmic-tab">
              <LineChart className="mr-2 h-4 w-4" />
              Financial
            </TabsTrigger>
            <TabsTrigger value="market" className="cosmic-tab">
              <BarChart3 className="mr-2 h-4 w-4" />
              Market
            </TabsTrigger>
            <TabsTrigger value="projects" className="cosmic-tab">
              <PieChart className="mr-2 h-4 w-4" />
              Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Suspense fallback={<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{Array(4).fill(0).map((_, i) => <MetricSkeleton key={i} />)}</div>}>
              <OverviewSection />
            </Suspense>
          </TabsContent>

          <TabsContent value="financial" className="space-y-4">
            <Suspense fallback={<div className="grid gap-4 md:grid-cols-2"><ChartSkeleton /><ChartSkeleton /></div>}>
              <FinancialSection />
            </Suspense>
          </TabsContent>

          <TabsContent value="market" className="space-y-4">
            <Suspense fallback={<div className="grid gap-4 md:grid-cols-2"><ChartSkeleton /><ChartSkeleton /></div>}>
              <MarketSection />
            </Suspense>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Suspense fallback={<div className="grid gap-4 md:grid-cols-2"><ChartSkeleton /><ChartSkeleton /></div>}>
              <ProjectsSection />
            </Suspense>
          </TabsContent>
        </Tabs>
      </ErrorBoundary>
      <p>Welcome, {session.user?.email}!</p>
      <p>Your role: {session.user?.role}</p>
      <DashboardClient session={session} />
    </div>
  );
}
