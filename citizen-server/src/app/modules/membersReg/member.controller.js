import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";
import { MemberService } from "./member.service.js";

const createMemnber = catchAsync(async (req, res) => {
  const memberData = req.body;

  // create new user
  const result = await MemberService.createMemnber(memberData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Thanks For Membership Request",
    data: result,
  });
});

export const MemberController = {
  createMemnber,
};
