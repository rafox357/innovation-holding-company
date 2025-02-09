import type { Metadata } from "next"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <h1>Terms of Service</h1>
        
        <p>Last updated: February 8, 2024</p>

        <h2>1. Introduction</h2>
        <p>Welcome to Hubverse Group. By accessing our website and services, you agree to these terms of service.</p>

        <h2>2. Definitions</h2>
        <ul>
          <li>"Company", "we", "us" refers to Hubverse Group</li>
          <li>"Services" refers to all products, services, and websites offered by Hubverse Group</li>
          <li>"User", "you" refers to any individual or entity using our Services</li>
        </ul>

        <h2>3. Use of Services</h2>
        <p>You agree to use our Services in accordance with these terms and all applicable laws and regulations.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content, trademarks, and intellectual property on our Services belong to Hubverse Group.</p>

        <h2>5. Privacy</h2>
        <p>Your use of our Services is also governed by our <Link href="/legal/privacy-policy">Privacy Policy</Link>.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Hubverse Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>

        <h2>7. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of our Services constitutes acceptance of any changes.</p>

        <h2>8. Contact</h2>
        <p>If you have any questions about these terms, please contact us at legal@hubverse.com</p>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Terms of Service | Hubverse",
  description: "Hubverse Group Terms of Service Agreement",
}
