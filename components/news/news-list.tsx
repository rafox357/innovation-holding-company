"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { format } from "date-fns"
import { Clock } from "lucide-react"
import readingTime from "reading-time"
import { Skeleton } from "@/components/ui/skeleton"
import { useSearchParams } from "next/navigation"
import { NewsPagination } from "./news-pagination"
import { useEffect, useState } from "react"
import { Article } from "@/types/news"

interface NewsResponse {
  articles: Article[]
  pagination: {
    total: number
    totalPages: number
    currentPage: number
    limit: number
  }
}

const NewsCardSkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-3 w-1/2" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-20 w-full mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-24" />
      </div>
    </CardContent>
  </Card>
);

export function NewsList() {
  const searchParams = useSearchParams()
  const [news, setNews] = useState<Article[]>([])
  const [pagination, setPagination] = useState<NewsResponse['pagination'] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const currentCategory = searchParams.get("category") || "all"
  const currentQuery = searchParams.get("query") || ""
  const currentPage = parseInt(searchParams.get("page") || "1")

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams()
        if (currentCategory !== "all") params.set("category", currentCategory)
        if (currentQuery) params.set("query", currentQuery)
        params.set("page", currentPage.toString())

        const response = await fetch(`/api/news?${params.toString()}`)
        if (!response.ok) throw new Error("Failed to fetch news")
        
        const data: NewsResponse = await response.json()
        setNews(data.articles)
        setPagination(data.pagination)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [currentCategory, currentQuery, currentPage])

  if (loading) {
    return <NewsList.Skeleton />
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Loading News</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    )
  }

  if (!news?.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No News Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No news articles match your search criteria. Try adjusting your filters or search query.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {news.map((article) => (
        <Card key={article.id} className="hover:border-primary/50 transition-colors">
          <Link href={`/news/article/${article.id}`}>
            <CardHeader>
              <CardTitle className="text-xl hover:text-primary transition-colors">
                {article.title}
              </CardTitle>
              <CardDescription>
                {format(new Date(article.date), "MMMM dd, yyyy")} • {article.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3 mb-4">
                {article.description}
              </p>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {readingTime(article.content).text}
                </div>
                <span>{typeof article.author === 'string' ? article.author : article.author.name}</span>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}

      {pagination && pagination.totalPages > 1 && (
        <NewsPagination
          currentPage={currentPage}
          totalPages={pagination.totalPages}
          onPageChange={() => {}} // Handled by URL params
        />
      )}
    </div>
  )
}

NewsList.Skeleton = function NewsListSkeleton() {
  return (
    <div className="space-y-6">
      {Array(6).fill(0).map((_, i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </div>
  )
}
