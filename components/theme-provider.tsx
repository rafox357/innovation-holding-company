"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ValueObject = {
  [key: string]: string
}

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  defaultTheme?: string
  storageKey?: string
  attribute?: string
  value?: ValueObject
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}) {
  return (
    <NextThemesProvider
      defaultTheme="dark"
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
