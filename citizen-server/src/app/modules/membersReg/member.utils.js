import Member from "./member.model.js";

const findLastMemberId = async () => {
  const lastMember = await Member.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastMember?.id;
};

export const generateMemberId = async () => {
  const previousId = await findLastMemberId();

  const numericPart = previousId
    ? previousId.slice(3) // slice 3 chars instead of 2
    : "0".padStart(5, "0");

  const incrementedId = (parseInt(numericPart) + 1).toString().padStart(5, "0");

  return "ccb" + incrementedId; // lowercase prefix
};
