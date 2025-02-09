import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = '/auth/signin';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const api = {
  // Auth
  auth: {
    signin: (data: { email: string; password: string }) =>
      apiClient.post('/auth/signin', data),
    signout: () => apiClient.post('/auth/signout'),
    verify: (token: string) => apiClient.post('/auth/verify', { token }),
  },

  // News
  news: {
    getAll: () => apiClient.get('/news'),
    getById: (id: string) => apiClient.get(`/news/${id}`),
    create: (data: any) => apiClient.post('/news', data),
    update: (id: string, data: any) => apiClient.put(`/news/${id}`, data),
    delete: (id: string) => apiClient.delete(`/news/${id}`),
  },

  // Subsidiaries
  subsidiaries: {
    getAll: () => apiClient.get('/subsidiaries'),
    getById: (id: string) => apiClient.get(`/subsidiaries/${id}`),
    getMetrics: (id: string) => apiClient.get(`/subsidiaries/${id}/metrics`),
    getPerformance: (id: string) => apiClient.get(`/subsidiaries/${id}/performance`),
  },

  // Dashboard
  dashboard: {
    getOverview: () => apiClient.get('/dashboard/overview'),
    getFinancial: () => apiClient.get('/dashboard/financial'),
    getMarket: () => apiClient.get('/dashboard/market'),
    getProjects: () => apiClient.get('/dashboard/projects'),
  },

  // Projects
  projects: {
    getAll: () => apiClient.get('/projects'),
    getById: (id: string) => apiClient.get(`/projects/${id}`),
    create: (data: any) => apiClient.post('/projects', data),
    update: (id: string, data: any) => apiClient.put(`/projects/${id}`, data),
    delete: (id: string) => apiClient.delete(`/projects/${id}`),
  },

  // Investor Relations
  investor: {
    getReports: () => apiClient.get('/investor/reports'),
    getMetrics: () => apiClient.get('/investor/metrics'),
    getDocuments: () => apiClient.get('/investor/documents'),
  },
};

export type Api = typeof api;
export default api;
