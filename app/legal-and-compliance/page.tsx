import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"

export default function LegalAndCompliancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Legal & Compliance", href: "/legal-and-compliance" },
        ]}
      />

      <h1 className="text-4xl font-bold mb-8 cosmic-title glow">Legal & Compliance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Policies & Procedures</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="#" className="cosmic-link">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  Anti-Corruption Policy
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  Data Protection Policy
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  Whistleblower Policy
                </a>
              </li>
            </ul>
            <Button className="cosmic-button mt-4">View All Policies</Button>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Compliance Training</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Stay up-to-date with our latest compliance requirements.</p>
            <Button className="cosmic-button">Start Training</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="cosmic-card mb-8">
        <CardHeader>
          <CardTitle className="cosmic-title">Regulatory Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>New Data Protection Regulations</AccordionTrigger>
              <AccordionContent>
                Updated guidelines on handling customer data will be effective from July 1, 2025. All employees must
                complete the new data protection training by June 15, 2025.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Changes to Anti-Money Laundering Procedures</AccordionTrigger>
              <AccordionContent>
                New AML procedures will be implemented starting August 1, 2025. Training sessions will be conducted
                throughout July.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Updated Code of Conduct</AccordionTrigger>
              <AccordionContent>
                Our Code of Conduct has been updated to reflect new industry standards. Please review the changes and
                acknowledge receipt by September 1, 2025.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Compliance Hotline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Report any compliance concerns anonymously.</p>
            <Button className="cosmic-button">Contact Hotline</Button>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="cosmic-title">Legal Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="#" className="cosmic-link">
                  Contract Templates
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  Legal FAQ
                </a>
              </li>
              <li>
                <a href="#" className="cosmic-link">
                  Regulatory Compliance Checklist
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

