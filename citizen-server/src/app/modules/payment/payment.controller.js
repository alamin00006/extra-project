import mongoose from "mongoose";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { getValue, setValue } from "node-global-storage";
import Member from "../membersReg/member.model.js";
import Payment from "./payment.model.js";

import User from "../user/user.model.js";
import config from "../../../config/index.js";
import { CCBSms } from "../../../sms/CCBSMS.js";

// Helper to prepare bkash headers
const bkashHeaders = async () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: getValue("id_token"),
    "X-App-Key": config.bkash_api_key,
  };
};

// Create Payment Method
const paymentCreate = async (req, res) => {
  const { amount, selectMethod, ...dataForRegistration } = req.body;

  // Find User
  const findUser = await User.findOne({
    _id: dataForRegistration?.user,
  });

  if (!findUser) {
    return new Error("Sorry! User Not Found");
  }

  setValue("dataForBooking", dataForRegistration);

  try {
    const { data } = await axios.post(
      config.bkash_create_payment_url,
      {
        mode: "0011",
        payerReference: " ",
        callbackURL: `${config.server_url}/bkash/payment/callback`,
        amount: amount,
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "Inv" + uuidv4().substring(0, 5),
      },
      {
        headers: await bkashHeaders(),
      }
    );

    return res.status(200).json({ bkashURL: data.bkashURL });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

// Callback Method (After Payment Confirmation)
const callBack = async (req, res) => {
  const { paymentID, status } = req.query;
  console.log(status);
  const dataForRegistration = getValue("dataForRegistration");

  if (status === "cancel" || status === "failure") {
    return res.redirect(`${config.client_url}/error?message=${status}`);
  }

  // Start MongoDB session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  if (status === "success") {
    try {
      // Fetch the payment execution data
      const { data } = await axios.post(
        config.bkash_execute_payment_url,
        { paymentID },
        {
          headers: await bkashHeaders(),
        }
      );

      if (data && data.statusCode === "0000") {
        // Start Create Booking
        const memberId = await generateMemberId();
        dataForRegistration.id = memberId;
        dataForRegistration.status = "Approved";

        const memberData = new Member({
          ...dataForRegistration,
        });

        const result = await memberData.save({ session });

        // End Create Booking

        // Start Create user transaction
        const newTransaction = new Payment({
          member: result?._id,

          paymentDate: new Date(),
          amount: parseInt(data?.amount),

          paymentType: "bkash",

          paymentNumber: data?.customerMsisdn,
          trxID: data.trxID,
          user: dataForRegistration?.user,
          //   userPhone: dataForRegistration?.phone,
          //   userName: dataForRegistration?.fullName,
          acceptableStatus: "Accepted",
        });

        await newTransaction.save({ session });

        // Phone SMS for booking
        const message = `/api/smsapi?api_key=${config.sms_api_key}&type=text&number=88${dataForRegistration?.phone}&senderid=8809617617196&message=Your%20booking%20with%20Project%20Second%20Home%20is%20Confirmed!%20Booking%20ID%3A%23${dataForRegistration?.bookingId}.%20Check-in%3A%${dataForRegistration?.bookingInfo?.rentDate?.bookStartDate}%2C%20Check-out%3A%${dataForRegistration?.bookingInfo?.rentDate?.bookEndDate}.%20Call%20Us%3A%2001647647404.%20Enjoy%20your%20stay!%20-%20PSH`;

        await CCBSms(message);

        // Commit the transaction if both operations are successful
        await session.commitTransaction();
        session.endSession();

        return res.redirect(`${config.client_url}/success`);
      } else {
        // Abort transaction if payment execution failed
        await session.abortTransaction();
        session.endSession();
        return res.redirect(
          `${config.client_url}/error?message=${data.statusMessage}`
        );
      }
    } catch (error) {
      // Abort transaction if any error founds
      await session.abortTransaction();
      session.endSession();
      return res.redirect(
        `${config.client_url}/error?message=${error.message}`
      );
    }
  }
};

// Refund Method
// const refund = async (req, res) => {
//   const { trxID } = req.params;

//   // Start MongoDB session for transaction
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const payment = await Payment2.findOne({ trxID }).session(session);

//     const { data } = await axios.post(
//       process.env.bkash_refund_transaction_url,
//       {
//         paymentID: payment.paymentID,
//         amount: payment.amount,
//         trxID,
//         sku: "payment",
//         reason: "cashback",
//       },
//       {
//         headers: await bkashHeaders(),
//       }
//     );

//     if (data && data.statusCode === "0000") {
//       // Commit the transaction if refund is successful
//       await session.commitTransaction();
//       session.endSession();
//       return res.status(200).json({ message: "refund success" });
//     } else {
//       // Abort transaction if refund failed
//       await session.abortTransaction();
//       session.endSession();
//       return res.status(404).json({ error: "refund failed" });
//     }
//   } catch (error) {
//     // Abort transaction if any error occurs
//     await session.abortTransaction();
//     session.endSession();
//     return res.status(404).json({ error: "refund failed" });
//   }
// };

export const PaymentController = {
  paymentCreate,
  callBack,
};
