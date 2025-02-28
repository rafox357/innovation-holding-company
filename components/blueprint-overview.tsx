import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Layers, RefreshCw, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlueprintOverview() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">The Blueprint Platform: Your Venture Studio & Business-in-a-Box</CardTitle>
          <CardDescription>
            Transforming ideas into fully operational, scalable businesses for non-technical founders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Blueprint Platform is a revolutionary approach to entrepreneurship, designed to remove all barriers to
            entry. We handle everything—from legal setup to product development, marketing, hiring, and
            compliance—allowing you to focus on your vision and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Turnkey Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                Launch your business as easily as ordering a Tesla. We provide end-to-end execution.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="mr-2 h-5 w-5" />
                  Expertise On-Demand
                </CardTitle>
              </CardHeader>
              <CardContent>Access a team of experts across legal, tech, marketing, and operations.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Rapid Launch
                </CardTitle>
              </CardHeader>
              <CardContent>Go from idea to operational business in as little as 1-6 months.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Built for Scale
                </CardTitle>
              </CardHeader>
              <CardContent>Leverage our expertise and partnerships to quickly scale your business.</CardContent>
            </Card>
          </div>
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold">Is The Blueprint Platform Right for You?</h3>
            <p>You're an ideal fit if you're:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A non-technical founder with a scalable business idea</li>
              <li>A corporate refugee with a severance package to invest</li>
              <li>An investor looking to incubate ideas without operational headaches</li>
              <li>An enterprise partner spinning off a new venture</li>
            </ul>
          </div>
          <div className="mt-8 bg-primary/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Our Value Proposition</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upfront fee of $50k-$200k covers all setup costs</li>
              <li>We retain 15% equity in your business</li>
              <li>You focus on vision and growth, we handle all the details</li>
              <li>Access to our network of partners and investors</li>
            </ul>
          </div>
          <div className="mt-8 flex justify-center">
            <Button size="lg">
              Start Your Entrepreneurial Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

