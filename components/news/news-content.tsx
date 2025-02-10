"use client"
import { useEffect, useState } from "react"
import { useNews } from "@/hooks/use-news"
import { NewsFilter } from "./news-filter"
import { NewsList } from "./news-list"
import { LoadingState } from "@/components/loading-state"

export function NewsContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")
  
  const {
    news,
    pagination,
    isLoading,
    error,
    setCategory: updateCategory,
    setSearch,
    setPage,
  } = useNews({
    category,
    query: searchQuery,
  })

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSearch(query)
  }

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
    updateCategory(newCategory)
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-destructive">Error loading news: {error.toString()}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <NewsFilter
        searchQuery={searchQuery}
        category={category}
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />
      
      {isLoading ? (
        <LoadingState text="Loading news..." />
      ) : (
        <NewsList
          news={news}
          pagination={pagination}
          onPageChange={setPage}
        />
      )}
    </div>
  )
}
