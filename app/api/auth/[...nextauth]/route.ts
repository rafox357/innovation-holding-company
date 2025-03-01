import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient, UserRole } from "@prisma/client"
import { sendWelcomeEmail } from "@/lib/resend"

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  errorFormat: 'pretty',
})

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as any,
  debug: process.env.NODE_ENV === 'development',
  providers: [
    EmailProvider({
      server: process.env.RESEND_API_KEY ? {
        host: 'smtp.resend.com',
        port: 465,
        auth: {
          user: 'resend',
          pass: process.env.RESEND_API_KEY,
        },
        secure: true,
      } : undefined,
      from: process.env.EMAIL_FROM || 'no-reply@hubverse.com',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub as string
        session.user.role = token.role as UserRole
      }
      return session
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role as UserRole
      }
      if (trigger === "update" && session?.name) {
        token.name = session.name
      }
      return token
    },
    async signIn({ user, email }) {
      try {
        if (email?.verificationRequest && 'email' in email && typeof email.email === 'string') {
          const userEmail = email.email;
          const existingUser = await prisma.user.findUnique({
            where: { email: userEmail },
          })
          if (!existingUser) {
            await prisma.user.update({
              where: { email: userEmail },
              data: { role: UserRole.USER }
            })
            await sendWelcomeEmail(userEmail, "New User")
          }
        }
        return true
      } catch (error) {
        console.error('Error in signIn callback:', error)
        return true
      }
    },
  }
})

export { handler as GET, handler as POST }
