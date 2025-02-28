'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowUpRight,
  BarChart,
  Lightbulb,
  Shield,
  Building,
  ChevronRight
} from "lucide-react";

// Dynamically import the KPIChart component
const KPIChart = dynamic(
  () => import('@/components/dashboard/KPIChart').then((mod) => mod.KPIChart),
  {
    loading: () => (
      <div className="h-[300px] w-full flex items-center justify-center">
        <div className="text-muted-foreground">Loading chart...</div>
      </div>
    ),
    ssr: false // Disable server-side rendering for charts
  }
);

// Memoized data to prevent recalculation
const yearlyData = [
  { name: "2020", value: 100 },
  { name: "2021", value: 145 },
  { name: "2022", value: 210 },
  { name: "2023", value: 298 },
  { name: "2024", value: 420 },
  { name: "2025", value: 580 },
];

const quarterlyData = [
  { name: "Q1", value: 2500 },
  { name: "Q2", value: 3800 },
  { name: "Q3", value: 5200 },
  { name: "Q4", value: 7500 },
];

// Memoized feature data
const features = [
  {
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms process market data in real-time, identifying patterns and trends.",
    icon: <Lightbulb className="h-6 w-6 text-blue-400" aria-hidden="true" />,
    id: "analytics"
  },
  {
    title: "Predictive Modeling",
    description: "Sophisticated forecasting models predict market movements with unprecedented accuracy.",
    icon: <TrendingUp className="h-6 w-6 text-blue-400" aria-hidden="true" />,
    id: "predictions"
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies protect investments.",
    icon: <Shield className="h-6 w-6 text-blue-400" aria-hidden="true" />,
    id: "security"
  },
] as const;

// Memoized metrics data
const metrics = [
  {
    title: "Performance Growth",
    value: "580%",
    change: "+36.5% this year",
    icon: <Rocket className="h-5 w-5 text-blue-400" aria-hidden="true" />
  },
  {
    title: "Active Users",
    value: "7.5K",
    change: "+2.3K this quarter",
    icon: <Users className="h-5 w-5 text-blue-400" aria-hidden="true" />
  },
  {
    title: "Success Rate",
    value: "94%",
    change: "+2.8% improvement",
    icon: <TrendingUp className="h-5 w-5 text-blue-400" aria-hidden="true" />
  }
] as const;

const additionalMetrics = [
  {
    title: "AI Models",
    value: "45+",
    description: "Advanced algorithms",
    icon: <Lightbulb className="h-5 w-5 text-blue-400" aria-hidden="true" />
  },
  {
    title: "Global Reach",
    value: "42",
    description: "Countries served",
    icon: <Globe className="h-5 w-5 text-blue-400" aria-hidden="true" />
  },
  {
    title: "Data Centers",
    value: "12",
    description: "Global locations",
    icon: <Building className="h-5 w-5 text-blue-400" aria-hidden="true" />
  },
  {
    title: "Security Score",
    value: "99.9%",
    description: "Enterprise-grade",
    icon: <Shield className="h-5 w-5 text-blue-400" aria-hidden="true" />
  }
] as const;

export default function FundexPage() {
  return (
    <main className="container mx-auto px-4 py-8" role="main" aria-labelledby="page-title">
      <Breadcrumb
        items={[
          { label: "Business", href: "/business" },
          { label: "Subsidiaries", href: "/business/subsidiaries" },
          { label: "Fundex", href: "/business/subsidiaries/fundex" },
        ]}
      />

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 id="page-title" className="text-4xl font-bold cosmic-title glow mb-2">
            Fundex: Next-Gen Financial Analytics
          </h1>
          <p className="text-xl text-muted-foreground">
            Revolutionary AI-powered financial analytics platform transforming investment strategies
          </p>
        </div>
        <Badge variant="outline" className="cosmic-badge text-lg py-1.5 px-4 border-blue-400/50" aria-label="Status">
          Active
        </Badge>
      </div>

      {/* Hero Section */}
      <section className="rounded-lg bg-card/50 p-8 mb-12 border border-blue-400/20 shadow-lg shadow-blue-400/5" aria-labelledby="hero-title">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 id="hero-title" className="text-2xl font-bold mb-4 text-blue-400">
              Pioneering Financial Innovation
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fundex leads the evolution of financial technology, developing groundbreaking
              analytics systems that transform how institutions analyze, predict, and invest.
              Our solutions are reshaping industries from banking to global markets.
            </p>
            <ul className="space-y-6" role="list" aria-label="Key features">
              <li>
                <a href="#analytics" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-md p-1">
                  <BarChart className="h-5 w-5" aria-hidden="true" />
                  <span className="text-lg">Real-time market analysis</span>
                </a>
              </li>
              <li>
                <a href="#predictions" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-md p-1">
                  <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  <span className="text-lg">AI-powered predictions</span>
                </a>
              </li>
              <li>
                <a href="#security" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-md p-1">
                  <Shield className="h-5 w-5" aria-hidden="true" />
                  <span className="text-lg">Enterprise-grade security</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/images/fundex-platform.png"
              alt="Screenshot of the Fundex Platform interface showing real-time market analysis and AI predictions"
              className="rounded-lg w-full h-full object-cover shadow-lg ring-1 ring-blue-400/20"
            />
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="grid gap-6 md:grid-cols-2 mb-12" aria-labelledby="overview-section">
        <Card className="cosmic-card border-blue-400/20 shadow-lg shadow-blue-400/5">
          <CardHeader>
            <CardTitle id="overview-section" className="text-xl text-blue-400">Company Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fundex combines advanced AI algorithms with real-time market data to provide unparalleled insights for investment decisions. Our platform processes millions of data points per second, delivering actionable intelligence to financial institutions worldwide.
            </p>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Company specialties">
              <Badge variant="outline" className="px-3 py-1 border-blue-400/30 hover:border-blue-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50" role="listitem">AI Analytics</Badge>
              <Badge variant="outline" className="px-3 py-1 border-blue-400/30 hover:border-blue-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50" role="listitem">FinTech</Badge>
              <Badge variant="outline" className="px-3 py-1 border-blue-400/30 hover:border-blue-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50" role="listitem">Real-time Processing</Badge>
              <Badge variant="outline" className="px-3 py-1 border-blue-400/30 hover:border-blue-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50" role="listitem">Machine Learning</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card border-blue-400/20 shadow-lg shadow-blue-400/5">
          <CardHeader>
            <CardTitle id="metrics-section" className="text-xl text-blue-400">Operational Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-6">
              <div className="flex justify-between items-center">
                <dt className="text-muted-foreground">Platform Uptime</dt>
                <dd className="text-xl font-bold text-blue-400">99.99%</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-muted-foreground">Processing Accuracy</dt>
                <dd className="text-xl font-bold text-blue-400">99.95%</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-muted-foreground">Response Time</dt>
                <dd className="text-xl font-bold text-blue-400">{"< 10ms"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </section>

      {/* Key Metrics Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12" aria-label="Key performance metrics">
        {metrics.map((metric) => (
          <Card key={metric.title} className="cosmic-card border-blue-400/20 shadow-lg shadow-blue-400/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-blue-400" aria-label={`${metric.title}: ${metric.value}`}>
                {metric.value}
              </div>
              <div className="flex items-center text-sm text-green-400" aria-label={`Change: ${metric.change}`}>
                <ArrowUpRight className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>{metric.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Additional Metrics Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12" aria-label="Additional metrics">
        {additionalMetrics.map((metric) => (
          <Card key={metric.title} className="cosmic-card border-blue-400/20 shadow-lg shadow-blue-400/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1 text-blue-400" aria-label={`${metric.title}: ${metric.value}`}>
                {metric.value}
              </div>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Performance Charts */}
      <section className="grid gap-6 md:grid-cols-2 mb-12" aria-label="Performance charts">
        <Suspense fallback={
          <div className="h-[300px] w-full flex items-center justify-center">
            <div className="text-muted-foreground">Loading chart...</div>
          </div>
        }>
          <Card className="cosmic-card border-blue-400/20 shadow-lg shadow-blue-400/5">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Performance Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart
                title="Investment Performance"
                data={yearlyData}
                type="line"
              />
            </CardContent>
          </Card>

          <Card className="cosmic-card border-blue-400/20 shadow-lg shadow-blue-400/5">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">User Adoption</CardTitle>
            </CardHeader>
            <CardContent>
              <KPIChart
                title="Portfolio Distribution"
                data={quarterlyData}
                type="bar"
              />
            </CardContent>
          </Card>
        </Suspense>
      </section>

      {/* Key Features */}
      <section className="space-y-8" aria-labelledby="features-title">
        <h2 id="features-title" className="text-2xl font-bold text-blue-400">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="cosmic-card border-blue-400/20 shadow-lg shadow-blue-400/5 hover:border-blue-400/50 transition-colors"
              id={feature.id}
              role="listitem"
              tabIndex={0}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <CardTitle className="text-lg text-blue-400">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
