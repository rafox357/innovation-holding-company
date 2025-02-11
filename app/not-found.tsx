import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-red-600">Oops! Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6 text-muted-foreground">
            <p className="text-lg mb-4">The page you&apos;re looking for seems to have wandered off...</p>
            <p className="text-sm italic mb-4">Error 404: Digital Wilderness Detected 🌍</p>
          </div>
          <div className="flex flex-col space-y-4">
            <Button variant="default" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/innovation-hub/programs">Explore Programs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
