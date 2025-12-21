import AdminUser from "./adminUser.model.js";
import mongoose from "mongoose";
import { generateAdminUserId } from "./adminUser.utils.js";

import { jwtHelpers } from "../../../helpers/jwtHelpers.js";
import config from "../../../config/index.js";
import httpStatus from "http-status";
import ApiError from "../../../error/ApiError2.js";
import bcrypt from "bcryptjs";
const createAdminUser = async (adminUserData, user) => {
  // Check exists email
  const findUser = await AdminUser.findOne({ email: user.email });
  if (findUser) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Sorry! An account already exists with this email."
    );
  }

  const session = await mongoose.startSession();
  let newUserAllData = null;

  try {
    session.startTransaction();

    // Generate a new Admin ID
    const id = await generateAdminUserId();
    user.id = id;

    const newAdminUserData = {
      id,
      ...adminUserData,
    };

    // Create a new AdminUser
    const newUser = await AdminUser.create([user], { session });
    if (!newUser.length) {
      throw new Error("Failed to create AdminUser.");
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }

  return newUserAllData;
};

// Update admin user

const updateAdminUserOnlyPassword = async (userId, userPassword) => {
  // Check if the user exists
  const existingUser = await AdminUser.findById(userId);
  if (!existingUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "Sorry! No account found.");
  }

  // Check if oldPassword and newPassword are provided
  let updatedUser;
  if (userPassword.oldPassword && userPassword.password) {
    // Compare the old password
    const passwordMatch = await bcrypt.compare(
      userPassword.oldPassword,
      existingUser.password
    );

    if (!passwordMatch) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Old password is incorrect.");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(
      userPassword.password,
      Number(config.bcrypt_salt_rounds)
    );

    // Save the updated user
    updatedUser = await AdminUser.updateOne(
      { _id: userId },
      {
        $set: {
          password: hashedPassword,
        },
      },
      { new: true }
    );
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Both old and new passwords are required."
    );
  }

  if (!updatedUser) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Failed to update user."
    );
  }

  return updatedUser;
};

// Update Only Profile Photo admin user

const updateProfilePhoto = async (id, updateData) => {
  const { role, profilePhoto } = updateData;

  const updateUser = await AdminUser.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        userPhoto: profilePhoto,
      },
    }
  );

  return updateUser;
};

const createLogin = async (email, password) => {
  if (!email || !password) {
    throw new Error("Please provide email and password");
  }

  const adminUser = await AdminUser.findOne({ email });
  if (!adminUser) {
    throw new Error("No account found with this email");
  }

  const isValidPassword = await adminUser.comparePassword(password);
  if (!isValidPassword) {
    throw new Error("Wrong password");
  }

  const token = jwtHelpers.generateTokenForAdminUsers(adminUser);
  const refreshToken = jwtHelpers.generateRefreshTokenForAdminUsers(adminUser);
  const { password: pwd, ...others } = adminUser.toObject();

  return { adminUser: others, token, refreshToken };
};

const refreshToken = async (token) => {
  //verify token

  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(token, config.jwt.refresh_secret);
  } catch (err) {
    throw new Error(httpStatus.FORBIDDEN, "Invalid Refresh Token");
  }

  const { userId } = verifiedToken;

  // checking deleted user's refresh token

  const isUserExist = await AdminUser.isUserExist(userId);
  if (!isUserExist) {
    throw new Error(httpStatus.NOT_FOUND, "User does not exist");
  }
  //generate new token

  const newAccessToken = jwtHelpers.generateTokenForAdminUsers(isUserExist);

  return {
    accessToken: newAccessToken,
  };
};

const getAdminUserByEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

  const adminUser = await AdminUser.findOne({ email });
  if (!adminUser) {
    throw new Error("No account found with this email");
  }

  const { password: pwd, ...others } = adminUser.toObject();
  return others;
};

const getAllAdminUsers = async (params) => {
  const { role, excludeRole } = params;

  let query = {};

  if (role) query["role"] = role;

  if (excludeRole && Array.isArray(excludeRole)) {
    query["role"] = { $nin: excludeRole };
  }
  const adminUsers = await AdminUser.find(query).sort({ createdAt: -1 });

  return adminUsers;
};

export const adminUserService = {
  createAdminUser,
  createLogin,
  refreshToken,
  getAdminUserByEmail,
  getAllAdminUsers,
  // updateAdminUser,
  updateAdminUserOnlyPassword,
  updateProfilePhoto,
};
