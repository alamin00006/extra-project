import express from "express";
import { MemberController } from "./member.controller.js";

const router = express.Router();
router.post("/create", MemberController.createMember);
router.post(
  "/create-without-payment",
  MemberController.createWithOutPaymentMember
);

router.get("/", MemberController.getMembers);
router.get("/:memberId", MemberController.getMember);
router.patch("/:memberId", MemberController.updateMember);
router.delete("/:memberId", MemberController.deleteMember);
export const MemberRoutes = router;
