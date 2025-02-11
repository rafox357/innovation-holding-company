"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const companies = [
  {
    name: "Fundex",
    logo: "/companies/fundex.svg",
    description: "Revolutionizing financial technology solutions",
    status: "Active",
    link: "/companies/fundex",
  },
  {
    name: "Elementalis",
    logo: "/companies/elementalis.svg",
    description: "Sustainable energy and environmental solutions",
    status: "Active",
    link: "/companies/elementalis",
  },
  {
    name: "Thryvus",
    logo: "/companies/thryvus.svg",
    description: "Digital health and wellness platform",
    status: "Active",
    link: "/companies/thryvus",
  },
  {
    name: "Anexo",
    logo: "/companies/anexo.svg",
    description: "Next-generation data analytics",
    status: "Active",
    link: "/companies/anexo",
  },
  {
    name: "Estore",
    logo: "/companies/estore.svg",
    description: "E-commerce solutions and logistics",
    status: "Active",
    link: "/companies/estore",
  },
  {
    name: "Exonet",
    logo: "/companies/exonet.svg",
    description: "Advanced networking and cybersecurity",
    status: "Active",
    link: "/companies/exonet",
  },
]

export function FeaturedCompanies() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center cosmic-title">Our Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company) => (
          <Link key={company.name} href={company.link}>
            <Card className="p-6 cosmic-card hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="relative h-12 w-12">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <Badge variant="secondary">{company.status}</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
              <p className="text-muted-foreground">{company.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
