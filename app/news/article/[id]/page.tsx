import { Suspense } from "react"
import { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArticleContent } from "@/components/news/article-content"
import { ErrorBoundary } from "@/components/error-boundary"
import { api } from "@/lib/api-client"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  try {
    const article = await api.news.getById(params.id)
    return {
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        publishedTime: article.date,
        authors: [article.author],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.description,
      },
    }
  } catch (error) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found",
    }
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Breadcrumb
          items={[
            { label: "News", href: "/news" },
            { label: "Article", href: "#" },
          ]}
        />
      </div>

      <ErrorBoundary>
        <Suspense fallback={<ArticleContent.Skeleton />}>
          <ArticleContent id={params.id} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
