"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Shield, Key, Smartphone } from "lucide-react"

export default function Security() {
  const [isLoading, setIsLoading] = useState(false)
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    emailNotifications: true,
    browserSessions: true,
  })

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // TODO: Implement password change logic
      console.log("Change password:", {
        currentPassword: security.currentPassword,
        newPassword: security.newPassword,
      })
    } catch (error) {
      console.error("Error changing password:", error)
    }
    setIsLoading(false)
  }

  return (
    <div className="container max-w-2xl py-8">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and authentication preferences
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Password Change Section */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Key className="h-5 w-5" />
                <h3 className="text-lg font-medium">Change Password</h3>
              </div>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={security.currentPassword}
                    onChange={(e) =>
                      setSecurity({ ...security, currentPassword: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={security.newPassword}
                    onChange={(e) =>
                      setSecurity({ ...security, newPassword: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={security.confirmPassword}
                    onChange={(e) =>
                      setSecurity({ ...security, confirmPassword: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update Password"}
                </Button>
              </form>
            </div>

            <Separator />

            {/* Two-Factor Authentication */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Smartphone className="h-5 w-5" />
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-factor authentication</Label>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </div>
                <Switch
                  checked={security.twoFactorEnabled}
                  onCheckedChange={(checked) =>
                    setSecurity({ ...security, twoFactorEnabled: checked })
                  }
                />
              </div>
            </div>

            <Separator />

            {/* Additional Security Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email notifications for security events</Label>
                  <CardDescription>
                    Receive emails about important security events
                  </CardDescription>
                </div>
                <Switch
                  checked={security.emailNotifications}
                  onCheckedChange={(checked) =>
                    setSecurity({ ...security, emailNotifications: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Manage browser sessions</Label>
                  <CardDescription>
                    Keep track of devices and browsers accessing your account
                  </CardDescription>
                </div>
                <Switch
                  checked={security.browserSessions}
                  onCheckedChange={(checked) =>
                    setSecurity({ ...security, browserSessions: checked })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
