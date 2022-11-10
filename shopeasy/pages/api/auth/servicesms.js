import dbConnect from "../../../lib/dbConnect"
const fast2sms = require('fast-two-sms')
const FAST_TO_SMS_CLIENT_ID = 'DTr6L4vJGewki1EZMRxBgtzhFfcSNbKoX3VqCn05QAlmpW8YjyLYIXSiBf6FGJNWjr3H0bdR1QkgalCo'



export default async function Servicesms(req, res) {
    await dbConnect()

//     if (req.method !== "POST") {
//       return res.status(403).send({
//           message: `${req.method} is not supported on this route`,
//       });
//   } 

}