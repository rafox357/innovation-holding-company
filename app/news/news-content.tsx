<<<<<<< HEAD
import { Suspense } from "react"
import { NewsFilter } from "@/components/news/news-filter"
import { NewsList } from "@/components/news/news-list"
import { getNews } from "@/lib/api/news"

export default async function NewsContent() {
  const news = await getNews()
=======
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
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702

  return (
    <div>
      <div className="mb-8">
<<<<<<< HEAD
        <NewsFilter />
      </div>
      <Suspense fallback={<NewsList.Skeleton />}>
        <NewsList initialNews={news} />
=======
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
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702
      </Suspense>
    </div>
  )
}
