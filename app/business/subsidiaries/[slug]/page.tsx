import { notFound } from "next/navigation"
import { SubsidiaryHero } from "@/components/subsidiary/subsidiary-hero"
import { SubsidiaryContent } from "@/components/subsidiary/subsidiary-content"

// Subsidiary data
const subsidiaries = {
  elementalis: {
    name: "Elementalis",
    description: "Leading the way in sustainable energy solutions and environmental innovation",
    logo: "/logos/elementalis.svg",
    coverImage: "/covers/elementalis-cover.svg",
    stats: [
      { label: "Renewable Energy Projects", value: "50+" },
      { label: "Carbon Reduction", value: "30%" },
      { label: "Global Partners", value: "100+" },
    ],
    features: [
      {
        title: "Smart Grid Solutions",
        description: "Advanced grid management systems for optimal energy distribution and efficiency",
      },
      {
        title: "Renewable Integration",
        description: "Seamless integration of solar, wind, and other renewable energy sources",
      },
      {
        title: "Energy Storage",
        description: "Next-generation battery technology for reliable energy storage",
      },
    ],
    services: [
      "Energy Efficiency Consulting",
      "Renewable Energy Implementation",
      "Smart Grid Development",
      "Carbon Footprint Analysis",
      "Sustainability Planning",
    ],
  },
  fundex: {
    name: "Fundex",
    description: "Revolutionizing financial technology with innovative solutions",
    logo: "/logos/fundex.svg",
    coverImage: "/covers/fundex-cover.svg",
    stats: [
      { label: "Active Users", value: "1M+" },
      { label: "Daily Transactions", value: "$50M" },
      { label: "Partner Banks", value: "50+" },
    ],
    features: [
      {
        title: "Digital Banking",
        description: "Modern banking solutions for the digital age",
      },
      {
        title: "Investment Platform",
        description: "Smart investment tools and portfolio management",
      },
      {
        title: "Payment Solutions",
        description: "Secure and efficient payment processing systems",
      },
    ],
    services: [
      "Digital Banking Services",
      "Investment Management",
      "Payment Processing",
      "Financial Analytics",
      "Wealth Management",
    ],
  },
  thryvus: {
    name: "Thryvus",
    description: "Transforming healthcare through digital innovation",
    logo: "/logos/thryvus.svg",
    coverImage: "/covers/thryvus-cover.svg",
    stats: [
      { label: "Healthcare Providers", value: "500+" },
      { label: "Patient Records", value: "5M+" },
      { label: "Success Rate", value: "99%" },
    ],
    features: [
      {
        title: "Telemedicine Platform",
        description: "Connect with healthcare providers remotely",
      },
      {
        title: "Health Records",
        description: "Secure digital health record management",
      },
      {
        title: "AI Diagnostics",
        description: "Advanced AI-powered diagnostic tools",
      },
    ],
    services: [
      "Telemedicine Services",
      "Health Record Management",
      "Medical Analytics",
      "Healthcare Provider Network",
      "Patient Care Solutions",
    ],
  },
  anexo: {
    name: "Anexo",
    description: "Optimizing supply chains through advanced analytics and automation",
    logo: "/logos/anexo.svg",
    coverImage: "/covers/anexo-cover.svg",
    stats: [
      { label: "Supply Chain Partners", value: "200+" },
      { label: "Efficiency Increase", value: "40%" },
      { label: "Cost Reduction", value: "25%" },
    ],
    features: [
      {
        title: "Supply Chain Analytics",
        description: "Real-time analytics and optimization tools",
      },
      {
        title: "Inventory Management",
        description: "Smart inventory tracking and forecasting",
      },
      {
        title: "Logistics Optimization",
        description: "Advanced route planning and delivery optimization",
      },
    ],
    services: [
      "Supply Chain Consulting",
      "Inventory Management",
      "Logistics Planning",
      "Procurement Solutions",
      "Distribution Optimization",
    ],
  },
  "estore-district": {
    name: "E-Store District",
    description: "Empowering businesses with comprehensive e-commerce solutions",
    logo: "/logos/estore.svg",
    coverImage: "/covers/estore-cover.svg",
    stats: [
      { label: "Online Stores", value: "10K+" },
      { label: "Daily Orders", value: "100K+" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    features: [
      {
        title: "E-commerce Platform",
        description: "Complete online store management solution",
      },
      {
        title: "Order Management",
        description: "Streamlined order processing and fulfillment",
      },
      {
        title: "Analytics Dashboard",
        description: "Comprehensive sales and customer analytics",
      },
    ],
    services: [
      "E-commerce Platform",
      "Order Management",
      "Inventory Control",
      "Customer Support",
      "Marketing Tools",
    ],
  },
  exonet: {
    name: "Exonet",
    description: "Building the future of cloud infrastructure and cybersecurity",
    logo: "/logos/exonet.svg",
    coverImage: "/covers/exonet-cover.svg",
    stats: [
      { label: "Data Centers", value: "20+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Enterprise Clients", value: "500+" },
    ],
    features: [
      {
        title: "Cloud Infrastructure",
        description: "Scalable and reliable cloud hosting solutions",
      },
      {
        title: "Cybersecurity",
        description: "Advanced threat detection and prevention",
      },
      {
        title: "Network Solutions",
        description: "High-performance networking and CDN services",
      },
    ],
    services: [
      "Cloud Hosting",
      "Cybersecurity",
      "Network Solutions",
      "Data Center Services",
      "IT Consulting",
    ],
  },
  "cosmo-compass": {
    name: "Cosmo-Compass",
    description: "Advanced Navigation and Location Solutions",
    logo: "/logos/cosmo-compass.svg",
    coverImage: "/covers/cosmo-compass-cover.svg",
    stats: [
      { label: "Global Coverage", value: "99%" },
      { label: "Active Users", value: "10M+" },
      { label: "Accuracy Rate", value: "99.9%" },
    ],
    features: [
      {
        title: "Navigation Systems",
        description: "High-precision navigation and positioning solutions",
      },
      {
        title: "Location Services",
        description: "Real-time location tracking and mapping",
      },
      {
        title: "Route Optimization",
        description: "Intelligent route planning and traffic analysis",
      },
    ],
    services: [
      "Navigation Solutions",
      "Location Services",
      "Route Planning",
      "Traffic Analysis",
      "GPS Integration",
    ],
  },
  ponce: {
    name: "Ponce",
    description: "Innovative Digital Marketing Solutions",
    logo: "/logos/ponce.svg",
    coverImage: "/covers/ponce-cover.svg",
    stats: [
      { label: "Client Success Rate", value: "95%" },
      { label: "ROI Increase", value: "150%" },
      { label: "Global Reach", value: "100+" },
    ],
    features: [
      {
        title: "Digital Strategy",
        description: "Comprehensive digital marketing strategies and campaigns",
      },
      {
        title: "Content Creation",
        description: "Engaging content across all digital platforms",
      },
      {
        title: "Analytics",
        description: "Data-driven marketing insights and optimization",
      },
    ],
    services: [
      "Digital Marketing",
      "Content Strategy",
      "Social Media",
      "SEO Optimization",
      "Marketing Analytics",
    ],
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function SubsidiaryPage({ params }: PageProps) {
  const subsidiary = subsidiaries[params.slug as keyof typeof subsidiaries]

  if (!subsidiary) {
    notFound()
  }

  return (
    <main>
      <SubsidiaryHero {...subsidiary} />
      <SubsidiaryContent
        features={subsidiary.features}
        services={subsidiary.services}
        ctaText="Contact Us"
        ctaLink={`/contact?subsidiary=${params.slug}`}
      />
    </main>
  )
}
