import { NextResponse } from "next/server"
import { mockArticles } from "@/lib/mock-news"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const article = mockArticles.find((a) => a.id === params.id)

  if (!article) {
    return new NextResponse("Article not found", { status: 404 })
  }

  return NextResponse.json(article)
}
