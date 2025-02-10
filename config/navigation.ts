export type NavigationItem = {
  title: string
  href?: string
  description?: string
  items?: NavigationItem[]
}

export type NavigationSection = {
  title: string
  items: NavigationItem[]
}

export const navigationConfig = {
  mainNav: [
    {
      title: "News",
      href: "/news",
      description: "Stay updated with the latest news and insights",
    },
    {
      title: "Business",
      href: "/business",
      description: "Explore our business ventures and investments",
    },
    {
      title: "Innovation Hub",
      href: "/innovation-hub",
      description: "Discover our innovation ecosystem",
    },
    {
      title: "Resources",
      href: "/resources",
      description: "Access tools and resources",
    },
  ],
  megaMenu: {
    "/news": [
      {
        title: "Latest News",
        items: [
          {
            title: "Press Releases",
            href: "/news/press-releases",
            description: "Official announcements and updates",
          },
          {
            title: "Blog",
            href: "/news/blog",
            description: "Insights and thought leadership",
          },
          {
            title: "Media Coverage",
            href: "/news/media",
            description: "News coverage and mentions",
          },
        ],
      },
      {
        title: "Categories",
        items: [
          {
            title: "Technology",
            href: "/news/technology",
          },
          {
            title: "Business",
            href: "/news/business",
          },
          {
            title: "Innovation",
            href: "/news/innovation",
          },
          {
            title: "Startups",
            href: "/news/startups",
          },
        ],
      },
    ],
    "/business": [
      {
        title: "Portfolio",
        items: [
          {
            title: "Elementalis",
            href: "/business/subsidiaries/elementalis",
            description: "AI and Machine Learning Solutions",
          },
          {
            title: "eStore District",
            href: "/business/subsidiaries/estore-district",
            description: "E-commerce Platform",
          },
        ],
      },
      {
        title: "Services",
        items: [
          {
            title: "Consulting",
            href: "/business/services/consulting",
          },
          {
            title: "Investment",
            href: "/business/services/investment",
          },
          {
            title: "Technology Solutions",
            href: "/business/services/technology",
          },
        ],
      },
    ],
    "/innovation-hub": [
      {
        title: "Programs",
        items: [
          {
            title: "Accelerator",
            href: "/innovation-hub/accelerator",
            description: "Startup acceleration program",
          },
          {
            title: "Incubator",
            href: "/innovation-hub/incubator",
            description: "Early-stage venture support",
          },
        ],
      },
      {
        title: "Research",
        items: [
          {
            title: "Labs",
            href: "/innovation-hub/labs",
          },
          {
            title: "Publications",
            href: "/innovation-hub/publications",
          },
          {
            title: "Patents",
            href: "/innovation-hub/patents",
          },
        ],
      },
    ],
    "/resources": [
      {
        title: "Tools",
        items: [
          {
            title: "Documentation",
            href: "/resources/docs",
            description: "Technical guides and API docs",
          },
          {
            title: "Downloads",
            href: "/resources/downloads",
            description: "Software and tools",
          },
        ],
      },
      {
        title: "Support",
        items: [
          {
            title: "Help Center",
            href: "/resources/help",
          },
          {
            title: "Community",
            href: "/resources/community",
          },
          {
            title: "Contact",
            href: "/resources/contact",
          },
        ],
      },
    ],
  },
}

export const mainNavigation: NavigationSection[] = [
  {
    title: "Innovation Hub",
    items: [
      {
        title: "Programs",
        items: [
          {
            title: "Incubator",
            href: "/innovation-hub/programs/incubator",
            description: "Launch and grow innovative startups",
          },
          {
            title: "Research Lab",
            href: "/innovation-hub/programs/research-lab",
            description: "Cutting-edge R&D initiatives",
          },
          {
            title: "Tech Accelerator",
            href: "/innovation-hub/programs/accelerator",
            description: "Accelerate tech ventures",
          },
          {
            title: "Workshops",
            href: "/innovation-hub/programs/workshops",
            description: "Innovation workshops and training",
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            title: "Innovation Toolkit",
            href: "/innovation-hub/resources/toolkit",
          },
          {
            title: "Best Practices",
            href: "/innovation-hub/resources/best-practices",
          },
          {
            title: "Case Studies",
            href: "/innovation-hub/resources/case-studies",
          },
          {
            title: "Blog",
            href: "/innovation-hub/resources/blog",
          },
        ],
      },
    ],
  },
  {
    title: "Business",
    items: [
      {
        title: "Subsidiaries",
        href: "/business/subsidiaries",
        items: [
          { title: "Fundex", href: "/business/subsidiaries/fundex" },
          { title: "Elementalis", href: "/business/subsidiaries/elementalis" },
          { title: "Thryvus", href: "/business/subsidiaries/thryvus" },
          { title: "Anexo", href: "/business/subsidiaries/anexo" },
          { title: "Cosmo-Compass", href: "/business/subsidiaries/cosmo-compass" },
          { title: "Estore District", href: "/business/subsidiaries/estore-district" },
          { title: "Exonet", href: "/business/subsidiaries/exonet" },
          { title: "Ponce", href: "/business/subsidiaries/ponce" },
        ],
      },
      {
        title: "Planning & Finance",
        items: [
          { title: "Business Plan", href: "/business-plan" },
          { title: "Future Projects", href: "/future-projects" },
          { title: "Fundraising", href: "/fundraising" },
          { title: "Investor Relations", href: "/investor-relations" },
        ],
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        title: "Blueprint Platform",
        href: "/blueprint-platform",
        items: [
          { title: "Overview", href: "/blueprint-platform/overview" },
          { title: "Benefits", href: "/blueprint-platform/benefits" },
          { title: "Case Studies", href: "/blueprint-platform/case-studies" },
          { title: "Components", href: "/blueprint-platform/components" },
          { title: "Implementation", href: "/blueprint-platform/implementation" },
          { title: "Process", href: "/blueprint-platform/process" },
          { title: "Technology Stack", href: "/blueprint-platform/technology-stack" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Knowledge Base",
        items: [
          { title: "Documentation", href: "/resources/knowledge-base/docs" },
          { title: "Tutorials", href: "/resources/knowledge-base/tutorials" },
          { title: "FAQs", href: "/resources/knowledge-base/faqs" },
          { title: "Best Practices", href: "/resources/knowledge-base/best-practices" },
        ],
      },
      {
        title: "Support",
        items: [
          { title: "Contact Support", href: "/support/contact" },
          { title: "Help Center", href: "/support/help" },
          { title: "Community Forum", href: "/support/community" },
          { title: "Developer Resources", href: "/support/developers" },
        ],
      },
    ],
  },
]

export const dashboardNavigation: NavigationItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
  },
  {
    title: "Business",
    href: "/dashboard/business",
  },
  {
    title: "Financial",
    href: "/dashboard/financial",
  },
  {
    title: "Market",
    href: "/dashboard/market",
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
  },
  {
    title: "Team",
    href: "/dashboard/team",
  },
]

export const newsNavigation: NavigationItem[] = [
  {
    title: "Latest News",
    href: "/news/latest",
    description: "Stay up-to-date with our most recent updates and stories",
  },
  {
    title: "Announcements",
    href: "/news/announcements",
    description: "Official announcements and press releases",
  },
  {
    title: "Community Updates",
    href: "/news/community",
    description: "Updates and stories from our vibrant community",
  },
  {
    title: "Insights",
    href: "/news/insights",
    description: "In-depth analysis and thought leadership",
  },
]

export const legalNavigation: NavigationItem[] = [
  {
    title: "Terms of Service",
    href: "/legal/terms-of-service",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy-policy",
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookie-policy",
  },
  {
    title: "Legal & Compliance",
    href: "/legal-and-compliance",
  },
]

export const analyticsNavigation: NavigationItem[] = [
  {
    title: "Performance",
    href: "/analytics/performance",
  },
  {
    title: "Market Analysis",
    href: "/analytics/market",
  },
  {
    title: "Growth Trends",
    href: "/analytics/trends",
  },
  {
    title: "Competition",
    href: "/analytics/competition",
  },
]
