"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <CardTitle>Error Loading Project</CardTitle>
          </div>
          <CardDescription>
            We encountered an error while loading the project details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {error.message || "An unexpected error occurred. Please try again later."}
          </p>
          <div className="flex space-x-4">
            <Button onClick={reset}>Try Again</Button>
            <Button variant="outline" asChild>
              <a href="/innovation-hub/foundry/projects">Back to Projects</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
