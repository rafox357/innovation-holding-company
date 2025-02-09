"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { motion } from "framer-motion"

const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
]

const expenseData = [
  { name: "Operations", value: 4000 },
  { name: "Marketing", value: 3000 },
  { name: "R&D", value: 2000 },
  { name: "Admin", value: 2780 },
  { name: "Other", value: 1890 },
]

const MotionCard = motion(Card)

export function FinancialDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold cosmic-title glow">Financial Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MotionCard
          className="cosmic-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader>
            <CardTitle className="cosmic-title">Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </MotionCard>
        <MotionCard
          className="cosmic-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CardHeader>
            <CardTitle className="cosmic-title">Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </MotionCard>
      </div>
      <MotionCard
        className="cosmic-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CardHeader>
          <CardTitle className="cosmic-title">Key Financial Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold">Revenue</h3>
              <p className="text-2xl font-bold">$10.5M</p>
            </div>
            <div>
              <h3 className="font-semibold">Net Income</h3>
              <p className="text-2xl font-bold">$2.3M</p>
            </div>
            <div>
              <h3 className="font-semibold">Cash Flow</h3>
              <p className="text-2xl font-bold">$1.8M</p>
            </div>
            <div>
              <h3 className="font-semibold">Profit Margin</h3>
              <p className="text-2xl font-bold">22%</p>
            </div>
          </div>
        </CardContent>
      </MotionCard>
    </div>
  )
}
