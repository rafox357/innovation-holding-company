'use client';

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts"

const subsidiaryData = [
  { name: "Anexo", revenue: 500000, profit: 100000, users: 15000 },
  { name: "Fundex", revenue: 750000, profit: 200000, users: 5000 },
  { name: "Elementalis", revenue: 1000000, profit: 300000, users: 2000 },
  { name: "Estore District", revenue: 250000, profit: 50000, users: 10000 },
  { name: "Cosmo & Compass Co.", revenue: 400000, profit: 80000, users: 1000 },
  { name: "ExoNet", revenue: 300000, profit: 60000, users: 500 },
  { name: "Thryvus & Co.", revenue: 600000, profit: 150000, users: 3000 },
  { name: "Ponce Industries", revenue: 800000, profit: 200000, users: 1500 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d", "#ffc658", "#8dd1e1"]

const SubsidiaryMetricsChart = React.memo(function SubsidiaryMetricsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={subsidiaryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue">
          {subsidiaryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        <Bar yAxisId="right" dataKey="profit" fill="#82ca9d" name="Profit">
          {subsidiaryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
})

export function SubsidiaryMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subsidiary Metrics</CardTitle>
        <CardDescription>Key performance indicators across all subsidiaries</CardDescription>
      </CardHeader>
      <CardContent>
        <SubsidiaryMetricsChart />
      </CardContent>
    </Card>
  )
}
