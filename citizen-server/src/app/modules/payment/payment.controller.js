import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { getValue, setValue } from "node-global-storage";
import Member from "../membersReg/member.model.js";
import Payment from "./payment.model.js";
// import User from "../user/user.model.js";
import config from "../../../config/index.js";
import { CCBSms } from "../../../sms/CCBSMS.js";
import { generateMemberId } from "../membersReg/member.utils.js";
import { PaymentService } from "./payment.service.js";
import { userService } from "../user/user.service.js";

// Helper to prepare bkash headers
// const shurjoPayHeaders = async () => {
//   return {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     authorization: getValue("id_token"),
//   };
// };

// Create Payment Method
const paymentCreate = async (req, res, next) => {
  const { amount, ...dataForRegistration } = req.body;

  // const findUser = await User.findOne({ _id: dataForRegistration?.user });
  // if (!findUser) {
  //   return new Error("Sorry! User Not Found");
  // }

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
        customer_name: dataForRegistration?.name,
        customer_address: dataForRegistration?.streetAddress,
        customer_phone: dataForRegistration?.phoneNumber,
        customer_city: dataForRegistration?.city,
        customer_post_code: "1212",
        customer_email: dataForRegistration?.email,
        client_ip: "102.101.1.1",
        value1: dataForRegistration?.password,
      },
      { headers: { Authorization: `Bearer ${getValue("id_token")}` } }
    );

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
  const dataForRegistration = getValue("dataForRegistration");
  try {
    const token = getValue("id_token");

    const paymentDetails = await PaymentService.verifyPayment(token, order_id);

    const existPayment = await Payment.findOne({
      sp_order_id: paymentDetails?.order_id,
    });
    if (existPayment) {
      return res.status(400).json({ error: "Payment already exists" });
    }
    if (paymentDetails?.sp_massage === "Success") {
      const memberId = await generateMemberId();
      const memberData = new Member({
        id: memberId,
        user: paymentDetails?.value1,
        name: paymentDetails?.name,
        phoneNumber: paymentDetails?.phone_no,
        email: paymentDetails?.email,
        streetAddress: paymentDetails?.address,
        city: paymentDetails?.city,
        status: "Approved",
      });

      const result = await memberData.save();

      // Start Create user transaction
      const newTransaction = new Payment({
        sp_order_id: paymentDetails?.order_id,
        customer_order_id: paymentDetails?.customer_order_id,
        member: result?._id,
        paymentDate: paymentDetails?.date_time,
        amount: parseInt(paymentDetails?.recived_amount),
        paymentType: paymentDetails?.method,
        paymentNumber: paymentDetails?.card_number,
        trxID: paymentDetails?.bank_trx_id,
        memberPhoneNumber: paymentDetails?.phone_no,
        // user: paymentDetails?.value1,
        acceptableStatus: "Accepted",
      });

      await newTransaction.save();

      // Phone SMS for Loyal Member
      const message = `Thank You for being our loyal member`;

      const to = `88${dataForRegistration?.phone}`;
      await CCBSms(message, to);

      const userData = {
        fullName: paymentDetails?.name,
        phoneNumber: paymentDetails?.phone_no,
        password: paymentDetails?.value1,
        streetAddress: paymentDetails?.address,
      };
      await userService.createUser(userData);
    }
    res.json({
      paymentDetails,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const PaymentController = {
  paymentCreate,
  verifyPayment,
};
