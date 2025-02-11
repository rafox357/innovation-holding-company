"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, TrendingUp, Target, Users } from "lucide-react"

export default function BusinessPlanPage() {
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
            <h1 className="text-4xl font-bold mb-4">Business Plan</h1>
            <p className="text-xl text-muted-foreground">
              Strategic roadmap for sustainable growth and innovation
            </p>
          </div>
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Full Plan
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <CardTitle>Growth Target</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">25%</div>
              <p className="text-muted-foreground">Annual Revenue Growth</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle>Market Share</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15%</div>
              <p className="text-muted-foreground">Target Market Share</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Team Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">500+</div>
              <p className="text-muted-foreground">New Positions</p>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Initiatives */}
        <Card>
          <CardHeader>
            <CardTitle>Strategic Initiatives</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Market Expansion</h3>
              <p className="text-muted-foreground">
                Expanding into new geographic markets and industry verticals through strategic partnerships and acquisitions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Innovation Focus</h3>
              <p className="text-muted-foreground">
                Investing in R&D to develop cutting-edge solutions across our subsidiary portfolio.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Operational Excellence</h3>
              <p className="text-muted-foreground">
                Implementing advanced technologies and processes to optimize operations and reduce costs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Financial Projections */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Projections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Revenue Growth</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Year 1</span>
                      <span className="font-semibold">$250M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Year 2</span>
                      <span className="font-semibold">$312M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Year 3</span>
                      <span className="font-semibold">$390M</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Investment Plans</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>R&D</span>
                      <span className="font-semibold">$50M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Infrastructure</span>
                      <span className="font-semibold">$30M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Expansion</span>
                      <span className="font-semibold">$40M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
