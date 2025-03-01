import { useEffect, useState } from 'react';
import { getNews } from '@/lib/api/news';
import { Article } from '@/types/news';

interface Pagination {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

interface UseNewsReturn {
  news: Article[];
  pagination: Pagination | undefined;
  isLoading: boolean;
  error: string | null;
  fetchNews: (params?: { category?: string; query?: string; page?: number }) => Promise<void>;
}

export function useNews(): UseNewsReturn {
  const [news, setNews] = useState<Article[]>([]);
  const [pagination, setPagination] = useState<Pagination | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async (params?: { category?: string; query?: string; page?: number }) => {
    setIsLoading(true);
    try {
      const newsResponse = await getNews(params || { page: 1, pageSize: 10 }); // Use params or default
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

  return { news, pagination, isLoading, error, fetchNews }; // Return the object directly
}