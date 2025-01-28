import httpStatus from "http-status";
import User from "./user.model.js";
import { generateUserId } from "./user.utils.js";
import { jwtHelpers } from "../../../helpers/jwtHelpers.js";
import config from "../../../config/index.js";
const createUser = async (user) => {
  const phoneNumber = user?.phoneNumber;

  const findUserWithPhone = await User.findOne({ phoneNumber });

  if (findUserWithPhone) {
    return {
      status: "fail",
      message: "Sorry! Already Account Created with Phone number",
    };
  }

  const id = await generateUserId();

  const userData = {
    id: id,
    fullName: user.fullName,
    // lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    password: user.password,
  };

  const newUser = new User(userData);
  const result = await newUser.save();
  const token = jwtHelpers.generateToken(result);
  const refreshToken = jwtHelpers.generateRefreshToken(result);

  const { password: pwd, ...others } = result.toObject();

  return {
    user: others,
    token,
    refreshToken,
  };
};

const createLogin = async (phoneNumber, password) => {
  if (!phoneNumber || !password) {
    throw new Error("Please provide Phone Number and password");
  }

  const user = await User.findOne({ phoneNumber });

  if (!user) {
    throw new Error("No account found with this Phone Number");
  }

  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    throw new Error("Wrong password");
  }

  const token = jwtHelpers.generateToken(user);
  // const refreshToken = jwtHelpers.generateRefreshToken(user);
  const { password: pwd, ...others } = user.toObject();

  await User.updateOne({ phoneNumber: phoneNumber }, { lastLogin: Date.now() });

  return { user: others, token };
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

  const isUserExist = await User.isUserExist(userId);

  if (!isUserExist) {
    throw new Error(httpStatus.NOT_FOUND, "User does not exist");
  }
  //generate new token

  const newAccessToken = jwtHelpers.generateToken(isUserExist);

  return {
    accessToken: newAccessToken,
  };
};

// Get all users
const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

// Get Single User
const getUserByPhone = async (phoneNumber) => {
  if (!phoneNumber) {
    throw new ApiError(
      httpStatus.httpStatus.NOT_FOUND,
      "This phone number was not found."
    );
  }

  const user = await User.findOne({ phoneNumber });
  if (!user) {
    throw new ApiError(
      httpStatus.httpStatus.NOT_FOUND,
      "No account found with this phone number."
    );
  }

  const { password: pwd, ...others } = user.toObject();
  return others;
};

// Update a user
const updateUser = async (userId, updateUserData) => {
  const {
    personalDetails,
    nomineeDetails,
    address,
    nidOrPassportPhoto,
    nidOrPassportBackSidePhoto,
    userPhoto,
    nomineeNidOrPassportPhoto,
    nomineeNidOrPassportBackSidePhoto,
    nomineePhoto,
    isVerified,
    ...userData
  } = updateUserData;

  if (isVerified === true || isVerified === false) {
    await User.updateOne(
      { _id: userId },
      {
        $set: {
          isVerified: isVerified,
        },
      }
    );
  } else {
    const findUser = await User.findOne({ _id: userId });

    const parseToPersonalDetails = JSON.parse(personalDetails);
    const parseToNomineeDetails = JSON.parse(nomineeDetails);
    const parseToAddress = JSON.parse(address);

    // user images add
    parseToPersonalDetails.nidOrPassportPhoto = nidOrPassportPhoto
      ? nidOrPassportPhoto
      : findUser?.personalDetails?.nidOrPassportPhoto;

    parseToPersonalDetails.nidOrPassportBackSidePhoto =
      nidOrPassportBackSidePhoto
        ? nidOrPassportBackSidePhoto
        : findUser?.personalDetails?.nidOrPassportBackSidePhoto;

    parseToPersonalDetails.userPhoto = userPhoto
      ? userPhoto
      : findUser?.personalDetails?.userPhoto;

    // Nominee images add
    parseToNomineeDetails.nomineeNidOrPassportPhoto = nomineeNidOrPassportPhoto
      ? nomineeNidOrPassportPhoto
      : findUser?.nomineeDetails?.nomineeNidOrPassportPhoto;

    parseToNomineeDetails.nomineeNidOrPassportBackSidePhoto =
      nomineeNidOrPassportBackSidePhoto
        ? nomineeNidOrPassportBackSidePhoto
        : findUser?.nomineeDetails?.nomineeNidOrPassportBackSidePhoto;
    parseToNomineeDetails.nomineePhoto = nomineePhoto
      ? nomineePhoto
      : findUser?.nomineeDetails?.nomineePhoto;

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          personalDetails: parseToPersonalDetails,
          nomineeDetails: parseToNomineeDetails,
          address: parseToAddress,
          ...userData,
        },
      }
    );
  }
};

export const userService = {
  createUser,
  refreshToken,
  createLogin,
  getUserByPhone,
  getAllUsers,
  updateUser,
};
