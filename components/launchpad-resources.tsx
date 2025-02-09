import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const resources = {
  technology: [
    {
      name: "AI & Machine Learning Platform",
      description: "Comprehensive suite of AI and ML tools",
      provider: "Elementalis",
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable and secure cloud services",
      provider: "Elementalis",
    },
    {
      name: "Data Analytics Suite",
      description: "Powerful tools for data visualization and BI",
      provider: "Elementalis",
    },
  ],
  funding: [
    {
      name: "Hubverse Ventures",
      description: "Internal funding opportunities for projects",
      provider: "Thryvus & Co",
    },
    {
      name: "Incubation Program",
      description: "Structured program to accelerate project growth",
      provider: "ExoNet",
    },
  ],
  expertise: [
    {
      name: "Hubverse Expert Network",
      description: "Access to specialized knowledge and mentorship",
      provider: "All Companies",
    },
    {
      name: "Training and Development",
      description: "Online learning platform for skill enhancement",
      provider: "Anexo",
    },
  ],
}

export function LaunchpadResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Launchpad: Resources and Tools</CardTitle>
        <CardDescription>Empowering innovation with powerful resources</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="technology">
          <TabsList>
            <TabsTrigger value="technology">Technology Stack</TabsTrigger>
            <TabsTrigger value="funding">Funding & Incubation</TabsTrigger>
            <TabsTrigger value="expertise">Expertise & Mentorship</TabsTrigger>
          </TabsList>
          <TabsContent value="technology">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resources.technology.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{resource.description}</p>
                    <Button variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="funding">
            <div className="grid gap-4 md:grid-cols-2">
              {resources.funding.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{resource.description}</p>
                    <Button variant="outline">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="expertise">
            <div className="grid gap-4 md:grid-cols-2">
              {resources.expertise.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{resource.description}</p>
                    <Button variant="outline">
                      Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

