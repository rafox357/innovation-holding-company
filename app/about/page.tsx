import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About Hubverse",
  description: "Learn about Hubverse, our mission, values, and team",
}

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Visionary leader with 15+ years of experience in tech and entrepreneurship.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Tech innovator with a passion for cutting-edge solutions and scalable architectures.",
  },
  {
    name: "Mike Johnson",
    role: "CFO",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Financial expert with a track record of driving growth and optimizing operations.",
  },
]

const values = [
  { name: "Innovation", description: "Pushing boundaries and embracing new ideas" },
  { name: "Collaboration", description: "Fostering teamwork and open communication" },
  { name: "Integrity", description: "Upholding the highest ethical standards in all we do" },
  { name: "Excellence", description: "Striving for the best in every aspect of our work" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 cosmic-title glow">About Hubverse</h1>

      <Card className="cosmic-card mb-8">
        <CardHeader>
          <CardTitle className="cosmic-title text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To empower entrepreneurs and drive innovation through our comprehensive ecosystem of services and solutions,
            creating value for our stakeholders and positively impacting the global business landscape.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4 cosmic-title">Our Values</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {values.map((value) => (
          <Card key={value.name} className="cosmic-card">
            <CardHeader>
              <CardTitle className="cosmic-title text-xl">{value.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 cosmic-title">Our Team</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="cosmic-card">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="cosmic-title text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1 cosmic-button">
                    {member.role}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

