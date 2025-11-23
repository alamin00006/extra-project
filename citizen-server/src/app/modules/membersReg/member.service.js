import mongoose from "mongoose";
import { userService } from "../user/user.service.js";
import Member from "./member.model.js";
import { generateMemberId } from "./member.utils.js";

const createMember = async (payload) => {
  //   const findUserWithId = await User.findOne({ _id: payload?.user });

  //   if (findUserWithId) {
  //     return {
  //       status: "fail",
  //       message: "Sorry! User Not Found",
  //     };
  //   }

  const memberId = await generateMemberId();

  const memberData = {
    id: memberId,
    ...payload,
  };
  const newMember = new Member(memberData);
  const result = await newMember.save();

  return result;
};

const createWithOutPaymentMember = async (payload) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const findMemberWithPhone = await Member.findOne({
      phoneNumber: payload?.phoneNumber,
    });
    const findMemberWithEmail = await Member.findOne({ email: payload?.email });

    if (findMemberWithPhone) {
      throw new Error("Sorry! already member registered with phone number");
    }

    if (findMemberWithEmail) {
      throw new Error("Sorry! already member registered with email");
    }

    const memberId = await generateMemberId();

    const memberData = {
      id: memberId,
      ...payload,
    };

    // Save Member with session
    const newMember = new Member(memberData);
    const result = await newMember.save({ session });

    // Prepare user data
    const userData = {
      fullName: payload?.name,
      phoneNumber: payload?.phoneNumber,
      email: payload?.email,
      password: payload?.password,
      streetAddress: payload?.address,
    };

    // Assuming createUser can accept a session
    await userService.createUser(userData, session);

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error) {
    // Rollback transaction on error
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const MemberService = {
  createMember,
  createWithOutPaymentMember,
};
