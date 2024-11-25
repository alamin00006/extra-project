import express from "express";

import { UsersController } from "./user.controller.js";
import { verifyToken } from "../../../middleware/verifyToken.js";

const router = express.Router();

router.route("/").get(UsersController.getAllUsers);

router.route("/send-otp").post(UsersController.sendOtp);
router.route("/signup").post(UsersController.createUser);
router.route("/refresh-token").post(UsersController.refreshToken);

router.route("/login").post(UsersController.createLogin);

router.route("/me").get(verifyToken, UsersController.getMe);

router.route("/:userId").patch(UsersController.updateUser);

export const UserRoutes = router;
