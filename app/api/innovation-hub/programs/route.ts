import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Mock data - replace with actual database queries
  const programs = [
    {
      id: "incubator",
      title: "Startup Incubator",
      description: "Support and resources for early-stage startups",
      details: {
        duration: "6 months",
        benefits: [
          "Mentorship",
          "Workspace",
          "Funding opportunities",
          "Networking events"
        ],
        requirements: [
          "Early-stage startup",
          "Innovative solution",
          "Committed team"
        ]
      }
    },
    // Add more programs...
  ];

  return NextResponse.json({ programs });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Implement program creation logic
    // This would typically involve database operations
    
    return NextResponse.json({ message: "Program created successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create program" },
      { status: 500 }
    );
  }
}
