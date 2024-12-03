import NextAuth, { Session } from "next-auth"
import Google from "next-auth/providers/google"
import "next-auth/jwt"
 
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    accessToken?: string
  }
}
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async jwt({ token, account }) {
      console.log('account?.access_token')
      console.log(account)
      if (account?.provider === "google") {
        return { ...token, accessToken: account.id_token }
      }
      return token
    },
    async session({ session, token }) {
      console.log('vô session')
      // Pass access token to the client session
      if (token?.accessToken) session.accessToken = token.accessToken

      console.log('session.idToken')
      console.log(session.accessToken)
      return session;
    }
  },
})