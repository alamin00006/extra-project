import Member from "./member.model.js";

const findLastMemberId = async () => {
  const lastInvestment = await Member.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastInvestment?.id;
};

export const generateMemberId = async () => {
  let previousId = await findLastMemberId();
  let convertNumberPreviousId = previousId
    ? previousId.slice(2)
    : (0).toString().padStart(4, "0");

  // Increment by 1
  let incrementedId = (parseInt(convertNumberPreviousId) + 1)
    .toString()
    .padStart(4, "0");
  incrementedId = "CCB".toLowerCase() + incrementedId;

  return incrementedId;
};
