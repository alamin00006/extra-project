"use client";

import { getBaseUrl } from "@/helpers/config/envConfig";
import useUserData from "@/hooks/useUserData";
import axios from "axios";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Loading from "@/app/loading";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

const ServiceApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memberFee, setMemberFee] = useState(4500);
  const [showPassword, setShowPassword] = useState(false);
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!memberFee) return toast.error("Please choice any member type");
    setIsLoading(true);

    const { name, mobileNumber, email, streetAddress, city, state, password } =
      e.target;

    const registrationData = {
      amount: Number(memberFee),
      // user: userData?._id,
      name: name.value,
      phoneNumber: mobileNumber.value,
      email: email?.value,
      streetAddress: streetAddress.value,
      city: city.value,
      state: state.value,
      password: password.value,
      // paymentType: "Bkash",
      // selectMethod: "Bkash",
    };

    try {
      const { data } = await axios.post(
        `${getBaseUrl()}/payment/create`,
        registrationData,
        { withCredentials: true }
      );
      setIsLoading(false);
      window.location.href = data?.checkout_url;
      // window.location.href = data.bkashURL;
      // return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    // e.target.reset();
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="custom-container mt-5">
          {/* Application Form */}
          <div className="mb-10 md:p-20 sm:p-0 sm:py-10 shadow-lg rounded">
            <h2 className="text-center text-2xl font-bold mb-6">
              Registration Form
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 md:mx-20"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  placeholder="Name"
                  name="name"
                  defaultValue={userData?.fullName || ""}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  placeholder="Contact Number"
                  name="mobileNumber"
                  defaultValue={userData?.phoneNumber || ""}
                  onWheel={(e) => e.target.blur()}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email Address"
                  name="email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  placeholder="Street Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  placeholder="State"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password (For Login)
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  লয়্যাল মেম্বার ফি (Choose Any One)
                </label>
                <ul className="list-style-none ml-4 space-y-2 text-sm text-gray-700 mt-2">
                  <li>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="membershipType"
                        value={4500}
                        defaultChecked
                        onChange={(e) => setMemberFee(e.target.value)}
                      />
                      <span className="ml-2">
                        একজনের জন্য বাৎসরিক 4,500 টাকা।
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="cursor-pointer">
                      <input
                        onChange={(e) => setMemberFee(e.target.value)}
                        type="radio"
                        name="membershipType"
                        value={10000}
                      />
                      <span className="ml-2">
                        ফ্যামিলির জন্য বাৎসরিক 10,000 টাকা।
                      </span>
                    </label>
                  </li>
                </ul>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <Image
                  src="/images/shurjopay.jpg"
                  alt="Shurjopay"
                  width={100}
                  height={100}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#2a7d7d] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#00a47e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registration
                </button>
              </div>
            </form>
          </div>
          <Toaster
            position="top-center"
            custom-containerStyle={{ marginTop: "100px" }}
            reverseOrder={false}
          />{" "}
        </div>
      )}
    </>
  );
};

export default ServiceApplicationForm;
