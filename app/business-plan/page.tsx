"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { RevenueChart } from "@/components/revenue-chart"
import { TableOfContents } from "@/components/table-of-contents"

import { ChevronUp } from "lucide-react"

const sections = [
  { id: "executive-summary", title: "Executive Summary" },
  { id: "company-description", title: "Company Description" },
  { id: "products-and-services", title: "Products and Services" },
  { id: "market-analysis", title: "Market Analysis" },
  { id: "marketing-and-sales", title: "Marketing and Sales Strategy" },
  { id: "operations-plan", title: "Operations Plan" },
  { id: "management-team", title: "Management Team" },
  { id: "financial-plan", title: "Financial Plan" },
  { id: "networking", title: "Networking" },
  { id: "industries-covered", title: "Industries Covered" },
  { id: "business-setup", title: "Business Setup" },
  { id: "expansion-plans", title: "Expansion Plans" },
  { id: "appendix", title: "Appendix" },
  { id: "key-metrics", title: "Key Metrics" },
]

export default function BusinessPlan() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [progress, setProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setProgress(scrollPercent * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScrollVisibility)
    return () => window.removeEventListener("scroll", handleScrollVisibility)
  }, [])

  return (
    <div className="space-y-12">
      <motion.section
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl cosmic-title glow">Hubverse Business Plan</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our comprehensive strategy for empowering entrepreneurs and driving innovation
        </p>
      </motion.section>

      <div className="sticky top-0 bg-background z-10 pb-4 w-full">
        <div className="h-1 bg-primary-foreground">
          <div className="h-1 bg-primary transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <Tabs
          defaultValue={sections[0].id}
          value={activeSection}
          onValueChange={(value) => {
            setActiveSection(value)
            const element = document.getElementById(value)
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
          className="w-full"
        >
          <div className="w-full overflow-x-auto pb-2">
            <TabsList className="flex space-x-2 p-1 mb-2 min-w-max">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="text-sm whitespace-nowrap px-3 py-1.5 flex-shrink-0"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>
      <div className="w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <TableOfContents items={sections.map((section) => ({ ...section, level: 2 }))} />
            <main className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderSection(activeSection)}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

function renderSection(sectionId: string) {
  const Component = sectionComponents[sectionId]
  return Component ? (
    <div className="max-w-4xl mx-auto">
      <div className="gradient-container">
        <Component />
      </div>
    </div>
  ) : null
}

const sectionComponents: Record<string, () => JSX.Element> = {
  "executive-summary": ExecutiveSummary,
  "company-description": CompanyDescription,
  "products-and-services": ProductsAndServices,
  "market-analysis": MarketAnalysis,
  "marketing-and-sales": MarketingAndSales,
  "operations-plan": OperationsPlan,
  "management-team": ManagementTeam,
  "financial-plan": FinancialPlan,
  "networking": Networking,
  "industries-covered": IndustriesCovered,
  "business-setup": BusinessSetupAndStructure,
  "expansion-plans": ExpansionPlans,
  "appendix": Appendix,
  "key-metrics": KeyMetrics,
}

function ExecutiveSummary() {
  return (
    <Card id="executive-summary" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Executive Summary</CardTitle>
        <CardDescription>An overview of Hubverse and its mission</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Mission</h3>
          <p>
            To empower entrepreneurs and individuals by providing a comprehensive and integrated ecosystem of resources,
            tools, and support, fostering innovation and making entrepreneurial success accessible to all.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Vision</h3>
          <p>
            To be the leading global ecosystem empowering individuals to transform their entrepreneurial dreams into
            reality, fostering a world where innovation thrives and opportunities are accessible to all.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Company Description</h3>
          <p>
            Hubverse is a holding company with eight subsidiaries operating across diverse sectors, all focused on
            supporting entrepreneurs and businesses.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="subsidiaries">
            <AccordionTrigger>Subsidiaries</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Anexo:</span> Online education platform
                </li>
                <li>
                  <span className="font-semibold">Fundex:</span> Digital marketing agency
                </li>
                <li>
                  <span className="font-semibold">Elementalis:</span> Technology solutions provider
                </li>
                <li>
                  <span className="font-semibold">Estore District:</span> Online store for Hubverse products
                </li>
                <li>
                  <span className="font-semibold">Cosmo & Compass Co.:</span> Real estate and co-working spaces
                </li>
                <li>
                  <span className="font-semibold">ExoNet:</span> Business consulting services
                </li>
                <li>
                  <span className="font-semibold">Thryvus & Co.:</span> Financial services
                </li>
                <li>
                  <span className="font-semibold">Ponce Industries:</span> Manufacturing, warehousing, logistics, and
                  supply chain
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div>
          <h3 className="font-semibold text-primary">Financial Projections</h3>
          <p>$3,188,275 total estimated startup costs for the first year. Seeking $2.2 million in external funding.</p>
        </div>
        <RevenueChart />
      </CardContent>
    </Card>
  )
}

function CompanyDescription() {
  return (
    <Card id="company-description" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Company Description</CardTitle>
        <CardDescription>Details about Hubverse's structure and values</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Legal Structure</h3>
          <p>
            Hubverse is a holding company, incorporated in Delaware, operating as an S-Corp. Subsidiaries will be LLCs.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Location</h3>
          <p>Initial operations in Nevada (Las Vegas area), with potential for expansion to other locations.</p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Values</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">Empowerment</Badge>
            <Badge variant="secondary">Innovation</Badge>
            <Badge variant="secondary">Collaboration</Badge>
            <Badge variant="secondary">Integrity</Badge>
            <Badge variant="secondary">Impact</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProductsAndServices() {
  const subsidiaries = [
    {
      name: "Anexo",
      services: [
        "Online courses in various entrepreneurial topics",
        "Live webinars and workshops",
        "Mentorship programs",
        "Downloadable resources",
        "Tiered subscription model and individual course purchases",
      ],
    },
    {
      name: "Fundex",
      services: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Marketing",
        "Content Creation and Marketing",
        "Email Marketing",
        "Branding and Design Services",
        "Website Development and Design",
        "Market Research and Analysis",
      ],
    },
    {
      name: "Elementalis",
      services: [
        "Cloud Hosting and Storage Solutions",
        "Cybersecurity Services",
        "Custom Software Development",
        "IT Support and Maintenance",
        "Data Analytics and Business Intelligence Tools",
        "In-house development of CRM, Project Management, and Communications tools",
      ],
    },
    {
      name: "Estore District",
      services: ["Online marketplace for Hubverse-created products (hardware, merchandise)"],
    },
    {
      name: "Cosmo & Compass Co.",
      services: [
        "Flexible co-working memberships",
        "Private office rentals",
        "Meeting room bookings",
        "Event space rentals",
        "Future expansion into residential real estate",
      ],
    },
    {
      name: "ExoNet",
      services: [
        "Business Plan Development",
        "Financial Modeling and Analysis",
        "Market Research and Analysis",
        "Operational Efficiency Consulting",
        "Strategic Planning Workshops",
        "Internal Management Program to promote other Hubverse subsidiaries",
      ],
    },
    {
      name: "Thryvus & Co.",
      services: ["Small Business Loans", "Business Insurance", "Connections to Angel Investors and/or Crowdfunding"],
    },
    {
      name: "Ponce Industries",
      services: [
        "Manufacturing of hardware for Estore District and potentially other subsidiaries",
        "Warehousing, logistics, and supply chain management for Hubverse subsidiaries",
      ],
    },
  ]

  return (
    <Card id="products-and-services" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Products and Services</CardTitle>
        <CardDescription>Detailed description of each subsidiary's offerings</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {subsidiaries.map((subsidiary, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{subsidiary.name}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {subsidiary.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>{service}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

function MarketAnalysis() {
  return (
    <Card id="market-analysis" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Market Analysis</CardTitle>
        <CardDescription>
          Comprehensive overview of target markets, industry trends, and competitive landscape
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Target Markets</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aspiring entrepreneurs and startups</li>
            <li>Small and medium-sized enterprises (SMEs)</li>
            <li>Freelancers and gig economy workers</li>
            <li>Corporate innovation teams</li>
            <li>Educational institutions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Industry Trends</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rapid growth of the global startup ecosystem</li>
            <li>Increasing demand for remote work solutions</li>
            <li>Rise of the gig economy and freelance marketplaces</li>
            <li>Growing importance of sustainability and social responsibility</li>
            <li>Accelerating digital transformation across industries</li>
            <li>Emergence of new technologies (AI, blockchain, IoT)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Market Size and Projections</h3>
          <p>
            The global startup ecosystem is valued at $3 trillion as of 2023, with projections to reach $4.5 trillion by
            2028. The market for business support services is expected to grow at a CAGR of 8.5% from 2023 to 2028.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Competitive Landscape</h3>
          <p>
            While there are numerous players in individual segments (e.g., online education, co-working spaces, digital
            marketing), Hubverse's unique value proposition lies in its integrated ecosystem approach, offering a
            comprehensive suite of services through its subsidiaries.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">SWOT Analysis</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="strengths">
              <AccordionTrigger>Strengths</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integrated ecosystem of services</li>
                  <li>Diverse portfolio of subsidiaries</li>
                  <li>Strong focus on innovation and emerging technologies</li>
                  <li>Scalable business model</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="weaknesses">
              <AccordionTrigger>Weaknesses</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Complex organizational structure</li>
                  <li>Dependence on multiple market segments</li>
                  <li>Potential for resource spread across subsidiaries</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="opportunities">
              <AccordionTrigger>Opportunities</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Expansion into emerging markets</li>
                  <li>Strategic acquisitions to enhance service offerings</li>
                  <li>Development of proprietary technologies</li>
                  <li>Partnerships with educational institutions and corporations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="threats">
              <AccordionTrigger>Threats</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Intense competition in individual market segments</li>
                  <li>Rapid technological changes</li>
                  <li>Economic downturns affecting entrepreneurship rates</li>
                  <li>Regulatory challenges in different jurisdictions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}

function MarketingAndSales() {
  return (
    <Card id="marketing-and-sales" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Marketing and Sales Strategy</CardTitle>
        <CardDescription>Overall marketing strategy and go-to-market plan</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Overall Marketing Strategy</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Leverage Fundex for marketing all subsidiaries</li>
            <li>Cross-promote services between subsidiaries</li>
            <li>Build a strong online presence through content marketing, social media, and SEO</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Go-to-Market Strategy (Phase 1)</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="anexo">
              <AccordionTrigger>Anexo</AccordionTrigger>
              <AccordionContent>
                Focus on content marketing, social media engagement, and partnerships with universities and
                entrepreneurship organizations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fundex">
              <AccordionTrigger>Fundex</AccordionTrigger>
              <AccordionContent>
                Leverage personal network for initial clients, build case studies, and develop a strong online presence.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="elementalis">
              <AccordionTrigger>Elementalis</AccordionTrigger>
              <AccordionContent>
                Focus on providing services to other Hubverse subsidiaries, develop internal tools, and build a
                portfolio of work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}

function OperationsPlan() {
  return (
    <Card id="operations-plan" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Operations Plan</CardTitle>
        <CardDescription>Phased launch plan, technology infrastructure, and shared resources</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Phased Launch Plan</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="phase1">
              <AccordionTrigger>Phase 1 (Months 1-3): Foundation</AccordionTrigger>
              <AccordionContent>Focus on Hubverse, Elementalis, Fundex, and Anexo.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="phase2">
              <AccordionTrigger>Phase 2 (Months 4-6): Expansion</AccordionTrigger>
              <AccordionContent>Launch Estore District and ExoNet; plan for Ponce Industries.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="phase3">
              <AccordionTrigger>Phase 3 (Months 7-9): Scaling</AccordionTrigger>
              <AccordionContent>
                Begin research and development for Cosmo & Compass Co. and Thryvus & Co.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="phase4">
              <AccordionTrigger>Phase 4 (Months 10-12): Full Operation</AccordionTrigger>
              <AccordionContent>
                Launch Cosmo & Compass Co. and Thryvus & Co. Begin operations for Ponce Industries.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Technology Infrastructure</h3>
          <p>
            Elementalis will build and maintain the core IT infrastructure for Hubverse, with an emphasis on in-house
            development of internal tools (CRM, project management, communication).
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Shared Resources</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fundex will provide marketing services to all subsidiaries</li>
            <li>Elementalis will provide technology support to all subsidiaries</li>
            <li>ExoNet will offer consulting services to other subsidiaries</li>
            <li>Hubverse will provide legal, HR, and administrative support to all subsidiaries</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function ManagementTeam() {
  const teamMembers = [
    { title: "CEO of Hubverse", description: "Founder and visionary, responsible for overall strategy and direction." },
    { title: "COO", description: "Oversees day-to-day operations of Hubverse." },
    { title: "CFO", description: "Manages finances and investor relations." },
    { title: "General Counsel", description: "Provides legal guidance and support." },
    { title: "HR Manager", description: "Handles human resources for Hubverse." },
    { title: "CTO (Elementalis)", description: "Leads technology development." },
    { title: "Head of Content (Anexo)", description: "Oversees curriculum development." },
    { title: "Head of Strategy (Fundex)", description: "Develops marketing strategies." },
    { title: "Head of Client Services (Fundex)", description: "Manages client relationships." },
  ]

  return (
    <Card id="management-team" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Management Team</CardTitle>
        <CardDescription>Key roles and responsibilities within Hubverse</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{member.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function FinancialPlan() {
  return (
    <Card id="financial-plan" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Financial Plan</CardTitle>
        <CardDescription>Funding request, use of funds, and financial projections</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Funding Request</h3>
          <p>
            $3,188,275 (total startup costs for year one) - Seeking $2.2 million in external funding (the difference
            from the already spent $500,000, plus $500,000 seed money).
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Use of Funds</h3>
          <p>$2,584,100 will be allocated to the subsidiaries. The rest will cover Hubverse's operating costs.</p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Financial Projections</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Revenue projections for each subsidiary</li>
            <li>Expense budgets for each subsidiary</li>
            <li>Projected Profit & Loss statements</li>
            <li>Cash flow projections</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Exit Strategy</h3>
          <p>Potential acquisition of individual subsidiaries or IPO of Hubverse.</p>
        </div>
      </CardContent>
    </Card>
  )
}

function Networking() {
  return (
    <Card id="networking" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Networking and Partnerships</CardTitle>
        <CardDescription>Building a strong ecosystem through strategic relationships</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Strategic Alliances</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Partnerships with leading universities for talent acquisition and research collaboration</li>
            <li>Alliances with established corporations for mentorship and potential client referrals</li>
            <li>Collaborations with industry-specific accelerators and incubators</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Events and Conferences</h3>
          <p>
            Regular hosting of networking events, workshops, and conferences to foster connections within the Hubverse
            ecosystem and broader entrepreneurial community.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Online Community</h3>
          <p>
            Development of a proprietary online platform for Hubverse clients and partners to connect, share insights,
            and collaborate on projects.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Mentorship Program</h3>
          <p>
            Establishment of a mentorship network connecting experienced entrepreneurs and industry experts with
            startups and emerging businesses within the Hubverse ecosystem.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function IndustriesCovered() {
  return (
    <Card id="industries-covered" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Industries Covered</CardTitle>
        <CardDescription>Diverse sectors supported by the Hubverse ecosystem</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Primary Focus Areas</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Technology and Software Development</li>
            <li>E-commerce and Digital Retail</li>
            <li>FinTech and Financial Services</li>
            <li>EdTech and Online Learning</li>
            <li>HealthTech and Biotech</li>
            <li>Sustainability and Clean Energy</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Internet of Things (IoT) and Smart Devices</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Emerging Sectors</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Space Technology and Exploration</li>
            <li>Augmented and Virtual Reality</li>
            <li>Quantum Computing</li>
            <li>Robotics and Automation</li>
            <li>Sustainable Agriculture and FoodTech</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Industry-Specific Support</h3>
          <p>
            Each subsidiary within Hubverse is equipped to provide tailored support and resources for businesses across
            these diverse industries, leveraging industry-specific expertise and networks.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function BusinessSetupAndStructure() {
  return (
    <Card id="business-setup" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Business Setup and Structure</CardTitle>
        <CardDescription>Organizational framework of Hubverse and its subsidiaries</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Holding Company Structure</h3>
          <p>
            Hubverse operates as a holding company, providing strategic oversight, shared resources, and financial
            support to its subsidiaries.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Subsidiary Autonomy</h3>
          <p>
            Each subsidiary operates with a degree of autonomy, allowing for agility and industry-specific focus while
            benefiting from the broader Hubverse ecosystem.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Shared Services</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Centralized HR and talent acquisition</li>
            <li>Shared IT infrastructure and cybersecurity</li>
            <li>Legal and compliance support</li>
            <li>Financial management and reporting</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Cross-Subsidiary Collaboration</h3>
          <p>
            Encouragement of knowledge sharing, resource pooling, and collaborative projects across subsidiaries to
            drive innovation and efficiency.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Governance Structure</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Board of Directors overseeing Hubverse and providing strategic guidance</li>
            <li>Executive leadership team managing day-to-day operations</li>
            <li>Subsidiary-level management teams with industry-specific expertise</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function ExpansionPlans() {
  return (
    <Card id="expansion-plans" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Expansion Plans</CardTitle>
        <CardDescription>Strategic growth initiatives for Hubverse and its subsidiaries</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Geographic Expansion</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Phased expansion into key international markets, starting with Europe and Asia</li>
            <li>Establishment of regional hubs to support localized operations and cultural adaptation</li>
            <li>Strategic partnerships with local entities to facilitate market entry</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">New Subsidiary Development</h3>
          <p>
            Ongoing research and development to identify emerging markets and technologies for potential new
            subsidiaries, with a focus on AI, blockchain, and sustainable technologies.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Mergers and Acquisitions</h3>
          <p>
            Active pursuit of strategic acquisitions to enhance existing capabilities, enter new markets, or acquire
            innovative technologies.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Service Expansion</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Continuous development of new products and services within existing subsidiaries</li>
            <li>Cross-subsidiary initiatives to create integrated solutions</li>
            <li>Expansion of online platforms to reach a broader global audience</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Talent Acquisition and Development</h3>
          <p>
            Investment in attracting top talent and developing existing team members to support expansion goalsand
            maintain innovation leadership.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function Appendix() {
  return (
    <Card id="appendix" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Appendix</CardTitle>
        <CardDescription>Additional supporting documents and information</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>Detailed financial statements</li>
          <li>Market research data</li>
          <li>Legal documents</li>
          <li>Team member biographies</li>
          <li>Technology specifications</li>
        </ul>
      </CardContent>
    </Card>
  )
}

function KeyMetrics() {
  return (
    <Card id="key-metrics" className="cosmic-card">
      <CardHeader>
        <CardTitle className="cosmic-title">Key Metrics</CardTitle>
        <CardDescription>Important performance indicators for Hubverse</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Financial Metrics</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Revenue growth</li>
            <li>Profit margins</li>
            <li>Customer acquisition cost</li>
            <li>Customer lifetime value</li>
            <li>Return on investment (ROI)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Operational Metrics</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Customer satisfaction</li>
            <li>Employee retention</li>
            <li>Website traffic</li>
            <li>Conversion rates</li>
            <li>Marketing ROI</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
