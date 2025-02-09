"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="cosmic-input mr-2"
      />
      <Button type="submit" size="icon" className="cosmic-button">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}

