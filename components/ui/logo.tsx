"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  showText?: boolean
  size?: number
}

export function Logo({ showText = true, size = 40, className, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/logo.svg"
          alt="Hubverse Logo"
          width={size}
          height={size}
          className="dark:invert"
          priority
        />
      </div>
      {showText && (
        <span className="font-semibold text-xl tracking-tight">Hubverse</span>
      )}
    </div>
  )
}
