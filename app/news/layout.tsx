import { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Updates | Hubverse",
  description: "Stay up-to-date with the latest news, announcements, insights, and community updates from Hubverse.",
  openGraph: {
    title: "News & Updates | Hubverse",
    description: "Stay up-to-date with the latest news, announcements, insights, and community updates from Hubverse.",
    type: "website",
    siteName: "Hubverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | Hubverse",
    description: "Stay up-to-date with the latest news, announcements, insights, and community updates from Hubverse.",
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
