import crypto from "crypto";
import bcrypt from "bcryptjs";
import httpStatus from "http-status";

import User from "../user/user.model.js";
import config from "../../../config/index.js";
import { CCBSms } from "../../../sms/CCBSMS.js";

const sendOtp = async (phoneNumber) => {
  const user = await User.findOne({ phoneNumber });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Sorry! Account not found.");
  }
  // Generate OTP
  const otp = crypto.randomInt(10000, 99999).toString();

  // set expiration time 3 minutes
  const expirationTime = Date.now() + 3 * 60 * 1000;

  await User.updateOne({ phoneNumber }, { otp, otpExpiration: expirationTime });

  const bookingMessage = `/api/smsapi?api_key=${config.sms_api_key}&type=text&number=88${phoneNumber}&senderid=${config.sms_sender_id}&message=You%20have%20requested%20to%20reset%20your%20password%20for%20Sharikana.%20Your%20OTP%20is%20${otp}.%20If%20this%20wasn't%20you,%20please%20contact%20our%20support%20team%20immediately.%20Call%2001234567890`;
  const method = "POST";
  await CCBSms(bookingMessage, method);
};

const verifyOtp = async (phoneNumber, otp) => {
  const user = await User.findOne({ phoneNumber });

  if (!user || user.otp !== otp || Date.now() > user.otpExpiration) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid or expired OTP");
  }

  return true;
};

const resetPassword = async (phoneNumber, password) => {
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds)
  );

  await User.updateOne(
    { phoneNumber },
    { password: hashedPassword, otp: null, otpExpiration: null }
  );
};

export const AuthService = {
  sendOtp,
  verifyOtp,
  resetPassword,
};
