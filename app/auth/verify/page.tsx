"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, CheckCircle2, XCircle } from "lucide-react"
import { signIn } from "next-auth/react"

export default function VerifyEmail() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [verificationState, setVerificationState] = useState<"loading" | "success" | "error" | "waiting">(
    token ? "loading" : "waiting"
  )
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(searchParams.get("email"))
  const [resendLoading, setResendLoading] = useState(false)

  useEffect(() => {
    if (token) {
      verifyEmail(token)
    }
  }, [token])

  const verifyEmail = async (token: string) => {
    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Verification failed")
      }

      setVerificationState("success")
    } catch (err) {
      setVerificationState("error")
      setError(err instanceof Error ? err.message : "Verification failed")
    }
  }

  const handleResendVerification = async () => {
    if (!email) return
    setResendLoading(true)
    try {
      const response = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to resend verification email")
      }

      setError("A new verification email has been sent to your inbox.")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend verification email")
    } finally {
      setResendLoading(false)
    }
  }

  if (verificationState === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 className="h-6 w-6" />
              <CardTitle>Email Verified</CardTitle>
            </div>
            <CardDescription>
              Your email has been successfully verified. You can now sign in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full"
              onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
            >
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (verificationState === "error") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2 text-destructive">
              <XCircle className="h-6 w-6" />
              <CardTitle>Verification Failed</CardTitle>
            </div>
            <CardDescription>
              {error || "The verification link is invalid or has expired."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {email && (
              <Button
                variant="outline"
                className="w-full"
                onClick={handleResendVerification}
                disabled={resendLoading}
              >
                {resendLoading ? "Sending..." : "Resend Verification Email"}
              </Button>
            )}
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
            >
              Back to Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6" />
            <CardTitle>Check Your Email</CardTitle>
          </div>
          <CardDescription>
            We sent a verification link to {email}. Click the link to verify your email address.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant={error.includes("sent") ? "default" : "destructive"}>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button
            variant="outline"
            className="w-full"
            onClick={handleResendVerification}
            disabled={resendLoading}
          >
            {resendLoading ? "Sending..." : "Resend Verification Email"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Wrong email?{" "}
            <a href="/auth/signin" className="text-primary hover:underline">
              Try another
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
