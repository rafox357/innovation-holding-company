"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

const getErrorMessage = (error: string | null) => {
  switch (error) {
    case "Configuration":
      return "There is a problem with the server configuration. Please try again later."
    case "AccessDenied":
      return "You do not have permission to sign in. Please contact support if you believe this is a mistake."
    case "Verification":
      return "The verification link has expired or has already been used. Please request a new one."
    case "OAuthSignin":
      return "Error occurred while signing in with the provider. Please try again."
    case "OAuthCallback":
      return "Error occurred while processing the sign in. Please try again."
    case "OAuthCreateAccount":
      return "Could not create an account with the provider. Please try a different method."
    case "EmailCreateAccount":
      return "Could not create an account with this email. Please try a different method."
    case "Callback":
      return "Error occurred during authentication. Please try again."
    case "OAuthAccountNotLinked":
      return "This email is already associated with another account. Please sign in with the original provider."
    case "EmailSignin":
      return "The email sign in link is invalid or has expired. Please try again."
    case "CredentialsSignin":
      return "Invalid credentials. Please check your email and password and try again."
    default:
      return "An unexpected error occurred. Please try again later."
  }
}

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const errorMessage = getErrorMessage(error)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-destructive" />
            <CardTitle>Authentication Error</CardTitle>
          </div>
          <CardDescription className="text-base">
            {errorMessage}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <Button asChild variant="default">
              <Link href="/auth/signin">Try Again</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Need help? <Link href="/contact" className="text-primary hover:underline">Contact Support</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
