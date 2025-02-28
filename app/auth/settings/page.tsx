"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Settings2, Bell, Moon, Globe } from "lucide-react"

export default function Settings() {
  const [settings, setSettings] = useState({
    theme: "system",
    language: "en",
    notifications: {
      email: true,
      push: true,
      updates: true,
      marketing: false,
    },
    privacy: {
      profileVisibility: "public",
      activityStatus: true,
      searchable: true,
    },
  })

  return (
    <div className="container max-w-2xl py-8">
      <div className="space-y-6">
        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Settings2 className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how Hubverse looks and feels
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Moon className="h-5 w-5" />
                <div className="flex-1 space-y-0.5">
                  <Label>Theme</Label>
                  <CardDescription>Select your preferred theme</CardDescription>
                </div>
                <Select
                  value={settings.theme}
                  onValueChange={(value) =>
                    setSettings({ ...settings, theme: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5" />
                <div className="flex-1 space-y-0.5">
                  <Label>Language</Label>
                  <CardDescription>Choose your preferred language</CardDescription>
                </div>
                <Select
                  value={settings.language}
                  onValueChange={(value) =>
                    setSettings({ ...settings, language: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Bell className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Manage how you receive notifications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <CardDescription>
                    Receive notifications via email
                  </CardDescription>
                </div>
                <Switch
                  checked={settings.notifications.email}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, email: checked },
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <CardDescription>
                    Receive notifications in your browser
                  </CardDescription>
                </div>
                <Switch
                  checked={settings.notifications.push}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, push: checked },
                    })
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Updates and Announcements</Label>
                  <CardDescription>
                    Stay informed about new features and updates
                  </CardDescription>
                </div>
                <Switch
                  checked={settings.notifications.updates}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, updates: checked },
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Communications</Label>
                  <CardDescription>
                    Receive news about products and promotions
                  </CardDescription>
                </div>
                <Switch
                  checked={settings.notifications.marketing}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        marketing: checked,
                      },
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div>
                <CardTitle>Privacy</CardTitle>
                <CardDescription>
                  Control your privacy settings
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-0.5">
                  <Label>Profile Visibility</Label>
                  <CardDescription>
                    Choose who can see your profile
                  </CardDescription>
                </div>
                <Select
                  value={settings.privacy.profileVisibility}
                  onValueChange={(value) =>
                    setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, profileVisibility: value },
                    })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="contacts">Contacts Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Online Status</Label>
                  <CardDescription>
                    Show when you're active on the platform
                  </CardDescription>
                </div>
                <Switch
                  checked={settings.privacy.activityStatus}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, activityStatus: checked },
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Search Visibility</Label>
                  <CardDescription>
                    Allow others to find you in search results
                  </CardDescription>
                </div>
                <Switch
                  checked={settings.privacy.searchable}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, searchable: checked },
                    })
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
