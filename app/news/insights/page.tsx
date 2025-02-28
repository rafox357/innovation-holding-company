import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getArticlesByCategory } from "@/lib/mock-news"
import { format } from "date-fns"

export default function InsightsPage() {
  const insights = getArticlesByCategory('insight')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Industry Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <Card key={insight.id}>
            <CardHeader>
              <CardTitle>{insight.title}</CardTitle>
              <CardDescription>{format(new Date(insight.date), "MMMM d, yyyy")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{insight.description}</p>
              <Button asChild>
                <Link href={`/news/article/${insight.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
