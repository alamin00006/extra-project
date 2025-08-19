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

  const bookingMessage = `You have requested to reset your password for CCB. Your OTP is ${otp}. If this wasn't you, please contact our support team immediately. Call 09-613166166`;

  const to = `88${phoneNumber}`;

  await CCBSms(bookingMessage, to);
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
