import { Article } from "@/types/news"

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "Hubverse Launches New Subsidiary",
    description: "Exciting new venture in the tech industry",
    content: `Hubverse is proud to announce the launch of our newest subsidiary, focusing on cutting-edge AI technology. This strategic move represents a significant step forward in our mission to innovate and lead in the tech industry.

The new subsidiary will focus on developing AI solutions for enterprise customers, with a particular emphasis on machine learning applications in business process optimization.

"This is a pivotal moment for Hubverse," said our CEO. "We're not just expanding our business; we're creating new opportunities for innovation and growth."

Key highlights of the new subsidiary:
- Focus on enterprise AI solutions
- Dedicated R&D team
- Strategic partnerships with leading tech firms
- Commitment to ethical AI development`,
    date: "2025-03-15",
    category: "announcement",
    author: {
      name: "John Smith",
      role: "Chief Technology Officer"
    }
  },
  {
    id: 2,
    title: "Annual Shareholder Meeting",
    description: "Join us for our annual shareholder meeting on May 15th, 2025",
    content: `We are pleased to announce our upcoming annual shareholder meeting, scheduled for May 15th, 2025. This year's meeting will be particularly significant as we discuss our expansion plans and strategic initiatives for the coming year.

Agenda items include:
- Review of fiscal year 2024 performance
- Discussion of strategic initiatives for 2025
- Voting on key corporate matters
- Q&A session with the board

The meeting will be held both in-person at our headquarters and virtually to accommodate all shareholders.`,
    date: "2025-04-15",
    category: "announcement",
    author: {
      name: "Sarah Johnson",
      role: "Investor Relations Director"
    }
  },
  {
    id: 3,
    title: "The Future of AI in Business",
    description: "Exploring the impact of artificial intelligence on various industries",
    content: `Artificial Intelligence continues to reshape the business landscape in unprecedented ways. Our latest analysis explores how AI is transforming various industries and what business leaders need to know to stay ahead.

Key insights:
1. AI adoption is accelerating across all sectors
2. Machine learning is becoming a core business function
3. Data-driven decision making is the new norm
4. Ethics and responsibility are paramount

Our research indicates that companies implementing AI solutions are seeing significant improvements in efficiency and innovation capacity.`,
    date: "2025-04-01",
    category: "insight",
    author: {
      name: "Dr. Emily Chen",
      role: "Head of Research"
    }
  },
  {
    id: 4,
    title: "Portfolio Company Spotlight: TechVantage",
    description: "How one of our portfolio companies is revolutionizing enterprise software",
    content: `TechVantage, a key member of our portfolio, has achieved remarkable success in transforming enterprise software solutions. Their innovative approach to cloud computing and microservices architecture has garnered attention from industry leaders.

Recent achievements:
- 200% year-over-year growth
- Expansion into international markets
- Launch of revolutionary new product line
- Strategic partnerships with Fortune 500 companies

This success story exemplifies our investment strategy and commitment to fostering innovative technology companies.`,
    date: "2025-03-20",
    category: "community",
    author: {
      name: "Michael Wong",
      role: "Portfolio Manager"
    }
  },
  {
    id: 5,
    title: "Q1 2025 Investment Insights",
    description: "Analysis of market trends and investment opportunities",
    content: `Our Q1 2025 analysis reveals exciting opportunities in emerging technologies and markets. We've identified several key trends that are shaping the investment landscape:

1. Quantum Computing Advancement
2. Sustainable Technology Solutions
3. Digital Health Innovations
4. Fintech Evolution

These trends align with our investment thesis and present significant opportunities for growth and value creation.`,
    date: "2025-04-10",
    category: "insight",
    author: {
      name: "Lisa Martinez",
      role: "Investment Strategist"
    }
  }
]

export function getArticlesByCategory(category: Article['category']) {
  return mockArticles.filter(article => article.category === category)
}

export function getArticleById(id: number) {
  return mockArticles.find(article => article.id === id)
}
