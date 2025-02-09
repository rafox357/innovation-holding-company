import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-muted-foreground">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
