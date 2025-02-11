"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const companies = [
  {
    name: "Elementalis",
    description: "Sustainable Energy Solutions",
    logo: "/logos/elementalis.svg",
    href: "/business/subsidiaries/elementalis"
  },
  {
    name: "Fundex",
    description: "Financial Technology Innovation",
    logo: "/logos/fundex.svg",
    href: "/business/subsidiaries/fundex"
  },
  {
    name: "Thryvus",
    description: "Digital Health Platform",
    logo: "/logos/thryvus.svg",
    href: "/business/subsidiaries/thryvus"
  },
  {
    name: "Anexo",
    description: "Supply Chain Optimization",
    logo: "/logos/anexo.svg",
    href: "/business/subsidiaries/anexo"
  },
  {
    name: "E-Store District",
    description: "E-commerce Solutions",
    logo: "/logos/estore.svg",
    href: "/business/subsidiaries/estore-district"
  },
  {
    name: "Exonet",
    description: "Cloud Infrastructure",
    logo: "/logos/exonet.svg",
    href: "/business/subsidiaries/exonet"
  },
  {
    name: "Cosmo-Compass",
    description: "Navigation Solutions",
    logo: "/logos/cosmo-compass.svg",
    href: "/business/subsidiaries/cosmo-compass"
  },
  {
    name: "Ponce",
    description: "Digital Marketing",
    logo: "/logos/ponce.svg",
    href: "/business/subsidiaries/ponce"
  }
]

export function FeaturedCompanies() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link key={company.name} href={company.href}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{company.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
