import { connectToDB } from "@/lib/connectDB";
import User from "@/models/Users";
import bcrypt from "bcryptjs";
import NextAuth, { NextAuthOptions, User as AuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }
        try {
          await connectToDB();

          const user = await User.findOne({ email: credentials?.email });
          if (!user) {
            throw new Error("User doesn't exist")
          }
          const isPasswordCorrect = await bcrypt.compare(credentials?.password, user.password)

          if (!isPasswordCorrect) {
            throw new Error("Invalid email or password");
          }

          return user

        } catch (error) {
          throw error;
        }
      }
    })
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: AuthUser }) {
      if (user){
        // TypeScript now knows user might have an _id from your DB
        token.id = (user as any)._id?.toString() || user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },

}

