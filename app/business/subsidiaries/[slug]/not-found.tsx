import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Subsidiary Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The subsidiary you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/business/subsidiaries">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subsidiaries
          </Link>
        </Button>
      </div>
    </div>
  )
}
