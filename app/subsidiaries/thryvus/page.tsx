'use client';

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { DollarSign, Users, TrendingUp, ShieldCheck, Globe, Phone, Mail, Building } from "lucide-react"

const performanceData = [
  { month: "Jan", revenue: 2000000, clients: 1500 },
  { month: "Feb", revenue: 2200000, clients: 1600 },
  { month: "Mar", revenue: 2400000, clients: 1700 },
  { month: "Apr", revenue: 2600000, clients: 1800 },
  { month: "May", revenue: 2800000, clients: 1900 },
  { month: "Jun", revenue: 3000000, clients: 2000 },
]

const services = [
  {
    name: "Investment Management",
    description: "Tailored investment strategies to help clients grow and protect their wealth.",
  },
  {
    name: "Financial Planning",
    description: "Comprehensive financial planning services for individuals and businesses.",
  },
  {
    name: "Risk Management",
    description: "Innovative risk management solutions to protect assets and mitigate financial risks.",
  },
  {
    name: "Corporate Finance",
    description: "Strategic financial advice and services for businesses of all sizes.",
  },
]

const teamMembers = [
  { name: "Sarah Johnson", role: "CEO & Founder" },
  { name: "Michael Chen", role: "Chief Investment Officer" },
  { name: "Emily Rodriguez", role: "Head of Financial Planning" },
  { name: "David Kim", role: "Risk Management Director" },
  { name: "Rachel Patel", role: "Corporate Finance Lead" },
]

export default function ThryvusPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">Thryvus & Co.</h1>
        <p className="text-xl text-muted-foreground mb-4">Innovative Financial Services</p>
        <Badge variant="outline" className="text-lg py-1">
          Active
        </Badge>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>About Thryvus & Co.</CardTitle>
              <CardDescription>Empowering financial success since 2020</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Thryvus & Co. is a cutting-edge financial services firm that combines traditional financial expertise
                with innovative technology to provide unparalleled services to our clients. We are committed to
                empowering individuals and businesses to achieve their financial goals through personalized strategies,
                advanced analytics, and a client-centric approach.
              </p>
              <h3 className="text-lg font-semibold mb-2">Why Choose Thryvus & Co.?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Innovative financial solutions tailored to individual needs</li>
                <li>Cutting-edge technology integration for better decision-making</li>
                <li>Experienced team of financial experts and analysts</li>
                <li>Commitment to transparency and ethical practices</li>
                <li>Holistic approach to wealth management and financial planning</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
              <CardDescription>Comprehensive financial solutions for every need</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card key={service.name}>
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Thryvus & Co. Performance Metrics</CardTitle>
              <CardDescription>Key indicators of our growth and impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-primary" /> Assets Under Management
                  </h3>
                  <p className="text-3xl font-bold">$5B+</p>
                  <Progress value={83} className="w-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" /> Active Clients
                  </h3>
                  <p className="text-3xl font-bold">2,000+</p>
                  <Progress value={80} className="w-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" /> Average ROI
                  </h3>
                  <p className="text-3xl font-bold">12.5%</p>
                  <Progress value={85} className="w-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Client Satisfaction
                  </h3>
                  <p className="text-3xl font-bold">98%</p>
                  <Progress value={98} className="w-full" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Monthly Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue ($)" />
                  <Line yAxisId="right" type="monotone" dataKey="clients" stroke="#82ca9d" name="Clients" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Meet Our Team</CardTitle>
              <CardDescription>The experts behind Thryvus & Co.'s success</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Thryvus & Co.</CardTitle>
              <CardDescription>Get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-primary" />
                  <span>www.thryvus.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  <span>info@thryvus.com</span>
                </div>
                <div className="flex items-center">
                  <Building className="mr-2 h-5 w-5 text-primary" />
                  <span>123 Financial Avenue, Money City, FC 12345</span>
                </div>
              </div>
              <div className="mt-6">
                <Button>Schedule a Consultation</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Thryvus & Co. in the Hubverse Ecosystem</CardTitle>
              <CardDescription>Leveraging synergies for comprehensive business solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As a key member of the Hubverse family, Thryvus & Co. collaborates closely with our sister companies to
                provide integrated financial solutions that support the growth and success of businesses across various
                sectors.
              </p>
              <h3 className="text-lg font-semibold mb-2">Ecosystem Integrations:</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Anexo (Online Education):</strong> We provide financial literacy courses and investment
                  education through Anexo's platform, while offering special financial packages for Anexo's students and
                  educators.
                </li>
                <li>
                  <strong>Fundex (Digital Marketing):</strong> Thryvus & Co. offers tailored financial services for
                  digital marketing agencies and collaborates with Fundex to provide financial insights for marketing
                  strategies.
                </li>
                <li>
                  <strong>Elementalis (Tech Solutions):</strong> We work closely with Elementalis to develop and
                  implement cutting-edge fintech solutions, enhancing our service offerings and client experience.
                </li>
                <li>
                  <strong>Estore District (E-commerce):</strong> Thryvus & Co. provides specialized financial services
                  and payment solutions for e-commerce businesses on the Estore District platform.
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Benefits of the Hubverse Ecosystem:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Integrated financial solutions across various industries</li>
                  <li>Access to a diverse network of experts and resources</li>
                  <li>Enhanced ability to serve clients with complex, multi-faceted needs</li>
                  <li>Continuous innovation through cross-industry collaboration</li>
                  <li>Streamlined processes and improved efficiency for clients within the Hubverse ecosystem</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
