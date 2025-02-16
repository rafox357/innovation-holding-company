import prisma from '@/lib/prisma';

export async function getNews(params) {
  const { page, pageSize } = params;
  const skip = (page - 1) * pageSize;

  try {
    const [news, total] = await Promise.all([
      prisma.newsItem.findMany({
        orderBy: { publishedAt: 'desc' },
        skip,
        take: pageSize,
      }),
      prisma.newsItem.count(),
    ]);

    return {
      articles: news,
      pagination: {
        total,
        totalPages: Math.ceil(total / pageSize),
        currentPage: page,
        limit: pageSize,
      },
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return { articles: [], pagination: { total: 0, totalPages: 0, currentPage: 1, limit: pageSize } };
  }
}
