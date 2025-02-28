export interface NavigationItem {
  title: string
  href: string
  description?: string
  items?: NavigationItem[]
  disabled?: boolean
}

export interface NavigationSection {
  title: string
  href?: string
  items: NavigationItem[]
}

export interface NavigationConfig {
  mainNav: NavigationItem[]
}

// News Types
export interface NewsCategory {
  id: string
  name: string
  description: string
}

export interface NewsArticle {
  id: string
  title: string
  description: string
  content: string
  category: string
  author: string
  date: string
  image?: string
  slug: string
}

// Business Types
export interface Subsidiary {
  id: string
  name: string
  description: string
  industry: string
  founded: string
  location: string
  employees: number
  revenue?: string
  website: string
  logo: string
}

export interface BusinessMetric {
  id: string
  name: string
  value: number
  change: number
  trend: 'up' | 'down' | 'neutral'
  period: string
}

// Innovation Types
export interface Project {
  id: string
  name: string
  description: string
  status: 'planning' | 'active' | 'completed' | 'on-hold'
  progress: number
  startDate: string
  endDate?: string
  team: string[]
  tags: string[]
}

export interface ResearchInitiative {
  id: string
  title: string
  description: string
  field: string
  status: string
  lead: string
  team: string[]
  publications: string[]
}

// Observatory Types
export interface ProjectMetrics {
  id: string
  projectId: string
  metrics: {
    completion: number
    budget: {
      allocated: number
      spent: number
    }
    tasks: {
      total: number
      completed: number
    }
    risks: {
      high: number
      medium: number
      low: number
    }
  }
}
