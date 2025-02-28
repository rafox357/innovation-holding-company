import { Suspense } from "react"
import { NewsFilter } from "@/components/news/news-filter"
import { NewsList } from "@/components/news/news-list"
import { getNews } from "@/lib/api/news"

export default async function NewsContent() {
  const news = await getNews()

  return (
    <div>
      <div className="mb-8">
        <NewsFilter />
      </div>
      <Suspense fallback={<NewsList.Skeleton />}>
        <NewsList initialNews={news} />
      </Suspense>
    </div>
  )
}
