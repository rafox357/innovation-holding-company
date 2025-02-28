"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown } from "lucide-react"

export function PageFeedback() {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    // Here you would typically send the feedback to your server
    console.log("Feedback:", feedback, "Comment:", comment)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center">Thank you for your feedback!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Feedback</CardTitle>
        <CardDescription>Help us improve this page by sharing your thoughts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4 mb-4">
          <Button variant={feedback === "positive" ? "default" : "outline"} onClick={() => setFeedback("positive")}>
            <ThumbsUp className="mr-2 h-4 w-4" />
            Helpful
          </Button>
          <Button variant={feedback === "negative" ? "default" : "outline"} onClick={() => setFeedback("negative")}>
            <ThumbsDown className="mr-2 h-4 w-4" />
            Not Helpful
          </Button>
        </div>
        {feedback && (
          <div className="space-y-4">
            <Textarea
              placeholder="Tell us more about your experience with this page..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={handleSubmit} className="w-full">
              Submit Feedback
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

