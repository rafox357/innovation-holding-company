'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"
import { Book, Users, Video, FileText, Zap, Mail, Phone, Globe, Building, Award } from "lucide-react"

const performanceData = [
  { month: "Jan", revenue: 120000, students: 5000 },
  { month: "Feb", revenue: 150000, students: 6000 },
  { month: "Mar", revenue: 180000, students: 7500 },
  { month: "Apr", revenue: 220000, students: 9000 },
  { month: "May", revenue: 250000, students: 11000 },
  { month: "Jun", revenue: 300000, students: 13000 },
]

export default function AnexoShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Anexo</h1>
        <Badge variant="outline" className="text-lg py-1">
          Active
        </Badge>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Empowering learners worldwide through innovative online education
      </p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Anexo</h2>
              <p className="text-muted-foreground">
                Revolutionizing online education since 2019
              </p>
              <p className="mt-4">
                Anexo is at the forefront of the EdTech revolution, providing a comprehensive online learning platform that caters to students, professionals, and lifelong learners across the globe. Our mission is to democratize education by making high-quality learning experiences accessible to everyone, regardless of their location or background.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Why Choose Anexo?</h3>
              <ul className="space-y-2">
                <li>• Diverse course catalog covering in-demand skills and subjects</li>
                <li>• Interactive learning experiences with live webinars and virtual classrooms</li>
                <li>• Personalized learning paths tailored to individual goals and pace</li>
                <li>• Industry-recognized certifications to boost your career prospects</li>
                <li>• Cutting-edge technology platform for seamless learning on any device</li>
                <li>• Expert instructors from leading universities and companies</li>
                <li>• Collaborative learning communities to enhance peer-to-peer engagement</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>Our Educational Offerings</CardTitle>
              <CardDescription>Comprehensive learning solutions for every need</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Book className="mr-2" /> Online Courses
                  </h3>
                  <p>
                    Self-paced courses covering a wide range of topics from programming to business management. Learn at
                    your own pace with interactive content, quizzes, and projects.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Video className="mr-2" /> Live Webinars
                  </h3>
                  <p>
                    Engage with industry experts in real-time through our live webinar series. Participate in Q&A
                    sessions and gain insights from thought leaders in various fields.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Users className="mr-2" /> Mentorship Programs
                  </h3>
                  <p>
                    Get personalized guidance from experienced professionals. Our mentorship programs connect you with
                    industry veterans who can help accelerate your career growth.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <FileText className="mr-2" /> Educational Resources
                  </h3>
                  <p>
                    Access a vast library of educational materials, including e-books, research papers, and case studies
                    to supplement your learning journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Anexo Performance Metrics</CardTitle>
              <CardDescription>Key indicators of our growth and impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Users className="mr-2" /> Active Students
                  </h3>
                  <p className="text-3xl font-bold">13,000+</p>
                  <Progress value={85} className="w-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Book className="mr-2" /> Courses Offered
                  </h3>
                  <p className="text-3xl font-bold">500+</p>
                  <Progress value={92} className="w-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Award className="mr-2" /> Completion Rate
                  </h3>
                  <p className="text-3xl font-bold">78%</p>
                  <Progress value={78} className="w-full" />
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
                  <Line yAxisId="right" type="monotone" dataKey="students" stroke="#82ca9d" name="Students" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Meet Our Team</CardTitle>
              <CardDescription>The minds behind Anexo's success</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dr. Emily Chen",
                    role: "CEO & Founder",
                    bio: "EdTech visionary with 15+ years in online education",
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "Chief Learning Officer",
                    bio: "Curriculum design expert and former university professor",
                  },
                  {
                    name: "Sarah Kim",
                    role: "Head of Technology",
                    bio: "AI and machine learning specialist focused on personalized learning",
                  },
                  {
                    name: "David Okafor",
                    role: "Director of Partnerships",
                    bio: "Building global alliances with universities and corporations",
                  },
                  {
                    name: "Lisa Tanaka",
                    role: "UX Design Lead",
                    bio: "Creating intuitive and engaging learning experiences",
                  },
                  {
                    name: "Alex Novak",
                    role: "Content Strategy Manager",
                    bio: "Curating and developing cutting-edge course materials",
                  },
                ].map((member, index) => (
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
                      <CardContent>
                        <p>{member.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plans</CardTitle>
              <CardDescription>Choose the plan that fits your learning goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Basic",
                    price: "$9.99",
                    features: ["Access to 100+ courses", "Monthly live webinars", "Mobile app access", "24/7 support"],
                  },
                  {
                    name: "Pro",
                    price: "$19.99",
                    features: [
                      "Access to 300+ courses",
                      "Weekly live webinars",
                      "1-on-1 mentoring sessions",
                      "Certification prep materials",
                      "Priority support",
                    ],
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    features: [
                      "Full course catalog access",
                      "Custom course creation",
                      "Dedicated account manager",
                      "Advanced analytics",
                      "API access",
                    ],
                  },
                ].map((plan, index) => (
                  <Card key={index} className={index === 1 ? "border-primary" : ""}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold">
                        {plan.price}
                        <span className="text-sm font-normal">{plan.name !== "Enterprise" ? "/month" : ""}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center">
                            <Zap className="mr-2 h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4">
                        {plan.name === "Enterprise" ? "Contact Sales" : "Subscribe Now"}
                      </Button>
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
              <CardTitle>Contact Anexo</CardTitle>
              <CardDescription>Get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  <span>support@anexo.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-2" />
                  <a href="https://www.anexo.com" className="text-primary hover:underline">
                    www.anexo.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Building className="mr-2" />
                  <span>123 Learning Lane, Education City, CA 90210</span>
                </div>
              </div>
              <div className="mt-6">
                <Button>Schedule a Demo</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecosystem">
          <Card>
            <CardHeader>
              <CardTitle>Anexo in the Hubverse Ecosystem</CardTitle>
              <CardDescription>Leveraging synergies for comprehensive business solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As a proud member of the Hubverse family, Anexo collaborates closely with our sister companies to
                provide a holistic suite of services that empower businesses and individuals alike. Our integrated
                approach ensures that clients can access a full spectrum of solutions, from education to marketing and
                beyond.
              </p>
              <h3 className="text-lg font-semibold mb-2">Ecosystem Integrations:</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Fundex (Digital Marketing):</strong> Anexo partners with Fundex to offer courses on digital
                  marketing, while Fundex helps promote Anexo's services to a wider audience.
                </li>
                <li>
                  <strong>Elementalis (Tech Solutions):</strong> Our learning platform is powered by Elementalis'
                  cutting-edge cloud infrastructure, ensuring seamless and scalable delivery of our courses.
                </li>
                <li>
                  <strong>Estore District (E-commerce):</strong> Anexo's e-learning materials and courses are
                  distributed through Estore District's marketplace, reaching a broader customer base.
                </li>
                <li>
                  <strong>Thryvus & Co. (Financial Services):</strong> We collaborate to provide financial literacy
                  courses, while Thryvus offers special financing options for Anexo's long-term programs.
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Benefits of the Hubverse Ecosystem:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive solutions covering education, marketing, technology, and more</li>
                  <li>Seamless integration between services for a unified customer experience</li>
                  <li>Cross-pollination of ideas and resources for innovative offerings</li>
                  <li>Economies of scale leading to cost-effective solutions for our clients</li>
                  <li>Access to a wider network of industry experts and thought leaders</li>
                  <li>Enhanced ability to adapt to market changes and emerging trends</li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold">
                  By choosing Anexo, you're not just getting an education platform – you're tapping into a powerful
                  ecosystem of business solutions designed to drive your success.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
