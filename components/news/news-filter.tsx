"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NEWS_CATEGORIES } from "@/lib/news-api"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

interface NewsFilterProps {
  // onSearch: (query: string) => void
  // onCategoryChange: (category: string) => void
}

export function NewsFilter(/*{ onSearch, onCategoryChange }: NewsFilterProps*/ ) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchQuery) params.set("query", searchQuery)
    else params.delete("query")
    params.set("page", "1")
    router.push(`/news?${params.toString()}`)
  }

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category !== "all") params.set("category", category)
    else params.delete("category")
    params.set("page", "1")
    router.push(`/news?${params.toString()}`)
  }

  return (
    <div className="space-y-4 mb-8">
      <form onSubmit={handleSearch} className="flex gap-4">
        <Input
          type="search"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <Button type="submit">Search</Button>
      </form>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant={searchParams.get("category") === "all" ? "default" : "outline"}
          onClick={() => handleCategoryChange("all")}
        >
          All News
        </Button>
        {Object.entries(NEWS_CATEGORIES).map(([key, label]) => (
          <Button
            key={key}
            variant={searchParams.get("category") === key ? "default" : "outline"}
            onClick={() => handleCategoryChange(key)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}
