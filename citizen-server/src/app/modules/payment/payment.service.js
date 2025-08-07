import axios from "axios";
import config from "../../../config/index.js";

const verifyPayment = async (token, order_id) => {
  try {
    const response = await axios.post(
      `${config.shurjopay_engine}/api/verification`,
      { order_id },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data?.[0];
  } catch (error) {
    console.log(error);
    throw new Error(
      `Payment verification failed: ${
        error.response ? error.response.data : error.message
      }`
    );
  }
};
export const PaymentService = {
  verifyPayment,
};
