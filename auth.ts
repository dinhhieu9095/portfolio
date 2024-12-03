import NextAuth, { Session } from "next-auth"
import Google from "next-auth/providers/google"
import "next-auth/jwt"
import { stringify } from "querystring"
import { use } from "react"
 
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
    },
    async signIn({ user, account, profile }) {
      if (account?.id_token) {
        const response = await fetch('https://localhost:44356/api/Auth/register', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${account?.id_token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: user.email,
            name: user.name, image: user.image})
        }).then();
        if (!response.ok) {
          console.error('Failed to register user:', response.statusText);
          throw new Error(`Registration failed: ${response.status}`);
        }
      }
      return true;
    },
  },
})