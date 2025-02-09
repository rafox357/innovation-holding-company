'use client'
 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Something went wrong!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                A global error has occurred. Please try again.
              </p>
              <Button
                onClick={reset}
                variant="default"
              >
                Try again
              </Button>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}
