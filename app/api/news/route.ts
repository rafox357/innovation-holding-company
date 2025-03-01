import { NextResponse } from "next/server"
import { mockArticles } from "@/lib/mock-news"
import { Article } from "@/types/news"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const query = searchParams.get("query")?.toLowerCase()
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "9")

  let articles = [...mockArticles]

  // Apply category filter
  if (category) {
    articles = articles.filter((article) => article.category === category)
  }

  // Apply search filter
  if (query) {
    articles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
    )
  }

  // Calculate pagination
  const total = articles.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedArticles = articles.slice(start, end)

  return NextResponse.json({
    articles: paginatedArticles,
    pagination: {
      total,
      totalPages,
      currentPage: page,
      limit,
    },
  })
}
