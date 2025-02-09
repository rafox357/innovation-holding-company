"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is The Blueprint Platform?",
    answer:
      "The Blueprint Platform is Hubverse's revolutionary approach to creating a seamlessly integrated business ecosystem. It connects all our subsidiaries and services, enabling unprecedented levels of collaboration, efficiency, and innovation.",
  },
  {
    question: "How does The Blueprint Platform benefit Hubverse clients?",
    answer:
      "Clients benefit from seamless access to all Hubverse services, personalized solutions drawing from our full range of capabilities, faster response times, and innovative products developed through cross-subsidiary collaboration.",
  },
  {
    question: "Is The Blueprint Platform secure?",
    answer:
      "Yes, security is a top priority. The Blueprint Platform utilizes advanced encryption, blockchain technology for data integrity, and adheres to the highest industry standards for data protection and privacy.",
  },
  {
    question: "How long does it take to implement The Blueprint Platform?",
    answer:
      "The full implementation of The Blueprint Platform is a phased process that takes approximately 24-36 months. However, we start seeing benefits from the early stages of implementation.",
  },
  {
    question: "Can The Blueprint Platform integrate with existing systems?",
    answer:
      "Yes, The Blueprint Platform is designed with flexibility in mind. It can integrate with a wide range of existing systems and can be customized to meet specific needs.",
  },
  {
    question: "How does The Blueprint Platform use AI?",
    answer:
      "AI is a core component of The Blueprint Platform. It's used for predictive analytics, decision support, process optimization, personalized client experiences, and driving innovation across all Hubverse operations.",
  },
  {
    question: "What makes The Blueprint Platform different from other business ecosystems?",
    answer:
      "The Blueprint Platform stands out due to its comprehensive integration across all business functions, AI-driven insights and automation, blockchain-based security and transparency, and its ability to foster unprecedented levels of cross-subsidiary collaboration and innovation.",
  },
  {
    question: "How does The Blueprint Platform handle data privacy and compliance?",
    answer:
      "The Blueprint Platform is designed with privacy and compliance at its core. It includes features for data anonymization, consent management, and adherence to global data protection regulations like GDPR and CCPA.",
  },
  {
    question: "Can The Blueprint Platform scale as Hubverse grows?",
    answer:
      "Absolutely. Scalability is a key feature of The Blueprint Platform. Its modular architecture allows for easy expansion and integration of new subsidiaries or services as Hubverse grows.",
  },
  {
    question: "How can I learn more about The Blueprint Platform?",
    answer:
      "You can explore our detailed pages on The Blueprint Platform's components, interactions, benefits, and case studies. For a personalized demonstration, please contact our sales team.",
  },
]

export default function BlueprintFAQ() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Blueprint Platform", href: "/unified-ecosystem" },
          { label: "FAQ", href: "/unified-ecosystem/faq" },
        ]}
      />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 cosmic-title glow">The Blueprint Platform: FAQ</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Find answers to commonly asked questions about The Blueprint Platform and how it's transforming Hubverse.
        </p>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Everything you need to know about The Blueprint Platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Still Have Questions?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            If you couldn't find the answer you were looking for, our team is here to help. Contact us for more
            information about The Blueprint Platform and how it can benefit your business.
          </p>
          <Button size="lg">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

