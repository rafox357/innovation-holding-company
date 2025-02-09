"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Twitter, Linkedin, Github, Facebook } from "lucide-react"

const showcaseItems = [
  {
    name: "Anexo",
    url: "/showcase/anexo",
    type: "EdTech",
    status: "Active",
  },
  {
    name: "Fundex",
    url: "/showcase/fundex",
    type: "Marketing",
    status: "Active",
  },
  {
    name: "Elementalis",
    url: "/showcase/elementalis",
    type: "Research",
    status: "Active",
  },
  {
    name: "Estore District",
    url: "/showcase/estore-district",
    type: "E-commerce",
    status: "In Development",
  },
  {
    name: "ExoNet",
    url: "/showcase/exonet",
    type: "Infrastructure",
    status: "Planning",
  },
  {
    name: "Cosmo & Compass Co.",
    url: "/showcase/cosmo-compass",
    type: "Space Tech",
    status: "Planning",
  },
  {
    name: "Thryvus & Co.",
    url: "/showcase/thryvus",
    type: "Healthcare",
    status: "In Development",
  },
  {
    name: "Ponce Industries",
    url: "/showcase/ponce",
    type: "Manufacturing",
    status: "Planning",
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 cosmic-text">About Hubverse</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Empowering entrepreneurs and driving innovation through our comprehensive ecosystem of services and
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/hubverse" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-blue-600 hover:text-yellow-500 dark:text-blue-400 dark:hover:text-yellow-400" />
              </Link>
              <Link href="https://linkedin.com/company/hubverse" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-blue-600 hover:text-yellow-500 dark:text-blue-400 dark:hover:text-yellow-400" />
              </Link>
              <Link href="https://github.com/hubverse" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-blue-600 hover:text-yellow-500 dark:text-blue-400 dark:hover:text-yellow-400" />
              </Link>
              <Link href="https://facebook.com/hubverse" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-blue-600 hover:text-yellow-500 dark:text-blue-400 dark:hover:text-yellow-400" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 cosmic-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="cosmic-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="cosmic-link">
                  Our Subsidiaries
                </Link>
              </li>
              <li>
                <Link href="/investor-relations" className="cosmic-link">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="cosmic-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 cosmic-text">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms-of-service" className="cosmic-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="cosmic-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="cosmic-link">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 cosmic-text">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Stay updated with our latest news and offerings.
            </p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Enter your email" className="cosmic-input" />
              <Button type="submit" className="cosmic-button">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4 cosmic-text">Hubverse Showcase</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {showcaseItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between cosmic-link"
              >
                <span>{item.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : item.status === "In Development"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}
                >
                  {item.status}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} Hubverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
