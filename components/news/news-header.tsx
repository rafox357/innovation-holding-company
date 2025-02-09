import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NewsletterForm } from "./newsletter-form"

interface NewsHeaderProps {
  className?: string
}

export function NewsHeader({ className }: NewsHeaderProps) {
  return (
    <div className={cn("border-b bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white", className)}>
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Innovation Insights
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Stay informed about Hubverse's portfolio companies, investment strategies, and transformative innovations shaping the future of business.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/news?category=announcement">Latest Announcements</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/news?category=insight">Investment Insights</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/news?category=community">Portfolio News</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
