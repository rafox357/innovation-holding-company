"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export interface Article {
  id: string
  title: string
  description: string
  content: string
  author: string | { name: string; role: string }
  date: string
  image: string
  category: string
}

interface ArticleContentProps {
  article: Article
  relatedArticles: Article[]
}

export function ArticleContent({ article, relatedArticles }: ArticleContentProps) {
  return (
    <div className="container mx-auto p-6">
      <Link href="/news" className="inline-flex items-center mb-6 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to News
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge>{article.category}</Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="mr-1 h-4 w-4" />
                  {article.date}
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">{article.title}</CardTitle>
              <CardDescription className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {typeof article.author === 'string' ? article.author : article.author.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[300px] mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="prose max-w-none">
                {article.content}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Articles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/news/article/${related.id}`}>
                  <Card className="hover:bg-muted/50">
                    <CardHeader>
                      <div className="relative w-full h-[120px] mb-2">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <CardTitle className="text-lg">{related.title}</CardTitle>
                      <CardDescription className="flex items-center justify-between">
                        <span>{related.date}</span>
                        <Badge>{related.category}</Badge>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
