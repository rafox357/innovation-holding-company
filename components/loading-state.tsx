"use client"

import { memo } from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingStateProps {
  className?: string
  text?: string
}

export const LoadingState = memo(({ className, text = "Loading..." }: LoadingStateProps) => (
  <div className={cn("flex min-h-[400px] w-full items-center justify-center", className)}>
    <div className="text-center">
      <Loader2 className="mx-auto h-8 w-8 animate-spin text-muted-foreground" />
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  </div>
))
LoadingState.displayName = "LoadingState"
