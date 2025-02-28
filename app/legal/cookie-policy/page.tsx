"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    performance: false,
    functional: false,
    targeting: false,
  })

  const handleCookiePreferenceChange = (category: keyof typeof cookiePreferences) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const saveCookiePreferences = () => {
    console.log("Saving cookie preferences:", cookiePreferences)
    // Implement actual saving logic here
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="cosmic-title text-4xl font-bold mb-8 text-center">HUBVERSE GROUP COOKIE POLICY</h1>
      <div className="mb-8 text-center">
        <p className="mb-2">
          <strong>Last Updated:</strong> June 15, 2023
        </p>
        <p>
          <strong>Effective Date:</strong> July 1, 2023
        </p>
      </div>

      <nav className="mb-12 p-6 cosmic-card rounded-lg shadow-md" aria-label="Table of Contents">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-yellow-100 border-b pb-2">
          Table of Contents
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-blue-800 dark:text-yellow-200">
          {[
            "Introduction",
            "What Are Cookies?",
            "Types of Cookies We Use",
            "Consent Management",
            "Third-Party Cookies",
            "Managing Cookies",
            "Retention Periods",
            "International Data Transfers",
            "Policy Updates",
            "Contact Us",
          ].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="introduction" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">1. Introduction</h2>
        <p className="mb-4 leading-relaxed">
          This Cookie Policy explains how Hubverse Inc. ("Hubverse," "we," "us") and its subsidiaries use cookies and
          similar tracking technologies across our websites, apps, and platforms (collectively, "Services"). This Policy
          applies to all Hubverse Group entities, including:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 text-blue-800 dark:text-yellow-200">
          <li>Anexo (Course Programs)</li>
          <li>ExoNet (Consulting Management)</li>
          <li>Elementalis (Software/Hardware)</li>
          <li>Estore District (E-Commerce)</li>
          <li>Fundex Technologies (Marketing)</li>
          <li>Cosmo & Compass Co. (Real Estate)</li>
          <li>Thryvus & Co. (Financial Services)</li>
          <li>Ponce Industries (Manufacturing/Logistics)</li>
        </ul>
        <p className="mb-4 leading-relaxed">By using our Services, you consent to cookies as described below.</p>
      </section>

      <section id="what-are-cookies" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">2. What Are Cookies?</h2>
        <p className="mb-4 leading-relaxed">
          Cookies are small text files stored on your device (computer, phone, tablet) when you visit our websites or
          use our apps. They enable features like remembering login sessions, preferences, and analytics. Similar
          technologies include:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 text-blue-800 dark:text-yellow-200">
          <li>Web beacons (tracking pixels)</li>
          <li>Local Storage (HTML5)</li>
          <li>Device fingerprinting</li>
        </ul>
      </section>

      <section id="types-of-cookies" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">3. Types of Cookies We Use</h2>
        <p className="mb-4 leading-relaxed">We categorize cookies based on their purpose and lifespan:</p>
        <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-card text-card-foreground shadow-md overflow-hidden">
          <Table>
            <TableCaption>Types of Cookies Used by Hubverse Group</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Category</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Examples</TableHead>
                <TableHead>Subsidiary Use Cases</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Strictly Necessary</TableCell>
                <TableCell>
                  Essential for core functionality. <em>Cannot be opted out of.</em>
                </TableCell>
                <TableCell>Session cookies, load-balancing cookies</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Estore District: Shopping cart retention</li>
                    <li>Thryvus & Co.: Secure login sessions</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Performance</TableCell>
                <TableCell>Analyze traffic and user behavior</TableCell>
                <TableCell>Google Analytics, Hotjar</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Anexo: Track course completion rates</li>
                    <li>ExoNet: Improve consulting portals</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Functional</TableCell>
                <TableCell>Remember preferences and settings</TableCell>
                <TableCell>Language selectors, font-size settings</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Elementalis: Save dashboard configurations</li>
                    <li>Ponce Industries: Warehouse portal preferences</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Targeting/Advertising</TableCell>
                <TableCell>Deliver personalized ads and measure campaigns</TableCell>
                <TableCell>Facebook Pixel, LinkedIn Insights Tag</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Fundex Technologies: Retargeting ads for clients</li>
                    <li>Cosmo & Compass Co.: Property ad campaigns</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section id="consent-management" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">4. Consent Management</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">
              4.1 EU/UK Users (GDPR Compliance)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-yellow-200">
              <li>A cookie banner will appear upon your first visit, requesting consent for non-essential cookies.</li>
              <li>You can adjust preferences at any time via our Cookie Consent Dashboard below.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">
              4.2 California Users (CCPA/CPRA Compliance)
            </h3>
            <p>
              Use the Cookie Consent Dashboard below to opt out of cookies used for cross-context behavioral
              advertising.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">4.3 Global Users</h3>
            <p>
              Continued use of Services implies consent to cookies per this Policy. You can manage your preferences
              using the dashboard below.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 cosmic-card rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-yellow-100">Cookie Consent Dashboard</h3>
          <div className="space-y-4">
            {Object.entries(cookiePreferences).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-blue-800 dark:text-yellow-200">
                  {key.charAt(0).toUpperCase() + key.slice(1)} Cookies
                </span>
                <Switch
                  checked={value}
                  onCheckedChange={() => handleCookiePreferenceChange(key as keyof typeof cookiePreferences)}
                  disabled={key === "necessary"}
                  aria-label={`Toggle ${key} Cookies`}
                />
              </div>
            ))}
          </div>
          <Button onClick={saveCookiePreferences} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Save Preferences
          </Button>
        </div>
      </section>

      <section id="third-party-cookies" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">5. Third-Party Cookies</h2>
        <p className="mb-4 leading-relaxed">We partner with third parties that may place cookies on your device:</p>
        <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-card text-card-foreground shadow-md overflow-hidden">
          <Table>
            <TableCaption>Third-Party Cookies Used by Hubverse Group</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Service</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Opt-Out Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Google Analytics</TableCell>
                <TableCell>Traffic analysis and reporting</TableCell>
                <TableCell>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:underline dark:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Opt-Out
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Meta (Facebook)</TableCell>
                <TableCell>Ad targeting and measurement</TableCell>
                <TableCell>
                  <a
                    href="https://www.facebook.com/adpreferences"
                    className="text-blue-600 hover:underline dark:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook Ad Preferences
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">LinkedIn</TableCell>
                <TableCell>B2B marketing and lead generation</TableCell>
                <TableCell>
                  <a
                    href="https://www.linkedin.com/psettings/guest-controls"
                    className="text-blue-600 hover:underline dark:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Opt-Out
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Stripe</TableCell>
                <TableCell>Payment processing (e.g., Estore District)</TableCell>
                <TableCell>Managed via Stripe account settings</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm italic text-blue-700 dark:text-yellow-300">
          We do not control third-party cookies. Review their policies directly.
        </p>
      </section>

      <section id="managing-cookies" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">6. Managing Cookies</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">6.1 Browser Settings</h3>
            <p className="mb-2">Adjust cookie preferences via your browser:</p>
            <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-yellow-200">
              <li>
                <strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data
              </li>
              <li>
                <strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">
              6.2 Industry Opt-Out Tools
            </h3>
            <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-yellow-200">
              <li>
                <strong>Digital Advertising Alliance (DAA):</strong>{" "}
                <a
                  href="https://optout.aboutads.info"
                  className="text-blue-600 hover:underline dark:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  optout.aboutads.info
                </a>
              </li>
              <li>
                <strong>Network Advertising Initiative (NAI):</strong>{" "}
                <a
                  href="https://optout.networkadvertising.org"
                  className="text-blue-600 hover:underline dark:text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  optout.networkadvertising.org
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">6.3 Mobile Devices</h3>
            <p className="text-blue-800 dark:text-yellow-200">
              Adjust ad tracking via iOS "Limit Ad Tracking" or Android "Opt Out of Ads Personalization."
            </p>
          </div>
        </div>
      </section>

      <section id="retention-periods" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">7. Retention Periods</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-yellow-200">
          <li>
            <strong>Session Cookies:</strong> Expire when you close your browser.
          </li>
          <li>
            <strong>Persistent Cookies:</strong> Last up to 24 months unless manually deleted.
          </li>
        </ul>
      </section>

      <section id="international-data-transfers" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">8. International Data Transfers</h2>
        <p className="mb-4 leading-relaxed text-blue-800 dark:text-yellow-200">
          Data collected via cookies may be transferred globally. For EU/UK users, transfers rely on:
        </p>
        <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-yellow-200">
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Adequacy Decisions</li>
        </ul>
      </section>

      <section id="policy-updates" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">9. Policy Updates</h2>
        <p className="mb-4 leading-relaxed text-blue-800 dark:text-yellow-200">
          We will notify you of material changes via:
        </p>
        <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-yellow-200">
          <li>A banner on our websites.</li>
          <li>Email (for registered users).</li>
        </ul>
      </section>

      <section id="contact-us" className="mb-12">
        <h2 className="cosmic-title text-3xl font-semibold mb-6">10. Contact Us</h2>
        <p className="mb-4 leading-relaxed text-blue-800 dark:text-yellow-200">
          For cookie-related inquiries or to exercise your rights:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">
              Data Protection Officer (DPO):
            </h3>
            <p className="text-blue-800 dark:text-yellow-200">
              <strong>Name:</strong> Jane Doe
            </p>
            <p className="text-blue-800 dark:text-yellow-200">
              <strong>Email:</strong> dpo@hubverse.com
            </p>
            <p className="text-blue-800 dark:text-yellow-200">
              <strong>Phone:</strong> +1 (800) 123-4567
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-yellow-100">
              EU Representative (GDPR Article 27):
            </h3>
            <p className="text-blue-800 dark:text-yellow-200">John Smith</p>
            <p className="text-blue-800 dark:text-yellow-200">123 EU Street, Brussels, Belgium</p>
            <p className="text-blue-800 dark:text-yellow-200">Email: eu-rep@hubverse.com</p>
          </div>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-blue-300 dark:border-blue-700">
        <Link href="/" className="text-blue-600 hover:underline dark:text-yellow-400">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

