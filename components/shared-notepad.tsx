"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export function SharedNotepad() {
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/api/shared-notepad')
      const data = await response.json()
      setContent(data.content)
    }

    fetchContent()
    const interval = setInterval(fetchContent, 5000) // Poll every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleContentChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    await fetch('/api/shared-notepad', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newContent }),
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shared Notepad</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Type here to collaborate in real-time..."
          className="min-h-[200px]"
        />
      </CardContent>
    </Card>
  )
}

