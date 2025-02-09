import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { DollarSign, TrendingUp, PieChart, Activity, ArrowUpRight } from "lucide-react"

const revenueData = [
  { name: "Jan", value: 840000 },
  { name: "Feb", value: 920000 },
  { name: "Mar", value: 1100000 },
  { name: "Apr", value: 1250000 },
  { name: "May", value: 1380000 },
  { name: "Jun", value: 1450000 },
]

const profitData = [
  { name: "Jan", value: 320000 },
  { name: "Feb", value: 380000 },
  { name: "Mar", value: 420000 },
  { name: "Apr", value: 490000 },
  { name: "May", value: 540000 },
  { name: "Jun", value: 580000 },
]

export default function FinancialDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Financial", href: "/dashboard/financial" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Financial Overview</h1>
        <p className="text-muted-foreground">
          Comprehensive financial metrics and performance indicators
        </p>
      </div>

      <div className="space-y-8">
        {/* Key Financial Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.45M</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+12.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$580K</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+7.4% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
              <PieChart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">40%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+2.1% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+1.2% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart data={revenueData} type="line" />
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Profit Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart data={profitData} type="bar" />
            </CardContent>
          </Card>
        </div>

        {/* Financial Details */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Product Sales", value: "45%", growth: "+8.2%" },
                  { name: "Services", value: "30%", growth: "+12.1%" },
                  { name: "Licensing", value: "15%", growth: "+5.4%" },
                  { name: "Other", value: "10%", growth: "+3.2%" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                    <div className="text-green-500 text-sm">{item.growth}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle>Key Ratios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Operating Margin", value: "35%", target: "40%" },
                  { name: "ROE", value: "22%", target: "25%" },
                  { name: "Current Ratio", value: "2.5", target: "2.0" },
                  { name: "Debt to Equity", value: "0.4", target: "0.5" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Target: {item.target}</p>
                    </div>
                    <div className="text-xl font-bold">{item.value}</div>
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
