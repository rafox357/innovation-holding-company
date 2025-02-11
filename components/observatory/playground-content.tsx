"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartDemo } from "@/components/observatory/playground/chart-demo";
import { FormDemo } from "@/components/observatory/playground/form-demo";
import { ApiDemo } from "@/components/observatory/playground/api-demo";

export function PlaygroundContent() {
  const router = useRouter();

  useEffect(() => {
    const isDevEnvironment = process.env.NODE_ENV === 'development';
    const enablePlayground = process.env.NEXT_PUBLIC_ENABLE_PLAYGROUND === 'true';

    if (!isDevEnvironment && !enablePlayground) {
      router.push('/observatory');
    }
  }, [router]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Observatory Playground</h1>
          <p className="text-muted-foreground mt-2">Development and testing environment</p>
        </div>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-700">
            ⚠️ Development environment only
          </p>
        </div>
      </div>

      <Tabs defaultValue="charts">
        <TabsList>
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="charts">
          <Card>
            <CardHeader>
              <CardTitle>Chart Testing</CardTitle>
              <CardDescription>Test and preview chart components</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartDemo />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="forms">
          <Card>
            <CardHeader>
              <CardTitle>Form Testing</CardTitle>
              <CardDescription>Test form validation and submission</CardDescription>
            </CardHeader>
            <CardContent>
              <FormDemo />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Testing</CardTitle>
              <CardDescription>Test API integrations and responses</CardDescription>
            </CardHeader>
            <CardContent>
              <ApiDemo />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
