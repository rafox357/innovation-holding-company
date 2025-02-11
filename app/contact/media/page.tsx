import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Newspaper, Calendar } from "lucide-react"

export default function MediaRelations() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Media Relations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get in touch with our media team for press inquiries, interviews, and media resources
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Media Contact</CardTitle>
            <CardDescription>Our dedicated media relations team is here to assist you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">Press Inquiries</h3>
                <p className="text-muted-foreground">media@hubverse.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Newspaper className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">Press Kit</h3>
                <p className="text-muted-foreground">Download our press kit for logos, brand guidelines, and media assets</p>
                <Button variant="outline" className="mt-2">Download Press Kit</Button>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">Media Events</h3>
                <p className="text-muted-foreground">Stay updated on our upcoming media events and press conferences</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Media Request Form</CardTitle>
            <CardDescription>Submit your media-related inquiries</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-medium">Organization</label>
                  <Input id="organization" placeholder="Your organization" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="deadline" className="text-sm font-medium">Deadline</label>
                <Input id="deadline" type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="request" className="text-sm font-medium">Request Details</label>
                <Textarea
                  id="request"
                  placeholder="Please provide details about your media request"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Submit Request</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
