import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import rateLimiter from '@/lib/rate-limiter';

export async function withRateLimit(
  request: NextRequest,
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  try {
    const ip = request.ip ?? '127.0.0.1';
    await rateLimiter.consume(ip);
    return handler(request);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: 'Too many requests',
        message: 'Please try again later',
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
