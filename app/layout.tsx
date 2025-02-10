import { Poppins } from "next/font/google"
import { ClientLayout } from "@/components/client-layout"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
