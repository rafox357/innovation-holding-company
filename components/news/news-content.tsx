"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useNews } from "@/hooks/use-news"
import { NewsFilter } from "@/components/news/news-filter"
import { NewsPagination } from "@/components/news/news-pagination"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { format } from "date-fns"
import { Clock, AlertTriangle } from "lucide-react"
import readingTime from "reading-time"
import { Skeleton } from "@/components/ui/skeleton"

interface Article {
  id: string
  title: string
  description: string
  date: string
  author: { name: string; role: string } | string
  content: string
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
)

export function NewsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { news, pagination, isLoading, error, fetchNews } = useNews()

  const currentCategory = searchParams.get("category") || "all"
  const currentQuery = searchParams.get("query") || ""
  const currentPage = parseInt(searchParams.get("page") || "1")

  useEffect(() => {
    fetchNews({
      category: currentCategory === "all" ? undefined : currentCategory,
      query: currentQuery,
      page: currentPage,
    })
  }, [fetchNews, currentCategory, currentQuery, currentPage])

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (query) params.set("query", query)
    else params.delete("query")
    params.set("page", "1")
    router.push(`/news?${params.toString()}`)
  }

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category !== "all") params.set("category", category)
    else params.delete("category")
    params.set("page", "1")
    router.push(`/news?${params.toString()}`)
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle>Error Loading News</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>{typeof error === 'string' ? error : 'An error occurred while loading the news.'}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <NewsFilter
        currentCategory={currentCategory}
        currentQuery={currentQuery}
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array(6).fill(0).map((_, i) => <NewsCardSkeleton key={i} />)
        ) : (
          news?.map((article: Article) => (
            <Card key={article.id}>
              <CardHeader>
                <Link href={`/news/article/${article.id}`}>
                  <CardTitle className="hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </Link>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{readingTime(article.content).text}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{format(new Date(article.date), 'MMM d, yyyy')}</span>
                    <span>•</span>
                    <span>{typeof article.author === 'string' ? article.author : article.author.name}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {!isLoading && pagination && (
        <NewsPagination
          currentPage={currentPage}
          totalPages={pagination.totalPages}
          onPageChange={(page) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set("page", page.toString())
            router.push(`/news?${params.toString()}`)
          }}
        />
      )}
    </div>
  )
}
