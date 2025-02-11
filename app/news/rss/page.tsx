import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rss, Copy, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "RSS Feed | Innovative Holding Company News",
  description: "Subscribe to our RSS feed to stay updated with the latest news and updates from Innovative Holding Company.",
}

export default function RssPage() {
  const rssUrl = "https://innovative-holding.com/api/news/rss"
  
  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">RSS Feed</h1>
          <p className="text-xl text-muted-foreground">
            Subscribe to our RSS feed to stay updated with the latest news and updates
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>RSS Feed URL</CardTitle>
            <CardDescription>
              Use this URL in your favorite RSS reader to subscribe to our news feed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Input
                readOnly
                value={rssUrl}
                className="font-mono"
              />
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(rssUrl)
                }}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>

            <div className="grid gap-4">
              <h3 className="font-semibold">Popular RSS Readers</h3>
              <div className="grid gap-2">
                <Button variant="outline" asChild className="justify-start">
                  <a
                    href={`https://feedly.com/i/subscription/feed/${encodeURIComponent(rssUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/rss/feedly.png"
                      alt="Feedly"
                      className="h-4 w-4 mr-2"
                    />
                    Subscribe with Feedly
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="justify-start">
                  <a
                    href={`https://www.inoreader.com/feed/${encodeURIComponent(rssUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/rss/inoreader.png"
                      alt="Inoreader"
                      className="h-4 w-4 mr-2"
                    />
                    Subscribe with Inoreader
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="justify-start">
                  <a
                    href={rssUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Rss className="h-4 w-4 mr-2" />
                    View Raw Feed
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <h3 className="font-semibold">What is RSS?</h3>
              <p className="text-sm text-muted-foreground">
                RSS (Really Simple Syndication) is a web feed that allows users and applications to access updates to websites in a standardized, computer-readable format. By subscribing to our RSS feed, you&apos;ll receive automatic updates whenever we publish new content.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
