"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export function RealtimeStockPrice() {
  const [stockPrice, setStockPrice] = useState(100)
  const [change, setChange] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = stockPrice + (Math.random() - 0.5) * 2
      setStockPrice(Number(newPrice.toFixed(2)))
      setChange(Number((newPrice - 100).toFixed(2)))
    }, 5000)

    return () => clearInterval(interval)
  }, [stockPrice])

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Hubverse Stock Price</CardTitle>
        <CardDescription>Real-time stock price simulation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">${stockPrice}</p>
            <p className={`text-sm flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
              {Math.abs(change)} ({((change / 100) * 100).toFixed(2)}%)
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Updated every 5 seconds</p>
        </div>
      </CardContent>
    </Card>
  )
}

