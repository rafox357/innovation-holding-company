'use client';

import { useState } from 'react';
import { getNews } from '@/lib/news-api';
import { useQuery } from '@tanstack/react-query';

export const useNews = (initialParams = {}) => {
  const [params, setParams] = useState({
    category: '',
    query: '',
    page: 1,
    pageSize: 10,
    ...initialParams,
  });

  const { data, isLoading, error } = useQuery({
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

  return {
    news: data?.articles || [],
    pagination: data?.pagination,
    isLoading,
    error,
    setCategory,
    setSearch,
    setPage,
    params,
  };
};
