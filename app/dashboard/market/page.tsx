import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { Globe, TrendingUp, Users, Target, ArrowUpRight } from "lucide-react"

const marketShareData = [
  { name: "Jan", value: 28 },
  { name: "Feb", value: 32 },
  { name: "Mar", value: 36 },
  { name: "Apr", value: 42 },
  { name: "May", value: 45 },
  { name: "Jun", value: 48 },
]

const growthData = [
  { name: "Q1", value: 15 },
  { name: "Q2", value: 22 },
  { name: "Q3", value: 28 },
  { name: "Q4", value: 35 },
]

export default function MarketDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Market", href: "/dashboard/market" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Market Analysis</h1>
        <p className="text-muted-foreground">
          Market trends, competition analysis, and growth opportunities
        </p>
      </div>

      <div className="space-y-8">
        {/* Market Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Share</CardTitle>
              <Globe className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+6.7% from last quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+7.2% from last quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Base</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15.2K</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+1.2K new customers</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Reach</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+3 new markets</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Market Share Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart 
                data={marketShareData} 
                type="line" 
                title="Market Share Trend"
              />
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Quarterly Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart 
                data={growthData} 
                type="bar" 
                title="Quarterly Growth"
              />
            </CardContent>
          </Card>
        </div>

        {/* Market Details */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Market Segments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Enterprise", share: "45%", growth: "+8.2%" },
                  { name: "Mid-Market", share: "30%", growth: "+12.1%" },
                  { name: "Small Business", share: "15%", growth: "+5.4%" },
                  { name: "Consumer", share: "10%", growth: "+3.2%" },
                ].map((segment) => (
                  <div key={segment.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{segment.name}</p>
                      <p className="text-sm text-muted-foreground">Market Share: {segment.share}</p>
                    </div>
                    <div className="text-green-500 text-sm">{segment.growth}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Competitive Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Market Position", status: "Leader", trend: "Stable" },
                  { name: "Product Innovation", status: "High", trend: "Improving" },
                  { name: "Customer Satisfaction", status: "92%", trend: "Increasing" },
                  { name: "Brand Recognition", status: "Strong", trend: "Growing" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Status: {item.status}</p>
                    </div>
                    <div className="text-primary text-sm">{item.trend}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
