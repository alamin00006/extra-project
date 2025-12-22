"use client";

import { getBaseUrl } from "@/helpers/config/envConfig";
import useUserData from "@/hooks/useUserData";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "@/app/loading";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Briefcase,
  CheckCircle,
  Clock,
  LocationEdit,
} from "lucide-react";
import { useRouter } from "next/navigation";

const WithoutPaymentReg = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, mobileNumber, address, occupation, email } = e.target;

    const registrationData = {
      name: name.value,
      phoneNumber: mobileNumber.value,
      email: email?.value ? email.value : null,
      occupation: occupation?.value ? occupation.value : null,
      address: address?.value ? address.value : null,
    };

    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${getBaseUrl()}/member/create-without-payment`,
        registrationData
      );

      router.push("/thank-you");
      e.target.reset();

      // Reset submitted state after 5 seconds
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        .primary-gradient {
          background: linear-gradient(135deg, #39bcbc, #2a8f8f);
        }
      `}</style>

      <div className="custom-container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mb-6 shadow-xl">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="md:text-3xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Membership <span style={{ color: "#39bcbc" }}>Registration</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Form Header with gradient */}
              <div className="bg-gradient-to-r from-cyan-400 to-teal-500 px-8 py-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white">
                    Registration Form
                  </h2>
                  <p className="text-cyan-100 mt-2">
                    Let us know about you, and {"we'll"} handle the rest
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900 dark:to-teal-900 flex items-center justify-center mr-2">
                        <User
                          className="w-4 h-4"
                          style={{ color: "#39bcbc" }}
                        />
                      </div>
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400 dark:bg-gray-700 dark:text-white"
                        required
                        placeholder="Enter your full name"
                        name="name"
                        defaultValue={userData?.fullName || ""}
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900 dark:to-teal-900 flex items-center justify-center mr-2">
                        <Phone
                          className="w-4 h-4"
                          style={{ color: "#39bcbc" }}
                        />
                      </div>
                      Contact Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400 dark:bg-gray-700 dark:text-white"
                        required
                        placeholder="Enter your phone number"
                        name="mobileNumber"
                        defaultValue={userData?.phoneNumber || ""}
                        onWheel={(e) => e.target.blur()}
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900 dark:to-teal-900 flex items-center justify-center mr-2">
                        <LocationEdit
                          className="w-4 h-4"
                          style={{ color: "#39bcbc" }}
                        />
                      </div>
                      Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="address"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400 dark:bg-gray-700 dark:text-white"
                        placeholder="Your current address"
                      />
                      <LocationEdit className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  {/* Occupation Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900 dark:to-teal-900 flex items-center justify-center mr-2">
                        <Briefcase
                          className="w-4 h-4"
                          style={{ color: "#39bcbc" }}
                        />
                      </div>
                      Occupation
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="occupation"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400 dark:bg-gray-700 dark:text-white"
                        placeholder="Your current occupation (optional)"
                      />
                      <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900 dark:to-teal-900 flex items-center justify-center mr-2">
                        <Mail
                          className="w-4 h-4"
                          style={{ color: "#39bcbc" }}
                        />
                      </div>
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full h-14 pl-12 pr-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-400 dark:bg-gray-700 dark:text-white"
                        placeholder="name@example.com (optional)"
                        name="email"
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Note Section */}
                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900 dark:to-teal-900 rounded-xl border border-cyan-100 dark:border-cyan-800">
                  <div className="flex items-start">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Note:</span> This is an
                        expression of interest form. Our team will contact you
                        to discuss membership options, fees, and complete the
                        registration process. No payment is required at this
                        stage.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto md:min-w-[320px] h-14 bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto text-lg"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-3" />
                        Submit
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          className: "rounded-xl",
          duration: 4000,
          style: {
            background: "#2a8f8f",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#39bcbc",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

// Info icon component
const InfoIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default WithoutPaymentReg;
