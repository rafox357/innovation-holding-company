"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, Users, TrendingUp, Calendar } from "lucide-react"

const rounds = [
  {
    name: "Series C",
    status: "Active",
    target: "$150M",
    raised: "$95M",
    progress: 63,
    investors: 12,
    deadline: "Q2 2025",
    description: "Expansion capital for global market penetration and R&D acceleration",
  },
  {
    name: "Growth Fund",
    status: "Upcoming",
    target: "$200M",
    raised: "$0M",
    progress: 0,
    investors: 0,
    deadline: "Q4 2025",
    description: "Strategic fund for acquisitions and new market development",
  },
]

export default function FundraisingPage() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4">Fundraising</h1>
            <p className="text-xl text-muted-foreground">
              Investment opportunities and funding rounds
            </p>
          </div>
          <Button size="lg">Contact Investment Team</Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <CardTitle>Total Raised</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$450M</div>
              <p className="text-muted-foreground">Lifetime</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Investors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">45</div>
              <p className="text-muted-foreground">Global Partners</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <CardTitle>Valuation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$2.5B</div>
              <p className="text-muted-foreground">Current</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Calendar className="h-6 w-6 text-primary" />
              <CardTitle>Next Round</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Q4 2025</div>
              <p className="text-muted-foreground">Estimated</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Rounds */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Investment Rounds</h2>
          {rounds.map((round) => (
            <Card key={round.name}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{round.name}</h3>
                      <Badge
                        variant={round.status === "Active" ? "default" : "outline"}
                      >
                        {round.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{round.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button variant={round.status === "Active" ? "default" : "outline"}>
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress: {round.raised} of {round.target}</span>
                      <span>{round.progress}%</span>
                    </div>
                    <Progress value={round.progress} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Investors: {round.investors}</span>
                    <span>Deadline: {round.deadline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Highlights */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Market Leadership</h3>
              <p className="text-muted-foreground">
                Leading position in key technology sectors with significant growth potential
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Innovation Portfolio</h3>
              <p className="text-muted-foreground">
                Diverse portfolio of innovative technologies and solutions
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Global Presence</h3>
              <p className="text-muted-foreground">
                Established presence in major markets with expansion opportunities
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
