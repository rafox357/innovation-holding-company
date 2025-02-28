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
    category: "Innovation Hub",
    items: [
      {
        name: "Innovation Programs",
        href: "/innovation-hub/programs",
        description: "Explore our innovation programs and initiatives",
        children: [
          { name: "Startup Incubator", href: "/innovation-hub/programs/incubator" },
          { name: "The Foundry", href: "/innovation-hub/programs/foundry" },
          { name: "Tech Accelerator", href: "/innovation-hub/programs/accelerator" },
          { name: "Innovation Workshops", href: "/innovation-hub/programs/workshops" },
        ]
      },
      {
        name: "Resources",
        href: "/innovation-hub/resources",
        description: "Access innovation tools and resources",
        children: [
          { name: "Innovation Toolkit", href: "/innovation-hub/resources/toolkit" },
          { name: "Best Practices", href: "/innovation-hub/resources/best-practices" },
          { name: "Case Studies", href: "/innovation-hub/resources/case-studies" },
          { name: "Innovation Blog", href: "/innovation-hub/resources/blog" },
        ]
      },
      {
        name: "Partnerships",
        href: "/innovation-hub/partnerships",
        description: "Discover partnership opportunities",
        children: [
          { name: "Corporate Partners", href: "/innovation-hub/partnerships/corporate" },
          { name: "Academic Partners", href: "/innovation-hub/partnerships/academic" },
          { name: "Startup Network", href: "/innovation-hub/partnerships/startup-network" },
        ]
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
        description: "Access financial reports and investor resources",
        children: [
          { name: "Financial Reports", href: "/investor-relations/reports" },
          { name: "Investor Presentations", href: "/investor-relations/presentations" },
          { name: "Stock Information", href: "/investor-relations/stock" },
          { name: "Corporate Governance", href: "/investor-relations/governance" },
        ]
      },
      { 
        name: "Analytics", 
        href: "/analytics",
        description: "Dive deep into data-driven insights and metrics",
        children: [
          { name: "Performance Metrics", href: "/analytics/performance" },
          { name: "Market Analysis", href: "/analytics/market" },
          { name: "Growth Trends", href: "/analytics/trends" },
          { name: "Competitive Analysis", href: "/analytics/competition" },
        ]
      },
    ],
  },
  {
    category: "Resources",
    items: [
      {
        name: "Knowledge Base",
        href: "/resources/knowledge-base",
        description: "Access our comprehensive knowledge repository",
        children: [
          { name: "Documentation", href: "/resources/knowledge-base/docs" },
          { name: "Tutorials", href: "/resources/knowledge-base/tutorials" },
          { name: "FAQs", href: "/resources/knowledge-base/faqs" },
          { name: "Best Practices", href: "/resources/knowledge-base/best-practices" },
        ]
      },
      {
        name: "News & Updates",
        href: "/news",
        description: "Stay informed with the latest news and updates",
        children: [
          { name: "Company News", href: "/news/company" },
          { name: "Industry Insights", href: "/news/industry" },
          { name: "Press Releases", href: "/news/press" },
          { name: "Blog", href: "/news/blog" },
        ]
      },
      {
        name: "Support",
        href: "/support",
        description: "Get help and support when you need it",
        children: [
          { name: "Contact Support", href: "/support/contact" },
          { name: "Help Center", href: "/support/help" },
          { name: "Community Forum", href: "/support/community" },
          { name: "Developer Resources", href: "/support/developers" },
        ]
      },
    ],
  },
];
