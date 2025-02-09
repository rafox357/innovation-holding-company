'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  ShoppingCart, Users, TrendingUp, Store, 
  Globe2, BarChart3, ArrowUpRight, Package,
  Star, Truck, CreditCard, ShoppingBag
} from "lucide-react"

export default function EstoreDistrictBusinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold cosmic-title glow mb-2">Estore District</h1>
            <p className="text-xl text-muted-foreground">Revolutionizing Digital Commerce</p>
          </div>
          <Badge variant="outline" className="cosmic-badge text-lg py-1.5 px-4">In Development</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card className="cosmic-card bg-gradient-to-br from-background to-secondary/10">
            <CardHeader>
              <CardTitle>Platform Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Leading the e-commerce revolution with AI-powered analytics, seamless marketplace integration, and automated solutions. Our platform empowers merchants to scale their businesses globally with cutting-edge tools and insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI Analytics</Badge>
                <Badge variant="secondary">Multi-Channel</Badge>
                <Badge variant="secondary">Smart Automation</Badge>
                <Badge variant="secondary">Global Commerce</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card bg-gradient-to-br from-background to-primary/10">
            <CardHeader>
              <CardTitle>Market Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Platform Adoption</span>
                  <span className="text-xl font-bold">45 Countries</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Share</span>
                  <span className="text-xl font-bold">15% Growth</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Customer Satisfaction</span>
                  <span className="text-xl font-bold">4.8/5.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              Monthly Orders
            </CardTitle>
            <CardDescription>Platform-wide transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">125K</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>+32% MoM</span>
                </div>
              </div>
              <Progress value={82} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Consistent growth in order volume
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="h-5 w-5 text-primary" />
              Active Merchants
            </CardTitle>
            <CardDescription>Global seller network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">2,500</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>45 Countries</span>
                </div>
              </div>
              <Progress value={75} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Diverse international merchant base
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              GMV Growth
            </CardTitle>
            <CardDescription>Gross Merchandise Value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">185%</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>YoY</span>
                </div>
              </div>
              <Progress value={95} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Exceptional platform growth rate
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cosmic-card bg-gradient-to-br from-background to-blue-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Products Listed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">1.2M+</div>
            <p className="text-sm text-muted-foreground">Active product listings</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-green-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Review Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">4.85</div>
            <p className="text-sm text-muted-foreground">Average product rating</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-purple-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Delivery Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">1.8 Days</div>
            <p className="text-sm text-muted-foreground">Average delivery time</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-orange-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Payment Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">99.9%</div>
            <p className="text-sm text-muted-foreground">Transaction success rate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
