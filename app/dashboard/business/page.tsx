import { KPICard } from "@/components/dashboard/KPICard";
import { KPIChart } from "@/components/dashboard/KPIChart";

const revenueStreamData = [
  { name: "Technology Licensing", value: 40 },
  { name: "Consulting Services", value: 25 },
  { name: "Platform Subscriptions", value: 20 },
  { name: "Strategic Partnerships", value: 15 },
];

const growthData = [
  { name: "Q1 2024", value: 15 },
  { name: "Q2 2024", value: 25 },
  { name: "Q3 2024", value: 35 },
  { name: "Q4 2024", value: 45 },
  { name: "Q1 2025", value: 60 },
];

export default function BusinessModel() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Business Model</h2>
        <p className="text-muted-foreground">
          Revenue streams and business strategy overview
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <KPICard
          title="Annual Revenue"
          value="$12.5M"
          change={28}
          trend="up"
        />
        <KPICard
          title="Gross Margin"
          value="85%"
          change={5}
          trend="up"
        />
        <KPICard
          title="Customer Base"
          value="250+"
          change={15}
          trend="up"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <KPIChart
          title="Revenue Streams Distribution"
          data={revenueStreamData}
          type="bar"
          dataKey="value"
        />
        <KPIChart
          title="Growth Trajectory"
          data={growthData}
          type="line"
          dataKey="value"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold">Value Proposition</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-primary/5 p-4">
              <h4 className="font-medium text-primary">Innovation Ecosystem</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Comprehensive platform for startups and enterprises to innovate, scale, and succeed
              </p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h4 className="font-medium text-primary">Strategic Support</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Expert guidance and resources for business development and market expansion
              </p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h4 className="font-medium text-primary">Technology Edge</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Access to cutting-edge technology and digital transformation solutions
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold">Growth Strategy</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Market Expansion</h4>
                <p className="text-sm text-muted-foreground">
                  Strategic expansion into emerging markets and new industry verticals
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100 p-2">
                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Product Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Continuous development of new solutions and platform capabilities
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-2">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Strategic Partnerships</h4>
                <p className="text-sm text-muted-foreground">
                  Building strong alliances with industry leaders and technology providers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
