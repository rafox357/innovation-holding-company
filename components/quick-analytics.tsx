"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, LineChart, BarChart3 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const QuickAnalytics = React.memo(function QuickAnalytics() {
  const stats = [
    { title: "Total Assets", value: "$1.42B", change: 15.2, icon: DollarSign },
    { title: "Portfolio Growth", value: "42%", change: 8.5, icon: TrendingUp },
    { title: "ROI", value: "28.5%", change: 5.8, icon: LineChart },
    { title: "Market Cap", value: "$2.8B", change: 12.3, icon: BarChart3 },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="cosmic-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <p className={`text-sm ${stat.change > 0 ? "text-green-500" : "text-red-500"} flex items-center`}>
                        {stat.change > 0 ? (
                          <ArrowUpRight className="w-4 h-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 mr-1" />
                        )}
                        {Math.abs(stat.change)}%
                      </p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>View detailed {stat.title.toLowerCase()} analysis</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
})

export { QuickAnalytics }
