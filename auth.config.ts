import { AuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER || {
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
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub || ''
        session.user.role = (token.role as "ADMIN" | "INVESTOR" | "USER") || "USER"
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "USER"
      }
      return token
    }
  }
}
