"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { ArrowRight, Rocket, Globe, Lightbulb, Newspaper, Megaphone, BarChart, Users } from "lucide-react"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
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

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Innovation Hub */}
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <Rocket className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
          <p className="text-muted-foreground">
            Fostering breakthrough technologies and disruptive solutions.
          </p>
        </div>

        {/* Global Network */}
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <Globe className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Global Network</h3>
          <p className="text-muted-foreground">
            Connecting entrepreneurs with opportunities worldwide.
          </p>
        </div>

        {/* Strategic Insights */}
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <Lightbulb className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Strategic Insights</h3>
          <p className="text-muted-foreground">
            Expert guidance for sustainable business growth.
          </p>
        </div>

        {/* Market Access */}
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <BarChart className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Market Access</h3>
          <p className="text-muted-foreground">
            Opening doors to new markets and opportunities.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Link
            href="/news"
            className="flex items-center text-primary hover:text-primary/80"
          >
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Newspaper className="h-5 w-5 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">Press Release</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hubverse Expands Global Reach</h3>
              <p className="text-muted-foreground mb-4">
                New partnerships extend our network to emerging markets in Asia and Africa.
              </p>
              <Link
                href="/news/expansion"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Megaphone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">Announcement</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Fund Launch</h3>
              <p className="text-muted-foreground mb-4">
                $100M fund established to support early-stage technology startups.
              </p>
              <Link
                href="/news/innovation-fund"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">Community</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrepreneur Summit 2024</h3>
              <p className="text-muted-foreground mb-4">
                Annual gathering of innovators and industry leaders announced.
              </p>
              <Link
                href="/news/summit-2024"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Vision?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join our ecosystem of innovation and entrepreneurship.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
        >
          Explore Our Business <ArrowRight className="ml-2 h-4 w-4" />
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
