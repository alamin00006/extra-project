import express from "express";

import bkash_auth from "../../../middleware/bkashAuth.js";
import { PaymentController } from "./payment.controller.js";

const router = express.Router();
router.post("/create", bkash_auth, PaymentController.paymentCreate);

router.get("/callback", bkash_auth, PaymentController.callBack);

// router.get("/refund/:trxID", bkash_auth, PaymentController2.refund);

export const PaymentRoutes = router;
