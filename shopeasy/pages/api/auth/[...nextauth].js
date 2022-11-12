import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import dbConnect from "../../../lib/dbConnect";
import authmodal from "../../../modals/auth/authmodal";




const GOOGLE_CLIENT_ID = '1099013241213-kpro4gfoc4shhpu9rijemngqpvi4eupk.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const NEXTAUTH_SECRET = "NEXTAUTH_SECRET"
const MONGODB_URI = "mongodb+srv://server:server@cluster0.bgu4xhh.mongodb.net/shopeasy"
const  FACEBOOK_CLIENT_ID ='1014907879904094'
const  FACEBOOK_CLIENT_SECRET ="6fb1cb2d147bbfe899fc431bcc38db4c"




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
      
      let isuserexist = authmodal.find({email: user.email})
      if(isuserexist){
       return true
      }      
      const newuser = new authmodal({
        name : user.name,
        email : user.email,
        password : user.name.trim().split(" ")[0] + '@123',
        oauth : account.provider,
      })
       await newuser.save()
      return true
    },
    async session({ session, token, user }) {

      const subject = await authmodal({email : session.user.email})

      session.user.role = "admin"; // Add role value to user object so it is passed along with session
      session.user.objId = subject._id
      return session;
    }
    
  },secret : NEXTAUTH_SECRET
  

}


export default NextAuth(authOptions)


// const x = {
//   user: {
//     name: 'Deepak mandal',
//     email: 'deepak.studentid2030@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ALm5wu2HPEjzMjhG4YlHSlVO6APcmsfJFIAdofrZLrfu_Q=s96-c'
//   },
//   expires: '2022-12-12T07:44:18.075Z'
// }
// { data: undefined, status: 'loading' }
// { data: undefined, status: 'loading' }
// {
//   user: {
//     name: 'Deepak mandal',
//     email: 'deepak.studentid2030@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ALm5wu2HPEjzMjhG4YlHSlVO6APcmsfJFIAdofrZLrfu_Q=s96-c'
//   },
//   expires: '2022-12-12T07:44:42.589Z'
// }
// {
//   user: {
//     name: 'Deepak mandal',
//     email: 'deepak.studentid2030@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/ALm5wu2HPEjzMjhG4YlHSlVO6APcmsfJFIAdofrZLrfu_Q=s96-c'
//   },
//   expires: '2022-12-12T07:44:42.647Z'
// }