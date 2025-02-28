'use client';

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

type TimeframeType = "monthly" | "quarterly" | "yearly";

const data: Record<TimeframeType, Array<{ month?: string; quarter?: string; year?: string; revenue: number }>> = {
  monthly: [
    { month: "Jan", revenue: 1200000 },
    { month: "Feb", revenue: 1800000 },
    { month: "Mar", revenue: 2400000 },
    { month: "Apr", revenue: 2900000 },
    { month: "May", revenue: 3500000 },
    { month: "Jun", revenue: 4200000 },
    { month: "Jul", revenue: 4800000 },
    { month: "Aug", revenue: 5500000 },
    { month: "Sep", revenue: 6200000 },
    { month: "Oct", revenue: 6900000 },
    { month: "Nov", revenue: 7600000 },
    { month: "Dec", revenue: 8500000 },
  ],
  quarterly: [
    { quarter: "Q1", revenue: 5400000 },
    { quarter: "Q2", revenue: 10600000 },
    { quarter: "Q3", revenue: 16500000 },
    { quarter: "Q4", revenue: 23000000 },
  ],
  yearly: [
    { year: "2023", revenue: 55500000 },
    { year: "2024", revenue: 72000000 },
    { year: "2025", revenue: 93600000 },
  ],
}

export function RevenueChart() {
  const [timeframe, setTimeframe] = useState<TimeframeType>("monthly")

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue projections</CardDescription>
        </div>
        <Select 
          value={timeframe} 
          onValueChange={(value: TimeframeType) => setTimeframe(value)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data[timeframe]}>
            <XAxis
              dataKey={timeframe === "monthly" ? "month" : timeframe === "quarterly" ? "quarter" : "year"}
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip
              formatter={(value: number) => [`$${(value / 1000000).toFixed(2)}M`, "Revenue"]}
              labelFormatter={(label) => `${timeframe === "monthly" ? "Month" : timeframe === "quarterly" ? "Quarter" : "Year"}: ${label}`}
            />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#adfa1d" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
