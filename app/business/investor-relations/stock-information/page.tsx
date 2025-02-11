"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, BarChart, Activity, Users } from "lucide-react"

const stockMetrics = {
  currentPrice: 245.67,
  change: 3.45,
  changePercent: 1.42,
  volume: "2.1M",
  marketCap: "12.3B",
  peRatio: 28.5,
  dividend: 1.20,
  dividendYield: 0.49,
  beta: 1.15,
}

const tradingData = [
  {
    label: "52 Week High",
    value: "$268.45",
    date: "Dec 15, 2024",
  },
  {
    label: "52 Week Low",
    value: "$175.30",
    date: "Mar 22, 2024",
  },
  {
    label: "Average Volume",
    value: "1.8M",
    period: "30 days",
  },
  {
    label: "Float",
    value: "45.2M",
    note: "shares",
  },
]

const shareholderInfo = [
  {
    category: "Institutional",
    percentage: 65.8,
    holders: 245,
    shares: "32.9M",
  },
  {
    category: "Insider",
    percentage: 12.3,
    holders: 15,
    shares: "6.2M",
  },
  {
    category: "Individual",
    percentage: 21.9,
    holders: "25K+",
    shares: "11M",
  },
]

export default function StockInformationPage() {
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
            <h1 className="text-4xl font-bold mb-4">Stock Information</h1>
            <p className="text-xl text-muted-foreground">
              Real-time stock data and trading information
            </p>
          </div>
          <Button size="lg">
            <BarChart className="mr-2 h-4 w-4" />
            Advanced Charts
          </Button>
        </div>

        {/* Current Stock Price */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1">Current Price (USD)</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold">${stockMetrics.currentPrice}</span>
                  <Badge
                    variant={stockMetrics.change > 0 ? "default" : "destructive"}
                    className="text-lg"
                  >
                    {stockMetrics.change > 0 ? "+" : ""}
                    {stockMetrics.change} ({stockMetrics.changePercent}%)
                  </Badge>
                </div>
              </div>
              <div className="mt-4 md:mt-0 space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Volume: {stockMetrics.volume}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Market Cap: ${stockMetrics.marketCap}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <CardTitle>P/E Ratio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stockMetrics.peRatio}</div>
              <p className="text-muted-foreground">TTM</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <CardTitle>Dividend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${stockMetrics.dividend}</div>
              <p className="text-muted-foreground">Annual</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <BarChart className="h-6 w-6 text-primary" />
              <CardTitle>Yield</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stockMetrics.dividendYield}%</div>
              <p className="text-muted-foreground">Current</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Activity className="h-6 w-6 text-primary" />
              <CardTitle>Beta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stockMetrics.beta}</div>
              <p className="text-muted-foreground">5Y Monthly</p>
            </CardContent>
          </Card>
        </div>

        {/* Trading Information */}
        <Card>
          <CardHeader>
            <CardTitle>Trading Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tradingData.map((data) => (
                <div key={data.label} className="space-y-2">
                  <h3 className="font-semibold">{data.label}</h3>
                  <p className="text-2xl">{data.value}</p>
                  {data.date && (
                    <p className="text-sm text-muted-foreground">as of {data.date}</p>
                  )}
                  {data.period && (
                    <p className="text-sm text-muted-foreground">past {data.period}</p>
                  )}
                  {data.note && (
                    <p className="text-sm text-muted-foreground">{data.note}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shareholder Information */}
        <Card>
          <CardHeader>
            <CardTitle>Shareholder Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shareholderInfo.map((info) => (
                <div key={info.category} className="space-y-4">
                  <div>
                    <h3 className="font-semibold">{info.category} Ownership</h3>
                    <p className="text-3xl font-bold">{info.percentage}%</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Holders</span>
                      <span>{info.holders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shares</span>
                      <span>{info.shares}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
