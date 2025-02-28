import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getArticlesByCategory } from "@/lib/mock-news"
import { format } from "date-fns"

export default function AnnouncementsPage() {
  const announcements = getArticlesByCategory('announcement')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Announcements</h1>
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <CardTitle>{announcement.title}</CardTitle>
              <CardDescription>{format(new Date(announcement.date), "MMMM d, yyyy")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{announcement.description}</p>
              <Button asChild>
                <Link href={`/news/article/${announcement.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
