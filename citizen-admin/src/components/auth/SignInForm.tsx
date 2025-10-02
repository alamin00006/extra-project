"use client";
import Checkbox from "@/components/form/input/Checkbox";

import Button from "@/components/ui/button/Button";
import React, { useState } from "react";
import Form from "../form/Form";
import DynamicInputField from "../form/DynamicInputField";
import { SubmitHandler } from "react-hook-form";

import toast from "react-hot-toast";
import {
  LoginPayload,
  LoginUserResponse,
  useUserLoginMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/authKey";
import { getBaseUrl } from "@/helpers/config/envConfig";
import axios from "axios";

export default function SignInForm() {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    setIsLoading(true);

    try {
      const payload = {
        ...data,
      };

      // Perform the login request
      // const res: LoginUserResponse = await userLogin(payload).unwrap();

      const res: LoginUserResponse = await axios.post(
        `${getBaseUrl()}/admin-users/login`,
        payload,
        // {
        //   withCredentials: true,
        // },
      );
      // Check if the token is defined and not empty

      toast.success(res?.data?.message);
      localStorage.setItem(authKey, res?.data?.data?.token);
      router.push("/dashboard");
    } catch (error: any) {
      // console.log(error);
      toast.error(
        error?.response?.data?.message || "An error occurred during login",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-1 flex-col lg:w-1/2">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="text-title-sm sm:text-title-md mb-2 font-semibold text-gray-800 dark:text-white/90">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div></div>
          <Form submitHandler={onSubmit}>
            <div className="space-y-6">
              <div>
                <DynamicInputField
                  name="email"
                  label="Email"
                  placeholder="Email"
                  validationOptions={{ required: "Email is required" }}
                />
              </div>
              <div>
                <div className="relative">
                  <DynamicInputField
                    name="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    validationOptions={{
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    }}
                  />
                </div>
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox checked={isChecked} onChange={setIsChecked} />
                  <span className="text-theme-sm block font-normal text-gray-700 dark:text-gray-400">
                    Keep me logged in
                  </span>
                </div>
              </div> */}
              <div>
                <Button className="w-full" size="sm">
                  Sign in
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
