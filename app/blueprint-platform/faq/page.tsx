import type { Metadata } from "next"
import { BlueprintLayout } from "@/components/blueprint-layout"
import { AccordionList } from "@/components/accordion-list"

export const metadata: Metadata = {
  title: "FAQ | Blueprint Platform",
  description: "Frequently asked questions about the Blueprint Platform.",
}

const faqItems = [
  {
    title: "What is the Blueprint Platform?",
    description:
      "The Blueprint Platform is a comprehensive ecosystem designed to streamline and integrate various aspects of business operations. It provides a unified framework for managing projects, collaborations, and workflows across different departments and teams.",
  },
  {
    title: "How can the Blueprint Platform benefit my organization?",
    description:
      "The Blueprint Platform can significantly improve efficiency, collaboration, and decision-making within your organization. It offers centralized data management, streamlined communication, and powerful analytics tools to help you optimize your business processes and drive growth.",
  },
  {
    title: "Is the Blueprint Platform suitable for small businesses?",
    description:
      "Yes, the Blueprint Platform is designed to be scalable and can be tailored to meet the needs of businesses of all sizes. Whether you're a small startup or a large enterprise, our platform can be customized to fit your specific requirements.",
  },
  {
    title: "How long does it take to implement the Blueprint Platform?",
    description:
      "The implementation timeline can vary depending on the size and complexity of your organization. Typically, a basic implementation can be completed within 4-6 weeks, while more comprehensive integrations may take 2-3 months. Our team works closely with you to ensure a smooth and efficient implementation process.",
  },
  {
    title: "What kind of support is available after implementation?",
    description:
      "We offer comprehensive post-implementation support, including 24/7 technical assistance, regular software updates, and ongoing training for your team. Our dedicated support team is always available to address any questions or issues you may encounter.",
  },
  {
    title: "Can the Blueprint Platform integrate with our existing software systems?",
    description:
      "Yes, the Blueprint Platform is designed with integration in mind. It can seamlessly connect with a wide range of popular business software and tools. Our team can work with you to ensure smooth integration with your existing systems and workflows.",
  },
  {
    title: "Is our data secure on the Blueprint Platform?",
    description:
      "Absolutely. We prioritize the security and privacy of your data. The Blueprint Platform employs state-of-the-art encryption, regular security audits, and strict access controls to ensure your information is protected at all times. We also comply with industry-standard data protection regulations.",
  },
  {
    title: "Can we customize the Blueprint Platform to match our brand?",
    description:
      "Yes, the Blueprint Platform offers extensive customization options. You can tailor the user interface to match your brand colors, add your logo, and customize various elements to create a seamless brand experience for your team and clients.",
  },
]

export default function FAQPage() {
  return (
    <BlueprintLayout>
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-xl mb-8">
        Find answers to common questions about the Blueprint Platform. If you can't find what you're looking for, don't
        hesitate to contact our support team.
      </p>

      <AccordionList items={faqItems} />

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="mb-4">
          Our team is here to help. Contact us for more information or to schedule a personalized demo.
        </p>
        <a
          href="/blueprint-platform/contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Contact Support
        </a>
      </div>
    </BlueprintLayout>
  )
}

