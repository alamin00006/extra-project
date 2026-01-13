import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";
import { MemberService } from "./member.service.js";
import httpStatus from "http-status";
const createMember = catchAsync(async (req, res) => {
  const memberData = req.body;

  // create new user
  const result = await MemberService.createMember(memberData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Thanks For Membership Request",
    data: result,
  });
});
const createWithOutPaymentMember = catchAsync(async (req, res) => {
  const memberData = req.body;

  // create new user
  const result = await MemberService.createWithOutPaymentMember(memberData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      "Thanks for membership registration, we will contact you very soon",
    data: result,
  });
});

const getMembers = catchAsync(async (req, res) => {
  const result = await MemberService.getMembers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberService.getMember(memberId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const updateData = req.body;
  const result = await MemberService.updateMember(memberId, updateData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member status updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberService.deleteMember(memberId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member status updated successfully",
    data: result,
  });
});

export const MemberController = {
  createMember,
  createWithOutPaymentMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
};
