"use client"

import { Button } from "@/components/ui/button"
import { TwitterShareButton, LinkedinShareButton, FacebookShareButton } from "react-share"
import { Twitter, Linkedin, Facebook } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
  description: string
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  return (
    <div className="flex gap-2">
      <TwitterShareButton url={url} title={title}>
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} summary={description}>
        <Button variant="outline" size="icon">
          <Linkedin className="h-4 w-4" />
        </Button>
      </LinkedinShareButton>

      <FacebookShareButton url={url} quote={title}>
        <Button variant="outline" size="icon">
          <Facebook className="h-4 w-4" />
        </Button>
      </FacebookShareButton>
    </div>
  )
}
