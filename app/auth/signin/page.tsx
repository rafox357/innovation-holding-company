"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Globe } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signIn("email", { email, callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Error signing in:", error)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-6">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Hubverse Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to Hubverse
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Sign in to access your dashboard
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              <Mail className="mr-2 h-4 w-4" />
              {isLoading ? "Signing in..." : "Sign in with Email"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <Button
              variant="outline"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              <Globe className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
