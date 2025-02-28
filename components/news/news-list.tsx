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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NewsResponse {
  articles: Article[]
  pagination: {
    total: number
    totalPages: number
    currentPage: number
    limit: number
  }
}

interface NewsArticle {
  id: string
  title: string
  description: string
  content: string
  date: string
  category: string
  author: string
  image: string
  url: string
}

interface NewsListProps {
  news: NewsArticle[]
  pagination?: {
    total: number
    totalPages: number
    currentPage: number
    limit: number
  }
  onPageChange: (page: number) => void
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

export function NewsList({ news, pagination, onPageChange }: NewsListProps) {
  const searchParams = useSearchParams()
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
      <div className="text-center text-destructive">
        <p>Error loading news: {error}</p>
      </div>
    )
  }

  if (!news?.length) {
    return (
      <div className="text-center text-muted-foreground">
        <p>No news articles found</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <Card key={article.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            {article.image && (
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
              </div>
            )}
            <CardHeader>
              <CardTitle className="line-clamp-2 hover:text-primary">
                <Link href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                {format(new Date(article.date), "MMM d, yyyy")}
                <span className="text-muted-foreground">
                  • {readingTime(article.content || article.description).text}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">
                {article.description}
              </p>
            </CardContent>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  By {article.author}
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {pagination && (
        <NewsPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={onPageChange}
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
