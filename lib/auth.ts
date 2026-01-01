import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./database";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        await connectDB();
        const currentUser = await User.findOne({
          emailAddress: credentials.email as string,
        });
        if (!currentUser) {
          throw new Error("Invalid credentials");
        } else {
          const isCorrectPassword = await bcrypt.compare(
            credentials.password as string,
            currentUser.password,
          );
          if (!isCorrectPassword) {
            throw new Error("Invalid credentials");
          } else {
            return {
              id: currentUser._id.toString(),
              email: currentUser.emailAddress,
            };
          }
        }
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    session: ({ session, token }) => {
      session.user.id = token.id as string;
      return session;
    },
  },
});
