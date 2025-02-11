import { cache } from 'react'

export interface Grant {
  id: string
  title: string
  description: string
  amount: number
  currency: string
  status: 'open' | 'closed' | 'awarded' | 'in_review'
  type: 'research' | 'innovation' | 'collaboration' | 'equipment'
  funder: {
    name: string
    description?: string
    website?: string
    logo?: string
  }
  deadline?: string
  startDate?: string
  endDate?: string
  eligibility: string[]
  tags: string[]
}

export interface Project {
  id: string
  name: string
  title: string
  description: string
  status: 'active' | 'completed' | 'on-hold'
  team: string[]
  startDate: string
  endDate?: string
  progress: number
  lead: {
    name: string
    avatar: string
    initials: string
  }
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  journal?: string
  publicationDate: string
  abstract?: string
  doi?: string
  date: string
  tags: string[]
  citations: number
  type: string
  pdfUrl?: string
}

// Simulated data fetching - replace with actual API calls
export const fetchGrants = cache(async (): Promise<Grant[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return [
    {
      id: 'grant-1',
      title: 'AI Innovation Research Grant',
      description: 'Supporting groundbreaking research in artificial intelligence and machine learning.',
      amount: 250000,
      currency: 'USD',
      status: 'open',
      type: 'research',
      funder: {
        name: 'Tech Innovations Foundation',
        website: 'https://techinnovations.org'
      },
      deadline: '2024-12-31',
      eligibility: [
        'PhD in Computer Science',
        '5+ years research experience',
        'AI publication track record'
      ],
      tags: ['AI', 'Machine Learning', 'Research']
    },
    // Add more grants...
  ]
})

export const fetchGrantById = cache(async (id: string): Promise<Grant | null> => {
  const grants = await fetchGrants()
  return grants.find(grant => grant.id === id) || null
})

export const fetchProjects = cache(async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return [
    {
      id: 'proj-1',
      name: 'Advanced Machine Learning Framework',
      title: 'Advanced Machine Learning Framework',
      description: 'Developing a next-generation ML framework with enhanced interpretability',
      status: 'active',
      team: ['Dr. Emily Chen', 'Alex Rodriguez', 'Sarah Kim'],
      startDate: '2024-01-15',
      progress: 50,
      lead: {
        name: 'Dr. Emily Chen',
        avatar: 'https://example.com/emily-chen.jpg',
        initials: 'EC'
      }
    },
    // Add more projects...
  ]
})

export const fetchPublications = cache(async (): Promise<Publication[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return [
    {
      id: 'pub-1',
      title: 'Explainable AI: A Comprehensive Review',
      authors: ['Dr. Emily Chen', 'Dr. Michael Wong'],
      journal: 'Journal of Artificial Intelligence Research',
      publicationDate: '2024-02-01',
      date: '2024-02-01',
      doi: '10.1000/xyz123',
      abstract: 'This paper provides a comprehensive review of explainable AI techniques and their applications in various domains.',
      pdfUrl: 'https://example.com/publications/explainable-ai-review.pdf',
      tags: ['AI', 'Machine Learning', 'Explainable AI'],
      citations: 42,
      type: 'paper'
    },
    {
      id: 'pub-2',
      title: 'Quantum Computing: Current State and Future Prospects',
      authors: ['Dr. Sarah Kim', 'Dr. David Lee'],
      journal: 'Nature Physics',
      publicationDate: '2024-01-15',
      date: '2024-01-15',
      doi: '10.1000/qc456',
      abstract: 'An in-depth analysis of quantum computing technologies, challenges, and potential breakthroughs.',
      pdfUrl: 'https://example.com/publications/quantum-computing-prospects.pdf',
      tags: ['Quantum Computing', 'Physics', 'Technology'],
      citations: 28,
      type: 'article'
    }
    // Add more publications...
  ]
})
