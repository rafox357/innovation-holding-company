import axios from 'axios';
import { cache } from 'react';

interface ApiClientOptions {
  baseUrl: string;
  apiKey?: string;
  headers?: Record<string, string>;
}

class ApiClient {
  private baseUrl: string;
  private apiKey?: string;
  private defaultHeaders: Record<string, string>;

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(options.apiKey ? { 'Authorization': `Bearer ${options.apiKey}` } : {})
    };
  }

  private async fetchWithErrorHandling<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...(options.headers || {})
        }
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorBody}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;
    }
  }

  public get = cache(async <T>(endpoint: string, params?: Record<string, string>): Promise<T> => {
    const queryString = params 
      ? `?${new URLSearchParams(params).toString()}` 
      : '';
    
    return this.fetchWithErrorHandling<T>(
      `${endpoint}${queryString}`,
      { method: 'GET' }
    );
  });

  public async post<T, B>(endpoint: string, body: B): Promise<T> {
    return this.fetchWithErrorHandling<T>(
      endpoint,
      { 
        method: 'POST', 
        body: JSON.stringify(body) 
      }
    );
  }
}

import { getNews, NEWS_CATEGORIES } from './news-api'

export interface NewsArticle {
  id: string
  title: string
  description: string
  content: string
  date: string
  category: string
  author: string
  image: string
  url: string
}

export interface NewsApiResponse {
  articles: NewsArticle[]
  pagination: {
    total: number
    totalPages: number
    currentPage: number
    limit: number
  }
}

export const fetchNewsByTopics = async (
  category: keyof typeof NEWS_CATEGORIES | 'all' = 'all', 
  query: string = '', 
  page: number = 1, 
  pageSize: number = 10
): Promise<NewsApiResponse> => {
  try {
    const result = await getNews({ 
      category, 
      query, 
      page, 
      pageSize 
    })

    return result
  } catch (error) {
    console.error('Failed to fetch news:', error)
    return {
      articles: [],
      pagination: {
        total: 0,
        totalPages: 0,
        currentPage: page,
        limit: pageSize
      }
    }
  }
}

// Export NEWS_CATEGORIES for easy access in components
export { NEWS_CATEGORIES }

// Example instantiation - replace with actual API details
const newsApiClient = new ApiClient({
  baseUrl: 'https://your-news-api-endpoint.com/v1',
  apiKey: process.env.NEWS_API_KEY
});

// API endpoints
export const api = {
  // Auth
  auth: {
    signin: (data: { email: string; password: string }) =>
      axios.post('/auth/signin', data),
    signout: () => axios.post('/auth/signout'),
    verify: (token: string) => axios.post('/auth/verify', { token }),
  },

  // News
  news: {
    getAll: () => axios.get('/news'),
    getById: (id: string) => axios.get(`/news/${id}`),
    create: (data: any) => axios.post('/news', data),
    update: (id: string, data: any) => axios.put(`/news/${id}`, data),
    delete: (id: string) => axios.delete(`/news/${id}`),
  },

  // Subsidiaries
  subsidiaries: {
    getAll: () => axios.get('/subsidiaries'),
    getById: (id: string) => axios.get(`/subsidiaries/${id}`),
    getMetrics: (id: string) => axios.get(`/subsidiaries/${id}/metrics`),
    getPerformance: (id: string) => axios.get(`/subsidiaries/${id}/performance`),
  },

  // Dashboard
  dashboard: {
    getOverview: () => axios.get('/dashboard/overview'),
    getFinancial: () => axios.get('/dashboard/financial'),
    getMarket: () => axios.get('/dashboard/market'),
    getProjects: () => axios.get('/dashboard/projects'),
  },

  // Projects
  projects: {
    getAll: () => axios.get('/projects'),
    getById: (id: string) => axios.get(`/projects/${id}`),
    create: (data: any) => axios.post('/projects', data),
    update: (id: string, data: any) => axios.put(`/projects/${id}`, data),
    delete: (id: string) => axios.delete(`/projects/${id}`),
  },

  // Investor Relations
  investor: {
    getReports: () => axios.get('/investor/reports'),
    getMetrics: () => axios.get('/investor/metrics'),
    getDocuments: () => axios.get('/investor/documents'),
  },
};

export type Api = typeof api;
export default api;
