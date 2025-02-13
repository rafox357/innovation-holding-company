import { cache } from 'react'
import { prisma } from '@/lib/prisma'

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

// Real data fetching using Prisma
export const fetchGrants = cache(async (): Promise<Grant[]> => {
  try {
    const grants = await prisma.grant.findMany({
      include: {
        funder: true,
      },
    })
    return grants
  } catch (error) {
    console.error('Error fetching grants:', error)
    return []
  }
})

export const fetchGrantById = cache(async (id: string): Promise<Grant | null> => {
  try {
    const grant = await prisma.grant.findUnique({
      where: { id },
      include: {
        funder: true,
      },
    })
    return grant || null
  } catch (error) {
    console.error('Error fetching grant by id:', error)
    return null
  }
})

export const fetchProjects = cache(async (): Promise<Project[]> => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        team: true,
      },
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
})

export const fetchPublications = cache(async (): Promise<Publication[]> => {
  try {
    const publications = await prisma.publication.findMany({
      include: {
        authors: true,
      },
    })
    return publications
  } catch (error) {
    console.error('Error fetching publications:', error)
    return []
  }
})
