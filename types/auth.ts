import { UserRole } from "@prisma/client"

declare module "next-auth" {
  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: UserRole
  }

  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role?: UserRole
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub: string
    role?: UserRole
    name?: string | null
    email?: string | null
  }
}
