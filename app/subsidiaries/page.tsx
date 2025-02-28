import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const subsidiaries = [
  {
    slug: "fundex",
    name: "FundEx",
    description: "Revolutionizing finance through DeFi solutions, blockchain-based investment platforms, and AI-driven robo-advisors.",
    category: "FinTech",
    highlights: ["DeFi Solutions", "Blockchain Investments", "AI Advisors"]
  },
  {
    slug: "anexo",
    name: "Anexo",
    description: "Leading sustainable energy solutions with next-gen solar technology, advanced energy storage, and smart grid innovations.",
    category: "Clean Energy",
    highlights: ["Solar Tech", "Energy Storage", "Smart Grid"]
  },
  {
    slug: "elementalis",
    name: "Elementalis",
    description: "Pushing boundaries in material science with graphene-based products, bio-inspired materials, and nanomaterials.",
    category: "Materials Science",
    highlights: ["Graphene Tech", "Bio-Materials", "Nanotech"]
  },
  {
    slug: "estore-district",
    name: "eStore District",
    description: "Redefining e-commerce with AI-powered shopping, AR/VR experiences, and blockchain supply chain tracking.",
    category: "E-Commerce",
    highlights: ["AI Shopping", "AR/VR", "Supply Chain"]
  },
  {
    slug: "cosmo-compass",
    name: "Cosmo Compass",
    description: "Making space accessible through reusable rockets, satellite constellations, and space tourism innovations.",
    category: "Space Tech",
    highlights: ["Space Launch", "Satellites", "Space Tourism"]
  },
  {
    slug: "exonet",
    name: "ExoNet",
    description: "Building future communication infrastructure with 6G networks, quantum internet, and IoT solutions.",
    category: "Communications",
    highlights: ["6G Network", "Quantum Internet", "IoT"]
  },
  {
    slug: "ponce",
    name: "Ponce",
    description: "Advancing AI with ethical development, quantum ML algorithms, and neuromorphic computing systems.",
    category: "Artificial Intelligence",
    highlights: ["Ethical AI", "Quantum ML", "Neural Computing"]
  },
  {
    slug: "thryvus",
    name: "Thryvus",
    description: "Pioneering biotechnology with CRISPR therapies, personalized medicine, and advanced medical solutions.",
    category: "Biotech",
    highlights: ["CRISPR", "Personalized Medicine", "BCI"]
  }
]

export default function SubsidiariesOverview() {
  return (
    <div className="container mx-auto p-6 text-foreground bg-background min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Hubverse Subsidiaries</h1>
        <p className="text-xl text-muted-foreground">
          Our network of innovative companies working together to shape the future across multiple industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subsidiaries.map((subsidiary) => (
          <Card key={subsidiary.slug} className="cosmic-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{subsidiary.category}</Badge>
              </div>
              <CardTitle className="text-primary">{subsidiary.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {subsidiary.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {subsidiary.highlights.map((highlight) => (
                  <Badge key={highlight} variant="outline">
                    {highlight}
                  </Badge>
                ))}
              </div>
              <Link href={`/business/subsidiaries/${subsidiary.slug}`} passHref>
                <Button className="w-full cosmic-button">
                  Explore {subsidiary.name}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
