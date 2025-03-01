// Enum for user roles to ensure type safety
export enum UserRole {
  USER = "USER",
  INVESTOR = "INVESTOR", 
  ADMIN = "ADMIN"
}
<<<<<<< HEAD
=======

// Type for user roles to support both enum and string
export type UserRoleType = UserRole | string
>>>>>>> cfaf810171f5166d6b16a21fd62cd93c54e52702
