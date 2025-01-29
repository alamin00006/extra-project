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

// import axios from "axios";
// import { getValue, setValue } from "node-global-storage";
// import { v4 as uuidv4 } from "uuid";
// import Payment from "../models/payment.js";
// import config from "../config/index.js";
// import { bkash_headers } from "../utils/bkash_headers.js";
// import { startSession } from "mongoose";
// import { bookingSms } from "../SMS/BookingSms.js";
// import OrderModel from "../models/Order.js";
// import Transaction from "../models/Transaction.js";
// import RentRoom from "../models/RentRoom.js";

// // Function to create a payment
// const payment_create = async (req, res) => {
//   const { amount, userId } = req.body;
//   console.log(req.body);

//   setValue("userId", userId);

//   try {
//     const { data } = await axios.post(
//       config.bkash_create_payment_url,
//       {
//         mode: "0011",
//         payerReference: " ",
//         callbackURL: `${config.server_url}/bkash/payment/callback`,
//         amount,
//         currency: "BDT",
//         intent: "sale",
//         merchantInvoiceNumber: "Inv" + uuidv4().substring(0, 5),
//       },
//       {
//         headers: await bkash_headers(),
//       }
//     );
//     return res.status(200).json({ bkashURL: data.bkashURL });
//   } catch (error) {
//     // console.error("Error during payment creation:", error);
//     return res.status(401).json({ error: error.message });
//   }
// };
// // customerMsisdn

// // Callback function after payment
// const call_back = async (req, res) => {
//   const { paymentID, status, callbackData, token } = await req.query;
//   console.log({ from_caLLback: token });

//   if (status === "cancel" || status === "failure") {
//     return await res.redirect(`${config.client_url}/error?message=${status}`);
//   }

//   if (status === "success") {
//     const session = await startSession();
//     try {
//       session.startTransaction();
//       // Step 4: Execute payment via bKash
//       const decodedToken = await JSON.parse(decodeURIComponent(token));
//       const response = await fetch(config.bkash_execute_payment_url, {
//         method: "POST",
//         headers: bkash_headers(decodedToken),
//         body: JSON.stringify({ paymentID }),
//       });

//       if (!response.ok) {
//         throw new Error(
//           `Error executing payment: ${response.status} ${response.statusText}`
//         );
//       }

//       const data = await response.json();

//       if (data && data.statusCode === "0000") {
//         // Step 5: Create order
//         const dataForBooking = await JSON.parse(
//           decodeURIComponent(callbackData)
//         );

//         dataForBooking.paymentType = "bkash";
//         dataForBooking.status = "Approved";
//         dataForBooking.paymentNumber = data?.customerMsisdn;
//         dataForBooking.transactionId = data?.trxID;
//         dataForBooking.receivedTk = parseInt(data?.amount);

//         const result = await OrderModel.create([dataForBooking], { session });

//         // Step 6: Create user transaction
//         await Transaction.create(
//           [
//             {
//               orderId: result[0]?._id,
//               branch: dataForBooking?.branch,
//               paymentDate: new Date(),
//               totalAmount: dataForBooking?.bookingInfo?.totalAmount,
//               payableAmount: dataForBooking?.payableAmount,
//               paymentType: "bkash",
//               receivedTk: parseInt(data?.amount),
//               paymentNumber: data?.customerMsisdn,
//               transactionId: data.trxID,
//               userId: getValue("userId"),
//               userPhone: dataForBooking?.phone,
//               userName: dataForBooking?.fullName,
//               acceptableStatus: "Accepted",
//             },
//           ],
//           { session }
//         );

//         // Step 7: Create rent collection
//         await RentRoom.create(
//           [
//             {
//               bookStartDate:
//                 dataForBooking?.bookingInfo?.rentDate?.bookStartDate,
//               bookEndDate: dataForBooking?.bookingInfo?.rentDate?.bookEndDate,
//               roomId: dataForBooking?.bookingInfo?.roomId,
//               roomNumber: dataForBooking?.bookingInfo?.data?.roomNumber,
//               roomType: dataForBooking?.bookingInfo?.roomType,
//               seatId: dataForBooking?.bookingInfo?.seatBooking?._id,
//               seatNumber: dataForBooking?.bookingInfo?.seatBooking?.seatNumber,
//               bookingId: dataForBooking?._id,
//               branch: dataForBooking?.bookingInfo?.branch?._id,
//               userId: dataForBooking?.userId,
//             },
//           ],
//           { session }
//         );

//         // Phone SMS for booking
//         const bookingMessage = `/api/smsapi?api_key=${config.sms_api_key}&type=text&number=88${dataForBooking?.phone}&senderid=8809617617196&message=Your%20booking%20with%20Project%20Second%20Home%20is%20Confirmed!%20Booking%20ID%3A%23${dataForBooking?.bookingId}.%20Check-in%3A%${dataForBooking?.bookingInfo?.rentDate?.bookStartDate}%2C%20Check-out%3A%${dataForBooking?.bookingInfo?.rentDate?.bookEndDate}.%20Call%20Us%3A%2001647647404.%20Enjoy%20your%20stay!%20-%20PSH`;

//         await bookingSms(bookingMessage);

//         // Commit the transaction
//         await session.commitTransaction();
//         return await res.redirect(`${config.client_url}/success`);
//       } else {
//         throw new Error(data.statusMessage || "Payment execution failed");
//       }
//     } catch (error) {
//       await session.abortTransaction();
//       console.error("Error during payment execution:", error);
//       return await res.redirect(
//         `${config.client_url}/error?message=${encodeURIComponent(
//           error.message
//         )}`
//       );
//     } finally {
//       await session.endSession();
//     }
//   }
// };

// // Function to refund a payment
// const refund = async (req, res) => {
//   const { trxID } = req.params;

//   try {
//     const payment = await Payment.findOne({ trxID });

//     if (!payment) {
//       return res.status(404).json({ error: "Payment not found" });
//     }

//     const { data } = await axios.post(
//       config.bkash_refund_transaction_url,
//       {
//         paymentID: payment.paymentID,
//         amount: payment.amount,
//         trxID,
//         sku: "payment",
//         reason: "cashback",
//       },
//       {
//         headers: await bkash_headers(), // Passing the headers including the token
//       }
//     );

//     if (data && data.statusCode === "0000") {
//       return res.status(200).json({ message: "Refund successful" });
//     } else {
//       return res
//         .status(400)
//         .json({ error: "Refund failed", message: data.statusMessage });
//     }
//   } catch (error) {
//     console.error("Error during refund:", error);
//     return res.status(500).json({ error: "Refund failed due to server error" });
//   }
// };

// export const PaymentController = {
//   payment_create,
//   call_back,
//   refund,
// };

// DATABASE_URL = mongodb+srv://citizencarebd:Citizencare!!43@citizen.97nyu.mongodb.net/CitizenDB?retryWrites=true&w=majority&appName=Citizen
// PORT = 5000

// ACCESS_TOKEN_SECRET=e911b71e4c47b5f4ab605ffbfbfb4782616ee9b2c592c386f45691ee26c53e8f99cb4f4d208bc9851b48f38b7126f8bf4dd9fcc061bf7f0dc7498fe119b7298b

// REFRESH_TOKEN_SECRET="our-secret"
// PORT=5000

// BCRYPT_SALT_ROUNDS=12

// # JWT_EXPIRES_IN=1d
// JWT_EXPIRES_IN=365d
// # JWT_EXPIRES_IN=5m

// JWT_REFRESH_EXPIRES_IN=365d

// SMS_API_KEY_VALUE=za0YHQ7fvYCpcWGGZgce
// SMS_SENDER_ID=8809617617196
// SMS_API_HOST_SITE=bulksmsbd.net

// secretKey=go-to-sharikana08$@&&sha25601235
// API_KEY=sharikana_0120!!05
