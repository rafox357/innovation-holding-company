import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getArticlesByCategory } from "@/lib/mock-news"
import { format } from "date-fns"

export default function LatestNewsPage() {
  const latestNews = getArticlesByCategory('latest')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestNews.map((news) => (
          <Card key={news.id}>
            <CardHeader>
              <CardTitle>{news.title}</CardTitle>
              <CardDescription>{format(new Date(news.date), "MMMM d, yyyy")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{news.description}</p>
              <Button asChild>
                <Link href={`/news/article/${news.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
