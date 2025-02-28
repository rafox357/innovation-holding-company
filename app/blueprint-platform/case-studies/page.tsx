import type { Metadata } from "next"
import { BlueprintLayout } from "@/components/blueprint-layout"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | Blueprint Platform",
  description: "Explore real-world applications and success stories of the Blueprint Platform.",
}

const caseStudies = [
  {
    title: "TechInnovate Corp",
    industry: "Technology",
    challenge: "Streamlining cross-department collaboration",
    solution: "Implemented Blueprint Platform to create a unified ecosystem",
    results: [
      "50% increase in project completion rate",
      "30% reduction in communication overhead",
      "Improved employee satisfaction scores",
    ],
  },
  {
    title: "GlobalFinance Ltd",
    industry: "Finance",
    challenge: "Enhancing customer experience across multiple products",
    solution: "Utilized Blueprint Platform to create a seamless customer journey",
    results: [
      "25% increase in customer retention",
      "40% reduction in customer support tickets",
      "Improved cross-selling opportunities",
    ],
  },
  {
    title: "HealthTech Innovations",
    industry: "Healthcare",
    challenge: "Integrating disparate systems for better patient care",
    solution: "Adopted Blueprint Platform to create an integrated healthcare ecosystem",
    results: [
      "60% faster patient data retrieval",
      "35% reduction in administrative tasks",
      "Improved accuracy in diagnoses",
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <BlueprintLayout>
      <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
      <p className="text-xl mb-8">
        Discover how organizations across various industries have successfully implemented the Blueprint Platform to
        transform their operations and achieve remarkable results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {caseStudies.map((study, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.industry}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h3 className="font-semibold mb-2">Challenge:</h3>
              <p className="mb-4">{study.challenge}</p>
              <h3 className="font-semibold mb-2">Solution:</h3>
              <p className="mb-4">{study.solution}</p>
              <h3 className="font-semibold mb-2">Results:</h3>
              <ul className="list-disc pl-5">
                {study.results.map((result, idx) => (
                  <li key={idx}>{result}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to Write Your Success Story?</h2>
        <p className="mb-4">
          Join the ranks of organizations that have revolutionized their operations with the Blueprint Platform. Let's
          discuss how we can tailor our solution to meet your unique needs.
        </p>
        <Button>
          Schedule a Consultation <ArrowRight className="ml-2" />
        </Button>
      </div>
    </BlueprintLayout>
  )
}
