import prisma from '@/lib/prisma';

export async function getNews() {
  try {
    const news = await prisma.newsItem.findMany({
      orderBy: {
        publishedAt: 'desc',
      },
    });
    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}
