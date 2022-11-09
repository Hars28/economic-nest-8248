import dbConnect from "../../../lib/dbConnect"
const fast2sms = require('fast-two-sms')
var unirest = require("unirest");

const FAST_TO_SMS_CLIENT_ID = 'DTr6L4vJGewki1EZMRxBgtzhFfcSNbKoX3VqCn05QAlmpW8YjyLYIXSiBf6FGJNWjr3H0bdR1QkgalCo'



// let options = {
//   authorization : "DTr6L4vJGewki1EZMRxBgtzhFfcSNbKoX3VqCn05QAlmpW8YjyLYIXSiBf6FGJNWjr3H0bdR1QkgalCo",
//   message : "Your otp is 1234",
//   numbers  : ["7827119146","8368240154"]
// }



export default async function Servicesms(req, res) {
    await dbConnect()

//     if (req.method !== "POST") {
//       return res.status(403).send({
//           message: `${req.method} is not supported on this route`,
//       });
//   } 

var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

req.query({
  "authorization": "YOUR_API_KEY",
  "variables_values": "5599",
  "route": "otp",
  "numbers": "9999999999,8888888888,7777777777"
});

req.headers({
  "cache-control": "no-cache"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
}