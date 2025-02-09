export interface Project {
  id: number
  name: string
  description: string
  status: "Planning" | "In Development" | "Testing" | "Launch"
  progress: number
  category: string
  team: string[]
  priority: "Low" | "Medium" | "High"
  stage?: string
  timeline?: string
  budget?: number
  details?: string
  impact?: string
  risks?: {
    category: string
    description: string
    mitigation: string
  }[]
}

export interface ProjectSection {
  title: string
  description: string
  projects: Project[]
}

