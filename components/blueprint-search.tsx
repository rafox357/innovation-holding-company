"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import Link from "next/link"

const searchIndex = [
  {
    title: "Overview",
    content: "The Blueprint Platform overview and key principles",
    url: "/blueprint-platform/overview",
  },
  {
    title: "Components",
    content:
      "Core Integration Engine, AI Decision Support System, Blockchain Ledger, IoT Integration Hub, Client Interface Portal, Innovation Incubator",
    url: "/blueprint-platform/components",
  },
  {
    title: "Interactions",
    content: "How components of The Blueprint Platform work together",
    url: "/blueprint-platform/interactions",
  },
  {
    title: "Benefits",
    content: "Operational efficiency, innovation acceleration, enhanced decision making, improved client experience",
    url: "/blueprint-platform/benefits",
  },
  {
    title: "Implementation",
    content: "Phased approach to implementing The Blueprint Platform",
    url: "/blueprint-platform/implementation",
  },
  {
    title: "Case Studies",
    content: "Real-world examples of The Blueprint Platform in action",
    url: "/blueprint-platform/case-studies",
  },
  { title: "FAQ", content: "Frequently asked questions about The Blueprint Platform", url: "/blueprint-platform/faq" },
  {
    title: "Resources",
    content: "Whitepapers, infographics, and video tutorials about The Blueprint Platform",
    url: "/blueprint-platform/resources",
  },
]

export function BlueprintSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof searchIndex>([])

  const handleSearch = () => {
    const results = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setSearchResults(results)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Search The Blueprint Platform..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button onClick={handleSearch}>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
        {searchResults.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
            <ul className="space-y-2">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <Link href={result.url} className="text-blue-500 hover:underline">
                    {result.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{result.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

