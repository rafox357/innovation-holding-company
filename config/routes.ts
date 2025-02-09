export interface Route {
  name: string;
  href: string;
  description?: string;
  icon?: string;
  children?: Route[];
}

export interface RouteCategory {
  category: string;
  items: Route[];
}

export const mainRoutes: RouteCategory[] = [
  {
    category: "Overview",
    items: [
      { 
        name: "Dashboard", 
        href: "/dashboard",
        description: "View your personalized dashboard with key metrics and insights"
      },
      { 
        name: "About", 
        href: "/about",
        description: "Learn more about our company and mission"
      },
    ],
  },
  {
    category: "Business",
    items: [
      { 
        name: "Subsidiaries", 
        href: "/business/subsidiaries",
        description: "Explore our portfolio of innovative companies",
        children: [
          { name: "Fundex", href: "/business/subsidiaries/fundex" },
          { name: "Elementalis", href: "/business/subsidiaries/elementalis" },
          { name: "Thryvus", href: "/business/subsidiaries/thryvus" },
          { name: "Anexo", href: "/business/subsidiaries/anexo" },
          { name: "Cosmo-Compass", href: "/business/subsidiaries/cosmo-compass" },
          { name: "Estore District", href: "/business/subsidiaries/estore-district" },
          { name: "Exonet", href: "/business/subsidiaries/exonet" },
          { name: "Ponce", href: "/business/subsidiaries/ponce" },
        ]
      },
      { 
        name: "Business Plan", 
        href: "/business-plan",
        description: "View our comprehensive business strategy and roadmap"
      },
      { 
        name: "Future Projects", 
        href: "/future-projects",
        description: "Discover upcoming initiatives and innovations"
      },
      { 
        name: "Fundraising", 
        href: "/fundraising",
        description: "Learn about investment opportunities and funding rounds"
      },
    ],
  },
  {
    category: "Finance",
    items: [
      { 
        name: "Investor Relations", 
        href: "/investor-relations",
        description: "Access financial reports and investor resources"
      },
      { 
        name: "Analytics", 
        href: "/analytics",
        description: "Dive deep into data-driven insights and metrics"
      },
    ],
  },
  {
    category: "Platform",
    items: [
      {
        name: "Blueprint Platform",
        href: "/blueprint-platform",
        description: "Explore our innovative technology platform",
        children: [
          { name: "Overview", href: "/blueprint-platform/overview" },
          { name: "Components", href: "/blueprint-platform/components" },
          { name: "Technology Stack", href: "/blueprint-platform/technology-stack" },
          { name: "Implementation", href: "/blueprint-platform/implementation" },
          { name: "Benefits", href: "/blueprint-platform/benefits" },
          { name: "Case Studies", href: "/blueprint-platform/case-studies" },
          { name: "FAQ", href: "/blueprint-platform/faq" },
          { name: "Resources", href: "/blueprint-platform/resources" },
        ]
      }
    ]
  },
  {
    category: "News & Updates",
    items: [
      { 
        name: "News", 
        href: "/news",
        description: "Stay updated with our latest news and announcements",
        children: [
          { name: "Latest", href: "/news/latest" },
          { name: "Announcements", href: "/news/announcements" },
          { name: "Insights", href: "/news/insights" },
          { name: "Community", href: "/news/community" },
        ]
      },
    ],
  },
  {
    category: "Legal & Sustainability",
    items: [
      { 
        name: "Legal & Compliance", 
        href: "/legal-and-compliance",
        description: "Access legal documents and compliance information"
      },
      { 
        name: "Privacy Policy", 
        href: "/legal/privacy-policy",
        description: "Read our privacy policy"
      },
      { 
        name: "Terms of Service", 
        href: "/legal/terms-of-service",
        description: "View our terms of service"
      },
      { 
        name: "Cookie Policy", 
        href: "/legal/cookie-policy",
        description: "Learn about our cookie policy"
      },
    ],
  },
  {
    category: "Contact",
    items: [
      { 
        name: "Contact", 
        href: "/contact",
        description: "Get in touch with our team"
      },
    ],
  },
];
