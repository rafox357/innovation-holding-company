import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SubsidiariesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      {children}
    </div>
  )
}
