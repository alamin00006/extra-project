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

export const MemberService = {
  createMember,
};
