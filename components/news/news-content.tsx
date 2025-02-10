"use client"

import { Suspense, memo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useNews } from "@/hooks/use-news"
import { NewsFilter } from "@/components/news/news-filter"
import { NewsPagination } from "@/components/news/news-pagination"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Clock, AlertTriangle } from "lucide-react"
import readingTime from "reading-time"
import { Skeleton } from "@/components/ui/skeleton"
import { Article } from "@/types/news"

const NewsCardSkeleton = memo(() => (
  <Card>
    <CardHeader>
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-20 w-full" />
      <div className="mt-4 flex items-center space-x-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-24" />
      </div>
    </CardContent>
  </Card>
))
NewsCardSkeleton.displayName = "NewsCardSkeleton"

const NewsCard = memo(({ article }: { article: Article }) => {
  const stats = readingTime(article.content)
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/news/article/${article.id}`} className="hover:underline">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription>{format(new Date(article.date), "MMMM d, yyyy")}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
        <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {stats.text}
          </div>
          <div>{article.category}</div>
        </div>
      </CardContent>
    </Card>
  )
})
NewsCard.displayName = "NewsCard"

const NewsList = memo(({ articles }: { articles: Article[] }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {articles.map((article) => (
      <NewsCard key={article.id} article={article} />
    ))}
  </div>
))
NewsList.displayName = "NewsList"

interface NewsContentProps {
  currentCategory: string
  currentQuery: string
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
}

export function NewsContent({
  currentCategory,
  currentQuery,
  onSearch,
  onCategoryChange,
}: NewsContentProps) {
  const { data, isLoading, error, fetchNews } = useNews()
  const searchParams = useSearchParams()
  const router = useRouter()
  const page = parseInt(searchParams.get("page") || "1")

  useEffect(() => {
    fetchNews({
      category: currentCategory,
      query: currentQuery,
      page,
    })
  }, [fetchNews, currentCategory, currentQuery, page])

  const handlePageChange = (newPage: number) => {
    router.push(`/news?page=${newPage}${currentCategory ? `&category=${currentCategory}` : ""}${currentQuery ? `&q=${currentQuery}` : ""}`)
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-8 w-8 text-yellow-500" />
          <p className="mt-2 text-sm text-muted-foreground">Failed to load news articles</p>
          <Button onClick={() => fetchNews({ category: currentCategory, query: currentQuery, page })} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <NewsFilter
        currentCategory={currentCategory}
        currentQuery={currentQuery}
        onSearch={onSearch}
        onCategoryChange={onCategoryChange}
      />
      <Suspense fallback={
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      }>
        {data?.articles && <NewsList articles={data.articles} />}
      </Suspense>
      {data?.pagination && (
        <NewsPagination
          currentPage={page}
          totalPages={data.pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}
