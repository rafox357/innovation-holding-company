import { getNews } from '@/lib/news-api'

export async function generateNewsSitemap() {
  try {
    // Get all news articles for sitemap
    const { articles } = await getNews({
      page: 1,
      pageSize: 100, // Get latest 100 articles for sitemap
    })

    // Generate sitemap entries
    const newsUrls = articles.map((article) => ({
      url: `https://innovative-holding.com/news/article/${article.id}`,
      lastModified: new Date(article.date),
      changeFrequency: 'daily',
      priority: 0.7,
    }))

    // Add main news pages
    const staticUrls = [
      {
        url: 'https://innovative-holding.com/news',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: 'https://innovative-holding.com/news/rss',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
    ]

    return [...staticUrls, ...newsUrls]
  } catch (error) {
    console.error('Error generating news sitemap:', error)
    return []
  }
}
