import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import LinkedInProvider from "next-auth/providers/linkedin"
import TwitterProvider from "next-auth/providers/twitter"
import DiscordProvider from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Session } from "next-auth"
import { AdapterUser } from "@auth/core/adapters"

declare module "next-auth" {
  interface User {
    role?: "ADMIN" | "INVESTOR" | "USER"
    emailVerified?: Date | null
  }

  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: "ADMIN" | "INVESTOR" | "USER"
      emailVerified?: Date | null
    }
  }
}

const prisma = new PrismaClient()

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: { params: { scope: 'read:user user:email' } },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID!,
      clientSecret: process.env.LINKEDIN_SECRET!,
      authorization: { params: { scope: 'r_liteprofile r_emailaddress' } },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID!,
      clientSecret: process.env.TWITTER_SECRET!,
      version: "2.0",
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // 24 hours
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token, user }) {
      if (session?.user) {
        session.user.id = token.sub!
        session.user.role = (token.role as "ADMIN" | "INVESTOR" | "USER") || "USER"
        session.user.emailVerified = token.emailVerified as Date | null
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.role = user.role
        token.emailVerified = user.emailVerified
      }
      return token
    },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      if (isNewUser) {
        await prisma.user.update({
          where: { id: user.id },
          data: { role: "USER" }
        })
      }
    },
  },
})

export { handler as GET, handler as POST }
