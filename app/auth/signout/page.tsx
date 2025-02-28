"use client"

import { useEffect } from "react"
import { signOut } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function SignOut() {
  useEffect(() => {
    // Auto sign out after 3 seconds
    const timer = setTimeout(() => {
      signOut({ callbackUrl: "/" })
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Signing Out...</CardTitle>
          <CardDescription>You will be redirected in a few seconds</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-4"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
