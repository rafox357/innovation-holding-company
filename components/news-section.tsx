"use client"

import { Newspaper, Megaphone, Users } from "lucide-react"
import Link from "next/link"

export default function NewsSection() {
  return (
    <section className="py-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold cosmic-title">Latest News</h2>
        <Link href="/news" className="cosmic-button px-6 py-3 rounded-lg inline-flex items-center">
          View All News
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* News Card 1 */}
        <div className="cosmic-card rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Newspaper className="h-5 w-5 mr-2 cosmic-icon" />
              <span className="text-sm text-muted-foreground">Press Release</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 cosmic-text">Hubverse Expands Global Reach</h3>
            <p className="text-muted-foreground mb-6">
              New partnerships extend our network to emerging markets in Asia and Africa, creating unprecedented
              opportunities for growth and collaboration.
            </p>
            <Link href="/news/expansion" className="cosmic-button px-4 py-2 rounded-lg inline-block">
              Read More →
            </Link>
          </div>
        </div>

        {/* News Card 2 */}
        <div className="cosmic-card rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Megaphone className="h-5 w-5 mr-2 cosmic-icon" />
              <span className="text-sm text-muted-foreground">Announcement</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 cosmic-text">Innovation Fund Launch</h3>
            <p className="text-muted-foreground mb-6">
              $100M fund established to support early-stage technology startups, focusing on sustainable solutions
              and breakthrough technologies.
            </p>
            <Link href="/news/innovation-fund" className="cosmic-button px-4 py-2 rounded-lg inline-block">
              Read More →
            </Link>
          </div>
        </div>

        {/* News Card 3 */}
        <div className="cosmic-card rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Users className="h-5 w-5 mr-2 cosmic-icon" />
              <span className="text-sm text-muted-foreground">Community</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 cosmic-text">Entrepreneur Summit 2024</h3>
            <p className="text-muted-foreground mb-6">
              Join industry leaders and innovators at our annual gathering to explore the future of
              entrepreneurship and technology.
            </p>
            <Link href="/news/summit-2024" className="cosmic-button px-4 py-2 rounded-lg inline-block">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
