import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Truck, Factory, Zap } from "lucide-react"
import Link from "next/link"

const PoncePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Ponce Industries</h1>
      <p className="text-xl mb-8">Revolutionizing Manufacturing and Logistics</p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>About Ponce Industries</CardTitle>
              <CardDescription>Next-Generation Manufacturing and Logistics Solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Ponce Industries is at the forefront of the manufacturing and logistics revolution within the Hubverse
                ecosystem. We combine cutting-edge technology, sustainable practices, and innovative supply chain
                management to deliver unparalleled efficiency and quality in production and distribution.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Factory className="mr-2" />
                  <span>Smart manufacturing facilities</span>
                </div>
                <div className="flex items-center">
                  <Truck className="mr-2" />
                  <span>AI-optimized logistics network</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-2" />
                  <span>Sustainable and energy-efficient operations</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
              <CardDescription>Comprehensive Manufacturing and Logistics Solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Advanced Manufacturing</h3>
                  <p>State-of-the-art production lines for electronics, automotive parts, and consumer goods.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Smart Warehousing</h3>
                  <p>AI-driven inventory management and robotic fulfillment centers.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Supply Chain Optimization</h3>
                  <p>End-to-end supply chain solutions with real-time tracking and predictive analytics.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Sustainable Logistics</h3>
                  <p>Eco-friendly transportation and packaging solutions to minimize environmental impact.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key Indicators of Our Operational Excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Manufacturing Efficiency</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>On-Time Delivery Rate</span>
                    <span>98.5%</span>
                  </div>
                  <Progress value={98.5} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Sustainability Index</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Customer Satisfaction</span>
                    <span>4.8/5</span>
                  </div>
                  <Progress value={96} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
              <CardDescription>Leaders in Manufacturing and Logistics Innovation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Elena Rodriguez", role: "CEO", expertise: "Industry 4.0, Strategic Leadership" },
                  {
                    name: "Akira Tanaka",
                    role: "Chief Manufacturing Officer",
                    expertise: "Robotics, Lean Manufacturing",
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Head of Logistics",
                    expertise: "Supply Chain Optimization, IoT in Logistics",
                  },
                  {
                    name: "Raj Patel",
                    role: "Chief Sustainability Officer",
                    expertise: "Green Technologies, Circular Economy",
                  },
                  { name: "Maria Schmidt", role: "Director of R&D", expertise: "Advanced Materials, 3D Printing" },
                  {
                    name: "David Chen",
                    role: "Head of AI and Analytics",
                    expertise: "Machine Learning, Predictive Maintenance",
                  },
                ].map((member, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Expertise:</strong> {member.expertise}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="facilities">
          <Card>
            <CardHeader>
              <CardTitle>Our Facilities</CardTitle>
              <CardDescription>State-of-the-Art Manufacturing and Distribution Centers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Smart Factory Alpha",
                    location: "Detroit, MI",
                    specialization: "Automotive and Electronics",
                  },
                  { name: "Eco-Hub Beta", location: "Portland, OR", specialization: "Sustainable Consumer Goods" },
                  { name: "Logistics Center Gamma", location: "Dallas, TX", specialization: "AI-Driven Distribution" },
                  { name: "Innovation Lab Delta", location: "San Jose, CA", specialization: "R&D and Prototyping" },
                ].map((facility, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{facility.name}</CardTitle>
                      <CardDescription>{facility.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Specialization:</strong> {facility.specialization}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Get in Touch with Ponce Industries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="mr-2" />
                      <span>Ponce Industries HQ, 1000 Innovation Drive, Detroit, MI 48201</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2" />
                      <span>+1 (313) 555-0123</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2" />
                      <span>info@ponceindustries.com</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Your Message" />
                    <Button type="submit">Send Message</Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Ponce Industries in the Hubverse Ecosystem</CardTitle>
              <CardDescription>Driving Innovation Across Industries</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As a key player in the Hubverse ecosystem, Ponce Industries leverages its advanced manufacturing and
                logistics capabilities to support and enhance the operations of other subsidiaries and partners:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Collaborating with Elementalis to integrate IoT and AI technologies into our manufacturing processes
                </li>
                <li>
                  Providing efficient and sustainable logistics solutions for Estore District's e-commerce operations
                </li>
                <li>Manufacturing custom hardware and devices for Anexo's EdTech initiatives</li>
                <li>Supporting Fundex with advanced analytics for supply chain optimization in marketing campaigns</li>
                <li>
                  Developing innovative manufacturing techniques for Cosmo & Compass Co.'s smart building components
                </li>
                <li>Partnering with Thryvus & Co. to implement blockchain technology in supply chain management</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Ecosystem Benefits</h3>
                <p>
                  By integrating our advanced manufacturing and logistics capabilities across the Hubverse ecosystem, we
                  create a synergistic environment that enhances efficiency, sustainability, and innovation for all our
                  partners and clients.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/unified-ecosystem" className="text-primary hover:underline">
                  Learn more about the Hubverse Unified Ecosystem
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PoncePage

