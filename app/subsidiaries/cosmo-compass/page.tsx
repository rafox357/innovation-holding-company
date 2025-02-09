"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Building2, Users, DollarSign, TrendingUp, Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react"

const performanceData = [
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 0 },
  { month: "Mar", revenue: 0 },
  { month: "Apr", revenue: 0 },
  { month: "May", revenue: 0 },
  { month: "Jun", revenue: 0 },
  { month: "Jul", revenue: 0 },
  { month: "Aug", revenue: 0 },
  { month: "Sep", revenue: 0 },
  { month: "Oct", revenue: 0 },
  { month: "Nov", revenue: 0 },
  { month: "Dec", revenue: 0 },
]

export default function CosmoCompassPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Cosmo & Compass Co.</h1>
          <p className="text-xl text-muted-foreground">Real estate and co-working spaces</p>
        </div>
        <Badge variant="outline" className="text-lg py-1">
          Planning
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
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
              <CardTitle>About Cosmo & Compass Co.</CardTitle>
              <CardDescription>Redefining workspaces for the modern professional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Cosmo & Compass Co. is set to revolutionize the real estate and co-working industry by providing
                innovative, flexible, and inspiring workspaces. Founded with the vision to create environments that
                foster creativity, collaboration, and productivity, we're on a mission to redefine the way professionals
                work and interact.
              </p>
              <p>
                Our upcoming launch in 2025 will introduce a new era of workspace solutions, combining cutting-edge
                design with state-of-the-art technology to meet the evolving needs of businesses and entrepreneurs in
                the digital age.
              </p>
              <h3 className="text-xl font-semibold mt-4">Why Choose Cosmo & Compass Co.?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Flexible workspace solutions tailored to your needs</li>
                <li>Prime locations in key business districts</li>
                <li>State-of-the-art facilities and amenities</li>
                <li>Community-driven environment fostering networking and collaboration</li>
                <li>Sustainable and eco-friendly design principles</li>
                <li>Seamless integration of technology for enhanced productivity</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
              <CardDescription>Comprehensive real estate and workspace solutions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Co-working Spaces</h3>
                <p>
                  Flexible, fully-equipped workspaces designed for productivity and collaboration. From hot desks to
                  dedicated offices, we cater to freelancers, startups, and established businesses alike.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Office Rentals</h3>
                <p>
                  Customizable office spaces for businesses of all sizes. Our turnkey solutions include everything from
                  utilities to IT infrastructure, allowing you to focus on your core business.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Event Venues</h3>
                <p>
                  Versatile spaces for conferences, workshops, and networking events. Our venues come equipped with the
                  latest AV technology and can be tailored to your specific needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Property Management</h3>
                <p>
                  Comprehensive property management services for commercial real estate owners. We handle everything
                  from tenant relations to maintenance, ensuring your property performs at its best.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Projected growth and key performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Building2 className="h-12 w-12 text-primary mb-2" />
                    <CardTitle className="text-2xl font-bold">0</CardTitle>
                    <CardDescription>Leases Signed</CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      Target: 50
                    </Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Users className="h-12 w-12 text-primary mb-2" />
                    <CardTitle className="text-2xl font-bold">0%</CardTitle>
                    <CardDescription>Occupancy Rate</CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      Target: 80%
                    </Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <DollarSign className="h-12 w-12 text-primary mb-2" />
                    <CardTitle className="text-2xl font-bold">$0</CardTitle>
                    <CardDescription>Revenue</CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      Target: $1M
                    </Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <TrendingUp className="h-12 w-12 text-primary mb-2" />
                    <CardTitle className="text-2xl font-bold">0</CardTitle>
                    <CardDescription>Client Satisfaction</CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      Target: 4.5/5
                    </Badge>
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
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
              <CardDescription>Meet the visionaries behind Cosmo & Compass Co.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Alexandra Chen",
                    role: "CEO & Co-founder",
                    bio: "Visionary leader with 15+ years in commercial real estate and workspace innovation.",
                  },
                  {
                    name: "Marcus Thompson",
                    role: "COO & Co-founder",
                    bio: "Operations expert specializing in property management and customer experience.",
                  },
                  {
                    name: "Sophia Rodriguez",
                    role: "Head of Design",
                    bio: "Award-winning interior designer focused on creating inspiring work environments.",
                  },
                  {
                    name: "David Kim",
                    role: "Chief Technology Officer",
                    bio: "Tech innovator integrating smart solutions into modern workspaces.",
                  },
                  {
                    name: "Emily Watson",
                    role: "Director of Community",
                    bio: "Community building specialist fostering collaboration and networking.",
                  },
                  {
                    name: "Michael Foster",
                    role: "Head of Sustainability",
                    bio: "Environmental expert ensuring eco-friendly practices across all properties.",
                  },
                ].map((member, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans">
          <Card>
            <CardHeader>
              <CardTitle>Our Plans</CardTitle>
              <CardDescription>Flexible options to suit your business needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hot Desk</CardTitle>
                    <CardDescription>Flexible workspace access</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to shared workspace</li>
                      <li>High-speed Wi-Fi</li>
                      <li>Use of meeting rooms (2 hours/month)</li>
                      <li>Access to community events</li>
                    </ul>
                    <p className="mt-4 font-bold">Starting at $199/month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Dedicated Desk</CardTitle>
                    <CardDescription>Your personal workspace</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Permanent desk in shared space</li>
                      <li>24/7 access</li>
                      <li>Use of meeting rooms (5 hours/month)</li>
                      <li>Secure storage</li>
                      <li>Mail handling</li>
                    </ul>
                    <p className="mt-4 font-bold">Starting at $399/month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Private Office</CardTitle>
                    <CardDescription>Customizable private space</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fully furnished private office</li>
                      <li>24/7 access</li>
                      <li>Use of meeting rooms (10 hours/month)</li>
                      <li>Dedicated phone line</li>
                      <li>Customizable branding options</li>
                      <li>Administrative support</li>
                    </ul>
                    <p className="mt-4 font-bold">Starting at $799/month</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Get in touch with Cosmo & Compass Co.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@cosmocompass.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Innovation Street, Tech City, TC 12345</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Website coming soon</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Join Our Waitlist</h3>
                  <p>Be the first to know when we launch and get exclusive offers!</p>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                  <Button>
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Hubverse Ecosystem Integration</CardTitle>
              <CardDescription>How Cosmo & Compass Co. fits into the Hubverse family</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  As a vital part of the Hubverse ecosystem, Cosmo & Compass Co. plays a crucial role in providing the
                  physical infrastructure and workspace solutions that complement our digital offerings. Our integration
                  with other Hubverse subsidiaries creates a seamless experience for entrepreneurs and businesses at
                  every stage of their journey.
                </p>
                <h3 className="text-xl font-semibold">Synergies within Hubverse:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Anexo:</strong> Our spaces serve as hubs for Anexo's in-person workshops and networking
                    events, bridging online and offline learning experiences.
                  </li>
                  <li>
                    <strong>Fundex:</strong> We provide Fundex with state-of-the-art facilities for client meetings and
                    marketing events, enhancing their service delivery.
                  </li>
                  <li>
                    <strong>Elementalis:</strong> Our tech-enabled workspaces showcase Elementalis' cutting-edge IT
                    solutions, offering a live demo environment for potential clients.
                  </li>
                  <li>
                    <strong>Estore District:</strong> We offer pop-up spaces and showrooms for Estore District sellers,
                    allowing them to showcase products in a physical setting.
                  </li>
                </ul>
                <p>
                  By choosing Cosmo & Compass Co., you're not just getting a workspace – you're gaining access to a
                  comprehensive ecosystem of business solutions and a vibrant community of innovators. Our spaces are
                  designed to foster collaboration, spark creativity, and drive success across the entire Hubverse
                  network.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {activeTab === "overview" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Join the Future of Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Be part of the Cosmo & Compass Co. revolution. Sign up for updates and be the first to know about our
                launch, special offers, and how we're redefining workspaces for the modern professional.
              </p>
              <div className="flex space-x-4">
                <Input placeholder="Enter your email" />
                <Button>Stay Informed</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
