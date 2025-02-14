import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { SessionProvider } from "@/components/auth/session-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Innovative Holding Company | Leading the Future",
    template: "%s | Hubverse",
  },
  description: "A visionary holding company pioneering innovation across multiple industries through strategic investments and technological advancement.",
  keywords: [
    "innovation",
    "technology",
    "investment",
    "research",
    "development",
    "future",
    "holding company",
  ],
  authors: [
    {
      name: "Hubverse",
      url: baseUrl,
    },
  ],
  creator: "Hubverse",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Innovative Holding Company | Leading the Future",
    description: "A visionary holding company pioneering innovation across multiple industries through strategic investments and technological advancement.",
    siteName: "Hubverse",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hubverse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubverse",
    description: "Where groundbreaking ideas meet cutting-edge technology.",
    images: ["/twitter-image.jpg"],
    creator: "@Hubverse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(poppins.variable, inter.variable)}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={baseUrl} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning className={cn(
        poppins.className,
        inter.variable,
        "min-h-screen bg-background font-sans antialiased overflow-x-hidden"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
