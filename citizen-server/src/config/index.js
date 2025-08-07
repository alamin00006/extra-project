import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  sms_api_key: process.env.SMS_API_KEY_VALUE,
  sms_sender_id: process.env.SMS_SENDER_ID,
  sms_api_host: process.env.SMS_API_HOST_SITE,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  secretKey: process.env.secretKey,
  api_key: process.env.API_KEY,
  // Bkash Related
  bkash_userName: process.env.BKASH_USERNAME,
  bkash_password: process.env.BKASH_PASSWORD,
  bkash_api_key: process.env.BKASH_API_KEY,
  bkash_secret_key: process.env.BKASH_SECRET_KEY,
  bkash_grant_token_url: process.env.bkash_grant_token_url,
  bkash_refresh_token_url: process.env.bkash_refresh_token_url,
  bkash_create_payment_url: process.env.bkash_create_payment_url,
  bkash_execute_payment_url: process.env.bkash_execute_payment_url,
  bkash_refund_transaction_url: process.env.bkash_refund_transaction_url,
  // shurjopay
  shurjopay_engine: process.env.shurjopay_engine,
  shurjopay_user_name: process.env.shurjopay_user_name,
  shurjopay_password: process.env.shurjopay_password,
  shurjopay_prefix: process.env.shurjopay_prefix,

  server_url: process.env.server_site_url,
  client_url: process.env.client_site_url,
  return_url: process.env.RETURN_URL,
  cancel_url: process.env.CANCEL_URL,

  jwt: {
    secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_secret: process.env.REFRESH_TOKEN_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};
