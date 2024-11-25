"use client";
import { useState } from "react";
import Login from "./Login";
import SignupPage from "./SignUp";
import OtpVerification from "./OtpVerification";
import ForgotPassword from "./ForgotPassword";

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isSingUpPage, setIsSinUpPage] = useState(false);
  const [isOtpPage, setIsOtpPage] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  return (
    <div>
      {isLoginPage && (
        <Login
          setIsSinUpPage={setIsSinUpPage}
          setIsLoginPage={setIsLoginPage}
          setIsPasswordReset={setIsPasswordReset}
        />
      )}
      {isSingUpPage && (
        <SignupPage
          setIsLoginPage={setIsLoginPage}
          setIsSinUpPage={setIsSinUpPage}
          setIsOtpPage={setIsOtpPage}
        />
      )}
      {isOtpPage && (
        <OtpVerification
          setIsOtpPage={setIsOtpPage}
          setIsSinUpPage={setIsSinUpPage}
          setIsLoginPage={setIsLoginPage}
        />
      )}
      {isPasswordReset && (
        <ForgotPassword
          setIsOtpPage={setIsOtpPage}
          setIsSinUpPage={setIsSinUpPage}
          setIsLoginPage={setIsLoginPage}
          setIsPasswordReset={setIsPasswordReset}
        />
      )}
    </div>
  );
};

export default AuthPage;
