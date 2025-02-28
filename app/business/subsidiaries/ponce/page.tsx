'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Factory, Cog, Rocket, CircuitBoard, 
  BarChart3, TrendingUp, ArrowUpRight, Boxes,
  Award, Wrench, Truck, Cpu
} from "lucide-react"

export default function PonceIndustriesBusinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold cosmic-title glow mb-2">Ponce Industries</h1>
            <p className="text-xl text-muted-foreground">Advanced Manufacturing Excellence</p>
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
                Pioneering the future of manufacturing with advanced robotics, smart automation, and precision engineering. Our state-of-the-art facilities deliver innovative solutions across aerospace, electronics, and precision components.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Smart Manufacturing</Badge>
                <Badge variant="secondary">Robotics</Badge>
                <Badge variant="secondary">Precision Engineering</Badge>
                <Badge variant="secondary">Industry 4.0</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card bg-gradient-to-br from-background to-primary/10">
            <CardHeader>
              <CardTitle>Operational Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Manufacturing Efficiency</span>
                  <span className="text-xl font-bold">98.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Quality Rating</span>
                  <span className="text-xl font-bold">99.99%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">On-Time Delivery</span>
                  <span className="text-xl font-bold">97%</span>
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
              <Factory className="h-5 w-5 text-primary" />
              Production Output
            </CardTitle>
            <CardDescription>Manufacturing capacity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">2.5M</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>+28% YoY</span>
                </div>
              </div>
              <Progress value={85} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Units produced annually
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cog className="h-5 w-5 text-primary" />
              Automation Level
            </CardTitle>
            <CardDescription>Smart manufacturing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">85%</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Industry 4.0</span>
                </div>
              </div>
              <Progress value={85} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Advanced robotics integration
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              Innovation Index
            </CardTitle>
            <CardDescription>R&D effectiveness</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">92</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Patents</span>
                </div>
              </div>
              <Progress value={92} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Industry-leading innovation score
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cosmic-card bg-gradient-to-br from-background to-blue-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircuitBoard className="h-5 w-5 text-primary" />
              Product Lines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">12</div>
            <p className="text-sm text-muted-foreground">Advanced manufacturing divisions</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-green-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Boxes className="h-5 w-5 text-primary" />
              Global Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">8</div>
            <p className="text-sm text-muted-foreground">Manufacturing centers</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-purple-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Equipment Uptime
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">99.8%</div>
            <p className="text-sm text-muted-foreground">Operational reliability</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-orange-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Supply Chain
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">45+</div>
            <p className="text-sm text-muted-foreground">Countries served</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
