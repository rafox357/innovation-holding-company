import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Hubverse - Empowering Entrepreneurs and Driving Innovation",
  description: "Hubverse is a comprehensive ecosystem of services and solutions for entrepreneurs and businesses across multiple sectors.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
