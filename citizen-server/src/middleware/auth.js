import httpStatus from "http-status";
import config from "../config/index.js";
import ApiError from "../error/ApiError2.js";
import { jwtHelpers } from "../helpers/jwtHelpers.js";

const auth =
  (...requiredRoles) =>
  async (req, res, next) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret);

      req.user = verifiedUser;

      // await User.findByIdAndUpdate(userId, { lastLogin: Date.now() }, { new: true });

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
