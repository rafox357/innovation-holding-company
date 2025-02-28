import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activities = [
  { id: 1, type: "Project", action: "Updated", item: "AI Integration", time: "2 hours ago" },
  { id: 2, type: "Finance", action: "Approved", item: "Q3 Budget", time: "5 hours ago" },
  { id: 3, type: "HR", action: "Onboarded", item: "New Team Member", time: "1 day ago" },
  { id: 4, type: "Sales", action: "Closed", item: "Major Deal", time: "2 days ago" },
]

export function RecentActivities() {
  return (
    <Card className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  {activity.action} {activity.item}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary">
                {activity.type}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

