"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20">
      <div className="cosmic-card p-12 text-center rounded-xl">
        <h2 className="text-3xl font-bold mb-6 cosmic-title">Ready to Join Our Innovation Journey?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're an entrepreneur looking to scale your business or an investor seeking opportunities,
          we're here to help you succeed.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button className="cosmic-button px-8 py-6 text-lg">
              Get in Touch <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
