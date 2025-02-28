import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "@/components/revenue-chart"
import { QuickAnalytics } from "@/components/quick-analytics"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Analytics", href: "/analytics" },
          ]}
        />

        <h1 className="text-4xl font-bold cosmic-title glow">Analytics</h1>
      </div>

      <QuickAnalytics />

      <div className="space-y-6">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Financial Performance</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <RevenueChart />
          </CardContent>
        </Card>

        <Tabs defaultValue="financial" className="space-y-4">
          <TabsList className="cosmic-card w-full justify-start gap-4 p-1">
            <TabsTrigger value="financial" className="cosmic-button">
              Financial Metrics
            </TabsTrigger>
            <TabsTrigger value="market" className="cosmic-button">
              Market Analysis
            </TabsTrigger>
            <TabsTrigger value="operations" className="cosmic-button">
              Operations
            </TabsTrigger>
            <TabsTrigger value="risk" className="cosmic-button">
              Risk & Compliance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="mt-0">
            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Key Financial Indicators</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Gross Profit Margin</span>
                      <span className="text-green-500">42.5%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Operating Profit Margin</span>
                      <span className="text-green-500">28.3%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>EBITDA Margin</span>
                      <span className="text-green-500">35.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Free Cash Flow</span>
                      <span className="text-green-500">$18.5M</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Return on Equity (ROE)</span>
                      <span className="text-green-500">22.8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="mt-0">
            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Market Position & Growth</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Market Share</span>
                      <span className="font-medium">15.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>YoY Revenue Growth</span>
                      <span className="text-green-500">+42%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Customer Acquisition Rate</span>
                      <span className="text-green-500">+28%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Market Size (TAM)</span>
                      <span className="font-medium">$12.5B</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Market Growth Rate</span>
                      <span className="text-green-500">18.5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="operations" className="mt-0">
            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Operational Excellence</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>R&D Investment (% of Revenue)</span>
                      <span className="font-medium">12.5%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Patent Portfolio</span>
                      <span className="font-medium">85 Active Patents</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Time to Market</span>
                      <span className="text-green-500">-15% YoY</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Production Efficiency</span>
                      <span className="text-green-500">92%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Quality Score</span>
                      <span className="text-green-500">4.8/5.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="mt-0">
            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Risk & Compliance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Debt-to-Equity Ratio</span>
                      <span className="font-medium">0.82</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Current Ratio</span>
                      <span className="text-green-500">2.4</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Risk-Adjusted Return</span>
                      <span className="text-green-500">1.45</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>Compliance Score</span>
                      <span className="text-green-500">98%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                      <span>ESG Rating</span>
                      <span className="text-green-500">AA</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="cosmic-title">Investment Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { name: "AI & Machine Learning", value: "$45M (32%)" },
                  { name: "Biotech Solutions", value: "$28M (20%)" },
                  { name: "Clean Energy", value: "$22M (16%)" },
                  { name: "Digital Infrastructure", value: "$18M (13%)" },
                  { name: "Smart Manufacturing", value: "$15M (11%)" },
                  { name: "Other Ventures", value: "$12M (8%)" },
                ].map((investment, index) => (
                  <li key={index} className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>{investment.name}</span>
                    <span className="font-medium">{investment.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="cosmic-title">Growth & Innovation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <p className="text-5xl font-bold gradient-text">85%</p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-sm text-muted-foreground">in Portfolio Companies</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Patents (YTD)</span>
                  <span className="text-sm text-green-500">+28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">R&D Projects</span>
                  <span className="text-sm text-green-500">42 Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Market Expansion</span>
                  <span className="text-sm text-green-500">5 New Regions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="cosmic-title">Industry Benchmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Revenue Growth</span>
                    <div className="text-right">
                      <div className="text-green-500">42%</div>
                      <div className="text-sm text-muted-foreground">vs. Industry 28%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Profit Margin</span>
                    <div className="text-right">
                      <div className="text-green-500">35%</div>
                      <div className="text-sm text-muted-foreground">vs. Industry 25%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>R&D Investment</span>
                    <div className="text-right">
                      <div className="text-green-500">12.5%</div>
                      <div className="text-sm text-muted-foreground">vs. Industry 8%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Market Share</span>
                    <div className="text-right">
                      <div className="text-green-500">15.2%</div>
                      <div className="text-sm text-muted-foreground">Rank: #2 in Sector</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="cosmic-title">Growth Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <p className="text-4xl font-bold gradient-text">58%</p>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Projected Growth</p>
                    <p className="text-sm text-muted-foreground">Next 12 Months</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Revenue Target</span>
                    <span className="text-green-500">$3.2B</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Market Expansion</span>
                    <span>+8 Regions</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>New Ventures</span>
                    <span>5 Planned</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Investment Pipeline</span>
                    <span className="text-green-500">$850M</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="cosmic-title">Historical Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>5-Year CAGR</span>
                    <span className="text-green-500">38%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Portfolio Growth</span>
                    <div className="text-right">
                      <div>2024: +42%</div>
                      <div className="text-sm text-muted-foreground">2023: +35%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Successful Exits</span>
                    <div className="text-right">
                      <div>Total: 28</div>
                      <div className="text-sm text-green-500">Last 12m: 8</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                    <span>Value Creation</span>
                    <div className="text-right">
                      <div>$4.2B</div>
                      <div className="text-sm text-muted-foreground">Since Inception</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
