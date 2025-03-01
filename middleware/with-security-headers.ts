import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function withSecurityHeaders(
  request: NextRequest,
  response: NextResponse
): NextResponse {
  // Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self' data:;
    connect-src 'self' https://vtpgxgrfqhxjptyydpao.supabase.co https://api.resend.com;
    frame-ancestors 'none';
    form-action 'self';
  `.replace(/\s{2,}/g, ' ').trim();

  // Set security headers
  const headers = new Headers(response.headers);
  headers.set('Content-Security-Policy', cspHeader);
  headers.set('X-DNS-Prefetch-Control', 'off');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Only set HSTS in production
  if (process.env.NODE_ENV === 'production') {
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers,
  });
}
