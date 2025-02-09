import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth")
    const role = token?.role as string | undefined

    // Admin routes protection
    if (req.nextUrl.pathname.startsWith("/admin")) {
      if (!isAuth) {
        return NextResponse.redirect(new URL("/auth/signin", req.url))
      }
      if (role !== "ADMIN") {
        return NextResponse.redirect(new URL("/", req.url))
      }
    }

    // Investor routes protection
    if (req.nextUrl.pathname.startsWith("/investor")) {
      if (!isAuth) {
        return NextResponse.redirect(new URL("/auth/signin", req.url))
      }
      if (role !== "ADMIN" && role !== "INVESTOR") {
        return NextResponse.redirect(new URL("/", req.url))
      }
    }

    // Auth page protection
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url))
      }
      return NextResponse.next()
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  }
)

// Protect these routes
export const config = {
  matcher: ["/admin/:path*", "/investor/:path*", "/auth/:path*"],
}
