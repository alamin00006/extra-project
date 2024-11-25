import httpStatus from "http-status";
import { AuthService } from "./auth.service.js";
import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";

const sendOtp = catchAsync(async (req, res) => {
  const { phoneNumber } = req.body;

  await AuthService.sendOtp(phoneNumber);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Please Check Your Phone",
    // data: others,
  });
});

const verifyOtp = catchAsync(async (req, res) => {
  const { phoneNumber, otp } = req.body;

  const isVerify = await AuthService.verifyOtp(phoneNumber, otp);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Verified",
    data: isVerify,
  });
});

const resetPassword = catchAsync(async (req, res) => {
  const { phoneNumber, password } = req.body;

  await AuthService.resetPassword(phoneNumber, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Successfully Updated Your Password",
    // data: others,
  });
});

export const AuthController = {
  sendOtp,
  verifyOtp,
  resetPassword,
};
