import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
//import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
  // Configure authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    
    // ...more providers here
  ],
  secret: process.env.SECRET,
  //database: process.env.DATABASE_URL,
}

export default NextAuth(authOptions)