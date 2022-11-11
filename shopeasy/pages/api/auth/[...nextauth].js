import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import dbConnect from "../../../lib/dbConnect";
import authModal from "../../../modals/auth/authmodal";

const GOOGLE_CLIENT_ID = '1099013241213-kpro4gfoc4shhpu9rijemngqpvi4eupk.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const NEXTAUTH_SECRET = "NEXTAUTH_SECRET"
const MONGODB_URI = "mongodb+srv://server:server@cluster0.bgu4xhh.mongodb.net/shopeasy"
const  FACEBOOK_CLIENT_ID ='1206442673628854'
const  FACEBOOK_CLIENT_SECRET ="fde38029797a136cb11fc754e622071e"



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET
    }),
    // ...add more providers here
  ],session : {
    jwt : true 
  },
  database: MONGODB_URI,
  callbacks: {
    async signIn({user, account, profile}){
   
      await dbConnect()

      const newuser = new authModal({
        name : user.name,
        email : user.email,
        password : user.name.trim().split(" ")[0] + '@123',
        oauth : account.provider,
      })
      await newuser.save()
      return true
    }
    
  }
  
}

export default NextAuth(authOptions)