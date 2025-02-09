import Link from "next/link"
import type { Metadata } from "next"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">HUBVERSE GROUP PRIVACY POLICY</h1>
      <div className="mb-8 text-center">
        <p className="mb-2">
          <strong>Last Updated:</strong> [Month/Day/Year]
        </p>
        <p>
          <strong>Effective Date:</strong> [Month/Day/Year]
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <a
              href="#introduction"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="#data-collection"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Data Collection
            </a>
          </li>
          <li>
            <a
              href="#legal-basis"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Legal Basis for Processing (GDPR)
            </a>
          </li>
          <li>
            <a
              href="#data-use"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              How We Use Data
            </a>
          </li>
          <li>
            <a
              href="#data-sharing"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Data Sharing
            </a>
          </li>
          <li>
            <a
              href="#your-rights"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Your Rights
            </a>
          </li>
          <li>
            <a
              href="#data-security"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Data Security
            </a>
          </li>
          <li>
            <a
              href="#retention"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Retention
            </a>
          </li>
          <li>
            <a
              href="#childrens-privacy"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Children's Privacy
            </a>
          </li>
          <li>
            <a
              href="#updates"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Updates
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ol>
      </div>

      <section id="introduction" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">1. Introduction</h2>
        <p className="mb-4 leading-relaxed">
          Hubverse Inc. ("Hubverse," "we," "us") and its subsidiaries (collectively, "Hubverse Group") are committed to
          protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard personal data
          across our entities, including:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Anexo (Course Programs)</li>
          <li>ExoNet (Consulting Management)</li>
          <li>Elementalis (Software/Hardware)</li>
          <li>Estore District (E-Commerce)</li>
          <li>Fundex Technologies (Marketing)</li>
          <li>Cosmo & Compass Co. (Real Estate)</li>
          <li>Thryvus & Co. (Financial Services)</li>
          <li>Ponce Industries (Manufacturing/Logistics)</li>
        </ul>
        <p className="mb-4 leading-relaxed">This Policy complies with:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>GDPR (EU/UK)</li>
          <li>CCPA/CPRA (California)</li>
          <li>PIPEDA (Canada)</li>
          <li>LGPD (Brazil)</li>
          <li>Other applicable U.S. federal/state laws (e.g., COPPA, HIPAA if applicable)</li>
        </ul>
      </section>

      <section id="data-collection" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">2. Data Collection</h2>
        <p className="mb-4 leading-relaxed">We collect data through:</p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">2.1 Direct Interactions</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Registration:</strong> Name, email, phone (e.g., Anexo course signups).
              </li>
              <li>
                <strong>Transactions:</strong> Billing addresses, payment details (e.g., Estore District purchases).
              </li>
              <li>
                <strong>Employment:</strong> Resumes, Social Security Numbers (via Hubverse HR centralization).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2.2 Automated Technologies</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Device/Usage Data:</strong> IP addresses, browser type, cookies (see{" "}
                <Link href="/legal/cookie-policy" className="text-blue-600 hover:underline">
                  Cookie Policy
                </Link>
                ).
              </li>
              <li>
                <strong>Analytics:</strong> Software usage patterns (e.g., Elementalis product diagnostics).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2.3 Third Parties</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Partners:</strong> Marketing leads (e.g., Fundex Technologies campaigns).
              </li>
              <li>
                <strong>Public Sources:</strong> Business contact details (e.g., ExoNet consulting prospects).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2.4 Sensitive Data</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Financial Data:</strong> Bank accounts, credit scores (Thryvus & Co. services).
              </li>
              <li>
                <strong>Health Data:</strong> Employee insurance details (Hubverse HR benefits).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="legal-basis" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">3. Legal Basis for Processing (GDPR)</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Consent:</strong> Marketing communications, cookies.
          </li>
          <li>
            <strong>Contract:</strong> Service delivery, account management.
          </li>
          <li>
            <strong>Legal Obligation:</strong> Tax records, regulatory compliance.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Fraud prevention, business analytics.
          </li>
        </ul>
      </section>

      <section id="data-use" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">4. How We Use Data</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide and improve services</li>
          <li>Process transactions</li>
          <li>Personalize user experiences</li>
          <li>Communicate about products/services</li>
          <li>Conduct market research</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section id="data-sharing" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">5. Data Sharing</h2>
        <p className="mb-4 leading-relaxed">We share data with:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Hubverse Group Entities:</strong> For integrated services.
          </li>
          <li>
            <strong>Service Providers:</strong> Payment processors, cloud storage.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law.
          </li>
          <li>
            <strong>Business Partners:</strong> With your consent (e.g., joint offerings).
          </li>
        </ul>
      </section>

      <section id="your-rights" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">6. Your Rights</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">6.1 Access & Portability</h3>
            <p className="leading-relaxed">Request a copy of your data in a machine-readable format (e.g., CSV).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">6.2 Deletion</h3>
            <p className="leading-relaxed">
              Ask us to erase data unless retained for legal reasons (e.g., tax records).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">6.3 Correction</h3>
            <p className="leading-relaxed">Update inaccurate information (e.g., HR records via Hubverse).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">6.4 Opt-Out Rights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>CCPA/CPRA:</strong> Click "Do Not Sell or Share My Personal Information" on subsidiary websites.
              </li>
              <li>
                <strong>Marketing:</strong> Unsubscribe via email footer or Privacy Dashboard.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">6.5 Automated Decisions</h3>
            <p className="leading-relaxed">Object to profiling (e.g., Thryvus & Co. loan eligibility algorithms).</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Submit Requests To:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Email:</strong> privacy@hubverse.com
            </li>
            <li>
              <strong>Portal:</strong> https://hubverse.com/privacy-requests
            </li>
            <li>
              <strong>Phone:</strong> +1 (800) 123-4567
            </li>
          </ul>
        </div>
      </section>

      <section id="data-security" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">7. Data Security</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Encryption:</strong> AES-256 for data at rest and TLS 1.3 for data in transit.
          </li>
          <li>
            <strong>Access Controls:</strong> Role-based permissions, multi-factor authentication.
          </li>
          <li>
            <strong>Audits:</strong> Annual penetration testing, SOC 2 compliance.
          </li>
        </ul>
      </section>

      <section id="retention" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">8. Retention</h2>
        <p className="mb-4 leading-relaxed">We retain data only as long as necessary:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Transactions:</strong> 7 years (tax compliance)
          </li>
          <li>
            <strong>HR Records:</strong> 10 years post-employment
          </li>
          <li>
            <strong>Marketing:</strong> 3 years after last interaction
          </li>
        </ul>
      </section>

      <section id="childrens-privacy" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">9. Children's Privacy</h2>
        <p className="leading-relaxed">
          Services are not directed to users under 16. Report accidental collection to{" "}
          <a href="mailto:dpo@hubverse.com" className="text-blue-600 hover:underline">
            dpo@hubverse.com
          </a>
          .
        </p>
      </section>

      <section id="updates" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">10. Updates</h2>
        <p className="leading-relaxed">
          We will notify you of material changes via email or website banners 30 days in advance.
        </p>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">11. Contact</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Data Protection Officer (DPO)</h3>
            <p>
              <strong>Name:</strong> Jane Doe
            </p>
            <p>
              <strong>Email:</strong> dpo@hubverse.com
            </p>
            <p>
              <strong>Address:</strong> 123 Compliance Lane, Delaware, USA
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">EU Representative (GDPR Article 27)</h3>
            <p>[Name/Address of EU-based representative]</p>
          </div>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-gray-300">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Privacy Policy | Hubverse",
  description: "Hubverse Group Privacy Policy",
}
