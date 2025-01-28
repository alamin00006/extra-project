import express from "express";
import { AdminUserRoutes } from "../modules/adminUser/adminUser.route.js";
import { UserRoutes } from "../modules/user/user.route.js";
import { AuthRoutes } from "../modules/auth/auth.route.js";
import { PaymentRoutes } from "../modules/payment/payment.route.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/admin-users",
    route: AdminUserRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/user-verify",
    route: AuthRoutes,
  },
  {
    path: "/bkash/payment",
    route: PaymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
