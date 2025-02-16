'use client';

import { useState } from 'react';
import { getNews } from '@/lib/news-api';
import { useQuery } from '@tanstack/react-query';

export interface UseNewsReturn {
  data: {
    articles: any[];
    pagination: {
      total: number;
      totalPages: number;
      currentPage: number;
      limit: number;
    };
  };
  isLoading: boolean;
  error: any;
  setCategory: (category: string) => void;
  setSearch: (query: string) => void;
  setPage: (page: number) => void;
}

export const useNews = (initialParams = {}): UseNewsReturn => {
  const [params, setParams] = useState({
    category: '',
    query: '',
    page: 1,
    pageSize: 10,
    ...initialParams,
  });

  const { data = { articles: [], pagination: { total: 0, totalPages: 0, currentPage: 1, limit: 10 } }, isLoading, error } = useQuery({
    queryKey: ['news', params],
    queryFn: () => getNews(params),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  const setCategory = (category: string) => {
    setParams(prev => ({ ...prev, category, page: 1 }));
  };

  const setSearch = (query: string) => {
    setParams(prev => ({ ...prev, query, page: 1 }));
  };

  const setPage = (page: number) => {
    setParams(prev => ({ ...prev, page }));
  };

  return { data, isLoading, error, setCategory, setSearch, setPage };
}
