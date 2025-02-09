import { Article } from "@/types/news"
import { useCallback, useState } from "react"

interface NewsResponse {
  articles: Article[]
  pagination: {
    total: number
    totalPages: number
    currentPage: number
    limit: number
  }
}

export function useNews() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<NewsResponse | null>(null)

  const fetchNews = useCallback(async ({
    category,
    query,
    page = 1,
    limit = 9
  }: {
    category?: string
    query?: string
    page?: number
    limit?: number
  }) => {
    setIsLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams()
      if (category && category !== "all") params.set("category", category)
      if (query) params.set("query", query)
      params.set("page", page.toString())
      params.set("limit", limit.toString())

      const response = await fetch(`/api/news?${params.toString()}`)
      if (!response.ok) throw new Error("Failed to fetch news")
      
      const data = await response.json()
      setData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    news: data?.articles || [],
    pagination: data?.pagination,
    isLoading,
    error,
    fetchNews
  }
}
