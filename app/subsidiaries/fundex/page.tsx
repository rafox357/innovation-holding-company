'use client';

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Users, TrendingUp, DollarSign, BarChart, Globe, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
  {
    name: "SEO/SEM",
    description:
      "Optimize online visibility and drive targeted traffic through search engine optimization and marketing strategies.",
  },
  {
    name: "Social Media Marketing",
    description:
      "Engage audiences and build brand presence across platforms like Facebook, Instagram, Twitter, and LinkedIn.",
  },
  {
    name: "Content Creation",
    description:
      "Develop compelling, SEO-friendly content that resonates with target audiences, including blog posts, videos, and infographics.",
  },
  {
    name: "Brand Development",
    description:
      "Craft unique brand identities and messaging strategies to differentiate clients in competitive markets.",
  },
]

const kpis = [
  { name: "Clients", value: 100, target: 150, unit: "", icon: Users },
  { name: "Website Traffic", value: 100000, target: 150000, unit: "visits", icon: TrendingUp },
  { name: "Revenue", value: 750000, target: 1000000, unit: "$", icon: DollarSign },
  { name: "Conversion Rate", value: 3.5, target: 5, unit: "%", icon: BarChart },
]

const monthlyData = [
  { name: "Jan", revenue: 550000, clients: 80 },
  { name: "Feb", revenue: 600000, clients: 85 },
  { name: "Mar", revenue: 650000, clients: 90 },
  { name: "Apr", revenue: 700000, clients: 95 },
  { name: "May", revenue: 725000, clients: 98 },
  { name: "Jun", revenue: 750000, clients: 100 },
]

const teamMembers = [
  { name: "Sarah Johnson", role: "CEO & Founder" },
  { name: "Michael Chen", role: "Head of SEO" },
  { name: "Emily Rodriguez", role: "Social Media Director" },
  { name: "David Kim", role: "Content Strategy Lead" },
  { name: "Rachel Patel", role: "Brand Development Manager" },
]

const plans = [
  {
    name: "Starter",
    price: 999,
    features: [
      "Basic SEO optimization",
      "Social media management (2 platforms)",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: 2499,
    features: [
      "Advanced SEO & SEM strategies",
      "Social media management (4 platforms)",
      "Content creation (2 pieces/month)",
      "Weekly performance calls",
      "Priority email & phone support",
    ],
  },
  {
    name: "Enterprise",
    price: 4999,
    features: [
      "Comprehensive digital marketing strategy",
      "Full-scale SEO, SEM, & social media management",
      "Custom content creation",
      "Brand development",
      "Dedicated account manager",
      "24/7 support",
    ],
  },
]

export default function FundexPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-2">Fundex</h1>
        <p className="text-xl text-muted-foreground mb-4">Digital Marketing Agency</p>
        <Badge variant="default" className="mb-6">
          Active
        </Badge>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Elevate Your Digital Presence with Fundex</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Welcome to Fundex, your partner in digital marketing excellence. As a cutting-edge agency, we specialize
                in transforming businesses through data-driven strategies and creative solutions. Our mission is to
                empower your brand, drive growth, and create meaningful connections with your target audience in the
                ever-evolving digital landscape.
              </p>
              <h3 className="text-lg font-semibold mb-2">Why Choose Fundex?</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>Proven track record of success across various industries</li>
                <li>Tailored strategies that align with your unique business goals</li>
                <li>Cutting-edge technologies and innovative approaches</li>
                <li>Transparent reporting and measurable results</li>
                <li>Dedicated team of experienced digital marketing professionals</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Since our founding in 2020, Fundex has quickly established itself as a leader in the digital marketing
                space. We've helped hundreds of businesses, from startups to established enterprises, achieve their
                marketing goals and unlock their full potential online.
              </p>
              <p className="text-muted-foreground mb-4">
                Our comprehensive suite of services covers every aspect of digital marketing, ensuring a holistic
                approach to your online presence. Whether you're looking to increase website traffic, boost conversions,
                or build a strong brand identity, Fundex has the expertise and tools to make it happen.
              </p>
              <p className="font-semibold">
                Ready to take your digital marketing to the next level? Explore our services and plans, or get in touch
                with us today to start your journey towards digital success.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.name}>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="plans">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-2xl font-bold">${plan.price}/mo</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="performance">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kpis.map((kpi) => (
                  <div key={kpi.name} className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <kpi.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{kpi.name}</p>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">
                          {kpi.value.toLocaleString()} / {kpi.target.toLocaleString()} {kpi.unit}
                        </span>
                        <span className="text-sm font-medium">{Math.round((kpi.value / kpi.target) * 100)}%</span>
                      </div>
                      <Progress value={(kpi.value / kpi.target) * 100} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    name="Revenue ($)"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line yAxisId="right" type="monotone" dataKey="clients" name="Clients" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Website: </span>
                  <Link href="#" className="text-primary hover:underline">
                    www.fundex.com
                  </Link>
                  <span className="text-xs text-muted-foreground">(Coming Soon)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Phone: </span>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Email: </span>
                  <a href="mailto:info@fundex.com" className="text-primary hover:underline">
                    info@fundex.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Address: </span>
                  <span>123 Digital Avenue, Tech City, TC 12345</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Fundex in the Hubverse Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Fundex is a proud member of the Hubverse family of companies, working in synergy with our sister
                subsidiaries to provide comprehensive solutions for business growth and success.
              </p>
              <h3 className="text-lg font-semibold mb-2">How We Collaborate:</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>We partner with Anexo to enhance digital marketing strategies for educational platforms</li>
                <li>
                  Our team works closely with Elementalis to integrate cutting-edge tech solutions into our marketing
                  campaigns
                </li>
                <li>We provide digital marketing expertise to support Estore District's online marketplace growth</li>
                <li>
                  Collaboration with ExoNet ensures our clients receive comprehensive business consulting alongside
                  marketing services
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Benefits of Our Ecosystem:</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>Integrated solutions that cover all aspects of business growth</li>
                <li>Seamless collaboration between different specialties</li>
                <li>Access to a wide range of expertise and resources</li>
                <li>Holistic approach to solving complex business challenges</li>
              </ul>
              <p className="text-muted-foreground">
                By choosing Fundex, you're not just getting a digital marketing agency – you're tapping into a powerful
                ecosystem of business solutions designed to help your company thrive in the digital age.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
