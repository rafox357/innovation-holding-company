"use client"

import { useState, useEffect } from 'react'
import { Progress } from "@/components/ui/progress"

type RealTimeProgressProps = {
  initialProgress: number
  projectId: number
}

export function RealTimeProgress({ initialProgress, projectId }: RealTimeProgressProps) {
  const [progress, setProgress] = useState(initialProgress)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(currentProgress => {
        const change = Math.random() * 2 - 1 // Random value between -1 and 1
        const newProgress = Math.min(Math.max(currentProgress + change, 0), 100)
        return Number(newProgress.toFixed(1))
      })
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Simulating server updates
    const eventSource = new EventSource(`/api/project-progress/${projectId}`)
    
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setProgress(data.progress)
    }

    return () => eventSource.close()
  }, [projectId])

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Progress</span>
        <span>{progress.toFixed(1)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

