import axios from 'axios';

export const NEWS_CATEGORIES = {
  technology: 'Technology',
  business: 'Business',
  startups: 'Startups',
  innovation: 'Innovation',
  ai: 'Artificial Intelligence',
} as const;

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
  },
});

export interface NewsApiArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
}

export const getNews = async ({
  category = '',
  query = '',
  page = 1,
  pageSize = 10,
}) => {
  try {
    const params: Record<string, string | number> = {
      page,
      pageSize,
      language: 'en',
    };

    // Base query for tech and business news
    let baseQuery = '(technology OR business OR startup OR innovation OR "artificial intelligence")';
    
    // If a specific category is selected, add it to the query
    if (category && category !== 'all') {
      switch(category) {
        case 'technology':
          params.q = `${baseQuery} AND (technology OR tech OR software)`;
          break;
        case 'business':
          params.q = `${baseQuery} AND (business OR enterprise OR company)`;
          break;
        case 'startups':
          params.q = `${baseQuery} AND (startup OR "start-up" OR entrepreneur)`;
          break;
        case 'innovation':
          params.q = `${baseQuery} AND (innovation OR innovative OR breakthrough)`;
          break;
        case 'ai':
          params.q = `${baseQuery} AND ("artificial intelligence" OR AI OR "machine learning")`;
          break;
        default:
          params.q = baseQuery;
      }
    } else {
      params.q = baseQuery;
    }

    // Add user search query if provided
    if (query) {
      params.q = `${params.q} AND ${query}`;
    }

    // Use everything endpoint for more comprehensive results
    const response = await newsApi.get<NewsApiResponse>('/everything', {
      params,
    });

    return {
      articles: response.data.articles.map(article => ({
        id: article.url, // Using URL as ID since NewsAPI doesn't provide unique IDs
        title: article.title,
        description: article.description,
        content: article.content,
        date: article.publishedAt,
        category: article.source.name,
        author: article.author || 'Unknown',
        image: article.urlToImage,
        url: article.url,
      })),
      pagination: {
        total: response.data.totalResults,
        totalPages: Math.ceil(response.data.totalResults / pageSize),
        currentPage: page,
        limit: pageSize
      }
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      articles: [],
      pagination: {
        total: 0,
        totalPages: 0,
        currentPage: page,
        limit: pageSize
      }
    };
  }
};
