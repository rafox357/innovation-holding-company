import { useEffect, useState } from 'react';
import { getNews } from '@/lib/api/news';
import { Article } from '@/types/news';

interface UseNewsReturn {
  news: Article[];
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  } | undefined;
  isLoading: boolean;
  error: string | null;
  fetchNews: () => Promise<void>;
}

export function useNews(): UseNewsReturn {
  const [news, setNews] = useState<Article[]>([]);
  const [pagination, setPagination] = useState<{ total: number; totalPages: number; currentPage: number; limit: number } | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const newsResponse = await getNews();
      setNews(newsResponse.articles);
      setPagination(newsResponse.pagination);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { news, pagination, isLoading, error, fetchNews };
}
