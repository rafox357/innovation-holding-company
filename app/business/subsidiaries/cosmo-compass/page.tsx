'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  LineChart, Users, Target, Compass, 
  Globe2, TrendingUp, ArrowUpRight, Briefcase,
  Award, Lightbulb, Network, Building
} from "lucide-react"

export default function CosmoCompassBusinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold cosmic-title glow mb-2">Cosmo & Compass Co.</h1>
            <p className="text-xl text-muted-foreground">Strategic Business Advisory</p>
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
                Leading strategic advisory firm delivering transformative solutions through innovative consulting, market intelligence, and digital transformation services. Our expert team guides businesses through complex challenges and opportunities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Strategic Planning</Badge>
                <Badge variant="secondary">Digital Transformation</Badge>
                <Badge variant="secondary">Market Analysis</Badge>
                <Badge variant="secondary">Innovation Consulting</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card bg-gradient-to-br from-background to-primary/10">
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Client Success Rate</span>
                  <span className="text-xl font-bold">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Project Completion</span>
                  <span className="text-xl font-bold">98.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Client Retention</span>
                  <span className="text-xl font-bold">92%</span>
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
              Revenue Growth
            </CardTitle>
            <CardDescription>Annual performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">32%</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>YoY</span>
                </div>
              </div>
              <Progress value={85} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Consistent growth in advisory services
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Client Portfolio
            </CardTitle>
            <CardDescription>Active engagements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">250+</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Enterprise</span>
                </div>
              </div>
              <Progress value={78} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Global enterprise partnerships
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Project Success
            </CardTitle>
            <CardDescription>Delivery excellence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">96%</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>On Target</span>
                </div>
              </div>
              <Progress value={96} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Projects delivered on time and budget
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
              Global Reach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">35+</div>
            <p className="text-sm text-muted-foreground">Countries served</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-green-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Industry Awards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">25</div>
            <p className="text-sm text-muted-foreground">Recognition for excellence</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-purple-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Expert Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">150+</div>
            <p className="text-sm text-muted-foreground">Industry consultants</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-orange-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Solutions Delivered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">1,200+</div>
            <p className="text-sm text-muted-foreground">Strategic implementations</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
