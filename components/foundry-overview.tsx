import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function FoundryOverview() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Foundry: Shaping the Future of Hubverse</CardTitle>
          <CardDescription>
            Explore the engine of innovation driving Hubverse. Discover upcoming projects, technologies, and initiatives
            across our diverse portfolio of companies.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Foundry is a dynamic hub where ideas are forged into reality. This page provides a comprehensive
            overview of the groundbreaking projects, services, and products under development across all Hubverse
            subsidiaries. Dive deep into our strategic roadmap, explore the resources empowering our teams, and witness
            the journey of each project from ideation to launch.
          </p>
          <p>
            Our vision is to create a seamless ecosystem where each company supports and amplifies the others, driving
            innovation and creating unparalleled value. We strive for a future defined by sustainability, accessibility,
            and human-centric technological advancement.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

