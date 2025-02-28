
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="space-y-6">
            {/* Performance metrics would go here */}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="plans">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Subscription plan cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="max-w-2xl mx-auto">
            {/* Contact form would go here */}
          </div>
        </TabsContent>

        <TabsContent value="ecosystem">
          <div className="space-y-6">
            {/* Ecosystem information would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
