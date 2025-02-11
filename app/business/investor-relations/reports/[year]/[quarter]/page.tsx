import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ReportPageProps {
  params: {
    year: string;
    quarter: string;
  };
}

export async function generateMetadata({
  params,
}: ReportPageProps): Promise<Metadata> {
  return {
    title: `${params.quarter} ${params.year} Financial Report | Hubverse`,
    description: `Quarterly financial report for ${params.quarter} ${params.year}.`,
  };
}

export async function generateStaticParams() {
  const years = ['2023', '2024']; 
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4']; 

  const params = [];
  for (const year of years) {
    for (const quarter of quarters) {
      params.push({ year, quarter });
    }
  }

  return {
    paths: params.map((param) => ({ params: param })),
    fallback: false,
  };
}

export default function QuarterlyReportPage({ params }: ReportPageProps) {
  const { year, quarter } = params;

  // Validate parameters
  const validYear = parseInt(year) >= 2023 && parseInt(year) <= new Date().getFullYear();
  const validQuarter = ["Q1", "Q2", "Q3", "Q4"].includes(quarter);

  if (!validYear || !validQuarter) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        {quarter} {year} Financial Report
      </h1>
      
      <div className="bg-card p-6 rounded-lg">
        {/* Financial report content would go here */}
        <p className="text-muted-foreground">
          Detailed financial report for {quarter} {year}
        </p>
      </div>
    </div>
  );
}
