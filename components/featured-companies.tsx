"use client"

<<<<<<< HEAD
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
=======
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const companies = [
  {
    name: "TechVision AI",
    description: "Leading AI solutions for enterprise automation",
    logo: "/companies/techvision.svg",
    category: "Artificial Intelligence",
  },
  {
    name: "GreenEnergy Solutions",
    description: "Sustainable energy technology and infrastructure",
    logo: "/companies/greenenergy.svg",
    category: "Clean Tech",
  },
  {
    name: "HealthTech Innovations",
    description: "Revolutionary healthcare technology solutions",
    logo: "/companies/healthtech.svg",
    category: "Healthcare",
  },
  {
    name: "FinTech Global",
    description: "Next-generation financial technology platforms",
    logo: "/companies/fintech.svg",
    category: "Financial Technology",
  },
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702
]

export function FeaturedCompanies() {
  return (
    <section className="py-16">
<<<<<<< HEAD
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
=======
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio Companies</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          We invest in visionary companies that are reshaping industries and creating new possibilities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {companies.map((company, index) => (
          <Card key={company.name} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/50 p-4">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-full bg-primary/10">
                  {/* Replace with actual company logos */}
                  <div className="flex h-full w-full items-center justify-center text-primary">
                    {company.name[0]}
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {company.category}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl">{company.name}</CardTitle>
              <CardDescription className="mt-2.5">{company.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <Button size="lg">View All Portfolio Companies</Button>
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702
      </div>
    </section>
  )
}
