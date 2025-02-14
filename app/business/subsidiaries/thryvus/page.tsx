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
  Brain,
  Network,
  Cpu
} from "lucide-react"

const performanceData = [
  { name: "2020", value: 100 },
  { name: "2021", value: 220 },
  { name: "2022", value: 380 },
  { name: "2023", value: 520 },
  { name: "2024", value: 750 },
  { name: "2025", value: 920 },
]

const aiModelsData = [
  { name: "Q1", value: 8 },
  { name: "Q2", value: 15 },
  { name: "Q3", value: 22 },
  { name: "Q4", value: 30 },
]

export default function ThryvusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Business", href: "/business" },
          { label: "Subsidiaries", href: "/business/subsidiaries" },
          { label: "Thryvus", href: "/business/subsidiaries/thryvus" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Thryvus: AI & Cognitive Systems</h1>
        <p className="text-muted-foreground">
          Advancing artificial intelligence and cognitive computing to new frontiers
        </p>
      </div>

      {/* Hero Section */}
      <div className="rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 mb-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pioneering AI Innovation</h2>
            <p className="text-muted-foreground mb-6">
              Thryvus leads the evolution of artificial intelligence, developing groundbreaking 
              cognitive systems that transform how machines learn, reason, and interact. Our 
              solutions are reshaping industries from healthcare to space exploration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>Advanced neural networks</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" />
                <span>Distributed AI systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <span>Quantum AI processing</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg" />
            <img
              src="/images/thryvus-ai.png"
              alt="Thryvus AI System Visualization"
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Performance</CardTitle>
            <Rocket className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">920%</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+38.2% this year</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Engineers</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">180+</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+35 this quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Models</CardTitle>
            <Globe className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+12 new models</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+2.1% improvement</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle>AI Performance Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <KPIChart 
              data={performanceData} 
              type="line" 
              title="Performance Growth"
            />
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle>New AI Models Deployed</CardTitle>
          </CardHeader>
          <CardContent>
            <KPIChart 
              data={aiModelsData} 
              type="bar" 
              title="AI Models Growth"
            />
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Key Innovations</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Neural Networks",
              description: "Advanced neural architectures that mimic and enhance human cognitive processes.",
              icon: <Brain className="h-6 w-6 text-primary" />,
            },
            {
              title: "Distributed AI",
              description: "Scalable AI systems that operate across vast networks with unprecedented efficiency.",
              icon: <Network className="h-6 w-6 text-primary" />,
            },
            {
              title: "Quantum AI",
              description: "Next-generation AI leveraging quantum computing for complex problem-solving.",
              icon: <Cpu className="h-6 w-6 text-primary" />,
            },
            {
              title: "Global Reach",
              description: "AI solutions deployed and optimized for diverse markets worldwide.",
              icon: <Globe className="h-6 w-6 text-primary" />,
            },
            {
              title: "Performance Analytics",
              description: "Real-time monitoring and optimization of AI system performance.",
              icon: <TrendingUp className="h-6 w-6 text-primary" />,
            },
            {
              title: "Rapid Innovation",
              description: "Accelerated AI development through advanced research methodologies.",
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
