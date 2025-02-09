"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Linkedin, BarChart2, Users, Target, Briefcase } from "lucide-react"

const services = [
  {
    name: "Business Strategy",
    description: "Develop comprehensive strategies to drive growth and achieve business objectives.",
    icon: Target,
  },
  {
    name: "Financial Planning",
    description: "Create robust financial models and plans to optimize resource allocation and profitability.",
    icon: BarChart2,
  },
  {
    name: "Market Research",
    description: "Conduct in-depth market analysis to identify opportunities and inform decision-making.",
    icon: Users,
  },
  {
    name: "Operations Consulting",
    description: "Streamline processes and improve operational efficiency across all business functions.",
    icon: Briefcase,
  },
]

const teamMembers = [
  {
    name: "Dr. Elena Rodriguez",
    role: "Chief Strategy Officer",
    image: "/placeholder.svg?height=100&width=100",
    bio: "With over 15 years of experience in strategy consulting, Dr. Rodriguez leads our team in developing innovative solutions for complex business challenges.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Financial Planning",
    image: "/placeholder.svg?height=100&width=100",
    bio: "A certified financial analyst with a track record of optimizing financial performance for Fortune 500 companies.",
  },
  {
    name: "Aisha Patel",
    role: "Director of Market Research",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Aisha brings a wealth of experience in consumer behavior and market trends analysis, having worked with leading brands across various industries.",
  },
  {
    name: "Thomas Müller",
    role: "Operations Excellence Lead",
    image: "/placeholder.svg?height=100&width=100",
    bio: "An expert in Lean Six Sigma methodologies, Thomas has helped numerous organizations achieve operational excellence and cost savings.",
  },
]

const plans = [
  {
    name: "Startup Accelerator",
    price: "$2,500/month",
    features: [
      "Business model validation",
      "Market entry strategy",
      "Financial projections",
      "Pitch deck preparation",
      "Investor networking",
    ],
  },
  {
    name: "Growth Catalyst",
    price: "$5,000/month",
    features: [
      "Comprehensive market analysis",
      "Customer acquisition strategy",
      "Operational efficiency audit",
      "Scalability planning",
      "Performance metrics dashboard",
    ],
  },
  {
    name: "Enterprise Transformation",
    price: "Custom pricing",
    features: [
      "End-to-end digital transformation",
      "Change management",
      "Process reengineering",
      "Innovation strategy",
      "Leadership development",
    ],
  },
]

export default function ExoNetPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">ExoNet</h1>
        <p className="text-xl text-muted-foreground">Empowering businesses through strategic consulting</p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>About ExoNet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                ExoNet is a cutting-edge business consulting firm within the Hubverse ecosystem. We specialize in
                providing strategic insights and operational excellence to businesses of all sizes, from startups to
                established enterprises. Our team of experienced consultants leverages data-driven methodologies and
                industry best practices to help our clients navigate complex challenges and achieve sustainable growth.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To empower businesses with actionable insights and innovative strategies that drive growth,
                  efficiency, and long-term success in an ever-evolving global marketplace.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To be the catalyst for business transformation, recognized globally for our innovative approach to
                  consulting and our commitment to delivering measurable results for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="mr-2 h-6 w-6" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Clients</span>
                  <span>10 / 50</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Projects Completed</span>
                  <span>5 / 25</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Revenue</span>
                  <span>$50,000 / $250,000</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="text-6xl font-bold">4.8</div>
                <div className="ml-4">
                  <div className="text-2xl font-semibold">out of 5</div>
                  <div className="text-muted-foreground">Based on 50 reviews</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div>{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.role}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>contact@exonet.hubverse.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4" />
                <a href="https://www.linkedin.com/company/exonet" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-8">Our Consulting Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-8">ExoNet in the Hubverse Ecosystem</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              As a key player in the Hubverse ecosystem, ExoNet leverages the collective expertise and resources of our
              sister companies to provide comprehensive solutions to our clients:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4" />
                We collaborate with Anexo to provide cutting-edge educational resources for our clients' teams.
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4" />
                Our partnership with Fundex allows us to offer integrated marketing strategies alongside our business
                consulting services.
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4" />
                We work closely with Elementalis to ensure our clients have access to the latest technology solutions.
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4" />
                For clients in the e-commerce space, we leverage Estore District's expertise to provide tailored
                strategies.
              </li>
            </ul>
            <p className="mt-4">
              This integrated approach allows ExoNet to deliver holistic, innovative solutions that drive success across
              all aspects of our clients' businesses.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

