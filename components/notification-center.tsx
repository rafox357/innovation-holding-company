"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell } from "lucide-react"

const notifications = [
  { id: 1, message: "New project proposal received", time: "5 minutes ago" },
  { id: 2, message: "Meeting scheduled for tomorrow", time: "1 hour ago" },
  { id: 3, message: "Task deadline approaching", time: "2 hours ago" },
]

export function NotificationCenter() {
  const [unreadCount, setUnreadCount] = useState(notifications.length)

  const handleNotificationClick = () => {
    setUnreadCount(0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cosmic-button relative">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="cosmic-card w-64">
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} onClick={handleNotificationClick}>
            <div className="flex flex-col">
              <span className="text-sm">{notification.message}</span>
              <span className="text-xs text-muted-foreground">{notification.time}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

