import { Suspense } from "react";
import { DashboardContent } from "@/components/observatory/dashboard-content";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

async function DashboardTabs() {
  return (
    <Suspense
      fallback={
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-6 w-1/2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-6 w-1/2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-6 w-1/2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-6 w-1/2" />
            </CardContent>
          </Card>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}

export default DashboardTabs;
