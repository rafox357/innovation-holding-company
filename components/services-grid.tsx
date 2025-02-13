"use client"

import { Globe, Lightbulb, BarChart } from "lucide-react"

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center cosmic-title">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Global Network */}
        <div className="p-8 cosmic-card rounded-lg">
          <Globe className="h-12 w-12 mb-6 cosmic-icon" />
          <h3 className="text-xl font-semibold mb-4 cosmic-text">Global Network</h3>
          <p className="text-muted-foreground">
            Connecting entrepreneurs with opportunities worldwide through our extensive network of partners and
            industry leaders.
          </p>
        </div>

        {/* Strategic Insights */}
        <div className="p-8 cosmic-card rounded-lg">
          <Lightbulb className="h-12 w-12 mb-6 cosmic-icon" />
          <h3 className="text-xl font-semibold mb-4 cosmic-text">Strategic Insights</h3>
          <p className="text-muted-foreground">
            Expert guidance and market intelligence to help businesses make informed decisions and achieve
            sustainable growth.
          </p>
        </div>

        {/* Market Access */}
        <div className="p-8 cosmic-card rounded-lg">
          <BarChart className="h-12 w-12 mb-6 cosmic-icon" />
          <h3 className="text-xl font-semibold mb-4 cosmic-text">Market Access</h3>
          <p className="text-muted-foreground">
            Strategic partnerships and resources to help businesses expand into new markets and capture emerging
            opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
