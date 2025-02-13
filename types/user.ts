// Enum for user roles to ensure type safety
export enum UserRole {
  USER = "USER",
  INVESTOR = "INVESTOR", 
  ADMIN = "ADMIN"
}

// Type for user roles to support both enum and string
export type UserRoleType = UserRole | string
