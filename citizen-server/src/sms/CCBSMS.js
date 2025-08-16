import pkg from "follow-redirects";
import config from "../config/index.js";

const { http } = pkg;

export function CCBSms(bookingMessage, method = "POST", to) {
  return new Promise((resolve, reject) => {
    var options = {
      method: method,
      url: `${config.sms_api_host}`,
      formData: {
        api_key: "YOUR_API_KEY",
        msg: bookingMessage,
        to: to,
        sender_id: config.sms_sender_id,
      },
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        resolve(body.toString());
      });

      res.on("error", function (error) {
        reject(error);
      });
    });

    req.end();
  });
}

// var request = require("request");
// var options = {
//   method: "POST",
//   url: "https://api.sms.net.bd/sendsms",
//   formData: {
//     api_key: "YOUR_API_KEY",
//     msg: "Test",
//     to: "8801800000000",
//   },
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

// import pkg from "follow-redirects";
// import config from "../config/index.js";

// const { http } = pkg;

// export function CCBSms(bookingMessage, method) {
//   return new Promise((resolve, reject) => {
//     var options = {
//       method: method,
//       hostname: `${config.sms_api_host}`,
//       path: bookingMessage,
//       headers: {},
//       maxRedirects: 20,
//     };

//     var req = http.request(options, function (res) {
//       var chunks = [];

//       res.on("data", function (chunk) {
//         chunks.push(chunk);
//       });

//       res.on("end", function () {
//         var body = Buffer.concat(chunks);
//         resolve(body.toString());
//       });

//       res.on("error", function (error) {
//         reject(error);
//       });
//     });

//     req.end();
//   });
// }
