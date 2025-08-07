import axios from "axios";
import { setValue } from "node-global-storage";
import config from "../config/index.js";

const shurjoPay_auth = async (req, res, next) => {
  // Clear the token from global storage if it exists
  setValue("id_token", null); // Removes the token

  try {
    const { data } = await axios.post(
      `${config.shurjopay_engine}/api/get_token`,
      {
        username: config.shurjopay_user_name,
        password: config.shurjopay_password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    setValue("id_token", data?.token);
    setValue("store_id", data?.store_id);

    // req.bkash_auth_token = data.id_token;

    next();
  } catch (error) {
    // console.error("Error in bkash_auth:", error);
    return res.status(401).json({ error: error.message });
  }
};

export default shurjoPay_auth;
