import express from "express";
import { PaymentController } from "./payment.controller.js";
import shurjoPay_auth from "../../../middleware/shurjoPay.js";

const router = express.Router();
router.post("/create", shurjoPay_auth, PaymentController.paymentCreate);

router.get("/callback", shurjoPay_auth, PaymentController.callBack);

// router.get("/refund/:trxID", bkash_auth, PaymentController2.refund);

export const PaymentRoutes = router;

// NODE_ENV=development
// # NODE_ENV=production
// DATABASE_URL=mongodb+srv://citizencarebd:Citizencare!!43@citizen.97nyu.mongodb.net/CitizenDB?retryWrites=true&w=majority

// ACCESS_TOKEN_SECRET=e911b71e4c47b5f4ab605ffbfbfb4782616ee9b2c592c386f45691ee26c53e8f99cb4f4d208bc9851b48f38b7126f8bf4dd9fcc061bf7f0dc7498fe119b7298b

// REFRESH_TOKEN_SECRET="our-secret"
// PORT=5000

// BCRYPT_SALT_ROUNDS=12

// # JWT_EXPIRES_IN=1d
// JWT_EXPIRES_IN=365d
// # JWT_EXPIRES_IN=5m

// JWT_REFRESH_EXPIRES_IN=365d

// SMS_API_KEY_VALUE=hxtCsJ9kTvPFRWIyA6Y0
// SMS_SENDER_ID=CCB
// SMS_API_HOST_SITE=bulksmsbd.net

// secretKey=go-to-sharikana08$@&&sha25601235
// API_KEY=sharikana_0120!!05

// BKASH_USERNAME = 01894671875
// BKASH_PASSWORD = '|0-Wg]v[#&g'
// BKASH_API_KEY = y8WyCHHDp7qhuIyr4VJNBdJztc
// BKASH_SECRET_KEY = yF6F21nWxPV6HG2kwAmX3Gu8kbt1gM3Hs0TUWwfDJVxB5AbiwMRW

// bkash_grant_token_url = https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant
// bkash_refresh_token_url = https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/token/refresh
// bkash_create_payment_url =  https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/create
// bkash_execute_payment_url = https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/execute
// bkash_refund_transaction_url = https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/payment/refund

// #server_site_url= http://localhost:5000/api/v1
// server_site_url= https://api.citizencarebd.com/api/v1
// #client_site_url = http://localhost:3000
// client_site_url = https://citizencarebd.com
// # shurjopay_engine = https://engine.shurjopayment.com
// surjopay_engine = https://sandbox.shurjopayment.com
// # shurjopay_user_name = citizen_care
// # shurjopay_password = citibz936tmspw76
// # shurjopay_prefix = CTC
// surjopay_user_name = sp_sandbox
// surjopay_password = pyyk97hu&6u6
// surjopay_prefix = sp
