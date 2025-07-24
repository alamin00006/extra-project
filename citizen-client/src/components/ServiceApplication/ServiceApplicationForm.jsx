"use client";

import { getBaseUrl } from "@/helpers/config/envConfig";
import useUserData from "@/hooks/useUserData";
import axios from "axios";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingModal from "../Home/LoadingModal";

const ServiceApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memberFee, setMemberFee] = useState(2500);

  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!memberFee) return toast.error("Please choice any member type");
    setIsLoading(true);

    const { name, mobileNumber, email, streetAddress, city, state } = e.target;

    const registrationData = {
      amount: Number(memberFee),
      user: userData?._id,
      name: name.value,
      phoneNumber: mobileNumber.value,
      email: email?.value,
      streetAddress: streetAddress.value,
      city: city.value,
      state: state.value,
      paymentType: "Bkash",
      selectMethod: "Bkash",
    };

    try {
      const { data } = await axios.post(
        `${getBaseUrl()}/bkash/payment/create`,
        registrationData,
        { withCredentials: true }
      );
      setIsLoading(false);
      window.location.href = data?.bkashURL;
      // window.location.href = data.bkashURL;
      // return data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    // e.target.reset();
  };

  if (isLoading) {
    <LoadingModal />;
  }
  return (
    <>
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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                লয়্যাল মেম্বার ফি (Choose Any One)
              </label>
              <ul className="list-style-none ml-4 space-y-2 text-sm text-gray-700 mt-2">
                <li>
                  <label>
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
                  <label>
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
                Payment Type
              </label>
              <ul className="list-style-none ml-4 space-y-2 text-sm text-gray-700 mt-2">
                <li>
                  <label>
                    <input
                      type="radio"
                      name="paymentType"
                      value="bkash"
                      required
                      defaultChecked
                    />
                    <span className="ml-2">Bkash</span>
                  </label>
                </li>
                {/* <li>
                  <label>
                    <input
                      type="radio"
                      name="paymentType"
                      value="Cash"
                      required
                    />
                    <span className="ml-2">Cash</span>
                  </label>
                </li> */}
              </ul>
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
    </>
  );
};

export default ServiceApplicationForm;
