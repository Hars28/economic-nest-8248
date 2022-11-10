import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

const CLIENT_ID = '1099013241213-kpro4gfoc4shhpu9rijemngqpvi4eupk.apps.googleusercontent.com'
const CLIENT_SECRET_ID = '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'
const NEXTAUTH_SECRET = "NEXTAUTH_SECRET"







export default NextAuth({

  providers: [

    GoogleProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET_ID,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      jwt : {
        encryption : true
      },
      secret : NEXTAUTH_SECRET,
      callbacks : {
        async jwt(token, account){
                  if(account?.accessToken) 
          {
            token.accessToken = account.accessToken
          }
          return token;
        }
      },
      redirect : async(url, _baseUrl) => {
        console.log("url is ",  url, "and base url is", _baseUrl)
        if(url === "/register")
        {
          return Promise.resolve("/")
        }
        return Promise.resolve("/")
      }
    })

  ],

  secret: NEXTAUTH_SECRET
  
})