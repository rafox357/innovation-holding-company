import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, MessageCircle, Phone, FileText } from "lucide-react"

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Support Center</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to help. Choose from the options below to get started.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="help" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="help">Help Center</TabsTrigger>
            <TabsTrigger value="ticket">Submit Ticket</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>

          <TabsContent value="help">
            <Card>
              <CardHeader>
                <CardTitle>Help Center</CardTitle>
                <CardDescription>Find answers to frequently asked questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button variant="outline" className="h-auto p-4 text-left flex items-start space-x-4">
                    <FileText className="w-5 h-5 mt-1" />
                    <div>
                      <h3 className="font-semibold">Documentation</h3>
                      <p className="text-sm text-muted-foreground">Browse our comprehensive documentation</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left flex items-start space-x-4">
                    <HelpCircle className="w-5 h-5 mt-1" />
                    <div>
                      <h3 className="font-semibold">FAQs</h3>
                      <p className="text-sm text-muted-foreground">Find answers to common questions</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left flex items-start space-x-4">
                    <MessageCircle className="w-5 h-5 mt-1" />
                    <div>
                      <h3 className="font-semibold">Community</h3>
                      <p className="text-sm text-muted-foreground">Join our community forum</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left flex items-start space-x-4">
                    <Phone className="w-5 h-5 mt-1" />
                    <div>
                      <h3 className="font-semibold">Live Support</h3>
                      <p className="text-sm text-muted-foreground">Chat with our support team</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ticket">
            <Card>
              <CardHeader>
                <CardTitle>Submit Support Ticket</CardTitle>
                <CardDescription>Create a new support ticket and we'll respond as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">Category</label>
                    <select id="category" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option value="">Select a category</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing</option>
                      <option value="account">Account</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Description</label>
                    <Textarea
                      id="description"
                      placeholder="Please provide detailed information about your issue"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">Submit Ticket</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get in touch with our support team directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone Support</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-5pm EST</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="w-5 h-5 mt-1" />
                      <div>
                        <h3 className="font-semibold">Live Chat</h3>
                        <p className="text-muted-foreground">Chat with our support team in real-time</p>
                        <Button variant="outline" className="mt-2">Start Chat</Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <HelpCircle className="w-5 h-5 mt-1" />
                      <div>
                        <h3 className="font-semibold">Self-Service</h3>
                        <p className="text-muted-foreground">Browse our knowledge base for quick answers</p>
                        <Button variant="outline" className="mt-2">Visit Knowledge Base</Button>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FileText className="w-5 h-5 mt-1" />
                      <div>
                        <h3 className="font-semibold">Documentation</h3>
                        <p className="text-muted-foreground">Access detailed product documentation</p>
                        <Button variant="outline" className="mt-2">View Docs</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
