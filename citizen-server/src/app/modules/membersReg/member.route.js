import express from "express";
import { MemberController } from "./member.controller.js";

const router = express.Router();
router.post("/create", MemberController.createMember);
router.post(
  "/create-without-payment",
  MemberController.createWithOutPaymentMember
);

export const MemberRoutes = router;
