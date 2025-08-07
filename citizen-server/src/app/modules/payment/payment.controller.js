import mongoose from "mongoose";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { getValue, setValue } from "node-global-storage";
import Member from "../membersReg/member.model.js";
import Payment from "./payment.model.js";
import User from "../user/user.model.js";
import config from "../../../config/index.js";
import { CCBSms } from "../../../sms/CCBSMS.js";
import { generateMemberId } from "../membersReg/member.utils.js";

// Helper to prepare bkash headers
const shurjoPayHeaders = async () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: getValue("id_token"),
  };
};

// Create Payment Method
const paymentCreate = async (req, res, next) => {
  const { amount, ...dataForRegistration } = req.body;

  // Commented-out user validation
  // const findUser = await User.findOne({ _id: dataForRegistration?.user });
  // if (!findUser) { return new Error("Sorry! User Not Found"); }

  setValue("dataForRegistration", dataForRegistration);

  try {
    const { data } = await axios.post(
      `${config.shurjopay_engine}/api/secret-pay`,
      {
        prefix: config.shurjopay_prefix,
        token: getValue("id_token"),
        return_url: `${config.server_url}/bkash/payment/callback`,
        cancel_url: `${config.client_url}/error`,
        store_id: getValue("store_id"),
        amount: amount,
        order_id: "Inv" + uuidv4().substring(0, 5),
        currency: "BDT",
        customer_name: "alamin",
        customer_address: "dhaka",
        customer_phone: "01749718743",
        customer_city: "Dhaka",
        customer_post_code: "1212",
        client_ip: "102.101.1.1",
      },
      { headers: await shurjoPayHeaders() }
    );
    console.log(data);

    res.status(200).json({ checkout_url: data.checkout_url });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

// Callback Method (After Payment Confirmation)
const callBack = async (req, res) => {
  const { order_id } = req.query;

  console.log(order_id);
  if (!order_id) {
    return res.redirect(`${config.client_url}/error?message=Missing order_id`);
  }

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const dataForRegistration = getValue("dataForRegistration"); // Replace with DB storage

    // Verify payment
    const { data } = await axios.post(
      `${config.shurjopay_engine}/api/verification`,
      { order_id },
      { headers: await shurjoPayHeaders() }
    );

    if (data && data.statusCode === "1000") {
      const memberId = await generateMemberId();

      const memberData = new Member({
        id: memberId,
        ...dataForRegistration,
        status: "Approved",
      });

      const result = await memberData.save({ session });

      const newTransaction = new Payment({
        member: result?._id,
        paymentDate: new Date(),
        amount: parseInt(data?.amount),
        user: dataForRegistration?.user,
        acceptableStatus: "Accepted",
      });

      await newTransaction.save({ session });

      const message = `/api/smsapi?api_key=${config.sms_api_key}&type=text&number=88${dataForRegistration?.phone}&senderid=${config.sms_sender_id}&message=Thank%20You%20for%20being%20our%20loyal%20member`;
      await CCBSms(message);

      await session.commitTransaction();
      return res.redirect(`${config.client_url}/success`);
    } else {
      await session.abortTransaction();
      return res.redirect(
        `${config.client_url}/error?message=${
          data.statusMessage || "Payment failed"
        }`
      );
    }
  } catch (error) {
    await session.abortTransaction();
    return res.redirect(`${config.client_url}/error?message=${error.message}`);
  } finally {
    session.endSession();
  }
};

export const PaymentController = {
  paymentCreate,
  callBack,
};
