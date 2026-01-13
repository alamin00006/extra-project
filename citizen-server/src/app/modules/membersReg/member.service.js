import mongoose from "mongoose";
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

    // if (payload?.email) {
    //   const findMemberWithEmail = await Member.findOne({
    //     email: payload?.email,
    //   });

    //   if (findMemberWithEmail) {
    //     throw new Error("Sorry! already member registered with email");
    //   }
    // }

    if (findMemberWithPhone) {
      throw new Error("Sorry! already member registered with phone number");
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
    // const userData = {
    //   fullName: payload?.name,
    //   phoneNumber: payload?.phoneNumber,
    //   email: payload?.email,
    //   password: payload?.password,
    //   streetAddress: payload?.address,
    // };

    // createUser can accept a session
    // await userService.createUser(userData, session);

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

const getMembers = async () => {
  const members = await Member.find({});
  return members;
};
const getMember = async (memberId) => {
  const member = await Member.findById(memberId);
  return member;
};

const updateMember = async (memberId, payload) => {
  const updatedMember = await Member.findByIdAndUpdate(memberId, payload, {
    new: true,
  });
  return updatedMember;
};

const deleteMember = async (memberId) => {
  const deletedMember = await Member.findByIdAndDelete(memberId);
  return deletedMember;
};

export const MemberService = {
  createMember,
  createWithOutPaymentMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
};
