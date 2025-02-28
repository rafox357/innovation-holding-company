"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, DollarSign, PieChart, FileText } from "lucide-react"

const reports = [
  {
    title: "Q4 2024 Financial Report",
    type: "Quarterly",
    date: "January 15, 2025",
    highlights: [
      "Revenue growth of 28% YoY",
      "Operating margin improved to 32%",
      "Strong cash position of $1.2B",
    ],
    size: "2.4 MB",
    format: "PDF",
  },
  {
    title: "Q3 2024 Financial Report",
    type: "Quarterly",
    date: "October 15, 2024",
    highlights: [
      "Revenue growth of 25% YoY",
      "Operating margin at 30%",
      "Cash position of $1.1B",
    ],
    size: "2.2 MB",
    format: "PDF",
  },
  {
    title: "2024 Annual Report",
    type: "Annual",
    date: "March 1, 2024",
    highlights: [
      "Annual revenue of $4.2B",
      "Net profit margin of 28%",
      "Market cap reached $12B",
    ],
    size: "5.8 MB",
    format: "PDF",
  },
]

export default function FinancialReportsPage() {
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
            <h1 className="text-4xl font-bold mb-4">Financial Reports</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive financial information and performance metrics
            </p>
          </div>
          <Button size="lg">
            <FileText className="mr-2 h-4 w-4" />
            Subscribe to Updates
          </Button>
        </div>

        {/* Financial Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <CardTitle>Revenue Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">28%</div>
              <p className="text-muted-foreground">Year over Year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <CardTitle>Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$12B</div>
              <p className="text-muted-foreground">Current</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <PieChart className="h-6 w-6 text-primary" />
              <CardTitle>Operating Margin</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">32%</div>
              <p className="text-muted-foreground">Q4 2024</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15</div>
              <p className="text-muted-foreground">Available</p>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Latest Reports</h2>
          {reports.map((report) => (
            <Card key={report.title}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{report.title}</h3>
                      <Badge variant={report.type === "Annual" ? "default" : "outline"}>
                        {report.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">Published: {report.date}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download {report.format} ({report.size})
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {report.highlights.map((highlight, index) => (
                      <li key={index} className="text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Archive Section */}
        <Card>
          <CardHeader>
            <CardTitle>Report Archive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Annual Reports</h3>
              <p className="text-muted-foreground">
                Access our comprehensive annual reports from previous years
              </p>
              <Button variant="outline">View Archive</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Quarterly Reports</h3>
              <p className="text-muted-foreground">
                Browse our historical quarterly financial statements
              </p>
              <Button variant="outline">View Archive</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">SEC Filings</h3>
              <p className="text-muted-foreground">
                Access all our SEC filings and regulatory documents
              </p>
              <Button variant="outline">View Filings</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
