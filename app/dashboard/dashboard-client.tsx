'use client';

import { Session } from "next-auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/lib/api-client"
import { useQuery } from "@tanstack/react-query"
import SignOutButton from "@/components/auth/sign-out-button"

// Existing dashboard components (copied from original page)
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

export default function DashboardClient({ session }: { session: Session }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }]} />
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user?.email}</h1>
        <p>Role: {session.user?.role}</p>
        <SignOutButton />
      </div>

      {/* Rest of your existing dashboard components */}
    </div>
  )
}
