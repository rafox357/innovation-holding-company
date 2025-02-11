"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, FileText, Award } from "lucide-react"

const boardMembers = [
  {
    name: "Dr. Michael Johnson",
    position: "Chairman & CEO",
    since: "2020",
    committees: ["Executive", "Strategy"],
    background: "Former CEO of Tech Innovations Inc., 25+ years in technology leadership",
  },
  {
    name: "Sarah Chen",
    position: "Lead Independent Director",
    since: "2021",
    committees: ["Audit", "Compensation"],
    background: "CFO of Global Finance Corp., expertise in financial strategy",
  },
  {
    name: "James Wilson",
    position: "Director",
    since: "2022",
    committees: ["Audit", "Nominating"],
    background: "Managing Partner at Wilson Ventures, technology investment expert",
  },
  {
    name: "Dr. Emily Brown",
    position: "Director",
    since: "2023",
    committees: ["Technology", "Strategy"],
    background: "CTO of Innovation Labs, AI and quantum computing specialist",
  },
]

const committees = [
  {
    name: "Audit Committee",
    chair: "Sarah Chen",
    members: 4,
    meetings: 8,
    description: "Oversees financial reporting, internal controls, and audit processes",
  },
  {
    name: "Compensation Committee",
    chair: "James Wilson",
    members: 3,
    meetings: 6,
    description: "Reviews and approves executive compensation and benefits",
  },
  {
    name: "Nominating Committee",
    chair: "Dr. Emily Brown",
    members: 3,
    meetings: 4,
    description: "Evaluates board composition and nominates new directors",
  },
  {
    name: "Technology Committee",
    chair: "Dr. Emily Brown",
    members: 4,
    meetings: 6,
    description: "Oversees technology strategy and innovation initiatives",
  },
]

export default function CorporateGovernancePage() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4">Corporate Governance</h1>
            <p className="text-xl text-muted-foreground">
              Leadership structure and governance policies
            </p>
          </div>
          <Button size="lg">
            <FileText className="mr-2 h-4 w-4" />
            Governance Documents
          </Button>
        </div>

        {/* Governance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Board Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-muted-foreground">Directors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Shield className="h-6 w-6 text-primary" />
              <CardTitle>Independence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">85%</div>
              <p className="text-muted-foreground">Independent</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Award className="h-6 w-6 text-primary" />
              <CardTitle>Diversity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">45%</div>
              <p className="text-muted-foreground">Women & Minorities</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle>Committees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">6</div>
              <p className="text-muted-foreground">Active</p>
            </CardContent>
          </Card>
        </div>

        {/* Board Members */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boardMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <Badge variant="outline">Since {member.since}</Badge>
                      </div>
                      <p className="text-primary font-medium">{member.position}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Committee Memberships:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.committees.map((committee) => (
                          <Badge key={committee} variant="secondary">
                            {committee}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{member.background}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Board Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((committee) => (
              <Card key={committee.name}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{committee.name}</h3>
                      <p className="text-muted-foreground">{committee.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Chair</p>
                        <p className="font-medium">{committee.chair}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Members</p>
                        <p className="font-medium">{committee.members}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Annual Meetings</p>
                        <p className="font-medium">{committee.meetings}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Governance Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Governance Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Corporate Bylaws</h3>
              <p className="text-muted-foreground">
                Company bylaws and governance structure
              </p>
              <Button variant="outline">Download PDF</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Code of Ethics</h3>
              <p className="text-muted-foreground">
                Ethical principles and business conduct guidelines
              </p>
              <Button variant="outline">Download PDF</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Committee Charters</h3>
              <p className="text-muted-foreground">
                Detailed committee responsibilities and procedures
              </p>
              <Button variant="outline">Download PDF</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
