export interface Article {
  id: number | string
  title: string
  description: string
  content: string
  date: string
  category: string
  author: string | {
    name: string
    role: string
  }
  image: string
}

export interface ArticlePreview {
  id: number
  title: string
  description: string
  date: string
}
