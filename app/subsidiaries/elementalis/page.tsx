'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Cloud, Code, Shield, Headphones, Users, Zap, Mail, Phone, Globe, Building } from "lucide-react"

const performanceData = [
  { month: "Jan", revenue: 150000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 210000 },
  { month: "Apr", revenue: 240000 },
  { month: "May", revenue: 270000 },
  { month: "Jun", revenue: 300000 },
]

const ElementalisPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Elementalis</h1>
        <Badge variant="outline" className="text-green-500 border-green-500">
          Active
        </Badge>
      </div>
      <p className="text-xl mb-8">Technology solutions provider</p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>About Elementalis</CardTitle>
              <CardDescription>Empowering businesses with cutting-edge technology solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Founded in 2019, Elementalis is at the forefront of technological innovation, providing businesses with
                state-of-the-art solutions to navigate the digital landscape. Our mission is to empower organizations of
                all sizes with robust, scalable, and secure technology infrastructure.
              </p>
              <h3 className="text-xl font-semibold mb-2">Why Choose Elementalis?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cutting-edge technology solutions tailored to your business needs</li>
                <li>Expert team of developers, engineers, and cybersecurity specialists</li>
                <li>Comprehensive suite of services from cloud solutions to custom software development</li>
                <li>Proactive IT support and maintenance to keep your systems running smoothly</li>
                <li>Scalable solutions that grow with your business</li>
                <li>Strong focus on cybersecurity to protect your valuable data</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="mr-2" /> Cloud Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Leverage the power of cloud computing with our scalable and secure cloud solutions. We offer cloud
                  migration, management, and optimization services to enhance your business agility and reduce IT costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" /> Custom Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our expert developers create tailor-made software solutions to address your unique business
                  challenges. From web applications to complex enterprise systems, we deliver high-quality, scalable
                  software.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2" /> Cybersecurity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Protect your digital assets with our comprehensive cybersecurity services. We offer threat detection,
                  vulnerability assessments, and security strategy development to safeguard your business from cyber
                  threats.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="mr-2" /> IT Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our responsive IT support team ensures your systems run smoothly 24/7. We provide proactive
                  maintenance, troubleshooting, and technical assistance to minimize downtime and maximize productivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">250+</div>
                    <p className="text-xs text-muted-foreground">+15% from last month</p>
                    <Progress value={75} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projects Completed</CardTitle>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">500+</div>
                    <p className="text-xs text-muted-foreground">+8% from last month</p>
                    <Progress value={82} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">98%</div>
                    <p className="text-xs text-muted-foreground">+2% from last month</p>
                    <Progress value={98} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Uptime Guarantee</CardTitle>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">99.99%</div>
                    <p className="text-xs text-muted-foreground">Consistent performance</p>
                    <Progress value={99.99} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Alex Johnson", role: "CEO & Founder", image: "/placeholder.svg?height=100&width=100" },
              { name: "Sarah Lee", role: "CTO", image: "/placeholder.svg?height=100&width=100" },
              { name: "Michael Chen", role: "Head of Cybersecurity", image: "/placeholder.svg?height=100&width=100" },
              {
                name: "Emily Rodriguez",
                role: "Lead Software Architect",
                image: "/placeholder.svg?height=100&width=100",
              },
              { name: "David Kim", role: "Cloud Solutions Manager", image: "/placeholder.svg?height=100&width=100" },
              { name: "Lisa Patel", role: "IT Support Lead", image: "/placeholder.svg?height=100&width=100" },
            ].map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img src={member.image || "/placeholder.svg"} alt={member.name} className="rounded-full" />
                    <div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="plans">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Starter Plan</CardTitle>
                <CardDescription>For small businesses and startups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$999/month</p>
                <ul className="space-y-2">
                  <li>Basic cloud solutions</li>
                  <li>5 hours of custom development</li>
                  <li>Standard cybersecurity package</li>
                  <li>8/5 IT support</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Growth Plan</CardTitle>
                <CardDescription>For medium-sized businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$2,499/month</p>
                <ul className="space-y-2">
                  <li>Advanced cloud solutions</li>
                  <li>20 hours of custom development</li>
                  <li>Enhanced cybersecurity package</li>
                  <li>24/7 IT support</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Plan</CardTitle>
                <CardDescription>For large corporations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">Custom Pricing</p>
                <ul className="space-y-2">
                  <li>Fully customized cloud solutions</li>
                  <li>Unlimited custom development</li>
                  <li>Comprehensive cybersecurity suite</li>
                  <li>24/7 priority IT support</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full">Contact Sales</Button>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Elementalis</CardTitle>
              <CardDescription>Get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@elementalis.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>www.elementalis.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>123 Tech Avenue, Innovation City, 12345</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Elementalis in the Hubverse Ecosystem</CardTitle>
              <CardDescription>Synergies and collaborations within Hubverse</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As a key member of the Hubverse family, Elementalis plays a crucial role in providing technology
                solutions that support and enhance the operations of our sister companies. Our integration within the
                Hubverse ecosystem creates unique opportunities for clients to leverage a comprehensive suite of
                services.
              </p>
              <h3 className="text-xl font-semibold mb-2">Ecosystem Synergies</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Fundex (Digital Marketing):</strong> We provide robust backend systems and data analytics
                  tools to support Fundex's marketing campaigns and client reporting.
                </li>
                <li>
                  <strong>Anexo (Online Education):</strong> Our cloud infrastructure and custom learning management
                  systems power Anexo's online courses and virtual classrooms.
                </li>
                <li>
                  <strong>ExoNet (Business Consulting):</strong> We provide data analytics and business intelligence
                  tools to support ExoNet's consulting services.
                </li>
                <li>
                  <strong>Cosmo & Compass Co. (Real Estate):</strong> Our IoT solutions and property management software
                  enhance their smart building initiatives.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Benefits of the Ecosystem</h3>
              <p className="mb-4">
                By leveraging the Hubverse ecosystem, clients gain access to a comprehensive suite of services that work
                seamlessly together. This integration allows for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Streamlined operations across multiple business functions</li>
                <li>Enhanced data sharing and analytics capabilities</li>
                <li>Unified technology infrastructure for improved efficiency</li>
                <li>Comprehensive solutions that address diverse business needs</li>
                <li>Simplified vendor management through a single point of contact</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ElementalisPage
