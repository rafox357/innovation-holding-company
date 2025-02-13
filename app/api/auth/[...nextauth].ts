import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchUserByEmail } from './userService';
import { verifyPassword } from './userService';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        try {
          const user = await fetchUserByEmail(credentials.email);
          if (!user) {
            console.error('User not found');
            return null;
          }

          const isValidPassword = await verifyPassword(credentials.password, user.passwordHash);
          if (isValidPassword) {
            return user;
          } else {
            console.error('Invalid password');
            return null;
          }
        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      }
    })
  ],
});
