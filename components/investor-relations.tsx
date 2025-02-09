'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
]

const MotionCard = motion(Card)

export function InvestorRelations() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold cosmic-title glow">Investor Relations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MotionCard
          className="cosmic-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader>
            <CardTitle className="cosmic-title">Financial Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
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
            <CardTitle className="cosmic-title">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Revenue: $10.5M</li>
              <li>Net Income: $2.3M</li>
              <li>EPS: $1.15</li>
              <li>Market Cap: $150M</li>
            </ul>
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
          <CardTitle className="cosmic-title">Recent News</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Q2 Earnings Call Scheduled</h3>
              <p>Join us on August 15th for our Q2 earnings call. Details to follow.</p>
            </li>
            <li>
              <h3 className="font-semibold">New Strategic Partnership Announced</h3>
              <p>Hubverse partners with TechGiant Inc. to expand our AI capabilities.</p>
            </li>
          </ul>
        </CardContent>
      </MotionCard>
      <div className="flex justify-center">
        <Button className="cosmic-button glow">Download Investor Presentation</Button>
      </div>
    </div>
  )
}
