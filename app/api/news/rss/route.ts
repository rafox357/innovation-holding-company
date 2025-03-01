import { Feed } from 'feed'
import { getNews } from '@/lib/news-api'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Get the latest news articles
    const { articles } = await getNews({
      page: 1,
      pageSize: 20, // Get latest 20 articles for RSS
    })

    // Create feed
    const feed = new Feed({
      title: "Innovative Holding Company News",
      description: "Latest news and updates from Innovative Holding Company",
      id: "https://innovative-holding.com/",
      link: "https://innovative-holding.com/news",
      language: "en",
      favicon: "https://innovative-holding.com/favicon.ico",
      copyright: `All rights reserved ${new Date().getFullYear()}, Innovative Holding Company`,
      updated: articles[0]?.date ? new Date(articles[0].date) : new Date(),
      generator: "Innovative Holding Company RSS Feed",
      feedLinks: {
        rss2: "https://innovative-holding.com/api/news/rss",
      },
    })

    // Add items to feed
    articles.forEach((article) => {
      feed.addItem({
        title: article.title,
        id: article.url,
        link: article.url,
        description: article.description,
        content: article.content,
        author: [
          {
            name: article.author,
          },
        ],
        date: new Date(article.date),
        image: article.image ? {
          url: article.image,
          type: 'image/jpeg',
        } : undefined,
      })
    })

    // Generate RSS feed
    const rss = feed.rss2()

    // Return feed with proper content type
    return new NextResponse(rss, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new NextResponse('Error generating RSS feed', { status: 500 })
  }
}
