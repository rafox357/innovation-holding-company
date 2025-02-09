'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ShoppingCart, Users, TrendingUp, Package, Mail, Phone, Globe, Building } from "lucide-react"

const performanceData = [
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 0 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 15000 },
  { month: "May", revenue: 30000 },
  { month: "Jun", revenue: 50000 },
]

const EstoreDistrictPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Estore District</h1>
        <Badge variant="secondary" className="text-lg py-1">
          In Development
        </Badge>
      </div>
      <p className="text-xl mb-8">Online marketplace revolutionizing e-commerce</p>

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
              <CardTitle>About Estore District</CardTitle>
              <CardDescription>Empowering businesses and consumers in the digital marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Estore District, founded in 2025, is set to revolutionize the e-commerce landscape by providing a
                comprehensive online marketplace solution. Our platform is designed to connect businesses of all sizes
                with a global customer base, offering a seamless shopping experience for consumers and powerful tools
                for sellers.
              </p>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="mb-4">
                To create a thriving digital ecosystem where businesses can flourish and consumers can discover,
                compare, and purchase products with ease and confidence.
              </p>
              <h3 className="text-xl font-semibold mb-2">Why Choose Estore District?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cutting-edge marketplace technology</li>
                <li>Seamless integration with other Hubverse services</li>
                <li>Robust seller tools and analytics</li>
                <li>Secure payment processing</li>
                <li>Global reach with localized experiences</li>
                <li>Competitive fees and transparent pricing</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2" />
                  Product Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  A diverse online marketplace featuring products from various sellers, offering customers a wide range
                  of choices across multiple categories.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2" />
                  Digital Downloads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Platform for selling and purchasing digital products such as e-books, software, music, and other
                  downloadable content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2" />
                  Subscription Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Enabling businesses to offer subscription-based products or services, providing recurring revenue
                  streams and customer loyalty.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" />
                  Seller Tools & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Comprehensive suite of tools for sellers to manage their online stores, track performance, and
                  optimize their business operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Estore District Performance</CardTitle>
              <CardDescription>Key metrics and revenue growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total GMV</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2.5M</div>
                    <Progress value={25} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">25% of $10M goal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Sellers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5,000</div>
                    <Progress value={50} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">50% of 10,000 goal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Active Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">100,000</div>
                    <Progress value={20} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">20% of 500,000 goal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.7/5</div>
                    <Progress value={94} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">94% satisfaction rate</p>
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
          <Card>
            <CardHeader>
              <CardTitle>Estore District Team</CardTitle>
              <CardDescription>Meet the innovators behind our marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Sarah Chen",
                    role: "CEO & Co-founder",
                    bio: "E-commerce veteran with 15+ years of experience",
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "CTO",
                    bio: "Former lead engineer at a major e-commerce platform",
                  },
                  {
                    name: "Emily Watson",
                    role: "Head of Seller Relations",
                    bio: "Expert in empowering small businesses online",
                  },
                  {
                    name: "David Kim",
                    role: "Head of User Experience",
                    bio: "Passionate about creating intuitive digital interfaces",
                  },
                  {
                    name: "Olivia Martinez",
                    role: "Chief Marketing Officer",
                    bio: "Digital marketing guru with a focus on marketplace dynamics",
                  },
                  {
                    name: "Alex Johnson",
                    role: "Head of Customer Support",
                    bio: "Committed to exceptional customer and seller satisfaction",
                  },
                ].map((member) => (
                  <Card key={member.name}>
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
              <CardTitle>Estore District Plans</CardTitle>
              <CardDescription>Choose the right plan for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Seller</CardTitle>
                    <CardDescription>For small businesses and startups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-4">$29/month</p>
                    <ul className="space-y-2">
                      <li>Up to 100 product listings</li>
                      <li>Basic analytics</li>
                      <li>Standard customer support</li>
                      <li>5% transaction fee</li>
                    </ul>
                    <Button className="w-full mt-4">Get Started</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Seller</CardTitle>
                    <CardDescription>For growing businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-4">$99/month</p>
                    <ul className="space-y-2">
                      <li>Up to 1,000 product listings</li>
                      <li>Advanced analytics and reporting</li>
                      <li>Priority customer support</li>
                      <li>3% transaction fee</li>
                      <li>Bulk listing tools</li>
                    </ul>
                    <Button className="w-full mt-4">Get Started</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise Seller</CardTitle>
                    <CardDescription>For large-scale operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-4">Custom Pricing</p>
                    <ul className="space-y-2">
                      <li>Unlimited product listings</li>
                      <li>Custom analytics solutions</li>
                      <li>Dedicated account manager</li>
                      <li>Negotiable transaction fees</li>
                      <li>API access for seamless integration</li>
                    </ul>
                    <Button className="w-full mt-4">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Estore District</CardTitle>
              <CardDescription>Get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  <span>support@estoredistrict.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-2" />
                  <span>www.estoredistrict.com (Coming Soon)</span>
                </div>
                <div className="flex items-center">
                  <Building className="mr-2" />
                  <span>123 E-commerce Street, Digital City, 54321</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Get Started</h3>
                <p className="mb-4">
                  Ready to join Estore District? Sign up for our waitlist to be notified when we launch!
                </p>
                <Button>Join Waitlist</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Estore District in the Hubverse Ecosystem</CardTitle>
              <CardDescription>Leveraging synergies for enhanced e-commerce experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">Estore District in the Hubverse Ecosystem</h3>
              <p className="mb-4">Estore District plays a crucial role in the Hubverse ecosystem:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Integrated E-commerce Solutions: Seamlessly connects with other Hubverse services.</li>
                <li>Cross-Platform Synergy: Enhances overall customer experience across Hubverse.</li>
                <li>Data-Driven Insights: Shares valuable market data with other subsidiaries.</li>
                <li>Collaborative Growth: Supports and benefits from the success of other Hubverse companies.</li>
              </ul>
              <h4 className="text-md font-semibold mt-6 mb-2">Benefits for Hubverse Customers</h4>
              <p className="mt-2">
                By leveraging Estore District alongside other Hubverse services, businesses can create a powerful,
                integrated ecosystem that drives growth, efficiency, and success in the digital marketplace.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EstoreDistrictPage
