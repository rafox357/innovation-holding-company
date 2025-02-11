import "next-auth";

declare module "next-auth" {
  interface User {
    role?: "ADMIN" | "INVESTOR" | "USER";
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "ADMIN" | "INVESTOR" | "USER";
    };
  }
}

// Extend the JWT token type if needed
declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "INVESTOR" | "USER";
  }
}
