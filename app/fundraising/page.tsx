import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, DollarSign, Users, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

interface FundraisingRound {
  name: string
  description: string
  raised: number
  target: number
  investors: number
  status: string
  closingDate: string
}

const fundraisingRounds: FundraisingRound[] = [
  {
    name: "Seed Round",
    description: "Initial funding for Hubverse's core infrastructure",
    status: "Completed",
    target: 1000000,
    raised: 1200000,
    investors: 5,
    closingDate: "2024-06-30",
  },
  {
    name: "Series A",
    description: "Expansion of Hubverse's subsidiary network",
    status: "Active",
    target: 5000000,
    raised: 3500000,
    investors: 8,
    closingDate: "2025-12-31",
  },
  {
    name: "Series B",
    description: "Scaling Hubverse's global operations",
    status: "Upcoming",
    target: 20000000,
    raised: 0,
    investors: 0,
    closingDate: "2026-06-30",
  },
]

export default function FundraisingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 cosmic-text">Fundraising</h1>

      <Tabs defaultValue="active" className="mb-8">
        <TabsList className="cosmic-card p-1 mb-4">
          <TabsTrigger value="all" className="cosmic-button">
            All Rounds
          </TabsTrigger>
          <TabsTrigger value="active" className="cosmic-button">
            Active
          </TabsTrigger>
          <TabsTrigger value="completed" className="cosmic-button">
            Completed
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="cosmic-button">
            Upcoming
          </TabsTrigger>
        </TabsList>

        {["all", "active", "completed", "upcoming"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fundraisingRounds
                .filter((round) => tab === "all" || round.status.toLowerCase() === tab)
                .map((round) => (
                  <FundraisingCard key={round.name} round={round} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="cosmic-text text-2xl">Fundraising Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Hubverse is committed to driving innovation and growth through strategic fundraising. Our rounds are
            designed to fuel expansion, research, and development across our ecosystem of subsidiaries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon={<DollarSign className="h-6 w-6 text-green-500" />}
              title="Total Raised"
              value={`$${(fundraisingRounds.reduce((sum, round) => sum + round.raised, 0) / 1000000).toFixed(1)}M`}
            />
            <StatCard
              icon={<Users className="h-6 w-6 text-blue-500" />}
              title="Total Investors"
              value={fundraisingRounds.reduce((sum, round) => sum + round.investors, 0)}
            />
            <StatCard
              icon={<Calendar className="h-6 w-6 text-yellow-500" />}
              title="Active Rounds"
              value={fundraisingRounds.filter((round) => round.status === "Active").length}
            />
            <StatCard icon={<TrendingUp className="h-6 w-6 text-purple-500" />} title="Growth Potential" value="High" />
          </div>
          <div className="text-center">
            <Link href="/investor-relations" passHref>
              <Button className="cosmic-button">
                Investor Relations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FundraisingCard({ round }: { round: FundraisingRound }) {
  const progress = (round.raised / round.target) * 100

  return (
    <Card className="cosmic-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="cosmic-text text-xl">{round.name}</CardTitle>
          <Badge
            variant="outline"
            className={`cosmic-border ${
              round.status === "Active"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : round.status === "Completed"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            }`}
          >
            {round.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{round.description}</p>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium cosmic-text">Progress</span>
            <span className="text-sm font-medium cosmic-text">{progress.toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="cosmic-progress" />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold cosmic-text">Target</p>
            <p>${(round.target / 1000000).toFixed(1)}M</p>
          </div>
          <div>
            <p className="font-semibold cosmic-text">Raised</p>
            <p>${(round.raised / 1000000).toFixed(1)}M</p>
          </div>
          <div>
            <p className="font-semibold cosmic-text">Investors</p>
            <p>{round.investors}</p>
          </div>
          <div>
            <p className="font-semibold cosmic-text">Closing Date</p>
            <p>{new Date(round.closingDate).toLocaleDateString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: string | number
}

function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <Card className="cosmic-card">
      <CardContent className="flex items-center p-4">
        <div className="mr-4">{icon}</div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold cosmic-text">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
