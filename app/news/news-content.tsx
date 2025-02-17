import { Suspense, useState } from "react"
import { NewsFilter } from "@/components/news/news-filter"
import { NewsList } from "@/components/news/news-list"
import { useNews } from '@/hooks/use-news';

export default function NewsContent() {
  const { data, isLoading, error } = useNews();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          news={data.articles}
          pagination={{
            total: data.pagination.total,
            totalPages: data.pagination.totalPages,
            currentPage: data.pagination.currentPage,
            limit: data.pagination.limit,
          }}
          onPageChange={(page) => console.log('Page changed to:', page)}
        />
      </Suspense>
    </div>
  )
}
