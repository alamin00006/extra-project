import express from "express";
import { AuthController } from "./auth.controller.js";

const router = express.Router();

router.route("/send-otp").post(AuthController.sendOtp);
router.route("/verify-otp").post(AuthController.verifyOtp);
router.route("/reset-password").post(AuthController.resetPassword);

// router.route("/me").get(verifyToken, UsersController.getMe);

// router.route("/:userId").patch(UsersController.updateUser);

export const AuthRoutes = router;
