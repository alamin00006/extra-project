import pkg from "follow-redirects";
import config from "../config/index.js";

const { http } = pkg;

export function CCBSms(bookingMessage, method) {
  return new Promise((resolve, reject) => {
    var options = {
      method: method,
      hostname: `${config.sms_api_host}`,
      path: bookingMessage,
      headers: {},
      maxRedirects: 20,
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
