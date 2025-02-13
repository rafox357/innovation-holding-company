"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

export default function OnboardingPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // If user is not authenticated, redirect to sign in
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    } else if (status === "authenticated") {
      setIsLoading(false)
    }
  }, [status, router])

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Icons.spinner className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <Card className="w-full max-w-[600px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Welcome to Innovative Holding Company!</CardTitle>
          <CardDescription>
            Thank you for joining us. Let's get you started with your journey.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">What would you like to do first?</h3>
            <div className="grid gap-2">
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => router.push("/dashboard")}
              >
                <Icons.layout className="mr-2 h-4 w-4" />
                Go to Dashboard
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => router.push("/profile")}
              >
                <Icons.user className="mr-2 h-4 w-4" />
                Complete Your Profile
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => router.push("/business/planning")}
              >
                <Icons.fileText className="mr-2 h-4 w-4" />
                View Business Plans
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid gap-2">
              <Button
                variant="link"
                className="justify-start"
                onClick={() => router.push("/innovation-hub")}
              >
                <Icons.rocket className="mr-2 h-4 w-4" />
                Explore Innovation Hub
              </Button>
              <Button
                variant="link"
                className="justify-start"
                onClick={() => router.push("/observatory")}
              >
                <Icons.eye className="mr-2 h-4 w-4" />
                Visit Observatory
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
