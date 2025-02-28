"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NEWS_CATEGORIES } from "@/lib/news-api"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Search, X, Rss, Link2 } from "lucide-react"

interface NewsFilterProps {
  searchQuery: string
  category: string
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
}

export function NewsFilter({ searchQuery, category, onSearch, onCategoryChange }: NewsFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQueryState, setSearchQueryState] = useState(searchParams.get("query") || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchQueryState) params.set("query", searchQueryState)
    else params.delete("query")
    params.set("page", "1")
    router.push(`/news?${params.toString()}`)
    onSearch(searchQueryState)
  }

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category !== "all") params.set("category", category)
    else params.delete("category")
    params.set("page", "1")
    router.push(`/news?${params.toString()}`)
    onCategoryChange(category)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <form onSubmit={handleSearch} className="flex-1 flex gap-4">
          <div className="relative flex-1 max-w-lg">
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQueryState}
              onChange={(e) => setSearchQueryState(e.target.value)}
              className="pr-10"
            />
            <div className="absolute right-3 top-2.5 text-muted-foreground">
              {searchQueryState ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQueryState("")
                    onSearch("")
                    const params = new URLSearchParams(searchParams.toString())
                    params.delete("query")
                    router.push(`/news?${params.toString()}`)
                  }}
                  className="hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              ) : (
                <Search className="h-5 w-5" />
              )}
            </div>
          </div>
          <Button type="submit">Search</Button>
        </form>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              <Rss className="h-4 w-4" />
              <span className="sr-only">RSS Feed</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="/news/feed" target="_blank" rel="noopener noreferrer">
              <Link2 className="h-4 w-4" />
              <span className="sr-only">News Feed</span>
            </a>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={category === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange("all")}
        >
          All
        </Button>
        {NEWS_CATEGORIES.map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
    </div>
  )
}
