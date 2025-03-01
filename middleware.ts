import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { withRateLimit } from "./middleware/with-rate-limit"
import { withSecurityHeaders } from "./middleware/with-security-headers"

// Public paths that don't require authentication
const publicPaths = [
  "/",                    // Landing page
  "/about",              // About pages
  "/about/team",
  "/about/careers",
  "/contact",            // Contact pages
  "/contact/support",
  "/contact/media",
  "/legal",              // Legal pages
  "/legal/terms-of-service",
  "/legal/privacy-policy",
  "/legal/cookie-policy",
  "/sustainability-report",
  "/business/subsidiaries", // Public company list
  "/auth/signin",          // Auth pages
  "/auth/signup",
  "/auth/forgot-password",
  "/auth/reset-password",
]

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth")
    const isPublicPath = publicPaths.some(path => 
      req.nextUrl.pathname === path || 
      req.nextUrl.pathname.startsWith("/api/") ||
      req.nextUrl.pathname.startsWith("/_next/") ||
      req.nextUrl.pathname.includes("/fonts/") ||
      req.nextUrl.pathname.includes("/images/")
    )

    // Apply rate limiting to API routes and auth pages
    if (req.nextUrl.pathname.startsWith("/api/") || isAuthPage) {
      const response = await withRateLimit(req, async () => {
        return NextResponse.next()
      })

      // If rate limit is exceeded, return the error response
      if (response.status === 429) {
        return response
      }
    }

    // Allow public paths
    if (isPublicPath) {
      const response = NextResponse.next()
      return withSecurityHeaders(req, response)
    }

    // Redirect authenticated users away from auth pages
    if (isAuth && isAuthPage) {
      const response = NextResponse.redirect(new URL("/dashboard", req.url))
      return withSecurityHeaders(req, response)
    }

    // Redirect unauthenticated users to signin page
    if (!isAuth && !isAuthPage && !isPublicPath) {
      let callbackUrl = req.nextUrl.pathname
      if (req.nextUrl.search) {
        callbackUrl += req.nextUrl.search
      }

      const encodedCallbackUrl = encodeURIComponent(callbackUrl)
      const response = NextResponse.redirect(
        new URL(`/auth/signin?callbackUrl=${encodedCallbackUrl}`, req.url)
      )
      return withSecurityHeaders(req, response)
    }

    // Admin routes protection
    if (req.nextUrl.pathname.startsWith("/admin")) {
      if (!isAuth) {
        const url = new URL("/auth/signin", req.url)
        url.searchParams.set("callbackUrl", req.nextUrl.pathname)
        const response = NextResponse.redirect(url)
        return withSecurityHeaders(req, response)
      }
      if (token?.role !== "ADMIN") {
        const response = NextResponse.redirect(new URL("/", req.url))
        return withSecurityHeaders(req, response)
      }
    }

    // Investor routes protection
    if (req.nextUrl.pathname.startsWith("/investor")) {
      if (!isAuth) {
        const url = new URL("/auth/signin", req.url)
        url.searchParams.set("callbackUrl", req.nextUrl.pathname)
        const response = NextResponse.redirect(url)
        return withSecurityHeaders(req, response)
      }
      if (token?.role !== "ADMIN" && token?.role !== "INVESTOR") {
        const response = NextResponse.redirect(new URL("/", req.url))
        return withSecurityHeaders(req, response)
      }
    }

    const response = NextResponse.next()
    return withSecurityHeaders(req, response)
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

// Specify which routes this middleware applies to
export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
}
