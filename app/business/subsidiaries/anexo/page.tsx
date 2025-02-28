'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Building, Users, TrendingUp, Landmark, 
  BarChart3, ArrowUpRight, DollarSign,
  Briefcase, Award, Globe2, LineChart, Scale
} from "lucide-react"

export default function AnexoBusinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold cosmic-title glow mb-2">Anexo</h1>
            <p className="text-xl text-muted-foreground">Strategic Investment Management</p>
          </div>
          <Badge variant="outline" className="cosmic-badge text-lg py-1.5 px-4">Active</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card className="cosmic-card bg-gradient-to-br from-background to-secondary/10">
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Premier investment management firm specializing in strategic acquisitions, venture capital, and private equity. Our data-driven approach and expert team deliver exceptional returns while managing risk effectively.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Private Equity</Badge>
                <Badge variant="secondary">Venture Capital</Badge>
                <Badge variant="secondary">M&A Advisory</Badge>
                <Badge variant="secondary">Asset Management</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card bg-gradient-to-br from-background to-primary/10">
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Assets Under Management</span>
                  <span className="text-xl font-bold">$12.8B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Investment Success Rate</span>
                  <span className="text-xl font-bold">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Portfolio Companies</span>
                  <span className="text-xl font-bold">85+</span>
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
              <LineChart className="h-5 w-5 text-primary" />
              Annual Returns
            </CardTitle>
            <CardDescription>Portfolio performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">28.5%</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>vs 12% Benchmark</span>
                </div>
              </div>
              <Progress value={92} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Consistent outperformance
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Risk Management
            </CardTitle>
            <CardDescription>Portfolio stability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">AA+</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Risk Rating</span>
                </div>
              </div>
              <Progress value={88} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Strong risk-adjusted returns
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" />
              Capital Deployment
            </CardTitle>
            <CardDescription>Investment activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">$2.4B</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Last 12 Months</span>
                </div>
              </div>
              <Progress value={85} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Strategic capital allocation
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cosmic-card bg-gradient-to-br from-background to-blue-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-primary" />
              Global Presence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">25+</div>
            <p className="text-sm text-muted-foreground">Countries with investments</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-green-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Investment Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">120+</div>
            <p className="text-sm text-muted-foreground">Investment professionals</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-purple-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Exits Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">45</div>
            <p className="text-sm text-muted-foreground">Successful portfolio exits</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-orange-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Deal Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">$5B+</div>
            <p className="text-sm text-muted-foreground">Active opportunities</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
