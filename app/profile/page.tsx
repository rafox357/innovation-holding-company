"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Your Profile</h1>
        <p className="text-lg text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder-avatar.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>john.doe@example.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Change Avatar</Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your account details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="account">Account Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                  <Input id="fullName" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <Button>Save Changes</Button>
              </TabsContent>
              <TabsContent value="account" className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="currentPassword" className="text-sm font-medium">Current Password</label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button>Update Password</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

