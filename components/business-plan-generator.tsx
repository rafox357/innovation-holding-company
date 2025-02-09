"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function BusinessPlanGenerator() {
  const [businessPlan, setBusinessPlan] = useState({
    companyName: "",
    industry: "",
    mission: "",
    productDescription: "",
    targetMarket: "",
    competitiveAdvantage: "",
    financialProjections: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setBusinessPlan(prev => ({ ...prev, [field]: value }))
  }

  const generateBusinessPlan = () => {
    // In a real application, this would use AI to generate content based on user input
    console.log("Generating business plan:", businessPlan)
    // Simulated AI-generated content
    alert("Business plan generated successfully! Check the console for details.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Plan Generator</CardTitle>
        <CardDescription>Create a comprehensive business plan with AI assistance</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={businessPlan.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              placeholder="Enter your company name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Input
              id="industry"
              value={businessPlan.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              placeholder="Enter your industry"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mission">Mission Statement</Label>
            <Textarea
              id="mission"
              value={businessPlan.mission}
              onChange={(e) => handleInputChange('mission', e.target.value)}
              placeholder="Describe your company's mission"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="productDescription">Product/Service Description</Label>
            <Textarea
              id="productDescription"
              value={businessPlan.productDescription}
              onChange={(e) => handleInputChange('productDescription', e.target.value)}
              placeholder="Describe your product or service"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="targetMarket">Target Market</Label>
            <Textarea
              id="targetMarket"
              value={businessPlan.targetMarket}
              onChange={(e) => handleInputChange('targetMarket', e.target.value)}
              placeholder="Describe your target market"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="competitiveAdvantage">Competitive Advantage</Label>
            <Textarea
              id="competitiveAdvantage"
              value={businessPlan.competitiveAdvantage}
              onChange={(e) => handleInputChange('competitiveAdvantage', e.target.value)}
              placeholder="Describe your competitive advantage"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="financialProjections">Financial Projections</Label>
            <Textarea
              id="financialProjections"
              value={businessPlan.financialProjections}
              onChange={(e) => handleInputChange('financialProjections', e.target.value)}
              placeholder="Provide an overview of your financial projections"
            />
          </div>
          <Button onClick={generateBusinessPlan} className="w-full">
            Generate Business Plan
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

