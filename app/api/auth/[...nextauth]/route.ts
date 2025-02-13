import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
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
      try {
        if (session?.user) {
          session.user.role = token.role as "ADMIN" | "INVESTOR" | "USER" | undefined;
          session.user.id = token.sub as string;
        }
        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
    async jwt({ token, user, trigger, session }) {
      try {
        // Initial sign in
        if (user) {
          token.role = user.role as "ADMIN" | "INVESTOR" | "USER" | undefined;
        }
        
        // Update token if session is updated
        if (trigger === "update" && session?.user) {
          token.role = session.user.role as "ADMIN" | "INVESTOR" | "USER" | undefined;
        }
        
        return token;
      } catch (error) {
        console.error("JWT callback error:", error);
        return token;
      }
    },
    async signIn({ user, email }) {
      try {
        if (!email) return true;
        
        // For email sign ins
        if (email && !user) {
          return true;
        }

        // For existing users
        if (user) {
          try {
            const dbUser = await prisma.user.findUnique({
              where: { id: user.id },
              select: { role: true, name: true, email: true }
            });
            
            if (!dbUser?.role) {
              await prisma.user.update({
                where: { id: user.id },
                data: { role: "USER" }
              });

              // Send welcome email only for new users (those who just got their role set)
              if (dbUser?.email && dbUser?.name) {
                await sendWelcomeEmail(dbUser.email, dbUser.name).catch(error => {
                  console.error("Welcome email error:", error);
                  // Don't block sign in if email fails
                });
              }
            }
          } catch (dbError) {
            console.error("Database error during sign in:", dbError);
            return true;
          }
        }
        return true;
      } catch (error) {
        console.error("Sign in error:", error);
        return false;
      }
    }
  }
})

export { handler as GET, handler as POST }
