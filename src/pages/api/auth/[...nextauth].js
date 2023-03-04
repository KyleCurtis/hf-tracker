import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../lib/prismadb";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  
  /* PROVIDER CONFIGURATION
  ===================================================================================== */
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  /* PAGES CONFIGURATION
  ===================================================================================== */
  pages: {
    // example...
  },

  /* CALLBACK CONFIGURATION
  ===================================================================================== */
  callbacks: {
    // example...
  },
});
