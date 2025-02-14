import { Suspense, useState } from "react"
import { NewsFilter } from "@/components/news/news-filter"
import { NewsList } from "@/components/news/news-list"
import { getNews } from "../../lib/api/news"

export default async function NewsContent() {
  const newsResponse = await getNews()
  const news = newsResponse.articles // Assuming articles is the array of news articles

  // Define state variables
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('')

  // Create handlers
  const onSearch = (query: string) => {
    setSearchQuery(query)
  }

  const onCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }

  return (
    <div>
      <div className="mb-8">
        <NewsFilter 
          searchQuery={searchQuery}
          category={category}
          onSearch={onSearch}
          onCategoryChange={onCategoryChange}
        />
      </div>
      <Suspense fallback={<NewsList.Skeleton />}> 
        <NewsList 
          news={news}
          pagination={{
            total: newsResponse.pagination.total,
            totalPages: newsResponse.pagination.totalPages,
            currentPage: newsResponse.pagination.currentPage,
            limit: newsResponse.pagination.limit,
          }}
          onPageChange={(page) => console.log('Page changed to:', page)}
        />
      </Suspense>
    </div>
  )
}
