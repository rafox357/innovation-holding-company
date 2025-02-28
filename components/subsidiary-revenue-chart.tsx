'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: 'Anexo', value: 500000 },
  { name: 'Fundex', value: 750000 },
  { name: 'Elementalis', value: 1000000 },
  { name: 'Estore District', value: 250000 },
  { name: 'Cosmo & Compass Co.', value: 400000 },
  { name: 'ExoNet', value: 300000 },
  { name: 'Thryvus & Co.', value: 600000 },
  { name: 'Ponce Industries', value: 800000 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#A4DE6C', '#D0ED57']

export function SubsidiaryRevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subsidiary Revenue Distribution</CardTitle>
        <CardDescription>Revenue breakdown by subsidiary</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
