"use client"

import { Hero } from "@/components/hero"
import { InnovationHub } from "@/components/innovation-hub"
import { ServicesGrid } from "@/components/services-grid"
import { NewsSection } from "@/components/news-section"
import { FeaturedCompanies } from "@/components/featured-companies"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-20">
        {/* Innovation Hub Section */}
        <InnovationHub />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Latest News */}
        <NewsSection />

        {/* Featured Companies */}
        <FeaturedCompanies />

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  )
}
