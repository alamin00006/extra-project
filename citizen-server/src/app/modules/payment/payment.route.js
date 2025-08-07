import express from "express";
import { PaymentController } from "./payment.controller.js";
import shurjoPay_auth from "../../../middleware/shurjoPay.js";

const router = express.Router();
router.post("/create", shurjoPay_auth, PaymentController.paymentCreate);

router.get("/return", shurjoPay_auth, PaymentController.verifyPayment);

// router.get("/refund/:trxID", bkash_auth, PaymentController2.refund);

export const PaymentRoutes = router;
