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
import { PaymentService } from "./payment.service.js";

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
        return_url: `${config.return_url}`,
        cancel_url: `${config.cancel_url}`,
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
      { headers: { Authorization: `Bearer ${getValue("id_token")}` } }
    );
    console.log(data);

    res.status(200).json({ checkout_url: data.checkout_url });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const verifyPayment = async (req, res) => {
  const { order_id } = req.query;

  if (!order_id) {
    return res.status(400).json({ error: "Missing order_id" });
  }

  try {
    const token = getValue("id_token");

    const paymentDetails = await PaymentService.verifyPayment(token, order_id);

    res.json({
      paymentDetails,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const PaymentController = {
  paymentCreate,
  verifyPayment,
};
