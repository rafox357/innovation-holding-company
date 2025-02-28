import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const newsItems = [
  {
    title: "Anexo Launches New AI-Powered Course Recommendation System",
    date: "2025-01-10",
    category: "Product Update",
    subsidiary: "Anexo"
  },
  {
    title: "Fundex Achieves Record-Breaking Quarter in Client Acquisitions",
    date: "2025-01-08",
    category: "Business Growth",
    subsidiary: "Fundex"
  },
  {
    title: "Elementalis Partners with Leading Cloud Provider to Enhance Services",
    date: "2025-01-05",
    category: "Partnership",
    subsidiary: "Elementalis"
  },
  {
    title: "Estore District Expands to International Markets",
    date: "2025-01-03",
    category: "Expansion",
    subsidiary: "Estore District"
  },
  {
    title: "Hubverse Announces Sustainability Initiative Across All Subsidiaries",
    date: "2025-01-01",
    category: "Corporate News",
    subsidiary: "Hubverse"
  }
]

export function NewsUpdates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent News and Updates</CardTitle>
        <CardDescription>Stay informed about the latest developments across Hubverse</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                <span>•</span>
                <Badge variant="secondary">{item.category}</Badge>
                <span>•</span>
                <span>{item.subsidiary}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

