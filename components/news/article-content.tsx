"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShareButtons } from "@/components/news/share-buttons"
import { NewsletterForm } from "@/components/news/newsletter-form"
import { format } from "date-fns"
import { Clock, AlertTriangle, ChevronLeft } from "lucide-react"
import readingTime from "reading-time"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Article } from "@/types/news"

const ArticleSkeleton = () => (
  <div className="space-y-8">
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

interface ArticleContentProps {
  id: string
}

export function ArticleContent({ id }: ArticleContentProps) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/news/${id}`)
        if (!response.ok) throw new Error("Failed to fetch article")
        const data = await response.json()
        setArticle(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  if (error) {
    return (
      <Card className="bg-destructive/10 border-destructive">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Error Loading Article</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {error}
          </p>
          <div className="mt-4">
            <Button asChild variant="outline">
              <Link href="/news">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to News
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (loading || !article) {
    return <ArticleSkeleton />
  }

  const stats = readingTime(article.content)

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <header className="not-prose mb-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {stats.text}
          </div>
          <span>•</span>
          <time dateTime={article.date}>
            {format(new Date(article.date), "MMMM dd, yyyy")}
          </time>
          <span>•</span>
          <span>{article.category}</span>
        </div>
      </header>

      <div className="mb-8" dangerouslySetInnerHTML={{ __html: article.content }} />

      <footer className="not-prose border-t pt-8 mt-8">
        <div className="flex flex-col gap-8">
          <ShareButtons 
            url={`${process.env.NEXT_PUBLIC_APP_URL}/news/${article.id}`}
            title={article.title}
            description={article.description || article.title}
          />
          <NewsletterForm />
        </div>
      </footer>
    </article>
  )
}

ArticleContent.Skeleton = ArticleSkeleton
