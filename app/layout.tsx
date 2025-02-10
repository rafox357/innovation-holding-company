import { Poppins } from "next/font/google"
import { ClientLayout } from "@/components/client-layout"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata = {
  title: {
    default: "Hubverse - Innovation Holding Company",
    template: "%s | Hubverse"
  },
  description: "A pioneering holding company at the intersection of innovation and entrepreneurship.",
  keywords: [
    "Innovation",
    "Technology",
    "Entrepreneurship",
    "Business",
    "Startups",
    "Digital Transformation",
    "Investment",
    "Venture Capital",
    "Tech Solutions",
    "Business Growth"
  ],
  authors: [{ name: "Hubverse" }],
  creator: "Hubverse",
  publisher: "Hubverse",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hubverse.com",
    title: "Hubverse - Innovation Holding Company",
    description: "A pioneering holding company at the intersection of innovation and entrepreneurship.",
    siteName: "Hubverse"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubverse - Innovation Holding Company",
    description: "A pioneering holding company at the intersection of innovation and entrepreneurship.",
    creator: "@hubverse"
  }
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
