"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, Search, ArrowUp } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Breadcrumb } from "@/components/breadcrumb"

const showcaseItems = [
  { 
    name: "Anexo Learning Platform", 
    url: "https://anexo.example.com", 
    type: "Website", 
    category: "Education",
    description: "An AI-powered online learning platform offering personalized courses and real-time progress tracking.",
    features: ["Adaptive learning paths", "Interactive quizzes", "Video lectures", "Peer collaboration tools"]
  },
  { 
    name: "Fundex Marketing Dashboard", 
    url: "https://fundex.example.com", 
    type: "Web App", 
    category: "Marketing",
    description: "Comprehensive marketing analytics and campaign management tool for businesses of all sizes.",
    features: ["Real-time analytics", "Multi-channel campaign tracking", "A/B testing tools", "Automated reporting"]
  },
  { 
    name: "Elementalis Cloud Solution", 
    url: "https://elementalis.example.com", 
    type: "SaaS", 
    category: "Technology",
    description: "Scalable and secure cloud infrastructure solution with advanced management features.",
    features: ["Auto-scaling", "Multi-region support", "Advanced security protocols", "Integrated CI/CD pipelines"]
  },
  { 
    name: "Estore District Marketplace", 
    url: "https://estoredistrict.example.com", 
    type: "E-commerce", 
    category: "Retail",
    description: "A next-generation e-commerce platform connecting local businesses with global customers.",
    features: ["AI-powered product recommendations", "Integrated logistics", "Multi-currency support", "Virtual try-on technology"]
  },
  { 
    name: "Cosmo & Compass Booking System", 
    url: "https://cosmocompass.example.com", 
    type: "Web App", 
    category: "Real Estate",
    description: "Streamlined booking and management system for co-working spaces and short-term office rentals.",
    features: ["Real-time availability", "Virtual tours", "Integrated payment processing", "Space customization options"]
  },
  { 
    name: "ExoNet Business Intelligence Tool", 
    url: "https://exonet.example.com", 
    type: "SaaS", 
    category: "Business",
    description: "Advanced business intelligence platform offering deep insights and predictive analytics.",
    features: ["Data visualization", "Machine learning models", "Custom report builder", "Industry benchmarking"]
  },
  { 
    name: "Thryvus Financial Planner", 
    url: "https://thryvus.example.com", 
    type: "Web App", 
    category: "Finance",
    description: "Comprehensive financial planning and investment management tool for individuals and advisors.",
    features: ["Goal-based planning", "Portfolio optimization", "Tax-loss harvesting", "Retirement simulations"]
  },
  { 
    name: "Ponce Industries Inventory Management", 
    url: "https://ponceindustries.example.com", 
    type: "Enterprise Software", 
    category: "Manufacturing",
    description: "End-to-end inventory and supply chain management solution for manufacturing industries.",
    features: ["Real-time tracking", "Predictive maintenance", "Supplier management", "Just-in-time inventory optimization"]
  },
]

const categories = Array.from(new Set(showcaseItems.map(item => item.category)))

export default function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState(showcaseItems)
  const [isLoading, setIsLoading] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const filtered = showcaseItems.filter(item => 
        (selectedCategory === "all" || item.category === selectedCategory) &&
        (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      setFilteredItems(filtered)
      setIsLoading(false)
    }, 500) // Simulate loading delay

    return () => clearTimeout(timer)
  }, [selectedCategory, searchQuery])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Showcase", href: "/showcase" }
      ]} />

      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">Hubverse Showcase</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our innovative projects and subsidiaries across various industries
        </p>
      </motion.div>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search showcases..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search showcases"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-64"
          >
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.type} • {item.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 text-sm">
                        {item.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm" asChild className="mt-auto">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        Visit Project <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isLoading && filteredItems.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted-foreground mt-8"
        >
          No items found. Try adjusting your search or filter.
        </motion.p>
      )}

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

