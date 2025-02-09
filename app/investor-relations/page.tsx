import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RealtimeStockPrice } from "@/components/realtime-stock-price"
import { FinancialDashboard } from "@/components/financial-dashboard"
import { SubsidiaryRevenueChart } from "@/components/subsidiary-revenue-chart"
import { Breadcrumb } from "@/components/breadcrumb"

export default function InvestorRelationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-8 cosmic-title glow">Investor Relations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Stock Information</CardTitle>
          </CardHeader>
          <CardContent>
            <RealtimeStockPrice />
            <Button className="cosmic-button mt-4">View Detailed Stock Info</Button>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Financial Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <FinancialDashboard />
            <Button className="cosmic-button mt-4">View Financial Reports</Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="mb-8">
        <TabsList className="cosmic-card">
          <TabsTrigger value="revenue" className="cosmic-button">
            Revenue
          </TabsTrigger>
          <TabsTrigger value="profitability" className="cosmic-button">
            Profitability
          </TabsTrigger>
          <TabsTrigger value="growth" className="cosmic-button">
            Growth
          </TabsTrigger>
        </TabsList>
        <TabsContent value="revenue" className="cosmic-card p-4">
          <SubsidiaryRevenueChart />
        </TabsContent>
        <TabsContent value="profitability" className="cosmic-card p-4">
          <p>Profitability metrics coming soon...</p>
        </TabsContent>
        <TabsContent value="growth" className="cosmic-card p-4">
          <p>Growth metrics coming soon...</p>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Investor Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="#" className="cosmic-link">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  Quarterly Earnings
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  SEC Filings
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  Corporate Governance
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Q2 Earnings Call - July 15, 2025</li>
              <li>Annual Shareholder Meeting - September 1, 2025</li>
              <li>Investor Day - October 10, 2025</li>
            </ul>
            <Button className="cosmic-button mt-4">View All Events</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

