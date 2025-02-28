"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Rocket, Target, BarChart, Users } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageFeedback } from "@/components/page-feedback"

export default function BlueprintProcess() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Our Process", href: "/blueprint-platform/process" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Process</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From idea to operational business in 5 streamlined steps
        </p>
      </motion.div>

      <div className="space-y-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              1. Client Onboarding & Vetting (1-2 weeks)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Complete our 5-minute questionnaire about your business idea</li>
              <li>We evaluate market viability (looking for TAM &gt; $1B)</li>
              <li>Sign Master Services Agreement (MSA) and Equity Agreement</li>
              <li>Initial strategy session to align vision and expectations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              2. Business Setup (2-4 weeks)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Legal: Incorporation, operating agreements, licenses, and permits</li>
              <li>Financial: Business bank accounts, accounting software setup, initial budgeting</li>
              <li>Tech: Domain registration, email setup, cloud hosting configuration</li>
              <li>Brand: Initial brand strategy, logo design, and brand guidelines</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Rocket className="mr-2 h-5 w-5" />
              3. Product Development (1-6 months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digital Products: No-code MVP development, API integrations, user testing</li>
              <li>Physical Products: Supplier sourcing, prototyping, quality control processes</li>
              <li>Service Businesses: Service design, workflow creation, client onboarding processes</li>
              <li>Iterative development with regular client feedback and adjustments</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2 h-5 w-5" />
              4. Go-to-Market (GTM) (1-3 months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Branding: Finalize logo, create website, develop social media assets</li>
              <li>Marketing: Develop marketing strategy, set up ad campaigns, plan content marketing</li>
              <li>Sales: Implement CRM, create sales funnels, set up cold email campaigns</li>
              <li>Customer Service: Establish support channels, create FAQ and knowledge base</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              5. Scale & Exit Prep (6-24 months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hiring: Recruit key team members via platforms like Upwork, onboard fractional executives</li>
              <li>Automation: Implement workflow and project management tools to increase efficiency</li>
              <li>Growth: Continuously optimize marketing and sales processes for scalable growth</li>
              <li>
                Investor Outreach: Prepare pitch decks, financial projections, and connect with potential investors
              </li>
              <li>Exit Strategy: Develop and refine exit strategies, whether through acquisition or IPO</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Why Our Process Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Efficiency:</strong> Our streamlined process eliminates wasted time and resources.
            </li>
            <li>
              <strong>Expertise:</strong> Each step is handled by specialists in their respective fields.
            </li>
            <li>
              <strong>Flexibility:</strong> We adapt our process to fit the unique needs of each business.
            </li>
            <li>
              <strong>Proven Track Record:</strong> Our process has successfully launched numerous businesses across
              various industries.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Let's turn your idea into a thriving business with our proven process.
        </p>
        <Button size="lg">
          Begin Your Blueprint Journey <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <PageFeedback />
    </div>
  )
}
