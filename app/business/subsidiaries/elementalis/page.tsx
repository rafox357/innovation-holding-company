'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KPIChart } from "@/components/dashboard/KPIChart"
import { Breadcrumb } from "@/components/breadcrumb"
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowUpRight,
  Atom,
  BeakerIcon,
  Zap
} from "lucide-react"

const performanceData = [
  { name: "2020", value: 100 },
  { name: "2021", value: 180 },
  { name: "2022", value: 320 },
  { name: "2023", value: 450 },
  { name: "2024", value: 680 },
  { name: "2025", value: 890 },
]

const researchData = [
  { name: "Q1", value: 12 },
  { name: "Q2", value: 18 },
  { name: "Q3", value: 25 },
  { name: "Q4", value: 32 },
]

export default function ElementalisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Business", href: "/business" },
          { label: "Subsidiaries", href: "/business/subsidiaries" },
          { label: "Elementalis", href: "/business/subsidiaries/elementalis" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Elementalis: Advanced Materials Innovation</h1>
        <p className="text-muted-foreground">
          Pioneering the future of materials science with quantum-engineered solutions
        </p>
      </div>

      {/* Hero Section */}
      <div className="rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 mb-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Revolutionizing Materials Science</h2>
            <p className="text-muted-foreground mb-6">
              Elementalis harnesses quantum mechanics and advanced AI to develop revolutionary materials
              that push the boundaries of what's possible. Our breakthroughs are transforming industries
              from aerospace to renewable energy.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Atom className="h-5 w-5 text-primary" />
                <span>Quantum-engineered materials</span>
              </div>
              <div className="flex items-center gap-2">
                <BeakerIcon className="h-5 w-5 text-primary" />
                <span>Advanced research facilities</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Energy-efficient solutions</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg" />
            <img
              src="/images/elementalis-lab.png"
              alt="Elementalis Research Laboratory"
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Research Growth</CardTitle>
            <Rocket className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">890%</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+42.8% this year</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Research Team</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250+</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+45 this quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patents Filed</CardTitle>
            <Globe className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+15 new patents</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+3.5% improvement</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle>Research Investment Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <KPIChart 
              data={performanceData} 
              type="line" 
              title="Performance Over Time"
            />
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle>Breakthroughs per Quarter</CardTitle>
          </CardHeader>
          <CardContent>
            <KPIChart data={researchData} type="bar" />
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Key Innovations</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Quantum Materials",
              description: "Developing materials with properties engineered at the quantum level for unprecedented performance.",
              icon: <Atom className="h-6 w-6 text-primary" />,
            },
            {
              title: "Advanced Research",
              description: "State-of-the-art facilities pushing the boundaries of materials science.",
              icon: <BeakerIcon className="h-6 w-6 text-primary" />,
            },
            {
              title: "Energy Solutions",
              description: "Creating materials that revolutionize energy storage and transmission.",
              icon: <Zap className="h-6 w-6 text-primary" />,
            },
            {
              title: "Global Impact",
              description: "Partnerships with leading institutions worldwide to accelerate innovation.",
              icon: <Globe className="h-6 w-6 text-primary" />,
            },
            {
              title: "Performance Tracking",
              description: "Advanced metrics and analytics to optimize research outcomes.",
              icon: <TrendingUp className="h-6 w-6 text-primary" />,
            },
            {
              title: "Rapid Development",
              description: "Accelerated material development through AI and quantum simulation.",
              icon: <Rocket className="h-6 w-6 text-primary" />,
            },
          ].map((feature) => (
            <Card key={feature.title} className="cosmic-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {feature.icon}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
