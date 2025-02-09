"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Breadcrumb } from "@/components/breadcrumb"

const sustainabilityGoals = [
  { name: "Carbon Neutrality", progress: 65, target: "2030" },
  { name: "Renewable Energy Usage", progress: 80, target: "100% by 2028" },
  { name: "Waste Reduction", progress: 50, target: "75% reduction by 2027" },
  { name: "Sustainable Supply Chain", progress: 40, target: "100% by 2029" },
  { name: "Employee Volunteering", progress: 90, target: "50,000 hours annually" },
]

export default function SustainabilityReport() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Sustainability Report", href: "/sustainability-report" }
      ]} />

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Sustainability Report</h1>
        <p className="text-lg text-muted-foreground">
          Our commitment to environmental and social responsibility
        </p>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>Sustainability Goals</CardTitle>
          <CardDescription>Progress towards our key sustainability targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {sustainabilityGoals.map((goal, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-sm text-muted-foreground">Target: {goal.target}</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-sm text-right mt-1">{goal.progress}% Complete</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

