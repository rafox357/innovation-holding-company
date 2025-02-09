"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function Verify() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
            <CardDescription className="text-lg mt-2">
              A sign in link has been sent to your email address.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-center text-sm text-muted-foreground">
          <p>Click the link in the email to sign in to your account.</p>
          <p className="mt-2">
            If you don&apos;t see the email, check your spam folder.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
