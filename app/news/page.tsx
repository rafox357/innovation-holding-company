"use client"

import { Suspense } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useNews, UseNewsReturn } from "@/hooks/use-news";
import { NewsFilter } from "@/components/news/news-filter";
import { NewsPagination } from "@/components/news/news-pagination";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { format } from "date-fns";
import { Clock, AlertTriangle } from "lucide-react";
import readingTime from "reading-time";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "@/components/error-boundary";

interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
}

// Loading components
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

const NewsSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { news, pagination, isLoading, error, fetchNews } = useNews() as UseNewsReturn;

  const currentCategory = searchParams.get("category") || "all";
  const currentQuery = searchParams.get("query") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    fetchNews({
      category: currentCategory === "all" ? undefined : currentCategory,
      query: currentQuery,
      page: currentPage,
    });
  }, [currentCategory, currentQuery, currentPage]);

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) params.set("query", query);
    else params.delete("query");
    params.set("page", "1");
    router.push(`/news?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category !== "all") params.set("category", category);
    else params.delete("category");
    params.set("page", "1");
    router.push(`/news?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/news?${params.toString()}`);
  };

  if (error) {
    return (
      <Card className="bg-destructive/10 border-destructive">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Error Loading News</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {error.message || "An error occurred while loading the news. Please try again later."}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => fetchNews({
              category: currentCategory === "all" ? undefined : currentCategory,
              query: currentQuery,
              page: currentPage,
            })}
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        {Array(6).fill(0).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!news?.length) {
    return (
      <Card>
        <CardHeader>
          <h2>No news articles found.</h2>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {news.map((article: Article) => (
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
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {readingTime(article.content).text}
                </div>
                <span>{article.author}</span>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}

      {pagination && (
        <NewsPagination
          currentPage={currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

const NewsContent = () => {
  return (
    <div className="space-y-8">
      <NewsFilter
        searchQuery={useSearchParams().get("query") || ""}
        category={useSearchParams().get("category") || "all"}
        onSearch={(query: string) => {
          const params = new URLSearchParams(useSearchParams().toString());
          if (query) params.set("query", query);
          else params.delete("query");
          params.set("page", "1");
          useRouter().push(`/news?${params.toString()}`);
        }}
        onCategoryChange={(category: string) => {
          const params = new URLSearchParams(useSearchParams().toString());
          if (category !== "all") params.set("category", category);
          else params.delete("category");
          params.set("page", "1");
          useRouter().push(`/news?${params.toString()}`);
        }}
      />
      <ErrorBoundary>
        <Suspense 
          fallback={
            <div className="space-y-6">
              {Array(6).fill(0).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <NewsSection />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default function NewsPage() {
  return (
    <ErrorBoundary>
      <NewsContent />
    </ErrorBoundary>
  );
}