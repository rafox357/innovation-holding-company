'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import { 
  Building, 
  ChevronRight,
  Rocket,
  Brain,
  LineChart,
  Globe2,
  ShoppingBag,
  Network,
  Building2,
  Briefcase
} from "lucide-react";

const subsidiaries = [
  {
    name: "Fundex",
    description: "Financial Technology Innovation",
    href: "/business/subsidiaries/fundex",
    icon: LineChart,
    status: "Active"
  },
  {
    name: "Elementalis",
    description: "Materials Science & Innovation",
    href: "/business/subsidiaries/elementalis",
    icon: Rocket,
    status: "Active"
  },
  {
    name: "Thryvus",
    description: "AI & Cognitive Systems",
    href: "/business/subsidiaries/thryvus",
    icon: Brain,
    status: "Active"
  },
  {
    name: "Anexo",
    description: "Strategic Investment Management",
    href: "/business/subsidiaries/anexo",
    icon: Building,
    status: "Active"
  },
  {
    name: "Cosmo & Compass",
    description: "Strategic Business Advisory",
    href: "/business/subsidiaries/cosmo-compass",
    icon: Briefcase,
    status: "Active"
  },
  {
    name: "Estore District",
    description: "E-commerce Solutions",
    href: "/business/subsidiaries/estore-district",
    icon: ShoppingBag,
    status: "Active"
  },
  {
    name: "Exonet",
    description: "Network Infrastructure",
    href: "/business/subsidiaries/exonet",
    icon: Network,
    status: "Active"
  },
  {
    name: "Ponce",
    description: "Real Estate Development",
    href: "/business/subsidiaries/ponce",
    icon: Building2,
    status: "Active"
  }
];

export default function SubsidiariesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Business", href: "/business" },
          { label: "Subsidiaries", href: "/business/subsidiaries" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 cosmic-title">Our Subsidiaries</h1>
        <p className="text-xl text-muted-foreground">
          Explore our diverse portfolio of innovative companies
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subsidiaries.map((subsidiary) => {
          const Icon = subsidiary.icon;
          return (
            <Link href={subsidiary.href} key={subsidiary.name}>
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle>{subsidiary.name}</CardTitle>
                    </div>
                    <Badge variant="outline">{subsidiary.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{subsidiary.description}</p>
                  <div className="flex items-center mt-4 text-primary">
                    <span className="mr-2">Learn more</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
