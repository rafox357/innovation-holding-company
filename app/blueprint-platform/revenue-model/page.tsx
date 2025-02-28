"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, TrendingUp, Briefcase } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageFeedback } from "@/components/page-feedback"

export default function RevenueModel() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "Revenue Model", href: "/blueprint-platform/revenue-model" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Blueprint Platform Revenue Model</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A transparent approach that aligns our success with yours
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Upfront Fees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We charge $50k-$200k to cover all setup costs plus our 30% margin.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Covers legal setup, product development, and initial marketing</li>
              <li>Tailored to the complexity and needs of your specific business</li>
              <li>Transparent breakdown of costs provided before engagement</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              Equity Stakes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We retain 15% equity in every business we launch.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aligns our long-term interests with your success</li>
              <li>Motivates us to provide ongoing support and resources</li>
              <li>Potential for significant returns as your business grows</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Partnership Commissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We negotiate kickbacks from software vendors, banks, and service providers.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Leverages our network to get you better deals</li>
              <li>Reduces your operational costs</li>
              <li>Provides additional revenue stream for ongoing support</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profit Margins</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Business Type</th>
                  <th className="text-left">Client Fee</th>
                  <th className="text-left">Our Cost</th>
                  <th className="text-left">Margin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SaaS Startup</td>
                  <td>$65k-$100k</td>
                  <td>$45k</td>
                  <td>30-40%</td>
                </tr>
                <tr>
                  <td>E-Commerce Brand</td>
                  <td>$50k-$80k</td>
                  <td>$35k</td>
                  <td>35-45%</td>
                </tr>
                <tr>
                  <td>Consulting Firm</td>
                  <td>$30k-$50k</td>
                  <td>$15k</td>
                  <td>50-60%</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Why Our Model Works</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Aligned Interests:</strong> Our equity stake ensures we're committed to your long-term success.
            </li>
            <li>
              <strong>Reduced Risk:</strong> You benefit from our expertise and network, minimizing costly mistakes.
            </li>
            <li>
              <strong>Scalability:</strong> Our model allows us to support multiple businesses simultaneously, creating
              a portfolio effect.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Lessons learned from each project improve our processes and
              increase success rates.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Business?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join the Blueprint Platform and turn your idea into a thriving business with our proven model.
        </p>
        <Button size="lg">
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <PageFeedback />
    </div>
  )
}

