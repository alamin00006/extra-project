import User from "./user.model.js";
import "dotenv/config";
import { userService } from "./user.service.js";

import httpStatus from "http-status";

import config from "../../../config/index.js";
import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";

import { encrypt } from "../../../helpers/encrypt.js";
import { CCBSms } from "../../../sms/CCBSMS.js";

const createUser = catchAsync(async (req, res) => {
  const user = req.body;

  // create new user

  const result = await userService.createUser(user);

  if (result instanceof Error) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: result.message,
    });
  }

  // Send success response

  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully!",
    data: others,
  });
});

const createLogin = catchAsync(async (req, res) => {
  const { phoneNumber, password } = req.body;

  // Call the login service
  const result = await userService.createLogin(phoneNumber, password);

  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logged in successfully",
    data: others,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = await userService.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully !",
    data: result,
  });
});

const getUserByPhone = catchAsync(async (req, res) => {
  const phoneNumber = req?.user?.phoneNumber;

  // const randomToken = crypto.randomBytes(64).toString("hex"); // Use 32 bytes for a 64-character token

  // console.log(randomToken);

  // Call the service function
  const userData = await userService.getUserByPhone(phoneNumber);

  const encryptedData = encrypt(userData);

  // console.log("Encrypted:", encryptedData);

  // const decryptedData = decrypt(encryptedData);
  // console.log("Decrypted:", decryptedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get Success",
    data: encryptedData,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await userService.getAllUsers();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User get successfully",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const updateUserData = req.body;
  // console.log(updateUserData);
  await userService.updateUser(userId, updateUserData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Successfully Updated",
  });
});

const sendOtp = async (req, res, next) => {
  try {
    const { customerOtp, phoneNumber } = req.body;

    // Check if user with the same email or phone number already exists

    const phoneNumberCheck = await User.findOne({ phoneNumber });

    if (phoneNumberCheck) {
      return res.status(400).json({
        status: "Failed",
        message: "Sorry! This Number or Email Already Exists",
      });
    } else {
      const bookingMessage = `/api/smsapi?api_key=${config.sms_api_key}&type=text&number=88${phoneNumber}&senderid=${config.sms_sender_id}&message=Citizencare%20OTP%20for%20account%20verification%20is%3A%20${customerOtp}.%20Enter%20this%20code%20to%20complete%20your%20Signup%20process.%20Thank%20you`;
      const method = "POST";
      // Send SMS and wait for the response
      try {
        await CCBSms(bookingMessage, method);

        res.status(200).json({ status: "success" });
      } catch (error) {
        return res.status(500).json({
          status: "Failed",
          message: "Error while sending SMS. Please try again.",
        });
      }
    }
  } catch (err) {
    // console.error("Error in sendOtp function:", err);
    res.status(500).json({
      status: "Failed",
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};

export const UsersController = {
  createLogin,
  createUser,
  refreshToken,

  getAllUsers,
  updateUser,
  sendOtp,
  getUserByPhone,
};
