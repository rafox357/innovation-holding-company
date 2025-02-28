import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const subsidiaries = [
  { name: "Anexo", revenue: 5200000, target: 6000000, growth: 15 },
  { name: "Fundex", revenue: 3800000, target: 4500000, growth: 22 },
  { name: "Elementalis", revenue: 7100000, target: 8000000, growth: 18 },
  { name: "Estore District", revenue: 1200000, target: 2000000, growth: 40 },
]

export function SubsidiaryKPIs({ detailed = false }) {
  return (
    <div className="space-y-4">
      {subsidiaries.map((subsidiary) => (
        <Card key={subsidiary.name} className="cosmic-card overflow-hidden">
          <CardHeader className="bg-primary/10">
            <CardTitle className="cosmic-title text-lg">{subsidiary.name}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Revenue</span>
                <span className="font-medium">${(subsidiary.revenue / 1000000).toFixed(2)}M</span>
              </div>
              <Progress value={(subsidiary.revenue / subsidiary.target) * 100} className="h-2 bg-secondary/20" />
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Target: ${(subsidiary.target / 1000000).toFixed(2)}M</span>
                <span className="text-primary font-medium">
                  {((subsidiary.revenue / subsidiary.target) * 100).toFixed(0)}%
                </span>
              </div>
            </div>
            {detailed && (
              <div className="mt-4 pt-4 border-t border-primary/20">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Growth</span>
                  <span className="text-sm font-medium text-secondary">+{subsidiary.growth}%</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

