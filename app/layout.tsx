import { Poppins } from "next/font/google"
import "./globals.css"

import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { registerServiceWorker } from "./sw"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Hubverse - Innovation Holding Company",
  description: "A pioneering holding company at the intersection of innovation and entrepreneurship.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    registerServiceWorker()
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${poppins.className}`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="cosmic-layout">
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
