"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { ArrowRight, Globe, Lightbulb, Newspaper, Megaphone, BarChart, Users } from "lucide-react"
import { InnovationHub } from "@/components/innovation-hub/innovation-hub"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cosmic-title glow">
          Welcome to Hubverse
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering entrepreneurs and driving innovation
        </p>

        {/* Introduction Text */}
        <div className="prose prose-invert mx-auto max-w-3xl">
          <p className="text-lg mb-6">
            Hubverse is a pioneering holding company at the intersection of innovation and entrepreneurship. We
            cultivate groundbreaking ideas, nurture emerging businesses, and create synergies across our diverse
            portfolio of subsidiaries.
          </p>
          <p className="text-lg">
            Through our unique ecosystem, we combine technological advancement with sustainable business practices,
            fostering an environment where visionary entrepreneurs can transform their ideas into impactful
            enterprises.
          </p>
        </div>
      </section>

      {/* Innovation Hub Section */}
      <InnovationHub />

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        {/* Global Network */}
        <div className="p-6 cosmic-card rounded-lg">
          <Globe className="h-12 w-12 mb-4 cosmic-icon" />
          <h3 className="text-xl font-semibold mb-2 cosmic-text">Global Network</h3>
          <p className="text-muted-foreground">
            Connecting entrepreneurs with opportunities worldwide.
          </p>
        </div>

        {/* Strategic Insights */}
        <div className="p-6 cosmic-card rounded-lg">
          <Lightbulb className="h-12 w-12 mb-4 cosmic-icon" />
          <h3 className="text-xl font-semibold mb-2 cosmic-text">Strategic Insights</h3>
          <p className="text-muted-foreground">
            Expert guidance for sustainable business growth.
          </p>
        </div>

        {/* Market Access */}
        <div className="p-6 cosmic-card rounded-lg">
          <BarChart className="h-12 w-12 mb-4 cosmic-icon" />
          <h3 className="text-xl font-semibold mb-2 cosmic-text">Market Access</h3>
          <p className="text-muted-foreground">
            Opening doors to new markets and opportunities.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold cosmic-title">Latest News</h2>
          <Link
            href="/news"
            className="flex items-center cosmic-button px-4 py-2 rounded-lg"
          >
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <div className="cosmic-card rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Newspaper className="h-5 w-5 mr-2 cosmic-icon" />
                <span className="text-sm text-muted-foreground">Press Release</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 cosmic-text">Hubverse Expands Global Reach</h3>
              <p className="text-muted-foreground mb-4">
                New partnerships extend our network to emerging markets in Asia and Africa.
              </p>
              <Link
                href="/news/expansion"
                className="cosmic-button px-4 py-2 rounded-lg inline-block"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="cosmic-card rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Megaphone className="h-5 w-5 mr-2 cosmic-icon" />
                <span className="text-sm text-muted-foreground">Announcement</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 cosmic-text">Innovation Fund Launch</h3>
              <p className="text-muted-foreground mb-4">
                $100M fund established to support early-stage technology startups.
              </p>
              <Link
                href="/news/innovation-fund"
                className="cosmic-button px-4 py-2 rounded-lg inline-block"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="cosmic-card rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 mr-2 cosmic-icon" />
                <span className="text-sm text-muted-foreground">Community</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 cosmic-text">Entrepreneur Summit 2024</h3>
              <p className="text-muted-foreground mb-4">
                Annual gathering of innovators and industry leaders announced.
              </p>
              <Link
                href="/news/summit-2024"
                className="cosmic-button px-4 py-2 rounded-lg inline-block"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4 cosmic-title">Ready to Transform Your Vision?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join our ecosystem of innovation and entrepreneurship.
        </p>
        <Link
          href="/contact"
          className="cosmic-button px-8 py-4 text-lg rounded-lg inline-flex items-center"
        >
          Explore Our Business <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      {/* Theme Test Section */}
      <section className="border-t pt-8 mt-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Theme Settings</h2>
          <p className="mb-4">Current theme: {theme}</p>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Toggle theme
          </button>
        </div>
      </section>
    </div>
  )
}
