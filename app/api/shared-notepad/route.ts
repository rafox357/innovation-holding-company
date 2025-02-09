import { NextResponse } from 'next/server'

let sharedContent = ''

export async function GET() {
  return NextResponse.json({ content: sharedContent })
}

export async function POST(request: Request) {
  const { content } = await request.json()
  sharedContent = content
  return NextResponse.json({ success: true })
}

