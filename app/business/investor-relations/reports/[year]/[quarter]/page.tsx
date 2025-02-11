"use client";

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
    title: `Q${params.quarter} ${params.year} Financial Report | Hubverse`,
    description: `Quarterly financial report for Q${params.quarter} ${params.year}.`,
  };
}

export async function generateStaticParams() {
  // Generate static paths for existing reports
  const years = ["2023", "2024"];
  const quarters = ["1", "2", "3", "4"];

  return years.flatMap((year) =>
    quarters.map((quarter) => ({
      year,
      quarter,
    }))
  );
}

export default function QuarterlyReportPage({ params }: ReportPageProps) {
  const { year, quarter } = params;

  // Validate parameters
  const validYear = parseInt(year) >= 2023 && parseInt(year) <= new Date().getFullYear();
  const validQuarter = ["1", "2", "3", "4"].includes(quarter);

  if (!validYear || !validQuarter) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Q{quarter} {year} Financial Report
      </h1>
      
      <div className="bg-card p-6 rounded-lg">
        {/* Financial report content would go here */}
        <p className="text-muted-foreground">
          Detailed financial report for Q{quarter} {year}
        </p>
      </div>
    </div>
  );
}
