import NextAuth, { AuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import { User, Account } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

// Singleton Prisma client to prevent multiple instances
const prisma = new PrismaClient()

// Enum for user roles to ensure type safety
export enum UserRole {
  USER = "USER",
  INVESTOR = "INVESTOR", 
  ADMIN = "ADMIN"
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || 'localhost',
        port: parseInt(process.env.EMAIL_SERVER_PORT || '1025'),
        auth: {
          user: process.env.EMAIL_SERVER_USER || 'mock-user',
          pass: process.env.EMAIL_SERVER_PASSWORD || 'mock-pass'
        }
      },
      from: process.env.EMAIL_FROM || 'noreply@example.com',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the role on first login or when user is created
      if (account?.type === 'credentials' || account?.type === 'email') {
        token.role = user?.role ?? token.role ?? UserRole.USER
      }
      
      // Ensure role is always present and valid
      token.role = Object.values(UserRole).includes(token.role as UserRole) 
        ? token.role 
        : UserRole.USER
      
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub || ''
        session.user.role = token.role as UserRole
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Safely handle URL redirects
      try {
        // Always resolve relative URLs
        if (url.startsWith('/')) {
          return `${baseUrl}${url}`
        }
        
        // Prevent external redirects
        const parsedUrl = new URL(url)
        return parsedUrl.origin === baseUrl ? url : baseUrl
      } catch {
        // Fallback to base URL if URL parsing fails
        return baseUrl
      }
    }
  },
  // Add additional security configurations
  events: {
    async signIn(message) {
      // Optional: Log sign-in attempts or implement additional security checks
      console.log('Sign-in attempt', { 
        email: message.user.email, 
        timestamp: new Date().toISOString() 
      })
    }
  },
  // Add debug logging for development
  debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
