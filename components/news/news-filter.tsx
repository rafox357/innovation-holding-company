"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
      
      <Select
        onValueChange={handleCategoryChange}
        defaultValue={searchParams.get("category") || "all"}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="latest">Latest News</SelectItem>
          <SelectItem value="announcement">Announcements</SelectItem>
          <SelectItem value="insight">Industry Insights</SelectItem>
          <SelectItem value="community">Community News</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
