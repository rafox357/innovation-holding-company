"use client";

import { Suspense } from "react";
import Loading from "@/components/ui/loading";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero/hero-section"
import { FeaturedCompanies } from "@/components/featured-companies"
import { InvestorRelations } from "@/components/investor-relations"
import { LaunchpadSection } from "@/components/launchpad-section"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="font-poppins text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Innovating for a{" "}
                  <span className="text-gradient">
                    Better Future
                  </span>
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                  We invest in groundbreaking technologies and visionary companies that shape tomorrow's innovations.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-medium">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border-0 bg-gradient-primary text-white p-8">
                  <div className="text-4xl font-bold">$500M+</div>
                  <div className="mt-2 text-sm text-white/90">Assets Under Management</div>
                </div>
                <div className="rounded-xl border-0 bg-gradient-secondary text-white p-8">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="mt-2 text-sm text-white/90">Portfolio Companies</div>
                </div>
                <div className="rounded-xl border-0 bg-gradient-secondary text-white p-8">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="mt-2 text-sm text-white/90">Years Experience</div>
                </div>
                <div className="rounded-xl border-0 bg-gradient-primary text-white p-8">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="mt-2 text-sm text-white/90">Innovation Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="container py-24 md:py-32">
        <Suspense fallback={<Loading />}>
          <FeaturedCompanies />
        </Suspense>
      </section>

      {/* Investment Opportunities */}
      <section className="container py-24 md:py-32 bg-muted/50">
        <Suspense fallback={<Loading />}>
          <InvestorRelations />
        </Suspense>
      </section>

      {/* Innovation Launchpad */}
      <section className="container py-24 md:py-32">
        <Suspense fallback={<Loading />}>
          <LaunchpadSection />
        </Suspense>
      </section>

      {/* Contact CTA */}
      <section className="container py-24 md:py-32">
        <Suspense fallback={<Loading />}>
          <ContactCTA />
        </Suspense>
      </section>
    </main>
  )
}
