"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "Configuration":
        return "There is a problem with the server configuration."
      case "AccessDenied":
        return "You do not have permission to sign in."
      case "Verification":
        return "The verification link has expired or has already been used."
      default:
        return "An error occurred during authentication."
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold">Authentication Error</CardTitle>
          <CardDescription className="text-lg">
            {getErrorMessage(error)}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Link href="/auth/signin">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Sign In
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
