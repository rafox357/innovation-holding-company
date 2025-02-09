'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Network, Server, Shield, Globe2, Cpu, 
  Cloud, ArrowUpRight, Wifi, Database,
  Lock, Activity, Zap
} from "lucide-react"

export default function ExoNetBusinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold cosmic-title glow mb-2">ExoNet</h1>
            <p className="text-xl text-muted-foreground">Next-Generation Infrastructure Solutions</p>
          </div>
          <Badge variant="outline" className="cosmic-badge text-lg py-1.5 px-4">Planning</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card className="cosmic-card bg-gradient-to-br from-background to-secondary/10">
            <CardHeader>
              <CardTitle>Infrastructure Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Pioneering the future of digital infrastructure with advanced networking, edge computing, and security solutions. Our global network ensures unparalleled performance, reliability, and protection for enterprise operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Edge Computing</Badge>
                <Badge variant="secondary">Zero Trust</Badge>
                <Badge variant="secondary">Cloud Native</Badge>
                <Badge variant="secondary">Global Network</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card bg-gradient-to-br from-background to-primary/10">
            <CardHeader>
              <CardTitle>Network Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Global Points of Presence</span>
                  <span className="text-xl font-bold">180+ Locations</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Network Capacity</span>
                  <span className="text-xl font-bold">100+ Tbps</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Edge Servers</span>
                  <span className="text-xl font-bold">5,000+</span>
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
              <Network className="h-5 w-5 text-primary" />
              Network Uptime
            </CardTitle>
            <CardDescription>Service reliability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">99.999%</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>12 Months</span>
                </div>
              </div>
              <Progress value={99} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Industry-leading reliability standard
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              Data Centers
            </CardTitle>
            <CardDescription>Global infrastructure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">15</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Tier 4</span>
                </div>
              </div>
              <Progress value={85} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Strategic global data center network
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security Score
            </CardTitle>
            <CardDescription>Protection rating</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">A+</div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Top Tier</span>
                </div>
              </div>
              <Progress value={95} className="cosmic-progress" />
              <p className="text-sm text-muted-foreground">
                Maximum security certification level
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cosmic-card bg-gradient-to-br from-background to-blue-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-primary" />
              Network Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">100 Gbps</div>
            <p className="text-sm text-muted-foreground">Average connection speed</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-green-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Storage Capacity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">50+ PB</div>
            <p className="text-sm text-muted-foreground">Total storage deployed</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-purple-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              DDoS Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">10 Tbps</div>
            <p className="text-sm text-muted-foreground">Mitigation capacity</p>
          </CardContent>
        </Card>

        <Card className="cosmic-card bg-gradient-to-br from-background to-orange-500/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">&lt;10ms</div>
            <p className="text-sm text-muted-foreground">Global average latency</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
